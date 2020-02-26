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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7cb41df3de956534efe938ae12cf7152"
  },
  {
    "url": "assets/css/0.styles.3fc16435.css",
    "revision": "a51a839b549ea18419a6c391bec42e43"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.cc9145dd.js",
    "revision": "795944c12ee2831af0854a2a25747fb6"
  },
  {
    "url": "assets/js/3.979f5363.js",
    "revision": "a9e9c1a7332ea807809ed801061814ba"
  },
  {
    "url": "assets/js/4.61b38187.js",
    "revision": "ff16058a08aa40157baca583c91cdd7b"
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
    "url": "assets/js/app.91d4efbd.js",
    "revision": "ad5dca2ba5f5cabdf89702e536bb7d66"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "7292215e79644e13cb71739ee91487e2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
