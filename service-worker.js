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
    "revision": "c589e2dbfd44d3e3c299b79e5b01b08b"
  },
  {
    "url": "assets/css/0.styles.579c7813.css",
    "revision": "07e411f573607a4158100e470b88694e"
  },
  {
    "url": "assets/img/cors-001.c274d3ad.png",
    "revision": "c274d3ad68f9b67e9509024793d3c729"
  },
  {
    "url": "assets/img/factory-pattern-01-001.3a74ceb4.png",
    "revision": "3a74ceb46eb89dc6b111b2ad1711127a"
  },
  {
    "url": "assets/img/factory-pattern-01-002.9b373c60.png",
    "revision": "9b373c60455528c409f5e7f91a0784f9"
  },
  {
    "url": "assets/img/factory-pattern-01-003.bd304546.png",
    "revision": "bd304546bd06bffe3b36b3653be814e8"
  },
  {
    "url": "assets/img/factory-pattern-01-004.1968920c.png",
    "revision": "1968920c102ac10d4d116a425f2ec58f"
  },
  {
    "url": "assets/img/factory-pattern-01-005.87c4dbb9.png",
    "revision": "87c4dbb9cde7b3fc545c8506b4fb7504"
  },
  {
    "url": "assets/img/factory-pattern-02-001.73190c2f.png",
    "revision": "73190c2fc2fa736a803f9051c0542112"
  },
  {
    "url": "assets/img/factory-pattern-02-002.8b506d9f.png",
    "revision": "8b506d9fc45945b9a5db6de2ae1b1f33"
  },
  {
    "url": "assets/img/factory-pattern-02-004.25842e1e.png",
    "revision": "25842e1e90e54cb815510ad5689149dd"
  },
  {
    "url": "assets/img/factory-pattern-02-005.36fc4ce3.png",
    "revision": "36fc4ce3144aa910febca19b3245acad"
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
    "url": "assets/img/quickstart-guide to-til-001.97e4e39a.png",
    "revision": "97e4e39a3bcb6c17f917f1494c3c31fa"
  },
  {
    "url": "assets/img/quickstart-guide to-til-002.1f723723.png",
    "revision": "1f72372396e1607b45860a89fb05bc08"
  },
  {
    "url": "assets/img/quickstart-guide to-til-003.22955794.png",
    "revision": "2295579439a9b79bb8576e60fa7324bf"
  },
  {
    "url": "assets/img/quickstart-guide to-til-004.a8803f33.png",
    "revision": "a8803f3367558fc9b64ea5cae65b7cef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/strategy-pattern-001.7defefca.png",
    "revision": "7defefca3aaec34b7f7879c82b537676"
  },
  {
    "url": "assets/img/strategy-pattern-002.5cfd4112.png",
    "revision": "5cfd4112ac0318cb13ffcc604f526469"
  },
  {
    "url": "assets/img/strategy-pattern-003.8db9d810.png",
    "revision": "8db9d8102e84582da7c96d1909dfee8e"
  },
  {
    "url": "assets/img/strategy-pattern-004.3b988949.png",
    "revision": "3b9889491f7482be0d67c34e870cbddb"
  },
  {
    "url": "assets/img/strategy-pattern-005.691c75a6.png",
    "revision": "691c75a61299ee00d849b8eb73c85743"
  },
  {
    "url": "assets/img/strategy-pattern-006.aac7845a.png",
    "revision": "aac7845a74389d40d509f958455a55fe"
  },
  {
    "url": "assets/img/strategy-pattern-007.ba81840b.png",
    "revision": "ba81840bda45e473ef03c311dbcc2b8a"
  },
  {
    "url": "assets/img/strategy-pattern-008.8bece458.png",
    "revision": "8bece4588baab71ec16c8ac46be0d331"
  },
  {
    "url": "assets/img/strategy-pattern-009.295ac917.png",
    "revision": "295ac91716c048bf4c007cdfa520d5df"
  },
  {
    "url": "assets/img/strategy-pattern-010.a595cb02.png",
    "revision": "a595cb0288dfb0f072ddf34074f513a0"
  },
  {
    "url": "assets/img/template-method-pattern-001.b98898f2.png",
    "revision": "b98898f2caa98b24a6b0bade97de1008"
  },
  {
    "url": "assets/js/10.cd05e6f3.js",
    "revision": "e5561024ff105b89090a81a45929b0dd"
  },
  {
    "url": "assets/js/11.3e01e36f.js",
    "revision": "f114fe746ef53900a2595f9660d9dd68"
  },
  {
    "url": "assets/js/12.eb477d92.js",
    "revision": "44a06d5e9bc558222619fa397a3cb64b"
  },
  {
    "url": "assets/js/13.c28cd75e.js",
    "revision": "08bad8817a7724f1b4bb15851a8faa17"
  },
  {
    "url": "assets/js/14.6a7848a8.js",
    "revision": "9011b34c054dea1377201a052125fd2c"
  },
  {
    "url": "assets/js/15.32d9ef04.js",
    "revision": "5eaef5c54b82d275c64e778d9af4ef15"
  },
  {
    "url": "assets/js/16.1b5d5bff.js",
    "revision": "de2e36175fdc08671a0cf83b398ad68f"
  },
  {
    "url": "assets/js/17.2be98ef3.js",
    "revision": "bbcb76c6aa6939109868564ba4a34d2d"
  },
  {
    "url": "assets/js/18.afaa54ad.js",
    "revision": "d389d24411850b1dddb2b683f57223c5"
  },
  {
    "url": "assets/js/19.e662434d.js",
    "revision": "a09a9f9e31a864bc64371c559246be52"
  },
  {
    "url": "assets/js/2.c9aa8b3b.js",
    "revision": "f154e18f9ee4a8e17b6a8a42c13cdef5"
  },
  {
    "url": "assets/js/20.5fbd3212.js",
    "revision": "3be3aecad7cad39906f7270f4c06ab25"
  },
  {
    "url": "assets/js/3.bbf6cd0d.js",
    "revision": "c71a59025db677fe26a2b931e3af1ac9"
  },
  {
    "url": "assets/js/4.8e37a8cc.js",
    "revision": "410b8561af6507a87a8a3f2729dd4d8c"
  },
  {
    "url": "assets/js/5.3ee17372.js",
    "revision": "3a86094f4bc0a21a658adfca063d9613"
  },
  {
    "url": "assets/js/6.2e860f05.js",
    "revision": "051d4822d60b0aaa4a98ac740a705427"
  },
  {
    "url": "assets/js/7.c0908ea3.js",
    "revision": "d286973d68ef7909a2c4027cce097a4a"
  },
  {
    "url": "assets/js/8.44cacfc2.js",
    "revision": "392a43625b247ca4b841d3bd1d1d7806"
  },
  {
    "url": "assets/js/9.49160cbb.js",
    "revision": "967b4303e5af48cbbc64c1eb7a47503c"
  },
  {
    "url": "assets/js/app.66da4d27.js",
    "revision": "0e2bea0421c1338bb3f34bc817bd8d69"
  },
  {
    "url": "book-head-first-design-patterns/FP1 Factory Method Pattern.html",
    "revision": "2fc55514cd632e09ae08be8d0b9d9031"
  },
  {
    "url": "book-head-first-design-patterns/FP2 Abstract Factory Pattern.html",
    "revision": "4760bb83e9070c43ea942d842305318c"
  },
  {
    "url": "book-head-first-design-patterns/Strategy Pattern.html",
    "revision": "8039602ade7d27f0ad0bc2efe3c1d661"
  },
  {
    "url": "book-head-first-design-patterns/Template Method Pattern.html",
    "revision": "bc57195c500e685981fb4de82079d049"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "a61e3aede7b8742fe1087502fc8bf1ca"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "1177fe5be992670f2bb42489f2efd13e"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "9562081e31b637010f12265072eb6ab5"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "961e4c1da3b609933b0fbbdf961ef3ab"
  },
  {
    "url": "etc/Quick Start Guide to TIL.html",
    "revision": "d33b445796cbeabe220e9a0a491f3270"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "4d901d0d44a97c8240a3450f88467975"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "d66c1868f36a04763af12f0b654ffeef"
  },
  {
    "url": "web/Cross-Origin Resource Sharing.html",
    "revision": "5847540c4e0d561b55110e2825d81d8f"
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
