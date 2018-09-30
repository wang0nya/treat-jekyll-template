// service-worker.js
console.log('Offline mode enabled! 🎉 🎉')

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'treat-jekyll-template',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
})

// let Service Worker take control of pages ASAP
workbox.skipWaiting()
workbox.clientsClaim()

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest)

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
)

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /images\/(.*)/,
    workbox.strategies.cacheFirst()
)

// use `cacheFirst` strategy for recipes
workbox.routing.registerRoute(
    /recipes\/(.*)/,
    workbox.strategies.cacheFirst()
)

// use `cacheFirst` strategy for about
workbox.routing.registerRoute(
    /about\/(.*)/,
    workbox.strategies.cacheFirst()
)

// use `cacheFirst` strategy for contact
workbox.routing.registerRoute(
    /contact\/(.*)/,
    workbox.strategies.cacheFirst()
)

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
)