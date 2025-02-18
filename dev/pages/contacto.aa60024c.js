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
        globalObject
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
})({"gdcjM":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b59bd754aa60024c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
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
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"3FQBx":[function(require,module,exports,__globalThis) {
var _userFunctionsJs = require("./userFunctions.js");
// Redirección a "index.html" si no hay una sesión iniciada
function redirect() {
    if ((0, _userFunctionsJs.getCurrentUser)() == null) {
        const finalURL = new URL(require("b65816690826af82")); // (=> Después de Tarea 11)
        window.location.href = finalURL.href;
    }
}
redirect();
// Función para actualizar todos los textos que tengan el nombre del usuario
function updateUsernameTexts() {
    const texts = document.querySelectorAll("#userName");
    for (const text of texts)text.innerHTML = (0, _userFunctionsJs.getCurrentUser)();
}
updateUsernameTexts();
// Cargar avatar del usuario actual al entrar en la página
function loadUserAvatar() {
    const username = (0, _userFunctionsJs.getCurrentUser)();
    const savedAvatar = (0, _userFunctionsJs.getImage)(username);
    // Si existe una imagen guardada, actualizar el src del avatar
    if (savedAvatar) {
        const avatars = document.querySelectorAll('#userAvatar');
        avatars.forEach((avatar)=>{
            avatar.src = savedAvatar;
        });
    }
}
loadUserAvatar();
// Abrir ventana de "Configuración"
async function openConfigWindow() {
    (0, _userFunctionsJs.animacionVentana)("configWindow", "aparecer");
    const soundCheckbox = document.getElementById("soundCheckbox");
    soundCheckbox.addEventListener("change", ()=>{
        (0, _userFunctionsJs.setSound)(soundCheckbox.checked);
        if (soundCheckbox.checked) new Audio("../media/audio/flac/rellenar.flac").play();
    });
}
// Abrir ventana de "Usuario"
async function openUserWindow() {
    (0, _userFunctionsJs.animacionVentana)("userWindow", "aparecer");
    const textPasswordNotLongEnough = document.getElementById("passwordNotLongEnough");
    const textUserAlreadyRegistered = document.getElementById("userAlreadyRegistered");
    const textChangedData = document.getElementById("changedData");
    textPasswordNotLongEnough.style.display = "none";
    textUserAlreadyRegistered.style.display = "none";
    textChangedData.style.display = "none";
    const windowContent = document.getElementById("windowContent");
    windowContent.style.transform = "scale(0.7)";
    const changeUsernameInput = document.getElementById("changeUsernameInput");
    const changePasswordInput = document.getElementById("changePasswordInput");
    const users = (0, _userFunctionsJs.getUsers)();
    changeUsernameInput.value = (0, _userFunctionsJs.getCurrentUser)();
    changePasswordInput.value = users[(0, _userFunctionsJs.getCurrentUser)()];
    function checkInput(event) {
        if (event.target === changeUsernameInput) return;
        textPasswordNotLongEnough.style.display = "none";
        textUserAlreadyRegistered.style.display = "none";
        windowContent.style.transform = "scale(0.7)";
        if (changePasswordInput.value.length == 0) {
            textPasswordNotLongEnough.style.display = "none";
            windowContent.style.transform = "scale(0.7)";
        } else if (changePasswordInput.value.length < 8) {
            textPasswordNotLongEnough.style.display = "block";
            windowContent.style.transform = "scale(0.65)";
        }
    }
    changeUsernameInput.addEventListener("input", checkInput);
    changePasswordInput.addEventListener("input", checkInput);
}
// Abrir ventana de Confirmación
async function openConfirmWindow() {
    (0, _userFunctionsJs.animacionVentana)("confirmWindow", "aparecer");
    document.getElementById("confirmText").textContent = "\xbfEst\xe1s seguro que quieres borrar a " + (0, _userFunctionsJs.getCurrentUser)() + "?";
}
// Cerrar ventana de Configuración
async function disposeConfigWindow() {
    (0, _userFunctionsJs.animacionVentana)("configWindow", "desaparecer");
}
// Cerrar ventana de "Usuario"
async function disposeUserWindow() {
    await (0, _userFunctionsJs.animacionVentana)("userWindow", "desaparecer");
}
// Cerrar ventana de "Usuario"
async function disposeConfirmWindow() {
    await (0, _userFunctionsJs.animacionVentana)("confirmWindow", "desaparecer");
}
// Cerrar ventana
function disposeWindow(event) {
    const configWindow = document.getElementById("configWindow");
    const userWindow = document.getElementById("userWindow");
    const confirmWindow = document.getElementById("confirmWindow");
    if (event.target === configWindow) (0, _userFunctionsJs.animacionVentana)("configWindow", "desaparecer");
    else if (event.target === userWindow) (0, _userFunctionsJs.animacionVentana)("userWindow", "desaparecer");
    else if (event.target === confirmWindow) (0, _userFunctionsJs.animacionVentana)("confirmWindow", "desaparecer");
    // Si se presiona "Esc"
    if (event.key === "Escape") {
        if (configWindow.style.display !== "none") (0, _userFunctionsJs.animacionVentana)("configWindow", "desaparecer");
        else if (confirmWindow.style.display !== "none") (0, _userFunctionsJs.animacionVentana)("confirmWindow", "desaparecer");
        else if (userWindow.style.display !== "none") (0, _userFunctionsJs.animacionVentana)("userWindow", "desaparecer");
    }
}
async function confirmChanges() {
    const changeUsernameInput = document.getElementById("changeUsernameInput");
    const changePasswordInput = document.getElementById("changePasswordInput");
    const textUserAlreadyRegistered = document.getElementById("userAlreadyRegistered");
    const textPasswordNotLongEnough = document.getElementById("passwordNotLongEnough");
    const textChangedData = document.getElementById("changedData");
    textChangedData.style.display = "none";
    const windowContent = document.getElementById("windowContent");
    windowContent.style.transform = "scale(0.7)";
    // Validación de que los campos no pueden estar vacíos
    if (changeUsernameInput.value === "") changeUsernameInput.placeholder = "Este campo no puede estar vac\xedo.";
    if (changePasswordInput.value === "") changePasswordInput.placeholder = "Este campo no puede estar vac\xedo.";
    if (changePasswordInput.value.length < 8) {
        textPasswordNotLongEnough.style.display = "block";
        windowContent.style.transform = "scale(0.65)";
        return;
    }
    if (changeUsernameInput.value === "" || changePasswordInput.value === "") return;
    // Comprueba el usuario
    const username = changeUsernameInput.value;
    const password = changePasswordInput.value;
    const users = (0, _userFunctionsJs.getUsers)();
    const userFound = username in users;
    if (userFound && username != (0, _userFunctionsJs.getCurrentUser)()) {
        textUserAlreadyRegistered.style.display = "block";
        windowContent.style.transform = "scale(0.65)";
        return;
    }
    // Si se ha hecho ningún cambio mostrar mensaje
    let espera = false;
    if (username != (0, _userFunctionsJs.getCurrentUser)() || password != users[(0, _userFunctionsJs.getCurrentUser)()]) {
        textChangedData.style.display = "block";
        windowContent.style.transform = "scale(0.65)";
        espera = true;
    }
    // Establece la contraseña y reemplaza nombres
    users[username] = users[(0, _userFunctionsJs.getCurrentUser)()];
    delete users[(0, _userFunctionsJs.getCurrentUser)()];
    const previousUsername = (0, _userFunctionsJs.getCurrentUser)();
    (0, _userFunctionsJs.setCurrentUser)(username);
    users[username] = password;
    (0, _userFunctionsJs.setUsers)(users);
    // Cambiar el nombre al cual está la imagen actual asociada.
    if (username != previousUsername) {
        const currentImage = (0, _userFunctionsJs.getImage)(previousUsername);
        if (currentImage) {
            (0, _userFunctionsJs.setImage)(username, currentImage); // Asociar la imagen al nuevo nombre
            (0, _userFunctionsJs.deleteImage)(previousUsername); // Eliminar la imagen del nombre anterior
        }
    }
    textUserAlreadyRegistered.style.display = "none";
    updateUsernameTexts();
    if (espera) await (0, _userFunctionsJs.esperar)(500);
    disposeUserWindow();
}
async function logoutSession() {
    await disposeUserWindow();
    (0, _userFunctionsJs.logout)();
}
async function deleteAccount() {
    const confirmText = document.getElementById("confirmText");
    confirmText.style.transform = "scale(3)";
    confirmText.textContent = "\uD83D\uDC4B";
    await (0, _userFunctionsJs.esperar)(300);
    await disposeConfirmWindow();
    const username = (0, _userFunctionsJs.getCurrentUser)();
    // Eliminar al usuario de la lista de usuarios
    const users = (0, _userFunctionsJs.getUsers)();
    delete users[username];
    (0, _userFunctionsJs.setUsers)(users);
    // Eliminar la imagen asociada al usuario
    (0, _userFunctionsJs.deleteImage)(username);
    await logoutSession();
}
document.addEventListener("mousedown", disposeWindow);
document.addEventListener("keydown", disposeWindow);
/**
 * Manejo de la imagen de perfil
 */ const editIcon = document.getElementById('editIcon');
const userAvatar = document.getElementById('userAvatar');
const fileInput = document.getElementById('fileInput');
// Abrir selector de archivos
editIcon.addEventListener('click', ()=>{
    fileInput.click();
});
// Al seleccionar una imagen, actualiza la imagen del avatar
fileInput.addEventListener('change', (event)=>{
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Obtener el nombre del usuario actual
            const username = (0, _userFunctionsJs.getCurrentUser)();
            // Actualizar el avatar con la imagen seleccionada
            userAvatar.src = e.target.result;
            // Guardar la imagen en el array de imágenes asociado al usuario
            (0, _userFunctionsJs.setImage)(username, e.target.result);
            // Actualizar todos los elementos con id "userAvatar" a la nueva imagen
            const avatars = document.querySelectorAll('#userAvatar');
            avatars.forEach((avatar)=>{
                avatar.src = e.target.result;
            });
        };
        reader.readAsDataURL(file);
    }
});
/*
// Hacemos visible esto de las ventanas para que pillen el ámbito

document.addEventListener("DOMContentLoaded", () => {
    window.logoutSession = logoutSession;
    window.deleteAccount = deleteAccount;
    window.confirmChanges = confirmChanges;
    window.openUserWindow = openUserWindow;
    window.openConfigWindow = openConfigWindow;
    window.openConfirmWindow = openConfirmWindow;
    window.disposeConfigWindow = disposeConfigWindow;
    window.disposeConfirmWindow = disposeConfirmWindow;
});
*/ // De nuevo, esto salvará la tarea 12
document.getElementsByClassName("openUserWindowEvent")[0].addEventListener("click", openUserWindow);
document.getElementById("openConfigWindowEvent").addEventListener("click", openConfigWindow);
document.getElementById("disposeConfigWindowEvent").addEventListener("click", disposeConfigWindow);
document.getElementById("openConfirmWindowEvent").addEventListener("click", openConfirmWindow);
document.getElementById("disposeConfirmWindowEvent").addEventListener("click", disposeConfirmWindow);
document.getElementById("confirmChangesEvent").addEventListener("click", confirmChanges);
document.getElementById("logoutSessionEvent").addEventListener("click", logoutSession);
document.getElementById("deleteAccountEvent").addEventListener("click", deleteAccount);

},{"./userFunctions.js":"ofUT0","b65816690826af82":"7jHri"}],"ofUT0":[function(require,module,exports,__globalThis) {
// Variable de usuarios
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "users", ()=>users);
parcelHelpers.export(exports, "getUsers", ()=>getUsers);
parcelHelpers.export(exports, "setUsers", ()=>setUsers);
parcelHelpers.export(exports, "getCurrentUser", ()=>getCurrentUser);
parcelHelpers.export(exports, "setCurrentUser", ()=>setCurrentUser);
parcelHelpers.export(exports, "logout", ()=>logout);
parcelHelpers.export(exports, "usersImages", ()=>usersImages);
parcelHelpers.export(exports, "getImage", ()=>getImage);
parcelHelpers.export(exports, "setImage", ()=>setImage);
parcelHelpers.export(exports, "deleteImage", ()=>deleteImage);
parcelHelpers.export(exports, "setSound", ()=>setSound);
parcelHelpers.export(exports, "esperar", ()=>esperar);
parcelHelpers.export(exports, "animacionVentana", ()=>animacionVentana);
let users;
// Getter del array de objetos usuario
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || {};
}
// Setter del array de objetos usuario
function setUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}
// String del nombre actual del usuario
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}
// Establecer usuario actual
function setCurrentUser(username) {
    localStorage.setItem('currentUser', username);
}
// Cerrar sesión y redirigir
function logout() {
    localStorage.removeItem("currentUser");
    // Copia de redirect - no se referenciar bien ni ingeniármelas, pero ahora mismo me da igual
    if (getCurrentUser() == null) {
        const finalURL = new URL(require("eb3a16bc39e01178"));
        window.location.href = finalURL.href;
    }
}
// Array de imágenes de usuarios (se asocia al nombre del usuario)
let usersImages = JSON.parse(localStorage.getItem('usersImages')) || {};
// Obtener la imagen de un usuario
function getImage(username) {
    return usersImages[username] || null;
}
// Guardar la imagen del usuario
function setImage(username, imageData) {
    usersImages[username] = imageData;
    localStorage.setItem('usersImages', JSON.stringify(usersImages));
}
// Eliminar la imagen de un usuario
function deleteImage(username) {
    if (usersImages[username]) {
        delete usersImages[username];
        localStorage.setItem('usersImages', JSON.stringify(usersImages));
    }
}
// Activar (o desactivar) sonido
function setSound(booleano) {
    localStorage.setItem('sound', booleano);
}
setSound(true);
// Función básica para esperar un número determinado de ms.
function esperar(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
// Función básica para des/aparecer una ventana
async function animacionVentana(ventana, tipo) {
    document.getElementById(ventana).style.opacity = 0;
    if (tipo == "aparecer") {
        document.getElementById(ventana).style.display = "flex";
        for(let i = 0; i <= 10; i++){
            document.getElementById(ventana).style.opacity = i / 10;
            await esperar(10);
        }
    } else if (tipo == "desaparecer") {
        for(let i = 10; i >= 0; i--){
            document.getElementById(ventana).style.opacity = i / 10;
            await esperar(10);
        }
        document.getElementById(ventana).style.display = "none";
    }
}

},{"eb3a16bc39e01178":"7jHri","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jHri":[function(require,module,exports,__globalThis) {
module.exports = require("9899254dd70c6ada").getBundleURL('fAHlu') + "../index.html" + "?" + Date.now();

},{"9899254dd70c6ada":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}]},["gdcjM","3FQBx"], "3FQBx", "parcelRequire94c2")

//# sourceMappingURL=contacto.aa60024c.js.map
