(()=>{"use strict";var e={136:()=>{try{self["workbox:core:7.2.0"]&&_()}catch(e){}},227:()=>{try{self["workbox:routing:7.2.0"]&&_()}catch(e){}},390:()=>{try{self["workbox:strategies:7.2.0"]&&_()}catch(e){}},447:()=>{try{self["workbox:precaching:7.2.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}s(136);const a=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class n extends Error{constructor(e,t){super(a(e,t)),this.name=e,this.details=t}}const i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[i.prefix,e,i.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||r(i.precache),o=e=>e||r(i.runtime);function h(e,t){const s=t();return e.waitUntil(s),s}s(447);function l(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),i=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:i.href}}class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let d;async function p(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new n("cross-origin-copy-response",{origin:s});const a=e.clone(),i={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=t?t(i):i,c=function(){if(void 0===d){const t=new Response("");if("body"in t)try{new Response(t.body),d=!0}catch(e){d=!1}d=!1}return d}()?a.body:await a.blob();return new Response(c,r)}function g(e,t){const s=new URL(e);for(const a of t)s.searchParams.delete(a);return s.href}class y{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const w=new Set;s(390);function v(e){return"string"==typeof e?new Request(e):e}class m{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new y,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=v(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(r){if(r instanceof Error)throw new n("plugin-error-request-will-fetch",{thrownErrorMessage:r.message})}const i=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:i,response:e});return e}catch(c){throw a&&await this.runCallbacks("fetchDidFail",{error:c,event:t,originalRequest:a.clone(),request:i.clone()}),c}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=v(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await c({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,t){const s=v(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const i=await this.getCacheKey(s,"write");if(!t)throw new n("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=g(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const c of r)if(n===g(c.url,s))return e.match(c,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(d){if(d instanceof Error)throw"QuotaExceededError"===d.name&&await async function(){for(const e of w)await e()}(),d}for(const n of this.iterateCallbacks("cacheDidUpdate"))await n({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=v(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class R{constructor(e={}){this.cacheName=o(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new m(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n("no-response",{url:t.url})}catch(i){if(i instanceof Error)for(const n of e.iterateCallbacks("handlerDidError"))if(a=await n({error:i,event:s,request:t}),a)break;if(!a)throw i}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(r){r instanceof Error&&(i=r)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class b extends R{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(b.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(!this._fallbackToNetwork)throw new n("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const n=a.integrity,i=e.integrity,r=!i||i===n;if(s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||n:void 0})),n&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,s.clone());0}}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new n("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==b.copyRedirectedCacheableResponsesPlugin&&(a===b.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(b.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}b.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},b.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await p(e):e};class C{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new b({cacheName:c(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=l(s),i="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,i),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return h(e,(async()=>{const t=new u;this.strategy.plugins.push(t);for(const[n,i]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(i),s=this._urlsToCacheModes.get(n),a=new Request(n,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:i},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return h(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}s(227);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"e70939a79aaabe74a6895e9e34b85b26","url":"404.html"},{"revision":"a72bc4396b794fde90f88fe7cc0dc85e","url":"about/index.html"},{"revision":"5d0a581538a2ec365f585c411a94d11a","url":"assets/css/styles.8cfe230c.css"},{"revision":"aaf03df7bc708f6d6f23f180b982f98f","url":"assets/js/01a85c17.1a80eee2.js"},{"revision":"8f1d7a18de3d43434a9971d8f16df9ec","url":"assets/js/03776394.190e969c.js"},{"revision":"b37dbc42d8009cb4a3a8c3b03e9a6eee","url":"assets/js/03c563a6.be531d73.js"},{"revision":"fb554a98c09bbacee26c7e145b7b5cc7","url":"assets/js/0a5fb440.15af3b10.js"},{"revision":"afc47d7d5893693cc69aa811fc4026f4","url":"assets/js/0e384e19.1ccba284.js"},{"revision":"093a75b3e8a067beea2f523d51f679fb","url":"assets/js/123b1878.1d4be9ac.js"},{"revision":"eb582a530fb7fd1570b5f1b751838bd6","url":"assets/js/14d8f51e.87f8c30a.js"},{"revision":"c151c71c4a593a5c7b31dd788829e2c8","url":"assets/js/14eb3368.6c8dbbc2.js"},{"revision":"064f34a4b3f74152e105c7870af2ab21","url":"assets/js/17896441.ea638155.js"},{"revision":"8fdaffd7509bef704217afaa05ec21ae","url":"assets/js/1f391b9e.02cfb271.js"},{"revision":"e74d5e2202a804ab00c1bc769a4baaf0","url":"assets/js/2abf67cb.5dc56eaa.js"},{"revision":"07a67fadf8e6939b389ed9241b89baec","url":"assets/js/2b46ba31.558bf46c.js"},{"revision":"00a1ac413bf2fb639827b5bccb7f0149","url":"assets/js/2d8714fc.4ccb5a45.js"},{"revision":"a71e2b762152ae969457b42467d73f90","url":"assets/js/2e03a1b6.4dc17dfb.js"},{"revision":"51448a071b450427e0a508a9c9510bb2","url":"assets/js/3042.92af4a32.js"},{"revision":"835ad06ce4f30312d24598d001208ee1","url":"assets/js/32657575.7122a0a5.js"},{"revision":"d2417b9c4d99031ec39ce3faae55ee71","url":"assets/js/33fc5bb8.5835cf15.js"},{"revision":"c246cb6d4bee9107285900e58517dc97","url":"assets/js/356a0ac6.c90353a5.js"},{"revision":"2ecc9d53c521f1fdb54e5b7782a490d8","url":"assets/js/36994c47.2daeff92.js"},{"revision":"dd8e7ec9dfc4a4bf82716aaded0df4f3","url":"assets/js/3721cbac.be2ef0b0.js"},{"revision":"f674e25967985385dbf949b040380904","url":"assets/js/38b8b680.c9737b23.js"},{"revision":"3ee3c4e258fdd480b3d51c476d1dcacb","url":"assets/js/393be207.66a681ef.js"},{"revision":"f0a89d501c90fb25e4a61b9020c4c34d","url":"assets/js/3d08cea5.cdb402e1.js"},{"revision":"e7ddd07415301cebc8760758bfa94132","url":"assets/js/4144ba2f.fbffc3f2.js"},{"revision":"94bd83c50deee73982b7714a242b239b","url":"assets/js/43d4e378.9255bf8a.js"},{"revision":"94b02d2235bb99d433f1994ca909a347","url":"assets/js/4582.f5791892.js"},{"revision":"6fdf956840c8b2bb36c87a4651ca9fd3","url":"assets/js/4620c9a7.1136c305.js"},{"revision":"1f36d0c64cdb104f759d342fc026b046","url":"assets/js/4622.dc17a2d6.js"},{"revision":"ffa858f4d0e624e6a1902f6edeb564dc","url":"assets/js/50551cfe.86e1065b.js"},{"revision":"48a4574e974cf53141df86e2eea95e95","url":"assets/js/5376b703.a106dcc3.js"},{"revision":"eaf2d2ec53099dfdfd06e7fa2ca45dcd","url":"assets/js/53e0ba64.3d9434b4.js"},{"revision":"974395acd4732bf3b1cd36ac07d22961","url":"assets/js/5a89a43e.e34fc9ba.js"},{"revision":"0befbf15a1a75c4181bf2c5fd57c8245","url":"assets/js/5e95c892.197cc474.js"},{"revision":"b7d215450f0c08d21512967b7910a267","url":"assets/js/5f2c10d0.12b31695.js"},{"revision":"ab9db1c9c370ef4fe1c3048044d6e792","url":"assets/js/5f31b32b.508a943e.js"},{"revision":"23c7806b8fe81ed9d8e8b3244a934926","url":"assets/js/6133ded0.ce7e089d.js"},{"revision":"d4c67aa6c06afa635f3b39d8a5d67eb4","url":"assets/js/621db11d.2721ba61.js"},{"revision":"e0979a1047470e6d17dcdfdbe7a2d371","url":"assets/js/6649.71ec55d9.js"},{"revision":"da9be4f4e72a3ab0bc173c26d3b03e51","url":"assets/js/66c10cbb.6be581c7.js"},{"revision":"ff32f705e33fa8b40cef125561e55fca","url":"assets/js/6875c492.5fcda24a.js"},{"revision":"2a319934d93eb8b165b20b9452ba57a3","url":"assets/js/81289993.25b72937.js"},{"revision":"00116e37bdb037027705933028b12d48","url":"assets/js/814f3328.119d3ab8.js"},{"revision":"40d494b89e02668d270b859e08996b49","url":"assets/js/827e13ca.97dd5182.js"},{"revision":"de24398b6d5b092b61a6b4e7daf484a1","url":"assets/js/82b4f0b4.0997ccb7.js"},{"revision":"949427b78e3e4bb6041965cc9cd81c96","url":"assets/js/9392.e8a9faaf.js"},{"revision":"8530c896d270a8a30a804df8e82a3eee","url":"assets/js/96877ea8.08eb0cb5.js"},{"revision":"574aabbe900f7ca6d82fbefa0ac69ca4","url":"assets/js/9730.8d7e422a.js"},{"revision":"797ab9e938ad11b5c4a2e7ce7964778b","url":"assets/js/9774cecf.7f209333.js"},{"revision":"8561229da3d8999d9c996219c70334af","url":"assets/js/97d5057a.bd7a2110.js"},{"revision":"13088d3a8680060123334de756cb97fc","url":"assets/js/9e4087bc.50665e88.js"},{"revision":"b67ecac9d9b8d2c4086bdb2d38949577","url":"assets/js/a0707248.b1102675.js"},{"revision":"305c196d27b0cd0d12a19e95d0ad1b17","url":"assets/js/a13a92ff.1314a993.js"},{"revision":"f3afc84d29fc7102356f52cf04404769","url":"assets/js/a530d6ea.08cf3123.js"},{"revision":"28bb5129a1970bcc3cec29d594d90b9c","url":"assets/js/a6aa9e1f.a8629c3c.js"},{"revision":"4bd98698bec96ea2be8cfe2e0b999f60","url":"assets/js/a7456010.485a56b7.js"},{"revision":"6f5b3f8b1b28e303bef45e1c8848ec76","url":"assets/js/a7bd4aaa.58e63522.js"},{"revision":"6a20dccac5761cafdc4bf926e71eadac","url":"assets/js/a94703ab.2aa9f2f3.js"},{"revision":"46d273ec0d381216aaf97506cc58a2e9","url":"assets/js/aba21aa0.5305564e.js"},{"revision":"37854d4d776ba4ac197b13e1a7c72a83","url":"assets/js/acd4050a.c330a226.js"},{"revision":"3a1c3725e5facff82ee0fa79331e4f14","url":"assets/js/acecf23e.a04bf178.js"},{"revision":"7993b02aaa02841c38aa418e9666e6ed","url":"assets/js/b4c618d8.719156e1.js"},{"revision":"c77e75a72a16722ad09ad1eefb9e4dfd","url":"assets/js/b8eba75d.e5b486f5.js"},{"revision":"732bef873a7ad531e84da56ca585c819","url":"assets/js/c4f5d8e4.aef82631.js"},{"revision":"4d764a2bc7b3dc7cf283c09766c0f5af","url":"assets/js/c8359ff0.f827edad.js"},{"revision":"3cbed5145a8e0941104df3b7be574605","url":"assets/js/ccc49370.99763d9b.js"},{"revision":"c023156f3a78b90c8934e3a22e749582","url":"assets/js/d07571c0.ecfa7962.js"},{"revision":"36f0c922aadae32acbc74e141106d58e","url":"assets/js/d357c422.304f2a56.js"},{"revision":"e29d9677c3bade08dd37e50704c1627f","url":"assets/js/d43df200.42da727a.js"},{"revision":"d7cc4432dd98c2c14232da79d8d43fc8","url":"assets/js/e4026566.f7ecae53.js"},{"revision":"bc3558bab4782bf47c75fe5621d019e6","url":"assets/js/ea6e827b.cab5812e.js"},{"revision":"553bc1f65aa47e01384e63145a460336","url":"assets/js/eaa6ca03.9ee8ddca.js"},{"revision":"391bc3ac2d8c81faee6081155a62d4c8","url":"assets/js/ecd4ee5d.5758700f.js"},{"revision":"f631e4c83c407734b3f314f14f503cae","url":"assets/js/ef1b4a25.d8a9b6dc.js"},{"revision":"2fe7ec71b837bf1b54d0a198b81e2ade","url":"assets/js/f2fc1323.4a00f6a3.js"},{"revision":"4b55554ad65085636c7e1029794b503e","url":"assets/js/f32f4d04.247cd400.js"},{"revision":"b3042ffbff468c3a410c388c23778942","url":"assets/js/f9e60c4e.e70caa62.js"},{"revision":"5e10151eff501814e426656499cae31a","url":"assets/js/fd4a2a17.71323a4b.js"},{"revision":"e66d525909a0088e4f5c2d60369d590f","url":"assets/js/main.2e09b987.js"},{"revision":"b99b3b66e63ad03cae03ed6f2021e018","url":"assets/js/runtime~main.3721a46b.js"},{"revision":"41779e9c794553ffb36e9f1a3f43115e","url":"blog/archive/index.html"},{"revision":"836506a0a36b71fb31885ccccde993f7","url":"blog/atom.css"},{"revision":"93190889ed74d75371ebbbf9a6ad5da0","url":"blog/authors/antoine/index.html"},{"revision":"0f8db43f9fe38ac6242c2f61c2b0167b","url":"blog/authors/index.html"},{"revision":"8b9b9302058acd2d7f0962ceee2d8512","url":"blog/create-api/index.html"},{"revision":"f4dcdd640799b050252d13345b870694","url":"blog/index.html"},{"revision":"836506a0a36b71fb31885ccccde993f7","url":"blog/rss.css"},{"revision":"38173240fdb68bbe7bb80c3867fd3c56","url":"blog/tags/api/index.html"},{"revision":"95f8cd74b0767c703bd8c35fb79299e1","url":"blog/tags/index.html"},{"revision":"c93af5c8da2a16a1bc5ed783b2a477e5","url":"contact/index.html"},{"revision":"aa7a205ba32fce3541a0ef4ec26ef15a","url":"docs/category/documentation/index.html"},{"revision":"a7f9708ea9832032986481d02a800ce7","url":"docs/category/formations--tutoriels/index.html"},{"revision":"c3f8a06830915eed2bdcca18a8accfb5","url":"docs/category/ressources/index.html"},{"revision":"8d8b97aa221e9f252baeddab8d5b2fae","url":"docs/CDA-2025/index.html"},{"revision":"8188ce8b271eec13854df6e45c6d2c34","url":"docs/documentation/Général/Analyse_conception/index.html"},{"revision":"780e3aaa35eb9738a8453a1e30d87dba","url":"docs/documentation/Général/API/index.html"},{"revision":"b7ab9c558a6152c574618164dcd1500b","url":"docs/documentation/Général/Architecture/index.html"},{"revision":"9835dd54637bebfafe7c9ee22cca9fcc","url":"docs/documentation/Général/Déploiement/index.html"},{"revision":"13d2a3007aec6485c2ff6b7aa15a78ed","url":"docs/documentation/Général/Design_patterns/index.html"},{"revision":"38789213ddd4e4dc337109456e3c84c8","url":"docs/documentation/Général/Divers/index.html"},{"revision":"46a6c51057c82756c5093a42e239c10e","url":"docs/documentation/Général/Git/index.html"},{"revision":"22eeee8d11e0ea985051ea0eef7aca11","url":"docs/documentation/Général/intro/index.html"},{"revision":"0ad458f58b618d4d4e4cbf057d69bb67","url":"docs/documentation/Général/POO/index.html"},{"revision":"1723b9e250ca963951ed7c9eeac9c6cd","url":"docs/documentation/Langages/Angular/index.html"},{"revision":"515114718943376347eb40b283c87b15","url":"docs/documentation/Langages/Database/index.html"},{"revision":"59c7fcefae0be0bc2ff2c8f8fd728535","url":"docs/documentation/Langages/Flutter/index.html"},{"revision":"3c2a741fe10920c3554354274b87b5c3","url":"docs/documentation/Langages/HTML_CSS/index.html"},{"revision":"81d88d7a384b557012bb52a23d74f175","url":"docs/documentation/Langages/intro/index.html"},{"revision":"fc78976f0409bcc64bbf870c4510af32","url":"docs/documentation/Langages/Java-Spring_boot/index.html"},{"revision":"69a1a5b6e3e7c62d80c34a6c77fae80f","url":"docs/documentation/Langages/JavaScript/index.html"},{"revision":"f1be394c229c67ffbc41b1dfc0f706a9","url":"docs/documentation/Langages/Kotlin/index.html"},{"revision":"68908bce64563dc3f48ebfece4f3df7f","url":"docs/documentation/Langages/Node.js-Express.js/index.html"},{"revision":"cf195b10ed447f6c15b7fde345a422bc","url":"docs/documentation/Langages/PHP-Symfony/index.html"},{"revision":"6a9a8aefa482767f042027f4fad89227","url":"docs/documentation/Langages/React.js/index.html"},{"revision":"038642edbf58129198ae95a11c14f8ed","url":"docs/documentation/Langages/TailwindCSS_Bootstrap/index.html"},{"revision":"a5843440308a967f60864b37a7a4f73b","url":"docs/documentation/Langages/TypeScript/index.html"},{"revision":"edbe2a47db5273b72cfbdcac3cff26a8","url":"docs/formations/Games/index.html"},{"revision":"f4a48b8ac2e249615f46a986bedae4e8","url":"docs/formations/React.js/index.html"},{"revision":"af27e17f51b8d814537584c4e0877175","url":"docs/formations/Ressources/index.html"},{"revision":"10269e051971a43842abf145bada9067","url":"docs/intro/index.html"},{"revision":"6a02d03340e4fab27f79fe560336c72c","url":"docs/ressources/API/index.html"},{"revision":"91bd395eb37db5760982cf43d93f9035","url":"docs/ressources/Cheatsheets/index.html"},{"revision":"bb8c5415093d0c31821ae3c52ec313b8","url":"docs/ressources/IA/index.html"},{"revision":"c6d19b7d7d26a9d10b8f0bf63bb057cb","url":"docs/ressources/Open-Source/index.html"},{"revision":"de51f8c7388b65c5834509479acb3991","url":"docs/ressources/Outils/index.html"},{"revision":"ee96c3e22b5abb2017e8a1e07f9dbe5c","url":"docs/ressources/Software/index.html"},{"revision":"95c1c965c80c661cf9e33bf00d685f97","url":"docs/ressources/UI/index.html"},{"revision":"090eb12ba7593f4843b2a25795820f6b","url":"index.html"},{"revision":"bc0b093e0d6d5f2ccbe2975b69e34795","url":"manisfest.json"},{"revision":"a2ef6cdcdbf40526d8a39ea9dcfdfc9c","url":"markdown-page/index.html"},{"revision":"a7e791d4a38fa40c1f07435e7e22a44b","url":"projects/intro/index.html"},{"revision":"d2ce42b340f708e18628b3afb5bbb9dd","url":"projects/portfolio-project/index.html"},{"revision":"d0bf72d3794bcd6e2999ce453d6074cb","url":"projects/westill-app/index.html"},{"revision":"8217651245412a4f9387c5be131e09f8","url":"assets/images/architecture_schema1-4607d53c441009fc16452058bad29e41.png"},{"revision":"0056fca131640928505c7055baaaa658","url":"assets/images/architecture_schema2-0f4c4d56252623bdf5d9dd9bf1d80293.png"},{"revision":"1551709a9ccb5129a479905ccee7de92","url":"assets/images/cda_calendrier-f9f44489f91fbb38800cd2214e6a0806.png"},{"revision":"fdd969487ad0bb48151a16972c076cf6","url":"assets/images/cda_ecf-1c831c3a6a3cc12fb05af6ee0d436a02.png"},{"revision":"68bd569be2bf11e6e04ed1f219a48dd0","url":"assets/images/kotlin_activity-lifecycle-161e4d01626377f7a91c27cc0fe12e39.png"},{"revision":"aadfa7e9810a3ec4c7ad8e453170fa02","url":"assets/images/kotlin_android-studio-809e894fcf7fbe040afece428714fd05.png"},{"revision":"1dfe9fc09f87769a478ecb9ddb3b5fe6","url":"assets/images/kotlin_design-kiss-f1a4bac71c85df472e7288cccb1fd579.png"},{"revision":"07d580cb7268fcdd3e8179488a65a027","url":"assets/images/kotlin_processus-api.drawio-5e650cea44521f8885b5729806b51332.png"},{"revision":"d618f8997f60878ada28873b913c0856","url":"assets/images/kotlin_schema_API-5387053a921a26cf1cb6a24494a81865.png"},{"revision":"44c02982d77a42339433458a330dfe3a","url":"assets/images/kotlin_traduction-739339d45f19febb4cc447c19d07baf0.png"},{"revision":"a59b26d9b67d1b08ecbfd023b72861df","url":"assets/images/kotlin_vulgarisation_mvvm-6cd8d0f6a11ef1e9099d5cb544b1ae0c.png"},{"revision":"2fbdf792951ccb9608719c98c2147806","url":"assets/images/portfolio_maquette-v1.drawio-3836563739b51b843ddabd7378250efd.png"},{"revision":"cf128fb989d678459f505fdd59c2e806","url":"assets/images/roadmap-ab156f44963aa87846e68fc91071d118.png"},{"revision":"f2e0d72191b8656703fc3a905f7b3e1b","url":"assets/images/roadmap2-5230742819388e8e62c8f5a9c2308165.png"},{"revision":"03d99bb75a01c0fe24de45b74fda0c84","url":"img/android-chrome-192x192.png"},{"revision":"a114c33cc509e05db9e47e37900238bb","url":"img/android-chrome-512x512.png"},{"revision":"16afbad14d29380b8d37c8011e454a21","url":"img/apple-touch-icon.png"},{"revision":"8217651245412a4f9387c5be131e09f8","url":"img/architecture_schema1.png"},{"revision":"0056fca131640928505c7055baaaa658","url":"img/architecture_schema2.png"},{"revision":"1551709a9ccb5129a479905ccee7de92","url":"img/cda_calendrier.png"},{"revision":"fdd969487ad0bb48151a16972c076cf6","url":"img/cda_ecf.png"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"be6cae646d81d701e99770db294ca912","url":"img/favicon-16x16.png"},{"revision":"a80488d77fa323352a07fe2d3ac11f0e","url":"img/favicon-32x32.png"},{"revision":"3bb59bf5f531578e308355eca81c2e52","url":"img/favicon.ico"},{"revision":"f2118a2780cf057c830b09fc45894026","url":"img/flutter_stateful-lifecycle.png"},{"revision":"68bd569be2bf11e6e04ed1f219a48dd0","url":"img/kotlin_activity-lifecycle.png"},{"revision":"aadfa7e9810a3ec4c7ad8e453170fa02","url":"img/kotlin_android-studio.png"},{"revision":"1dfe9fc09f87769a478ecb9ddb3b5fe6","url":"img/kotlin_design-kiss.png"},{"revision":"07d580cb7268fcdd3e8179488a65a027","url":"img/kotlin_processus-api.drawio.png"},{"revision":"d618f8997f60878ada28873b913c0856","url":"img/kotlin_schema_API.png"},{"revision":"44c02982d77a42339433458a330dfe3a","url":"img/kotlin_traduction.png"},{"revision":"a59b26d9b67d1b08ecbfd023b72861df","url":"img/kotlin_vulgarisation_mvvm.png"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"17fa0a93dffea528405b2f5110d36f76","url":"img/react_structure-projet.png"},{"revision":"cf128fb989d678459f505fdd59c2e806","url":"img/roadmap.png"},{"revision":"f2e0d72191b8656703fc3a905f7b3e1b","url":"img/roadmap2.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new C({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})();