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
    "revision": "fe09e18a2e8e63c082ada387fb990d36"
  },
  {
    "url": "assets/css/0.styles.989bd272.css",
    "revision": "8c2f40cae43019f7b9ff886f2dc41030"
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
    "url": "assets/js/10.b1d598fc.js",
    "revision": "9765a2cc25817dfbb0f2a84a8231bcb4"
  },
  {
    "url": "assets/js/11.eecd503b.js",
    "revision": "bb91bfa52a7b84b8da47e2f6d2260098"
  },
  {
    "url": "assets/js/12.122321ef.js",
    "revision": "d4c9e1ebc95eec3b039b7eba4d7cffc9"
  },
  {
    "url": "assets/js/13.003c5fb5.js",
    "revision": "d5364b4a7ddaab6f97516c526ec347ee"
  },
  {
    "url": "assets/js/14.7845991f.js",
    "revision": "278df825f4a5f437c1a0fbcaa7549327"
  },
  {
    "url": "assets/js/15.21db4008.js",
    "revision": "521a1038c9d087b54157e9ea44211859"
  },
  {
    "url": "assets/js/16.e65f3c9e.js",
    "revision": "d8985fa9015cba5a7a7b5126da678b11"
  },
  {
    "url": "assets/js/17.9ee85a71.js",
    "revision": "f85e2fb61f767b40f3a6e6c7cc3bc11a"
  },
  {
    "url": "assets/js/18.f157032b.js",
    "revision": "4c2138bacd4cfd37bae8e7ab7ec09faa"
  },
  {
    "url": "assets/js/19.78c0de15.js",
    "revision": "a6524b38b57159a47273ca42d06ba20f"
  },
  {
    "url": "assets/js/2.74519023.js",
    "revision": "bbe179a7186dc734fa66513f3c010105"
  },
  {
    "url": "assets/js/3.f54bee01.js",
    "revision": "702ea09f18de3b4c487b9e215eeb1b9a"
  },
  {
    "url": "assets/js/4.f1685902.js",
    "revision": "d7859674b634cbdac690445522d0d938"
  },
  {
    "url": "assets/js/5.658e7bc4.js",
    "revision": "fbb3760a9fcdf2eed462fa55fca423a2"
  },
  {
    "url": "assets/js/6.cd4fb005.js",
    "revision": "b2888669d55da2b05d76d4233ff2ea8c"
  },
  {
    "url": "assets/js/7.00cff3dd.js",
    "revision": "06ba6b85b7ce84435e93b96ad2edb8c8"
  },
  {
    "url": "assets/js/8.587cea3c.js",
    "revision": "ba301bbd0a9f9244357f63796d44205c"
  },
  {
    "url": "assets/js/9.6ef94902.js",
    "revision": "0cbe7df237678280548aea8727e45479"
  },
  {
    "url": "assets/js/app.4a6565d4.js",
    "revision": "12e9ba85819d0402a573371e34890c6b"
  },
  {
    "url": "book-head-first-design-patterns/factory-pattern-(1)- factory-method-pattern.html",
    "revision": "16973a4cddd69f0585e31ec829f26194"
  },
  {
    "url": "book-head-first-design-patterns/factory-pattern-(2)-abstract-factory-fattern.html",
    "revision": "cf8ab6241f648e229b2b7246330a3420"
  },
  {
    "url": "book-head-first-design-patterns/strategy-pattern.html",
    "revision": "76dafc5eaac7ae603fa566b0c2f476fc"
  },
  {
    "url": "book-head-first-design-patterns/template-method-pattern.html",
    "revision": "ddb9a557563fe5fb8c11872c7e84568e"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "bf4be96084213711dc499818f0a968c9"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "804d50ac5bc832179136370f5e6c23ac"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "3cc4243b42f306970c30197ab1863bdb"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "e39117047792fbc1a43c974677547be0"
  },
  {
    "url": "etc/quickstart-guide to-til.html",
    "revision": "5e4419c8878e06113d53760e6a7726e4"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "64d809963281eda663611d6de120af9e"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "0fa5ac2f4d42a3dbfc2d3ba15681d84f"
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
