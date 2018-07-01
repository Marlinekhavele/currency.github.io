const CACHE_NAME = 'static-cache-v2';

const urlsToCache = [
  './',
  './index.html',
  './css/main.css',
  './js/index.js',
  './main.js',
  './idb/idb.js',
  './js/idb.js',
 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css ',
'https://code.jquery.com/jquery-3.3.1.slim.min.js',
'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js'

  
];

self.addEventListener('install', function(event) {
  console.log('service worker installed')
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('caching files.');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('ServiceWorker Activated');

  e.waitUntil(
   
  caches.keys().then(function(cachefileNames) {
    return Promise.all(cachefileNames.map(function(cachefileName) {
    
      if (cachefileName !== CACHE_NAME) {
        return caches.delete(cachefileName);
      }
    }));
  })
);

});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
        return response || fetchAndCache(event.request);
      })
    );
  });
  
  function fetchAndCache(url) {
    return fetch(url)
    .then(function(response) {
      //  valid response
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return caches.open(CACHE_NAME)
      .then(function(cache) {
        cache.put(url, response.clone());
        return response;
      });
    })
    .catch(function(error) {
      console.log('Request failed:', error);
      
    });
  }