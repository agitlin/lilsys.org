import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, e as decodeKey } from './chunks/astro/server_BL4-wTnv.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/","adapterName":"","routes":[{"file":"file:///sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/dist/articles/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://lilsys.org","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/articles/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/about.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/articles/[slug]@_@astro":"pages/articles/_slug_.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DSqQWeDc.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/center-hustle-core-values.md?astroContentCollectionEntry=true":"chunks/center-hustle-core-values_DFLfK3YE.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/dxf-layers-as-life-metaphor.md?astroContentCollectionEntry=true":"chunks/dxf-layers-as-life-metaphor_HpsikB9t.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/job-architecture-wishlist.md?astroContentCollectionEntry=true":"chunks/job-architecture-wishlist_Dc5vu_ZN.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/lilsys-realization.md?astroContentCollectionEntry=true":"chunks/lilsys-realization_GLEJPswI.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/successful-wfh-day.md?astroContentCollectionEntry=true":"chunks/successful-wfh-day_E32RnjHa.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/center-hustle-core-values.md?astroPropagatedAssets":"chunks/center-hustle-core-values_CX4uChgw.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/dxf-layers-as-life-metaphor.md?astroPropagatedAssets":"chunks/dxf-layers-as-life-metaphor_CW6-fMNR.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/job-architecture-wishlist.md?astroPropagatedAssets":"chunks/job-architecture-wishlist_iMOJ5pgk.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/lilsys-realization.md?astroPropagatedAssets":"chunks/lilsys-realization_DoiRk0AR.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/successful-wfh-day.md?astroPropagatedAssets":"chunks/successful-wfh-day_BpkFH5Ds.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/center-hustle-core-values.md":"chunks/center-hustle-core-values_B5oeIfBS.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/dxf-layers-as-life-metaphor.md":"chunks/dxf-layers-as-life-metaphor_DgPqQ8ZM.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/job-architecture-wishlist.md":"chunks/job-architecture-wishlist_CWaYl5VW.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/lilsys-realization.md":"chunks/lilsys-realization_CAArmlRj.mjs","/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/successful-wfh-day.md":"chunks/successful-wfh-day_BcI7Lboi.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/dist/about/index.html","/file:///sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/dist/articles/index.html","/file:///sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/dist/tags/index.html","/file:///sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Hujpe+kFSvy+LRMx6d68eCjGuWIEwKysFT8FJVnIR7g=","experimentalEnvGetSecretEnabled":false});

export { manifest };
