"use strict";var precacheConfig=[["/index.html","2aa3929c9292fe541b13a8a8166a0cbd"],["/static/css/main.41d8d562.css","05b106f6f888d8b4a40eefc4d16af887"],["/static/js/main.5612ccee.js","abcd42094c55f62132cb001d27592e46"],["/static/media/1803pic.102359d8.png","102359d8451c3c213bcae73b2bdfcfd3"],["/static/media/chlogo.b52615ed.png","b52615ed422acfb4956f73d76133822b"],["/static/media/emailme.21e56401.jpg","21e56401cbc63081496d8abd9edd88b0"],["/static/media/mobile1.e4f431a7.png","e4f431a73fa72f0baaf70f978603dba8"],["/static/media/mobile2.1037f262.png","1037f262746242d1e6f025dbbf8f3c6a"],["/static/media/mobile3.703d18ce.png","703d18ce0a3d08e8e28207863f48ef8f"],["/static/media/mobile4.9bc222d2.png","9bc222d2c624d74a38fb9be66b234983"],["/static/media/mobile5.c5b1711a.png","c5b1711a58ae70e0e13c43ce4236022e"],["/static/media/mobile6.1a5b1e83.png","1a5b1e833d4a447caa0d94e09ce9da36"],["/static/media/mobile7.6212b042.png","6212b0422c3143eae09907065a01792a"],["/static/media/mobile8.f445abfe.png","f445abfe44d84bed27d21d57488b81a5"],["/static/media/profilepic.6a57050d.jpg","6a57050d351f6fb41dbfe6ca31830e57"],["/static/media/react.a70cd67c.jpg","a70cd67cb53751f9021d34a0ff5cd10d"],["/static/media/underconstuction.ef5af5ed.jpg","ef5af5edff2fba52f74e8d62323a4e9a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});