"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[4013],{13008:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),n=a(86010),r=a(39960);const s="tag_zVej",i="tagRegular_sFm0",c="tagWithCount_h2kH";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,m?c:i)},a,m&&l.createElement("span",null,m))}},61172:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(67294),n=a(86010),r=a(65924),s=a(87524),i=a(39960),c=a(95999),m=a(46571);const o="sidebar_brwN",u="sidebarItemTitle_r4Q1",g="sidebarItemList_QwSx",p="sidebarItem_lnhn",d="sidebarItemLink_yNGZ",b="sidebarItemLinkActive_oSRm",E="backButton_MCHS";function h(e){let{sidebar:t}=e;return l.createElement(m.E.aside,{className:"col col--2 overflow-hidden",initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:.3}},l.createElement("nav",{className:(0,n.Z)(o,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:E,onClick:()=>{window.history.back()}},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},l.createElement("path",{fill:"currentColor",d:"M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12H8Z"}))),l.createElement(i.Z,{href:"/blog",className:(0,n.Z)(u,"margin-bottom--sm")},t.title),l.createElement("ul",{className:(0,n.Z)(g,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:p},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:b},e.title)))))))}var v=a(13102);function k(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function N(e){return l.createElement(v.Zo,{component:k,props:e})}function _(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(N,{sidebar:t}):l.createElement(h,{sidebar:t}):null}function f(e){const{sidebar:t,toc:a,children:s,...i}=e,c=t&&t.items.length>0;return l.createElement(r.Z,i,l.createElement("div",{className:"container-wrapper"},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(_,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--8 overflow-hidden":c,"col--12":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a)))))}},23207:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(67294),n=a(86010),r=a(95999);var s=a(1944),i=a(35281),c=a(61172),m=a(13008);const o="tag_Nnez";function u(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(m.Z,e))))),l.createElement("hr",null))}function g(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(u,{key:e.letter,letterEntry:e}))))}var p=a(90197);function d(e){let{tags:t,sidebar:a}=e;const m=(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return l.createElement(s.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogTagsListPage)},l.createElement(s.d,{title:m}),l.createElement(p.Z,{tag:"blog_tags_list"}),l.createElement(c.Z,{sidebar:a},l.createElement("h1",null,m),l.createElement(g,{tags:t})))}}}]);