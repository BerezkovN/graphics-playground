(()=>{var e={516:(e,t,n)=>{"use strict";function r(e,t){void 0===t&&(t=!1);var n=e.length,r=0,a="",c=0,l=16,u=0,f=0,h=0,d=0,g=0;function p(t,n){for(var o=0,i=0;o<t||!n;){var s=e.charCodeAt(r);if(s>=48&&s<=57)i=16*i+s-48;else if(s>=65&&s<=70)i=16*i+s-65+10;else{if(!(s>=97&&s<=102))break;i=16*i+s-97+10}r++,o++}return o<t&&(i=-1),i}function m(){if(a="",g=0,c=r,f=u,d=h,r>=n)return c=n,l=17;var t=e.charCodeAt(r);if(o(t)){do{r++,a+=String.fromCharCode(t),t=e.charCodeAt(r)}while(o(t));return l=15}if(i(t))return r++,a+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,a+="\n"),u++,h=r,l=14;switch(t){case 123:return r++,l=1;case 125:return r++,l=2;case 91:return r++,l=3;case 93:return r++,l=4;case 58:return r++,l=6;case 44:return r++,l=5;case 34:return r++,a=function(){for(var t="",o=r;;){if(r>=n){t+=e.substring(o,r),g=2;break}var s=e.charCodeAt(r);if(34===s){t+=e.substring(o,r),r++;break}if(92!==s){if(s>=0&&s<=31){if(i(s)){t+=e.substring(o,r),g=2;break}g=6}r++}else{if(t+=e.substring(o,r),++r>=n){g=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var a=p(4,!0);a>=0?t+=String.fromCharCode(a):g=4;break;default:g=5}o=r}}return t}(),l=10;case 47:var m=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!i(e.charCodeAt(r));)r++;return a=e.substring(m,r),l=12}if(42===e.charCodeAt(r+1)){r+=2;for(var y=n-1,b=!1;r<y;){var k=e.charCodeAt(r);if(42===k&&47===e.charCodeAt(r+1)){r+=2,b=!0;break}r++,i(k)&&(13===k&&10===e.charCodeAt(r)&&r++,u++,h=r)}return b||(r++,g=1),a=e.substring(m,r),l=13}return a+=String.fromCharCode(t),r++,l=16;case 45:if(a+=String.fromCharCode(t),++r===n||!s(e.charCodeAt(r)))return l=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return a+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&s(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&s(e.charCodeAt(r))))return g=3,e.substring(t,r);for(r++;r<e.length&&s(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&s(e.charCodeAt(r))){for(r++;r<e.length&&s(e.charCodeAt(r));)r++;n=r}else g=3;return e.substring(t,n)}(),l=11;default:for(;r<n&&v(t);)r++,t=e.charCodeAt(r);if(c!==r){switch(a=e.substring(c,r)){case"true":return l=8;case"false":return l=9;case"null":return l=7}return l=16}return a+=String.fromCharCode(t),r++,l=16}}function v(e){if(o(e)||i(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,a="",c=0,l=16,g=0},getPosition:function(){return r},scan:t?function(){var e;do{e=m()}while(e>=12&&e<=15);return e}:m,getToken:function(){return l},getTokenValue:function(){return a},getTokenOffset:function(){return c},getTokenLength:function(){return r-c},getTokenStartLine:function(){return f},getTokenStartCharacter:function(){return c-d},getTokenError:function(){return g}}}function o(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function i(e){return 10===e||13===e||8232===e||8233===e}function s(e){return e>=48&&e<=57}function a(e,t,n){var o,i,s,a,u;if(t){for(a=t.offset,u=a+t.length,s=a;s>0&&!l(e,s-1);)s--;for(var f=u;f<e.length&&!l(e,f);)f++;i=e.substring(s,f),o=function(e,t){for(var n=0,r=0,o=t.tabSize||4;n<e.length;){var i=e.charAt(n);if(" "===i)r++;else{if("\t"!==i)break;r+=o}n++}return Math.floor(r/o)}(i,n)}else i=e,o=0,s=0,a=0,u=e.length;var h,d=function(e,t){for(var n=0;n<t.length;n++){var r=t.charAt(n);if("\r"===r)return n+1<t.length&&"\n"===t.charAt(n+1)?"\r\n":"\r";if("\n"===r)return"\n"}return e&&e.eol||"\n"}(n,e),g=!1,p=0;h=n.insertSpaces?c(" ",n.tabSize||4):"\t";var m=r(i,!1),v=!1;function y(){return d+c(h,o+p)}function b(){var e=m.scan();for(g=!1;15===e||14===e;)g=g||14===e,e=m.scan();return v=16===e||0!==m.getTokenError(),e}var k=[];function w(t,n,r){!v&&n<u&&r>a&&e.substring(n,r)!==t&&k.push({offset:n,length:r-n,content:t})}var C=b();if(17!==C){var T=m.getTokenOffset()+s;w(c(h,o),s,T)}for(;17!==C;){for(var A=m.getTokenOffset()+m.getTokenLength()+s,x=b(),S="";!g&&(12===x||13===x);)w(" ",A,m.getTokenOffset()+s),A=m.getTokenOffset()+m.getTokenLength()+s,S=12===x?y():"",x=b();if(2===x)1!==C&&(p--,S=y());else if(4===x)3!==C&&(p--,S=y());else{switch(C){case 3:case 1:p++,S=y();break;case 5:case 12:S=y();break;case 13:S=g?y():" ";break;case 6:S=" ";break;case 10:if(6===x){S="";break}case 7:case 8:case 9:case 11:case 2:case 4:12===x||13===x?S=" ":5!==x&&17!==x&&(v=!0);break;case 16:v=!0}!g||12!==x&&13!==x||(S=y())}w(S,A,m.getTokenOffset()+s),C=x}return k}function c(e,t){for(var n="",r=0;r<t;r++)n+=e;return n}function l(e,t){return-1!=="\r\n".indexOf(e.charAt(t))}var u;function f(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=u.DEFAULT);var r={type:"array",offset:-1,length:-1,children:[],parent:void 0};function o(e){"property"===r.type&&(r.length=e-r.offset,r=r.parent)}function i(e){return r.children.push(e),e}d(e,{onObjectBegin:function(e){r=i({type:"object",offset:e,length:-1,parent:r,children:[]})},onObjectProperty:function(e,t,n){(r=i({type:"property",offset:t,length:-1,parent:r,children:[]})).children.push({type:"string",value:e,offset:t,length:n,parent:r})},onObjectEnd:function(e,t){o(e+t),r.length=e+t-r.offset,r=r.parent,o(e+t)},onArrayBegin:function(e,t){r=i({type:"array",offset:e,length:-1,parent:r,children:[]})},onArrayEnd:function(e,t){r.length=e+t-r.offset,r=r.parent,o(e+t)},onLiteralValue:function(e,t,n){i({type:g(e),offset:t,length:n,parent:r,value:e}),o(t+n)},onSeparator:function(e,t,n){"property"===r.type&&(":"===e?r.colonOffset=t:","===e&&o(t))},onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n);var s=r.children[0];return s&&delete s.parent,s}function h(e,t){if(e){for(var n=e,r=0,o=t;r<o.length;r++){var i=o[r];if("string"==typeof i){if("object"!==n.type||!Array.isArray(n.children))return;for(var s=!1,a=0,c=n.children;a<c.length;a++){var l=c[a];if(Array.isArray(l.children)&&l.children[0].value===i){n=l.children[1],s=!0;break}}if(!s)return}else{var u=i;if("array"!==n.type||u<0||!Array.isArray(n.children)||u>=n.children.length)return;n=n.children[u]}}return n}}function d(e,t,n){void 0===n&&(n=u.DEFAULT);var o=r(e,!1);function i(e){return e?function(){return e(o.getTokenOffset(),o.getTokenLength(),o.getTokenStartLine(),o.getTokenStartCharacter())}:function(){return!0}}function s(e){return e?function(t){return e(t,o.getTokenOffset(),o.getTokenLength(),o.getTokenStartLine(),o.getTokenStartCharacter())}:function(){return!0}}var a=i(t.onObjectBegin),c=s(t.onObjectProperty),l=i(t.onObjectEnd),f=i(t.onArrayBegin),h=i(t.onArrayEnd),d=s(t.onLiteralValue),g=s(t.onSeparator),p=i(t.onComment),m=s(t.onError),v=n&&n.disallowComments,y=n&&n.allowTrailingComma;function b(){for(;;){var e=o.scan();switch(o.getTokenError()){case 4:k(14);break;case 5:k(15);break;case 3:k(13);break;case 1:v||k(11);break;case 2:k(12);break;case 6:k(16)}switch(e){case 12:case 13:v?k(10):p();break;case 16:k(1);break;case 15:case 14:break;default:return e}}}function k(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=[]),m(e),t.length+n.length>0)for(var r=o.getToken();17!==r;){if(-1!==t.indexOf(r)){b();break}if(-1!==n.indexOf(r))break;r=b()}}function w(e){var t=o.getTokenValue();return e?d(t):c(t),b(),!0}return b(),17===o.getToken()?!!n.allowEmptyContent||(k(4,[],[]),!1):function e(){switch(o.getToken()){case 3:return function(){f(),b();for(var t=!1;4!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(t||k(4,[],[]),g(","),b(),4===o.getToken()&&y)break}else t&&k(6,[],[]);e()||k(4,[],[4,5]),t=!0}return h(),4!==o.getToken()?k(8,[4],[]):b(),!0}();case 1:return function(){a(),b();for(var t=!1;2!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(t||k(4,[],[]),g(","),b(),2===o.getToken()&&y)break}else t&&k(6,[],[]);(10!==o.getToken()?(k(3,[],[2,5]),0):(w(!1),6===o.getToken()?(g(":"),b(),e()||k(4,[],[2,5])):k(5,[],[2,5]),1))||k(4,[],[2,5]),t=!0}return l(),2!==o.getToken()?k(7,[2],[]):b(),!0}();case 10:return w(!0);default:return function(){switch(o.getToken()){case 11:var e=0;try{"number"!=typeof(e=JSON.parse(o.getTokenValue()))&&(k(2),e=0)}catch(e){k(2)}d(e);break;case 7:d(null);break;case 8:d(!0);break;case 9:d(!1);break;default:return!1}return b(),!0}()}}()?(17!==o.getToken()&&k(9,[],[]),!0):(k(4,[],[]),!1)}function g(e){switch(typeof e){case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"object":return e?Array.isArray(e)?"array":"object":"null";default:return"null"}}function p(e,t,n){var r=m(e,t),o=t.offset,i=t.offset+t.content.length;if(0===t.length||0===t.content.length){for(;o>0&&!l(r,o-1);)o--;for(;i<r.length&&!l(r,i);)i++}for(var s=a(r,{offset:o,length:i-o},n),c=s.length-1;c>=0;c--){var u=s[c];r=m(r,u),o=Math.min(o,u.offset),i=Math.max(i,u.offset+u.length),i+=u.content.length-u.length}return[{offset:o,length:e.length-(r.length-i)-o,content:r.substring(o,i)}]}function m(e,t){return e.substring(0,t.offset)+t.content+e.substring(t.offset+t.length)}n.r(t),n.d(t,{applyEdits:()=>I,createScanner:()=>v,findNodeAtLocation:()=>w,findNodeAtOffset:()=>C,format:()=>O,getLocation:()=>y,getNodePath:()=>T,getNodeValue:()=>A,modify:()=>P,parse:()=>b,parseTree:()=>k,printParseErrorCode:()=>j,stripComments:()=>S,visit:()=>x}),function(e){e.DEFAULT={allowTrailingComma:!1}}(u||(u={}));var v=r,y=function(e,t){var n=[],r=new Object,o=void 0,i={value:{},offset:0,length:0,type:"object",parent:void 0},s=!1;function a(e,t,n,r){i.value=e,i.offset=t,i.length=n,i.type=r,i.colonOffset=void 0,o=i}try{d(e,{onObjectBegin:function(e,i){if(t<=e)throw r;o=void 0,s=t>e,n.push("")},onObjectProperty:function(e,o,i){if(t<o)throw r;if(a(e,o,i,"property"),n[n.length-1]=e,t<=o+i)throw r},onObjectEnd:function(e,i){if(t<=e)throw r;o=void 0,n.pop()},onArrayBegin:function(e,i){if(t<=e)throw r;o=void 0,n.push(0)},onArrayEnd:function(e,i){if(t<=e)throw r;o=void 0,n.pop()},onLiteralValue:function(e,n,o){if(t<n)throw r;if(a(e,n,o,g(e)),t<=n+o)throw r},onSeparator:function(e,i,a){if(t<=i)throw r;if(":"===e&&o&&"property"===o.type)o.colonOffset=i,s=!1,o=void 0;else if(","===e){var c=n[n.length-1];"number"==typeof c?n[n.length-1]=c+1:(s=!0,n[n.length-1]=""),o=void 0}}})}catch(e){if(e!==r)throw e}return{path:n,previousNode:o,isAtPropertyKey:s,matches:function(e){for(var t=0,r=0;t<e.length&&r<n.length;r++)if(e[t]===n[r]||"*"===e[t])t++;else if("**"!==e[t])return!1;return t===e.length}}},b=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=u.DEFAULT);var r=null,o=[],i=[];function s(e){Array.isArray(o)?o.push(e):null!==r&&(o[r]=e)}return d(e,{onObjectBegin:function(){var e={};s(e),i.push(o),o=e,r=null},onObjectProperty:function(e){r=e},onObjectEnd:function(){o=i.pop()},onArrayBegin:function(){var e=[];s(e),i.push(o),o=e,r=null},onArrayEnd:function(){o=i.pop()},onLiteralValue:s,onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n),o[0]},k=f,w=h,C=function e(t,n,r){if(void 0===r&&(r=!1),function(e,t,n){return void 0===n&&(n=!1),t>=e.offset&&t<e.offset+e.length||n&&t===e.offset+e.length}(t,n,r)){var o=t.children;if(Array.isArray(o))for(var i=0;i<o.length&&o[i].offset<=n;i++){var s=e(o[i],n,r);if(s)return s}return t}},T=function e(t){if(!t.parent||!t.parent.children)return[];var n=e(t.parent);if("property"===t.parent.type){var r=t.parent.children[0].value;n.push(r)}else if("array"===t.parent.type){var o=t.parent.children.indexOf(t);-1!==o&&n.push(o)}return n},A=function e(t){switch(t.type){case"array":return t.children.map(e);case"object":for(var n=Object.create(null),r=0,o=t.children;r<o.length;r++){var i=o[r],s=i.children[1];s&&(n[i.children[0].value]=e(s))}return n;case"null":case"string":case"number":case"boolean":return t.value;default:return}},x=d,S=function(e,t){var n,o,i=r(e),s=[],a=0;do{switch(o=i.getPosition(),n=i.scan()){case 12:case 13:case 17:a!==o&&s.push(e.substring(a,o)),void 0!==t&&s.push(i.getTokenValue().replace(/[^\r\n]/g,t)),a=i.getPosition()}}while(17!==n);return s.join("")};function j(e){switch(e){case 1:return"InvalidSymbol";case 2:return"InvalidNumberFormat";case 3:return"PropertyNameExpected";case 4:return"ValueExpected";case 5:return"ColonExpected";case 6:return"CommaExpected";case 7:return"CloseBraceExpected";case 8:return"CloseBracketExpected";case 9:return"EndOfFileExpected";case 10:return"InvalidCommentToken";case 11:return"UnexpectedEndOfComment";case 12:return"UnexpectedEndOfString";case 13:return"UnexpectedEndOfNumber";case 14:return"InvalidUnicode";case 15:return"InvalidEscapeCharacter";case 16:return"InvalidCharacter"}return"<unknown ParseErrorCode>"}function O(e,t,n){return a(e,t,n)}function P(e,t,n,r){return function(e,t,n,r,o){for(var i,s=t.slice(),a=f(e,[]),c=void 0,l=void 0;s.length>0&&(l=s.pop(),void 0===(c=h(a,s))&&void 0!==n);)"string"==typeof l?((i={})[l]=n,n=i):n=[n];if(c){if("object"===c.type&&"string"==typeof l&&Array.isArray(c.children)){var u=h(c,[l]);if(void 0!==u){if(void 0===n){if(!u.parent)throw new Error("Malformed AST");var d=c.children.indexOf(u.parent),g=void 0,m=u.parent.offset+u.parent.length;return d>0?g=(C=c.children[d-1]).offset+C.length:(g=c.offset+1,c.children.length>1&&(m=c.children[1].offset)),p(e,{offset:g,length:m-g,content:""},r)}return p(e,{offset:u.offset,length:u.length,content:JSON.stringify(n)},r)}if(void 0===n)return[];var v=JSON.stringify(l)+": "+JSON.stringify(n),y=o?o(c.children.map((function(e){return e.children[0].value}))):c.children.length,b=void 0;return p(e,b=y>0?{offset:(C=c.children[y-1]).offset+C.length,length:0,content:","+v}:0===c.children.length?{offset:c.offset+1,length:0,content:v}:{offset:c.offset+1,length:0,content:v+","},r)}if("array"===c.type&&"number"==typeof l&&Array.isArray(c.children)){if(-1===l)return v=""+JSON.stringify(n),b=void 0,p(e,b=0===c.children.length?{offset:c.offset+1,length:0,content:v}:{offset:(C=c.children[c.children.length-1]).offset+C.length,length:0,content:","+v},r);if(void 0===n&&c.children.length>=0){var k=l,w=c.children[k];if(b=void 0,1===c.children.length)b={offset:c.offset+1,length:c.length-2,content:""};else if(c.children.length-1===k){var C,T=(C=c.children[k-1]).offset+C.length;b={offset:T,length:c.offset+c.length-2-T,content:""}}else b={offset:w.offset,length:c.children[k+1].offset-w.offset,content:""};return p(e,b,r)}throw new Error("Array modification not supported yet")}throw new Error("Can not add "+("number"!=typeof l?"index":"property")+" to parent of type "+c.type)}if(void 0===n)throw new Error("Can not delete in empty document");return p(e,{offset:a?a.offset:0,length:a?a.length:0,content:JSON.stringify(n)},r)}(e,t,n,r.formattingOptions,r.getInsertionIndex)}function I(e,t){for(var n=t.length-1;n>=0;n--)e=m(e,t[n]);return e}},510:(e,t)=>{(()=>{"use strict";var e={};(()=>{var t=e;Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorStatusDescription=t.xhr=t.configure=void 0,t.configure=(e,t)=>{},t.xhr=async e=>{const t=new Headers;if(e.headers)for(const n in e.headers){const r=e.headers[n];Array.isArray(r)?r.forEach((e=>t.set(n,e))):t.set(n,r)}e.user&&e.password&&t.set("Authorization","Basic "+btoa(e.user+":"+e.password));const n={method:e.type,redirect:e.followRedirects>0?"follow":"manual",mode:"cors",headers:t};if(e.data&&(n.body=e.data),e.token){const t=new AbortController;e.token.isCancellationRequested&&t.abort(),e.token.onCancellationRequested((()=>{t.abort()})),n.signal=t.signal}const r=new Request(e.url,n),o=await fetch(r),i={};o.headers.forEach(((e,t)=>{i[t]=e}));const s=await o.arrayBuffer();return new class{constructor(){this.status=o.status,this.headers=i}get responseText(){return(new TextDecoder).decode(s)}get body(){return new Uint8Array(s)}}},t.getErrorStatusDescription=function(e){return String(e)}})();var n=t;for(var r in e)n[r]=e[r];e.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})()},23:e=>{"use strict";function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",o=0,i=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)n=e.charCodeAt(a);else{if(47===n)break;n=47}if(47===n){if(i===a-1||1===s);else if(i!==a-1&&2===s){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){-1===c?(r="",o=0):o=(r=r.slice(0,c)).length-1-r.lastIndexOf("/"),i=a,s=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=a,s=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,a):r=e.slice(i+1,a),o=a-i-1;i=a,s=0}else 46===n&&-1!==s?++s:s=-1}return r}var r={resolve:function(){for(var e,r="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var s;i>=0?s=arguments[i]:(void 0===e&&(e=process.cwd()),s=e),t(s),0!==s.length&&(r=s+"/"+r,o=47===s.charCodeAt(0))}return r=n(r,!o),o?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var o=arguments[n];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=r.resolve(e))===(n=r.resolve(n)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var i=e.length,s=i-o,a=1;a<n.length&&47===n.charCodeAt(a);++a);for(var c=n.length-a,l=s<c?s:c,u=-1,f=0;f<=l;++f){if(f===l){if(c>l){if(47===n.charCodeAt(a+f))return n.slice(a+f+1);if(0===f)return n.slice(a+f)}else s>l&&(47===e.charCodeAt(o+f)?u=f:0===f&&(u=0));break}var h=e.charCodeAt(o+f);if(h!==n.charCodeAt(a+f))break;47===h&&(u=f)}var d="";for(f=o+u+1;f<=i;++f)f!==i&&47!==e.charCodeAt(f)||(0===d.length?d+="..":d+="/..");return d.length>0?d+n.slice(a+u):(a+=u,47===n.charCodeAt(a)&&++a,n.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,o=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(n=e.charCodeAt(s))){if(!i){o=s;break}}else i=!1;return-1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw new TypeError('"ext" argument must be a string');t(e);var r,o=0,i=-1,s=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var a=n.length-1,c=-1;for(r=e.length-1;r>=0;--r){var l=e.charCodeAt(r);if(47===l){if(!s){o=r+1;break}}else-1===c&&(s=!1,c=r+1),a>=0&&(l===n.charCodeAt(a)?-1==--a&&(i=r):(a=-1,i=c))}return o===i?i=c:-1===i&&(i=e.length),e.slice(o,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!s){o=r+1;break}}else-1===i&&(s=!1,i=r+1);return-1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var n=-1,r=0,o=-1,i=!0,s=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===o&&(i=!1,o=a+1),46===c?-1===n?n=a:1!==s&&(s=1):-1!==n&&(s=-1);else if(!i){r=a+1;break}}return-1===n||-1===o||0===s||1===s&&n===o-1&&n===r+1?"":e.slice(n,o)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+"/"+r:r}(0,e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,o=e.charCodeAt(0),i=47===o;i?(n.root="/",r=1):r=0;for(var s=-1,a=0,c=-1,l=!0,u=e.length-1,f=0;u>=r;--u)if(47!==(o=e.charCodeAt(u)))-1===c&&(l=!1,c=u+1),46===o?-1===s?s=u:1!==f&&(f=1):-1!==s&&(f=-1);else if(!l){a=u+1;break}return-1===s||-1===c||0===f||1===f&&s===c-1&&s===a+1?-1!==c&&(n.base=n.name=0===a&&i?e.slice(1,c):e.slice(a,c)):(0===a&&i?(n.name=e.slice(1,s),n.base=e.slice(1,c)):(n.name=e.slice(a,s),n.base=e.slice(a,c)),n.ext=e.slice(s,c)),a>0?n.dir=e.slice(0,a-1):i&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r},115:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.$u=void 0;const r=n(496),o="Visual Studio Code";t.$u=class{constructor(e){this.a=["twitter","bootstrap","angular-1.1.6","angular-latest","angulerjs","d3","myjquery","jq","abcdef1234567890","jQuery","jquery-1.11.1","jquery","sushi-vanilla-x-data","font-awsome","Font-Awesome","font-awesome","fontawesome","html5-boilerplate","impress.js","homebrew","backbone","moment1","momentjs","moment","linux","animate.css","animate-css","reveal.js","jquery-file-upload","blueimp-file-upload","threejs","express","chosen","normalize-css","normalize.css","semantic","semantic-ui","Semantic-UI","modernizr","underscore","underscore1","material-design-icons","ionic","chartjs","Chart.js","nnnick-chartjs","select2-ng","select2-dist","phantom","skrollr","scrollr","less.js","leancss","parser-lib","hui","bootstrap-languages","async","gulp","jquery-pjax","coffeescript","hammer.js","ace","leaflet","jquery-mobile","sweetalert","typeahead.js","soup","typehead.js","sails","codeigniter2"],this.b=e}getDocumentSelector(){return[{language:"json",scheme:"*",pattern:"**/bower.json"},{language:"json",scheme:"*",pattern:"**/.bower.json"}]}c(){return!!r.workspace.getConfiguration("npm").get("fetchOnlinePackageInfo")}collectDefaultSuggestions(e,t){const n=new r.CompletionItem(r.l10n.t("Default bower.json"));return n.kind=r.CompletionItemKind.Class,n.insertText=new r.SnippetString(JSON.stringify({name:"${1:name}",description:"${2:description}",authors:["${3:author}"],version:"${4:1.0.0}",main:"${5:pathToMain}",dependencies:{}},null,"\t")),t.add(n),Promise.resolve(null)}collectPropertySuggestions(e,t,n,i,s,a){if(!this.c())return null;if(t.matches(["dependencies"])||t.matches(["devDependencies"])){if(n.length>0){const e="https://registry.bower.io/packages/search/"+encodeURIComponent(n);return this.b({url:e,headers:{agent:o}}).then((e=>{if(200!==e.status)return a.error(r.l10n.t("Request to the bower repository failed: {0}",e.responseText)),0;try{const t=JSON.parse(e.responseText);if(Array.isArray(t)){const e=t;for(const t of e){const e=t.name,n=t.description||"",o=(new r.SnippetString).appendText(JSON.stringify(e));i&&(o.appendText(": ").appendPlaceholder("latest"),s||o.appendText(","));const c=new r.CompletionItem(e);c.kind=r.CompletionItemKind.Property,c.insertText=o,c.filterText=JSON.stringify(e),c.documentation=n,a.add(c)}a.setAsIncomplete()}}catch(e){}}),(e=>(a.error(r.l10n.t("Request to the bower repository failed: {0}",e.responseText)),0)))}return this.a.forEach((e=>{const t=(new r.SnippetString).appendText(JSON.stringify(e));i&&(t.appendText(": ").appendPlaceholder("latest"),s||t.appendText(","));const n=new r.CompletionItem(e);n.kind=r.CompletionItemKind.Property,n.insertText=t,n.filterText=JSON.stringify(e),n.documentation="",a.add(n)})),a.setAsIncomplete(),Promise.resolve(null)}return null}collectValueSuggestions(e,t,n){if(!this.c())return null;if(t.matches(["dependencies","*"])||t.matches(["devDependencies","*"])){const e=new r.CompletionItem(r.l10n.t("latest"));e.insertText=new r.SnippetString('"${1:latest}"'),e.filterText='""',e.kind=r.CompletionItemKind.Value,e.documentation="The latest version of the package",n.add(e)}return null}resolveSuggestion(e,t){if(t.kind===r.CompletionItemKind.Property&&""===t.documentation){let e=t.label;return"string"!=typeof e&&(e=e.label),this.d(e).then((e=>e?(t.documentation=e,t):null))}return null}d(e){const t="https://registry.bower.io/packages/"+encodeURIComponent(e);return this.b({url:t,headers:{agent:o}}).then((e=>{try{const t=JSON.parse(e.responseText);if(t&&t.url){let e=t.url;return 0===e.indexOf("git://")&&(e=e.substring(6)),e.length>=4&&".git"===e.substr(e.length-4)&&(e=e.substring(0,e.length-4)),e}}catch(e){}}),(()=>{}))}getInfoContribution(e,t){if(!this.c())return null;if(t.matches(["dependencies","*"])||t.matches(["devDependencies","*"])){const e=t.path[t.path.length-1];if("string"==typeof e)return this.d(e).then((e=>{if(e){const t=new r.MarkdownString;return t.appendText(e),[t]}return null}))}return null}}},179:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.$v=void 0;const r=n(496),o=86400,i=7*o,s=30*o,a=365*o;t.$v=function e(t,n,c,l){"number"!=typeof t&&(t=t.getTime());const u=Math.round(((new Date).getTime()-t)/1e3);if(u<-30)return r.l10n.t("in {0}",e((new Date).getTime()+1e3*u,!1));if(!l&&u<30)return r.l10n.t("now");let f;return u<60?(f=u,n?1===f?c?r.l10n.t("{0} second ago",f):r.l10n.t("{0} sec ago",f):c?r.l10n.t("{0} seconds ago",f):r.l10n.t("{0} secs ago",f):1===f?c?r.l10n.t("{0} second",f):r.l10n.t("{0} sec",f):c?r.l10n.t("{0} seconds",f):r.l10n.t("{0} secs",f)):u<3600?(f=Math.floor(u/60),n?1===f?c?r.l10n.t("{0} minute ago",f):r.l10n.t("{0} min ago",f):c?r.l10n.t("{0} minutes ago",f):r.l10n.t("{0} mins ago",f):1===f?c?r.l10n.t("{0} minute",f):r.l10n.t("{0} min",f):c?r.l10n.t("{0} minutes",f):r.l10n.t("{0} mins",f)):u<o?(f=Math.floor(u/3600),n?1===f?c?r.l10n.t("{0} hour ago",f):r.l10n.t("{0} hr ago",f):c?r.l10n.t("{0} hours ago",f):r.l10n.t("{0} hrs ago",f):1===f?c?r.l10n.t("{0} hour",f):r.l10n.t("{0} hr",f):c?r.l10n.t("{0} hours",f):r.l10n.t("{0} hrs",f)):u<i?(f=Math.floor(u/o),n?1===f?r.l10n.t("{0} day ago",f):r.l10n.t("{0} days ago",f):1===f?r.l10n.t("{0} day",f):r.l10n.t("{0} days",f)):u<s?(f=Math.floor(u/i),n?1===f?c?r.l10n.t("{0} week ago",f):r.l10n.t("{0} wk ago",f):c?r.l10n.t("{0} weeks ago",f):r.l10n.t("{0} wks ago",f):1===f?c?r.l10n.t("{0} week",f):r.l10n.t("{0} wk",f):c?r.l10n.t("{0} weeks",f):r.l10n.t("{0} wks",f)):u<a?(f=Math.floor(u/s),n?1===f?c?r.l10n.t("{0} month ago",f):r.l10n.t("{0} mo ago",f):c?r.l10n.t("{0} months ago",f):r.l10n.t("{0} mos ago",f):1===f?c?r.l10n.t("{0} month",f):r.l10n.t("{0} mo",f):c?r.l10n.t("{0} months",f):r.l10n.t("{0} mos",f)):(f=Math.floor(u/a),n?1===f?c?r.l10n.t("{0} year ago",f):r.l10n.t("{0} yr ago",f):c?r.l10n.t("{0} years ago",f):r.l10n.t("{0} yrs ago",f):1===f?c?r.l10n.t("{0} year",f):r.l10n.t("{0} yr",f):c?r.l10n.t("{0} years",f):r.l10n.t("{0} yrs",f))}},399:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.$A=t.$z=t.$y=t.$x=void 0;const r=n(516),o=n(115),i=n(913),s=n(496);t.$x=function(e,t){const n=[new i.$w(e,t),new o.$u(e)],r=[];return n.forEach((e=>{const t=e.getDocumentSelector();r.push(s.languages.registerCompletionItemProvider(t,new c(e),'"',":")),r.push(s.languages.registerHoverProvider(t,new a(e)))})),s.Disposable.from(...r)};class a{constructor(e){this.a=e}provideHover(e,t,n){const o=e.offsetAt(t),i=(0,r.getLocation)(e.getText(),o);if(!i.previousNode)return null;const a=i.previousNode;if(a&&a.offset<=o&&o<=a.offset+a.length){const t=this.a.getInfoContribution(e.uri,i);if(t)return t.then((t=>({contents:t||[],range:new s.Range(e.positionAt(a.offset),e.positionAt(a.offset+a.length))})))}return null}}t.$y=a;class c{constructor(e){this.b=e}resolveCompletionItem(e,t){if(this.b.resolveSuggestion){const t=this.b.resolveSuggestion(this.a,e);if(t)return t}return Promise.resolve(e)}provideCompletionItems(e,t,n){this.a=e.uri;const o=this.c(e,t);let i;const a=[];let c=!1;const l=e.offsetAt(t),u=(0,r.getLocation)(e.getText(),l),f=u.previousNode;i=f&&f.offset<=l&&l<=f.offset+f.length&&("property"===f.type||"string"===f.type||"number"===f.type||"boolean"===f.type||"null"===f.type)?new s.Range(e.positionAt(f.offset),e.positionAt(f.offset+f.length)):new s.Range(e.positionAt(l-o.length),t);const h={},d={add:e=>{const t="string"==typeof e.label?e.label:e.label.label;h[t]||(h[t]=!0,e.range={replacing:i,inserting:new s.Range(i.start,i.start)},a.push(e))},setAsIncomplete:()=>c=!0,error:e=>console.error(e),log:e=>console.log(e)};let g=null;if(u.isAtPropertyKey){const n=(0,r.createScanner)(e.getText(),!0),i=!u.previousNode||!this.e(n,u.previousNode.offset+u.previousNode.length),s=this.d(n,e.offsetAt(t));g=this.b.collectPropertySuggestions(e.uri,u,o,i,s,d)}else g=0===u.path.length?this.b.collectDefaultSuggestions(e.uri,d):this.b.collectValueSuggestions(e.uri,u,d);return g?g.then((()=>a.length>0||c?new s.CompletionList(a,c):null)):null}c(e,t){let n=t.character-1;const r=e.lineAt(t.line).text;for(;n>=0&&-1===' \t\n\r\v":{[,'.indexOf(r.charAt(n));)n--;return r.substring(n+1,t.character)}d(e,t){e.setPosition(t);let n=e.scan();return 10===n&&2===e.getTokenError()&&(n=e.scan()),2===n||17===n}e(e,t){return e.setPosition(t),6===e.scan()}}t.$z=c,t.$A=()=>Promise.reject({responseText:"Use of online resources is disabled."})},913:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.$w=void 0;const r=n(496),o=n(503),i=n(23),s=n(179),a="Visual Studio Code";t.$w=class{getDocumentSelector(){return[{language:"json",scheme:"*",pattern:"**/package.json"}]}constructor(e,t){this.c=e,this.d=t,this.a=["lodash","async","underscore","request","commander","express","debug","chalk","colors","q","coffee-script","mkdirp","optimist","through2","yeoman-generator","moment","bluebird","glob","gulp-util","minimist","cheerio","pug","redis","node-uuid","socket","io","uglify-js","winston","through","fs-extra","handlebars","body-parser","rimraf","mime","semver","mongodb","jquery","grunt","connect","yosay","underscore","string","xml2js","ejs","mongoose","marked","extend","mocha","superagent","js-yaml","xtend","shelljs","gulp","yargs","browserify","minimatch","react","less","prompt","inquirer","ws","event-stream","inherits","mysql","esprima","jsdom","stylus","when","readable-stream","aws-sdk","concat-stream","chai","Thenable","wrench"],this.b=["@types","@angular","@babel","@nuxtjs","@vue","@bazel"]}collectDefaultSuggestions(e,t){const n=new r.CompletionItem(r.l10n.t("Default package.json"));return n.kind=r.CompletionItemKind.Module,n.insertText=new r.SnippetString(JSON.stringify({name:"${1:name}",description:"${2:description}",authors:"${3:author}",version:"${4:1.0.0}",main:"${5:pathToMain}",dependencies:{}},null,"\t")),t.add(n),Promise.resolve(null)}f(){return this.d||this.g()}g(){return!!r.workspace.getConfiguration("npm").get("fetchOnlinePackageInfo")}collectPropertySuggestions(e,t,n,o,i,s){if(!this.f())return null;if(t.matches(["dependencies"])||t.matches(["devDependencies"])||t.matches(["optionalDependencies"])||t.matches(["peerDependencies"])){let e;if(n.length>0){if("@"===n[0]){if(-1!==n.indexOf("/"))return this.h(n,o,i,s);for(const e of this.b){const t=new r.CompletionItem(e);t.kind=r.CompletionItemKind.Property,t.insertText=(new r.SnippetString).appendText(`"${e}/`).appendTabstop().appendText('"'),t.filterText=JSON.stringify(e),t.documentation="",t.command={title:"",command:"editor.action.triggerSuggest"},s.add(t)}s.setAsIncomplete()}return e=`https://registry.npmjs.org/-/v1/search?size=40&text=${encodeURIComponent(n)}`,this.c({url:e,headers:{agent:a}}).then((e=>{if(200!==e.status)return s.error(r.l10n.t("Request to the NPM repository failed: {0}",e.responseText)),0;try{const t=JSON.parse(e.responseText);if(t&&t.objects&&Array.isArray(t.objects)){const e=t.objects;for(const t of e)this.n(t.package,o,i,s)}}catch(e){}s.setAsIncomplete()}),(e=>(s.error(r.l10n.t("Request to the NPM repository failed: {0}",e.responseText)),0)))}return this.a.forEach((e=>{const t=(new r.SnippetString).appendText(JSON.stringify(e));o&&(t.appendText(': "').appendTabstop().appendText('"'),i||t.appendText(","));const n=new r.CompletionItem(e);n.kind=r.CompletionItemKind.Property,n.insertText=t,n.filterText=JSON.stringify(e),n.documentation="",s.add(n)})),this.h(n,o,i,s),s.setAsIncomplete(),Promise.resolve(null)}return null}h(e,t,n,o){const i=e.split("/");if(2===i.length&&i[0].length>1){const e=i[0].substr(1);let s=i[1];s.length<4&&(s="");const c=`https://registry.npmjs.com/-/v1/search?text=scope:${e}%20${s}&size=250`;return this.c({url:c,headers:{agent:a}}).then((e=>{if(200===e.status){try{const r=JSON.parse(e.responseText);if(r&&Array.isArray(r.objects)){const e=r.objects;for(const r of e)this.n(r.package,t,n,o)}}catch(e){}o.setAsIncomplete()}else o.error(r.l10n.t("Request to the NPM repository failed: {0}",e.responseText));return null}))}return Promise.resolve(null)}async collectValueSuggestions(e,t,n){if(!this.f())return null;if(t.matches(["dependencies","*"])||t.matches(["devDependencies","*"])||t.matches(["optionalDependencies","*"])||t.matches(["peerDependencies","*"])){const o=t.path[t.path.length-1];if("string"==typeof o){const t=await this.k(o,e);if(t&&t.version){let e=JSON.stringify(t.version),o=new r.CompletionItem(e);o.kind=r.CompletionItemKind.Property,o.insertText=e,o.documentation=r.l10n.t("The currently latest version of the package"),n.add(o),e=JSON.stringify("^"+t.version),o=new r.CompletionItem(e),o.kind=r.CompletionItemKind.Property,o.insertText=e,o.documentation=r.l10n.t("Matches the most recent major version (1.x.x)"),n.add(o),e=JSON.stringify("~"+t.version),o=new r.CompletionItem(e),o.kind=r.CompletionItemKind.Property,o.insertText=e,o.documentation=r.l10n.t("Matches the most recent minor version (1.2.x)"),n.add(o)}}}return null}i(e,t,n,o){const i=new r.MarkdownString;return e&&i.appendText(e),t&&(i.appendText("\n\n"),i.appendText(n?r.l10n.t("Latest version: {0} published {1}",t,(0,s.$v)(Date.parse(n),!0,!0)):r.l10n.t("Latest version: {0}",t))),o&&(i.appendText("\n\n"),i.appendText(o)),i}resolveSuggestion(e,t){if(t.kind===r.CompletionItemKind.Property&&!t.documentation){let n=t.label;return"string"!=typeof n&&(n=n.label),this.k(n,e).then((e=>e?(t.documentation=this.i(e.description,e.version,e.time,e.homepage),t):null))}return null}j(e){if(!e||e.length>214||e.match(/^[_.]/))return!1;const t=e.match(/^(?:@([^/]+?)[/])?([^/]+?)$/);if(t){const e=t[1];if(e&&encodeURIComponent(e)!==e)return!1;const n=t[2];return encodeURIComponent(n)===n}return!1}async k(e,t){if(!this.j(e))return;let n;return this.d&&(n=await this.l(this.d,e,t)),!n&&this.g()&&(n=await this.m(e)),n}l(e,t,n){return new Promise(((r,s)=>{const a=["view","--json",t,"description","dist-tags.latest","homepage","version","time"],c=n&&"file"===n.scheme?(0,i.dirname)(n.fsPath):void 0;o.execFile(e,a,{cwd:c},((e,t)=>{if(!e)try{const e=JSON.parse(t),n=e["dist-tags.latest"]||e.version;return void r({description:e.description,version:n,time:e.time?.[n],homepage:e.homepage})}catch(e){}r(void 0)}))}))}async m(e){const t="https://registry.npmjs.org/"+encodeURIComponent(e);try{const e=await this.c({url:t,headers:{agent:a}}),n=JSON.parse(e.responseText),r=n["dist-tags"]?.latest||Object.keys(n.versions).pop()||"";return{description:n.description||"",version:r,time:n.time?.[r],homepage:n.homepage||""}}catch(e){}}getInfoContribution(e,t){if(!this.f())return null;if(t.matches(["dependencies","*"])||t.matches(["devDependencies","*"])||t.matches(["optionalDependencies","*"])||t.matches(["peerDependencies","*"])){const n=t.path[t.path.length-1];if("string"==typeof n)return this.k(n,e).then((e=>e?[this.i(e.description,e.version,e.time,e.homepage)]:null))}return null}n(e,t,n,o){if(e&&e.name){const i=e.name,s=(new r.SnippetString).appendText(JSON.stringify(i));t&&(s.appendText(': "'),e.version?s.appendVariable("version",e.version):s.appendTabstop(),s.appendText('"'),n||s.appendText(","));const a=new r.CompletionItem(i);a.kind=r.CompletionItemKind.Property,a.insertText=s,a.filterText=JSON.stringify(i),a.documentation=this.i(e.description,e.version,void 0,e?.links?.homepage),o.add(a)}}}},496:e=>{"use strict";e.exports=require("vscode")},503:()=>{}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=n(510),o=n(399);e.activate=async function(e){e.subscriptions.push((0,o.$x)(t.xhr,void 0))},e.deactivate=function(){}})();var o=exports;for(var i in r)o[i]=r[i];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8b617bd08fd9e3fc94d14adb8d358b56e3f72314/extensions/npm/dist/browser/npmBrowserMain.js.map