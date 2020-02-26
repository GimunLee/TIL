/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "73c7ed7ef1b10aac49f500f22df50080"
  },
  {
    "url": "assets/css/0.styles.5b4a8351.css",
    "revision": "5dfe1f9d97f7dbfac8bd7f58670015c1"
  },
  {
    "url": "assets/img/object-01-001.80ae796e.png",
    "revision": "80ae796eca46133c5f002cf4ca8be82b"
  },
  {
    "url": "assets/img/object-01-002.93ff0c51.png",
    "revision": "93ff0c51c4dfd089d6edd08077f5e177"
  },
  {
    "url": "assets/img/object-01-003.58f1ad81.png",
    "revision": "58f1ad81a80723e61e0775a37d1be563"
  },
  {
    "url": "assets/img/object-01-005.39ecb1fc.png",
    "revision": "39ecb1fce87070d2fc4894230bec95c7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.451d0664.js",
    "revision": "f0bba752e90d33d527e2172f7bc18e0a"
  },
  {
    "url": "assets/js/11.f9c1a2b3.js",
    "revision": "cd9e6ce7d269d8d126dc91dc92e93017"
  },
  {
    "url": "assets/js/12.beb864ac.js",
    "revision": "68bfe4bd1a859006d3e223029f14e5ff"
  },
  {
    "url": "assets/js/13.62bba629.js",
    "revision": "5637d84d89899e9e624fd3235d6dcabb"
  },
  {
    "url": "assets/js/2.35babf32.js",
    "revision": "b510449ff1f044db86ee9a86e864735b"
  },
  {
    "url": "assets/js/3.ddb3d15b.js",
    "revision": "918acc8bf95379b3d0ff6c72dc6664ad"
  },
  {
    "url": "assets/js/4.37b58198.js",
    "revision": "19df9e16bc1b31f52bd113d6e5bf23b0"
  },
  {
    "url": "assets/js/5.28484f06.js",
    "revision": "0aa4a921061900f2cd41d0ea54413160"
  },
  {
    "url": "assets/js/6.9e39bf3b.js",
    "revision": "af20163cc5f09241c3ecadc466e9bf64"
  },
  {
    "url": "assets/js/7.b7468fb2.js",
    "revision": "f57f51c024529d86647e3e10076616ff"
  },
  {
    "url": "assets/js/8.f9004d6b.js",
    "revision": "1781add1d66e3f77388ec47443c72129"
  },
  {
    "url": "assets/js/9.cbc89f05.js",
    "revision": "5a66d0227ad4e5322229e2da4a143d5b"
  },
  {
    "url": "assets/js/app.f998856c.js",
    "revision": "5f3cb6dd40ce68c79e3dded1d7b9949a"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "3e65d7b2bf10425c10cba6cb2ee1be7c"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "cf28bf6cc60307de47710d19aec54af6"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "5ee54bcf55d46f757e09a10ae4e0bc1c"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "2a12db1e7ff806550d922663e7fdbfe0"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "8825f212a04d82701b2806dffebe3e38"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "320b42dd41aeee7a2baed007c828594b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
