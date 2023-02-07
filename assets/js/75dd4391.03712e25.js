"use strict";(self.webpackChunkhowldocs=self.webpackChunkhowldocs||[]).push([[9877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,g=h["".concat(s,".").concat(m)]||h[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={slug:"the-road-to-mainnet",title:"The Road to Mainnet",authors:"frey",tags:["beta","testing","mainnet"]},i=void 0,l={permalink:"/blog/the-road-to-mainnet",editUrl:"https://github.com/howlsocial/howldocs/tree/main/docs/blog/2022-09-22-the-road-to-mainnet.md",source:"@site/blog/2022-09-22-the-road-to-mainnet.md",title:"The Road to Mainnet",description:'By far the most common question we get is, "wen mainnet?"',date:"2022-09-22T00:00:00.000Z",formattedDate:"September 22, 2022",tags:[{label:"beta",permalink:"/blog/tags/beta"},{label:"testing",permalink:"/blog/tags/testing"},{label:"mainnet",permalink:"/blog/tags/mainnet"}],readingTime:1.44,hasTruncateMarker:!1,authors:[{name:"the frey",title:"Co-founder",url:"https://github.com/the-frey",imageURL:"https://github.com/the-frey.png",key:"frey"}],frontMatter:{slug:"the-road-to-mainnet",title:"The Road to Mainnet",authors:"frey",tags:["beta","testing","mainnet"]},nextItem:{title:"Public Beta Debrief",permalink:"/blog/public-beta-debrief"}},s={authorsImageUrls:[void 0]},u=[{value:"Pre-launch (September/October)",id:"pre-launch-septemberoctober",level:2},{value:"Post-launch (October/November)",id:"post-launch-octobernovember",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'By far the most common question we get is, "wen mainnet?"'),(0,o.kt)("p",null,'The answer now is the same as it always has been - "when it\'s ready."'),(0,o.kt)("p",null,"We're a small team - there's only three of us, working part time, with no VC backing - so things take time if they're to be done right."),(0,o.kt)("p",null,"However, those of you that have taken part in the public betas will know that we're pretty close now, so we can reveal what's left to get Howl live."),(0,o.kt)("h2",{id:"pre-launch-septemberoctober"},"Pre-launch (September/October)"),(0,o.kt)("p",null,"Before we go live, we have to finish dealing with the bugs discovered on the previous Beta. Then we will run another Beta test as a dry-run for mainnet."),(0,o.kt)("p",null,"Juno's Uni testnet will be restarted on Friday 2022-09-23, so we will start preparing for a second Beta test after that. We hope to have it live in the next 10 days or so."),(0,o.kt)("p",null,"The testing goals of this will be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Checking system integrity"),(0,o.kt)("li",{parentName:"ul"},"Checking bugs are fixed"),(0,o.kt)("li",{parentName:"ul"},"Checking mainnet allocations (including beta drop) are correct"),(0,o.kt)("li",{parentName:"ul"},"New functionality for Howl Pay")),(0,o.kt)("p",null,"Assuming that this works as planned, we will then start putting together the configuration for a mainnet release in the following weeks."),(0,o.kt)("h2",{id:"post-launch-octobernovember"},"Post-launch (October/November)"),(0,o.kt)("p",null,"As soon as we go live, our focus will be on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bringing up the Twitter bridge, to allow your Howl posts to be posted on Twitter automatically"),(0,o.kt)("li",{parentName:"ul"},"Finishing the long-form blogging module for Howl")),(0,o.kt)("p",null,"These features will form the v1.1.x version of Howl."),(0,o.kt)("p",null,"We have some other things that might make it into v1.1, for example ergonomic improvements that mean those of you using a ledger don't need to sign every transaction with the hardware device in order to pay gas."))}p.isMDXComponent=!0}}]);