(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{201:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return c});var n=t(0),r=t.n(n),l=t(241),s=t(236);a.default=function(e){var a=e.data,t=e.pageContext,n=a.wordpressPage,c=t.locale,o=a.allWordpressPost.edges.map(function(e){return e.node});return r.a.createElement(s.a,{locale:c,translations:n.translations,options:a.wordpressHeyAcfoptions,settings:a.wordpressHeySettings},r.a.createElement(l.a,{posts:o,page:n}))};var c="339204195"},225:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(24),t(213);var n=t(0),r=t.n(n),l=t(211),s=t(209);var c=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props,a=e.post,t=e.i;return r.a.createElement(l.a,{to:a.link,className:"NewsCards__item"},r.a.createElement(s.c,null,a.featured_image?r.a.createElement("div",{className:"NewsCards__image"},r.a.createElement(s.k,{i:t},r.a.createElement(s.e,Object.assign({},a.featured_image,{className:"aspect-sm--landscape",maxWidth:1e3})))):r.a.createElement("div",{className:"NewsCards__placeholder aspect aspect-sm--landscape"}),r.a.createElement("div",{className:"NewsCards__content"},r.a.createElement("small",null,r.a.createElement(s.m,{className:"NewsCards__date",date:a.date})),r.a.createElement("h3",{className:"NewsCards__title"},r.a.createElement(s.f,{stripTags:!0,content:a.title})))))},n}(n.Component)},237:function(e){e.exports={data:{allWordpressHeyCategories:{edges:[{node:{name:"News",slug:"news",term_id:2,locale:"en",count:885}},{node:{name:"Environment",slug:"environment",term_id:661,locale:"en",count:3}},{node:{name:"Nyhet",slug:"nyhet",term_id:1,locale:"nb",count:1861}},{node:{name:"Info",slug:"info",term_id:13,locale:"nb",count:10}},{node:{name:"Miljø",slug:"miljo",term_id:14,locale:"nb",count:110}},{node:{name:"Artist",slug:"artist",term_id:388,locale:"nb",count:49}}]}}}},241:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(209),s=t(225),c=(t(41),t(213),t(237)),o=t(211),i=t(229),m=t(250),u=t(212),d=t(210),g=function(e){var a=e.year,t=e.locale,n=e.page;return r.a.createElement(u.b,{id:"blog.allYears",defaultMessage:"Archive"},function(e){return r.a.createElement("select",{className:Object(d.a)({YearSelect:!0,"YearSelect--active":!!a}),value:a,onChange:function(e){e.preventDefault(),e.target.value?Object(o.c)(Object(i.getArchiveLink)(t,e.target.value)):Object(o.c)(n.link)}},r.a.createElement("option",{value:""},e),Object(m.a)().map(function(e){return r.a.createElement("option",{key:"YearOption-"+e,value:e},e)}))})},p=function(e){var a=e.year,t=e.page,n=c.data;return r.a.createElement(l.a,null,function(e){var l=e.state.locale,s=n.allWordpressHeyCategories.edges.filter(function(e){return e.node.locale===l}).map(function(e){return e.node});return r.a.createElement("ul",{className:"PostCategoryNav"},r.a.createElement("li",{className:"PostCategoryNav__item"},r.a.createElement(o.a,{className:"PostCategoryNav__link",activeClassName:"PostCategoryNav__link--active",to:t.link},r.a.createElement(u.b,{id:"categories.all",defaultMessage:"Latest"}))),s.map(function(e){return r.a.createElement("li",{key:"CategoryLink-"+e.term_id,className:"PostCategoryNav__item"},r.a.createElement(o.a,{className:"PostCategoryNav__link",activeClassName:"PostCategoryNav__link--active",to:Object(i.getCategoryLink)(e.locale,e.slug)},e.name))}),r.a.createElement("li",{className:"PostCategoryNav__item"},r.a.createElement(g,{year:a,locale:l,page:t})))})};a.a=function(e){var a=e.posts,t=e.page,n=e.year,c=t.title,o=t.content;return r.a.createElement("article",{className:"BlogPage"},r.a.createElement("header",{className:"BlogPage__header"},r.a.createElement("h1",{className:"BlogPage__title"},r.a.createElement(l.f,{content:c})),o&&r.a.createElement("div",{className:"BlogPage__intro"},r.a.createElement(l.f,{content:o})),r.a.createElement("div",{className:"BlogPage__nav"},r.a.createElement(p,{year:n,page:t}))),r.a.createElement("div",{className:"BlogPage__content"},r.a.createElement("div",{className:"NewsCards"},a.map(function(e,a){return r.a.createElement(s.a,{key:"NewsCard-"+e.wordpress_id,post:e,i:a})}))))}}}]);
//# sourceMappingURL=component---src-templates-category-js-56386acc0deb81be1d1c.js.map