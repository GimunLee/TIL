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
    "url": "assets/js/10.69f3633d.js",
    "revision": "4ad2f13ad70e99ceaf14eb4a3bdf715a"
  },
  {
    "url": "assets/js/11.8f6dd142.js",
    "revision": "b4611ee6d480ac941da88cfef97cb5dc"
  },
  {
    "url": "assets/js/12.e3e2ceaf.js",
    "revision": "fe9a6fa98c6c78b5ae8c6f3088b2110c"
  },
  {
    "url": "assets/js/13.bbf4de6a.js",
    "revision": "6d5438059632878a2f8ecc76f2038ec1"
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
    "url": "assets/js/16.4e3c0760.js",
    "revision": "433138af7c8a2bc31a210146fa1c011c"
  },
  {
    "url": "assets/js/17.8718bc61.js",
    "revision": "5041f9e3d848265362a6bfe7c51813c4"
  },
  {
    "url": "assets/js/18.c3c87f5a.js",
    "revision": "ecd67e3b5fe537e8dc28bd8993735b90"
  },
  {
    "url": "assets/js/19.f8c5d3f2.js",
    "revision": "ee6ad5fe5fa90eb24331ea99aa83e9fb"
  },
  {
    "url": "assets/js/2.c7bfeef3.js",
    "revision": "077c8c9a8a385ae7d4b2bb8044a5d309"
  },
  {
    "url": "assets/js/20.56eb2561.js",
    "revision": "8e68c6432fe3ea878d4196375d6d0374"
  },
  {
    "url": "assets/js/21.c3d8eec3.js",
    "revision": "f1c55d1728f1ad89814f9859d24be9e4"
  },
  {
    "url": "assets/js/22.ed79849b.js",
    "revision": "b3ac97f44e436cf231195babb3fad2e7"
  },
  {
    "url": "assets/js/23.8d1bdd51.js",
    "revision": "67dc84a8a07d37691661e2385b91f3d8"
  },
  {
    "url": "assets/js/24.8d4ee3c4.js",
    "revision": "b43ea8ab8b829d2b411e33d8d5515d41"
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
    "url": "assets/js/7.1eb38b2b.js",
    "revision": "6de9d8c28e9ae91a10ff97dc7f967b88"
  },
  {
    "url": "assets/js/8.408e9af3.js",
    "revision": "4728f879d10de828fe2fa0a82129da71"
  },
  {
    "url": "assets/js/9.550c5920.js",
    "revision": "2406147220b1deb26c9ce83d9c5c195c"
  },
  {
    "url": "assets/js/app.f4f14689.js",
    "revision": "350c0274e6896556e35451be56d59d55"
  },
  {
    "url": "book-angular-essentials/01. Angular의 소개와 특징.html",
    "revision": "5181f94fe807e359d3a0f8d1facdd635"
  },
  {
    "url": "book-angular-essentials/02. Node.js와 npm.html",
    "revision": "abdc55bbfb22f3fd8e676c3c835652e7"
  },
  {
    "url": "book-head-first-design-patterns/FP1 Factory Method Pattern.html",
    "revision": "bc43a306a4e7c572b673efb5879e6608"
  },
  {
    "url": "book-head-first-design-patterns/FP2 Abstract Factory Pattern.html",
    "revision": "c2a4f0fdbf19c178159cfb932995750c"
  },
  {
    "url": "book-head-first-design-patterns/Strategy Pattern.html",
    "revision": "3d87cf2d7e677cb49252c33d92e51ada"
  },
  {
    "url": "book-head-first-design-patterns/Template Method Pattern.html",
    "revision": "c4b96c707ebe684cbcc2e874e55c417c"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "b8772fb4a132ebcd2e44e2ba122b6675"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "5a815cb396e269e24143cd480384e4de"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "b8a31a8ab19bcac9db74034aee9da0af"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "7f5746ed2eb0c02d903e577520160ead"
  },
  {
    "url": "etc/Quick Start Guide to TIL.html",
    "revision": "6eb02d810b482fb3c3cdfac77839987e"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "004bb306eacca44d4ba32f6d68130121"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "3611b3304effeb11143ea9fb93bb6fb6"
  },
  {
    "url": "web/Cross-Origin Resource Sharing.html",
    "revision": "d88273bfd63a5d804066c8acc1ef1eb7"
  },
  {
    "url": "web/HTTP 상태 코드.html",
    "revision": "45210d7c10839ee228ca13dd83a997e0"
  },
  {
    "url": "web/Web Server와 WAS.html",
    "revision": "111e6066f5e8524cea6de3236d689f72"
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
