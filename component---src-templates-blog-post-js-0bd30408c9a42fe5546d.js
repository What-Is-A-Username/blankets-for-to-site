(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1bYO":function(e,t,n){e.exports={title:"index-module--title--286qy",backgroundVideo:"index-module--backgroundVideo--3zLIj",backgroundImage:"index-module--backgroundImage--1kN2-",logoImage:"index-module--logoImage--242NR",description:"index-module--description--2FQj_",instagram:"index-module--instagram--1Rokw",btnRow:"index-module--btnRow--27pa3"}},"D1b+":function(e,t,n){e.exports={updates:"article-preview-module--updates--2tWvO",previewParent:"article-preview-module--previewParent--zTD6v",previewImage:"article-preview-module--previewImage--18UBZ",preview:"article-preview-module--preview--35oKv",previewTitle:"article-preview-module--previewTitle--dtVfR",previewDescription:"article-preview-module--previewDescription--andbH",previewPublishDate:"article-preview-module--previewPublishDate--1_Kqg",alink:"article-preview-module--alink--3Zy_j",tag:"article-preview-module--tag--1jiS7"}},JM9Q:function(e,t,n){"use strict";var r=n("ZS3K"),o=n("KaJK");r({target:"String",proto:!0,forced:n("Wvaq")("link")},{link:function(e){return o(this,"a","href",e)}})},L2L3:function(e,t,n){e.exports={title:"blog-post-module--title--taf5a",horizontalLine:"blog-post-module--horizontalLine--20qcL",publishDate:"blog-post-module--publishDate--ywUQM",browseAllButton:"blog-post-module--browseAllButton--3YqB5",links:"blog-post-module--links--3hIfu"}},aWpR:function(e,t,n){"use strict";n("XCjP");var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("D1b+"),l=n.n(i),c=n("NysD"),u=n("17x9"),s=function(e){var t=e.excludeSlug;return o.a.createElement(a.b,{query:"3348497635",render:function(e){return function(e,t){return o.a.createElement("div",{className:l.a.updates},o.a.createElement("h2",null,"Keep updated with our latest events"),o.a.createElement("div",{className:l.a.previewParent},e.map((function(e){return e.node.slug===t?null:o.a.createElement("a",{onClick:function(){return Object(a.d)("/blog/"+e.node.slug)},className:l.a.alink,key:e.node.title},o.a.createElement("div",{className:l.a.preview},o.a.createElement("div",{className:l.a.previewImage},null!=e.node.imagePreview?o.a.createElement("img",{src:e.node.imagePreview.fixed.src,alt:e.node.imagePreview.description}):o.a.createElement("img",{src:"",alt:"Image not found."})),o.a.createElement("div",null,o.a.createElement("h3",{className:l.a.previewTitle},e.node.title),o.a.createElement("small",{className:l.a.previewPublishDate},e.node.publishDate),o.a.createElement(c.a,{tags:e.node.tags,clickable:!1}),o.a.createElement("div",{className:l.a.previewDescription,dangerouslySetInnerHTML:{__html:e.node.description.childMarkdownRemark.html}}))))}))),o.a.createElement(a.a,{to:"/blog",className:"links"},o.a.createElement("button",{className:"btn",type:"submit"},"Browse all updates")))}(e.allContentfulBlogPost.edges,t)}})};s.PropTypes={excludeSlug:n.n(u).a.string},s.defaultProps={excludeSlug:""},t.a=s},ldhG:function(e,t,n){e.exports={linkContainer:"link-sharing-module--linkContainer--3k-_h",socials:"link-sharing-module--socials--1eBtp",linkField:"link-sharing-module--linkField--37aoQ",link:"link-sharing-module--link--30K-w"}},vbKG:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},a=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||Function("return this")(),i=function(e){try{return!!e()}catch(t){return!0}},l=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,s={f:u&&!c.call({1:2},1)?function(e){var t=u(this,e);return!!t&&t.enumerable}:c},f=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,p="".split,m=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return d.call(e).slice(8,-1)}(e)?p.call(e,""):Object(e)}:Object,h=function(e){return m(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},g=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!g(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!g(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!g(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!g(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},E={}.hasOwnProperty,b=function(e,t){return E.call(e,t)},y=a.document,w=g(y)&&g(y.createElement),S=function(e){return w?y.createElement(e):{}},T=!l&&!i((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),k=Object.getOwnPropertyDescriptor,O={f:l?k:function(e,t){if(e=h(e),t=v(t,!0),T)try{return k(e,t)}catch(n){}if(b(e,t))return f(!s.f.call(e,t),e[t])}},D=function(e){if(!g(e))throw TypeError(String(e)+" is not an object");return e},I=Object.defineProperty,N={f:l?I:function(e,t,n){if(D(e),t=v(t,!0),D(n),T)try{return I(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},_=l?function(e,t,n){return N.f(e,t,f(1,n))}:function(e,t,n){return e[t]=n,e},L=function(e,t){try{_(a,e,t)}catch(n){a[e]=t}return t},P=a["__core-js_shared__"]||L("__core-js_shared__",{}),j=Function.toString;"function"!=typeof P.inspectSource&&(P.inspectSource=function(e){return j.call(e)});var A,R,x,M=P.inspectSource,C=a.WeakMap,B="function"==typeof C&&/native code/.test(M(C)),H=r((function(e){(e.exports=function(e,t){return P[e]||(P[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),G=0,K=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++G+K).toString(36)},z=H("keys"),Y=function(e){return z[e]||(z[e]=U(e))},F={},q=a.WeakMap;if(B){var W=new q,Q=W.get,V=W.has,J=W.set;A=function(e,t){return J.call(W,e,t),t},R=function(e){return Q.call(W,e)||{}},x=function(e){return V.call(W,e)}}else{var Z=Y("state");F[Z]=!0,A=function(e,t){return _(e,Z,t),t},R=function(e){return b(e,Z)?e[Z]:{}},x=function(e){return b(e,Z)}}var X={set:A,get:R,has:x,enforce:function(e){return x(e)?R(e):A(e,{})},getterFor:function(e){return function(t){var n;if(!g(t)||(n=R(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=r((function(e){var t=X.get,n=X.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var l=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,u=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||b(o,"name")||_(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==a?(l?!u&&e[t]&&(c=!0):delete e[t],c?e[t]=o:_(e,t,o)):c?e[t]=o:L(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||M(this)}))})),ee=a,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(a[e]):ee[e]&&ee[e][t]||a[e]&&a[e][t]},re=Math.ceil,oe=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ie=Math.min,le=Math.max,ce=Math.min,ue=function(e){return function(t,n,r){var o,a,i=h(t),l=(o=i.length)>0?ie(ae(o),9007199254740991):0,c=function(e,t){var n=ae(e);return n<0?le(n+t,0):ce(n,t)}(r,l);if(e&&n!=n){for(;l>c;)if((a=i[c++])!=a)return!0}else for(;l>c;c++)if((e||c in i)&&i[c]===n)return e||c||0;return!e&&-1}},se={includes:ue(!0),indexOf:ue(!1)},fe=se.indexOf,de=function(e,t){var n,r=h(e),o=0,a=[];for(n in r)!b(F,n)&&b(r,n)&&a.push(n);for(;t.length>o;)b(r,n=t[o++])&&(~fe(a,n)||a.push(n));return a},pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],me=pe.concat("length","prototype"),he={f:Object.getOwnPropertyNames||function(e){return de(e,me)}},ge={f:Object.getOwnPropertySymbols},ve=ne("Reflect","ownKeys")||function(e){var t=he.f(D(e)),n=ge.f;return n?t.concat(n(e)):t},Ee=function(e,t){for(var n=ve(t),r=N.f,o=O.f,a=0;a<n.length;a++){var i=n[a];b(e,i)||r(e,i,o(t,i))}},be=/#|\.prototype\./,ye=function(e,t){var n=Se[we(e)];return n==ke||n!=Te&&("function"==typeof t?i(t):!!t)},we=ye.normalize=function(e){return String(e).replace(be,".").toLowerCase()},Se=ye.data={},Te=ye.NATIVE="N",ke=ye.POLYFILL="P",Oe=ye,De=O.f,Ie=function(e,t){var n,r,o,i,l,c=e.target,u=e.global,s=e.stat;if(n=u?a:s?a[c]||L(c,{}):(a[c]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(l=De(n,r))&&l.value:n[r],!Oe(u?r:c+(s?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Ee(i,o)}(e.sham||o&&o.sham)&&_(i,"sham",!0),$(n,r,i,e)}},Ne=Object.keys||function(e){return de(e,pe)},_e=s.f,Le=function(e){return function(t){for(var n,r=h(t),o=Ne(r),a=o.length,i=0,c=[];a>i;)n=o[i++],l&&!_e.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Pe={entries:Le(!0),values:Le(!1)}.values;Ie({target:"Object",stat:!0},{values:function(e){return Pe(e)}});ee.Object.values;var je,Ae=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),Re=Ae&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,xe=H("wks"),Me=a.Symbol,Ce=Re?Me:Me&&Me.withoutSetter||U,Be=l?Object.defineProperties:function(e,t){D(e);for(var n,r=Ne(t),o=r.length,a=0;o>a;)N.f(e,n=r[a++],t[n]);return e},He=ne("document","documentElement"),Ge=Y("IE_PROTO"),Ke=function(){},Ue=function(e){return"<script>"+e+"<\/script>"},ze=function(){try{je=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;ze=je?function(e){e.write(Ue("")),e.close();var t=e.parentWindow.Object;return e=null,t}(je):((t=S("iframe")).style.display="none",He.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Ue("document.F=Object")),e.close(),e.F);for(var n=pe.length;n--;)delete ze.prototype[pe[n]];return ze()};F[Ge]=!0;var Ye,Fe=Object.create||function(e,t){var n;return null!==e?(Ke.prototype=D(e),n=new Ke,Ke.prototype=null,n[Ge]=e):n=ze(),void 0===t?n:Be(n,t)},qe=(b(xe,Ye="unscopables")||(Ae&&b(Me,Ye)?xe[Ye]=Me[Ye]:xe[Ye]=Ce("Symbol."+Ye)),xe[Ye]),We=Array.prototype;null==We[qe]&&N.f(We,qe,{configurable:!0,value:Fe(null)});var Qe,Ve=Object.defineProperty,Je={},Ze=function(e){throw e},Xe=se.includes;Ie({target:"Array",proto:!0,forced:!function(e,t){if(b(Je,e))return Je[e];t||(t={});var n=[][e],r=!!b(t,"ACCESSORS")&&t.ACCESSORS,o=b(t,0)?t[0]:Ze,a=b(t,1)?t[1]:void 0;return Je[e]=!!n&&!i((function(){if(r&&!l)return!0;var e={length:-1};r?Ve(e,1,{enumerable:!0,get:Ze}):e[1]=1,n.call(e,o,a)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return Xe(this,e,arguments.length>1?arguments[1]:void 0)}}),Qe="includes",We[qe][Qe]=!0;var $e,et,tt,nt=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},rt=Function.call;$e="includes",nt(rt,a["Array"].prototype[$e],et);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(tt||(tt={}));var ot,at=tt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(ot||(ot={}));var it,lt=ot,ct=[at.PARAGRAPH,at.HEADING_1,at.HEADING_2,at.HEADING_3,at.HEADING_4,at.HEADING_5,at.HEADING_6,at.OL_LIST,at.UL_LIST,at.HR,at.QUOTE,at.EMBEDDED_ENTRY,at.EMBEDDED_ASSET],ut=[at.HR,at.EMBEDDED_ENTRY,at.EMBEDDED_ASSET],st=((it={})[at.OL_LIST]=[at.LIST_ITEM],it[at.UL_LIST]=[at.LIST_ITEM],it[at.LIST_ITEM]=ct.slice(),it[at.QUOTE]=[at.PARAGRAPH],it),ft={nodeType:at.DOCUMENT,data:{},content:[{nodeType:at.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var dt=Object.freeze({isInline:function(e){return Object.values(lt).includes(e.nodeType)},isBlock:function(e){return Object.values(at).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=at,t.CONTAINERS=st,t.EMPTY_DOCUMENT=ft,t.INLINES=lt,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=ct,t.VOID_BLOCKS=ut,t.helpers=dt}).call(this,n("yLpj"))},yZlL:function(e,t,n){"use strict";n.r(t);var r=n("VbXa"),o=n.n(r),a=n("q1tI"),i=n.n(a),l=(n("Wbzz"),n("EYWl")),c=n("mwIZ"),u=n.n(c),s=n("Bl7J"),f=n("aWpR"),d=(n("JM9Q"),n("17x9")),p=n.n(d),m=n("ldhG"),h=n.n(m),g=function(e){var t=e.location,n="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t);return i.a.createElement("div",{className:h.a.linkContainer},i.a.createElement("div",{className:h.a.socials},i.a.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",class:"twitter-share-button","data-size":"large","data-related":"blanketsforto","data-show-count":"false"},"Tweet"),i.a.createElement("div",{class:"fb-like","data-href":t,"data-width":"","data-layout":"button","data-action":"like","data-size":"large","data-share":"false"}),i.a.createElement("div",{class:"fb-share-button","data-href":t,"data-layout":"button","data-size":"large"},i.a.createElement("a",{href:n,target:"_blank",alt:"Share on Facebook",class:"fb-xfbml-parse-ignore"},"Share"))),i.a.createElement("div",{className:h.a.link},i.a.createElement("div",{className:h.a.linkField},i.a.createElement("input",{style:{width:t.length+"ch"},type:"text",value:t,id:"linkAddress",readOnly:!0}),i.a.createElement("button",{onClick:function(){var e=document.getElementById("linkAddress");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}},"Copy URL"))))},v=g;g.defaultProps=g.propTypes={location:p.a.string.isRequired};var E=n("vbKG"),b=n("R8uD"),y=(n("1bYO"),n("L2L3")),w=n.n(y),S=n("NysD"),T=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e,t=u()(this.props,"data.contentfulBlogPost"),n=(u()(this,"props.data.allContentfulBlogPost.edges"),{renderNode:(e={},e[E.BLOCKS.EMBEDDED_ASSET]=function(e){var t=e.data.target.fields;return i.a.createElement("img",{src:t.file["en-US"].url,style:{width:t.file["en-US"].details.image.width},alt:t.description})},e)}),r=[i.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),i.a.createElement("div",{id:"fb-root"}),i.a.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0",nonce:"mMCLlyqT"})];return i.a.createElement(s.a,{location:this.props.location},i.a.createElement("div",{className:"white-background"},i.a.createElement(l.a,{title:t.title,metaType:"article",description:t.publishDate+" - "+t.description.childMarkdownRemark.rawMarkdownBody,childElements:r}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:w.a.title},t.title),i.a.createElement("p",{className:w.a.publishDate}," ",t.publishDate," "),i.a.createElement(S.a,{tags:t.tags,clickable:!0}),i.a.createElement("div",{className:"richText"},null!=t.richTextBody?Object(b.documentToReactComponents)(t.richTextBody.json,n):i.a.createElement("p",null,"Error: Article not found.")),i.a.createElement(v,{location:"https://blanketsforto.ca/blog/"+t.slug}),i.a.createElement("hr",{className:w.a.horizontalLine}),i.a.createElement(f.a,{excludeSlug:t.slug}))))},t}(i.a.Component);t.default=T}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-0bd30408c9a42fe5546d.js.map