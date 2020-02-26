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
    "revision": "c5300366e63f6a7c4377685f5acd8c99"
  },
  {
    "url": "assets/css/0.styles.5b4a8351.css",
    "revision": "5dfe1f9d97f7dbfac8bd7f58670015c1"
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
    "url": "assets/js/10.7e09e562.js",
    "revision": "100609e271b07eb1ac73a4f4de65b0b7"
  },
  {
    "url": "assets/js/11.f3e4ab2a.js",
    "revision": "3a274f9bacdbd7382e0bd01ac9dbdbf1"
  },
  {
    "url": "assets/js/12.c72e68a2.js",
    "revision": "ea11f44f1c732df6c5bf5c9ae9544528"
  },
  {
    "url": "assets/js/13.b453a131.js",
    "revision": "330545abe3efb0d11d09347616a53a3d"
  },
  {
    "url": "assets/js/14.c2df6cf6.js",
    "revision": "0558d896593e3c42d8bf833eb7b60068"
  },
  {
    "url": "assets/js/2.27233321.js",
    "revision": "f6a1712d822c3459bda3eebed136a8ff"
  },
  {
    "url": "assets/js/3.14ebce06.js",
    "revision": "9e2af9bd2e6644acdaf75dbd95c1b156"
  },
  {
    "url": "assets/js/4.15157c15.js",
    "revision": "878770e80ead5905625e8dd20bda6f7a"
  },
  {
    "url": "assets/js/5.59a0a591.js",
    "revision": "6630c916437e51d687b5a04804054681"
  },
  {
    "url": "assets/js/6.38c04d8f.js",
    "revision": "0d8c5e5dfa4664edea7acea84a43d887"
  },
  {
    "url": "assets/js/7.91739b73.js",
    "revision": "a3abe5e1300311e4f7f028680d556650"
  },
  {
    "url": "assets/js/8.95d4224d.js",
    "revision": "a3de54c68b56c408d39a56941c85888c"
  },
  {
    "url": "assets/js/9.5ba6272b.js",
    "revision": "c4ba6545686f07aeb70ad470fc1b340a"
  },
  {
    "url": "assets/js/app.18b16798.js",
    "revision": "6124bd92f345c3ba2ec358c4ec2e7147"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "a4fb5431789ab9017abc613633f4dacc"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "e059aa237f3065aa7c42d2be6c4d1d83"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "5e464aa85837a05e7492c82ab71e94ef"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "c0937f8dc2922789893af6fcdd4940db"
  },
  {
    "url": "etc/quickstart-guide to-til.html",
    "revision": "0ff8f4fdfad8aa64eec04e2c7b4e93a9"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "745af8b073c91030c0be46af7588ef7d"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "f9ae10a2beac90f51f44d7566c1c3de6"
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
