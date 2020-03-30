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
    "url": "assets/css/0.styles.929f1c28.css",
    "revision": "1eeefadb55724b6e76a5255e995d3cf1"
  },
  {
    "url": "assets/img/cors-001.edb76f88.png",
    "revision": "edb76f885c827e34428cca3ef7b62134"
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
    "url": "assets/js/10.902b24b0.js",
    "revision": "c6eb04bca482d868a1c6ea14f800ec30"
  },
  {
    "url": "assets/js/11.d6126d86.js",
    "revision": "ce7fb4d64c1a76858c59a7b595034c8e"
  },
  {
    "url": "assets/js/12.f80b59ac.js",
    "revision": "6e1a19bdfa3e3772d2d4352eb9c7509c"
  },
  {
    "url": "assets/js/13.9c4f763c.js",
    "revision": "24ffd166dbee9d4c0fba7ac4ef0fe6fa"
  },
  {
    "url": "assets/js/14.3cc9f935.js",
    "revision": "e7d7d2a8b7801ac2ea80275060b75128"
  },
  {
    "url": "assets/js/15.64a3ecd6.js",
    "revision": "d283785876de19b75f9df531100ba78f"
  },
  {
    "url": "assets/js/16.33014eaf.js",
    "revision": "24721fe12eb6298b19d3579e3afe50aa"
  },
  {
    "url": "assets/js/17.9ca03ad8.js",
    "revision": "4ba2a93e8202ee207de2a36d07a71001"
  },
  {
    "url": "assets/js/18.d073338c.js",
    "revision": "1935d75a3d180cd9de7fdb4eca8aaad8"
  },
  {
    "url": "assets/js/19.8902b94b.js",
    "revision": "08e2b86be5f0741c464b16d964faf843"
  },
  {
    "url": "assets/js/2.784b533f.js",
    "revision": "279c5564c483cd4eedf9e9e826a507f3"
  },
  {
    "url": "assets/js/20.f2fd1619.js",
    "revision": "d0f7262d4f97200038ac3a25b9f344b9"
  },
  {
    "url": "assets/js/21.65951c33.js",
    "revision": "1e7c4867bbc1ce2c5f014c8b87265d2b"
  },
  {
    "url": "assets/js/22.b7d7c59f.js",
    "revision": "68e8cf07e865f7bf1f81807a16fb9665"
  },
  {
    "url": "assets/js/23.fa81edcd.js",
    "revision": "67dc84a8a07d37691661e2385b91f3d8"
  },
  {
    "url": "assets/js/24.85e590d6.js",
    "revision": "7496765a4d8f233d62a58823d83f33c3"
  },
  {
    "url": "assets/js/3.5b1cca46.js",
    "revision": "78867990fc2edfea351d42380e388f4a"
  },
  {
    "url": "assets/js/4.3e136df7.js",
    "revision": "3bf77f8c83e512f166397c67e19395a0"
  },
  {
    "url": "assets/js/5.3ee587e1.js",
    "revision": "cfe01efd1b3465e046c8d166e53cf79f"
  },
  {
    "url": "assets/js/6.3c808f01.js",
    "revision": "73ba0ab4823c7b9592bd02b51b23dcd2"
  },
  {
    "url": "assets/js/7.e54561d7.js",
    "revision": "fbd50cc77814072ce85462ecf9b0e5cd"
  },
  {
    "url": "assets/js/8.83a53dae.js",
    "revision": "21cae26296176f823cb0380af06800d4"
  },
  {
    "url": "assets/js/9.ea1ef408.js",
    "revision": "88bec77c9a4082f27886861b75c1215f"
  },
  {
    "url": "assets/js/app.3739ed66.js",
    "revision": "9b2ac522a616b2e4efda216b273ee62f"
  },
  {
    "url": "book-head-first-design-patterns/FP1 Factory Method Pattern.html",
    "revision": "74b29d2d9550ca7e9c9f7d9ab02e41ec"
  },
  {
    "url": "book-head-first-design-patterns/FP2 Abstract Factory Pattern.html",
    "revision": "789af26f3e0fcc2d0b8749452c592b87"
  },
  {
    "url": "book-head-first-design-patterns/Strategy Pattern.html",
    "revision": "346b0a97a5fa9e8143cec1ba185e91d7"
  },
  {
    "url": "book-head-first-design-patterns/Template Method Pattern.html",
    "revision": "dee546a64fcb8ea3791654c415b52fcb"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "e7e23b68a68c1a0c978ba583c3db2b96"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "de55c2fe21808d750ca2089ef5ffe3ea"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "eed928aa8d5fea635eb0bbef99061140"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "15b6e1a272a35fcb589957ccaec57558"
  },
  {
    "url": "etc/Quick Start Guide to TIL.html",
    "revision": "b0d6957458f5cdc5f481c24cb2d4166b"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "c0d8078c0c45494e7fa0bd669cfacab6"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "1d788bf0ec3fc7822cbedc241a22de12"
  },
  {
    "url": "web/Cross-Origin Resource Sharing.html",
    "revision": "c774d27404e39069f0e53ad5fee0c147"
  },
  {
    "url": "web/HTTP 상태 코드.html",
    "revision": "7ea0d3b00972db634e93954c2e7f5646"
  },
  {
    "url": "web/test.html",
    "revision": "95e0508bd52ee25354b65b6366cb0b8e"
  },
  {
    "url": "web/Web Server와 WAS.html",
    "revision": "9c9bda4f0000fe5c9cc2fd97b850d3ea"
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
