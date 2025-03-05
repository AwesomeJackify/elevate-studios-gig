import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BzSqR5dH.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about-us.astro.mjs');
const _page2 = () => import('./pages/programs/_program_.astro.mjs');
const _page3 = () => import('./pages/programs.astro.mjs');
const _page4 = () => import('./pages/services/_service_.astro.mjs');
const _page5 = () => import('./pages/services.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-us.astro", _page1],
    ["src/pages/programs/[program].astro", _page2],
    ["src/pages/programs/index.astro", _page3],
    ["src/pages/services/[service].astro", _page4],
    ["src/pages/services/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a93d30ef-85c4-4d42-ba9b-3dbe2aa61f1e"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
