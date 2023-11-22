"use strict";/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var M=["require","exports","vs/base/common/platform","vs/base/common/extpath","vs/base/common/strings","vs/base/common/network","vs/base/common/uri","vs/base/common/path","vs/base/common/resources","vs/base/common/types","vs/base/common/errors","vs/workbench/contrib/output/common/outputLinkComputer","vs/editor/common/core/range"],U=function(T){for(var e=[],s=0,g=T.length;s<g;s++)e[s]=M[T[s]];return e};define(M[3],U([0,1,7,2,4,9]),function(T,e,s,g,d,m){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Pe=e.$Oe=e.$Ne=e.$Me=e.$Le=e.$Ke=e.$Je=e.$Ie=e.$He=e.$Ge=e.$Fe=e.$Ee=e.$De=e.$Ce=e.$Be=e.$Ae=void 0;function w(t){return t===47||t===92}e.$Ae=w;function R(t){return t.replace(/[\\/]/g,s.$5c.sep)}e.$Be=R;function y(t){return t.indexOf("/")===-1&&(t=R(t)),/^[a-zA-Z]:(\/|$)/.test(t)&&(t="/"+t),t}e.$Ce=y;function c(t,f=s.$5c.sep){if(!t)return"";const a=t.length,P=t.charCodeAt(0);if(w(P)){if(w(t.charCodeAt(1))&&!w(t.charCodeAt(2))){let A=3;const Y=A;for(;A<a&&!w(t.charCodeAt(A));A++);if(Y!==A&&!w(t.charCodeAt(A+1))){for(A+=1;A<a;A++)if(w(t.charCodeAt(A)))return t.slice(0,A+1).replace(/[\\/]/g,f)}}return f}else if(o(P)&&t.charCodeAt(1)===58)return w(t.charCodeAt(2))?t.slice(0,2)+f:t.slice(0,2);let C=t.indexOf("://");if(C!==-1){for(C+=3;C<a;C++)if(w(t.charCodeAt(C)))return t.slice(0,C+1)}return""}e.$De=c;function l(t){if(!g.$i||!t||t.length<5)return!1;let f=t.charCodeAt(0);if(f!==92||(f=t.charCodeAt(1),f!==92))return!1;let a=2;const P=a;for(;a<t.length&&(f=t.charCodeAt(a),f!==92);a++);return!(P===a||(f=t.charCodeAt(a+1),isNaN(f)||f===92))}e.$Ee=l;const v=/[\\/:\*\?"<>\|]/g,$=/[\\/]/g,u=/^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;function n(t,f=g.$i){const a=f?v:$;return!(!t||t.length===0||/^\s+$/.test(t)||(a.lastIndex=0,a.test(t))||f&&u.test(t)||t==="."||t===".."||f&&t[t.length-1]==="."||f&&t.length!==t.trim().length||t.length>255)}e.$Fe=n;function i(t,f,a){const P=t===f;return!a||P?P:!t||!f?!1:(0,d.$Ld)(t,f)}e.$Ge=i;function r(t,f,a,P=s.sep){if(t===f)return!0;if(!t||!f||f.length>t.length)return!1;if(a){if(!(0,d.$Md)(t,f))return!1;if(f.length===t.length)return!0;let A=f.length;return f.charAt(f.length-1)===P&&A--,t.charAt(A)===P}return f.charAt(f.length-1)!==P&&(f+=P),t.indexOf(f)===0}e.$He=r;function o(t){return t>=65&&t<=90||t>=97&&t<=122}e.$Ie=o;function h(t,f){return g.$i&&t.endsWith(":")&&(t+=s.sep),(0,s.$7c)(t)||(t=(0,s.$8c)(f,t)),t=(0,s.$6c)(t),g.$i?(t=(0,d.$ud)(t,s.sep),t.endsWith(":")&&(t+=s.sep)):(t=(0,d.$ud)(t,s.sep),t||(t=s.sep)),t}e.$Je=h;function b(t){const f=(0,s.$6c)(t);return g.$i?t.length>3?!1:I(f)&&(t.length===2||f.charCodeAt(2)===92):f===s.$5c.sep}e.$Ke=b;function I(t,f=g.$i){return f?o(t.charCodeAt(0))&&t.charCodeAt(1)===58:!1}e.$Le=I;function E(t,f=g.$i){return I(t,f)?t[0]:void 0}e.$Me=E;function k(t,f,a){return f.length>t.length?-1:t===f?0:(a&&(t=t.toLowerCase(),f=f.toLowerCase()),t.indexOf(f))}e.$Ne=k;function L(t){const f=t.split(":");let a,P,C;for(const A of f){const Y=Number(A);(0,m.$me)(Y)?P===void 0?P=Y:C===void 0&&(C=Y):a=a?[a,A].join(":"):A}if(!a)throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");return{path:a,line:P!==void 0?P:void 0,column:C!==void 0?C:P!==void 0?1:void 0}}e.$Oe=L;const N="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",O="BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";function q(t,f,a=8){let P="";for(let A=0;A<a;A++){let Y;A===0&&g.$i&&!f&&(a===3||a===4)?Y=O:Y=N,P+=Y.charAt(Math.floor(Math.random()*Y.length))}let C;return f?C=`${f}-${P}`:C=P,t?(0,s.$8c)(t,C):C}e.$Pe=q}),define(M[5],U([0,1,10,2,6]),function(T,e,s,g,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.COI=e.$1e=e.$Ze=e.$Ye=e.$Xe=e.$We=e.$Ve=e.$Ue=e.$Te=e.Schemas=void 0;var m;(function(c){c.inMemory="inmemory",c.vscode="vscode",c.internal="private",c.walkThrough="walkThrough",c.walkThroughSnippet="walkThroughSnippet",c.http="http",c.https="https",c.file="file",c.mailto="mailto",c.untitled="untitled",c.data="data",c.command="command",c.vscodeRemote="vscode-remote",c.vscodeRemoteResource="vscode-remote-resource",c.vscodeManagedRemoteResource="vscode-managed-remote-resource",c.vscodeUserData="vscode-userdata",c.vscodeCustomEditor="vscode-custom-editor",c.vscodeNotebookCell="vscode-notebook-cell",c.vscodeNotebookCellMetadata="vscode-notebook-cell-metadata",c.vscodeNotebookCellOutput="vscode-notebook-cell-output",c.vscodeInteractiveInput="vscode-interactive-input",c.vscodeSettings="vscode-settings",c.vscodeWorkspaceTrust="vscode-workspace-trust",c.vscodeTerminal="vscode-terminal",c.vscodeChatSesssion="vscode-chat-editor",c.webviewPanel="webview-panel",c.vscodeWebview="vscode-webview",c.extension="extension",c.vscodeFileResource="vscode-file",c.tmp="tmp",c.vsls="vsls",c.vscodeSourceControl="vscode-scm"})(m||(e.Schemas=m={})),e.$Te="vscode-tkn",e.$Ue="tkn";class w{constructor(){this.a=Object.create(null),this.b=Object.create(null),this.c=Object.create(null),this.d="http",this.e=null,this.f=`/${m.vscodeRemoteResource}`}setPreferredWebSchema(l){this.d=l}setDelegate(l){this.e=l}setServerRootPath(l){this.f=`${l}/${m.vscodeRemoteResource}`}set(l,v,$){this.a[l]=v,this.b[l]=$}setConnectionToken(l,v){this.c[l]=v}getPreferredWebSchema(){return this.d}rewrite(l){if(this.e)try{return this.e(l)}catch(r){return s.$Y(r),l}const v=l.authority;let $=this.a[v];$&&$.indexOf(":")!==-1&&$.indexOf("[")===-1&&($=`[${$}]`);const u=this.b[v],n=this.c[v];let i=`path=${encodeURIComponent(l.path)}`;return typeof n=="string"&&(i+=`&${e.$Ue}=${encodeURIComponent(n)}`),d.URI.from({scheme:g.$o?this.d:m.vscodeRemoteResource,authority:`${$}:${u}`,path:this.f,query:i})}}e.$Ve=new w,e.$We="vs/../../extensions",e.$Xe="vs/../../node_modules",e.$Ye="vs/../../node_modules.asar",e.$Ze="vs/../../node_modules.asar.unpacked";class R{static{this.a="vscode-app"}asBrowserUri(l){const v=this.b(l,T);return this.uriToBrowserUri(v)}uriToBrowserUri(l){return l.scheme===m.vscodeRemote?e.$Ve.rewrite(l):l.scheme===m.file&&(g.$m||g.$p&&g.$g.origin===`${m.vscodeFileResource}://${R.a}`)?l.with({scheme:m.vscodeFileResource,authority:l.authority||R.a,query:null,fragment:null}):l}asFileUri(l){const v=this.b(l,T);return this.uriToFileUri(v)}uriToFileUri(l){return l.scheme===m.vscodeFileResource?l.with({scheme:m.file,authority:l.authority!==R.a?l.authority:null,query:null,fragment:null}):l}b(l,v){return d.URI.isUri(l)?l:d.URI.parse(v.toUrl(l))}}e.$1e=new R;var y;(function(c){const l=new Map([["1",{"Cross-Origin-Opener-Policy":"same-origin"}],["2",{"Cross-Origin-Embedder-Policy":"require-corp"}],["3",{"Cross-Origin-Opener-Policy":"same-origin","Cross-Origin-Embedder-Policy":"require-corp"}]]);c.CoopAndCoep=Object.freeze(l.get("3"));const v="vscode-coi";function $(n){let i;typeof n=="string"?i=new URL(n).searchParams:n instanceof URL?i=n.searchParams:d.URI.isUri(n)&&(i=new URL(n.toString(!0)).searchParams);const r=i?.get(v);if(r)return l.get(r)}c.getHeadersFromQuery=$;function u(n,i,r){if(!globalThis.crossOriginIsolated)return;const o=i&&r?"3":r?"2":"1";n instanceof URLSearchParams?n.set(v,o):n[v]=o}c.addSearchParam=u})(y||(e.COI=y={}))}),define(M[8],U([0,1,3,5,7,2,4,6]),function(T,e,s,g,d,m,w,R){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$gg=e.DataUri=e.$fg=e.$eg=e.$dg=e.$cg=e.$bg=e.$ag=e.$_f=e.$$f=e.$0f=e.$9f=e.$8f=e.$7f=e.$6f=e.$5f=e.$4f=e.$3f=e.$2f=e.$1f=e.$Zf=e.$Yf=e.$Xf=e.$Wf=void 0;function y(u){return(0,R.$Se)(u,!0)}e.$Wf=y;class c{constructor(n){this.a=n}compare(n,i,r=!1){return n===i?0:(0,w.$Ed)(this.getComparisonKey(n,r),this.getComparisonKey(i,r))}isEqual(n,i,r=!1){return n===i?!0:!n||!i?!1:this.getComparisonKey(n,r)===this.getComparisonKey(i,r)}getComparisonKey(n,i=!1){return n.with({path:this.a(n)?n.path.toLowerCase():void 0,fragment:i?null:void 0}).toString()}ignorePathCasing(n){return this.a(n)}isEqualOrParent(n,i,r=!1){if(n.scheme===i.scheme){if(n.scheme===g.Schemas.file)return s.$He(y(n),y(i),this.a(n))&&n.query===i.query&&(r||n.fragment===i.fragment);if((0,e.$bg)(n.authority,i.authority))return s.$He(n.path,i.path,this.a(n),"/")&&n.query===i.query&&(r||n.fragment===i.fragment)}return!1}joinPath(n,...i){return R.URI.joinPath(n,...i)}basenameOrAuthority(n){return(0,e.$6f)(n)||n.authority}basename(n){return d.$5c.basename(n.path)}extname(n){return d.$5c.extname(n.path)}dirname(n){if(n.path.length===0)return n;let i;return n.scheme===g.Schemas.file?i=R.URI.file(d.$$c(y(n))).path:(i=d.$5c.dirname(n.path),n.authority&&i.length&&i.charCodeAt(0)!==47&&(console.error(`dirname("${n.toString})) resulted in a relative path`),i="/")),n.with({path:i})}normalizePath(n){if(!n.path.length)return n;let i;return n.scheme===g.Schemas.file?i=R.URI.file(d.$6c(y(n))).path:i=d.$5c.normalize(n.path),n.with({path:i})}relativePath(n,i){if(n.scheme!==i.scheme||!(0,e.$bg)(n.authority,i.authority))return;if(n.scheme===g.Schemas.file){const h=d.$0c(y(n),y(i));return m.$i?s.$Be(h):h}let r=n.path||"/";const o=i.path||"/";if(this.a(n)){let h=0;for(const b=Math.min(r.length,o.length);h<b&&!(r.charCodeAt(h)!==o.charCodeAt(h)&&r.charAt(h).toLowerCase()!==o.charAt(h).toLowerCase());h++);r=o.substr(0,h)+r.substr(h)}return d.$5c.relative(r,o)}resolvePath(n,i){if(n.scheme===g.Schemas.file){const r=R.URI.file(d.$9c(y(n),i));return n.with({authority:r.authority,path:r.path})}return i=s.$Ce(i),n.with({path:d.$5c.resolve(n.path,i)})}isAbsolutePath(n){return!!n.path&&n.path[0]==="/"}isEqualAuthority(n,i){return n===i||n!==void 0&&i!==void 0&&(0,w.$Ld)(n,i)}hasTrailingPathSeparator(n,i=d.sep){if(n.scheme===g.Schemas.file){const r=y(n);return r.length>s.$De(r).length&&r[r.length-1]===i}else{const r=n.path;return r.length>1&&r.charCodeAt(r.length-1)===47&&!/^[a-zA-Z]:(\/$|\\$)/.test(n.fsPath)}}removeTrailingPathSeparator(n,i=d.sep){return(0,e.$cg)(n,i)?n.with({path:n.path.substr(0,n.path.length-1)}):n}addTrailingPathSeparator(n,i=d.sep){let r=!1;if(n.scheme===g.Schemas.file){const o=y(n);r=o!==void 0&&o.length===s.$De(o).length&&o[o.length-1]===i}else{i="/";const o=n.path;r=o.length===1&&o.charCodeAt(o.length-1)===47}return!r&&!(0,e.$cg)(n,i)?n.with({path:n.path+"/"}):n}}e.$Xf=c,e.$Yf=new c(()=>!1),e.$Zf=new c(u=>u.scheme===g.Schemas.file?!m.$k:!0),e.$1f=new c(u=>!0),e.$2f=e.$Yf.isEqual.bind(e.$Yf),e.$3f=e.$Yf.isEqualOrParent.bind(e.$Yf),e.$4f=e.$Yf.getComparisonKey.bind(e.$Yf),e.$5f=e.$Yf.basenameOrAuthority.bind(e.$Yf),e.$6f=e.$Yf.basename.bind(e.$Yf),e.$7f=e.$Yf.extname.bind(e.$Yf),e.$8f=e.$Yf.dirname.bind(e.$Yf),e.$9f=e.$Yf.joinPath.bind(e.$Yf),e.$0f=e.$Yf.normalizePath.bind(e.$Yf),e.$$f=e.$Yf.relativePath.bind(e.$Yf),e.$_f=e.$Yf.resolvePath.bind(e.$Yf),e.$ag=e.$Yf.isAbsolutePath.bind(e.$Yf),e.$bg=e.$Yf.isEqualAuthority.bind(e.$Yf),e.$cg=e.$Yf.hasTrailingPathSeparator.bind(e.$Yf),e.$dg=e.$Yf.removeTrailingPathSeparator.bind(e.$Yf),e.$eg=e.$Yf.addTrailingPathSeparator.bind(e.$Yf);function l(u,n){const i=[];for(let r=0;r<u.length;r++){const o=n(u[r]);u.some((h,b)=>b===r?!1:(0,e.$3f)(o,n(h)))||i.push(u[r])}return i}e.$fg=l;var v;(function(u){u.META_DATA_LABEL="label",u.META_DATA_DESCRIPTION="description",u.META_DATA_SIZE="size",u.META_DATA_MIME="mime";function n(i){const r=new Map;i.path.substring(i.path.indexOf(";")+1,i.path.lastIndexOf(";")).split(";").forEach(b=>{const[I,E]=b.split(":");I&&E&&r.set(I,E)});const h=i.path.substring(0,i.path.indexOf(";"));return h&&r.set(u.META_DATA_MIME,h),r}u.parseMetaData=n})(v||(e.DataUri=v={}));function $(u,n,i){if(n){let r=u.path;return r&&r[0]!==d.$5c.sep&&(r=d.$5c.sep+r),u.with({scheme:i,authority:n,path:r})}return u.with({scheme:i})}e.$gg=$}),define(M[11],U([0,1,6,3,8,4,12,2,5]),function(T,e,s,g,d,m,w,R,y){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.OutputLinkComputer=void 0;class c{constructor($,u){this.b=$,this.a=new Map,this.c(u)}c($){const u=$.workspaceFolders.sort((n,i)=>i.length-n.length).map(n=>s.URI.parse(n));for(const n of u){const i=c.createPatterns(n);this.a.set(n,i)}}d($){return this.b.getMirrorModels().find(n=>n.uri.toString()===$)}computeLinks($){const u=this.d($);if(!u)return[];const n=[],i=m.$zd(u.getValue());for(const[r,o]of this.a){const h={toResource:b=>typeof b=="string"?d.$9f(r,b):null};for(let b=0,I=i.length;b<I;b++)n.push(...c.detectLinks(i[b],b+1,o,h))}return n}static createPatterns($){const u=[],n=$.scheme===y.Schemas.file?$.fsPath:$.path,i=[n];R.$i&&$.scheme===y.Schemas.file&&i.push(g.$Be(n));for(const r of i){const o='[^\\s\\(\\):<>"]',b=`${`(?:${o}| ${o})`}+\\.${o}+`,I=`${o}+`;u.push(new RegExp(m.$pd(r)+`(${b}) on line ((\\d+)(, column (\\d+))?)`,"gi")),u.push(new RegExp(m.$pd(r)+`(${b}):line ((\\d+)(, column (\\d+))?)`,"gi")),u.push(new RegExp(m.$pd(r)+`(${b})(\\s?\\((\\d+)(,(\\d+))?)\\)`,"gi")),u.push(new RegExp(m.$pd(r)+`(${I})(:(\\d+))?(:(\\d+))?`,"gi"))}return u}static detectLinks($,u,n,i){const r=[];return n.forEach(o=>{o.lastIndex=0;let h,b=0;for(;(h=o.exec($))!==null;){const I=m.$ud(h[1],".").replace(/\\/g,"/");let E;try{const O=i.toResource(I);O&&(E=O.toString())}catch{continue}if(h[3]){const O=h[3];if(h[5]){const q=h[5];E=m.$md("{0}#{1},{2}",E,O,q)}else E=m.$md("{0}#{1}",E,O)}const k=m.$ud(h[0],"."),L=$.indexOf(k,b);b=L+k.length;const N={startColumn:L+1,startLineNumber:u,endColumn:L+1+k.length,endLineNumber:u};if(r.some(O=>w.$Ur.areIntersectingOrTouching(O.range,N)))return;r.push({range:N,url:E})}}),r}}e.OutputLinkComputer=c;function l(v,$){return new c(v,$)}e.create=l})}).call(this);

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8b617bd08fd9e3fc94d14adb8d358b56e3f72314/core/vs/workbench/contrib/output/common/outputLinkComputer.js.map