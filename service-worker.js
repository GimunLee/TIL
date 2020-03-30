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
    "url": "assets/img/web-server-was-diff-001.a5c023cb.png",
    "revision": "a5c023cbb9feba29cdd51cf071c86c54"
  },
  {
    "url": "assets/js/10.1e682ff0.js",
    "revision": "4a5f5f873b9c95baf983c0c34bfaaef1"
  },
  {
    "url": "assets/js/11.07e5efb8.js",
    "revision": "25a2067ebb3fb5c865b59d27033dcdc9"
  },
  {
    "url": "assets/js/12.343c60d7.js",
    "revision": "92f80dbac6acd79eccac4aa4b71b87fb"
  },
  {
    "url": "assets/js/13.7f376caa.js",
    "revision": "40da0283c8aaa170282ace06a092dca7"
  },
  {
    "url": "assets/js/14.b0eea229.js",
    "revision": "719b5a799b04306ca2e872bfb3dbba1c"
  },
  {
    "url": "assets/js/15.f79bcc27.js",
    "revision": "d0f5f6aea663468481155752ec562a1f"
  },
  {
    "url": "assets/js/16.c9dd6f5f.js",
    "revision": "f7283d47a882c3688b6386b1b7d84052"
  },
  {
    "url": "assets/js/17.07c45c0a.js",
    "revision": "350a8522c85e88d2c6895d71a356652c"
  },
  {
    "url": "assets/js/18.cf7aa200.js",
    "revision": "ae377870a36d62c817c33893973e4103"
  },
  {
    "url": "assets/js/19.65f452b5.js",
    "revision": "7d1fd07eff4b71e48b16991fdac5f9ba"
  },
  {
    "url": "assets/js/2.8a9cf6af.js",
    "revision": "d72e982e882017ae9b705e4dc54c6e80"
  },
  {
    "url": "assets/js/20.d440ab23.js",
    "revision": "cfb16d74b0ab9517a82e95ae9cc3b490"
  },
  {
    "url": "assets/js/21.9a909236.js",
    "revision": "bd9b0b771e156d8ee8dc04e669950cb8"
  },
  {
    "url": "assets/js/22.c80f434d.js",
    "revision": "ecbbd9e34337c65f7c6d9b1c96001fb0"
  },
  {
    "url": "assets/js/23.fa81edcd.js",
    "revision": "67dc84a8a07d37691661e2385b91f3d8"
  },
  {
    "url": "assets/js/24.bae37ebf.js",
    "revision": "9a55d331ba097eee086732b90603ca49"
  },
  {
    "url": "assets/js/3.4998659b.js",
    "revision": "f840e25601d19aa3befe0cd4f490284b"
  },
  {
    "url": "assets/js/4.415ecb96.js",
    "revision": "feefab5f18bc52bd35626a7bc47b6a12"
  },
  {
    "url": "assets/js/5.4b988e11.js",
    "revision": "2f1bbb771746295d24f30623ca143db9"
  },
  {
    "url": "assets/js/6.89413724.js",
    "revision": "099ed9f3e14fa802efb8484ce1cbc30b"
  },
  {
    "url": "assets/js/7.f2a4517c.js",
    "revision": "22d18f16645c3cd4f7040c352b4bc37f"
  },
  {
    "url": "assets/js/8.6ee72012.js",
    "revision": "db0697bc1f1c532f7213bf084ef6dd4b"
  },
  {
    "url": "assets/js/9.0622636d.js",
    "revision": "2ab54ce166fbb3257fa003ff784142c9"
  },
  {
    "url": "assets/js/app.0e5e36e1.js",
    "revision": "52dc9668586b936f469d3bd8e19f2382"
  },
  {
    "url": "book-head-first-design-patterns/FP1 Factory Method Pattern.html",
    "revision": "1190b4d5e4ffda8bbc01057db1fe73a3"
  },
  {
    "url": "book-head-first-design-patterns/FP2 Abstract Factory Pattern.html",
    "revision": "a3fba5843a47eb70c1c023864de9517c"
  },
  {
    "url": "book-head-first-design-patterns/Strategy Pattern.html",
    "revision": "a288dbe4992cf497b11304a1d5a86b31"
  },
  {
    "url": "book-head-first-design-patterns/Template Method Pattern.html",
    "revision": "88ad801da622822e6bd665952ad5f2ee"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "6365202fbe291b191b77534b5e08b5e4"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "c38dea7959246670c693766566f71a0b"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "6764ba6239ff83fc0c35d0f1966056b1"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "ce27b774be0ac6f9dcc34e9adadb72b6"
  },
  {
    "url": "etc/Quick Start Guide to TIL.html",
    "revision": "d8e6704691cfb62b3b81c5c53416e14c"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "e1f756d4f71327c21ca99d4c3e26feb9"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "5d5189f2717a979d8eea25e5f3e23f58"
  },
  {
    "url": "web/Cross-Origin Resource Sharing.html",
    "revision": "6575628f7673ea07af66e1babcb6caec"
  },
  {
    "url": "web/HTTP 상태 코드.html",
    "revision": "fc0c0a917e2a978ed85def860c60f9fc"
  },
  {
    "url": "web/HTTP 상태 코드2.html",
    "revision": "f66004919fb1a24fecda7ad298ef0e97"
  },
  {
    "url": "web/Web Server와 WAS.html",
    "revision": "2d3fb6f1a7b62d832097c319c097e9c5"
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
