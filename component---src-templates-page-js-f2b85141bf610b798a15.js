(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"D1b+":function(e,t,n){e.exports={updates:"article-preview-module--updates--2tWvO",previewParent:"article-preview-module--previewParent--zTD6v",preview:"article-preview-module--preview--35oKv",previewText:"article-preview-module--previewText--2t-lu",previewImage:"article-preview-module--previewImage--18UBZ",alink:"article-preview-module--alink--3Zy_j",previewTitle:"article-preview-module--previewTitle--dtVfR",previewDescription:"article-preview-module--previewDescription--andbH",previewPublishDate:"article-preview-module--previewPublishDate--1_Kqg",tag:"article-preview-module--tag--1jiS7"}},IFRj:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.left,a=t.right,r=t.up,o=t.down,i=t.top,l=t.bottom,s=t.mirror,c=t.opposite,u=(n?1:0)|(a?2:0)|(i||o?4:0)|(l||r?8:0)|(s?16:0)|(c?32:0)|(e?64:0);if(p.hasOwnProperty(u))return p[u];if(!s!=!(e&&c)){var m=[a,n,l,i,o,r];n=m[0],a=m[1],i=m[2],l=m[3],r=m[4],o=m[5]}var f,v=n||a,h=i||l||r||o,b=void 0,w=void 0,k=void 0,g=void 0,y=void 0,E=void 0,x=void 0,B=void 0,N=void 0,C=void 0,T=void 0,S=void 0,I=void 0;return e?(k=v?(a?"-":"")+"20px":0,g=h?(r||l?"":"-")+"10px":"0",y=(o||i?"":"-")+"20px",S=v?(n?"-":"")+"2000px":"0",I=h?(o||i?"-":"")+"2000px":"0"):(b=v?(n?"-":"")+"3000px":"0",w=h?(o||i?"-":"")+"3000px":"0",E=v?(a?"-":"")+"25px":"0",x=h?(r||l?"-":"")+"25px":"0",B=v?(n?"-":"")+"10px":"0",N=h?(o||i?"-":"")+"10px":"0",C=v?(a?"-":"")+"5px":"0",T=h?(r||l?"-":"")+"5px":"0"),f=v||h?e?"\n        20% {\n          transform: translate3d("+k+", "+g+", 0);\n          }\n        "+(h?"40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, "+y+", 0);\n          }":"")+"\n          to {\n            opacity: 0;\n            transform: translate3d("+S+", "+I+", 0);\n        }\n      ":"from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d("+b+", "+w+", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d("+E+", "+x+", 0);\n      }\n      75% {\n        transform: translate3d("+B+", "+N+", 0);\n      }\n      90% {\n        transform: translate3d("+C+", "+T+", 0);\n      }\n      to {\n        transform: none;\n      }":e?"20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }":"from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }",p[u]=(0,d.animation)(f),p[u]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,n=(e.out,e.forever),o=e.timeout,i=e.duration,l=void 0===i?d.defaults.duration:i,s=e.delay,u=void 0===s?d.defaults.delay:s,p=e.count,m=void 0===p?d.defaults.count:p,f=a(e,["children","out","forever","timeout","duration","delay","count"]),v={make:r,duration:void 0===o?l:o,delay:u,forever:n,count:m,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,v,v,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,l=n("17x9"),s=n("eH+L"),c=(i=s)&&i.__esModule?i:{default:i},d=n("ar19"),u={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},p={};o.propTypes=u,t.default=o,e.exports=t.default},JM9Q:function(e,t,n){"use strict";var a=n("ZS3K"),r=n("KaJK");a({target:"String",proto:!0,forced:n("Wvaq")("link")},{link:function(e){return r(this,"a","href",e)}})},L2L3:function(e,t,n){e.exports={title:"blog-post-module--title--taf5a",horizontalLine:"blog-post-module--horizontalLine--20qcL",publishDate:"blog-post-module--publishDate--ywUQM",browseAllButton:"blog-post-module--browseAllButton--3YqB5",links:"blog-post-module--links--3hIfu"}},QkGs:function(e,t,n){e.exports={whiteButton:"styled-button-module--whiteButton--LbBn9",primaryButton:"styled-button-module--primaryButton--33jVM",links:"styled-button-module--links--2A7r_"}},aWpR:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),i=n("9eSz"),l=n.n(i),s=n("D1b+"),c=n.n(s),d=(n("tANy"),n("17x9")),u=n.n(d),p=n("/eHF"),m=n.n(p),f=n("IFRj"),v=n.n(f),h=n("wBlv"),b=function(e){var t=e.article;return r.a.createElement("a",{onClick:function(){return Object(o.d)("/blog/"+t.slug)},className:c.a.alink,key:t.title},r.a.createElement("div",{className:c.a.preview},r.a.createElement("div",{className:c.a.previewImage},null!=t.imagePreview?r.a.createElement(l.a,{fluid:t.imagePreview.fluid,alt:t.imagePreview.description}):null),r.a.createElement("div",{className:c.a.previewText},r.a.createElement("h3",{className:c.a.previewTitle},t.title),r.a.createElement("small",{className:c.a.previewPublishDate},t.publishDate))))},w=function(e,t){var n=0;return r.a.createElement("div",{className:c.a.updates},r.a.createElement(v.a,{left:!0},r.a.createElement("h2",null,"Keep updated with our latest events")),r.a.createElement(m.a,null,r.a.createElement("div",{className:c.a.previewParent},e.map((function(e,a){return e.node.slug===t||n>=3?null:(o=e,n++,r.a.createElement(b,{article:o.node}));var o})))),r.a.createElement(m.a,{delay:500},r.a.createElement(h.a,{buttonText:"Browse all updates",link:"/blog"})))},k=function(e){var t=e.excludeSlug;return r.a.createElement(o.b,{query:"3882140423",render:function(e){return w(e.allContentfulBlogPost.edges,t)}})};k.propTypes={excludeSlug:u.a.string},k.defaultProps={excludeSlug:""};t.a=k},ef1B:function(e,t,n){"use strict";n("JM9Q");var a=n("VbXa"),r=n.n(a),o=n("q1tI"),i=n.n(o),l=n("17x9"),s=n.n(l),c=n("ldhG"),d=n.n(c),u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={linkCopied:!1,timer:-1},t.copyLink=function(){if(!t.state.linkCopied){var e=document.getElementById("linkAddress");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),t.setState({linkCopied:!0},(function(){var e=setTimeout((function(){t.setState({linkCopied:!1,timer:e})}),3e3)}))}},t}r()(t,e);var n=t.prototype;return n.render=function(){var e=this;return i.a.createElement("div",{className:d.a.linkContainer},i.a.createElement("div",{className:d.a.socials},i.a.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-size":"large","data-related":"blanketsforto","data-show-count":"false"},"Tweet"),i.a.createElement("div",{id:"fb-root"}),",",i.a.createElement("script",{async:!0,defer:!0,crossOrigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0",nonce:"9bOR49xF"}),i.a.createElement("div",{className:"fb-like","data-href":this.props.location,"data-width":"","data-layout":"button","data-action":"like","data-size":"large","data-share":"false"}),i.a.createElement("div",{className:"fb-share-button","data-href":this.props.location,"data-layout":"button","data-size":"large"},i.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.props.location),target:"_blank",alt:"Share on Facebook",className:"fb-xfbml-parse-ignore"},"Share"))),i.a.createElement("div",{className:d.a.link},i.a.createElement("div",{className:d.a.linkField},i.a.createElement("input",{style:{width:this.props.location.length+"ch"},type:"text",value:this.props.location,id:"linkAddress",readOnly:!0}),i.a.createElement("button",{className:this.state.linkCopied?d.a.linkFieldButtonClicked:d.a.linkFieldButtonNormal,onClick:function(){return e.copyLink()}},this.state.linkCopied?"Copied!":"Copy URL"))))},n.componentWillUnmount=function(){clearTimeout(this.state.timer)},t}(i.a.Component);u.propTypes={location:s.a.string.isRequired},t.a=u},ldhG:function(e,t,n){e.exports={linkContainer:"link-sharing-module--linkContainer--3k-_h",socials:"link-sharing-module--socials--1eBtp",linkField:"link-sharing-module--linkField--37aoQ",linkFieldButtonNormal:"link-sharing-module--linkFieldButtonNormal---4oGI",linkFieldButtonClicked:"link-sharing-module--linkFieldButtonClicked--3I7vL",link:"link-sharing-module--link--30K-w"}},sweJ:function(e,t,n){"use strict";n.r(t);var a=n("VbXa"),r=n.n(a),o=n("q1tI"),i=n.n(o),l=n("EYWl"),s=n("mwIZ"),c=n.n(s),d=n("Bl7J"),u=n("aWpR"),p=n("ef1B"),m=n("vbKG"),f=n("R8uD"),v=n("L2L3"),h=n.n(v),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=c()(this.props,"data.contentfulPage"),n=(c()(this,"props.data.allContentfulBlogPost.edges"),{renderNode:(e={},e[m.BLOCKS.EMBEDDED_ASSET]=function(e){var t=e.data.target.fields;return i.a.createElement("img",{src:t.file["en-US"].url,style:{width:t.file["en-US"].details.image.width},alt:t.description})},e)}),a=[i.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),i.a.createElement("div",{id:"fb-root"}),i.a.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0",nonce:"9bOR49xF"})];return i.a.createElement(d.a,{location:this.props.location},i.a.createElement("div",{className:"white-background"},i.a.createElement(l.a,{title:t.title,metaType:"article",description:t.description.childMarkdownRemark.rawMarkdownBody,childElements:a,doNotCrawl:!t.enableSearchCrawling}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:h.a.title},t.title),i.a.createElement("div",{className:"richText"},null!=t.richTextBody?Object(f.documentToReactComponents)(t.richTextBody.json,n):i.a.createElement("p",null,"Error: Article not found.")),i.a.createElement(p.a,{location:"https://blanketsforto.ca/blog/"+t.slug}),i.a.createElement("hr",{className:h.a.horizontalLine}),i.a.createElement(u.a,{excludeSlug:t.slug}))))},t}(i.a.Component);t.default=b},wBlv:function(e,t,n){"use strict";n("JM9Q");var a=n("q1tI"),r=n.n(a),o=(n("Wbzz"),n("17x9")),i=n.n(o),l=n("QkGs"),s=n.n(l),c=function(e){var t=e.buttonText,n=e.link,a=e.isWhite,o=e.openInNewTab;return r.a.createElement("a",{href:n,className:a?s.a.whiteButton:s.a.primaryButton,target:o?"_blank":"",rel:"noopener noreferrer"},t)};c.propTypes={buttonText:i.a.string.isRequired,link:i.a.string.isRequired,isWhite:i.a.bool,openInNewTab:i.a.bool},c.defaultProps={isWhite:!1,openInNewTab:!1},t.a=c}}]);
//# sourceMappingURL=component---src-templates-page-js-f2b85141bf610b798a15.js.map