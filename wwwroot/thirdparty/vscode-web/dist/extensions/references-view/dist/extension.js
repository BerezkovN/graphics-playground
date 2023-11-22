(()=>{"use strict";var e={897:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$n=void 0;const s=i(496),n=i(653),r=i(135);function o(e){e instanceof r.$m&&e.remove()}t.$n=function(e,t){const i=new a(t.workspaceState,0);function n(t,n){let o;i.value=t;const a=e.getInput();n instanceof r.$m?o=new r.$l(new s.Location(n.item.uri,n.item.selectionRange.start),i.value):a instanceof r.$l&&(o=new r.$l(a.location,i.value)),o&&e.setInput(o)}t.subscriptions.push(s.commands.registerCommand("references-view.showCallHierarchy",(function(){if(s.window.activeTextEditor){const t=new r.$l(new s.Location(s.window.activeTextEditor.document.uri,s.window.activeTextEditor.selection.active),i.value);e.setInput(t)}})),s.commands.registerCommand("references-view.showOutgoingCalls",(e=>n(1,e))),s.commands.registerCommand("references-view.showIncomingCalls",(e=>n(0,e))),s.commands.registerCommand("references-view.removeCallItem",o))};class a{constructor(e,t=1){this.c=e,this.d=t,this.b=new n.$g("references-view.callHierarchyMode");const i=e.get(a.a);this.value="number"==typeof i&&i>=0&&i<=1?i:t}get value(){return this.d}set value(e){this.d=e,this.b.set(0===this.d?"showIncoming":"showOutgoing"),this.c.update(a.a,e)}}a.a="references-view.callHierarchyMode"},135:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$m=t.$l=void 0;const s=i(496),n=i(653);class r{constructor(e,t){this.location=e,this.direction=t,this.contextValue="callHierarchy",this.title=0===t?s.l10n.t("Callers Of"):s.l10n.t("Calls From")}async resolve(){const e=await Promise.resolve(s.commands.executeCommand("vscode.prepareCallHierarchy",this.location.uri,this.location.range.start)),t=new a(this.direction,e??[]),i=new c(t);if(0!==t.roots.length)return{provider:i,get message(){return 0===t.roots.length?s.l10n.t("No results."):void 0},navigation:t,highlights:t,dnd:t,dispose(){i.dispose()}}}with(e){return new r(e,this.direction)}}t.$l=r;class o{constructor(e,t,i,s){this.model=e,this.item=t,this.parent=i,this.locations=s}remove(){this.model.remove(this)}}t.$m=o;class a{constructor(e,t){this.direction=e,this.roots=[],this.a=new s.EventEmitter,this.onDidChange=this.a.event,this.roots=t.map((e=>new o(this,e,void 0,void 0)))}async b(e){if(0===this.direction){const t=await s.commands.executeCommand("vscode.provideIncomingCalls",e.item);return t?t.map((t=>new o(this,t.from,e,t.fromRanges.map((e=>new s.Location(t.from.uri,e)))))):[]}{const t=await s.commands.executeCommand("vscode.provideOutgoingCalls",e.item);return t?t.map((t=>new o(this,t.to,e,t.fromRanges.map((t=>new s.Location(e.item.uri,t)))))):[]}}async getCallChildren(e){return e.children||(e.children=await this.b(e)),e.children}location(e){return new s.Location(e.item.uri,e.item.range)}nearest(e,t){return this.roots.find((t=>t.item.uri.toString()===e.toString()))??this.roots[0]}next(e){return this.c(e,!0)??e}previous(e){return this.c(e,!1)??e}c(e,t){if(e.children?.length)return t?e.children[0]:(0,n.$c)(e.children);const i=this.roots.includes(e)?this.roots:e.parent?.children;if(i?.length){const s=i.indexOf(e);return i[s+(t?1:-1)+i.length%i.length]}}getDragUri(e){return(0,n.$d)(e.item.uri,e.item.range)}getEditorHighlights(e,t){return e.locations?e.locations.filter((e=>e.uri.toString()===t.toString())).map((e=>e.range)):e.item.uri.toString()===t.toString()?[e.item.selectionRange]:void 0}remove(e){const t=this.roots.includes(e)?this.roots:e.parent?.children;t&&((0,n.$b)(t,e),this.a.fire(this))}}class c{constructor(e){this.c=e,this.a=new s.EventEmitter,this.onDidChangeTreeData=this.a.event,this.b=e.onDidChange((e=>this.a.fire(e instanceof o?e:void 0)))}dispose(){this.a.dispose(),this.b.dispose()}getTreeItem(e){const t=new s.TreeItem(e.item.name);let i;if(t.description=e.item.detail,t.tooltip=t.label&&e.item.detail?`${t.label} - ${e.item.detail}`:t.label?`${t.label}`:e.item.detail,t.contextValue="call-item",t.iconPath=(0,n.$i)(e.item.kind),1===e.model.direction)i=[e.item.uri,{selection:e.item.selectionRange.with({end:e.item.selectionRange.start})}];else{let t;if(e.locations)for(const i of e.locations)i.uri.toString()===e.item.uri.toString()&&(t=t?.isBefore(i.range.start)?t:i.range.start);t||(t=e.item.selectionRange.start),i=[e.item.uri,{selection:new s.Range(t,t)}]}return t.command={command:"vscode.open",title:s.l10n.t("Open Call"),arguments:i},t.collapsibleState=s.TreeItemCollapsibleState.Collapsed,t}getChildren(e){return e?this.c.getCallChildren(e):this.c.roots}getParent(e){return e.parent}}},701:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$a=void 0;const s=i(496);t.$a=class{constructor(e,t){this.d=e,this.f=t,this.a=s.window.createTextEditorDecorationType({backgroundColor:new s.ThemeColor("editor.findMatchHighlightBackground"),rangeBehavior:s.DecorationRangeBehavior.ClosedClosed,overviewRulerLane:s.OverviewRulerLane.Center,overviewRulerColor:new s.ThemeColor("editor.findMatchHighlightBackground")}),this.b=[],this.c=new Set,this.b.push(s.workspace.onDidChangeTextDocument((e=>this.c.add(e.document.uri.toString()))),s.window.onDidChangeActiveTextEditor((()=>e.visible&&this.update())),e.onDidChangeVisibility((e=>e.visible?this.g():this.h())),e.onDidChangeSelection((()=>{e.visible&&this.update()}))),this.g()}dispose(){s.Disposable.from(...this.b).dispose();for(const e of s.window.visibleTextEditors)e.setDecorations(this.a,[])}g(){const{activeTextEditor:e}=s.window;if(!e||!e.viewColumn)return;if(this.c.has(e.document.uri.toString()))return;const[t]=this.d.selection;if(!t)return;const i=this.f.getEditorHighlights(t,e.document.uri);i&&e.setDecorations(this.a,i)}h(){for(const e of s.window.visibleTextEditors)e.setDecorations(this.a,[])}update(){this.h(),this.g()}}},124:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$j=void 0;const s=i(496),n=i(653);t.$j=class{constructor(e){this.d=e,this.a=[],this.b=new n.$g("references-view.canNavigate"),this.a.push(s.commands.registerCommand("references-view.next",(()=>this.next(!1))),s.commands.registerCommand("references-view.prev",(()=>this.previous(!1))))}dispose(){s.Disposable.from(...this.a).dispose()}update(e){this.c=e,this.b.set(Boolean(this.c))}e(){if(!this.c)return;const[e]=this.d.selection;return e||(s.window.activeTextEditor?this.c.nearest(s.window.activeTextEditor.document.uri,s.window.activeTextEditor.selection.active):void 0)}f(e,t){s.commands.executeCommand("vscode.open",e.uri,{selection:new s.Selection(e.range.start,e.range.start),preserveFocus:t})}previous(e){if(!this.c)return;const t=this.e();if(!t)return;const i=this.c.previous(t),s=this.c.location(i);s&&(this.d.reveal(i,{select:!0,focus:!0}),this.f(s,e))}next(e){if(!this.c)return;const t=this.e();if(!t)return;const i=this.c.next(t),s=this.c.location(i);s&&(this.d.reveal(i,{select:!0,focus:!0}),this.f(s,e))}}},538:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$s=void 0;const s=i(496),n=i(521);t.$s=function(e,t){function i(t,i){if(s.window.activeTextEditor){const r=new n.$o(t,new s.Location(s.window.activeTextEditor.document.uri,s.window.activeTextEditor.selection.active),i);e.setInput(r)}}let h;t.subscriptions.push(s.commands.registerCommand("references-view.findReferences",(()=>i("References","vscode.executeReferenceProvider"))),s.commands.registerCommand("references-view.findImplementations",(()=>i("Implementations","vscode.executeImplementationProvider"))),s.commands.registerCommand("references-view.find",((...e)=>s.commands.executeCommand("references-view.findReferences",...e))),s.commands.registerCommand("references-view.removeReferenceItem",o),s.commands.registerCommand("references-view.copy",a),s.commands.registerCommand("references-view.copyAll",r),s.commands.registerCommand("references-view.copyPath",c));const l="references.preferredLocation";function d(t){if(t&&!t.affectsConfiguration(l))return;const i=s.workspace.getConfiguration().get(l);h?.dispose(),h=void 0,"view"===i&&(h=s.commands.registerCommand("editor.action.showReferences",(async(t,i,r)=>{const o=new n.$o(s.l10n.t("References"),new s.Location(t,i),"vscode.executeReferenceProvider",r);e.setInput(o)})))}t.subscriptions.push(s.workspace.onDidChangeConfiguration(d)),t.subscriptions.push({dispose:()=>h?.dispose()}),d()};const r=async e=>{e instanceof n.$r?a(e.file.model):e instanceof n.$q&&a(e.model)};function o(e){(e instanceof n.$q||e instanceof n.$r)&&e.remove()}async function a(e){let t;(e instanceof n.$p||e instanceof n.$r||e instanceof n.$q)&&(t=await e.asCopyText()),t&&await s.env.clipboard.writeText(t)}async function c(e){e instanceof n.$q&&("file"===e.uri.scheme?s.env.clipboard.writeText(e.uri.fsPath):s.env.clipboard.writeText(e.uri.toString(!0)))}},521:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$r=t.$q=t.$p=t.$o=void 0;const s=i(496),n=i(653);class r{constructor(e,t,i,s){this.title=e,this.location=t,this.c=i,this.d=s,this.contextValue=i}async resolve(){let e;if(this.d)e=new o(this.d);else{const t=await Promise.resolve(s.commands.executeCommand(this.c,this.location.uri,this.location.range.start));e=new o(t??[])}if(0===e.items.length)return;const t=new a(e);return{provider:t,get message(){return e.message},navigation:e,highlights:e,dnd:e,dispose(){t.dispose()}}}with(e){return new r(this.title,e,this.c)}}t.$o=r;class o{constructor(e){let t;this.c=new s.EventEmitter,this.onDidChangeTreeData=this.c.event,this.items=[];for(const i of e.sort(o.e)){const e=i instanceof s.Location?i:new s.Location(i.targetUri,i.targetRange);t&&0===o.d(t.uri,e.uri)||(t=new c(e.uri.with({fragment:""}),[],this),this.items.push(t)),t.references.push(new h(e,t))}}static d(e,t){const i=e.with({fragment:""}).toString(),s=t.with({fragment:""}).toString();return i<s?-1:i>s?1:0}static e(e,t){const i=e instanceof s.Location?e.uri:e.targetUri,n=t instanceof s.Location?t.uri:t.targetUri;if(i.toString()<n.toString())return-1;if(i.toString()>n.toString())return 1;const r=e instanceof s.Location?e.range:e.targetRange,o=t instanceof s.Location?t.range:t.targetRange;return r.start.isBefore(o.start)?-1:r.start.isAfter(o.start)?1:0}get message(){if(0===this.items.length)return s.l10n.t("No results.");const e=this.items.reduce(((e,t)=>e+t.references.length),0),t=this.items.length;return 1===e&&1===t?s.l10n.t("{0} result in {1} file",e,t):1===e?s.l10n.t("{0} result in {1} files",e,t):1===t?s.l10n.t("{0} results in {1} file",e,t):s.l10n.t("{0} results in {1} files",e,t)}location(e){return e instanceof h?e.location:new s.Location(e.uri,e.references[0]?.location.range??new s.Position(0,0))}nearest(e,t){if(0===this.items.length)return;for(const i of this.items)if(i.uri.toString()===e.toString()){for(const e of i.references)if(e.location.range.contains(t))return e;let e;for(const s of i.references){if(s.location.range.end.isAfter(t))return s;e=s}if(e)return e;break}let i=0;const s=o.f(this.items[i].toString(),e.toString());for(let t=1;t<this.items.length;t++)o.f(this.items[t].uri.toString(),e.toString())>s&&(i=t);return this.items[i].references[0]}static f(e,t){let i=0;for(;i<e.length&&i<t.length&&e.charCodeAt(i)===t.charCodeAt(i);)i+=1;return i}next(e){return this.g(e,!0)??e}previous(e){return this.g(e,!1)??e}g(e,t){const i=t?1:-1,s=e=>{const t=(this.items.indexOf(e)+i+this.items.length)%this.items.length;return this.items[t]};if(e instanceof c)return t?s(e).references[0]:(0,n.$c)(s(e).references);if(e instanceof h){const t=e.file.references.indexOf(e)+i;return t<0?(0,n.$c)(s(e.file).references):t>=e.file.references.length?s(e.file).references[0]:e.file.references[t]}}getEditorHighlights(e,t){return this.items.find((e=>e.uri.toString()===t.toString()))?.references.map((e=>e.location.range))}remove(e){e instanceof c?((0,n.$b)(this.items,e),this.c.fire(void 0)):((0,n.$b)(e.file.references,e),0===e.file.references.length?((0,n.$b)(this.items,e.file),this.c.fire(void 0)):this.c.fire(e.file))}async asCopyText(){let e="";for(const t of this.items)e+=`${await t.asCopyText()}\n`;return e}getDragUri(e){return e instanceof c?e.uri:(0,n.$d)(e.file.uri,e.location.range)}}t.$p=o;class a{constructor(e){this.e=e,this.d=new s.EventEmitter,this.onDidChangeTreeData=this.d.event,this.c=e.onDidChangeTreeData((()=>this.d.fire(void 0)))}dispose(){this.d.dispose(),this.c.dispose()}async getTreeItem(e){if(e instanceof c){const t=new s.TreeItem(e.uri);return t.contextValue="file-item",t.description=!0,t.iconPath=s.ThemeIcon.File,t.collapsibleState=s.TreeItemCollapsibleState.Collapsed,t}{const{range:t}=e.location,i=await e.getDocument(!0),{before:r,inside:o,after:a}=(0,n.$f)(i,t),c={label:r+o+a,highlights:[[r.length,r.length+o.length]]},h=new s.TreeItem(c);return h.collapsibleState=s.TreeItemCollapsibleState.None,h.contextValue="reference-item",h.command={command:"vscode.open",title:s.l10n.t("Open Reference"),arguments:[e.location.uri,{selection:t.with({end:t.start})}]},h}}async getChildren(e){return e?e instanceof c?e.references:void 0:this.e.items}getParent(e){return e instanceof h?e.file:void 0}}class c{constructor(e,t,i){this.uri=e,this.references=t,this.model=i}remove(){this.model.remove(this)}async asCopyText(){let e=`${s.workspace.asRelativePath(this.uri)}\n`;for(const t of this.references)e+=`  ${await t.asCopyText()}\n`;return e}}t.$q=c;class h{constructor(e,t){this.location=e,this.file=t}async getDocument(e){if(this.c||(this.c=s.workspace.openTextDocument(this.location.uri)),e){const e=this.file.model.next(this.file);e instanceof c&&e!==this.file?s.workspace.openTextDocument(e.uri):e instanceof h&&s.workspace.openTextDocument(e.location.uri)}return this.c}remove(){this.file.model.remove(this)}async asCopyText(){const e=await this.getDocument(),t=(0,n.$f)(e,this.location.range,21,!1);return`${this.location.range.start.line+1}, ${this.location.range.start.character+1}: ${t.before+t.inside+t.after}`}}t.$r=h},937:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$k=void 0;const s=i(496),n=i(701),r=i(124),o=i(653);t.$k=class{constructor(){this.viewId="references-view.tree",this.a=new o.$g("reference-list.isActive"),this.b=new o.$g("reference-list.hasResult"),this.c=new o.$g("reference-list.source"),this.d=new l(this),this.e=new a,this.f=new c,this.g=s.window.createTreeView(this.viewId,{treeDataProvider:this.e,showCollapseAll:!0,dragAndDropController:this.f}),this.h=new r.$j(this.g)}dispose(){this.d.dispose(),this.g.dispose(),this.j?.dispose()}getInput(){return this.i}async setInput(e){if(!await(0,o.$e)(e.location.uri,e.location.range.start))return void this.clearInput();this.c.set(e.contextValue),this.a.set(!0),this.b.set(!0),s.commands.executeCommand(`${this.viewId}.focus`);const t=!this.i||Object.getPrototypeOf(this.i)!==Object.getPrototypeOf(e);this.i=e,this.j?.dispose(),this.g.title=e.title,this.g.message=t?void 0:this.g.message;const i=Promise.resolve(e.resolve());this.e.update(i.then((e=>e?.provider??this.d))),this.f.update(i.then((e=>e?.dnd)));const r=await i;if(this.i!==e)return;if(!r)return void this.clearInput();this.d.add(e),this.g.message=r.message,this.h.update(r.navigation);const a=r.navigation?.nearest(e.location.uri,e.location.range.start);a&&this.g.visible&&await this.g.reveal(a,{select:!0,focus:!0,expand:!0});const c=[];let h;r.highlights&&(h=new n.$a(this.g,r.highlights),c.push(h)),r.provider.onDidChangeTreeData&&c.push(r.provider.onDidChangeTreeData((()=>{this.g.title=e.title,this.g.message=r.message,h?.update()}))),"function"==typeof r.dispose&&c.push(new s.Disposable((()=>r.dispose()))),this.j=s.Disposable.from(...c)}clearInput(){this.j?.dispose(),this.i=void 0,this.b.set(!1),this.c.reset(),this.g.title=s.l10n.t("References"),this.g.message=0===this.d.size?s.l10n.t("No results."):s.l10n.t("No results. Try running a previous search again:"),this.e.update(Promise.resolve(this.d))}};class a{constructor(){this.b=new s.EventEmitter,this.onDidChangeTreeData=this.b.event}update(e){this.a?.dispose(),this.a=void 0,this.b.fire(void 0),this.provider=e,e.then((t=>{this.provider===e&&t.onDidChangeTreeData&&(this.a=t.onDidChangeTreeData(this.b.fire,this.b))})).catch((e=>{this.provider=void 0,console.error(e)}))}async getTreeItem(e){return this.c(),(await this.provider).getTreeItem(e)}async getChildren(e){return this.c(),(await this.provider).getChildren(e)}async getParent(e){this.c();const t=await this.provider;return t.getParent?t.getParent(e):void 0}c(){if(!this.provider)throw new Error("MISSING provider")}}class c{constructor(){this.dropMimeTypes=[],this.dragMimeTypes=["text/uri-list"]}update(e){this.a=void 0,e.then((e=>this.a=e))}handleDrag(e,t){if(this.a){const i=[];for(const t of e){const e=this.a.getDragUri(t);e&&i.push(e.toString())}i.length>0&&t.set("text/uri-list",new s.DataTransferItem(i.join("\r\n")))}}handleDrop(){throw new Error("Method not implemented.")}}class h{constructor(e,t,i,n){this.key=e,this.word=t,this.anchor=i,this.input=n,this.description=`${s.workspace.asRelativePath(n.location.uri)} • ${n.title.toLocaleLowerCase()}`}}class l{constructor(e){this.e=e,this.a=new s.EventEmitter,this.onDidChangeTreeData=this.a.event,this.b=[],this.c=new o.$g("reference-list.hasHistory"),this.d=new Map,this.b.push(s.commands.registerCommand("references-view.clear",(()=>e.clearInput())),s.commands.registerCommand("references-view.clearHistory",(()=>{this.clear(),e.clearInput()})),s.commands.registerCommand("references-view.refind",(e=>{e instanceof h&&this.f(e)})),s.commands.registerCommand("references-view.refresh",(()=>{const e=Array.from(this.d.values()).pop();e&&this.f(e)})),s.commands.registerCommand("_references-view.showHistoryItem",(async e=>{if(e instanceof h){const t=e.anchor.guessedTrackedPosition()??e.input.location.range.start;await s.commands.executeCommand("vscode.open",e.input.location.uri,{selection:new s.Range(t,t)})}})),s.commands.registerCommand("references-view.pickFromHistory",(async()=>{const e=(await this.getChildren()).map((e=>({label:e.word,description:e.description,item:e}))),t=await s.window.showQuickPick(e,{placeHolder:s.l10n.t("Select previous reference search")});t&&this.f(t.item)})))}dispose(){s.Disposable.from(...this.b).dispose(),this.a.dispose()}f(e){this.d.delete(e.key);const t=e.anchor.guessedTrackedPosition();let i=e.input;t&&!e.input.location.range.start.isEqual(t)&&(i=e.input.with(new s.Location(e.input.location.uri,t))),this.e.setInput(i)}async add(e){const t=await s.workspace.openTextDocument(e.location.uri),i=new o.$h(t,e.location.range.start),n=t.getWordRangeAtPosition(e.location.range.start)??t.getWordRangeAtPosition(e.location.range.start,/[^\s]+/),r=n?t.getText(n):"???",a=new h(JSON.stringify([n?.start??e.location.range.start,e.location.uri,e.title]),r,i,e);this.d.delete(a.key),this.d.set(a.key,a),this.c.set(!0)}clear(){this.d.clear(),this.c.set(!1),this.a.fire(void 0)}get size(){return this.d.size}getTreeItem(e){const t=new s.TreeItem(e.word);return t.description=e.description,t.command={command:"_references-view.showHistoryItem",arguments:[e],title:s.l10n.t("Rerun")},t.collapsibleState=s.TreeItemCollapsibleState.None,t.contextValue="history-item",t}getChildren(){return Promise.all([...this.d.values()].reverse())}getParent(){}}},156:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$v=void 0;const s=i(496),n=i(653),r=i(622);function o(e){e instanceof r.$u&&e.remove()}t.$v=function(e,t){const i=new a(t.workspaceState,"subtypes");function n(t,n){let o;i.value=t;const a=e.getInput();n instanceof r.$u?o=new r.$t(new s.Location(n.item.uri,n.item.selectionRange.start),i.value):n instanceof s.Location?o=new r.$t(n,i.value):a instanceof r.$t&&(o=new r.$t(a.location,i.value)),o&&e.setInput(o)}t.subscriptions.push(s.commands.registerCommand("references-view.showTypeHierarchy",(function(){if(s.window.activeTextEditor){const t=new r.$t(new s.Location(s.window.activeTextEditor.document.uri,s.window.activeTextEditor.selection.active),i.value);e.setInput(t)}})),s.commands.registerCommand("references-view.showSupertypes",(e=>n("supertypes",e))),s.commands.registerCommand("references-view.showSubtypes",(e=>n("subtypes",e))),s.commands.registerCommand("references-view.removeTypeItem",o))};class a{constructor(e,t="subtypes"){this.c=e,this.d=t,this.b=new n.$g("references-view.typeHierarchyMode");const i=e.get(a.a);this.value="string"==typeof i?i:t}get value(){return this.d}set value(e){this.d=e,this.b.set(e),this.c.update(a.a,e)}}a.a="references-view.typeHierarchyMode"},622:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$u=t.$t=void 0;const s=i(496),n=i(653);class r{constructor(e,t){this.location=e,this.direction=t,this.contextValue="typeHierarchy",this.title="supertypes"===t?s.l10n.t("Supertypes Of"):s.l10n.t("Subtypes Of")}async resolve(){const e=await Promise.resolve(s.commands.executeCommand("vscode.prepareTypeHierarchy",this.location.uri,this.location.range.start)),t=new a(this.direction,e??[]),i=new c(t);if(0!==t.roots.length)return{provider:i,get message(){return 0===t.roots.length?s.l10n.t("No results."):void 0},navigation:t,highlights:t,dnd:t,dispose(){i.dispose()}}}with(e){return new r(e,this.direction)}}t.$t=r;class o{constructor(e,t,i){this.model=e,this.item=t,this.parent=i}remove(){this.model.remove(this)}}t.$u=o;class a{constructor(e,t){this.direction=e,this.roots=[],this.a=new s.EventEmitter,this.onDidChange=this.a.event,this.roots=t.map((e=>new o(this,e,void 0)))}async b(e){if("supertypes"===this.direction){const t=await s.commands.executeCommand("vscode.provideSupertypes",e.item);return t?t.map((t=>new o(this,t,e))):[]}{const t=await s.commands.executeCommand("vscode.provideSubtypes",e.item);return t?t.map((t=>new o(this,t,e))):[]}}async getTypeChildren(e){return e.children||(e.children=await this.b(e)),e.children}getDragUri(e){return(0,n.$d)(e.item.uri,e.item.range)}location(e){return new s.Location(e.item.uri,e.item.range)}nearest(e,t){return this.roots.find((t=>t.item.uri.toString()===e.toString()))??this.roots[0]}next(e){return this.c(e,!0)??e}previous(e){return this.c(e,!1)??e}c(e,t){if(e.children?.length)return t?e.children[0]:(0,n.$c)(e.children);const i=this.roots.includes(e)?this.roots:e.parent?.children;if(i?.length){const s=i.indexOf(e);return i[s+(t?1:-1)+i.length%i.length]}}getEditorHighlights(e,t){return e.item.uri.toString()===t.toString()?[e.item.selectionRange]:void 0}remove(e){const t=this.roots.includes(e)?this.roots:e.parent?.children;t&&((0,n.$b)(t,e),this.a.fire(this))}}class c{constructor(e){this.c=e,this.a=new s.EventEmitter,this.onDidChangeTreeData=this.a.event,this.b=e.onDidChange((e=>this.a.fire(e instanceof o?e:void 0)))}dispose(){this.a.dispose(),this.b.dispose()}getTreeItem(e){const t=new s.TreeItem(e.item.name);return t.description=e.item.detail,t.contextValue="type-item",t.iconPath=(0,n.$i)(e.item.kind),t.command={command:"vscode.open",title:s.l10n.t("Open Type"),arguments:[e.item.uri,{selection:e.item.selectionRange.with({end:e.item.selectionRange.start})}]},t.collapsibleState=s.TreeItemCollapsibleState.Collapsed,t}getChildren(e){return e?this.c.getTypeChildren(e):this.c.roots}getParent(e){return e.parent}}},653:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$i=t.$h=t.$g=t.$f=t.$e=t.$d=t.$c=t.$b=void 0;const s=i(496);t.$b=function(e,t){const i=e.indexOf(t);i>=0&&e.splice(i,1)},t.$c=function(e){return e[e.length-1]},t.$d=function(e,t){return e.with({fragment:`L${1+t.start.line},${1+t.start.character}-${1+t.end.line},${1+t.end.character}`})},t.$e=async function(e,t){const i=await s.workspace.openTextDocument(e);let n=i.getWordRangeAtPosition(t);return n||(n=i.getWordRangeAtPosition(t,/[^\s]+/)),Boolean(n)},t.$f=function(e,t,i=8,n=!0){const r=t.start.with({character:Math.max(0,t.start.character-i)}),o=e.getWordRangeAtPosition(r);let a=e.getText(new s.Range(o?o.start:r,t.start));const c=e.getText(t),h=t.end.translate(0,331);let l=e.getText(new s.Range(t.end,h));return n&&(a=a.replace(/^\s*/g,""),l=l.replace(/\s*$/g,"")),{before:a,inside:c,after:l}},t.$g=class{constructor(e){this.name=e}async set(e){await s.commands.executeCommand("setContext",this.name,e)}async reset(){await s.commands.executeCommand("setContext",this.name,void 0)}},t.$h=class{constructor(e,t){this.c=e,this.d=t,this.a=e.version,this.b=this.f(e,t)}f(e,t){const i=e.getWordRangeAtPosition(t)||e.getWordRangeAtPosition(t,/[^\s]+/);return i&&e.getText(i)}guessedTrackedPosition(){if(!this.b)return this.d;if(this.a===this.c.version)return this.d;const e=this.f(this.c,this.d);if(this.b===e)return this.d;const t=this.d.line;let i,n,r=0;do{if(n=!1,i=t+r,i<this.c.lineCount){n=!0;const e=this.c.lineAt(i).text.indexOf(this.b);if(e>=0)return new s.Position(i,e)}if(r+=1,i=t-r,i>=0){n=!0;const e=this.c.lineAt(i).text.indexOf(this.b);if(e>=0)return new s.Position(i,e)}}while(r<100&&n);return this.d}};const n=["symbol-file","symbol-module","symbol-namespace","symbol-package","symbol-class","symbol-method","symbol-property","symbol-field","symbol-constructor","symbol-enum","symbol-interface","symbol-function","symbol-variable","symbol-constant","symbol-string","symbol-number","symbol-boolean","symbol-array","symbol-object","symbol-key","symbol-null","symbol-enum-member","symbol-struct","symbol-event","symbol-operator","symbol-type-parameter"];t.$i=function(e){const t=n[e];return t?new s.ThemeIcon(t):void 0}},496:e=>{e.exports=require("vscode")}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,i),r.exports}var s={};(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=i(897),n=i(538),r=i(937),o=i(156);e.activate=function(e){const i=new r.$k;return n.$s(i,e),t.$n(i,e),o.$v(i,e),{setInput:function(e){i.setInput(e)},getInput:function(){return i.getInput()}}}})();var n=exports;for(var r in s)n[r]=s[r];s.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8b617bd08fd9e3fc94d14adb8d358b56e3f72314/extensions/references-view/dist/extension.js.map