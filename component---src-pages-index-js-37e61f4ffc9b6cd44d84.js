(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1bYO":function(e,t,a){e.exports={title:"index-module--title--286qy",backgroundImage:"index-module--backgroundImage--1kN2-",description:"index-module--description--2FQj_",updates:"index-module--updates--2S-yv",contactBox:"index-module--contactBox--3o11v",contactBoxSide:"index-module--contactBoxSide--2N1is",btn:"index-module--btn--2q5In"}},"D1b+":function(e,t,a){e.exports={previewTitle:"article-preview-module--previewTitle--dtVfR",preview:"article-preview-module--preview--35oKv",tag:"article-preview-module--tag--1jiS7"}},GeE8:function(e,t,a){e.exports=a.p+"static/skyline-3ed34978ba224a565ac046e4ecb5ffe9.jpg"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("VbXa"),l=a.n(n),i=a("q1tI"),o=a.n(i),r=a("9eSz"),c=a.n(r),s=a("GeE8"),m=a.n(s),u=(a("Wbzz"),a("mwIZ")),d=a.n(u),p=(a("qhky"),a("Bl7J")),g=a("aWpR"),E=a("1bYO"),b=a.n(E),v=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){d()(this,"props.data.site.siteMetadata.title");var e=d()(this,"props.data.allContentfulBlogPost.edges"),t=d()(this,"props.data.allContentfulOrganizationInformation.edges");return o.a.createElement(p.a,{location:this.props.location},o.a.createElement("div",{className:"white-background"},o.a.createElement("div",{className:b.a.title},o.a.createElement(c.a,{className:b.a.backgroundImage,fluid:t[0].node.frontPageImage.fluid}),o.a.createElement("h1",null,"Blankets for Toronto")),o.a.createElement("div",{className:b.a.description},o.a.createElement("h2",null,"Our Organization"),o.a.createElement("p",null,t[0].node.childContentfulOrganizationInformationOrganizationFrontBlurbTextNode.organizationFrontBlurb)),o.a.createElement("div",{className:b.a.updates},o.a.createElement("h2",null,"News and Updates"),o.a.createElement("ul",{className:"article-list"},e.map((function(e){var t=e.node;return o.a.createElement("li",{key:t.slug},o.a.createElement(g.a,{article:t}))})))),o.a.createElement("div",{className:b.a.contactBox},o.a.createElement("div",{className:b.a.contactBoxSide},o.a.createElement("img",{className:b.a.backgroundImage,src:m.a}),o.a.createElement("div",null,o.a.createElement("h2",null,"Join Us"),o.a.createElement("p",null,"Keep in touch with our organization to join the community and stay updated!"),o.a.createElement("form",{action:"./contact/"},o.a.createElement("button",{className:b.a.btn,type:"submit"},"Volunteering")))),o.a.createElement("div",{className:b.a.contactBoxSide},o.a.createElement("img",{className:b.a.backgroundImage,src:m.a}),o.a.createElement("div",null,o.a.createElement("h2",null,"Volunteering"),o.a.createElement("p",null,"Volunteering is a great way to contribute to a great cause!"),o.a.createElement("form",{action:"./positions/"},o.a.createElement("button",{className:b.a.btn,type:"submit"},"Volunteering")))))))},t}(o.a.Component);t.default=v},aWpR:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("Wbzz"),o=(a("9eSz"),a("D1b+")),r=a.n(o);t.a=function(e){var t=e.article;return l.a.createElement("div",{className:r.a.preview},l.a.createElement("h3",{className:r.a.previewTitle},l.a.createElement(i.a,{to:"/blog/"+t.slug},t.title)),l.a.createElement("small",null,t.publishDate),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html},style:{color:"black"}}),t.tags&&t.tags.map((function(e){return l.a.createElement("p",{className:r.a.tag,key:e},e)})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-37e61f4ffc9b6cd44d84.js.map