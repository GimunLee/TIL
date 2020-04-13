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
    "url": "assets/css/0.styles.46db6538.css",
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
    "url": "assets/img/web-server-and-was-001.a5c023cb.png",
    "revision": "a5c023cbb9feba29cdd51cf071c86c54"
  },
  {
    "url": "assets/js/10.c9d949dd.js",
    "revision": "c1b611c0764899759821432fc1518e75"
  },
  {
    "url": "assets/js/11.31ab9c9a.js",
    "revision": "4bbfe9209f5b868da2f0daea505835f9"
  },
  {
    "url": "assets/js/12.afef1f57.js",
    "revision": "6d1eaa1418a038c3441c3210933ffa37"
  },
  {
    "url": "assets/js/13.84a47fef.js",
    "revision": "8e6a4c5872dc62d3c31a1171dd654859"
  },
  {
    "url": "assets/js/14.ec9ef9b6.js",
    "revision": "65cc726ac2deda6314e94a938243c49c"
  },
  {
    "url": "assets/js/15.4d0fc6a7.js",
    "revision": "7256b4890d52a7d2d4a7d48f4de6cc36"
  },
  {
    "url": "assets/js/16.49fa39d2.js",
    "revision": "4ca176afd2bab841f5901df0ff7c3b53"
  },
  {
    "url": "assets/js/17.17d1e136.js",
    "revision": "b67cbddb7ebcc517ba7f2e16ae7b67a0"
  },
  {
    "url": "assets/js/18.e7bdd34c.js",
    "revision": "13f4cb6a709d89edbb84cafcb5252f0a"
  },
  {
    "url": "assets/js/19.56585133.js",
    "revision": "9fbac3e05d815852f4c241f3caf1e3be"
  },
  {
    "url": "assets/js/2.9db30c04.js",
    "revision": "240a9d6a108c382eff1fb23d9c1f546c"
  },
  {
    "url": "assets/js/20.274c20a3.js",
    "revision": "efedeeeeeed0ee90a44bca1a1e9f4ef2"
  },
  {
    "url": "assets/js/21.6df64d73.js",
    "revision": "f71a2394bb377827f5548be1d17e7200"
  },
  {
    "url": "assets/js/22.f46a550c.js",
    "revision": "27ce532c08ff4705ba1b94e60b6cd59b"
  },
  {
    "url": "assets/js/23.cc15b321.js",
    "revision": "f75421d93f8eca0403eae16037d3ff4c"
  },
  {
    "url": "assets/js/24.7e5255bc.js",
    "revision": "7cbebdd0571544a08c48590163171f9d"
  },
  {
    "url": "assets/js/25.54b08924.js",
    "revision": "61580d5012dc823021e7b5c242f6d836"
  },
  {
    "url": "assets/js/26.94445ca7.js",
    "revision": "1981869d20cb84dbafc21e3112d8e275"
  },
  {
    "url": "assets/js/3.9aab37b9.js",
    "revision": "45ac629bb2d641591e79d36881328362"
  },
  {
    "url": "assets/js/4.852ed032.js",
    "revision": "caab60d6f607af24fe93aebedf2788a7"
  },
  {
    "url": "assets/js/5.3c334078.js",
    "revision": "86f566359b468afb7d8f5a96cf5ece77"
  },
  {
    "url": "assets/js/6.efedf3f4.js",
    "revision": "b1944e5281ed054c0589850550ae8537"
  },
  {
    "url": "assets/js/7.1e143cc8.js",
    "revision": "473686bcd19177027e1183d28f9c8b2f"
  },
  {
    "url": "assets/js/8.c4b1f8f5.js",
    "revision": "0b21e3fb68eb0268a28be8ff348157e3"
  },
  {
    "url": "assets/js/9.e826514a.js",
    "revision": "183de45072dcce99c4b6061217127a8e"
  },
  {
    "url": "assets/js/app.e984348c.js",
    "revision": "fd0fda0675cf77cb11d2a0e711a5b307"
  },
  {
    "url": "book-angular-essentials/01. Angular의 소개와 특징.html",
    "revision": "7ea8cccab5b95881478a6fa63a3f0496"
  },
  {
    "url": "book-angular-essentials/02. Node.js와 npm.html",
    "revision": "22a65a1406d43c2dd36d9dd2e02cf02b"
  },
  {
    "url": "book-head-first-design-patterns/FP1 Factory Method Pattern.html",
    "revision": "1fda03b421473ce61375fe922e5e3232"
  },
  {
    "url": "book-head-first-design-patterns/FP2 Abstract Factory Pattern.html",
    "revision": "82e34ff7c9cf0971e08940b4a2f1ead9"
  },
  {
    "url": "book-head-first-design-patterns/Strategy Pattern.html",
    "revision": "86739f2628ac1fb519a35e6d48e9e877"
  },
  {
    "url": "book-head-first-design-patterns/Template Method Pattern.html",
    "revision": "179762a06bc049fdc76a888321b68ab6"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "665b5b7697b51e3e92545a147fc76861"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "503b5e6668ffb27145295354af7f24fb"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "53615ee4a926e396a9e03e4e812307c9"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "fba4e65b28dfb1a06eaa720782447ae1"
  },
  {
    "url": "etc/Memo.html",
    "revision": "afed7a4395517d7cd7e70f36f6a169fa"
  },
  {
    "url": "etc/Quick Start Guide to TIL.html",
    "revision": "7b360e4bf8a5bf7e690b5367988c0f27"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "8af8cd1965614ef41fd52f1b67012db4"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "4280ac6bc2adb9a305c7b3ceabea1ad8"
  },
  {
    "url": "web/Cross-Origin Resource Sharing.html",
    "revision": "96fd397fdbada8de996c2d7cf66e0190"
  },
  {
    "url": "web/HTTP 상태 코드.html",
    "revision": "b7096abe9b3b6599508466ba28c47954"
  },
  {
    "url": "web/Web Server와 WAS.html",
    "revision": "3eea4bc2dabbc71dfd2ec9efe7a746aa"
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
