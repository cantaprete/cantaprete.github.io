const APP_CACHE_VERSION = '1';
const APP_CACHE_NAME = `iching-${APP_CACHE_VERSION}`;
const APP_SHELL = [
	'/iching.html',
	'/css/iching.css',
	'/js/data/iching-giudizi.json',
	'/js/iching.js',
	'/js/coin.js',
	'/manifest.json',
	'/favicon.ico',
	'/favicon.svg',
	'/fonts/chi-reg.woff2',
	'/fonts/gen-reg.woff2',
	'/img/iching/button.svg',
	'/img/iching/button-default.svg',
	'/img/iching/iching-apple-touch-icon-180.png',
	'/img/iching/iching-192.png',
	'/img/iching/iching-512.png',
	'/img/iching/iching-512-mask.png',
	'/img/iching/iching-1024.png',
	'/img/iching/iching-1024-mask.png'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(APP_CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys()
			.then(keys => Promise.all(
				keys
					.filter(key => key.startsWith('iching-') && key !== APP_CACHE_NAME)
					.map(key => caches.delete(key))
			))
			.then(() => self.clients.claim())
	);
});

self.addEventListener('fetch', event => {
	const request = event.request;
	const url = new URL(request.url);

	if (request.method !== 'GET' || url.origin !== self.location.origin || !APP_SHELL.includes(url.pathname)) {
		return;
	}

	event.respondWith(
		caches.open(APP_CACHE_NAME).then(async cache => {
			const cached = await cache.match(request, { ignoreSearch: true });
			return cached || fetch(request);
		})
	);
});