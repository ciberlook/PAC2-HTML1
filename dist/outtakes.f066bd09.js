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
})({"4c6ti":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "8b2e8510f066bd09";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3g8zt":[function(require,module,exports) {
var _reactYoutubeLite = require("react-youtube-lite");

},{"react-youtube-lite":"oxevm"}],"oxevm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "YouTubeLite", ()=>$e4acaba73a0bf664$export$c9d7f92e282245c6);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _reactAspectRatio = require("@radix-ui/react-aspect-ratio");
var _react1 = require("@stitches/react");
var _browserMonadsTs = require("browser-monads-ts");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $e4acaba73a0bf664$exports = {};
$parcel$export($e4acaba73a0bf664$exports, "YouTubeLite", ()=>$e4acaba73a0bf664$export$c9d7f92e282245c6);
function $38f78f9653b8c1ef$export$d6012f328bf1cd22(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
        viewBox: "0 0 68 48",
        width: "1em",
        height: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                d: "M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                d: "M45 24 27 14v20",
                fill: "#fff"
            })
        ]
    });
}
let { styled: $9c0c1da424ccdc87$export$3817b7a54a07cec7 } = (0, _react1.createStitches)();
const $ecc1c06c828ca7b8$export$26b41f0a3f763d03 = $9c0c1da424ccdc87$export$3817b7a54a07cec7((0, _reactAspectRatio.Root), {
    backgroundColor: "#000",
    backgroundPosition: "center",
    backgroundSize: "cover",
    contain: "content",
    cursor: "pointer",
    "&::before": {
        content: '""',
        backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==)",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top",
        boxSizing: "border-box",
        display: "block",
        height: 60,
        paddingBottom: 50,
        position: "absolute",
        top: 0,
        transition: "all 0.2s cubic-bezier(0, 0, 0.2, 1)",
        width: "100%"
    },
    "& iframe": {
        border: 0,
        height: "100%",
        width: "100%"
    }
});
const $ecc1c06c828ca7b8$export$a4adf5e49d50b390 = $9c0c1da424ccdc87$export$3817b7a54a07cec7($38f78f9653b8c1ef$export$d6012f328bf1cd22, {
    boxSizing: "border-box",
    color: "#212121",
    height: "auto",
    left: "50%",
    opacity: 0.8,
    position: "absolute",
    top: "50%",
    transform: "translate3d(-50%, -50%, 0)",
    transition: "all 0.2s cubic-bezier(0, 0, 0.2, 1)",
    width: 68,
    zIndex: 1,
    [`${$ecc1c06c828ca7b8$export$26b41f0a3f763d03}:hover &`]: {
        color: "#f00",
        opacity: 1
    }
});
const $ecc1c06c828ca7b8$export$d99176fc999c3da2 = $9c0c1da424ccdc87$export$3817b7a54a07cec7("iframe", {});
function $fa5752db109612db$export$c11e62fdf1cb07d0(rel, href, as) {
    let linkEl = (0, _browserMonadsTs.document).createElement("link");
    linkEl.setAttribute("rel", rel);
    linkEl.setAttribute("href", href);
    if (as) linkEl.setAttribute("as", as);
    (0, _browserMonadsTs.document).head.appendChild(linkEl);
}
function $9b70643304db0f84$export$c3d5cd1470cbb2a0({ url: url, videoId: videoId, isPlaylist: isPlaylist, opts: opts }) {
    let options = {
        ...!isPlaylist ? {
            autoplay: 1
        } : {
            list: videoId
        },
        ...opts
    };
    // @ts-ignore: we can use numbers on the values
    let params = new URLSearchParams(options);
    return `${url}?${params.toString()}`;
}
function $ab6c909dbd3d6a68$export$44cee01bde6a1304(url) {
    const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0];
}
function $e4acaba73a0bf664$var$RenderYouTubeLite({ url: url, adNetwork: adNetwork, aspectRatio: aspectRatio = 16 / 9, css: css, customThumbnail: customThumbnail, iframeProps: iframeProps, noCookie: noCookie = true, playerParameters: playerParameters, playlist: playlist, poster: poster = "hqdefault", title: title, ...props }, ref) {
    let [preconnected, setPreconnected] = (0, _react.useState)(false);
    let [iframe, setIframe] = (0, _react.useState)(false);
    let videoId = encodeURIComponent($ab6c909dbd3d6a68$export$44cee01bde6a1304(url));
    let posterUrl = typeof customThumbnail === "string" ? customThumbnail : `https://i.ytimg.com/vi/${videoId}/${poster}.jpg`;
    let youtubeUrl = noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
    let iframeSrc = !playlist ? `${youtubeUrl}/embed/${videoId}` : `${youtubeUrl}/embed/videoseries`;
    const warmConnections = ()=>{
        if (preconnected) return;
        // The iframe document and the majority of its subresources are all taken directly from youtube.com.
        $fa5752db109612db$export$c11e62fdf1cb07d0("preconnect", "https://www.youtube-nocookie.com");
        // The botguard script can be found on google.com.
        $fa5752db109612db$export$c11e62fdf1cb07d0("preconnect", "https://www.google.com");
        // These ad-related domains may or may not be on the critical path. Domain-specific throttling could be used to confirm.
        if (adNetwork) {
            $fa5752db109612db$export$c11e62fdf1cb07d0("preconnect", "https://googleads.g.doubleclick.net");
            $fa5752db109612db$export$c11e62fdf1cb07d0("preconnect", "https://static.doubleclick.net");
        }
        setPreconnected(true);
    };
    const addIframe = ()=>{
        if (iframe) return;
        setIframe(true);
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)($ecc1c06c828ca7b8$export$26b41f0a3f763d03, {
        css: {
            backgroundImage: `url(${posterUrl})`,
            ...css
        },
        onPointerOver: warmConnections,
        onClick: addIframe,
        "data-title": title,
        ref: ref,
        ratio: aspectRatio,
        ...props,
        children: iframe ? /*#__PURE__*/ (0, _jsxRuntime.jsx)($ecc1c06c828ca7b8$export$d99176fc999c3da2, {
            width: 560,
            height: 315,
            title: title,
            src: $9b70643304db0f84$export$c3d5cd1470cbb2a0({
                url: iframeSrc,
                videoId: videoId,
                isPlaylist: playlist
            }),
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true,
            ...iframeProps
        }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)($ecc1c06c828ca7b8$export$a4adf5e49d50b390, {})
    });
}
const $e4acaba73a0bf664$export$c9d7f92e282245c6 = /*#__PURE__*/ (0, _react.forwardRef)($e4acaba73a0bf664$var$RenderYouTubeLite);

},{"react/jsx-runtime":"6AEwr","react":"21dqq","@radix-ui/react-aspect-ratio":"4wY78","@stitches/react":"5m0Or","browser-monads-ts":"YIAts","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6AEwr":[function(require,module,exports) {
"use strict";
module.exports = require("c4c10cbba9862d5f");

},{"c4c10cbba9862d5f":"kujY4"}],"kujY4":[function(require,module,exports) {
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    var React = require("593632ccebda0d3a");
    var _assign = require("810078e9315626ae");
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    exports.Fragment = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
    if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        exports.Fragment = symbolFor("react.fragment");
        REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
        REACT_PROFILER_TYPE = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        REACT_SCOPE_TYPE = symbolFor("react.scope");
        REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
    }
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") return maybeIterator;
        return null;
    }
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning("error", format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== "") {
            format += "%s";
            args = args.concat([
                stack
            ]);
        }
        var argsWithFormat = args.map(function(item) {
            return "" + item;
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift("Warning: " + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) return true;
        if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) return true;
        }
        return false;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || "";
        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
    }
    function getContextName(type) {
        return type.displayName || "Context";
    }
    function getComponentName(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === "number") error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
        if (typeof type === "function") return type.displayName || type.name || null;
        if (typeof type === "string") return type;
        switch(type){
            case exports.Fragment:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
                return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentName(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: _assign({}, props, {
                    value: prevLog
                }),
                info: _assign({}, props, {
                    value: prevInfo
                }),
                warn: _assign({}, props, {
                    value: prevWarn
                }),
                error: _assign({}, props, {
                    value: prevError
                }),
                group: _assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return "\n" + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === "string") {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                            if (typeof fn === "function") componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0);
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        if (typeof fn === "function") componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return "";
        if (typeof type === "function") return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === "string") return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return "";
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function warnIfStringRefCannotBeAutoConverted(config, self) {
        if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */ function jsxDEV(type, config, maybeKey, source, self) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.
        if (maybeKey !== undefined) key = "" + maybeKey;
        if (hasValidKey(config)) key = "" + config.key;
        if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object
        for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
         // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner$1.current) {
            var name = getComponentName(ReactCurrentOwner$1.current.type);
            if (name) return "\n\nCheck the render method of `" + name + "`.";
        }
        return "";
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
        }
        return "";
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = "";
        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== "object") return;
        if (Array.isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === "string") return;
        var propTypes;
        if (typeof type === "function") propTypes = type.propTypes;
        else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentName(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
        }
        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
        }
    }
    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = "";
            if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = "null";
            else if (Array.isArray(type)) typeString = "array";
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
            } else typeString = typeof type;
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
            var children = props.children;
            if (children !== undefined) {
                if (isStaticChildren) {
                    if (Array.isArray(children)) {
                        for(var i = 0; i < children.length; i++)validateChildKeys(children[i], type);
                        if (Object.freeze) Object.freeze(children);
                    } else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                } else validateChildKeys(children, type);
            }
        }
        if (type === exports.Fragment) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    } // These two functions exist to still get child warnings in dev
    // even with the prod transform. This means that jsxDEV is purely
    // opt-in behavior for better messages but that we won't stop
    // giving you warnings if you use production apis.
    function jsxWithValidationStatic(type, props, key) {
        return jsxWithValidation(type, props, key, true);
    }
    function jsxWithValidationDynamic(type, props, key) {
        return jsxWithValidation(type, props, key, false);
    }
    var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
    // for now we can ship identical prod functions
    var jsxs = jsxWithValidationStatic;
    exports.jsx = jsx;
    exports.jsxs = jsxs;
})();

},{"593632ccebda0d3a":"21dqq","810078e9315626ae":"7OXxh"}],"21dqq":[function(require,module,exports) {
"use strict";
module.exports = require("a569817e6ea559f6");

},{"a569817e6ea559f6":"6YvXz"}],"6YvXz":[function(require,module,exports) {
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    var _assign = require("de4e88f282317fde");
    // TODO: this is special because it gets imported during build.
    var ReactVersion = "17.0.2";
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    exports.Fragment = 0xeacb;
    exports.StrictMode = 0xeacc;
    exports.Profiler = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    exports.Suspense = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
    if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        exports.Fragment = symbolFor("react.fragment");
        exports.StrictMode = symbolFor("react.strict_mode");
        exports.Profiler = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        exports.Suspense = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        REACT_SCOPE_TYPE = symbolFor("react.scope");
        REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
    }
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") return maybeIterator;
        return null;
    }
    /**
 * Keeps track of the current dispatcher.
 */ var ReactCurrentDispatcher = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    /**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */ var ReactCurrentBatchConfig = {
        transition: 0
    };
    /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */ var ReactCurrentOwner = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    var ReactDebugCurrentFrame = {};
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
        currentExtraStackFrame = stack;
    }
    ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
        currentExtraStackFrame = stack;
    }; // Stack implementation injected by the current renderer.
    ReactDebugCurrentFrame.getCurrentStack = null;
    ReactDebugCurrentFrame.getStackAddendum = function() {
        var stack = ""; // Add an extra top frame while an element is being validated
        if (currentExtraStackFrame) stack += currentExtraStackFrame;
         // Delegate to the injected renderer-specific implementation
        var impl = ReactDebugCurrentFrame.getCurrentStack;
        if (impl) stack += impl() || "";
        return stack;
    };
    /**
 * Used by act() to track whether you're inside an act() scope.
 */ var IsSomeRendererActing = {
        current: false
    };
    var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner,
        IsSomeRendererActing: IsSomeRendererActing,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: _assign
    };
    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
    // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.
    function warn(format) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        printWarning("warn", format, args);
    }
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning("error", format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== "") {
            format += "%s";
            args = args.concat([
                stack
            ]);
        }
        var argsWithFormat = args.map(function(item) {
            return "" + item;
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift("Warning: " + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    var didWarnStateUpdateForUnmountedComponent = {};
    function warnNoop(publicInstance, callerName) {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
        var warningKey = componentName + "." + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
        error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
    }
    /**
 * This is the abstract API for an update queue.
 */ var ReactNoopUpdateQueue = {
        /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function(publicInstance) {
            return false;
        },
        /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
        },
        /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
        },
        /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */ enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
        }
    };
    var emptyObject = {};
    Object.freeze(emptyObject);
    /**
 * Base class helpers for the updating state of a component.
 */ function Component(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ Component.prototype.setState = function(partialState, callback) {
        if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    var defineDeprecationWarning = function(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return undefined;
            }
        });
    };
    for(var fnName in deprecatedAPIs)if (deprecatedAPIs.hasOwnProperty(fnName)) defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    function ComponentDummy() {}
    ComponentDummy.prototype = Component.prototype;
    /**
 * Convenience component with default shallow equality check for sCU.
 */ function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.
    _assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    // an immutable object with a single mutable value
    function createRef() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || "";
        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
    }
    function getContextName(type) {
        return type.displayName || "Context";
    }
    function getComponentName(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === "number") error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
        if (typeof type === "function") return type.displayName || type.name || null;
        if (typeof type === "string") return type;
        switch(type){
            case exports.Fragment:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case exports.Profiler:
                return "Profiler";
            case exports.StrictMode:
                return "StrictMode";
            case exports.Suspense:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
                return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentName(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    function warnIfStringRefCannotBeAutoConverted(config) {
        if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */ function createElement(type, config, children) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
            if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config);
            }
            if (hasValidKey(config)) key = "" + config.key;
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            if (Object.freeze) Object.freeze(childArray);
            props.children = childArray;
        } // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
    }
    /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */ function cloneElement(element, config, children) {
        if (!!(element === null || element === undefined)) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        var propName; // Original props are copied
        var props = _assign({}, element.props); // Reserved names are extracted
        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.
        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source; // Owner will be preserved, unless ref is overridden
        var owner = element._owner;
        if (config != null) {
            if (hasValidRef(config)) {
                // Silently steal the ref from the parent.
                ref = config.ref;
                owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) key = "" + config.key;
             // Remaining properties override existing props
            var defaultProps;
            if (element.type && element.type.defaultProps) defaultProps = element.type.defaultProps;
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) // Resolve default props
                props[propName] = defaultProps[propName];
                else props[propName] = config[propName];
            }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var SEPARATOR = ".";
    var SUBSEPARATOR = ":";
    /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
        });
        return "$" + escapedString;
    }
    /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, "$&/");
    }
    /**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof element === "object" && element !== null && element.key != null) // Explicit key
        return escape("" + element.key);
         // Implicit key determined by the index in the set
        return index.toString(36);
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if (type === "undefined" || type === "boolean") // All of the above are perceived as null.
        children = null;
        var invokeCallback = false;
        if (children === null) invokeCallback = true;
        else switch(type){
            case "string":
            case "number":
                invokeCallback = true;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                }
        }
        if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows:
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (Array.isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                    return c;
                });
            } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) mappedChild = cloneAndReplaceKey(mappedChild, // traverseAllChildren used to do for objects as children
                escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                array.push(mappedChild);
            }
            return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (Array.isArray(children)) for(var i = 0; i < children.length; i++){
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
        else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    didWarnAboutMaps = true;
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while(!(step = iterator.next()).done){
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else if (type === "object") {
                var childrenString = "" + children;
                throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
        }
        return subtreeCount;
    }
    /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(children, func, context) {
        if (children == null) return children;
        var result = [];
        var count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(children) {
        var n = 0;
        mapChildren(children, function() {
            n++; // Don't return anything
        });
        return n;
    }
    /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
            forEachFunc.apply(this, arguments); // Don't return anything.
        }, forEachContext);
    }
    /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */ function toArray(children) {
        return mapChildren(children, function(child) {
            return child;
        }) || [];
    }
    /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(children) {
        if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
        return children;
    }
    function createContext(defaultValue, calculateChangedBits) {
        if (calculateChangedBits === undefined) calculateChangedBits = null;
        else if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
        var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null
        };
        context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here
        Object.defineProperties(Consumer, {
            Provider: {
                get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;
                        error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                },
                set: function(_Provider) {
                    context.Provider = _Provider;
                }
            },
            _currentValue: {
                get: function() {
                    return context._currentValue;
                },
                set: function(_currentValue) {
                    context._currentValue = _currentValue;
                }
            },
            _currentValue2: {
                get: function() {
                    return context._currentValue2;
                },
                set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                }
            },
            _threadCount: {
                get: function() {
                    return context._threadCount;
                },
                set: function(_threadCount) {
                    context._threadCount = _threadCount;
                }
            },
            Consumer: {
                get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;
                        error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                }
            },
            displayName: {
                get: function() {
                    return context.displayName;
                },
                set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                        hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                }
            }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
        context.Consumer = Consumer;
        context._currentRenderer = null;
        context._currentRenderer2 = null;
        return context;
    }
    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;
    function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor(); // Transition to the next state.
            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(function(moduleObject) {
                if (payload._status === Pending) {
                    var defaultExport = moduleObject.default;
                    if (defaultExport === undefined) error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                    var resolved = payload;
                    resolved._status = Resolved;
                    resolved._result = defaultExport;
                }
            }, function(error) {
                if (payload._status === Pending) {
                    // Transition to the next state.
                    var rejected = payload;
                    rejected._status = Rejected;
                    rejected._result = error;
                }
            });
        }
        if (payload._status === Resolved) return payload._result;
        else throw payload._result;
    }
    function lazy(ctor) {
        var payload = {
            // We use these fields to store the result.
            _status: -1,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
        };
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe
        Object.defineProperties(lazyType, {
            defaultProps: {
                configurable: true,
                get: function() {
                    return defaultProps;
                },
                set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, "defaultProps", {
                        enumerable: true
                    });
                }
            },
            propTypes: {
                configurable: true,
                get: function() {
                    return propTypes;
                },
                set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, "propTypes", {
                        enumerable: true
                    });
                }
            }
        });
        return lazyType;
    }
    function forwardRef(render) {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        else if (typeof render !== "function") error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
        else if (render.length !== 0 && render.length !== 2) error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        }
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        };
        var ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                if (render.displayName == null) render.displayName = name;
            }
        });
        return elementType;
    }
    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) return true;
        if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) return true;
        }
        return false;
    }
    function memo(type, compare) {
        if (!isValidElementType(type)) error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
        var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
        };
        var ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                if (type.displayName == null) type.displayName = name;
            }
        });
        return elementType;
    }
    function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (!(dispatcher !== null)) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function useContext(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();
        if (unstable_observedBits !== undefined) error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : "");
         // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.
            if (realContext.Consumer === Context) error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
            else if (realContext.Provider === Context) error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return dispatcher.useContext(Context, unstable_observedBits);
    }
    function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
    }
    function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
    }
    function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
    }
    function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
    }
    function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue(value, formatterFn) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: _assign({}, props, {
                    value: prevLog
                }),
                info: _assign({}, props, {
                    value: prevInfo
                }),
                warn: _assign({}, props, {
                    value: prevWarn
                }),
                error: _assign({}, props, {
                    value: prevError
                }),
                group: _assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return "\n" + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher$1.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === "string") {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                            if (typeof fn === "function") componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0);
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher$1.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        if (typeof fn === "function") componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return "";
        if (typeof type === "function") return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === "string") return describeBuiltInComponentFrame(type);
        switch(type){
            case exports.Suspense:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return "";
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
        } else setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) return "\n\nCheck the render method of `" + name + "`.";
        }
        return "";
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
        }
        return "";
    }
    function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) return getSourceInfoErrorAddendum(elementProps.__source);
        return "";
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = "";
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== "object") return;
        if (Array.isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === "string") return;
        var propTypes;
        if (typeof type === "function") propTypes = type.propTypes;
        else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentName(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
        }
        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
        }
    }
    function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = "";
            if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = "null";
            else if (Array.isArray(type)) typeString = "array";
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
            } else typeString = typeof type;
            error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
        if (type === exports.Fragment) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
        } // Legacy hook: remove it
        Object.defineProperty(validatedFactory, "type", {
            enumerable: false,
            get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                    value: type
                });
                return type;
            }
        });
        return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], newElement.type);
        validatePropTypes(newElement);
        return newElement;
    }
    try {
        var frozenObject = Object.freeze({});
        /* eslint-disable no-new */ new Map([
            [
                frozenObject,
                null
            ]
        ]);
        new Set([
            frozenObject
        ]);
    /* eslint-enable no-new */ } catch (e) {}
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.PureComponent = PureComponent;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useEffect = useEffect;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.version = ReactVersion;
})();

},{"de4e88f282317fde":"7OXxh"}],"7OXxh":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ "use strict";
/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++)test2["_" + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join("") !== "0123456789") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};

},{}],"4wY78":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AspectRatio", ()=>AspectRatio);
parcelHelpers.export(exports, "Root", ()=>Root);
var _reactPrimitive = require("@radix-ui/react-primitive");
var _react = require("react");
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
const AspectRatio = /*#__PURE__*/ _react.forwardRef((r, i)=>{
    const { ratio: a = 1, style: p, ...s } = r; /*#__PURE__*/ 
    return _react.createElement("div", {
        style: {
            position: "relative",
            width: "100%",
            paddingBottom: 100 / a + "%"
        },
        "data-radix-aspect-ratio-wrapper": ""
    }, /*#__PURE__*/ _react.createElement((0, _reactPrimitive.Primitive).div, (0, _extendsDefault.default)({}, s, {
        ref: i,
        style: {
            ...p,
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    })));
}); /*#__PURE__*/ 
const Root = AspectRatio;

},{"@radix-ui/react-primitive":"f7aKc","react":"21dqq","@babel/runtime/helpers/esm/extends":"fTBFS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7aKc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Primitive", ()=>Primitive);
parcelHelpers.export(exports, "Root", ()=>Root);
var _reactSlot = require("@radix-ui/react-slot");
var _react = require("react");
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
const Primitive = [
    "a",
    "button",
    "div",
    "h2",
    "h3",
    "img",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
].reduce((o, i)=>({
        ...o,
        [i]: /*#__PURE__*/ _react.forwardRef((o, m)=>{
            const { asChild: a, ...s } = o, n = a ? (0, _reactSlot.Slot) : i;
            return _react.useEffect(()=>{
                window[Symbol.for("radix-ui")] = !0;
            }, []), /*#__PURE__*/ _react.createElement(n, (0, _extendsDefault.default)({}, s, {
                ref: m
            }));
        })
    }), {});
const Root = Primitive;

},{"@radix-ui/react-slot":"asIGg","react":"21dqq","@babel/runtime/helpers/esm/extends":"fTBFS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"asIGg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Slot", ()=>Slot);
parcelHelpers.export(exports, "Slottable", ()=>Slottable);
parcelHelpers.export(exports, "Root", ()=>Root);
var _reactComposeRefs = require("@radix-ui/react-compose-refs");
var _react = require("react");
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
const Slot = /*#__PURE__*/ _react.forwardRef((e, o)=>{
    const { children: a, ...s } = e;
    return _react.Children.toArray(a).some(l) ? /*#__PURE__*/ _react.createElement(_react.Fragment, null, _react.Children.map(a, (e)=>l(e) ? /*#__PURE__*/ _react.createElement(n, (0, _extendsDefault.default)({}, s, {
            ref: o
        }), e.props.children) : e)) : /*#__PURE__*/ _react.createElement(n, (0, _extendsDefault.default)({}, s, {
        ref: o
    }), a);
});
Slot.displayName = "Slot";
const n = /*#__PURE__*/ _react.forwardRef((r, n)=>{
    const { children: l, ...a } = r; /*#__PURE__*/ 
    return _react.isValidElement(l) ? /*#__PURE__*/ _react.cloneElement(l, {
        ...o(a, l.props),
        ref: (0, _reactComposeRefs.composeRefs)(n, l.ref)
    }) : _react.Children.count(l) > 1 ? _react.Children.only(null) : null;
});
n.displayName = "SlotClone";
const Slottable = ({ children: e })=>/*#__PURE__*/ _react.createElement(_react.Fragment, null, e);
function l(e) {
    return _react.isValidElement(e) && e.type === Slottable;
}
function o(e, t) {
    const r = {
        ...t
    };
    for(const n in t){
        const l = e[n], o = t[n];
        /^on[A-Z]/.test(n) ? r[n] = (...e)=>{
            null == o || o(...e), null == l || l(...e);
        } : "style" === n ? r[n] = {
            ...l,
            ...o
        } : "className" === n && (r[n] = [
            l,
            o
        ].filter(Boolean).join(" "));
    }
    return {
        ...e,
        ...r
    };
}
const Root = Slot;

},{"@radix-ui/react-compose-refs":"gMyUC","react":"21dqq","@babel/runtime/helpers/esm/extends":"fTBFS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gMyUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "composeRefs", ()=>composeRefs);
parcelHelpers.export(exports, "useComposedRefs", ()=>useComposedRefs);
var _react = require("react");
function composeRefs(...o) {
    return (e)=>o.forEach((o)=>(function(o, e) {
                "function" == typeof o ? o(e) : null != o && (o.current = e);
            })(o, e));
}
function useComposedRefs(...e) {
    return _react.useCallback(composeRefs(...e), e);
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fTBFS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_extends);
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5m0Or":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStitches", ()=>q) //# sourceMappingUrl=index.map
;
parcelHelpers.export(exports, "createTheme", ()=>Q);
parcelHelpers.export(exports, "css", ()=>te);
parcelHelpers.export(exports, "defaultThemeMap", ()=>n);
parcelHelpers.export(exports, "globalCss", ()=>_);
parcelHelpers.export(exports, "keyframes", ()=>ee);
parcelHelpers.export(exports, "styled", ()=>re);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var e = "colors", t = "sizes", r = "space", n = {
    gap: r,
    gridGap: r,
    columnGap: r,
    gridColumnGap: r,
    rowGap: r,
    gridRowGap: r,
    inset: r,
    insetBlock: r,
    insetBlockEnd: r,
    insetBlockStart: r,
    insetInline: r,
    insetInlineEnd: r,
    insetInlineStart: r,
    margin: r,
    marginTop: r,
    marginRight: r,
    marginBottom: r,
    marginLeft: r,
    marginBlock: r,
    marginBlockEnd: r,
    marginBlockStart: r,
    marginInline: r,
    marginInlineEnd: r,
    marginInlineStart: r,
    padding: r,
    paddingTop: r,
    paddingRight: r,
    paddingBottom: r,
    paddingLeft: r,
    paddingBlock: r,
    paddingBlockEnd: r,
    paddingBlockStart: r,
    paddingInline: r,
    paddingInlineEnd: r,
    paddingInlineStart: r,
    top: r,
    right: r,
    bottom: r,
    left: r,
    scrollMargin: r,
    scrollMarginTop: r,
    scrollMarginRight: r,
    scrollMarginBottom: r,
    scrollMarginLeft: r,
    scrollMarginX: r,
    scrollMarginY: r,
    scrollMarginBlock: r,
    scrollMarginBlockEnd: r,
    scrollMarginBlockStart: r,
    scrollMarginInline: r,
    scrollMarginInlineEnd: r,
    scrollMarginInlineStart: r,
    scrollPadding: r,
    scrollPaddingTop: r,
    scrollPaddingRight: r,
    scrollPaddingBottom: r,
    scrollPaddingLeft: r,
    scrollPaddingX: r,
    scrollPaddingY: r,
    scrollPaddingBlock: r,
    scrollPaddingBlockEnd: r,
    scrollPaddingBlockStart: r,
    scrollPaddingInline: r,
    scrollPaddingInlineEnd: r,
    scrollPaddingInlineStart: r,
    fontSize: "fontSizes",
    background: e,
    backgroundColor: e,
    backgroundImage: e,
    borderImage: e,
    border: e,
    borderBlock: e,
    borderBlockEnd: e,
    borderBlockStart: e,
    borderBottom: e,
    borderBottomColor: e,
    borderColor: e,
    borderInline: e,
    borderInlineEnd: e,
    borderInlineStart: e,
    borderLeft: e,
    borderLeftColor: e,
    borderRight: e,
    borderRightColor: e,
    borderTop: e,
    borderTopColor: e,
    caretColor: e,
    color: e,
    columnRuleColor: e,
    fill: e,
    outline: e,
    outlineColor: e,
    stroke: e,
    textDecorationColor: e,
    fontFamily: "fonts",
    fontWeight: "fontWeights",
    lineHeight: "lineHeights",
    letterSpacing: "letterSpacings",
    blockSize: t,
    minBlockSize: t,
    maxBlockSize: t,
    inlineSize: t,
    minInlineSize: t,
    maxInlineSize: t,
    width: t,
    minWidth: t,
    maxWidth: t,
    height: t,
    minHeight: t,
    maxHeight: t,
    flexBasis: t,
    gridTemplateColumns: t,
    gridTemplateRows: t,
    borderWidth: "borderWidths",
    borderTopWidth: "borderWidths",
    borderRightWidth: "borderWidths",
    borderBottomWidth: "borderWidths",
    borderLeftWidth: "borderWidths",
    borderStyle: "borderStyles",
    borderTopStyle: "borderStyles",
    borderRightStyle: "borderStyles",
    borderBottomStyle: "borderStyles",
    borderLeftStyle: "borderStyles",
    borderRadius: "radii",
    borderTopLeftRadius: "radii",
    borderTopRightRadius: "radii",
    borderBottomRightRadius: "radii",
    borderBottomLeftRadius: "radii",
    boxShadow: "shadows",
    textShadow: "shadows",
    transition: "transitions",
    zIndex: "zIndices"
}, i = (e, t)=>"function" == typeof t ? {
        "()": Function.prototype.toString.call(t)
    } : t, o = ()=>{
    const e = Object.create(null);
    return (t, r, ...n)=>{
        const o = ((e)=>JSON.stringify(e, i))(t);
        return o in e ? e[o] : e[o] = r(t, ...n);
    };
}, l = Symbol.for("sxs.internal"), s = (e, t)=>Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), a = (e)=>{
    for(const t in e)return !0;
    return !1;
}, { hasOwnProperty: c } = Object.prototype, d = (e)=>e.includes("-") ? e : e.replace(/[A-Z]/g, (e)=>"-" + e.toLowerCase()), g = /\s+(?![^()]*\))/, p = (e)=>(t)=>e(..."string" == typeof t ? String(t).split(g) : [
            t
        ]), u = {
    appearance: (e)=>({
            WebkitAppearance: e,
            appearance: e
        }),
    backfaceVisibility: (e)=>({
            WebkitBackfaceVisibility: e,
            backfaceVisibility: e
        }),
    backdropFilter: (e)=>({
            WebkitBackdropFilter: e,
            backdropFilter: e
        }),
    backgroundClip: (e)=>({
            WebkitBackgroundClip: e,
            backgroundClip: e
        }),
    boxDecorationBreak: (e)=>({
            WebkitBoxDecorationBreak: e,
            boxDecorationBreak: e
        }),
    clipPath: (e)=>({
            WebkitClipPath: e,
            clipPath: e
        }),
    content: (e)=>({
            content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"`
        }),
    hyphens: (e)=>({
            WebkitHyphens: e,
            hyphens: e
        }),
    maskImage: (e)=>({
            WebkitMaskImage: e,
            maskImage: e
        }),
    maskSize: (e)=>({
            WebkitMaskSize: e,
            maskSize: e
        }),
    tabSize: (e)=>({
            MozTabSize: e,
            tabSize: e
        }),
    textSizeAdjust: (e)=>({
            WebkitTextSizeAdjust: e,
            textSizeAdjust: e
        }),
    userSelect: (e)=>({
            WebkitUserSelect: e,
            userSelect: e
        }),
    marginBlock: p((e, t)=>({
            marginBlockStart: e,
            marginBlockEnd: t || e
        })),
    marginInline: p((e, t)=>({
            marginInlineStart: e,
            marginInlineEnd: t || e
        })),
    maxSize: p((e, t)=>({
            maxBlockSize: e,
            maxInlineSize: t || e
        })),
    minSize: p((e, t)=>({
            minBlockSize: e,
            minInlineSize: t || e
        })),
    paddingBlock: p((e, t)=>({
            paddingBlockStart: e,
            paddingBlockEnd: t || e
        })),
    paddingInline: p((e, t)=>({
            paddingInlineStart: e,
            paddingInlineEnd: t || e
        }))
}, h = /([\d.]+)([^]*)/, f = (e, t)=>e.length ? e.reduce((e, r)=>(e.push(...t.map((e)=>e.includes("&") ? e.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(e) ? `:is(${r})` : r) : r + " " + e)), e), []) : t, m = (e, t)=>e in b && "string" == typeof t ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, r, n, i)=>r + ("stretch" === n ? `-moz-available${i};${d(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${d(e)}:${r}fit-content`) + i) : String(t), b = {
    blockSize: 1,
    height: 1,
    inlineSize: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    width: 1
}, S = (e)=>e ? e + "-" : "", k = (e, t, r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e, n, i, o, l)=>"$" == o == !!i ? e : (n || "--" == o ? "calc(" : "") + "var(--" + ("$" === o ? S(t) + (l.includes("$") ? "" : S(r)) + l.replace(/\$/g, "-") : l) + ")" + (n || "--" == o ? "*" + (n || "") + (i || "1") + ")" : "")), y = /\s*,\s*(?![^()]*\))/, B = Object.prototype.toString, $ = (e, t, r, n, i)=>{
    let o, l, s;
    const a = (e, t, r)=>{
        let c, g;
        const p = (e)=>{
            for(c in e){
                const R = 64 === c.charCodeAt(0), z = R && Array.isArray(e[c]) ? e[c] : [
                    e[c]
                ];
                for (g of z){
                    const e = /[A-Z]/.test($ = c) ? $ : $.replace(/-[^]/g, (e)=>e[1].toUpperCase()), z = "object" == typeof g && g && g.toString === B && (!n.utils[e] || !t.length);
                    if (e in n.utils && !z) {
                        const t = n.utils[e];
                        if (t !== l) {
                            l = t, p(t(g)), l = null;
                            continue;
                        }
                    } else if (e in u) {
                        const t = u[e];
                        if (t !== s) {
                            s = t, p(t(g)), s = null;
                            continue;
                        }
                    }
                    if (R && (b = c.slice(1) in n.media ? "@media " + n.media[c.slice(1)] : c, c = b.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e, t, r, n, i, o)=>{
                        const l = h.test(t), s = .0625 * (l ? -1 : 1), [a, c] = l ? [
                            n,
                            t
                        ] : [
                            t,
                            n
                        ];
                        return "(" + ("=" === r[0] ? "" : ">" === r[0] === l ? "max-" : "min-") + a + ":" + ("=" !== r[0] && 1 === r.length ? c.replace(h, (e, t, n)=>Number(t) + s * (">" === r ? 1 : -1) + n) : c) + (i ? ") and (" + (">" === i[0] ? "min-" : "max-") + a + ":" + (1 === i.length ? o.replace(h, (e, t, r)=>Number(t) + s * (">" === i ? -1 : 1) + r) : o) : "") + ")";
                    })), z) {
                        const e = R ? r.concat(c) : [
                            ...r
                        ], n = R ? [
                            ...t
                        ] : f(t, c.split(y));
                        void 0 !== o && i(x(...o)), o = void 0, a(g, n, e);
                    } else void 0 === o && (o = [
                        [],
                        t,
                        r
                    ]), c = R || 36 !== c.charCodeAt(0) ? c : `--${S(n.prefix)}${c.slice(1).replace(/\$/g, "-")}`, g = z ? g : "number" == typeof g ? g && e in I ? String(g) + "px" : String(g) : k(m(e, null == g ? "" : g), n.prefix, n.themeMap[e]), o[0].push(`${R ? `${c} ` : `${d(c)}:`}${g}`);
                }
            }
            var b, $;
        };
        p(e), void 0 !== o && i(x(...o)), o = void 0;
    };
    a(e, t, r);
}, x = (e, t, r)=>`${r.map((e)=>`${e}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(r.length ? r.length + 1 : 0).join("}")}`, I = {
    animationDelay: 1,
    animationDuration: 1,
    backgroundSize: 1,
    blockSize: 1,
    border: 1,
    borderBlock: 1,
    borderBlockEnd: 1,
    borderBlockEndWidth: 1,
    borderBlockStart: 1,
    borderBlockStartWidth: 1,
    borderBlockWidth: 1,
    borderBottom: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomWidth: 1,
    borderEndEndRadius: 1,
    borderEndStartRadius: 1,
    borderInlineEnd: 1,
    borderInlineEndWidth: 1,
    borderInlineStart: 1,
    borderInlineStartWidth: 1,
    borderInlineWidth: 1,
    borderLeft: 1,
    borderLeftWidth: 1,
    borderRadius: 1,
    borderRight: 1,
    borderRightWidth: 1,
    borderSpacing: 1,
    borderStartEndRadius: 1,
    borderStartStartRadius: 1,
    borderTop: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderTopWidth: 1,
    borderWidth: 1,
    bottom: 1,
    columnGap: 1,
    columnRule: 1,
    columnRuleWidth: 1,
    columnWidth: 1,
    containIntrinsicSize: 1,
    flexBasis: 1,
    fontSize: 1,
    gap: 1,
    gridAutoColumns: 1,
    gridAutoRows: 1,
    gridTemplateColumns: 1,
    gridTemplateRows: 1,
    height: 1,
    inlineSize: 1,
    inset: 1,
    insetBlock: 1,
    insetBlockEnd: 1,
    insetBlockStart: 1,
    insetInline: 1,
    insetInlineEnd: 1,
    insetInlineStart: 1,
    left: 1,
    letterSpacing: 1,
    margin: 1,
    marginBlock: 1,
    marginBlockEnd: 1,
    marginBlockStart: 1,
    marginBottom: 1,
    marginInline: 1,
    marginInlineEnd: 1,
    marginInlineStart: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    offsetDistance: 1,
    offsetRotate: 1,
    outline: 1,
    outlineOffset: 1,
    outlineWidth: 1,
    overflowClipMargin: 1,
    padding: 1,
    paddingBlock: 1,
    paddingBlockEnd: 1,
    paddingBlockStart: 1,
    paddingBottom: 1,
    paddingInline: 1,
    paddingInlineEnd: 1,
    paddingInlineStart: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
    perspective: 1,
    right: 1,
    rowGap: 1,
    scrollMargin: 1,
    scrollMarginBlock: 1,
    scrollMarginBlockEnd: 1,
    scrollMarginBlockStart: 1,
    scrollMarginBottom: 1,
    scrollMarginInline: 1,
    scrollMarginInlineEnd: 1,
    scrollMarginInlineStart: 1,
    scrollMarginLeft: 1,
    scrollMarginRight: 1,
    scrollMarginTop: 1,
    scrollPadding: 1,
    scrollPaddingBlock: 1,
    scrollPaddingBlockEnd: 1,
    scrollPaddingBlockStart: 1,
    scrollPaddingBottom: 1,
    scrollPaddingInline: 1,
    scrollPaddingInlineEnd: 1,
    scrollPaddingInlineStart: 1,
    scrollPaddingLeft: 1,
    scrollPaddingRight: 1,
    scrollPaddingTop: 1,
    shapeMargin: 1,
    textDecoration: 1,
    textDecorationThickness: 1,
    textIndent: 1,
    textUnderlineOffset: 1,
    top: 1,
    transitionDelay: 1,
    transitionDuration: 1,
    verticalAlign: 1,
    width: 1,
    wordSpacing: 1
}, R = (e)=>String.fromCharCode(e + (e > 25 ? 39 : 97)), z = (e)=>((e)=>{
        let t, r = "";
        for(t = Math.abs(e); t > 52; t = t / 52 | 0)r = R(t % 52) + r;
        return R(t % 52) + r;
    })(((e, t)=>{
        let r = t.length;
        for(; r;)e = 33 * e ^ t.charCodeAt(--r);
        return e;
    })(5381, JSON.stringify(e)) >>> 0), W = [
    "themed",
    "global",
    "styled",
    "onevar",
    "resonevar",
    "allvar",
    "inline"
], j = (e)=>{
    if (e.href && !e.href.startsWith(location.origin)) return !1;
    try {
        return !!e.cssRules;
    } catch (e) {
        return !1;
    }
}, E = (e)=>{
    let t;
    const r = ()=>{
        const { cssRules: e } = t.sheet;
        return [].map.call(e, (r, n)=>{
            const { cssText: i } = r;
            let o = "";
            if (i.startsWith("--sxs")) return "";
            if (e[n - 1] && (o = e[n - 1].cssText).startsWith("--sxs")) {
                if (!r.cssRules.length) return "";
                for(const e in t.rules)if (t.rules[e].group === r) return `--sxs{--sxs:${[
                    ...t.rules[e].cache
                ].join(" ")}}${i}`;
                return r.cssRules.length ? `${o}${i}` : "";
            }
            return i;
        }).join("");
    }, n = ()=>{
        if (t) {
            const { rules: e, sheet: r } = t;
            if (!r.deleteRule) {
                for(; 3 === Object(Object(r.cssRules)[0]).type;)r.cssRules.splice(0, 1);
                r.cssRules = [];
            }
            for(const t in e)delete e[t];
        }
        const i = Object(e).styleSheets || [];
        for (const e of i)if (j(e)) {
            for(let i = 0, o = e.cssRules; o[i]; ++i){
                const l = Object(o[i]);
                if (1 !== l.type) continue;
                const s = Object(o[i + 1]);
                if (4 !== s.type) continue;
                ++i;
                const { cssText: a } = l;
                if (!a.startsWith("--sxs")) continue;
                const c = a.slice(14, -3).trim().split(/\s+/), d = W[c[0]];
                d && (t || (t = {
                    sheet: e,
                    reset: n,
                    rules: {},
                    toString: r
                }), t.rules[d] = {
                    group: s,
                    index: i,
                    cache: new Set(c)
                });
            }
            if (t) break;
        }
        if (!t) {
            const i = (e, t)=>({
                    type: t,
                    cssRules: [],
                    insertRule (e, t) {
                        this.cssRules.splice(t, 0, i(e, {
                            import: 3,
                            undefined: 1
                        }[(e.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
                    },
                    get cssText () {
                        return "@media{}" === e ? `@media{${[].map.call(this.cssRules, (e)=>e.cssText).join("")}}` : e;
                    }
                });
            t = {
                sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : i("", "text/css"),
                rules: {},
                reset: n,
                toString: r
            };
        }
        const { sheet: o, rules: l } = t;
        for(let e = W.length - 1; e >= 0; --e){
            const t = W[e];
            if (!l[t]) {
                const r = W[e + 1], n = l[r] ? l[r].index : o.cssRules.length;
                o.insertRule("@media{}", n), o.insertRule(`--sxs{--sxs:${e}}`, n), l[t] = {
                    group: o.cssRules[n + 1],
                    index: n,
                    cache: new Set([
                        e
                    ])
                };
            }
            v(l[t]);
        }
    };
    return n(), t;
}, v = (e)=>{
    const t = e.group;
    let r = t.cssRules.length;
    e.apply = (e)=>{
        try {
            t.insertRule(e, r), ++r;
        } catch (e) {}
    };
}, T = Symbol(), w = o(), M = (e, t)=>w(e, ()=>(...r)=>{
            let n = {
                type: null,
                composers: new Set
            };
            for (const t of r)if (null != t) {
                if (t[l]) {
                    null == n.type && (n.type = t[l].type);
                    for (const e of t[l].composers)n.composers.add(e);
                } else t.constructor !== Object || t.$$typeof ? null == n.type && (n.type = t) : n.composers.add(C(t, e));
            }
            return null == n.type && (n.type = "span"), n.composers.size || n.composers.add([
                "PJLV",
                {},
                [],
                [],
                {},
                []
            ]), P(e, n, t);
        }), C = ({ variants: e, compoundVariants: t, defaultVariants: r, ...n }, i)=>{
    const o = `${S(i.prefix)}c-${z(n)}`, l = [], s = [], d = Object.create(null), g = [];
    for(const e in r)d[e] = String(r[e]);
    if ("object" == typeof e && e) for(const t in e){
        p = d, u = t, c.call(p, u) || (d[t] = "undefined");
        const r = e[t];
        for(const e in r){
            const n = {
                [t]: String(e)
            };
            "undefined" === String(e) && g.push(t);
            const i = r[e], o = [
                n,
                i,
                !a(i)
            ];
            l.push(o);
        }
    }
    var p, u;
    if ("object" == typeof t && t) for (const e of t){
        let { css: t, ...r } = e;
        t = "object" == typeof t && t || {};
        for(const e in r)r[e] = String(r[e]);
        const n = [
            r,
            t,
            !a(t)
        ];
        s.push(n);
    }
    return [
        o,
        n,
        l,
        s,
        d,
        g
    ];
}, P = (e, t, r)=>{
    const [n, i, o, a] = L(t.composers), c = "function" == typeof t.type || t.type.$$typeof ? ((e)=>{
        function t() {
            for(let r = 0; r < t[T].length; r++){
                const [n, i] = t[T][r];
                e.rules[n].apply(i);
            }
            return t[T] = [], null;
        }
        return t[T] = [], t.rules = {}, W.forEach((e)=>t.rules[e] = {
                apply: (r)=>t[T].push([
                        e,
                        r
                    ])
            }), t;
    })(r) : null, d = (c || r).rules, g = `.${n}${i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""}`, p = (l)=>{
        l = "object" == typeof l && l || A;
        const { css: s, ...p } = l, u = {};
        for(const e in o)if (delete p[e], e in l) {
            let t = l[e];
            "object" == typeof t && t ? u[e] = {
                "@initial": o[e],
                ...t
            } : (t = String(t), u[e] = "undefined" !== t || a.has(e) ? t : o[e]);
        } else u[e] = o[e];
        const h = new Set([
            ...i
        ]);
        for (const [n, i, o, l] of t.composers){
            r.rules.styled.cache.has(n) || (r.rules.styled.cache.add(n), $(i, [
                `.${n}`
            ], [], e, (e)=>{
                d.styled.apply(e);
            }));
            const t = O(o, u, e.media), s = O(l, u, e.media, !0);
            for (const i of t)if (void 0 !== i) for (const [t, o, l] of i){
                const i = `${n}-${z(o)}-${t}`;
                h.add(i);
                const s = (l ? r.rules.resonevar : r.rules.onevar).cache, a = l ? d.resonevar : d.onevar;
                s.has(i) || (s.add(i), $(o, [
                    `.${i}`
                ], [], e, (e)=>{
                    a.apply(e);
                }));
            }
            for (const t of s)if (void 0 !== t) for (const [i, o] of t){
                const t = `${n}-${z(o)}-${i}`;
                h.add(t), r.rules.allvar.cache.has(t) || (r.rules.allvar.cache.add(t), $(o, [
                    `.${t}`
                ], [], e, (e)=>{
                    d.allvar.apply(e);
                }));
            }
        }
        if ("object" == typeof s && s) {
            const t = `${n}-i${z(s)}-css`;
            h.add(t), r.rules.inline.cache.has(t) || (r.rules.inline.cache.add(t), $(s, [
                `.${t}`
            ], [], e, (e)=>{
                d.inline.apply(e);
            }));
        }
        for (const e of String(l.className || "").trim().split(/\s+/))e && h.add(e);
        const f = p.className = [
            ...h
        ].join(" ");
        return {
            type: t.type,
            className: f,
            selector: g,
            props: p,
            toString: ()=>f,
            deferredInjector: c
        };
    };
    return s(p, {
        className: n,
        selector: g,
        [l]: t,
        toString: ()=>(r.rules.styled.cache.has(n) || p(), n)
    });
}, L = (e)=>{
    let t = "";
    const r = [], n = {}, i = [];
    for (const [o, , , , l, s] of e){
        "" === t && (t = o), r.push(o), i.push(...s);
        for(const e in l){
            const t = l[e];
            (void 0 === n[e] || "undefined" !== t || s.includes(t)) && (n[e] = t);
        }
    }
    return [
        t,
        r,
        n,
        new Set(i)
    ];
}, O = (e, t, r, n)=>{
    const i = [];
    e: for (let [o, l, s] of e){
        if (s) continue;
        let e, a = 0, c = !1;
        for(e in o){
            const n = o[e];
            let i = t[e];
            if (i !== n) {
                if ("object" != typeof i || !i) continue e;
                {
                    let e, t, o = 0;
                    for(const l in i){
                        if (n === String(i[l])) {
                            if ("@initial" !== l) {
                                const e = l.slice(1);
                                (t = t || []).push(e in r ? r[e] : l.replace(/^@media ?/, "")), c = !0;
                            }
                            a += o, e = !0;
                        }
                        ++o;
                    }
                    if (t && t.length && (l = {
                        ["@media " + t.join(", ")]: l
                    }), !e) continue e;
                }
            }
        }
        (i[a] = i[a] || []).push([
            n ? "cv" : `${e}-${o[e]}`,
            l,
            c
        ]);
    }
    return i;
}, A = {}, N = o(), D = (e, t)=>N(e, ()=>(...r)=>{
            const n = ()=>{
                for (let n of r){
                    n = "object" == typeof n && n || {};
                    let r = z(n);
                    if (!t.rules.global.cache.has(r)) {
                        if (t.rules.global.cache.add(r), "@import" in n) {
                            let e = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
                            for (let r of [].concat(n["@import"]))r = r.includes('"') || r.includes("'") ? r : `"${r}"`, t.sheet.insertRule(`@import ${r};`, e++);
                            delete n["@import"];
                        }
                        $(n, [], [], e, (e)=>{
                            t.rules.global.apply(e);
                        });
                    }
                }
                return "";
            };
            return s(n, {
                toString: n
            });
        }), H = o(), V = (e, t)=>H(e, ()=>(r)=>{
            const n = `${S(e.prefix)}k-${z(r)}`, i = ()=>{
                if (!t.rules.global.cache.has(n)) {
                    t.rules.global.cache.add(n);
                    const i = [];
                    $(r, [], [], e, (e)=>i.push(e));
                    const o = `@keyframes ${n}{${i.join("")}}`;
                    t.rules.global.apply(o);
                }
                return n;
            };
            return s(i, {
                get name () {
                    return i();
                },
                toString: i
            });
        }), G = class {
    constructor(e, t, r, n){
        this.token = null == e ? "" : String(e), this.value = null == t ? "" : String(t), this.scale = null == r ? "" : String(r), this.prefix = null == n ? "" : String(n);
    }
    get computedValue() {
        return "var(" + this.variable + ")";
    }
    get variable() {
        return "--" + S(this.prefix) + S(this.scale) + this.token;
    }
    toString() {
        return this.computedValue;
    }
}, F = o(), J = (e, t)=>F(e, ()=>(r, n)=>{
            n = "object" == typeof r && r || Object(n);
            const i = `.${r = (r = "string" == typeof r ? r : "") || `${S(e.prefix)}t-${z(n)}`}`, o = {}, l = [];
            for(const t in n){
                o[t] = {};
                for(const r in n[t]){
                    const i = `--${S(e.prefix)}${t}-${r}`, s = k(String(n[t][r]), e.prefix, t);
                    o[t][r] = new G(r, s, t, e.prefix), l.push(`${i}:${s}`);
                }
            }
            const s = ()=>{
                if (l.length && !t.rules.themed.cache.has(r)) {
                    t.rules.themed.cache.add(r);
                    const i = `${n === e.theme ? ":root," : ""}.${r}{${l.join(";")}}`;
                    t.rules.themed.apply(i);
                }
                return r;
            };
            return {
                ...o,
                get className () {
                    return s();
                },
                selector: i,
                toString: s
            };
        }), U = o();
var X, Y = o(), q = (e)=>{
    const t = ((e)=>{
        let t = !1;
        const r = U(e, (e)=>{
            t = !0;
            const r = "prefix" in (e = "object" == typeof e && e || {}) ? String(e.prefix) : "", i = "object" == typeof e.media && e.media || {}, o = "object" == typeof e.root ? e.root || null : globalThis.document || null, l = "object" == typeof e.theme && e.theme || {}, s = {
                prefix: r,
                media: i,
                theme: l,
                themeMap: "object" == typeof e.themeMap && e.themeMap || {
                    ...n
                },
                utils: "object" == typeof e.utils && e.utils || {}
            }, a = E(o), c = {
                css: M(s, a),
                globalCss: D(s, a),
                keyframes: V(s, a),
                createTheme: J(s, a),
                reset () {
                    a.reset(), c.theme.toString();
                },
                theme: {},
                sheet: a,
                config: s,
                prefix: r,
                getCssText: a.toString,
                toString: a.toString
            };
            return String(c.theme = c.createTheme(l)), c;
        });
        return t || r.reset(), r;
    })(e);
    return t.styled = (({ config: e, sheet: t })=>Y(e, ()=>{
            const r = M(e, t);
            return (...e)=>{
                const t = r(...e), n = t[l].type, i = (0, _reactDefault.default).forwardRef((e, r)=>{
                    const i = e && e.as || n, { props: o, deferredInjector: l } = t(e);
                    return delete o.as, o.ref = r, l ? (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, null, (0, _reactDefault.default).createElement(i, o), (0, _reactDefault.default).createElement(l, null)) : (0, _reactDefault.default).createElement(i, o);
                });
                return i.className = t.className, i.displayName = `Styled.${n.displayName || n.name || n}`, i.selector = t.selector, i.toString = ()=>t.selector, i[l] = t[l], i;
            };
        }))(t), t;
}, K = ()=>X || (X = q()), Q = (...e)=>K().createTheme(...e), _ = (...e)=>K().globalCss(...e), ee = (...e)=>K().keyframes(...e), te = (...e)=>K().css(...e), re = (...e)=>K().styled(...e);

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"YIAts":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "document", ()=>document);
parcelHelpers.export(exports, "exists", ()=>exists);
parcelHelpers.export(exports, "navigator", ()=>navigator);
parcelHelpers.export(exports, "window", ()=>window);
var _nothingMock = require("nothing-mock");
var global = arguments[3];
var win = global.window;
var doc = global.document;
var nav = global.navigator;
var document = typeof doc !== "undefined" ? doc : (0, _nothingMock.Nothing);
var exists = function exists(variable) {
    return !(0, _nothingMock.isNothing)(variable);
};
var navigator = typeof nav !== "undefined" ? nav : (0, _nothingMock.Nothing);
var window = typeof win !== "undefined" ? win : (0, _nothingMock.Nothing);

},{"nothing-mock":"jNCXz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNCXz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Nothing", ()=>r);
parcelHelpers.export(exports, "deserialize", ()=>i);
parcelHelpers.export(exports, "isNothing", ()=>u);
parcelHelpers.export(exports, "isSomething", ()=>e);
parcelHelpers.export(exports, "serialize", ()=>o);
parcelHelpers.export(exports, "toBool", ()=>t);
var n, r = ((n = function() {
    return r;
}).toString = n.toLocaleString = n[Symbol.toPrimitive] = function() {
    return "";
}, n.valueOf = function() {
    return !1;
}, new Proxy(Object.freeze(n), {
    get: function(n, t) {
        return n.hasOwnProperty(t) ? n[t] : r;
    }
})), t = function(n) {
    return !(!n || !n.valueOf());
}, u = function(n) {
    return n === r;
}, e = function(n) {
    return !(n === r || null == n);
}, o = function(n) {
    return JSON.stringify(n, function(n, t) {
        return t === r ? null : t;
    });
}, i = function(n) {
    return JSON.parse(n, function(n, t) {
        return null === t ? r : t;
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4c6ti","3g8zt"], "3g8zt", "parcelRequire3c64")

//# sourceMappingURL=outtakes.f066bd09.js.map
