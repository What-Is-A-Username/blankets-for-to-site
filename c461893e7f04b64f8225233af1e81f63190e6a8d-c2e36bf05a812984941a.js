(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+6XX":function(t,n,e){var o=e("y1pI");t.exports=function(t){return o(this.__data__,t)>-1}},"/9aa":function(t,n,e){var o=e("NykK"),r=e("ExA7");t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==o(t)}},"2gN3":function(t,n,e){var o=e("Kz5y")["__core-js_shared__"];t.exports=o},"3Fdi":function(t,n){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},"44Ds":function(t,n,e){var o=e("e4Nc");function r(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var e=function(){var o=arguments,r=n?n.apply(this,o):o[0],a=e.cache;if(a.has(r))return a.get(r);var i=t.apply(this,o);return e.cache=a.set(r,i)||a,i};return e.cache=new(r.Cache||o),e}r.Cache=o,t.exports=r},"4kuk":function(t,n,e){var o=e("SfRM"),r=e("Hvzi"),a=e("u8Dt"),i=e("ekgI"),c=e("JSQU");function u(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var o=t[n];this.set(o[0],o[1])}}u.prototype.clear=o,u.prototype.delete=r,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},"4uTw":function(t,n,e){var o=e("Z0cm"),r=e("9ggG"),a=e("GNiM"),i=e("dt0z");t.exports=function(t,n){return o(t)?t:r(t,n)?[t]:a(i(t))}},"9Nap":function(t,n,e){var o=e("/9aa");t.exports=function(t){if("string"==typeof t||o(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},"9ggG":function(t,n,e){var o=e("Z0cm"),r=e("/9aa"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,n){if(o(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!r(t))||(i.test(t)||!a.test(t)||null!=n&&t in Object(n))}},AP2z:function(t,n,e){var o=e("nmnc"),r=Object.prototype,a=r.hasOwnProperty,i=r.toString,c=o?o.toStringTag:void 0;t.exports=function(t){var n=a.call(t,c),e=t[c];try{t[c]=void 0;var o=!0}catch(u){}var r=i.call(t);return o&&(n?t[c]=e:delete t[c]),r}},Bl7J:function(t,n,e){"use strict";var o=e("VbXa"),r=e.n(o),a=e("q1tI"),i=e.n(a),c=e("Wbzz"),u=(e("Dm0Y"),function(t){var n=t.children;return i.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},n)}),s=e("T78C"),f=e.n(s),l=[{to:"/",desc:"Home"},{to:"/about/",desc:"About"},{to:"/team/",desc:"Team"},{to:"/positions/",desc:"Volunteers and Positions"},{to:"/contact/",desc:"Contact"},{to:"/blog/",desc:"Updates"}],p=function(){var t=i.a.useState(!1),n=t[0],e=t[1],o=function(){e(!n),console.log(n)};return i.a.createElement("nav",{role:"navigation"},i.a.createElement("div",{className:f.a.logo},i.a.createElement("h1",null,"Blankets For Toronto")),i.a.createElement("div",{className:f.a.toggle},i.a.createElement("li",{className:f.a.navigationItem,onClick:o},"Navigation")),i.a.createElement("ul",{className:f.a.navigation,style:n?{top:"17vh"}:{top:"-150%"}},l.map((function(t){return i.a.createElement("li",{className:f.a.navigationItem,key:t.desc},i.a.createElement(c.a,{to:t.to},t.desc))})),n?i.a.createElement("li",{className:f.a.navigationItem,onClick:o},"Close Menu"):null))},v=e("UNbL"),d=e.n(v),h=[{to:"/",desc:"Home"},{to:"/about/",desc:"About"},{to:"/team/",desc:"Team"},{to:"/positions/",desc:"Volunteers and Positions"},{to:"/contact/",desc:"Contact"},{to:"/blog/",desc:"Updates"}],y=function(){return i.a.createElement("footer",{role:"footer",className:d.a.footer},i.a.createElement("h1",{className:d.a.footerTitle},"Blankets for Toronto"),i.a.createElement("p",{className:d.a.footerInfo},"An Organization at UTSC"),i.a.createElement("ul",{className:d.a.navigation},h.map((function(t){return i.a.createElement("li",{className:d.a.navigationItem,key:t.desc},i.a.createElement(c.a,{to:t.to},t.desc))}))))},g=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t=this.props,n=(t.location,t.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/",i.a.createElement(u,{styles:{width:"auto",display:"inline-flex"}},i.a.createElement(p,null),n,i.a.createElement(y,null))},n}(i.a.Component);n.a=g},Cwc5:function(t,n,e){var o=e("NKxu"),r=e("Npjl");t.exports=function(t,n){var e=r(t,n);return o(e)?e:void 0}},Dm0Y:function(t,n,e){},E2jh:function(t,n,e){var o,r=e("2gN3"),a=(o=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";t.exports=function(t){return!!a&&a in t}},EpBk:function(t,n){t.exports=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}},ExA7:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},GNiM:function(t,n,e){var o=e("I01J"),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=o((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(r,(function(t,e,o,r){n.push(o?r.replace(a,"$1"):e||t)})),n}));t.exports=i},GoyQ:function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},H8j4:function(t,n,e){var o=e("QkVE");t.exports=function(t,n){var e=o(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this}},Hvzi:function(t,n){t.exports=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}},I01J:function(t,n,e){var o=e("44Ds");t.exports=function(t){var n=o(t,(function(t){return 500===e.size&&e.clear(),t})),e=n.cache;return n}},JHgL:function(t,n,e){var o=e("QkVE");t.exports=function(t){return o(this,t).get(t)}},JSQU:function(t,n,e){var o=e("YESw");t.exports=function(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=o&&void 0===n?"__lodash_hash_undefined__":n,this}},KMkd:function(t,n){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},Kz5y:function(t,n,e){var o=e("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();t.exports=a},NKxu:function(t,n,e){var o=e("lSCD"),r=e("E2jh"),a=e("GoyQ"),i=e("3Fdi"),c=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,f=u.toString,l=s.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||r(t))&&(o(t)?p:c).test(i(t))}},Npjl:function(t,n){t.exports=function(t,n){return null==t?void 0:t[n]}},NykK:function(t,n,e){var o=e("nmnc"),r=e("AP2z"),a=e("KfNM"),i=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?r(t):a(t)}},QkVE:function(t,n,e){var o=e("EpBk");t.exports=function(t,n){var e=t.__data__;return o(n)?e["string"==typeof n?"string":"hash"]:e.map}},RBcg:function(t,n,e){"use strict";var o=e("JhOX");t.exports=function(t,n){var e=[][t];return!!e&&o((function(){e.call(null,n||function(){throw 1},1)}))}},RUBk:function(t,n,e){"use strict";var o=e("ZS3K"),r=e("pAzz").left,a=e("RBcg"),i=e("xvWs"),c=e("9h/2"),u=e("CiUx"),s=a("reduce"),f=i("reduce",{1:0});o({target:"Array",proto:!0,forced:!s||!f||!u&&c>79&&c<83},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},SfRM:function(t,n,e){var o=e("YESw");t.exports=function(){this.__data__=o?o(null):{},this.size=0}},T78C:function(t,n,e){t.exports={logo:"navigation-module--logo--3mQkA",navigation:"navigation-module--navigation--1ZdF3",navigationItem:"navigation-module--navigationItem--3T1mO",toggle:"navigation-module--toggle--2d19S",sideBarParent:"navigation-module--sideBarParent--1r_jC",sideBarNavigationItem:"navigation-module--sideBarNavigationItem--1_tNu"}},UNbL:function(t,n,e){t.exports={footer:"footer-module--footer--2KjWj",footerTitle:"footer-module--footerTitle--1HN1H",footerInfo:"footer-module--footerInfo--2087u",navigation:"footer-module--navigation--weFS7",navigationItem:"footer-module--navigationItem--2jAvb"}},WFqU:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e("yLpj"))},Xi7e:function(t,n,e){var o=e("KMkd"),r=e("adU4"),a=e("tMB7"),i=e("+6XX"),c=e("Z8oC");function u(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var o=t[n];this.set(o[0],o[1])}}u.prototype.clear=o,u.prototype.delete=r,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},YESw:function(t,n,e){var o=e("Cwc5")(Object,"create");t.exports=o},Z0cm:function(t,n){var e=Array.isArray;t.exports=e},Z8oC:function(t,n,e){var o=e("y1pI");t.exports=function(t,n){var e=this.__data__,r=o(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this}},ZWtO:function(t,n,e){var o=e("4uTw"),r=e("9Nap");t.exports=function(t,n){for(var e=0,a=(n=o(n,t)).length;null!=t&&e<a;)t=t[r(n[e++])];return e&&e==a?t:void 0}},adU4:function(t,n,e){var o=e("y1pI"),r=Array.prototype.splice;t.exports=function(t){var n=this.__data__,e=o(n,t);return!(e<0)&&(e==n.length-1?n.pop():r.call(n,e,1),--this.size,!0)}},dt0z:function(t,n,e){var o=e("zoYe");t.exports=function(t){return null==t?"":o(t)}},e4Nc:function(t,n,e){var o=e("fGT3"),r=e("k+1r"),a=e("JHgL"),i=e("pSRY"),c=e("H8j4");function u(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var o=t[n];this.set(o[0],o[1])}}u.prototype.clear=o,u.prototype.delete=r,u.prototype.get=a,u.prototype.has=i,u.prototype.set=c,t.exports=u},eUgh:function(t,n){t.exports=function(t,n){for(var e=-1,o=null==t?0:t.length,r=Array(o);++e<o;)r[e]=n(t[e],e,t);return r}},ebwN:function(t,n,e){var o=e("Cwc5")(e("Kz5y"),"Map");t.exports=o},ekgI:function(t,n,e){var o=e("YESw"),r=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;return o?void 0!==n[t]:r.call(n,t)}},fGT3:function(t,n,e){var o=e("4kuk"),r=e("Xi7e"),a=e("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new o,map:new(a||r),string:new o}}},"k+1r":function(t,n,e){var o=e("QkVE");t.exports=function(t){var n=o(this,t).delete(t);return this.size-=n?1:0,n}},lSCD:function(t,n,e){var o=e("NykK"),r=e("GoyQ");t.exports=function(t){if(!r(t))return!1;var n=o(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},ljhN:function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},mwIZ:function(t,n,e){var o=e("ZWtO");t.exports=function(t,n,e){var r=null==t?void 0:o(t,n);return void 0===r?e:r}},nmnc:function(t,n,e){var o=e("Kz5y").Symbol;t.exports=o},pAzz:function(t,n,e){var o=e("wTlq"),r=e("17+C"),a=e("8mzz"),i=e("WD+B"),c=function(t){return function(n,e,c,u){o(e);var s=r(n),f=a(s),l=i(s.length),p=t?l-1:0,v=t?-1:1;if(c<2)for(;;){if(p in f){u=f[p],p+=v;break}if(p+=v,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=v)p in f&&(u=e(u,f[p],p,s));return u}};t.exports={left:c(!1),right:c(!0)}},pSRY:function(t,n,e){var o=e("QkVE");t.exports=function(t){return o(this,t).has(t)}},tMB7:function(t,n,e){var o=e("y1pI");t.exports=function(t){var n=this.__data__,e=o(n,t);return e<0?void 0:n[e][1]}},u8Dt:function(t,n,e){var o=e("YESw"),r=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;if(o){var e=n[t];return"__lodash_hash_undefined__"===e?void 0:e}return r.call(n,t)?n[t]:void 0}},y1pI:function(t,n,e){var o=e("ljhN");t.exports=function(t,n){for(var e=t.length;e--;)if(o(t[e][0],n))return e;return-1}},zoYe:function(t,n,e){var o=e("nmnc"),r=e("eUgh"),a=e("Z0cm"),i=e("/9aa"),c=o?o.prototype:void 0,u=c?c.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(a(n))return r(n,t)+"";if(i(n))return u?u.call(n):"";var e=n+"";return"0"==e&&1/n==-1/0?"-0":e}}}]);
//# sourceMappingURL=c461893e7f04b64f8225233af1e81f63190e6a8d-c2e36bf05a812984941a.js.map