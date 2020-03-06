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
    "revision": "2e1e2f129bd537e3d45fbb60d03be567"
  },
  {
    "url": "assets/css/0.styles.d8fe680e.css",
    "revision": "1d519b9198d0ee19756b3586319647fa"
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
    "url": "assets/js/10.088bd933.js",
    "revision": "9613481d22f19eb1b9888870cc6aa209"
  },
  {
    "url": "assets/js/11.dfce26da.js",
    "revision": "aaf0f635a6c7a189924908f022e9663d"
  },
  {
    "url": "assets/js/12.51bd1c65.js",
    "revision": "75eda50d64434de46a086c43a4f0b8c2"
  },
  {
    "url": "assets/js/13.c9616371.js",
    "revision": "a7460e5364f556b914ecc106e3fc4480"
  },
  {
    "url": "assets/js/14.c33c2b99.js",
    "revision": "b88572b8bad7abf8ea73e23d422238d0"
  },
  {
    "url": "assets/js/15.7843b63b.js",
    "revision": "7b7f7d71c060f6802ee7a132d0f45562"
  },
  {
    "url": "assets/js/16.69ffcb4d.js",
    "revision": "ffb75c8b5d9929ce30d5fb6cd652ae80"
  },
  {
    "url": "assets/js/17.9524ffd6.js",
    "revision": "0e6d0a1acedfc00a3bc45354643acabc"
  },
  {
    "url": "assets/js/18.fdcfca6a.js",
    "revision": "5fe35779a410d276d8db19e4729f4a83"
  },
  {
    "url": "assets/js/19.78c0de15.js",
    "revision": "a6524b38b57159a47273ca42d06ba20f"
  },
  {
    "url": "assets/js/2.835d264a.js",
    "revision": "94a8d098af6a8a95ca04d87a84c2c6c4"
  },
  {
    "url": "assets/js/3.f37c2aef.js",
    "revision": "e17726e9b04f5107612850a76cbede35"
  },
  {
    "url": "assets/js/4.11df46e6.js",
    "revision": "131af85450c1ac106d680489ca376b14"
  },
  {
    "url": "assets/js/5.cf99a94d.js",
    "revision": "d1d0fdfc04d425675093ae6a2699ff73"
  },
  {
    "url": "assets/js/6.a099a1b4.js",
    "revision": "ba7c5f1d3114578f66ca206ace314bd9"
  },
  {
    "url": "assets/js/7.b4eab02b.js",
    "revision": "01e12c7fa0d593443e0e45bba90d258a"
  },
  {
    "url": "assets/js/8.c64e5585.js",
    "revision": "cfc8d75133c201483d8d0c61389d378b"
  },
  {
    "url": "assets/js/9.e4451b4b.js",
    "revision": "0dba7181891e51eaa8be558fe354f5c7"
  },
  {
    "url": "assets/js/app.64323e86.js",
    "revision": "67210f4b61eb9e56855db12467f10391"
  },
  {
    "url": "book-design-patterns/factory-pattern- factory-method-pattern.html",
    "revision": "6989317db910658d8abeebfdcf062967"
  },
  {
    "url": "book-design-patterns/factory-pattern-abstract-factory-fattern.html",
    "revision": "669ee5855cb1c7fb1c3eee2f5ccf3acf"
  },
  {
    "url": "book-design-patterns/strategy-pattern.html",
    "revision": "403cf36196f6f902121363c72b02027a"
  },
  {
    "url": "book-design-patterns/template-method-pattern.html",
    "revision": "c3732c217ac46ca5e613619b2c69c621"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "b6f3048b42d6e6d522d8083ea8883d1e"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "fbd3e48bc3bc529d17d9e2ed5ee1556a"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "36fa6a6e33c982f0d94c7786c299e413"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "f8198a6adfd8ecaeaa42c34546ef69a7"
  },
  {
    "url": "etc/quickstart-guide to-til.html",
    "revision": "fb82c28039669bb73c71642315bfd7a8"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "c9f0f71fec7169e0cd0d3c19017a6057"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "4d1e9963b8f5568298be3a6a16b8b6cd"
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
