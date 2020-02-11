self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('postinstagrammabili').then(function (cache) {
            return cache.addAll([
                '/src/index.js',
                '/src/filters.js',
                '/src/carousel.js',
                '/assets/logo.svg',
                '/assets/preview.png',
                '/assets/favicon.png',
                '/styles/carousel.css',
                '/styles/filters.css',
                '/styles/style.css',
                '/index.html'
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});