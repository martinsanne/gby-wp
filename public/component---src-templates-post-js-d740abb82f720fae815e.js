(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{208:function(e,t,a){"use strict";a.r(t);a(31),a(32),a(14),a(52);var s=a(0),r=a.n(s),n=a(236),c=(a(24),a(209)),o=a(225),l=function(e){var t=e.post,a=e.posts,s=t.title,n=t.wordpress_id,l=t.content,i=t.featured_image,m=t.date,d=t.excerpt;return r.a.createElement("article",{className:"Post"},s&&r.a.createElement("header",{className:"Post__header"},r.a.createElement("h1",{className:"Post__title"},r.a.createElement(c.f,{content:s})),m&&r.a.createElement("p",{className:"Post__date"},r.a.createElement(c.m,{date:m})),d&&r.a.createElement("div",{className:"Post__lead"},r.a.createElement(c.f,{content:d}))),i&&r.a.createElement(c.d,Object.assign({className:"Post__featured-image"},i,{showCaption:!0})),r.a.createElement("div",{className:"Post__content editor"},r.a.createElement(c.n,null,r.a.createElement(c.f,{content:l}))),r.a.createElement("footer",{className:"Post__footer"},r.a.createElement("div",{className:"NewsCards NewsCards--footer"},a&&a.filter(function(e){return e.wordpress_id!==n}).slice(0,4).map(function(e){return r.a.createElement(o.a,{key:"NewsCard-"+e.wordpress_id,post:e})}))))};a.d(t,"pageQuery",function(){return i});t.default=function(e){var t=e.data,a=e.pageContext,s=e.translations,o=(function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a])}(e,["data","pageContext","translations"]),t.wordpressPost),i=t.allWordpressPost.edges.map(function(e){return e.node}),m=a.locale;return r.a.createElement(n.a,{translations:s,locale:m,options:t.wordpressHeyAcfoptions,settings:t.wordpressHeySettings},r.a.createElement(c.o,{data:o}),r.a.createElement(l,{post:o,posts:i}))};var i="3719238618"},225:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(24),a(213);var s=a(0),r=a.n(s),n=a(211),c=a(209);var o=function(e){var t,a;function s(){return e.apply(this,arguments)||this}return a=e,(t=s).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,s.prototype.render=function(){var e=this.props,t=e.post,a=e.i;return r.a.createElement(n.a,{to:t.link,className:"NewsCards__item"},r.a.createElement(c.c,null,t.featured_image?r.a.createElement("div",{className:"NewsCards__image"},r.a.createElement(c.k,{i:a},r.a.createElement(c.e,Object.assign({},t.featured_image,{className:"aspect-sm--landscape",maxWidth:1e3})))):r.a.createElement("div",{className:"NewsCards__placeholder aspect aspect-sm--landscape"}),r.a.createElement("div",{className:"NewsCards__content"},r.a.createElement("small",null,r.a.createElement(c.m,{className:"NewsCards__date",date:t.date})),r.a.createElement("h3",{className:"NewsCards__title"},r.a.createElement(c.f,{stripTags:!0,content:t.title})))))},s}(s.Component)}}]);
//# sourceMappingURL=component---src-templates-post-js-d740abb82f720fae815e.js.map