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
    "revision": "7615bdcfed1d219ea1579388fc2e91c6"
  },
  {
    "url": "assets/css/0.styles.a12a2d44.css",
    "revision": "1d519b9198d0ee19756b3586319647fa"
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
    "url": "assets/js/10.8ae8b0ca.js",
    "revision": "317ea640b6ce2ba288ceb49f35c37b75"
  },
  {
    "url": "assets/js/11.79f28ce7.js",
    "revision": "46433dc3b58ead749aa71a32c30ab3c7"
  },
  {
    "url": "assets/js/12.3d27ceb9.js",
    "revision": "5e257a4f7994b2d95c14fbdc793b3ceb"
  },
  {
    "url": "assets/js/13.e9857828.js",
    "revision": "a20a2cfa4c421b4d4642b56e530f9bfc"
  },
  {
    "url": "assets/js/14.44f5ed52.js",
    "revision": "3a0504249292593b563a20b61aea971f"
  },
  {
    "url": "assets/js/15.fbbc06e7.js",
    "revision": "b9ae639b7d42b705396310ff6ee807ba"
  },
  {
    "url": "assets/js/2.ba3ece6f.js",
    "revision": "28d05b00cdc62d001ea58440c02f99bc"
  },
  {
    "url": "assets/js/3.11d8bd21.js",
    "revision": "66648635249391a694e289b3a2c10dab"
  },
  {
    "url": "assets/js/4.70a0d26d.js",
    "revision": "e79806b38d7f8fae29cbee2b37b23d1b"
  },
  {
    "url": "assets/js/5.7eca0390.js",
    "revision": "0318d3288fd0a920adad2d488fa53c25"
  },
  {
    "url": "assets/js/6.d6d561a0.js",
    "revision": "f3c33a3ed0c83e40e43ad42c0c6e8355"
  },
  {
    "url": "assets/js/7.3efef9a3.js",
    "revision": "47aef43703a109a0ec5741a3489ad955"
  },
  {
    "url": "assets/js/8.c29bcc51.js",
    "revision": "c976135656bcba6dc1e160e5974f680e"
  },
  {
    "url": "assets/js/9.e22bb99d.js",
    "revision": "3396576b7b5cc027fc273cd8d0be9e83"
  },
  {
    "url": "assets/js/app.49522cc5.js",
    "revision": "9d72a905a4312cfb1a149d547e486d35"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "ed9e6719beca953fa70b4c9ff6f29ae9"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "172b0650b0e5cb7b687997f6e259fde6"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "6d0e32ccd605cdb0e2aa823aeb47cb4c"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "f31651cdc719c5c9dd9c6429da8baeb8"
  },
  {
    "url": "etc/quickstart-guide to-til.html",
    "revision": "8d87009966bee3de2b1b82971e614383"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "e786e622500cda1db6d3538043647a52"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "918db56d473ebe981850186afe345b6b"
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
