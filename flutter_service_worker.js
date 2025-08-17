'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3ed3c195cdbe1d92c8c34785242b7204",
".git/config": "af191f61b262e8caf7445cbacd07ff10",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1e668a493a902c4f797a52cb5f9852dc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e31120375da28b4169a73772c23a7f1b",
".git/logs/refs/heads/main": "7739cbcdca45c073d274795fe3b71616",
".git/logs/refs/remotes/origin/main": "8bd497055d8fe948b904c2682a54ffe3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/e1f3ddb9da1a2d85f37f951ef976546e8949a9": "2d863484a7234962d0515c434f77076f",
".git/objects/16/8a6dbe8ae5910e2a7f70f56138a7cb67800e0e": "f9d7b4aeb6b04603b81ba857a8b344a2",
".git/objects/16/c9dbb0083a698a7b085fcbd36793c007bf7441": "8bfa946641d73223866e33ff89e255f1",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/29/2a6c570118dc82c97a8e1e4dad09296dc17c8c": "a1e8815da1996fd2995788f666b39531",
".git/objects/30/8246f850fc96b8276c5e24785336ea557f885d": "bb87878f9e925cbe58cbb60ecbccd52d",
".git/objects/36/84886ee5b485f19aa9e40d8457e60650c82c25": "791085c74624a3eb845a22073829e8bd",
".git/objects/38/dd33b482c635dd8322a93b4e45f3e9797753e4": "6f356981f5f8ba62b20d05144daea5d6",
".git/objects/3f/568051abaaa4e17d99d08739465525f3b23b1a": "470d46c5aaa7f6d274ebc8f25634fdf3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/3abdf55043dd5fa75984b82e4ea0fc801cd6b4": "7a0abecdb84849535a2e4f038cb78c0e",
".git/objects/4c/510e248a9c0d1860f3a9dea21840f6448c2033": "3c1fe3e9fbe8c4c6e39e99af2c8b5afa",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/60/815613025b1f65e6645c6b078e90a4be8596fa": "bd2dd50834bf04554110020ed1a3438c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/8728b9b9666010242c95c9cee9628db728c74c": "01c058cc4c83eaa9b72ac42adabe2cd5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/874c26448e7cd950295e44ae88a0a31b1717c3": "2e8979ce66940695475cc901b97f5412",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/0453a12bf28320b79f6338eaba07d46645537a": "760f0b0d45884af9a83f788ee534fa68",
".git/objects/7d/48c9731424b287b12ef5a23adbb4fbbac12a08": "546453b99f556feea3f6ead301e3abe7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/b0/490c514ddab33482fd486cc730b0c0d0c70e6f": "775831431ce4cd6b1b74e880c408744b",
".git/objects/b2/be4a4ad2160758986b15b45eb7494fae108e1a": "928842f694d489489f162943e931e9cc",
".git/objects/b3/513d7e570f44b63615e283adfbfd02333c2cd3": "853cc71e8ea4b193fdfa36e831d13494",
".git/objects/b5/f264bba71c67d4fc8081737ca7853912520e97": "1758264b29046998a7b725e7fcefdf44",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/675e217a64708828806ce5b8aa3701d927aafa": "befcbd5070d6fd7a87d666ab1fabd84e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/db/136cfc952ec9e354c8f521b35bae037c101124": "eb03a28fb5c673cefc38c5ddcde27786",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/d55642bcfda0899dd8f94f8fe976dffd76700c": "777e6f9faddc07821d86fbe810a7703e",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/87b4cc92bd29fde880340cd5d74f57b3449d29": "c281a70864672a83de3cfac12743c058",
".git/objects/e0/8f08e6f801885ca6bae9bdbcb21230ee607953": "09079dc94cc44993701a5c4e8854bca1",
".git/objects/e1/ea60da4a69bccb71484c771fdc7025f864c3e5": "e7fad9aca17e39b0455150628dd121be",
".git/objects/e5/52a011fd2959399163cfb80de853bc21456d1b": "29a8bcf1f7e7085b9622ee0ae6bba361",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/c0c1d01d4a9c5112f17ae6ba124b305193c6db": "70f11bd79e52e3f8d60f31b3564c8b90",
".git/objects/f8/0a44567906e8e53fa1754285db94d4cc4955e7": "a6edc54699cf4b21a2933269b16b9e2a",
".git/objects/fa/df86aaaf065e1a98e5fa6f2ee4913f58a9f60c": "517696efb214b7cf622c2cf5c16dab2e",
".git/refs/heads/main": "0ac19a7c62be89b5d3530118ea5a5daf",
".git/refs/remotes/origin/main": "0ac19a7c62be89b5d3530118ea5a5daf",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "749c370e0cc3462b188a571fe52f60f0",
"assets/NOTICES": "ee33eb457c7ac04069493dde46028dca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "87716044ab51cb6ae5919fb69c4d7def",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0607480726f646923e39bf4ca57461b8",
"/": "0607480726f646923e39bf4ca57461b8",
"main.dart.js": "272887220b0ca80f482b81b791ce3d3f",
"manifest.json": "1a26816b3b5ac2429d6de466670d347b",
"mystudentapp-web/.git/config": "af191f61b262e8caf7445cbacd07ff10",
"mystudentapp-web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"mystudentapp-web/.git/FETCH_HEAD": "67a578f87dfa4e481a2f4b822fc2389a",
"mystudentapp-web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"mystudentapp-web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"mystudentapp-web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"mystudentapp-web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"mystudentapp-web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"mystudentapp-web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"mystudentapp-web/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"mystudentapp-web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"mystudentapp-web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"mystudentapp-web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"mystudentapp-web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"mystudentapp-web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"mystudentapp-web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"mystudentapp-web/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"mystudentapp-web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"mystudentapp-web/.git/index": "f15075b193f7a0c485f3d32fb180d568",
"mystudentapp-web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"mystudentapp-web/.git/logs/HEAD": "1ccf1845e53d511c3ade47fe7f83414e",
"mystudentapp-web/.git/logs/refs/heads/main": "1ccf1845e53d511c3ade47fe7f83414e",
"mystudentapp-web/.git/logs/refs/remotes/origin/HEAD": "026e607b1601af428dca7519e47af85c",
"mystudentapp-web/.git/logs/refs/remotes/origin/main": "50b692ef5d63c5fa18f08ea4f3a3a04c",
"mystudentapp-web/.git/objects/1c/10ec9b80ca5825ab3f680fe37a60ef4f9b7a06": "2a81301338eafb91d03e73fe675e863b",
"mystudentapp-web/.git/objects/32/c7074d9348bde800cba0c0e3b6da25b7c6a994": "bb28b641267cd8dfbea1fee1eea4fe82",
"mystudentapp-web/.git/objects/37/5adf8981e935e0fc9baf3030bfd225965fc889": "a38258c1e6bb9c05fee8ae65811b5cc2",
"mystudentapp-web/.git/objects/5a/31853140cc9289e0e7d7d1e8142dd1151d320b": "f3e96addfeac4639916b1386a6edf461",
"mystudentapp-web/.git/objects/7c/25e81446efb298ae2255275f3c644219ca9ea8": "c9e6f56e43bd646aa575fdfe24f8a3d9",
"mystudentapp-web/.git/objects/a6/a0c30f82ead13cfc759a2accf2565f6f45e9da": "ca2c47cdacdd62295553c1094e596258",
"mystudentapp-web/.git/objects/e2/04e80ce2abd94d01d981976ab3c5f51f61e8be": "9f0f5fb304b5c72644e068f9129e393f",
"mystudentapp-web/.git/objects/f0/e2daed718d8047605c00cc6bd67a074daa31f8": "c86050295c836cdb7a64fe1e175ec7da",
"mystudentapp-web/.git/objects/f9/d361f48b69b9cac113edd0273b116419daddb2": "5684336bf3848d71b1f03379e390d2b4",
"mystudentapp-web/.git/objects/pack/pack-9d5813c2f40c649d79ce5f20358af4f7752baf4c.idx": "81cde7c24c1f4498b80ba532d10cc839",
"mystudentapp-web/.git/objects/pack/pack-9d5813c2f40c649d79ce5f20358af4f7752baf4c.pack": "93f49829561d1032f271ab0a70c3ae9f",
"mystudentapp-web/.git/objects/pack/pack-9d5813c2f40c649d79ce5f20358af4f7752baf4c.rev": "88b3549c4e426d204bdf572dee50d8ed",
"mystudentapp-web/.git/ORIG_HEAD": "0ac19a7c62be89b5d3530118ea5a5daf",
"mystudentapp-web/.git/packed-refs": "6ecdef24094e696cf06d99673869e8f5",
"mystudentapp-web/.git/refs/heads/main": "36fa9c80c3977878237449fc095cd794",
"mystudentapp-web/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"mystudentapp-web/.git/refs/remotes/origin/main": "36fa9c80c3977878237449fc095cd794",
"mystudentapp-web/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"mystudentapp-web/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"mystudentapp-web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"mystudentapp-web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"mystudentapp-web/assets/fonts/MaterialIcons-Regular.otf": "fcb0cd1960ed7d21bb828f0370de8be4",
"mystudentapp-web/assets/NOTICES": "4ce86e5536b52a6a5df309e8f752290a",
"mystudentapp-web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"mystudentapp-web/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"mystudentapp-web/canvaskit/canvaskit.js": "3709bd882f416107176c2ab8730ca757",
"mystudentapp-web/canvaskit/canvaskit.js.symbols": "ecdd502323ab1fd2f6c036906e394b40",
"mystudentapp-web/canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"mystudentapp-web/canvaskit/chromium/canvaskit.js": "27f7d5845fb45327c09497b285a0e864",
"mystudentapp-web/canvaskit/chromium/canvaskit.js.symbols": "e52263a750313f8642c3e52aced4d9c5",
"mystudentapp-web/canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"mystudentapp-web/canvaskit/skwasm.js": "e2e4523ba5872fa065533dcdd7ff5246",
"mystudentapp-web/canvaskit/skwasm.js.symbols": "5f29395b83b2e54c17dc968cd784f951",
"mystudentapp-web/canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"mystudentapp-web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"mystudentapp-web/flutter.js": "5635bfa3ff7e8e305d9f2b1c10aaee5a",
"mystudentapp-web/flutter_bootstrap.js": "6b74d3ebc36a132543f0348b95563f97",
"mystudentapp-web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"mystudentapp-web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"mystudentapp-web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"mystudentapp-web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"mystudentapp-web/index.html": "0607480726f646923e39bf4ca57461b8",
"mystudentapp-web/main.dart.js": "1bebee3522cce9fd5377240f42ebfa06",
"mystudentapp-web/manifest.json": "1a26816b3b5ac2429d6de466670d347b",
"mystudentapp-web/mystudentapp-web/index.html": "0607480726f646923e39bf4ca57461b8",
"mystudentapp-web/version.json": "e9cfeb50b8d5c79c9e37fcbd1a9f1e5d",
"nots.txt": "d41d8cd98f00b204e9800998ecf8427e",
"som%20git%20hub%20command": "a8c9a55321762b32211cb9fa5d2a1a6e",
"version.json": "e9cfeb50b8d5c79c9e37fcbd1a9f1e5d"};
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
