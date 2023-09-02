"use strict";(self.webpackChunkblankets_for_to_site=self.webpackChunkblankets_for_to_site||[]).push([[349],{4129:function(e,t,r){var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n,l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e,t){return e(t={exports:{}},t.exports),t.exports}var u=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));c(u);u.BLOCKS;var E=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));c(E);E.INLINES;var p=s((function(e,t){var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(r||(r={})),t.default=r}));c(p);var d=s((function(e,t){var r,n=a&&a.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},o=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var i=o(p);t.TOP_LEVEL_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.EMBEDDED_RESOURCE,u.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[u.BLOCKS.TABLE,u.BLOCKS.TABLE_ROW,u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[u.BLOCKS.HR,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((r={})[u.BLOCKS.OL_LIST]=[u.BLOCKS.LIST_ITEM],r[u.BLOCKS.UL_LIST]=[u.BLOCKS.LIST_ITEM],r[u.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[u.BLOCKS.QUOTE]=[u.BLOCKS.PARAGRAPH],r[u.BLOCKS.TABLE]=[u.BLOCKS.TABLE_ROW],r[u.BLOCKS.TABLE_ROW]=[u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],r[u.BLOCKS.TABLE_CELL]=[u.BLOCKS.PARAGRAPH],r[u.BLOCKS.TABLE_HEADER_CELL]=[u.BLOCKS.PARAGRAPH],r),t.HEADINGS=[u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=n([u.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[u.BLOCKS.DOCUMENT,u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.LIST_ITEM,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,E.INLINES.HYPERLINK,E.INLINES.ENTRY_HYPERLINK,E.INLINES.ASSET_HYPERLINK,E.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[i.default.BOLD,i.default.CODE,i.default.ITALIC,i.default.UNDERLINE]}));c(d);d.V1_MARKS,d.V1_NODE_TYPES,d.TEXT_CONTAINERS,d.HEADINGS,d.CONTAINERS,d.VOID_BLOCKS,d.TABLE_BLOCKS,d.LIST_ITEM_BLOCKS,d.TOP_LEVEL_BLOCKS;var f=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));c(f);var O=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));c(O);var m=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r={nodeType:u.BLOCKS.DOCUMENT,data:{},content:[{nodeType:u.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=r}));c(m);var L=s((function(e,t){function r(e,t){for(var r=0,n=Object.keys(e);r<n.length;r++){if(t===e[n[r]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return r(E.INLINES,e.nodeType)},t.isBlock=function(e){return r(u.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));c(L);L.isText,L.isBlock,L.isInline;var S=s((function(e,t){var r=a&&a.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=a&&a.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=a&&a.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},i=a&&a.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&r(t,e,o);return n(t,e),t},l=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return u.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return E.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return l(p).default}}),o(d,t),o(f,t),o(O,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return l(m).default}});var c=i(L);t.helpers=c}));c(S);var h,v,_=S.helpers,y=(S.EMPTY_DOCUMENT,S.MARKS),T=S.INLINES,C=S.BLOCKS;function N(e,t){return e.map((function(e,r){return n=b(e,t),i=r,o.isValidElement(n)&&null===n.key?o.cloneElement(n,{key:i}):n;var n,i}))}function b(e,t){var r=t.renderNode,n=t.renderMark,o=t.renderText;if(_.isText(e))return e.marks.reduce((function(e,t){return n[t.type]?n[t.type](e):e}),o?o(e.value):e.value);var l=N(e.content,t);return e.nodeType&&r[e.nodeType]?r[e.nodeType](e,l):i.createElement(i.Fragment,null,l)}var B=((h={})[C.DOCUMENT]=function(e,t){return t},h[C.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},h[C.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},h[C.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},h[C.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},h[C.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},h[C.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},h[C.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},h[C.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},h[C.EMBEDDED_RESOURCE]=function(e,t){return i.createElement("div",null,t)},h[C.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},h[C.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},h[C.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},h[C.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},h[C.HR]=function(){return i.createElement("hr",null)},h[C.TABLE]=function(e,t){return i.createElement("table",null,i.createElement("tbody",null,t))},h[C.TABLE_ROW]=function(e,t){return i.createElement("tr",null,t)},h[C.TABLE_HEADER_CELL]=function(e,t){return i.createElement("th",null,t)},h[C.TABLE_CELL]=function(e,t){return i.createElement("td",null,t)},h[T.ASSET_HYPERLINK]=function(e){return g(T.ASSET_HYPERLINK,e)},h[T.ENTRY_HYPERLINK]=function(e){return g(T.ENTRY_HYPERLINK,e)},h[T.EMBEDDED_ENTRY]=function(e){return g(T.EMBEDDED_ENTRY,e)},h[T.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},h),I=((v={})[y.BOLD]=function(e){return i.createElement("b",null,e)},v[y.ITALIC]=function(e){return i.createElement("i",null,e)},v[y.UNDERLINE]=function(e){return i.createElement("u",null,e)},v[y.CODE]=function(e){return i.createElement("code",null,e)},v[y.SUPERSCRIPT]=function(e){return i.createElement("sup",null,e)},v[y.SUBSCRIPT]=function(e){return i.createElement("sub",null,e)},v);function g(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?b(e,{renderNode:l(l({},B),t.renderNode),renderMark:l(l({},I),t.renderMark),renderText:t.renderText}):null}},1919:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),o=r(2528),i=function(e){var t=e.text,r=e.link;return n.createElement("a",{href:r,className:"back-arrow-module--arrowStyles--ed188"},n.createElement(o.Z,null),t)}},2717:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),o=function(e){var t=e.data.link.replace("episode","embed-podcast/episode").split("?")[0];return n.createElement("div",{className:"spotify-embed-module--iframeParent--f7a6b"},console.warn("iframe missing a unique `title` attribute"),n.createElement("iframe",{src:t,width:"100%",height:"232",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}))}},4911:function(e,t,r){r.d(t,{Z:function(){return T}});var n=r(1721),o=r(7294),i="link-sharing-module--twitterShareButton--215d9",l=r(5697),a=r.n(l);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=(0,o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,a=s(e,["color","size"]);return o.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),o.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));u.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},u.displayName="Twitter";var E=u;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=(0,o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,a=d(e,["color","size"]);return o.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),o.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))}));f.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},f.displayName="Facebook";var O=f;function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function L(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var S=(0,o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,a=L(e,["color","size"]);return o.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),o.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),o.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))}));S.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},S.displayName="Link";var h=S,v=r(6445),_=r(9737),y=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call(this,...n)||this).state={linkCopied:!1,timer:-1},t.copyLink=function(){if(!t.state.linkCopied){var e=document.getElementById("linkAddress");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),t.setState({linkCopied:!0},(function(){var e=setTimeout((function(){t.setState({linkCopied:!1,timer:e})}),3e3)}))}},t}(0,n.Z)(t,e);var r=t.prototype;return r.render=function(){var e=this;return o.createElement("div",{className:"link-sharing-module--linkContainer--c102a"},o.createElement("div",{className:"link-sharing-module--socials--f61ab"},o.createElement("a",{className:i,href:"https://twitter.com/intent/tweet?url="+encodeURIComponent(this.props.location),target:"_blank",title:"Share on Twitter"},o.createElement(E,{size:20}),"Tweet"),o.createElement("a",{className:i,href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.props.location),target:"_blank",title:"Share on Facebook"},o.createElement(O,{size:20}),"Share")),o.createElement("div",{className:"link-sharing-module--link--7231a"},o.createElement("div",{className:"link-sharing-module--linkField--8474f"},o.createElement("p",{className:"link-sharing-module--linkIcon--f8548",onClick:this.state.linkCopied?function(){}:function(){return e.copyLink()},title:"Copy this page's link"},o.createElement(h,{size:20,color:"white"})),o.createElement("input",{type:"text",value:this.props.location,id:"linkAddress",readOnly:!0}),o.createElement("p",{className:"link-sharing-module--linkCopyButton--0138f",onClick:this.state.linkCopied?function(){}:function(){return e.copyLink()},title:"Copy this page's link"},this.state.linkCopied?o.createElement(v.Z,{color:"limegreen",size:25}):o.createElement(_.Z,{size:20,color:"white"})))))},r.componentWillUnmount=function(){clearTimeout(this.state.timer)},t}(o.Component),T=y},8610:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(1721),o=r(7294),i=r(5739),l=r(7361),a=r.n(l),c=r(2851),s=r(4129),u=r(1919),E=r(4911),p=r(2717),d=r(5697),f=r.n(d);function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},O.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var L=(0,o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,a=m(e,["color","size"]);return o.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),o.createElement("polyline",{points:"18 15 12 9 6 15"}))}));L.propTypes={color:f().string,size:f().oneOfType([f().string,f().number])},L.displayName="ChevronUp";var S=L,h=r(7434),v="episode-module--body--0084b",_="episode-module--expandTranscript--3f110",y="episode-module--expandTranscriptParent--86a71",T="episode-module--subtitle--e94c9",C=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call(this,...n)||this).state={transcriptVisible:!1},t.toggleTranscript=function(){t.setState({transcriptVisible:!t.state.transcriptVisible})},t}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this,t=[o.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8",key:"twitter-widget"}),o.createElement("div",{id:"fb-root",key:"fb-root"}),o.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0",nonce:"9bOR49xF",key:"facebook-widget"})],r=a()(this.props,"data.contentfulPodcast");return o.createElement(c.Z,{location:this.props.location},o.createElement("div",{className:"white-background"},o.createElement(i.Z,{title:r.episodeName,metaType:"article",childElements:t,description:r.shortDescription.shortDescription,doNotCrawl:!0}),o.createElement("div",{className:"wrapper"},o.createElement(u.Z,{text:"Browse all episodes",link:"/podcasts"}),o.createElement("h1",{className:"episode-module--title--2dd59"},"Episode "+r.episodeNumber+": "+r.episodeName),o.createElement("p",{className:"episode-module--publishDate--23467"},r.publishDate),o.createElement("div",{className:"richText episode-module--bodyParent--ecfa1"},o.createElement("div",{className:v},null!=r.richDescription?(0,s.h)(JSON.parse(r.richDescription.raw)):o.createElement("p",null,"Error: Episode description not found."))),o.createElement("h3",{className:T},"Listen Now"),o.createElement(p.Z,{data:r.spotifyEpisode}),o.createElement("h3",{className:T},"Resource Links and Show Notes"),o.createElement("div",{className:"richText"},o.createElement("div",{className:v},null!=r.richTextResources?(0,s.h)(JSON.parse(r.richTextResources.raw)):o.createElement("p",null,"Error: Episode description not found."))),o.createElement(E.Z,{location:"https://blanketsforto.ca/podcasts/beyond-the-blankets/"+r.slug}),r.showTranscript?o.createElement(o.Fragment,null,o.createElement("h3",{className:T},"Transcript"),this.state.transcriptVisible&&o.createElement("div",{className:y},o.createElement("div",{className:_,onClick:function(){return e.toggleTranscript()}},o.createElement("p",null,"Hide transcript"),o.createElement(S,null))),o.createElement("div",{className:"richText "+(this.state.transcriptVisible?"":"episode-module--transcriptInvisible--75612")},o.createElement("div",{className:v},null!=r.richTextTranscript?(0,s.h)(JSON.parse(r.richTextTranscript.raw)):o.createElement("p",null,"Error: Episode description not found."))),o.createElement("div",{className:y},o.createElement("div",{className:_,onClick:function(){return e.toggleTranscript()}},o.createElement("p",null,this.state.transcriptVisible?"Hide transcript":"Read more"),this.state.transcriptVisible?o.createElement(S,null):o.createElement(h.Z,null)))):null,o.createElement(u.Z,{text:"Browse all episodes",link:"/podcasts"}))))},t}(o.Component),N=C},6445:function(e,t,r){var n=r(7294),o=r(5697),i=r.n(o);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,c=void 0===i?24:i,s=a(e,["color","size"]);return n.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("polyline",{points:"20 6 9 17 4 12"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Check",t.Z=c},2528:function(e,t,r){var n=r(7294),o=r(5697),i=r.n(o);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,c=void 0===i?24:i,s=a(e,["color","size"]);return n.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("polyline",{points:"15 18 9 12 15 6"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="ChevronLeft",t.Z=c},9737:function(e,t,r){var n=r(7294),o=r(5697),i=r.n(o);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,c=void 0===i?24:i,s=a(e,["color","size"]);return n.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),n.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Copy",t.Z=c}}]);
//# sourceMappingURL=component---src-templates-episode-js-5bfa4b168b8b710a9c63.js.map