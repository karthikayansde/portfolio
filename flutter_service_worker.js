'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "43de9a55dac40191e2fcf87a4e637b1c",
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
".git/index": "cf8c210c6ce55a23e9304a2850b9d38c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a2fc2f772ce60ff38a8f25783458de24",
".git/logs/refs/heads/main": "3e3d551946530ff9777d100e00de02a1",
".git/logs/refs/remotes/origin/main": "fbd2afe94ac7114f6c8d872920e14a00",
".git/objects/02/65060cb6ce6a6a9e60eecfea54920c58ef3985": "e08c46e072069b33796afc466b0c175c",
".git/objects/05/75874e33e03c5255bf434ac333ce2176d0dce4": "91829fb7b8f1930c0eca2b7d7ec656eb",
".git/objects/06/c24f3b43abbdcbec08cc726076e4859c96b0ba": "fad06ab7c2253a74195b21ca47e48324",
".git/objects/08/ebbc104e45e2b87d27a695f6f696044d7a2821": "4f033d8d0c715aa1e993d623b7a68d8c",
".git/objects/09/9ad6a6b2bd3f551a389526333aaa29d543a6ca": "a98ce1bde7e258e38c5dbe9fbd0f7802",
".git/objects/09/e6472b0b1f04218b0d4cbe74beb043cba42bdd": "332f9c514cf8ec7e74167619bfddc9c4",
".git/objects/0d/3fe098368ecc106fbeb0871bd2826a14cef920": "ecc351888ccbab92d7be22aaf6c5b51b",
".git/objects/0d/45ed1465424605deb57d170f631ebbafac1122": "7ec1696965a0a9147a06aefedba81e07",
".git/objects/0d/fe749b1f2fad377ae8cb2dc10d9e7f69dff643": "11d503f23b0474ab3f54f59bc72bbb71",
".git/objects/0e/ff62e804696e228966f9ea15bb442f9d972be0": "c5e80a1abf72b383c8a66e49a087b3d0",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/f7dc775d17891aec9e49716b0e655440f4996a": "4e6a5c432a22fcd1d819a859c8dc1e75",
".git/objects/13/097851801f257266cccea2302ab44e9e5f79e3": "1241d1c7fa1c3084e740b9836d375470",
".git/objects/13/712b8b0580eaf33bf8ffacd499d0e99c5d1d73": "a1cfe9d120bd6cb82310c873e9cbeb7d",
".git/objects/16/053a2361414aa4d1ec4c66195478cf21a33c70": "5053faf1788cd73716cbe739d647790b",
".git/objects/16/f1e1b1bc11793e00f1c929af58eac19404594f": "a6edd4066fd6908a397ff87c1582872a",
".git/objects/18/4226ab194aa8c0db535a7e8debe7aab4252d4e": "dbadf2f1a9593cc2e75649b44693c827",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/19607099ac5df67a70eb4be7da200f3d36d440": "92a882117e75465cec5fb546533cc072",
".git/objects/1b/a900a84d256c1bf9f1b82c30f5a9c21cdba192": "8a1714b6c569423b3ba7ba637398c2e3",
".git/objects/1b/bec16e2017430d4752a0f4f49ef681bd595ff1": "cc199e91b1629ae71b106fda23c05495",
".git/objects/1e/69323fbd206601da83f3014b71861066aa53b9": "426be1c9a1fe3e6fe494ce798bdbff2c",
".git/objects/1e/77059b3286e321aec17fbedc1eee2e6d223342": "5f4a093ab24d7e979927e4de8c62a7d7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6739fbadac02dbdb7c8b1b3d767a9782a45c2a": "11befd47f42684a5782cf6820c062a8b",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/2cd3f15f712dc9c12763661a6df57ba512e3be": "c2c733c83f055e14aa145b30fe2e8114",
".git/objects/28/962ba144104e62c00a99d956683adfd41f7d7e": "3be73d357c4d66c64e67b5d5059a00d6",
".git/objects/28/d312c1a8d70fdbc5d1e37486967604c2a268ed": "b6f74551d5cda9e479b071487ee2f60c",
".git/objects/2c/c197b1711c6d37765df41d049eabc50db945bb": "81b034148cefeb71c970eaa78ab53fcb",
".git/objects/2e/51826eae7d956e59590a1e263de2da50d3a89d": "15a162a3758d1f45dc6a6f7a4679733a",
".git/objects/2f/f74ad66bb248912e4f098937ccaca660e755c1": "f7d193fc1b0dc10de11fe96ccf07a387",
".git/objects/34/82a20a3b5cef9940e8bcd1bf9923dacb271b03": "623518677d72862d23461ad682c69f61",
".git/objects/35/58ed422a0a83c082e3e3361c695629f3ca7e1c": "7f8d0d42a5687d9eebf826e7b5619711",
".git/objects/36/09359641b2cde5af24b793eb4791868067f756": "108e4d397d3721b055bdbc4be1e7a536",
".git/objects/36/370308cc62971c11fccb6be9e8095bf6a1875b": "c248893b8be3c7a005fce9bde33be768",
".git/objects/39/927cc764d99de8074f348afcd7185ca8813b54": "8c7776ffc25d18e96f3615c6c7175121",
".git/objects/3a/87bcbfc9494d680781a6a84e0a5f441a1e6b50": "9fd7c358b990fd51f9e4ec42092d2566",
".git/objects/3c/50acc14fe0472df8747efe0c1af010b3e64038": "341be64fd604a677ab9d5e73089bac26",
".git/objects/3e/edf1379924e85cd5641fa1df189f075449e15c": "ee98e097ccf8bbfe707221792f2a71e5",
".git/objects/40/fe06d21b7c0fd39a08f8b1b33d1b078a4f89f3": "f953142c126a851ab106842914e6678a",
".git/objects/41/128d773978241f167340ec7f0047750967c2b7": "d623706d3a25fc5dab48142d31cd9285",
".git/objects/42/383d5e3f81b5fa5473c9d66b203860eef0f84f": "a619109d33128e9f2bbca889cb30b931",
".git/objects/45/040ea74f525240260a6649d9d2a064175000e8": "c585894a888f10c72323aae02c35f15a",
".git/objects/49/012de116865ce9698f961ffdfcd169a9f025a0": "1dd101fe3f1d982507c3fcad06aaa379",
".git/objects/49/971843f20ace43b86e280407cf36781131a22b": "5fb1b3a9075607e1b226a8fc36f3a753",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/394b7967f75c097c2831b61a1f5a0d6c6eecea": "53ceb9475af636450ae8089e8e39caac",
".git/objects/54/e165386ae7443b0667045bae81870f2a03315c": "ff2228a384ff8ad50ca3d481e31e7b47",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/9066e0f415b94f5443f223ef23e011c7317849": "d4b635478742940204cd41367e20ba21",
".git/objects/5b/dfb8178f73b1b20272affa9fc1ef7441429ee4": "b627962cf44139d25889b3a48c1e697b",
".git/objects/5b/f54faf205274a4609c2f2ec5cdb354c212015e": "c8dafe5f67f618055df9bc25740d199a",
".git/objects/5c/9e534dd65efd498b464f7c74828b3472b0c074": "1b2ee246870364e88150b33758155423",
".git/objects/5d/95c3dff2489d5613f3d910fca95fdd879bd617": "c2853e4456b60a822526f3c2eb53d2dc",
".git/objects/5e/1bc2d071284e8cffc778c57416439fb4a3644d": "1bc58b956b0375269425d434b62e9e2f",
".git/objects/5e/a45162a82d9c6703f8b6baf20ae617204de0ee": "f1f839d85715cd7b1db6a682b0525b42",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/a90e738536a20d1fab0d1a41e168e8ca2bc47d": "639dd8c58bc911e7ca1e0d843949e7b5",
".git/objects/63/b807b5b525ee0ceabac71dc30a3fc4e65edbdc": "06c18731ff26f3abbdeb18cf8fe0ce36",
".git/objects/64/7501ca23b146446568671133512b040e74c759": "ee11674dcb28ffbedece7ae3b6653594",
".git/objects/65/fe852969105afb5f8b0d048ccf7bdde1302b98": "d48b737bff547060f78516001208e083",
".git/objects/66/53056b51fc61ea2742b9ff5a954b05780c3b1e": "30a78963ccba54899de0ef7b9e1e9896",
".git/objects/6a/2df0fcf9f8779cf0e0a98c3c66206f914969b3": "d08e26b8c6ee2269bc8850b4e91c57db",
".git/objects/6c/71e9bc453ff332533596943936894b2145c433": "145b112b4ace2abd16058f5007871d67",
".git/objects/6c/dcca1fa61c33cff4895637c9534fb3f6dbdf82": "f43694c751d9edbd44224624a6b527a1",
".git/objects/6d/68287d753a49069f2356a0f9cfb516c2bc8b05": "e63dea4841d5747cfab4eb65469b282f",
".git/objects/70/2760e4e74d74b16685fd73400254cf9ad0597c": "34229cb98a6f1b5983e6f9609f69584c",
".git/objects/71/37f61b6ea4e585486c8de1c2af155358d9997e": "50408bab1b23eab6c120e39b581aba90",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/e4103d44c6b5407166cfbf0eaf62a9180b9836": "14bb0cfda6f7e6e14c00ba102224fc91",
".git/objects/73/e7bccb2daeab9719c48c0a320292c84be289ab": "7f4115f2c24bae3a9cdb7e502b39adf7",
".git/objects/75/22b45bdc6f1cf7ddef5fd22f00908a51f45978": "a26945d2aa184552e3dee8f78eaa5930",
".git/objects/77/a7d709a4b83b7a6a562d81b6f2f9bc58558d24": "2c7970a115e06fc4fb4cd13ef90db009",
".git/objects/7b/1ed3cb036780e72d1d1c3830afaa595b5409ad": "b2dcf2a5c21ee0e67e3976e129688356",
".git/objects/7b/7b2f561e7f002c62c583043d74010dddf2eded": "7651cff77345e871f7e4d8f4b17a57a6",
".git/objects/7c/2efd1f9747f7714e5a900d13add6fe3436432d": "2592285cff3cd69f51d6c4ec9a0b074b",
".git/objects/7e/18c0fa4740c007cc406f7816436a6311208121": "4c0bf1b9f3b6d6b113fe156296ceeb2f",
".git/objects/80/099ca0aa9b7be4bbae2aae27cb2b6df9e74737": "96058019136e8f8b404b74362f17bd81",
".git/objects/80/6b5a993ddfd8d983c6fa70b7c9764099b3be2f": "4755917506ab19b680ed03aa3190986b",
".git/objects/81/51ea5b72c6a5024020f2067339803dfffa3baf": "c2f398d37ae0e6d081ada5f7f9c5fd5e",
".git/objects/82/e9726096032ba958e640ddbcec8b0a549d93fa": "777e5fdd7e5066cabd67c9521908a48b",
".git/objects/84/1c0d9caad7a7e056739625e9d302d6cffb612c": "60fcd184304ba4deaf13f1e212ca106b",
".git/objects/84/576d99511f5cfb4fede4fed62d11b0228ce29e": "9bc2939605cc30b9bfd572f0d550b745",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/b9766c9ec102e9f69b352a89d74e0e93db557e": "4a02d8ce8760b89232c2738c2129e0c2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/278d35234d99181b6fba5554b739918d58bd32": "02f625920c49e669b62ea680b3463e87",
".git/objects/8a/508c25c4717482bf5626b1a82fb2d92d37bd1a": "26c10cfad67016083bd84af6a34bdde4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/871395ecbdefeb91eb1e5267bd7f14c62fa249": "81fb180020d6d8faddc33175d799a415",
".git/objects/8b/a89eca160fb2e5c5cf7ef1f27f5a3caab28fcf": "543a94266288cde53748f5e5052cc900",
".git/objects/8c/730325ba01febd46c45f4cbd963703732acdb2": "8f6fcbd76946288a44dc8b2b380a2a9a",
".git/objects/8d/63a0db66f0bea4c145984244f186341d4dbc3e": "b8afd82b9eb77deb59896f9abb2f6a36",
".git/objects/8e/088ca9c15393322e65872f5d45768f8bf41117": "233069d16ab13d488df0b413d5441404",
".git/objects/8f/517d8cf769578c9145614bb83fb8ddace9ec36": "3d18feefffd52bf8f504de13d10807bc",
".git/objects/90/0c5498e9fcf0c645d32bfdd3de029e4a8d4bb2": "c5c3e6f079c3343a9306066984bf473b",
".git/objects/90/862da45cf292a2558b07a527c9ffb0058cc555": "bb2e7bbf476d1d6e871b1dc2fe9f1d41",
".git/objects/93/1aa9c14d6f7aa26e42265ec8381b3d86e9d01c": "0aa58c99ebaf1775dc625e2b086198f4",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/3666537a462eeecd7440c5fe8d04a1252b1ebd": "7461c00cfce511cf442188e4c934e4a0",
".git/objects/9a/a9bc823ea7b407082138d5459fa8c8de6dc5dd": "51f23b232a6383019fb0bc6c13aa7211",
".git/objects/9b/241d441c39af7b5394d238624a69ce3ce23da8": "3147dcde0262dc1ce6071b4b06556129",
".git/objects/9c/3d37db2180b5c7454e4446bf8369282a7cb7ea": "4730bf115d1a21b48d3fe7fa0863a6f5",
".git/objects/9d/39fee47a1a3d91e455f0a575b42af34f08e95f": "9dbc6748f640708dd1311c7261706a54",
".git/objects/9d/4eab606cdfe425034745dfed9f6a3b5045ca86": "8b597ba7a56d826b70dc82e3ee0c8ec3",
".git/objects/a2/1a44183230c2b8fb39e388b78f338750494345": "8d8b8b2d1e86c2736dfaefbca6d79b59",
".git/objects/a3/4037e0afe1943afbb4689ea95979bbeaa6f376": "42afb227aa43aa1c71238ed15484f9c6",
".git/objects/a3/8bbb3bdcf9c46cdc4001a46ad46df207d8e780": "0109721fef6dfee434d58b8ad93e5b43",
".git/objects/a5/e448f364e0597c91bd5001432017b5140aa45c": "c2eace99e76167751107dbf51c3fa964",
".git/objects/a7/486019bc3c7101ce0c8869a4145a974e95671d": "bb84e51abfcccaba38bd41d63cfc4c6b",
".git/objects/a9/fbae137bfa45bf604182af838f97f94b5e6c64": "0e9cd20d791f286171c80dde1fdf36d5",
".git/objects/ab/034b4f0fa0bcf45c86b394ba492516ae2c65df": "941a37a6c01e687ea88fa682c2aa4693",
".git/objects/ab/4f2544c4618ca35647191f09539d1e0f499a53": "651730a59d1a0512af93bd98d08944eb",
".git/objects/ac/923a0002e2e6ba4b4cd4efea45a87c2001564d": "537e9817572e8d828718af537482ea3b",
".git/objects/ad/80e2582424f77a6c6cb52bbb447219ee1c6644": "ff7c65ad3094bad8bcc49ce779630962",
".git/objects/ae/35abf254f21d4d1cd682053b03834d850b8671": "682a82da8e043205fff26dcd295f40e4",
".git/objects/ae/f9ca9d2c6880ab6c48e4bae76ed64b034fc7e1": "693dce5848945e62234d94e80056296f",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/88396b402ed1a8d552fd33029dd41903f0476a": "ebabe5f4a9715917e947f7e5fd700e6d",
".git/objects/b6/579fb34c76428fb62cb67a4d089fd95ef5c438": "006882271b0384b617afc77dcc86e78e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/b5cb5118489effe325aba8361470919eedd669": "b1a552c862f1d572458c2053da27edb1",
".git/objects/bd/4be204da3f02d96ddc351de46f1c3ab5fc9b33": "2685c4752b774902de15f1bd616010bd",
".git/objects/be/69c4c3e93beb0536cba252d9fbc224733084ea": "80dba43637790da588b29b760ea41550",
".git/objects/bf/323c45aaea510b25f9c635389ffe10c552892b": "38967ed612cb73fc9eb6daf24535e9d5",
".git/objects/bf/630ac1d86fb7e963a6b56eb2cb323ee8090bfd": "48dcef86517659a6cf339b4a7ca3f7b5",
".git/objects/c0/406ac5cf4cd968113cdccdff417714cadaadee": "3ca2fcf4a88afbb0c087cc84f1b0bcc5",
".git/objects/c0/6c0be8af02229cf23d7a4d279a8d46a0362ad8": "c5e248e6655e6cd497a201c3780c5bb1",
".git/objects/c1/3bc50f162b4f48a8fc4e85675061cf0c8d6b73": "953ea082b2b93d4bfb6e1d2a0048320d",
".git/objects/c1/66b1a7e4da2a41c0065a9167fb87e7eaf07b45": "91312953e305883dc426f3887b470fc2",
".git/objects/c2/362ea2e3534cb4ee25860cfd241204270a01db": "a414b5bd73d8a69cac799cf24f46c114",
".git/objects/c2/75f9989136cd97009616459060cfd6cad012ff": "eb896ffe1d7c67cf071dda13a6fd694d",
".git/objects/c8/726c53b0ce81a63baf63669ee01ae9e5659d56": "d345095544488dddae7de5dae2b77bdb",
".git/objects/c9/0841786f250866c0871b2311d32da29c3661b0": "1b8c2415148cec45a208822ff578b976",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/f4d938a5d5c508c020b02d088020c14728ceb8": "24a56ea3f39d7ee91f3a10eb3a32fcbe",
".git/objects/cd/30f06abac3a7af22b82cdd3ab3ee42f5570d1c": "83246268359673b1f75b86980ee3a360",
".git/objects/cd/918f87c3049d7b60d022c878dae17aa653527f": "d34984e7943684cb67115e6d0963ab7f",
".git/objects/ce/e823c85451eee6eee0a8616cf5f22e772426e1": "04519050609a6e49345e2e88a30c0f8a",
".git/objects/cf/ca4a577d25e53e21222f82cb0739cf48378368": "1e42241c7618dca98a960087a9313abb",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/c12069f37a1bc493803f72cf17500ddb6b46cb": "dbde1cc950858703140f489ed1526ab3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b3e9f920c94179adaf978b071a6dff3276a80d": "103d18375dacce68db1ac805ccbbfdbb",
".git/objects/d5/3988dccabf2a3ee8303116f7581b7f21591554": "18ade869a64d061c952d66175ad490c4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/2aca95d494b2b835852335e4c2da502b003946": "1bb861f348ec039a03549d4c118f9191",
".git/objects/df/6b2b9becc2ce9cbc1bef371aeff8eda00be2ab": "a9a6af4a9634aa2d46f61093c69883bd",
".git/objects/e0/2d4cc9ab04aa68e2a4ea2dfecd8d5cef6b1c95": "3a7def02faecc71a2b08c04a2c083c8b",
".git/objects/e2/4b0d015b67113608e114431eccc4560355f883": "783aebfb924bfc645f74d87d2c0ff859",
".git/objects/e3/202a8cab836a1733e83d2aebddee092f04f6b7": "c6cca0d4d7e9121ab8d386516bcffec0",
".git/objects/e7/0527b390cc0c31589b1603c653be68f2f2342d": "0cf38c51aeba96f687e84bc5177fc737",
".git/objects/e7/ba7455a0402d547e788ab8af0082afe6118d06": "a27b4e7330101dd4eda36465bee56836",
".git/objects/e9/3815fe66dc6573249df4fc0b8f84aa8eba0f17": "39079aed7a0d5e5b2ecf7846f3c76210",
".git/objects/e9/9443d2f9a5881b47ef829eff93b0bef3ad7dbd": "c01d9e7432f862b1ac54dee84fb94f1d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/e443fc3464200346f223e2b89f5912a6d9318c": "f01b551927315b8841fd64df2c51e0b0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/a0d3b9c655c4476effbc22d11042075dfb79f6": "5452c37952a93e212a5ed7b81dbbd7dc",
".git/objects/f5/e369dd79a625087335e8764bc3eb4b423804a1": "d8e5aa9a0ffe1154c52c0003250b8895",
".git/objects/f6/2cf565368932f7115fcd97f9e542a436e1c9ce": "f399935f95d80e106a2d0e2e3ae7426d",
".git/objects/fe/7abff24f9e25318274e521a0a85c0585b7e522": "fd73729ddd4710556c08224966ece93d",
".git/objects/fe/c95155e03e9b2b9fb66ff511d81483ee1f8910": "8076b1ad2ff04806494d80c77ccbb600",
".git/objects/ff/8494f4d3ac77e6296e620e35e0f412486e69be": "dd3af2284b151a93d2d7db97bb511b5a",
".git/refs/heads/main": "223f77f8fa3cd66cab17b6199ec9f656",
".git/refs/remotes/origin/main": "223f77f8fa3cd66cab17b6199ec9f656",
"assets/AssetManifest.bin": "ec152355c0299ce2a2ce8f92194227b2",
"assets/AssetManifest.bin.json": "a00c7a6409cbd0666dc05b6eb3500350",
"assets/AssetManifest.json": "29454a68ed5b4c2a76c1ad4cabaedac0",
"assets/assets/11.PNG": "2af946db2407ac64cfdaafe0ff6ec8c8",
"assets/assets/22.PNG": "e26943d7cb34e5903e754605f584b829",
"assets/assets/33.PNG": "4d1d2a5cfab30482197b5522cbb7968e",
"assets/assets/44.PNG": "195943edabf80072bfda029c44eed0ba",
"assets/assets/55.PNG": "15fa7c5b7c510d482b67d7070a8bf8de",
"assets/assets/ample.gif": "6f02c541f2247303f52d00e3f1096ffc",
"assets/assets/bgImage.jpg": "8a3268201ea37a0a779376456713973a",
"assets/assets/BgImageContact.JPG": "a4e6cc78bbdca0d9603377bc7aaf1b32",
"assets/assets/bottomLeft.jpg": "96b85d84312043dcd63aeac8a58845e1",
"assets/assets/bottomRight.jpg": "e218075e93dbe7bd178299da72652a5f",
"assets/assets/Capture.PNG": "8167155123e85c3c9701be409fd42f80",
"assets/assets/certificate11.png": "087879cbc83b6cd329570fcbc0e853d8",
"assets/assets/certificate22.png": "8dcd97c36d4e301cef83390ea6fef151",
"assets/assets/certificate33.png": "24675cdb18a6812e6c2ef1526f13ff9f",
"assets/assets/certificate44.JPG": "8dcd97c36d4e301cef83390ea6fef151",
"assets/assets/fonts/LibreBaskerville-Regular.ttf": "fac7df0a4714aacd0bfbca6cf57a488c",
"assets/assets/fonts/NeueMontreal-Regular.otf": "4d742e8ebdf9b030dc46a59963a6e1fb",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "f539ae4a8884822210a4553cc88ca3dc",
"assets/assets/gmail.png": "66c8f4e88d969252631acf1b842393c9",
"assets/assets/left.jpg": "b4e6dc0c1692b0bbd348271438908df8",
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
"assets/assets/right.jpg": "694aae73a4cec7c8429f503a21924bc4",
"assets/assets/topLeft.jpg": "4df8c796dd1ab18a87a8258b52493bfc",
"assets/assets/topRight.jpg": "2857b260f8d4451c77592efa139e9300",
"assets/FontManifest.json": "98923a4248c0d4a6e63813efebf70c46",
"assets/fonts/MaterialIcons-Regular.otf": "66e572ac4c80f0ba76ad1a1601c507e8",
"assets/NOTICES": "e955ca75565a40d08be83ce0ee80676d",
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
"flutter_bootstrap.js": "c3520bdb6179a995b68853f5d16b13d1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "61152af67d3b0ee4106ed5de02529a71",
"/": "61152af67d3b0ee4106ed5de02529a71",
"main.dart.js": "d852fa6d419fdf300f799c6ef7a2ca7c",
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
