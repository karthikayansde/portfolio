'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "261a740553d127ff4b97cdd5bf4a0743",
".git/config": "24ff2750b234c347239481bc4523e44e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1fe1a08a8954f751534fd868eba5c9d9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6ce46c2f3d640958c116ba7f22573e2c",
".git/logs/refs/heads/main": "cc0af89971cf9bc3db30ce466abdc783",
".git/logs/refs/remotes/origin/main": "7536b48c149d116453fe781a76ec8bc1",
".git/objects/02/65060cb6ce6a6a9e60eecfea54920c58ef3985": "e08c46e072069b33796afc466b0c175c",
".git/objects/05/75874e33e03c5255bf434ac333ce2176d0dce4": "91829fb7b8f1930c0eca2b7d7ec656eb",
".git/objects/06/c24f3b43abbdcbec08cc726076e4859c96b0ba": "fad06ab7c2253a74195b21ca47e48324",
".git/objects/0e/ff62e804696e228966f9ea15bb442f9d972be0": "c5e80a1abf72b383c8a66e49a087b3d0",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/4226ab194aa8c0db535a7e8debe7aab4252d4e": "dbadf2f1a9593cc2e75649b44693c827",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1e/69323fbd206601da83f3014b71861066aa53b9": "426be1c9a1fe3e6fe494ce798bdbff2c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6739fbadac02dbdb7c8b1b3d767a9782a45c2a": "11befd47f42684a5782cf6820c062a8b",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/2cd3f15f712dc9c12763661a6df57ba512e3be": "c2c733c83f055e14aa145b30fe2e8114",
".git/objects/28/962ba144104e62c00a99d956683adfd41f7d7e": "3be73d357c4d66c64e67b5d5059a00d6",
".git/objects/2e/51826eae7d956e59590a1e263de2da50d3a89d": "15a162a3758d1f45dc6a6f7a4679733a",
".git/objects/39/927cc764d99de8074f348afcd7185ca8813b54": "8c7776ffc25d18e96f3615c6c7175121",
".git/objects/3c/50acc14fe0472df8747efe0c1af010b3e64038": "341be64fd604a677ab9d5e73089bac26",
".git/objects/49/012de116865ce9698f961ffdfcd169a9f025a0": "1dd101fe3f1d982507c3fcad06aaa379",
".git/objects/49/971843f20ace43b86e280407cf36781131a22b": "5fb1b3a9075607e1b226a8fc36f3a753",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/9066e0f415b94f5443f223ef23e011c7317849": "d4b635478742940204cd41367e20ba21",
".git/objects/5e/1bc2d071284e8cffc778c57416439fb4a3644d": "1bc58b956b0375269425d434b62e9e2f",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/b807b5b525ee0ceabac71dc30a3fc4e65edbdc": "06c18731ff26f3abbdeb18cf8fe0ce36",
".git/objects/65/fe852969105afb5f8b0d048ccf7bdde1302b98": "d48b737bff547060f78516001208e083",
".git/objects/66/53056b51fc61ea2742b9ff5a954b05780c3b1e": "30a78963ccba54899de0ef7b9e1e9896",
".git/objects/6a/2df0fcf9f8779cf0e0a98c3c66206f914969b3": "d08e26b8c6ee2269bc8850b4e91c57db",
".git/objects/6c/dcca1fa61c33cff4895637c9534fb3f6dbdf82": "f43694c751d9edbd44224624a6b527a1",
".git/objects/6d/68287d753a49069f2356a0f9cfb516c2bc8b05": "e63dea4841d5747cfab4eb65469b282f",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/e7bccb2daeab9719c48c0a320292c84be289ab": "7f4115f2c24bae3a9cdb7e502b39adf7",
".git/objects/7b/7b2f561e7f002c62c583043d74010dddf2eded": "7651cff77345e871f7e4d8f4b17a57a6",
".git/objects/7c/2efd1f9747f7714e5a900d13add6fe3436432d": "2592285cff3cd69f51d6c4ec9a0b074b",
".git/objects/7e/18c0fa4740c007cc406f7816436a6311208121": "4c0bf1b9f3b6d6b113fe156296ceeb2f",
".git/objects/80/099ca0aa9b7be4bbae2aae27cb2b6df9e74737": "96058019136e8f8b404b74362f17bd81",
".git/objects/80/6b5a993ddfd8d983c6fa70b7c9764099b3be2f": "4755917506ab19b680ed03aa3190986b",
".git/objects/82/e9726096032ba958e640ddbcec8b0a549d93fa": "777e5fdd7e5066cabd67c9521908a48b",
".git/objects/84/576d99511f5cfb4fede4fed62d11b0228ce29e": "9bc2939605cc30b9bfd572f0d550b745",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/278d35234d99181b6fba5554b739918d58bd32": "02f625920c49e669b62ea680b3463e87",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/730325ba01febd46c45f4cbd963703732acdb2": "8f6fcbd76946288a44dc8b2b380a2a9a",
".git/objects/90/0c5498e9fcf0c645d32bfdd3de029e4a8d4bb2": "c5c3e6f079c3343a9306066984bf473b",
".git/objects/90/862da45cf292a2558b07a527c9ffb0058cc555": "bb2e7bbf476d1d6e871b1dc2fe9f1d41",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a3/4037e0afe1943afbb4689ea95979bbeaa6f376": "42afb227aa43aa1c71238ed15484f9c6",
".git/objects/a7/486019bc3c7101ce0c8869a4145a974e95671d": "bb84e51abfcccaba38bd41d63cfc4c6b",
".git/objects/ac/923a0002e2e6ba4b4cd4efea45a87c2001564d": "537e9817572e8d828718af537482ea3b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/88396b402ed1a8d552fd33029dd41903f0476a": "ebabe5f4a9715917e947f7e5fd700e6d",
".git/objects/b6/579fb34c76428fb62cb67a4d089fd95ef5c438": "006882271b0384b617afc77dcc86e78e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/b5cb5118489effe325aba8361470919eedd669": "b1a552c862f1d572458c2053da27edb1",
".git/objects/bd/4be204da3f02d96ddc351de46f1c3ab5fc9b33": "2685c4752b774902de15f1bd616010bd",
".git/objects/c0/406ac5cf4cd968113cdccdff417714cadaadee": "3ca2fcf4a88afbb0c087cc84f1b0bcc5",
".git/objects/c8/726c53b0ce81a63baf63669ee01ae9e5659d56": "d345095544488dddae7de5dae2b77bdb",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/f4d938a5d5c508c020b02d088020c14728ceb8": "24a56ea3f39d7ee91f3a10eb3a32fcbe",
".git/objects/ce/e823c85451eee6eee0a8616cf5f22e772426e1": "04519050609a6e49345e2e88a30c0f8a",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/c12069f37a1bc493803f72cf17500ddb6b46cb": "dbde1cc950858703140f489ed1526ab3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/4b0d015b67113608e114431eccc4560355f883": "783aebfb924bfc645f74d87d2c0ff859",
".git/objects/e7/0527b390cc0c31589b1603c653be68f2f2342d": "0cf38c51aeba96f687e84bc5177fc737",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/e369dd79a625087335e8764bc3eb4b423804a1": "d8e5aa9a0ffe1154c52c0003250b8895",
".git/objects/fe/c95155e03e9b2b9fb66ff511d81483ee1f8910": "8076b1ad2ff04806494d80c77ccbb600",
".git/refs/heads/main": "01f761fd36d157616aa7da7f73113476",
".git/refs/remotes/origin/main": "01f761fd36d157616aa7da7f73113476",
"assets/AssetManifest.bin": "3795c16dc4edacab88f6d21805e7b1b0",
"assets/AssetManifest.bin.json": "cd311d67708cdca5e0f82f2132d30cb6",
"assets/AssetManifest.json": "04504ebebe396a6a64dca5f6bedd06c7",
"assets/assets/11.PNG": "2af946db2407ac64cfdaafe0ff6ec8c8",
"assets/assets/22.PNG": "e26943d7cb34e5903e754605f584b829",
"assets/assets/33.PNG": "4d1d2a5cfab30482197b5522cbb7968e",
"assets/assets/44.PNG": "195943edabf80072bfda029c44eed0ba",
"assets/assets/55.PNG": "15fa7c5b7c510d482b67d7070a8bf8de",
"assets/assets/certificate11.png": "087879cbc83b6cd329570fcbc0e853d8",
"assets/assets/certificate22.png": "8dcd97c36d4e301cef83390ea6fef151",
"assets/assets/certificate33.png": "24675cdb18a6812e6c2ef1526f13ff9f",
"assets/assets/certificate44.JPG": "8dcd97c36d4e301cef83390ea6fef151",
"assets/assets/fonts/NeueMontreal-Regular.otf": "4d742e8ebdf9b030dc46a59963a6e1fb",
"assets/assets/logo11.png": "0679c8dc1a0315dff62b6b167690ea76",
"assets/assets/logo22.png": "50894d1e36fc5db110d34237693e9088",
"assets/assets/logo33.png": "570693aefad5225722509de701277928",
"assets/assets/logo44.jpg": "2d6f0e212fc67b45df536760e6d360ca",
"assets/assets/logo55.png": "76474444c408bab9f9fdd4def1d42118",
"assets/assets/logo66.png": "78471b51d594c7b60f0a2601db58a671",
"assets/assets/logo77.png": "7882b68fb073e1f7937d1d18221a612a",
"assets/assets/logo88.png": "7e4c887e80cc6f5ffa2677238acf3c08",
"assets/assets/myPhoto.jpeg": "7281970a80429d2e3dbe52ade25b2fe0",
"assets/assets/name_sound.mp3": "26a0c6e1c889e973dde29ad93058de5d",
"assets/FontManifest.json": "98ebb087695098f5d0780f4ed33ee6d1",
"assets/fonts/MaterialIcons-Regular.otf": "66e572ac4c80f0ba76ad1a1601c507e8",
"assets/NOTICES": "c3f27f17a2fbc9dfd24aef52797605d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c6678fb4dd0e1fae51bef8f94399ad49",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "61152af67d3b0ee4106ed5de02529a71",
"/": "61152af67d3b0ee4106ed5de02529a71",
"main.dart.js": "78816cb05e30307f6ed0e55c572096f5",
"manifest.json": "43b83f8b1aa43ef17c5ef63d39c49489",
"version.json": "006ccd41c9fd444ac60c1d325ca3241d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
