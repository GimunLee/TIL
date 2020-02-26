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
    "revision": "23c430f072312075677609945c5f56b9"
  },
  {
    "url": "assets/css/0.styles.5b4a8351.css",
    "revision": "5dfe1f9d97f7dbfac8bd7f58670015c1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9ed5827b.js",
    "revision": "795944c12ee2831af0854a2a25747fb6"
  },
  {
    "url": "assets/js/3.979f5363.js",
    "revision": "a9e9c1a7332ea807809ed801061814ba"
  },
  {
    "url": "assets/js/4.36923a49.js",
    "revision": "9c7a3f2f2f9ad610639caa8881574741"
  },
  {
    "url": "assets/js/5.897d0d3d.js",
    "revision": "5352cc1829e1a4f9b3c3f4778e951207"
  },
  {
    "url": "assets/js/6.3f34988f.js",
    "revision": "16e4fc46fc1200936f8d800b09c373b7"
  },
  {
    "url": "assets/js/7.0ce4617e.js",
    "revision": "13503b997bee084457f55ff99a706a5e"
  },
  {
    "url": "assets/js/8.4a45e037.js",
    "revision": "97663adb68a0052a862f3bbdeb4a510a"
  },
  {
    "url": "assets/js/app.b71eb166.js",
    "revision": "617b63e6f6bf76ec73b9dbd4aeea5e1c"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "7b09a8b70efd5f8f3e6874e2acc7e87f"
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
