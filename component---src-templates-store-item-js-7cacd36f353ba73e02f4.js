(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"3jNO":function(e,t,r){var n=r("ehR5"),a=r("8mzz"),o=r("17+C"),i=r("WD+B"),c=r("86Yh"),s=[].push,l=function(e){var t=1==e,r=2==e,l=3==e,u=4==e,m=6==e,f=7==e,p=5==e||m;return function(d,h,v,g){for(var y,w,b=o(d),O=a(b),E=n(h,v,3),j=i(O.length),x=0,k=g||c,C=t?k(d,j):r||f?k(d,0):void 0;j>x;x++)if((p||x in O)&&(w=E(y=O[x],x,b),e))if(t)C[x]=w;else if(w)switch(e){case 3:return!0;case 5:return y;case 6:return x;case 2:s.call(C,y)}else switch(e){case 4:return!1;case 7:s.call(C,y)}return m?-1:l||u?u:C}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},"48MS":function(e,t,r){var n=r("bmrq");e.exports=Array.isArray||function(e){return"Array"==n(e)}},"86Yh":function(e,t,r){var n=r("ckLD"),a=r("48MS"),o=r("QD2z")("species");e.exports=function(e,t){var r;return a(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!a(r.prototype)?n(r)&&null===(r=r[o])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"8jhE":function(e,t,r){"use strict";r.r(t);r("VSsl"),r("Z7m2");var n=r("VbXa"),a=r.n(n),o=r("q1tI"),i=r.n(o),c=r("Bl7J"),s=r("mwIZ"),l=r.n(s),u=r("EYWl"),m=r("9eSz"),f=r.n(m),p=r("R8uD"),d=r("xjlt"),h=r.n(d),v=r("CwS1"),g=r("EAKA"),y=r("I6fM");function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var O=Object(o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,c=b(e,["color","size"]);return i.a.createElement("svg",w({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.a.createElement("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),i.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),i.a.createElement("path",{d:"M16 10a4 4 0 0 1-8 0"}))}));O.displayName="ShoppingBag";var E=O;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var k=Object(o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,c=x(e,["color","size"]);return i.a.createElement("svg",j({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.a.createElement("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),i.a.createElement("line",{x1:"9",y1:"9",x2:"15",y2:"15"}))}));k.displayName="XCircle";var C=k,I=r("WjWU"),N=r("NJ3/"),S=r("qZtU"),P=r("9ONQ"),A=r("uAwv"),z=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).item=l()(t.props,"data.contentfulMerchItem"),t.state={cartItems:[],currentImage:0,numImages:t.item.images?t.item.images.length:0,cartCount:0,cookies:void 0},t.getCurrentItems=function(){var e=t.state.cartItems.find((function(e){return e.slug===t.item.slug}));return void 0!==typeof e?e.count:0},t.onNext=function(){var e=(t.state.currentImage+1)%t.state.numImages;t.setState({currentImage:e})},t.onPrev=function(){var e=t.state.currentImage-1;e<0&&(e=t.state.numImages-1),t.setState({currentImage:e})},t.selectImage=function(e){t.setState({currentImage:e})},t.addToCart=function(){var e=t.state.cartItems,r=e.find((function(e){return e.slug===t.item.slug}));void 0===r?(e.push({slug:t.item.slug,count:1}),t.state.cookies.set("cart-items",e,{path:"/"}),t.setState({cartCount:1,cartItems:e})):(r.count+=1,t.state.cookies.set("cart-items",e,{path:"/"}),t.setState({cartCount:r.count,cartItems:e}))},t.plusCart=function(){var e=t.state.cartItems,r=e.find((function(e){return e.slug===t.item.slug}));void 0!==r&&(r.count+=1,t.state.cookies.set("cart-items",e,{path:"/"}),t.setState({cartCount:r.count,cartItems:e}))},t.minusCart=function(){var e=t.state.cartItems,r=e.find((function(e){return e.slug===t.item.slug}));void 0!==r&&(r.count-=1,t.state.cookies.set("cart-items",e,{path:"/"}),t.setState({cartCount:r.count,cartItems:e}))},t}a()(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this,t=void 0===typeof window?new P.a(req.headers.cookie):new P.a,r=t.get("cart-items"),n=r.find((function(t){return t.slug===e.item.slug}));this.setState({cookies:t,cartItems:r,cartCount:void 0===n?0:n.count})},r.render=function(){var e=this;return i.a.createElement(c.a,{location:this.props.location},i.a.createElement("div",{className:"white-background"},i.a.createElement(u.a,{title:"Shop "+this.item.itemName,description:this.item.itemName+" ($"+this.item.itemPrice.toFixed(2)+") - "+this.item.shortDescription,cannonical:"https://blanketsforto.ca/store",metaImage:this.item.largePreview?this.item.largePreview.file.url:void 0,doNotCrawl:!0}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:h.a.layout},i.a.createElement("div",{className:h.a.preview},i.a.createElement("div",{className:h.a.carousel},this.state.numImages>1&&i.a.createElement(v.a,{className:h.a.leftArrow,onClick:function(){return e.onPrev()}}),this.state.numImages>0&&i.a.createElement("div",{className:h.a.image},i.a.createElement(f.a,{fluid:this.item.images[this.state.currentImage].fluid})),this.state.numImages>1&&i.a.createElement(g.a,{className:h.a.rightArrow,onClick:function(){return e.onNext()}})),i.a.createElement("div",{className:h.a.thumbnailRow},this.item.thumbs&&this.item.thumbs.map((function(t,r){return i.a.createElement("div",{onClick:function(){return e.selectImage(r)},className:r==e.state.currentImage?h.a.selectedThumb:h.a.thumb,key:r},i.a.createElement(f.a,{fluid:t.fluid}))})))),i.a.createElement("div",{className:h.a.information},i.a.createElement("h1",{className:h.a.name},this.item.itemName),i.a.createElement("div",{className:h.a.price},i.a.createElement("p",{className:h.a.priceAmount},"$",this.item.itemPrice.toFixed(2)),i.a.createElement("p",{className:h.a.priceCurrency},"CAD")),i.a.createElement("div",{className:h.a.memberPrice},i.a.createElement(y.a,null),i.a.createElement("p",null,"Members get a discounted price of $",this.item.memberItemPrice.toFixed(2))),i.a.createElement("div",{className:h.a.description},null!=this.item.itemDescription?Object(p.documentToReactComponents)(this.item.itemDescription.json,{renderNode:{}}):null),this.item.isInStock?i.a.createElement("div",{className:h.a.inventory},i.a.createElement(E,{className:h.a.icon_shoppingBag}),i.a.createElement("p",{className:h.a.icon_shoppingBag},"Available in stock.")):i.a.createElement("div",{className:h.a.inventory},i.a.createElement(C,{className:h.a.icon_redx}),i.a.createElement("p",{className:h.a.icon_redx},"This item is out of stock or no longer sold.")),i.a.createElement("div",null,this.item.isInStock?0===this.state.cartCount?i.a.createElement("div",{className:h.a.addToCart,onClick:this.addToCart},i.a.createElement(I.a,{className:h.a.icon_shoppingCart}),i.a.createElement("p",null,"Add to cart")):i.a.createElement("div",{className:h.a.changeCart},i.a.createElement(I.a,{className:h.a.icon_shoppingCart}),i.a.createElement("p",null,"This item is in your cart."),i.a.createElement(N.a,{className:h.a.icon_minus,onClick:this.minusCart}),i.a.createElement("p",null,this.state.cartCount),i.a.createElement(S.a,{className:h.a.icon_plus,onClick:this.plusCart})):null))),i.a.createElement(A.a,{text:"Browse other items",link:"/store"}))))},t}(i.a.Component);t.default=z},CwS1:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,c=e.size,s=void 0===c?24:c,l=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));c.displayName="ChevronLeft",t.a=c},EAKA:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,c=e.size,s=void 0===c?24:c,l=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("polyline",{points:"9 18 15 12 9 6"}))}));c.displayName="ChevronRight",t.a=c},I6fM:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,c=e.size,s=void 0===c?24:c,l=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),a.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));c.displayName="Info",t.a=c},"NJ3/":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,c=e.size,s=void 0===c?24:c,l=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));c.displayName="MinusSquare",t.a=c},VSsl:function(e,t,r){var n=r("IvzW"),a=r("jekk").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/;n&&!("name"in o)&&a(o,"name",{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(e){return""}}})},WjWU:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,c=e.size,s=void 0===c?24:c,l=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("circle",{cx:"9",cy:"21",r:"1"}),a.a.createElement("circle",{cx:"20",cy:"21",r:"1"}),a.a.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))}));c.displayName="ShoppingCart",t.a=c},Z7m2:function(e,t,r){"use strict";var n=r("ZS3K"),a=r("3jNO").find,o=r("uKph"),i=r("xvWs"),c=!0,s=i("find");"find"in[]&&Array(1).find((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!s},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("find")},jOk4:function(e,t,r){e.exports={arrowStyles:"back-arrow-module--arrowStyles--3Z1dG"}},qZtU:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,c=e.size,s=void 0===c?24:c,l=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),a.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));c.displayName="PlusSquare",t.a=c},uAwv:function(e,t,r){"use strict";r("JM9Q");var n=r("q1tI"),a=r.n(n),o=r("jOk4"),i=r.n(o),c=r("CwS1");t.a=function(e){var t=e.text,r=e.link;return a.a.createElement("a",{href:r,className:i.a.arrowStyles},a.a.createElement(c.a,null),t)}},xjlt:function(e,t,r){e.exports={layout:"store-item-module--layout--3OtCs",preview:"store-item-module--preview--1PFBi",information:"store-item-module--information--2eaLT",name:"store-item-module--name--2imhx",carousel:"store-item-module--carousel--2mNnY",leftArrow:"store-item-module--leftArrow--36jWZ",rightArrow:"store-item-module--rightArrow--_Yuvs",image:"store-item-module--image--dCjV_",thumbnailRow:"store-item-module--thumbnailRow--178az",thumb:"store-item-module--thumb--3dETG",selectedThumb:"store-item-module--selectedThumb--2hdHT",price:"store-item-module--price--PZ-xY",priceAmount:"store-item-module--priceAmount--3jiWb",priceCurrency:"store-item-module--priceCurrency--1v0nu",memberPrice:"store-item-module--memberPrice--iTz4m",description:"store-item-module--description--3HhZM",inventory:"store-item-module--inventory--2A8lJ",addToCart:"store-item-module--addToCart--1qNwH",changeCart:"store-item-module--changeCart--2XGhy",icon_shoppingBag:"store-item-module--icon_shoppingBag--1cJ_8",icon_redx:"store-item-module--icon_redx--QbWEW",icon_shoppingCart:"store-item-module--icon_shoppingCart--2ZCRm",icon_minus:"store-item-module--icon_minus--1eUCV",icon_plus:"store-item-module--icon_plus--3mv-7"}}}]);
//# sourceMappingURL=component---src-templates-store-item-js-7cacd36f353ba73e02f4.js.map