(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{208:function(e,t,a){"use strict";a.r(t);a(31),a(32),a(14),a(52);var n=a(0),s=a.n(n),r=a(236),c=(a(24),a(209)),o=(a(225),function(e){var t=e.post,a=(e.posts,t.title),n=(t.wordpress_id,t.content),r=t.featured_image,o=t.date,l=t.excerpt;return s.a.createElement("article",{className:"Post"},a&&s.a.createElement("header",{className:"Post__header"},s.a.createElement("h1",{className:"Post__title"},s.a.createElement(c.f,{content:a})),o&&s.a.createElement("p",{className:"Post__date"},s.a.createElement(c.m,{date:o})),l&&s.a.createElement("div",{className:"Post__lead"},s.a.createElement(c.f,{content:l}))),r&&s.a.createElement(c.d,Object.assign({className:"Post__featured-image"},r,{showCaption:!0})),s.a.createElement("div",{className:"Post__content editor"},s.a.createElement(c.n,null,s.a.createElement(c.f,{content:n}))))});a.d(t,"pageQuery",function(){return l});t.default=function(e){var t=e.data,a=e.pageContext,n=e.translations,l=(function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a])}(e,["data","pageContext","translations"]),t.wordpressPost),m=t.allWordpressPost.edges.map(function(e){return e.node}),i=a.locale;return s.a.createElement(r.a,{translations:n,locale:i,options:t.wordpressHeyAcfoptions,settings:t.wordpressHeySettings},s.a.createElement(c.o,{data:l}),s.a.createElement(o,{post:l,posts:m}))};var l="3719238618"},225:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(24),a(213);var n=a(0),s=a.n(n),r=a(211),c=a(209);var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.post,a=e.i;return s.a.createElement(r.a,{to:t.link,className:"NewsCards__item"},s.a.createElement(c.c,null,t.featured_image?s.a.createElement("div",{className:"NewsCards__image"},s.a.createElement(c.k,{i:a},s.a.createElement(c.e,Object.assign({},t.featured_image,{className:"aspect-sm--landscape",maxWidth:1e3})))):s.a.createElement("div",{className:"NewsCards__placeholder aspect aspect-sm--landscape"}),s.a.createElement("div",{className:"NewsCards__content"},s.a.createElement("small",null,s.a.createElement(c.m,{className:"NewsCards__date",date:t.date})),s.a.createElement("h3",{className:"NewsCards__title"},s.a.createElement(c.f,{stripTags:!0,content:t.title})))))},n}(n.Component)}}]);
//# sourceMappingURL=component---src-templates-post-js-7b6cfec0ba2541cbce6a.js.map