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
    "revision": "eaeea171f3a75ee2e4bc2f11d4a3c212"
  },
  {
    "url": "assets/css/0.styles.16013ecb.css",
    "revision": "bf1af4a3189ad0c7119808b282715eea"
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
    "url": "assets/js/10.c6e2427f.js",
    "revision": "dca59828d20395a8f4427247e9cf0b01"
  },
  {
    "url": "assets/js/11.1290c0fe.js",
    "revision": "817317f3363a52f8e34138814f6b7ad8"
  },
  {
    "url": "assets/js/12.b3883554.js",
    "revision": "c296822a74e44e5c9c940b7d7b86b89f"
  },
  {
    "url": "assets/js/13.12ad5ff9.js",
    "revision": "a5b439d9ee516402c9146dda78ed7ae9"
  },
  {
    "url": "assets/js/14.e7254712.js",
    "revision": "f8d0110c019de83c624785a8c447ff65"
  },
  {
    "url": "assets/js/15.ae189c59.js",
    "revision": "01d5299e42ec97972126f1a9558627b8"
  },
  {
    "url": "assets/js/16.127b1877.js",
    "revision": "0cb60e18171f3feaf523e003076b62ac"
  },
  {
    "url": "assets/js/17.981de6cb.js",
    "revision": "4697118f3c2569401bd40d1c38035a29"
  },
  {
    "url": "assets/js/18.4cae1d4d.js",
    "revision": "482f09c68a2847cccad8d5391b006170"
  },
  {
    "url": "assets/js/19.bbe939cf.js",
    "revision": "b524991ef136d35e647780924cb64bb7"
  },
  {
    "url": "assets/js/2.547c9e87.js",
    "revision": "908ed0eeb5c4289f2098c579d7ae4c64"
  },
  {
    "url": "assets/js/20.6a14076e.js",
    "revision": "10800ffa0a5706c4edda142a0f79b663"
  },
  {
    "url": "assets/js/21.cf6a3bd6.js",
    "revision": "8571d4e4960be2e26426189e02a5f0ea"
  },
  {
    "url": "assets/js/22.4e08882c.js",
    "revision": "49bc13b1056402d564b55062ecf9807a"
  },
  {
    "url": "assets/js/23.38849722.js",
    "revision": "77e64b56e67b5792068f3c0dec1cd6d1"
  },
  {
    "url": "assets/js/24.54e43636.js",
    "revision": "973582a278da127cd05ab91d66cd54d1"
  },
  {
    "url": "assets/js/25.a31bd3ce.js",
    "revision": "3f26270d5e6fd69dfdbf6ad5ce8babdd"
  },
  {
    "url": "assets/js/26.98f7c167.js",
    "revision": "660a866e10c2bfc2ceba83ed35e8b5b1"
  },
  {
    "url": "assets/js/27.6528d728.js",
    "revision": "80627f76645811e9ae791fd9323cee58"
  },
  {
    "url": "assets/js/3.7d7143de.js",
    "revision": "92d11029353eb674603c4a4f1c9ff005"
  },
  {
    "url": "assets/js/4.f1586fc8.js",
    "revision": "cf5f47639f1d745a9b9cddd26c564a0f"
  },
  {
    "url": "assets/js/5.e0124f26.js",
    "revision": "dce0df83235f8ba5f561220996932f6d"
  },
  {
    "url": "assets/js/6.625e7232.js",
    "revision": "4095334afd7a546c1a80d81ef12c7b91"
  },
  {
    "url": "assets/js/7.17079bf3.js",
    "revision": "f7ef5f860b1d183e44df66ca69c1023f"
  },
  {
    "url": "assets/js/8.10c32b81.js",
    "revision": "e2303005246f0640bab3cd6e1f9ded13"
  },
  {
    "url": "assets/js/9.04b5fbd4.js",
    "revision": "5ed358cfadade60b4721ed3124aa96cb"
  },
  {
    "url": "assets/js/app.5ef04dda.js",
    "revision": "60ea33676d4a41b7634d0450867ccf80"
  },
  {
    "url": "book-angular-essentials/01. Angular의 소개와 특징.html",
    "revision": "6b62cbfeebe8844adbe7561d72c9ab76"
  },
  {
    "url": "book-angular-essentials/02. Node.js와 npm.html",
    "revision": "bb3bb247a5c2e87384484df3897139b3"
  },
  {
    "url": "book-angular-essentials/03. ECMAScript 6.html",
    "revision": "598382e110bc91e2db3ac0fd90e6a39b"
  },
  {
    "url": "book-head-first-design-patterns/FP1 Factory Method Pattern.html",
    "revision": "399b422ebe069bb1bdf6c7ab02844423"
  },
  {
    "url": "book-head-first-design-patterns/FP2 Abstract Factory Pattern.html",
    "revision": "2d37a220a0aa4ddc7dade8f4c9caafc5"
  },
  {
    "url": "book-head-first-design-patterns/Strategy Pattern.html",
    "revision": "387a08800e7e6586bf740f01f13b3a9d"
  },
  {
    "url": "book-head-first-design-patterns/Template Method Pattern.html",
    "revision": "34686d87c3c5fa8e54cdb0e6b6d71fbc"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "ca945aac3ce8d00215f81c3dd046606b"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "efdc79c4f1e73db46b80d80a309a226b"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "d9dcafccf4ed0150a23fa96426f6f019"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "2f57ab4da07ae507be698521e5027ba6"
  },
  {
    "url": "etc/Memo.html",
    "revision": "a5fae42574a00d3080271f7bcec2c17c"
  },
  {
    "url": "etc/Quick Start Guide to TIL.html",
    "revision": "3c7927816974101d1e3a8bca63518127"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "f8c6bd46aa5de3e3705e42d50d39fa57"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "08751733f9c7595e6efcad2d6129115f"
  },
  {
    "url": "web/Cross-Origin Resource Sharing.html",
    "revision": "7a42fa1af88977c88248d8d7b93b2f36"
  },
  {
    "url": "web/HTTP 상태 코드.html",
    "revision": "973878176a956477b879a5f0a9791e79"
  },
  {
    "url": "web/Web Server와 WAS.html",
    "revision": "a55a29dbf814c8b1d3b2ee2e4003f09b"
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
