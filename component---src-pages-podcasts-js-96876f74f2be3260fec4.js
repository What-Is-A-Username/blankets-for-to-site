"use strict";(self.webpackChunkblankets_for_to_site=self.webpackChunkblankets_for_to_site||[]).push([[253],{4129:function(e,t,n){var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r,l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function E(e,t){return e(t={exports:{}},t.exports),t.exports}var c=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));i(c);c.BLOCKS;var d=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));i(d);d.INLINES;var s=E((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));i(s);var L=E((function(e,t){var n,r=u&&u.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},a=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var o=a(s);t.TOP_LEVEL_BLOCKS=[c.BLOCKS.PARAGRAPH,c.BLOCKS.HEADING_1,c.BLOCKS.HEADING_2,c.BLOCKS.HEADING_3,c.BLOCKS.HEADING_4,c.BLOCKS.HEADING_5,c.BLOCKS.HEADING_6,c.BLOCKS.OL_LIST,c.BLOCKS.UL_LIST,c.BLOCKS.HR,c.BLOCKS.QUOTE,c.BLOCKS.EMBEDDED_ENTRY,c.BLOCKS.EMBEDDED_ASSET,c.BLOCKS.EMBEDDED_RESOURCE,c.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[c.BLOCKS.PARAGRAPH,c.BLOCKS.HEADING_1,c.BLOCKS.HEADING_2,c.BLOCKS.HEADING_3,c.BLOCKS.HEADING_4,c.BLOCKS.HEADING_5,c.BLOCKS.HEADING_6,c.BLOCKS.OL_LIST,c.BLOCKS.UL_LIST,c.BLOCKS.HR,c.BLOCKS.QUOTE,c.BLOCKS.EMBEDDED_ENTRY,c.BLOCKS.EMBEDDED_ASSET,c.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[c.BLOCKS.TABLE,c.BLOCKS.TABLE_ROW,c.BLOCKS.TABLE_CELL,c.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[c.BLOCKS.HR,c.BLOCKS.EMBEDDED_ENTRY,c.BLOCKS.EMBEDDED_ASSET,c.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((n={})[c.BLOCKS.OL_LIST]=[c.BLOCKS.LIST_ITEM],n[c.BLOCKS.UL_LIST]=[c.BLOCKS.LIST_ITEM],n[c.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[c.BLOCKS.QUOTE]=[c.BLOCKS.PARAGRAPH],n[c.BLOCKS.TABLE]=[c.BLOCKS.TABLE_ROW],n[c.BLOCKS.TABLE_ROW]=[c.BLOCKS.TABLE_CELL,c.BLOCKS.TABLE_HEADER_CELL],n[c.BLOCKS.TABLE_CELL]=[c.BLOCKS.PARAGRAPH],n[c.BLOCKS.TABLE_HEADER_CELL]=[c.BLOCKS.PARAGRAPH],n),t.HEADINGS=[c.BLOCKS.HEADING_1,c.BLOCKS.HEADING_2,c.BLOCKS.HEADING_3,c.BLOCKS.HEADING_4,c.BLOCKS.HEADING_5,c.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([c.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[c.BLOCKS.DOCUMENT,c.BLOCKS.PARAGRAPH,c.BLOCKS.HEADING_1,c.BLOCKS.HEADING_2,c.BLOCKS.HEADING_3,c.BLOCKS.HEADING_4,c.BLOCKS.HEADING_5,c.BLOCKS.HEADING_6,c.BLOCKS.OL_LIST,c.BLOCKS.UL_LIST,c.BLOCKS.LIST_ITEM,c.BLOCKS.HR,c.BLOCKS.QUOTE,c.BLOCKS.EMBEDDED_ENTRY,c.BLOCKS.EMBEDDED_ASSET,d.INLINES.HYPERLINK,d.INLINES.ENTRY_HYPERLINK,d.INLINES.ASSET_HYPERLINK,d.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[o.default.BOLD,o.default.CODE,o.default.ITALIC,o.default.UNDERLINE]}));i(L);L.V1_MARKS,L.V1_NODE_TYPES,L.TEXT_CONTAINERS,L.HEADINGS,L.CONTAINERS,L.VOID_BLOCKS,L.TABLE_BLOCKS,L.LIST_ITEM_BLOCKS,L.TOP_LEVEL_BLOCKS;var f=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));i(f);var O=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));i(O);var S=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:c.BLOCKS.DOCUMENT,data:{},content:[{nodeType:c.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));i(S);var _=E((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(d.INLINES,e.nodeType)},t.isBlock=function(e){return n(c.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));i(_);_.isText,_.isBlock,_.isInline;var B=E((function(e,t){var n=u&&u.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=u&&u.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},o=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t},l=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return c.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return d.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return l(s).default}}),a(L,t),a(f,t),a(O,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return l(S).default}});var i=o(_);t.helpers=i}));i(B);var p,T,C=B.helpers,N=(B.EMPTY_DOCUMENT,B.MARKS),I=B.INLINES,D=B.BLOCKS;function m(e,t){return e.map((function(e,n){return r=A(e,t),o=n,a.isValidElement(r)&&null===r.key?a.cloneElement(r,{key:o}):r;var r,o}))}function A(e,t){var n=t.renderNode,r=t.renderMark,a=t.renderText;if(C.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),a?a(e.value):e.value);var l=m(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,l):o.createElement(o.Fragment,null,l)}var K=((p={})[D.DOCUMENT]=function(e,t){return t},p[D.PARAGRAPH]=function(e,t){return o.createElement("p",null,t)},p[D.HEADING_1]=function(e,t){return o.createElement("h1",null,t)},p[D.HEADING_2]=function(e,t){return o.createElement("h2",null,t)},p[D.HEADING_3]=function(e,t){return o.createElement("h3",null,t)},p[D.HEADING_4]=function(e,t){return o.createElement("h4",null,t)},p[D.HEADING_5]=function(e,t){return o.createElement("h5",null,t)},p[D.HEADING_6]=function(e,t){return o.createElement("h6",null,t)},p[D.EMBEDDED_ENTRY]=function(e,t){return o.createElement("div",null,t)},p[D.EMBEDDED_RESOURCE]=function(e,t){return o.createElement("div",null,t)},p[D.UL_LIST]=function(e,t){return o.createElement("ul",null,t)},p[D.OL_LIST]=function(e,t){return o.createElement("ol",null,t)},p[D.LIST_ITEM]=function(e,t){return o.createElement("li",null,t)},p[D.QUOTE]=function(e,t){return o.createElement("blockquote",null,t)},p[D.HR]=function(){return o.createElement("hr",null)},p[D.TABLE]=function(e,t){return o.createElement("table",null,o.createElement("tbody",null,t))},p[D.TABLE_ROW]=function(e,t){return o.createElement("tr",null,t)},p[D.TABLE_HEADER_CELL]=function(e,t){return o.createElement("th",null,t)},p[D.TABLE_CELL]=function(e,t){return o.createElement("td",null,t)},p[I.ASSET_HYPERLINK]=function(e){return R(I.ASSET_HYPERLINK,e)},p[I.ENTRY_HYPERLINK]=function(e){return R(I.ENTRY_HYPERLINK,e)},p[I.EMBEDDED_ENTRY]=function(e){return R(I.EMBEDDED_ENTRY,e)},p[I.HYPERLINK]=function(e,t){return o.createElement("a",{href:e.data.uri},t)},p),y=((T={})[N.BOLD]=function(e){return o.createElement("b",null,e)},T[N.ITALIC]=function(e){return o.createElement("i",null,e)},T[N.UNDERLINE]=function(e){return o.createElement("u",null,e)},T[N.CODE]=function(e){return o.createElement("code",null,e)},T[N.SUPERSCRIPT]=function(e){return o.createElement("sup",null,e)},T[N.SUBSCRIPT]=function(e){return o.createElement("sub",null,e)},T);function R(e,t){return o.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?A(e,{renderNode:l(l({},K),t.renderNode),renderMark:l(l({},y),t.renderMark),renderText:t.renderText}):null}},7227:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(8032),o=n(628),l=function(e){var t=e.itemData,n=t.title,l=t.description,u=t.link,i=t.gatsbyImageData;return r.createElement("div",{className:"square-grid-module--tile--8020e",key:n},r.createElement("div",{className:"square-grid-module--imageOverlay--3c141"},r.createElement(a.G,{image:i,style:{width:"100%",height:"100%"},alt:"Image preview of "+n})),r.createElement("div",{className:"square-grid-module--textBox--48776"},r.createElement("h1",{className:"square-grid-module--titleStyle--b134a"},n,r.createElement(o.Z,null)),r.createElement("p",{className:"square-grid-module--descriptionStyle--28a3e"},l)),r.createElement("a",{className:"square-grid-module--linkStyle--0c9c8",href:u}))},u=function(e){var t=e.content;return r.createElement("div",{className:"square-grid-module--gridContainer--302a8"},t.map((function(e,t){return r.createElement(l,{key:t,itemData:e})})))}},5158:function(e,t,n){var r=n(7294),a=n(3936),o=function(e){var t=e.buttonText,n=e.link,o=e.isWhite,l=e.openInNewTab,u=e.children;return r.createElement("a",{href:n,className:o?a.rY:a.ud,target:l?"_blank":"",rel:"noopener noreferrer"},t,u)};o.defaultProps={isWhite:!1,openInNewTab:!1},t.Z=o},4661:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(1721),a=n(7294),o=n(7361),l=n.n(o),u=n(5739),i=n(2851),E=n(4033),c=n(4160),d=n(4129),s=n(5158),L=function(e){var t=e.podcast,n="/podcasts/beyond-the-blankets/"+t.slug;return a.createElement("div",{onClick:function(){return(0,c.c4)(n)},className:"podcast-card-module--alink--c12cb",key:t.episodeName},a.createElement("div",{className:"podcast-card-module--previewText--91784"},a.createElement("h3",{className:"podcast-card-module--previewTitle--e58d7"},"Episode "+t.episodeNumber+": "+t.episodeName),a.createElement("span",{className:"podcast-card-module--previewPublishDate--87837"},t.publishDate),a.createElement("div",{className:"richText"},void 0!==t.richDescription.raw?(0,d.h)(JSON.parse(t.richDescription.raw)):a.createElement("p",null,"Error: Articles not found."))),a.createElement(s.Z,{buttonText:"Listen now",link:n}))},f=n(7227),O=n(2245),S=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=l()(this,"props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData"),t=l()(this,"props.data.allContentfulPodcast.nodes"),n=[{title:"Browse podcast collaborations",link:"/podcast-collaborations",description:"View podcasts featuring guest appearances of some of our members.",gatsbyImageData:e}];return a.createElement(i.Z,{location:this.props.location},a.createElement(u.Z,{title:"Listen to the Beyond the Blankets podcast",description:"Browse and listen to episodes of Beyond the Blankets, the official Blankets for T.O. podcast."}),a.createElement("div",{className:"white-background"},a.createElement(E.Z,{imgFluid:e,headerTitle:"Beyond the Blankets",headerSubtitle:"Listen to the Beyond the Blankets podcast, the official podcast from Blankets for T.O."}),a.createElement("div",{className:"wrapper"},a.createElement("h1",{className:O.T},"Beyond the Blankets: The Official Podcast by Blankets for T.O."),t.map((function(e,t){return a.createElement(L,{key:t,podcast:e})})),a.createElement("h1",{className:O.T},"Other Podcasts"),a.createElement(f.Z,{content:n}))))},t}(a.Component),_=S},3936:function(e,t,n){n.d(t,{rY:function(){return a},ud:function(){return r}});var r="styled-button-module--primaryButton--0f3e8",a="styled-button-module--whiteButton--08a43"},2245:function(e,t,n){n.d(t,{G:function(){return r},T:function(){return a}});var r="podcasts-module--podcastTitle--0fce6",a="podcasts-module--title--59f73"},628:function(e,t,n){var r=n(7294),a=n(5697),o=n.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=(0,r.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,E=u(e,["color","size"]);return r.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},E),r.createElement("polyline",{points:"9 18 15 12 9 6"}))}));i.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},i.displayName="ChevronRight",t.Z=i}}]);
//# sourceMappingURL=component---src-pages-podcasts-js-96876f74f2be3260fec4.js.map