// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3801V":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c662b2d902d58022";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dx2Y6":[function(require,module,exports) {
var geojsontoosm = require("geojsontoosm");
var osm_geojson = require("osm-and-geojson");
mapboxgl.accessToken = "pk.eyJ1IjoicGxhbmVtYWQiLCJhIjoiY2l2eDhnNzNpMDAwNzJ5cGowcnpiMXJkdyJ9.NljuPglsRA3mTGf-4CLIEg";
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/planemad/cknj1leps0ywv17lrj8d16vnj",
    center: [
        76,
        28
    ],
    zoom: 11.2,
    hash: true
});
// Add the control to the map.
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    countries: "in"
}));
// Convert tile features as OSM XML
map.on("click", (e)=>{
    if (map.getZoom() >= 10) {
        // Find all features in one source layer in a vector source
        const features = map.querySourceFeatures("composite", {
            sourceLayer: "geosadak_road_diff"
        });
        const geojson = {
            type: "FeatureCollection",
            features: features
        };
        const osm_xml = geojsontoosm(geojson);
        function download(filename, text) {
            var element = document.createElement("a");
            element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
            element.setAttribute("download", filename);
            element.style.display = "none";
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }
        download("geosadak_diff.osm", osm_xml);
    // window.open(`http://127.0.0.1:8111/load_data?new_layer=true&layer_name=geosadak&mime_type=application/x-osm+xml&data="${enc_osm_xml}"`, '_blank');
    }
});

},{"geojsontoosm":"fvB4r","osm-and-geojson":"gDxAM"}],"fvB4r":[function(require,module,exports) {
var jxon = require('jxon');
function geojsontoosm(geojson) {
    var features = geojson.features || (geojson.length > 0 ? geojson : [
        geojson
    ]);
    var nodes = [], nodesIndex = {
    }, ways = [], relations = [];
    features.forEach(function(feature) {
        // todo: GeometryCollection?
        var properties = feature.properties || {
        }, geometry = feature.geometry || feature;
        // todo: validity check
        // todo: ids if (feature.id && feature.id.match(/^(node|way|relation)\/(\d+)$/)) id = …
        switch(geometry.type){
            case "Point":
                processPoint(geometry.coordinates, properties, nodes, nodesIndex);
                break;
            case "LineString":
                processLineString(geometry.coordinates, properties, ways, nodes, nodesIndex);
                break;
            case "Polygon":
                processMultiPolygon([
                    geometry.coordinates
                ], properties, relations, ways, nodes, nodesIndex);
                break;
            case "Multipolygon":
                processMultiPolygon(geometry.coordinates, properties, relations, ways, nodes, nodesIndex);
                break;
            default:
                console.error("unknown or unsupported geometry type:", geometry.type);
        }
    });
    //console.log(nodes, ways, relations)
    var lastNodeId = -1, lastWayId = -1, lastRelationId = -1;
    function jxonTags(tags) {
        var res = [];
        for(var k in tags)res.push({
            "@k": k,
            "@v": tags[k]
        });
        return res;
    }
    var jxonData = {
        osm: {
            "@version": "0.6",
            "@generator": "geojsontoosm",
            "node": nodes.map(function(node) {
                node.id = lastNodeId--;
                return {
                    "@id": node.id,
                    "@lat": node.lat,
                    "@lon": node.lon,
                    // todo: meta
                    "tag": jxonTags(node.tags)
                };
            }),
            "way": ways.map(function(way) {
                way.id = lastWayId--;
                return {
                    "@id": way.id,
                    "nd": way.nodes.map(function(nd) {
                        return {
                            "@ref": nd.id
                        };
                    }),
                    "tag": jxonTags(way.tags)
                };
            }),
            "relation": relations.map(function(relation) {
                relation.id = lastRelationId--;
                return {
                    "@id": relation.id,
                    "member": relation.members.map(function(member) {
                        return {
                            "@type": member.type,
                            "@ref": member.elem.id,
                            "@role": member.role
                        };
                    }),
                    "tag": jxonTags(relation.tags)
                };
            })
        }
    };
    // todo: sort by id
    return jxon.jsToString(jxonData);
}
function getNodeHash(coords) {
    return JSON.stringify(coords);
}
function emptyNode(coordinates, properties) {
    return {
        tags: properties,
        lat: coordinates[1],
        lon: coordinates[0]
    };
// todo: meta
// todo: move "nodesIndex[hash] = node" here
}
function processPoint(coordinates, properties, nodes, nodesIndex) {
    var hash = getNodeHash(coordinates), node;
    if (!(node = nodesIndex[hash])) {
        nodes.push(node = emptyNode(coordinates, properties));
        nodesIndex[hash] = node;
    } else for(var k in properties)node.tags[k] = properties[k];
}
function processLineString(coordinates, properties, ways, nodes, nodesIndex) {
    var way = {
        tags: properties,
        nodes: []
    };
    ways.push(way);
    // todo: meta
    coordinates.forEach(function(point) {
        var hash = getNodeHash(point), node;
        if (!(node = nodesIndex[hash])) {
            nodes.push(node = emptyNode(point, {
            }));
            nodesIndex[hash] = node;
        }
        way.nodes.push(node);
    });
}
function processMultiPolygon(coordinates, properties, relations, ways, nodes, nodesIndex) {
    // simple area with only 1 ring: -> closed way
    if (coordinates.length === 1 && coordinates[0].length === 1) return processLineString(coordinates[0][0], properties, ways, nodes, nodesIndex);
    // multipolygon
    var relation = {
        tags: properties,
        members: []
    };
    relation.tags["type"] = "multipolygon";
    relations.push(relation);
    // todo: meta
    coordinates.forEach(function(polygon) {
        polygon.forEach(function(ring, index) {
            var way = {
                tags: {
                },
                nodes: []
            };
            ways.push(way);
            relation.members.push({
                elem: way,
                type: "way",
                role: index === 0 ? "outer" : "inner"
            });
            ring.forEach(function(point) {
                var hash = getNodeHash(point), node;
                if (!(node = nodesIndex[hash])) {
                    nodes.push(node = emptyNode(point, {
                    }));
                    nodesIndex[hash] = node;
                }
                way.nodes.push(node);
            });
        });
    });
}
module.exports = geojsontoosm;

},{"jxon":"3BK53"}],"3BK53":[function(require,module,exports) {
(function(root, factory) {
    if (typeof define === 'function' && define.amd) // AMD. Register as an anonymous module.
    define(factory(window));
    else if (typeof exports === 'object') {
        if (typeof window === 'object' && window.DOMImplementation) // Browserify. hardcode usage of browser's own XMLDom implementation
        // see https://github.com/tyrasd/jxon/issues/18
        module.exports = factory(window);
        else // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('xmldom'));
    } else // Browser globals (root is window)
    root.JXON = factory(window);
})(this, function(xmlDom) {
    return new function() {
        var sValProp = "keyValue", sAttrProp = "keyAttributes", sAttrsPref = "@", sLowCase = true, sEmptyTrue = true, sAutoDate = true, sIgnorePrefixed = false, parserErrorHandler, DOMParser, sParseValues = true, /* you can customize these values */ aCache = [], rIsNull = /^\s*$/, rIsBool = /^(?:true|false)$/i;
        function parseText(sValue) {
            if (!sParseValues) return sValue;
            if (rIsNull.test(sValue)) return null;
            if (rIsBool.test(sValue)) return sValue.toLowerCase() === "true";
            if (isFinite(sValue)) return parseFloat(sValue);
            if (sAutoDate && isFinite(Date.parse(sValue))) return new Date(sValue);
            return sValue;
        }
        function EmptyTree() {
        }
        EmptyTree.prototype.toString = function() {
            return "null";
        };
        EmptyTree.prototype.valueOf = function() {
            return null;
        };
        function objectify(vValue) {
            return vValue === null ? new EmptyTree() : vValue instanceof Object ? vValue : new vValue.constructor(vValue);
        }
        function createObjTree(oParentNode, nVerb, bFreeze, bNesteAttr) {
            var nLevelStart = aCache.length, bChildren = oParentNode.hasChildNodes(), bAttributes = oParentNode.nodeType === oParentNode.ELEMENT_NODE && oParentNode.hasAttributes(), bHighVerb = Boolean(nVerb & 2);
            var sProp, vContent, nLength = 0, sCollectedTxt = "", vResult = bHighVerb ? {
            } : sEmptyTrue ? true : '';
            if (bChildren) for(var oNode, nItem = 0; nItem < oParentNode.childNodes.length; nItem++){
                oNode = oParentNode.childNodes.item(nItem);
                if (oNode.nodeType === 4) sCollectedTxt += oNode.nodeValue;
                else if (oNode.nodeType === 3) sCollectedTxt += oNode.nodeValue.trim();
                else if (oNode.nodeType === 1 && !(sIgnorePrefixed && oNode.prefix)) aCache.push(oNode);
                 /* nodeType is "Element" (1) */ 
            }
            var nLevelEnd = aCache.length, vBuiltVal = parseText(sCollectedTxt);
            if (!bHighVerb && (bChildren || bAttributes)) vResult = nVerb === 0 ? objectify(vBuiltVal) : {
            };
            for(var nElId = nLevelStart; nElId < nLevelEnd; nElId++){
                sProp = aCache[nElId].nodeName;
                if (sLowCase) sProp = sProp.toLowerCase();
                vContent = createObjTree(aCache[nElId], nVerb, bFreeze, bNesteAttr);
                if (vResult.hasOwnProperty(sProp)) {
                    if (vResult[sProp].constructor !== Array) vResult[sProp] = [
                        vResult[sProp]
                    ];
                    vResult[sProp].push(vContent);
                } else {
                    vResult[sProp] = vContent;
                    nLength++;
                }
            }
            if (bAttributes) {
                var nAttrLen = oParentNode.attributes.length, sAPrefix = bNesteAttr ? "" : sAttrsPref, oAttrParent = bNesteAttr ? {
                } : vResult;
                for(var oAttrib, oAttribName, nAttrib = 0; nAttrib < nAttrLen; nLength++, nAttrib++){
                    oAttrib = oParentNode.attributes.item(nAttrib);
                    oAttribName = oAttrib.name;
                    if (sLowCase) oAttribName = oAttribName.toLowerCase();
                    oAttrParent[sAPrefix + oAttribName] = parseText(oAttrib.value.trim());
                }
                if (bNesteAttr) {
                    if (bFreeze) Object.freeze(oAttrParent);
                    vResult[sAttrProp] = oAttrParent;
                    nLength -= nAttrLen - 1;
                }
            }
            if (nVerb === 3 || (nVerb === 2 || nVerb === 1 && nLength > 0) && sCollectedTxt) vResult[sValProp] = vBuiltVal;
            else if (!bHighVerb && nLength === 0 && sCollectedTxt) vResult = vBuiltVal;
            if (bFreeze && (bHighVerb || nLength > 0)) Object.freeze(vResult);
            aCache.length = nLevelStart;
            return vResult;
        }
        function loadObjTree(oXMLDoc, oParentEl, oParentObj) {
            var vValue, oChild;
            if (oParentObj.constructor === String || oParentObj.constructor === Number || oParentObj.constructor === Boolean) {
                oParentEl.appendChild(oXMLDoc.createTextNode(oParentObj.toString())); /* verbosity level is 0 or 1 */ 
                if (oParentObj === oParentObj.valueOf()) return;
            } else if (oParentObj.constructor === Date) oParentEl.appendChild(oXMLDoc.createTextNode(oParentObj.toGMTString()));
            for(var sName in oParentObj){
                vValue = oParentObj[sName];
                if (vValue === null) vValue = {
                };
                if (isFinite(sName) || vValue instanceof Function) continue;
                 /* verbosity level is 0 */ 
                // when it is _
                if (sName === sValProp) {
                    if (vValue !== null && vValue !== true) oParentEl.appendChild(oXMLDoc.createTextNode(vValue.constructor === Date ? vValue.toGMTString() : String(vValue)));
                } else if (sName === sAttrProp) for(var sAttrib in vValue)oParentEl.setAttribute(sAttrib, vValue[sAttrib]);
                else if (sName === sAttrsPref + 'xmlns') ;
                else if (sName.charAt(0) === sAttrsPref) oParentEl.setAttribute(sName.slice(1), vValue);
                else if (vValue.constructor === Array) for(var nItem = 0; nItem < vValue.length; nItem++){
                    oChild = oXMLDoc.createElementNS(vValue[nItem][sAttrsPref + 'xmlns'] || oParentEl.namespaceURI, sName);
                    loadObjTree(oXMLDoc, oChild, vValue[nItem]);
                    oParentEl.appendChild(oChild);
                }
                else {
                    oChild = oXMLDoc.createElementNS((vValue || {
                    })[sAttrsPref + 'xmlns'] || oParentEl.namespaceURI, sName);
                    if (vValue instanceof Object) loadObjTree(oXMLDoc, oChild, vValue);
                    else if (vValue !== null && vValue !== true) oChild.appendChild(oXMLDoc.createTextNode(vValue.toString()));
                    else if (!sEmptyTrue && vValue === true) oChild.appendChild(oXMLDoc.createTextNode(vValue.toString()));
                    oParentEl.appendChild(oChild);
                }
            }
        }
        this.xmlToJs = this.build = function(oXMLParent, nVerbosity /* optional */ , bFreeze /* optional */ , bNesteAttributes /* optional */ ) {
            var _nVerb = arguments.length > 1 && typeof nVerbosity === "number" ? nVerbosity & 3 : /* put here the default verbosity level: */ 1;
            return createObjTree(oXMLParent, _nVerb, bFreeze || false, arguments.length > 3 ? bNesteAttributes : _nVerb === 3);
        };
        this.jsToXml = this.unbuild = function(oObjTree, sNamespaceURI /* optional */ , sQualifiedName /* optional */ , oDocumentType /* optional */ ) {
            var documentImplementation = xmlDom.document && xmlDom.document.implementation || new xmlDom.DOMImplementation();
            var oNewDoc = documentImplementation.createDocument(sNamespaceURI || null, sQualifiedName || "", oDocumentType || null);
            loadObjTree(oNewDoc, oNewDoc.documentElement || oNewDoc, oObjTree);
            return oNewDoc;
        };
        this.config = function(o) {
            if (typeof o === 'undefined') return {
                valueKey: sValProp,
                attrKey: sAttrProp,
                attrPrefix: sAttrsPref,
                lowerCaseTags: sLowCase,
                trueIsEmpty: sEmptyTrue,
                autoDate: sAutoDate,
                ignorePrefixNodes: sIgnorePrefixed,
                parseValues: sParseValues,
                parserErrorHandler: parserErrorHandler
            };
            for(var k in o)switch(k){
                case 'valueKey':
                    sValProp = o.valueKey;
                    break;
                case 'attrKey':
                    sAttrProp = o.attrKey;
                    break;
                case 'attrPrefix':
                    sAttrsPref = o.attrPrefix;
                    break;
                case 'lowerCaseTags':
                    sLowCase = o.lowerCaseTags;
                    break;
                case 'trueIsEmpty':
                    sEmptyTrue = o.trueIsEmpty;
                    break;
                case 'autoDate':
                    sAutoDate = o.autoDate;
                    break;
                case 'ignorePrefixedNodes':
                    sIgnorePrefixed = o.ignorePrefixedNodes;
                    break;
                case 'parseValues':
                    sParseValues = o.parseValues;
                    break;
                case 'parserErrorHandler':
                    parserErrorHandler = o.parserErrorHandler;
                    DOMParser = new xmlDom.DOMParser({
                        errorHandler: parserErrorHandler,
                        locator: {
                        }
                    });
                    break;
                default:
                    break;
            }
        };
        this.stringToXml = function(xmlStr) {
            if (!DOMParser) DOMParser = new xmlDom.DOMParser();
            return DOMParser.parseFromString(xmlStr, 'application/xml');
        };
        this.xmlToString = function(xmlObj) {
            if (typeof xmlObj.xml !== "undefined") return xmlObj.xml;
            else return new xmlDom.XMLSerializer().serializeToString(xmlObj);
        };
        this.stringToJs = function(str) {
            var xmlObj = this.stringToXml(str);
            return this.xmlToJs(xmlObj);
        };
        this.jsToString = this.stringify = function(oObjTree, sNamespaceURI /* optional */ , sQualifiedName /* optional */ , oDocumentType /* optional */ ) {
            return this.xmlToString(this.jsToXml(oObjTree, sNamespaceURI, sQualifiedName, oDocumentType));
        };
    }();
});

},{"xmldom":"jhUEF"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"gDxAM":[function(require,module,exports) {
var osm_geojson = {
};
osm_geojson.geojson2osm = function(geo1, changeset, osmChange) {
    function togeojson(geo, properties) {
        var nodes = '', ways = '', relations = '';
        properties = properties || {
        };
        switch(geo.type){
            case 'Point':
                var coord = roundCoords([
                    geo.coordinates
                ]);
                nodes += '<node id="' + count + '" lat="' + coord[0][1] + '" lon="' + coord[0][0] + '" changeset="' + changeset + '">';
                nodes += propertiesToTags(properties);
                nodes += '</node>';
                count--;
                break;
            case 'MultiPoint':
                break;
            case 'LineString':
                break;
            case 'MultiLineString':
                break;
            case 'Polygon':
                append(polygon(geo, properties));
                break;
            case 'MultiPolygon':
                relations += '<relation id="' + count + '" changeset="' + changeset + '">';
                properties.type = 'multipolygon';
                count--;
                for(var i = 0; i < geo.coordinates.length; i++){
                    poly = polygon({
                        'coordinates': geo.coordinates[i]
                    }, undefined, true);
                    nodes += poly.nodes;
                    ways += poly.ways;
                    relations += poly.relations;
                }
                relations += propertiesToTags(properties);
                relations += '</relation>';
                break;
        }
        function append(obj) {
            nodes += obj.nodes;
            ways += obj.ways;
            relations += obj.relations;
        }
        osm = '<?xml version="1.0" encoding="UTF-8"?><osm version="0.6" generator="github.com/aaronlidman/osm-and-geojson">' + nodes + ways + relations + '</osm>';
        if (osmChange) osm = '<osmChange version="0.6" generator="github.com/aaronlidman/osm-and-geojson"><create>' + nodes + ways + relations + '</create></osmChange>';
        return {
            nodes: nodes,
            ways: ways,
            relations: relations,
            osm: osm
        };
    }
    function polygon(geo, properties, multipolygon) {
        var nodes = '', ways = '', relations = '', role = '';
        properties = properties || {
        };
        multipolygon = multipolygon || false;
        var coords = [];
        if (geo.coordinates.length > 1) {
            // polygon with holes -> multipolygon
            if (!multipolygon) relations += '<relation id="' + count + '" changeset="' + changeset + '">';
            count--;
            properties.type = 'multipolygon';
            for(var i = 0; i < geo.coordinates.length; i++){
                role = i === 0 ? 'outer' : 'inner';
                relations += '<member type="way" ref="' + count + '" role="' + role + '"/>';
                ways += '<way id="' + count + '" changeset="' + changeset + '">';
                count--;
                for(var a = 0; a < geo.coordinates[i].length - 1; a++)coords.push([
                    geo.coordinates[i][a][1],
                    geo.coordinates[i][a][0]
                ]);
                coords = createNodes(coords, true);
                nodes += coords.nodes;
                ways += coords.nds;
                ways += '</way>';
                coords = [];
            }
            if (!multipolygon) {
                relations += propertiesToTags(properties);
                relations += '</relation>';
            }
        } else {
            // polygon -> way
            ways += '<way id="' + count + '" changeset="' + changeset + '">';
            if (multipolygon) relations += '<member type="way" ref="' + count + '" role="outer"/>';
            count--;
            for(var j = 0; j < geo.coordinates[0].length - 1; j++)coords.push([
                geo.coordinates[0][j][1],
                geo.coordinates[0][j][0]
            ]);
            coords = createNodes(coords, true);
            nodes += coords.nodes;
            ways += coords.nds;
            ways += propertiesToTags(properties);
            ways += '</way>';
        }
        return {
            nodes: nodes,
            ways: ways,
            relations: relations
        };
    }
    function propertiesToTags(properties) {
        var tags = '';
        for(var tag in properties)if (properties[tag] !== null) tags += '<tag k="' + tag + '" v="' + properties[tag] + '"/>';
        return tags;
    }
    function roundCoords(coords) {
        for(var a = 0; a < coords.length; a++){
            coords[a][0] = Math.round(coords[a][0] * 1000000) / 1000000;
            coords[a][1] = Math.round(coords[a][1] * 1000000) / 1000000;
        }
        return coords;
    }
    function createNodes(coords, repeatLastND) {
        var nds = '', nodes = '', length = coords.length;
        repeatLastND = repeatLastND || false;
        // for polygons
        coords = roundCoords(coords);
        for(var a = 0; a < length; a++){
            if (repeatLastND && a === 0) repeatLastND = count;
            nds += '<nd ref="' + count + '"/>';
            nodes += '<node id="' + count + '" lat="' + coords[a][0] + '" lon="' + coords[a][1] + '" changeset="' + changeset + '"/>';
            if (repeatLastND && a === length - 1) nds += '<nd ref="' + repeatLastND + '"/>';
            count--;
        }
        return {
            'nds': nds,
            'nodes': nodes
        };
    }
    if (typeof geo1 === 'string') geo1 = JSON.parse(geo1);
    var obj1, count = -1;
    changeset = changeset || false;
    switch(geo1.type){
        case 'FeatureCollection':
            var temp = {
                nodes: '',
                ways: '',
                relations: ''
            };
            obj1 = [];
            for(var i1 = 0; i1 < geo1.features.length; i1++)obj1.push(togeojson(geo1.features[i1].geometry, geo1.features[i1].properties));
            temp.osm = '<?xml version="1.0" encoding="UTF-8"?><osm version="0.6" generator="github.com/aaronlidman/osm-and-geojson">';
            if (osmChange) temp.osm = '<osmChange version="0.6" generator="github.com/aaronlidman/osm-and-geojson"><create>';
            for(var n = 0; n < obj1.length; n++){
                temp.nodes += obj1[n].nodes;
                temp.ways += obj1[n].ways;
                temp.relations += obj1[n].relations;
            }
            temp.osm += temp.nodes + temp.ways + temp.relations;
            if (osmChange) temp.osm += '</create></osmChange>';
            else temp.osm += '</osm>';
            obj1 = temp.osm;
            break;
        case 'GeometryCollection':
            obj1 = [];
            for(var j1 = 0; j1 < geo1.geometries.length; j1++)obj1.push(togeojson(geo1.geometries[j1]));
            break;
        case 'Feature':
            obj1 = togeojson(geo1.geometry, geo1.properties);
            obj1 = obj1.osm;
            break;
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
        case 'Polygon':
        case 'MultiPolygon':
            obj1 = togeojson(geo1);
            obj1 = obj1.osm;
            break;
        default:
            if (console) console.log("Invalid GeoJSON object: GeoJSON object must be one of \"Point\", \"LineString\", \"Polygon\", \"MultiPolygon\", \"Feature\", \"FeatureCollection\" or \"GeometryCollection\".");
    }
    return obj1;
};
osm_geojson.osm2geojson = function(osm, metaProperties) {
    var xml1 = parse(osm), usedCoords = {
    }, nodeCache1 = cacheNodes(), wayCache1 = cacheWays();
    function parse(xml) {
        if (typeof xml !== 'string') return xml;
        return new DOMParser().parseFromString(xml, 'text/xml');
    }
    function Bounds(geo, xml) {
        var bounds = getBy(xml, 'bounds');
        if (!bounds.length) return geo;
        geo.bbox = [
            attrf(bounds[0], 'minlon'),
            attrf(bounds[0], 'minlat'),
            attrf(bounds[0], 'maxlon'),
            attrf(bounds[0], 'maxlat')
        ];
        return geo;
    }
    function setProperties(element) {
        if (!element) return {
        };
        var props = {
        }, tags = element.getElementsByTagName('tag'), tags_length = tags.length;
        for(var t = 0; t < tags_length; t++){
            props[attr(tags[t], 'k')] = isNumber(attr(tags[t], 'v')) ? parseFloat(attr(tags[t], 'v')) : attr(tags[t], 'v');
        }
        if (metaProperties) {
            setIf(element, 'id', props, 'osm_id');
            setIf(element, 'user', props, 'osm_lastEditor');
            setIf(element, 'version', props, 'osm_version', true);
            setIf(element, 'changeset', props, 'osm_lastChangeset', true);
            setIf(element, 'timestamp', props, 'osm_lastEdited');
        }
        return sortObject(props);
    }
    function getFeature(element, type, coordinates) {
        return {
            geometry: {
                type: type,
                coordinates: coordinates || []
            },
            type: 'Feature',
            properties: setProperties(element)
        };
    }
    function cacheNodes() {
        var nodes = getBy(xml1, 'node'), coords = {
        };
        for(var n = 0; n < nodes.length; n++){
            coords[attr(nodes[n], 'id')] = nodes[n];
        }
        return coords;
    }
    function Points(nodeCache) {
        var points = nodeCache, features = [];
        for(var node in nodeCache){
            var tags = getBy(nodeCache[node], 'tag');
            if (!usedCoords[node] || tags.length) features.push(getFeature(nodeCache[node], 'Point', lonLat(nodeCache[node])));
        }
        return features;
    }
    function cacheWays() {
        var ways = getBy(xml1, 'way'), out = {
        };
        for(var w = 0; w < ways.length; w++){
            var feature = {
            }, nds = getBy(ways[w], 'nd');
            if (attr(nds[0], 'ref') === attr(nds[nds.length - 1], 'ref')) {
                feature = getFeature(ways[w], 'Polygon', [
                    []
                ]);
            } else {
                feature = getFeature(ways[w], 'LineString');
            }
            for(var n = 0; n < nds.length; n++){
                var node = nodeCache1[attr(nds[n], 'ref')];
                if (node) {
                    var cords = lonLat(node);
                    usedCoords[attr(nds[n], 'ref')] = true;
                    if (feature.geometry.type === 'Polygon') {
                        feature.geometry.coordinates[0].push(cords);
                    } else {
                        feature.geometry.coordinates.push(cords);
                    }
                }
            }
            out[attr(ways[w], 'id')] = feature;
        }
        return out;
    }
    function Relations() {
        var relations = getBy(xml1, 'relation'), relations_length = relations.length, features = [];
        for(var r = 0; r < relations_length; r++){
            var feature = getFeature(relations[r], 'MultiPolygon');
            if (feature.properties.type == 'multipolygon') {
                var members = getBy(relations[r], 'member');
                // osm doesn't keep roles in order, so we do this twice
                for(var m = 0; m < members.length; m++){
                    if (attr(members[m], 'role') == 'outer') assignWay(members[m], feature);
                }
                for(var n = 0; n < members.length; n++){
                    if (attr(members[n], 'role') == 'inner') assignWay(members[n], feature);
                }
                delete feature.properties.type;
            } else {
            // http://taginfo.openstreetmap.us/relations
            }
            if (feature.geometry.coordinates.length) features.push(feature);
        }
        return features;
        function assignWay(member, feature) {
            var ref = attr(member, 'ref'), way = wayCache1[ref];
            if (way && way.geometry.type == 'Polygon') {
                if (way && attr(member, 'role') == 'outer') {
                    feature.geometry.coordinates.push(way.geometry.coordinates);
                    if (way.properties) {
                        // exterior polygon properties can move to the multipolygon
                        // but multipolygon (relation) tags take precedence
                        for(var prop in way.properties){
                            if (!feature.properties[prop]) {
                                feature.properties[prop] = prop;
                            }
                        }
                    }
                } else if (way && attr(member, 'role') == 'inner') {
                    if (feature.geometry.coordinates.length > 1) {
                        // do a point in polygon against each outer
                        // this determines which outer the inner goes with
                        for(var a = 0; a < feature.geometry.coordinates.length; a++){
                            if (pointInPolygon(way.geometry.coordinates[0][0], feature.geometry.coordinates[a][0])) {
                                feature.geometry.coordinates[a].push(way.geometry.coordinates[0]);
                                break;
                            }
                        }
                    } else {
                        if (feature.geometry.coordinates.length) {
                            feature.geometry.coordinates[0].push(way.geometry.coordinates[0]);
                        }
                    }
                }
            }
            wayCache1[ref] = false;
        }
    }
    function Ways(wayCache) {
        var features = [];
        for(var w in wayCache)if (wayCache[w]) features.push(wayCache[w]);
        return features;
    }
    // https://github.com/substack/point-in-polygon/blob/master/index.js
    function pointInPolygon(point, vs) {
        var x = point[0], y = point[1];
        var inside = false;
        for(var i = 0, j = vs.length - 1; i < vs.length; j = i++){
            var xi = vs[i][0], yi = vs[i][1], xj = vs[j][0], yj = vs[j][1], intersect = yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
            if (intersect) inside = !inside;
        }
        return inside;
    }
    // http://stackoverflow.com/a/1359808
    function sortObject(o) {
        var sorted = {
        }, key, a = [];
        for(key in o)if (o.hasOwnProperty(key)) a.push(key);
        a.sort();
        for(key = 0; key < a.length; key++)sorted[a[key]] = o[a[key]];
        return sorted;
    }
    // http://stackoverflow.com/a/1830844
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function attr(x, y) {
        return x.getAttribute(y);
    }
    function attrf(x, y) {
        return parseFloat(x.getAttribute(y));
    }
    function getBy(x, y) {
        return x.getElementsByTagName(y);
    }
    function lonLat(elem) {
        return [
            attrf(elem, 'lon'),
            attrf(elem, 'lat')
        ];
    }
    function setIf(x, y, o, name, f) {
        if (attr(x, y)) o[name] = f ? parseFloat(attr(x, y)) : attr(x, y);
    }
    return Bounds({
        type: 'FeatureCollection',
        features: [].concat(Ways(wayCache1)).concat(Ways(Relations)).concat(Points(nodeCache1))
    }, xml1);
};
if (typeof module !== 'undefined') module.exports = osm_geojson;

},{}]},["3801V","dx2Y6"], "dx2Y6", "parcelRequireb01d")

//# sourceMappingURL=map.02d58022.js.map
