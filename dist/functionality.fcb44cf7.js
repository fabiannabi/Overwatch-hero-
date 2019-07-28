// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"resources/js/functionality.js":[function(require,module,exports) {
//variables que cambian la foto de muestra de personaje al presionar el icono de cada uno
//por default se comienza con tracer, pero la variable de hero picture se sobre escribe
//por una nueva dependiendo el caso
var profileHeroTracer = "https://static.playoverwatch.com/media/wallpaper/tracer-wallpaper-wide.jpg";
var profileHeroDva = "https://static.playoverwatch.com/media/wallpaper/dva-wallpaper-wide.jpg";
var profileHeroMercy = "https://static.playoverwatch.com/media/wallpaper/mercy-theatrical-wide.jpg";
var profileHeroHog = "https://static.playoverwatch.com/media/wallpaper/halloween-terror-wide.jpg";
var profileHeroSoldier = "https://static.playoverwatch.com/media/wallpaper/soldier-wallpaper-wide.jpg";
var profileHeroGenji = "https://static.playoverwatch.com/media/wallpaper/genji-theatrical-wide.jpg";
var profileTeamShanghai = "https://bnetcmsus-a.akamaihd.net/cms/blog_header/4x/4XOIT26EFOEN1515105939402.jpg";
var profileTeamFuel = "https://bnetcmsus-a.akamaihd.net/cms/blog_header/zo/ZOQ4XAHSF4CN1510703544602.JPG";
var profileTeamOutlaws = "https://bnetcmsus-a.akamaihd.net/cms/page_media/qp/QPGMG8PAK82T1513307261784.jpg";
var profileTeamFili = "https://bnetcmsus-a.akamaihd.net/cms/blog_header/ie/IEJFIHXR2DS21517430855082.png";
var profileTeamSeoul = "https://bnetcmsus-a.akamaihd.net/cms/blog_header/p6/P6U0KR4G9DFE1509816687002.jpg";
var DescriptionTracer = "Toting twin pulse pistols, energy-based time bombs, and rapid-fire banter, Tracer is able to 'blink' through space and rewind her personal timeline as she battles to right wrongs the world over.";
var DescriptionDva = "D.Va’s mech is nimble and powerful—its twin Fusion Cannons blast away with autofire at short range, and she can use its Boosters to barrel over enemies and obstacles, or deflect attacks with her projectile-dismantling Defense Matrix.";
var DescriptionMercy = "Mercy’s Valkyrie Suit helps keep her close to teammates like a guardian angel; healing, resurrecting or strengthening them with the beams emanating from her Caduceus Staff.";
var DescriptionSoldier = "Armed with cutting-edge weaponry, including an experimental pulse rifle that’s capable of firing spirals of high-powered Helix Rockets, Soldier: 76 has the speed and support know-how of a highly trained warrior.";
var DescriptionHog = "Roadhog uses his signature Chain Hook to pull his enemies close before shredding them with blasts from his Scrap Gun. He’s hardy enough to withstand tremendous damage, and can recover his health with a short breather.";
var DescriptionGenji = "Genji flings precise and deadly Shuriken at his targets, and uses his technologically-advanced katana to deflect projectiles or deliver a Swift Strike that cuts down enemies.";
var TeamScoreShanghai = "SHANGHAI DRAGONS RECORD 43W-42L";
var TeamScoreFuel = "DALLAS FUEL RECORD 37W-47L";
var TeamScoreOutlaws = "HUSTON OUTLAWS RECORD 36W-50L";
var TeamScoreFili = " FILAFELFIA FUSION RECORD 42W-43L";
var TeamScoreSeoul = "DALLAS FUEL RECORD 51W-34L"; // selector para el evento de presionar las imagenes de los thumbnails

document.querySelector(".thumbnails").addEventListener("click", function (event) {
  console.log("gerer");
  heroSelector(event.target.className);
}); // selector para el evento de presionar las imagenes de los thumbnails de los equipos de OWL

document.querySelector(".thumbnails-team").addEventListener("click", function (event) {
  teamSelector(event.target.className);
}); // selector para el input de dropdown que muestra el cambio de opciones

document.querySelector(".maps-input").addEventListener("change", function (event) {
  mapSelector(event.target.value);
}); // funcion para cambiar la imagen del mapa cuando la opcion del dropdown se cambia a cualquiera de las 3 opciones

function mapSelector(mapType) {
  switch (mapType.toLowerCase()) {
    case "assault":
      document.querySelector(".map-image").src = "https://static.playoverwatch.com/img/pages/maps/images/hanamura.jpg";
      document.querySelector(".map-description").innerText = "HANAMURA-JAPAN";
      break;

    case "control":
      document.querySelector(".map-image").src = "https://static.playoverwatch.com/img/pages/maps/images/ilios.jpg";
      document.querySelector(".map-description").innerText = "ILLIOS-GRECEE";
      break;

    case "escort":
      document.querySelector(".map-image").src = "https://static.playoverwatch.com/img/pages/maps/images/dorado.jpg";
      document.querySelector(".map-description").innerText = "DORADO-MEXICO";
      break;
  }
} // funcion para cambiar imagen y texto de la descripcion del equipo de OWL


function teamSelector(teamName) {
  switch (teamName) {
    case "shanghai":
      document.querySelector(".team-logo").src = profileTeamShanghai;
      document.querySelector(".team-score").innerText = TeamScoreShanghai;
      break;

    case "fuel":
      document.querySelector(".team-logo").src = profileTeamFuel;
      document.querySelector(".team-score").innerText = TeamScoreFuel;
      break;

    case "fili":
      document.querySelector(".team-logo").src = profileTeamFili;
      document.querySelector(".team-score").innerText = TeamScoreFili;
      break;

    case "outlaws":
      document.querySelector(".team-logo").src = profileTeamOutlaws;
      document.querySelector(".team-score").innerText = TeamScoreOutlaws;
      break;

    case "seoul":
      document.querySelector(".team-logo").src = profileTeamSeoul;
      document.querySelector(".team-score").innerText = TeamScoreSeoul;
      break;
  }
} // funcion para cambiar imagen y texto de la descripcion del heroe cuando se presiona la imagen del thumbnail


function heroSelector(heroName) {
  switch (heroName) {
    case "tracer":
      document.querySelector(".hero-picture").src = profileHeroTracer;
      document.querySelector(".hero-description").innerText = DescriptionTracer;
      break;

    case "Dva":
      document.querySelector(".hero-picture").src = profileHeroDva;
      document.querySelector(".hero-description").innerText = DescriptionDva;
      break;

    case "mercy":
      document.querySelector(".hero-picture").src = profileHeroMercy;
      document.querySelector(".hero-description").innerText = DescriptionMercy;
      break;

    case "hog":
      document.querySelector(".hero-picture").src = profileHeroHog;
      document.querySelector(".hero-description").innerText = DescriptionHog;
      break;

    case "soldier":
      document.querySelector(".hero-picture").src = profileHeroSoldier;
      document.querySelector(".hero-description").innerText = DescriptionSoldier;
      break;

    case "genji":
      document.querySelector(".hero-picture").src = profileHeroGenji;
      document.querySelector(".hero-description").innerText = DescriptionGenji;
      break;
  }
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50257" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","resources/js/functionality.js"], null)
//# sourceMappingURL=/functionality.fcb44cf7.js.map