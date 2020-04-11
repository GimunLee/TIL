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
    "url": "assets/css/0.styles.687ef1a0.css",
    "revision": "a26d8c22bdf43edd64753428556f6f77"
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
    "url": "assets/img/web-server-and-was-001.a5c023cb.png",
    "revision": "a5c023cbb9feba29cdd51cf071c86c54"
  },
  {
    "url": "assets/js/10.302e15a2.js",
    "revision": "c7d886e8d26a6c0d79fe9475c5075f6f"
  },
  {
    "url": "assets/js/11.9d242565.js",
    "revision": "ffb9f72bad319a28e884e4fcd1090bd2"
  },
  {
    "url": "assets/js/12.285dc9e2.js",
    "revision": "38619d50585e50fbac0b32c4bd5a94e9"
  },
  {
    "url": "assets/js/13.520a9dcd.js",
    "revision": "37c2aa6b4d443c8331b2405874d1f617"
  },
  {
    "url": "assets/js/14.3a6c6300.js",
    "revision": "fed62de4c305f2ec653e86d8d38824fa"
  },
  {
    "url": "assets/js/15.c15c7556.js",
    "revision": "08bfaab7e4b2c970b3d40d0ac6e09584"
  },
  {
    "url": "assets/js/16.fa0cf2d4.js",
    "revision": "a343ab7f3a8564db2345ee8aa7d9720d"
  },
  {
    "url": "assets/js/17.0754e7ce.js",
    "revision": "8b45ae61b84f05074a83cff28aa88253"
  },
  {
    "url": "assets/js/18.6b5f260a.js",
    "revision": "d1199632abd12ae79ec2837488772b00"
  },
  {
    "url": "assets/js/19.428b69e2.js",
    "revision": "8ffc7be9c65f189ed474baeda30c6dd3"
  },
  {
    "url": "assets/js/2.c7bfeef3.js",
    "revision": "077c8c9a8a385ae7d4b2bb8044a5d309"
  },
  {
    "url": "assets/js/20.d7bbf775.js",
    "revision": "79ab68985bc0933b65ce33eb4e6d9d69"
  },
  {
    "url": "assets/js/21.277469e7.js",
    "revision": "4e1f5ed12214e41652e29795a7356985"
  },
  {
    "url": "assets/js/22.c8df6fb1.js",
    "revision": "f4737241027b8810dbe6badd611d8b9d"
  },
  {
    "url": "assets/js/23.cf5ca6ab.js",
    "revision": "db2fab55f3d093102d5297c1990b16aa"
  },
  {
    "url": "assets/js/3.37868e3e.js",
    "revision": "10787ab01d4ecd570dad323ac57733b4"
  },
  {
    "url": "assets/js/4.5c87d885.js",
    "revision": "581215b6adbb10227cf27bbd3e1db8f1"
  },
  {
    "url": "assets/js/5.7de0eb20.js",
    "revision": "43baaf7c88724d3a926d52da28eaf786"
  },
  {
    "url": "assets/js/6.49a6b561.js",
    "revision": "e4507e259ac9f36c31eb165b1bb5176b"
  },
  {
    "url": "assets/js/7.5d9fb090.js",
    "revision": "2ac3c1dcc068fb7cd2ace6e40f5016e5"
  },
  {
    "url": "assets/js/8.1cea3e28.js",
    "revision": "f4b9b22367e004f0dd10f4ea032ff26a"
  },
  {
    "url": "assets/js/9.550c5920.js",
    "revision": "2406147220b1deb26c9ce83d9c5c195c"
  },
  {
    "url": "assets/js/app.93e26951.js",
    "revision": "659edab2c0d1b8189a255a1600c007cd"
  },
  {
    "url": "book-angular-essentials/Angular의 소개와 특징.html",
    "revision": "b853ddb9415535176f59137eb2017644"
  },
  {
    "url": "book-head-first-design-patterns/FP1 Factory Method Pattern.html",
    "revision": "fd469a9d19f42dbe671136a7399d073c"
  },
  {
    "url": "book-head-first-design-patterns/FP2 Abstract Factory Pattern.html",
    "revision": "41dfba3e51cf32ff81c10e18e73dfad9"
  },
  {
    "url": "book-head-first-design-patterns/Strategy Pattern.html",
    "revision": "3d009308d556222067fc210b5f3ce38c"
  },
  {
    "url": "book-head-first-design-patterns/Template Method Pattern.html",
    "revision": "96e27b72cac2c7eb35f90e506677c40d"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "08d4574cc4306feaaa40c5e7f55bc12b"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "d420155f410a5521ee8fbb3624599fab"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "64880b42ca32b1858217b338c6bf6ce9"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "50dd56677bee63bb591c4d4af9198a93"
  },
  {
    "url": "etc/Quick Start Guide to TIL.html",
    "revision": "7044b9c2eba09342add9be107c9aa7e4"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "48f69ad5b8ad2999dfa40b48efe2b022"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "9001fbe52f4e53b568e84df5a652a673"
  },
  {
    "url": "web/Cross-Origin Resource Sharing.html",
    "revision": "59477cf3581940de3136350d17caa6a6"
  },
  {
    "url": "web/HTTP 상태 코드.html",
    "revision": "5a4b9f099781cf972ad529a6e357c465"
  },
  {
    "url": "web/Web Server와 WAS.html",
    "revision": "0f980b05758d296c930686a736cffcc0"
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
