"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1245,4410],{71245:(e,t,r)=>{r.r(t),r.d(t,{IServiceWorkerManager:()=>h,JupyterLiteServer:()=>a,Router:()=>o,ServiceWorkerManager:()=>p,WORKER_NAME:()=>u});var i=r(55610),s=r(63765),n=r(11079);class o{constructor(){this._routes=[]}get(e,t){this._add("GET",e,t)}put(e,t){this._add("PUT",e,t)}post(e,t){this._add("POST",e,t)}patch(e,t){this._add("PATCH",e,t)}delete(e,t){this._add("DELETE",e,t)}async route(e){const t=new URL(e.url),{method:r}=e,{pathname:i}=t;for(const s of this._routes){if(s.method!==r)continue;const n=i.match(s.pattern);if(!n)continue;const o=n.slice(1);let a;if("PATCH"===s.method||"PUT"===s.method||"POST"===s.method)try{a=JSON.parse(await e.text())}catch{a=void 0}return s.callback.call(null,{pathname:i,body:a,query:Object.fromEntries(t.searchParams)},...o)}throw new Error("Cannot route "+e.method+" "+e.url)}_add(e,t,r){"string"==typeof t&&(t=new RegExp(t)),this._routes.push({method:e,pattern:t,callback:r})}}class a extends s.Application{constructor(e){var t;super(e),this.name="JupyterLite Server",this.namespace=this.name,this.version="unknown",this._router=new o,this._serviceManager=new i.ServiceManager({standby:"never",serverSettings:{...i.ServerConnection.makeSettings(),WebSocket:n.WebSocket,fetch:null!==(t=this.fetch.bind(this))&&void 0!==t?t:void 0}})}get router(){return this._router}get serviceManager(){return this._serviceManager}async fetch(e,t){if(!(e instanceof Request))throw Error("Request info is not a Request");return this._router.route(e)}attachShell(e){}evtResize(e){}registerPluginModule(e){let t=e.default;Object.prototype.hasOwnProperty.call(e,"__esModule")||(t=e),Array.isArray(t)||(t=[t]),t.forEach((e=>{try{this.registerPlugin(e)}catch(e){console.error(e)}}))}registerPluginModules(e){e.forEach((e=>{this.registerPluginModule(e)}))}}var c=r(26169);const l=r.p+"service-worker-b2fb40a.js",h=new c.Token("@jupyterlite/server-extension:IServiceWorkerManager"),u=`${l}`.split("/").slice(-1)[0];var g=r(32798),d=r(96801);class p{constructor(){this._registration=null,this._registrationChanged=new g.Signal(this),this._ready=new c.PromiseDelegate,this.initialize().catch(console.warn)}get registrationChanged(){return this._registrationChanged}get enabled(){return null!==this._registration}get ready(){return this._ready.promise}async initialize(){const{serviceWorker:e}=navigator,t=d.URLExt.join(d.PageConfig.getBaseUrl(),u);let r=null;if(e?e.controller&&(r=await e.getRegistration(e.controller.scriptURL)||null,console.info("JupyterLite ServiceWorker was already registered")):console.warn("ServiceWorkers not supported in this browser"),!r&&e)try{console.info("Registering new JupyterLite ServiceWorker",t),r=await e.register(t),console.info("JupyterLite ServiceWorker was sucessfully registered")}catch(e){console.warn(e),console.warn(`JupyterLite ServiceWorker registration unexpectedly failed: ${e}`)}this.setRegistration(r),r?this._ready.resolve(void 0):this._ready.reject(void 0)}setRegistration(e){this._registration=e,this._registrationChanged.emit(this._registration)}}}}]);
//# sourceMappingURL=1245.0aa0064.js.map