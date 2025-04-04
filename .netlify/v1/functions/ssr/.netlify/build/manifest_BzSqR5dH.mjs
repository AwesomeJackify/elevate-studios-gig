import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { w as NOOP_MIDDLEWARE_HEADER, x as decodeKey } from './chunks/astro/server_mq0E0Vla.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jackgong/Documents/Astro%20Media/elevate-studios-gig/","cacheDir":"file:///Users/jackgong/Documents/Astro%20Media/elevate-studios-gig/node_modules/.astro/","outDir":"file:///Users/jackgong/Documents/Astro%20Media/elevate-studios-gig/dist/","srcDir":"file:///Users/jackgong/Documents/Astro%20Media/elevate-studios-gig/src/","publicDir":"file:///Users/jackgong/Documents/Astro%20Media/elevate-studios-gig/public/","buildClientDir":"file:///Users/jackgong/Documents/Astro%20Media/elevate-studios-gig/dist/","buildServerDir":"file:///Users/jackgong/Documents/Astro%20Media/elevate-studios-gig/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about-us/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about-us","isIndex":false,"type":"page","pattern":"^\\/about-us\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us.astro","pathname":"/about-us","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"programs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/programs","isIndex":true,"type":"page","pattern":"^\\/programs\\/?$","segments":[[{"content":"programs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programs/index.astro","pathname":"/programs","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.CTbeyIGi.css"},{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}@font-face{font-family:Blacky;src:url(/fonts/Blacky.woff) format(\"woff\");font-style:normal;font-display:swap}@font-face{font-family:Montserrat;src:url(/fonts/montserrat/Montserrat-Thin.woff) format(\"woff\");font-weight:100;font-display:swap}@font-face{font-family:Montserrat;src:url(/fonts/montserrat/Montserrat-ExtraLight.woff) format(\"woff\");font-weight:200;font-display:swap}@font-face{font-family:Montserrat;src:url(/fonts/montserrat/Montserrat-Light.woff) format(\"woff\");font-weight:300;font-display:swap}@font-face{font-family:Montserrat;src:url(/fonts/montserrat/Montserrat-Regular.woff) format(\"woff\");font-weight:400;font-display:swap}@font-face{font-family:Montserrat;src:url(/fonts/montserrat/Montserrat-Medium.woff) format(\"woff\");font-weight:500;font-display:swap}@font-face{font-family:Montserrat;src:url(/fonts/montserrat/Montserrat-Bold.woff) format(\"woff\");font-weight:700;font-display:swap}@font-face{font-family:Montserrat;src:url(/fonts/montserrat/Montserrat-ExtraBold.woff) format(\"woff\");font-weight:800;font-display:swap}@font-face{font-family:Montserrat;src:url(/fonts/montserrat/Montserrat-Black.woff) format(\"woff\");font-weight:900;font-display:swap}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/pages/programs/[program].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/programs/[program]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/pages/services/[service].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services/[service]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/pages/about-us.astro",{"propagation":"none","containsHead":true}],["/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/pages/programs/index.astro",{"propagation":"none","containsHead":true}],["/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/pages/services/index.astro",{"propagation":"none","containsHead":true}],["/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about-us@_@astro":"pages/about-us.astro.mjs","\u0000@astro-page:src/pages/programs/[program]@_@astro":"pages/programs/_program_.astro.mjs","\u0000@astro-page:src/pages/programs/index@_@astro":"pages/programs.astro.mjs","\u0000@astro-page:src/pages/services/[service]@_@astro":"pages/services/_service_.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BzSqR5dH.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DF0FWsmK.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/about-us.jpg":"chunks/about-us_pQf_sQBt.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/hero/podcast.jpg":"chunks/podcast_9rlHvc63.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact1.jpg":"chunks/ourImpact1_CPwX08rs.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact10.jpg":"chunks/ourImpact10_DQkhWleI.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact11.jpeg":"chunks/ourImpact11_CZ_FACG7.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact12.jpeg":"chunks/ourImpact12_Bz3pspHw.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact13.jpeg":"chunks/ourImpact13_Cs4m5f3o.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact14.jpeg":"chunks/ourImpact14_DcXwMBcj.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact2.jpg":"chunks/ourImpact2_BfCbb-ZB.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact3.jpg":"chunks/ourImpact3_BcxtP8FD.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact4.jpg":"chunks/ourImpact4_UrVMT7Qh.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact5.jpg":"chunks/ourImpact5_DwLknwcv.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact6.jpg":"chunks/ourImpact6_BsGdNFId.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact7.jpg":"chunks/ourImpact7_BL8NhYzz.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact8.jpg":"chunks/ourImpact8_DoT_ajhf.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/our-impact/ourImpact9.jpg":"chunks/ourImpact9_bCoMcXvf.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/programs/elevate/elevate1.jpeg":"chunks/elevate1_CaUM44NE.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/programs/outsole/outsoleLogo.png":"chunks/outsoleLogo_qnbAUPyA.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/programs/kumete/kumeteLogo.png":"chunks/kumeteLogo_DtGJHa2s.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/programs/elevate/elevateLogo.png":"chunks/elevateLogo_Dsf__heh.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/programs/outsole/outsole1.jpg":"chunks/outsole1_BUUFmIvi.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/programs/kumete/kumete1.jpeg":"chunks/kumete1_DWwMr8zU.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/services/servicesBG.jpg":"chunks/servicesBG_BZh6PMvH.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/services/podcast-production.jpg":"chunks/podcast-production_BxH_nF1h.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_PDD4tf5U.mjs","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/components/Nav":"_astro/Nav.Bbm08-az.js","@astrojs/react/client.js":"_astro/client.BO3Rm8ny.js","/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.fbOF3SpK.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/ourImpact12.-VmG4Vo6.jpeg","/_astro/kumete1.DsJqcw7O.jpeg","/_astro/ourImpact11.DP97AX_h.jpeg","/_astro/podcast.CASCQpvg.jpg","/_astro/elevate1.425Lce-Q.jpeg","/_astro/ourImpact6.CUfrXraO.jpg","/_astro/servicesBG.B-LyrNFE.jpg","/_astro/ourImpact10.D3S0XQNU.jpg","/_astro/logo.HjfBEB5b.png","/_astro/elevateLogo.SA0A411J.png","/_astro/kumeteLogo.D-XmnNTN.png","/_astro/outsoleLogo.1igrLen9.png","/_astro/ourImpact7.CSojy2p4.jpg","/_astro/podcast-production.CACMx8nj.jpg","/_astro/ourImpact5.HU6Gd10n.jpg","/_astro/ourImpact1.D5eHhluK.jpg","/_astro/about-us.BOJ-eYGF.jpg","/_astro/ourImpact2.hlh0nAgc.jpg","/_astro/AstroMediaLogo.CVItoSma.svg","/_astro/outsole1.l7Y4NBCm.jpg","/_astro/ourImpact4.BZCTbmMu.jpg","/_astro/ourImpact3.C4BS74XO.jpg","/_astro/about-us.CTbeyIGi.css","/apple-touch-icon.png","/favicon-96x96.png","/favicon.ico","/favicon.svg","/site.webmanifest","/web-app-manifest-192x192.png","/web-app-manifest-512x512.png","/_astro/Nav.Bbm08-az.js","/_astro/client.BO3Rm8ny.js","/_astro/index.DEqwg3Z9.js","/_astro/index.Dy6lLLXr.js","/_astro/index.astro_astro_type_script_index_0_lang.fbOF3SpK.js","/fonts/Blacky.woff","/fonts/Montserrat.woff","/fonts/montserrat/Montserrat-Black.woff","/fonts/montserrat/Montserrat-Bold.woff","/fonts/montserrat/Montserrat-ExtraBold.woff","/fonts/montserrat/Montserrat-ExtraLight.woff","/fonts/montserrat/Montserrat-Italic.woff","/fonts/montserrat/Montserrat-Light.woff","/fonts/montserrat/Montserrat-Medium.woff","/fonts/montserrat/Montserrat-Regular.woff","/fonts/montserrat/Montserrat-Thin.woff","/about-us/index.html","/programs/index.html","/services/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"7B8maaBvbmQrAk8c8He9VQl5Dw7J22APg0AY5UeROWw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
