"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[117],{5835:function(n,e,t){t.d(e,{u:function(){return a}});var r,i=t(168),o=t(2328),a=t(6444).ZP.button(r||(r=(0,i.Z)(["\n  min-height: 40px;\n  height: fit-content;\n  max-height: 44px;\n  min-width: 40px;\n  width: fit-content;\n  background: transparent;\n  color: ",";\n  border-radius: 5px;\n  border: 1px solid;\n  border-color: ",";\n  text-transform: uppercase;\n  transition: ",";\n  cursor: pointer;\n"])),o.Z.primaryColor,o.Z.primaryColor,o.Z.transition)},5:function(n,e,t){t.d(e,{k:function(){return s},z:function(){return d}});var r,i,o=t(168),a=t(2328),l=t(6444),c=t(1087),s=l.ZP.ul(r||(r=(0,o.Z)(["\n  grid-area: 2 / 1 / 3 / 3;\n  gap: 20px;\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n\n  @media screen and (min-width: ","px) {\n    gap: 15px;\n  }\n"])),a.Z.tablet),d=(0,l.ZP)(c.OL)(i||(i=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 130px;\n  height: 44px;\n  background: transparent;\n  color: ",";\n  text-transform: uppercase;\n  border-radius: 5px;\n  border: 1px solid;\n  border-color: ",";\n  transition: ",";\n\n  @media screen and (min-width: ","px) {\n    width: 136px;\n  }\n\n  :hover,\n  :focus {\n    box-shadow: 0px 8px 43px ",";\n  }\n\n  &.active {\n    background: ",";\n    border: none;\n    filter: drop-shadow(0px 8px 43px ",");\n  }\n"])),a.Z.primaryColor,a.Z.primaryColor,a.Z.transition,a.Z.tablet,a.Z.accentColor,a.Z.accentColor,a.Z.accentColor)},1602:function(n,e,t){t.d(e,{Z:function(){return oe}});var r,i,o=t(9434),a=t(885),l=t(2791),c=t(7689),s=t(2193),d=t(719),p=t(1172),u=t.n(p),h=t(168),x=t(6444),f=x.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),m=x.ZP.li(i||(i=(0,h.Z)(["\n  line-height: 16px;\n\n  &::after {\n    content: ',';\n    margin-right: 2px;\n  }\n\n  &:last-child::after {\n    content: '';\n    margin-right: 10px;\n  }\n"]))),g=t(3329);var b,v=function(n){var e=n.ids,t=n.isOpen,r=(0,o.v9)((function(n){return n.genresList.genres})),i=function(n,e){if(e||n.length<=2)return n;if(n.length>2){var t=n.slice(0,2);return u()(t,{$push:[{id:"Other",name:"Other"}]})}}(e.map((function(n){return r.find((function(e){return n===e.id}))})),t);return(0,g.jsx)(f,{children:i.length>0?i.map((function(n){return(0,g.jsx)(m,{children:n.name},n.id)})):(0,g.jsx)(m,{children:"Other"})})},Z=t(2328),w=x.ZP.span(b||(b=(0,h.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 16px;\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n  margin-right: 2px;\n"])),Z.Z.accentColor,Z.Z.primaryColor);var y=function(n){var e=n.rating;return(0,g.jsx)(w,{children:e})};var j=function(n){var e=(0,o.v9)((function(n){return n.searchPath})),t=(0,l.useState)(""),r=(0,a.Z)(t,2),i=r[0],c=r[1];try{(0,l.useEffect)((function(){n&&d.Jq(n,e).then((function(n){var e=null;return n.results.length>=1?e=n.results.find((function(n){return!0===n.official&&n.name.toLowerCase().includes("trailer")&&"Trailer"===n.type}))||n.results[0]:0===n.results.length?null:e})).then((function(n){n&&c("https://www.youtube.com/embed/".concat(n.key,"?autoplay=1"))}))}),[n,e])}catch(s){}return i};var C,k,O=function(n){(0,l.useEffect)((function(){var e=function(e){return"Escape"===e.key?n():null};document.body.addEventListener("keydown",e);var t=function(e){return"overlay"===e.target.id?n():null};return document.body.addEventListener("click",t),function(){document.body.removeEventListener("keydown",e),document.body.removeEventListener("click",t)}}),[n])},P=["title","titleId"];function E(){return E=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},E.apply(this,arguments)}function L(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function S(n,e){var t=n.title,r=n.titleId,i=L(n,P);return l.createElement("svg",E({width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?l.createElement("title",{id:r},t):null,C||(C=l.createElement("path",{d:"M8 8L22 22",stroke:"currentColor",strokeWidth:2})),k||(k=l.createElement("path",{d:"M8 22L22 8",stroke:"currentColor",strokeWidth:2})))}var _=l.forwardRef(S),I=(t.p,t(1253)),M=t(2982);var W,z=function(n,e){var t=(0,o.v9)((function(n){return n.searchPath})),r=(0,l.useState)([]),i=(0,a.Z)(r,2),c=i[0],s=i[1],p=(0,l.useState)(0),u=(0,a.Z)(p,2),h=u[0],x=u[1],f=(0,l.useState)(!0),m=(0,a.Z)(f,2),g=m[0],b=m[1];try{(0,l.useEffect)((function(){b(!0),e&&d.Jh(n,t).then((function(n){s((0,M.Z)(n.results)),x(n.total_results)})).then((function(){b(!1)}))}),[n,t,e])}catch(v){}return{reviews:c,totalResults:h,loading:g}},R=t(9758),N=["title","titleId"];function F(){return F=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},F.apply(this,arguments)}function q(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function A(n,e){var t=n.title,r=n.titleId,i=q(n,N);return l.createElement("svg",F({width:"100%",height:"100%",viewBox:"0 -3 20 20",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:e,"aria-labelledby":r},i),void 0===t?l.createElement("title",{id:r},"Watch trailer"):t?l.createElement("title",{id:r},t):null,W||(W=l.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},l.createElement("g",{id:"Dribbble-Light-Preview",transform:"translate(-300.000000, -7442.000000)",fill:"currentColor"},l.createElement("g",{id:"icons",transform:"translate(56.000000, 160.000000)"},l.createElement("path",{d:"M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"}))))))}var B,H,T,Q,D,V,$,J,X,G,Y,K,U,nn,en,tn,rn,on,an,ln,cn,sn=l.forwardRef(A),dn=(t.p,t(3195)),pn=t(5835),un=t(5),hn=x.ZP.li(B||(B=(0,h.Z)(["\n  width: 280px;\n  height: 443px;\n  cursor: pointer;\n\n  @media screen and (min-width: ","px) {\n    width: 294px;\n    height: 440px;\n  }\n\n  @media screen and (min-width: ","px) {\n    width: 274px;\n  }\n\n  :hover,\n  :focus {\n    img {\n      transform: scale(1.02);\n    }\n  }\n"])),Z.Z.tablet,Z.Z.desktop),xn=x.ZP.img(H||(H=(0,h.Z)(["\n  width: 280px;\n  height: 402px;\n  background: ",";\n  border-radius: 5px;\n  margin-bottom: 10px;\n  transition: ",";\n\n  @media screen and (min-width: ","px) {\n    width: 294px;\n    height: 398px;\n  }\n\n  @media screen and (min-width: ","px) {\n    width: 274px;\n  }\n"])),Z.Z.secondaryColor,Z.Z.transition,Z.Z.tablet,Z.Z.desktop),fn=x.ZP.h2(T||(T=(0,h.Z)(["\n  line-height: 16px;\n  text-transform: uppercase;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),mn=x.ZP.div(Q||(Q=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n"])),Z.Z.textAccentColor),gn=x.ZP.span(D||(D=(0,h.Z)(["\n  position: relative;\n  line-height: 16px;\n  margin-right: 10px;\n\n  ::before {\n    position: absolute;\n    display: inline-block;\n    content: '';\n    height: 12px;\n    width: 1px;\n    background: ",";\n    top: 2px;\n    left: -6px;\n  }\n"])),Z.Z.textAccentColor),bn=(0,x.ZP)(xn)(V||(V=(0,h.Z)(["\n  width: 100%;\n  height: 357px;\n  margin-bottom: 0;\n\n  @media screen and (min-width: ","px) {\n    height: 374px;\n  }\n\n  @media screen and (min-width: ","px) {\n    height: 478px;\n  }\n"])),Z.Z.tablet,Z.Z.desktop),vn=(0,x.ZP)(fn)($||($=(0,h.Z)(["\n  white-space: normal;\n  overflow: visible;\n  text-overflow: clip;\n  font-size: 20px;\n  line-height: 20px;\n\n  @media screen and (min-width: ","px) {\n    font-size: 30px;\n    line-height: 31px;\n  }\n"])),Z.Z.desktop),Zn=x.ZP.div(J||(J=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  gap: 40px;\n  margin: 20px auto;\n\n  @media screen and (min-width: ","px) {\n    gap: 80px;\n  }\n"])),Z.Z.desktop),wn=x.ZP.ul(X||(X=(0,h.Z)(["\n  display: grid;\n  grid-template-rows: repeat(2, max-content) 32px 1fr;\n  gap: 10px;\n\n  &:first-child {\n    color: #8c8c8c;\n  }\n"]))),yn=x.ZP.li(G||(G=(0,h.Z)(["\n  line-height: 16px;\n"]))),jn=x.ZP.h3(Y||(Y=(0,h.Z)(["\n  text-transform: uppercase;\n  line-height: 16px;\n  margin-bottom: 10px;\n"]))),Cn=x.ZP.p(K||(K=(0,h.Z)(["\n  line-height: 20px;\n  text-align: justify;\n"]))),kn=(0,x.ZP)(un.k)(U||(U=(0,h.Z)(["\n  gap: 15px;\n  grid-area: auto;\n  margin-top: 20px;\n\n  @media screen and (min-width: ","px) {\n    justify-content: flex-start;\n  }\n"])),Z.Z.desktop),On=(0,x.ZP)(pn.u)(nn||(nn=(0,h.Z)(["\n  color: ",";\n  border-color: ",";\n  height: 44px;\n  width: 113px;\n\n  @media screen and (min-width: ","px) {\n    width: 125px;\n  }\n\n  @media screen and (min-width: ","px) {\n    width: 136px;\n  }\n\n  :hover {\n    box-shadow: 0px 0px 5px ",";\n    scale: 1.1;\n  }\n\n  &.active {\n    color: ",";\n    background: ",";\n    border: none;\n  }\n"])),Z.Z.textColor,Z.Z.textColor,Z.Z.tablet,Z.Z.desktop,Z.Z.accentColor,Z.Z.primaryColor,Z.Z.accentColor),Pn=(0,x.ZP)(pn.u)(en||(en=(0,h.Z)(["\n  position: absolute;\n  top: 220px;\n  left: calc((","px - 20px * 2) / 2);\n  transform: translate(-50%, -50%);\n  width: 80px;\n  height: 80px;\n  max-height: fit-content;\n  border: transparent;\n\n  @media screen and (max-width: ","px) {\n    opacity: 0.7;\n  }\n\n  @media screen and (min-width: ","px) {\n    opacity: 0;\n    left: calc((","px / 2 - 30px * 2) / 2);\n  }\n\n  @media screen and (min-width: ","px) {\n    top: 280px;\n    left: calc((","px / 2 - 30px * 2) / 2);\n    width: 120px;\n    height: 120px;\n  }\n\n  :hover,\n  :active,\n  :focus {\n    color: ",";\n    opacity: 1;\n  }\n\n  img:hover ~ & {\n    opacity: 0.7;\n  }\n"])),Z.Z.mobile,Z.Z.tablet,Z.Z.tablet,Z.Z.tablet,Z.Z.desktop,Z.Z.desktop,Z.Z.accentColor),En=(0,x.ZP)(pn.u)(tn||(tn=(0,h.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: 600;\n  border: none;\n  text-transform: none;\n\n  :hover,\n  :active {\n    color: ",";\n  }\n"])),Z.Z.textSecondary,Z.Z.fontSizeSecondary,Z.Z.accentColor),Ln=x.ZP.div(rn||(rn=(0,h.Z)(["\n  @media screen and (min-width: ","px) {\n    grid-area: 2 / 1 / 3 / 3;\n  }\n"])),Z.Z.tablet),Sn=x.ZP.div(on||(on=(0,h.Z)(["\n  position: absolute;\n  top: 48px;\n  left: 20px;\n  width: fit-content;\n  background: ",";\n  color: ",";\n  padding: 6px 12px;\n  border-radius: 5px 0px 5px 0px;\n  text-transform: uppercase;\n\n  @media screen and (min-width: ","px) {\n    top: 42px;\n    left: 30px;\n  }\n"])),Z.Z.accentColor,Z.Z.primaryColor,Z.Z.tablet),_n=x.ZP.ul(an||(an=(0,h.Z)(["\n  margin: 20px 0;\n"]))),In=x.ZP.li(ln||(ln=(0,h.Z)(["\n  margin-bottom: 15px;\n  text-align: justify;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  & > p {\n    display: inline;\n    line-height: 16px;\n  }\n\n  & > p:first-child {\n    display: block;\n    color: ",";\n    font-size: ",";\n    font-weight: 700;\n    margin-bottom: 4px;\n  }\n"])),Z.Z.textSecondary,Z.Z.fontSizeSecondary),Mn=(0,x.ZP)(En)(cn||(cn=(0,h.Z)(["\n  min-height: fit-content;\n  line-height: 16px;\n  font-size: ",";\n  font-weight: 700;\n  color: ",";\n\n  :hover,\n  :active {\n    color: ",";\n  }\n"])),Z.Z.fontSizePrimary,Z.Z.textAccentColor,Z.Z.textSecondary);var Wn=function(n){var e=n.reviews,t=(0,l.useState)({show:!1,id:""}),r=(0,a.Z)(t,2),i=r[0],o=r[1],c=function(n){var e=n.split(" ");return e.length>50?(e.length=50,e.join(" ")):n};return(0,g.jsx)(_n,{children:e.map((function(n){return(0,g.jsxs)(In,{children:[(0,g.jsx)("p",{children:n.author}),(0,g.jsx)("p",{children:i.show&&i.id===n.id?n.content:c(n.content)}),i.id!==n.id&&n.content.split(" ").length>50&&(0,g.jsx)(Mn,{type:"button",onClick:function(){o({show:!0,id:n.id})},children:"show more ..."})]},n.id)}))})};var zn,Rn=function(n){var e=n.movie,t=n.isOpen,r=n.onClick,i=n.inWatched,c=n.inQueue,s=n.trailerSrc,p=(0,o.I0)(),u=(0,l.useContext)(I.V).user,h=(0,l.useState)(!1),x=(0,a.Z)(h,2),f=x[0],m=x[1],b=(0,l.useState)(!1),Z=(0,a.Z)(b,2),w=Z[0],j=Z[1],C=(0,l.useState)(!1),k=(0,a.Z)(C,2),O=k[0],P=k[1],E=z(e.id,O),L=E.reviews,S=E.totalResults,_=E.loading;(0,l.useEffect)((function(){m(i),j(c)}),[i,c]);var M=function(n){switch(n.target.id){case"watched":m((function(n){return!n})),p(f?(0,R.j9)(e.id):(0,R.$S)(e));break;case"queue":j((function(n){return!n})),p(w?(0,R.sE)(e.id):(0,R.XF)(e))}};return(0,g.jsx)(g.Fragment,{children:e&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(bn,{src:e.poster_path?"".concat(d.t5).concat(d.$g).concat(e.poster_path):"".concat("/filmoteka/no_poster.webp"),alt:e.title?e.title:e.name}),s?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Sn,{children:"Trailer"}),(0,g.jsx)(Pn,{type:"button",onClick:function(){r(!0)},children:(0,g.jsx)(sn,{})})]}):(0,g.jsx)(Sn,{children:"No trailer"}),(0,g.jsxs)("div",{children:[(0,g.jsx)(vn,{children:e.title?e.title:e.name}),(0,g.jsxs)(Zn,{children:[(0,g.jsxs)(wn,{children:[(0,g.jsx)(yn,{children:"Vote / Votes:"}),(0,g.jsx)(yn,{children:"Popularity:"}),(0,g.jsx)(yn,{children:"Original Title:"}),(0,g.jsx)(yn,{children:"Genre:"})]}),(0,g.jsxs)(wn,{children:[(0,g.jsxs)(yn,{children:[(0,g.jsx)(y,{rating:e.vote_average}),"/ ".concat(e.vote_count)]}),(0,g.jsx)(yn,{children:e.popularity}),(0,g.jsx)(yn,{children:e.original_title?e.original_title:e.original_name}),(0,g.jsx)(yn,{children:e.genre_ids&&(0,g.jsx)(v,{ids:e.genre_ids,isOpen:t})})]})]}),e.overview&&(0,g.jsx)(jn,{children:"About"}),(0,g.jsx)(Cn,{children:e.overview}),u&&(0,g.jsxs)(kn,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(On,{id:"watched",type:"button",onClick:M,children:f?"watched":["Add to ","watched"],className:f&&"active"})}),(0,g.jsx)("li",{children:(0,g.jsx)(On,{id:"queue",type:"button",onClick:M,children:w?"queue":["Add to ","queue"],className:w&&"active"})})]})]}),(0,g.jsxs)(Ln,{children:[(0,g.jsx)(En,{type:"button",onClick:function(){P((function(n){return!n}))},children:O?"Hide reviews":"Show reviews ..."}),O&&(0,g.jsxs)(g.Fragment,{children:[_?(0,g.jsx)(dn.Z,{}):S?(0,g.jsx)(Wn,{reviews:L}):(0,g.jsx)(Cn,{children:"No reviews for now"}),L.length>5&&(0,g.jsx)(En,{type:"button",onClick:function(){P(!1)},children:"Hide reviews"})]})]})]})})},Nn=x.ZP.iframe(zn||(zn=(0,h.Z)(["\n  width: 100%;\n  aspect-ratio: 3/4;\n  border-radius: 5px;\n  background: ",";\n  border: 2px solid ",";\n\n  @media screen and (min-width: ","px) {\n    position: static;\n    grid-area: 1 / 1 / 2 / 3;\n    aspect-ratio: 16/9;\n  }\n\n  @media screen and (orientation: landscape) {\n    aspect-ratio: 16/9;\n  }\n\n  :hover {\n    border: 2px solid ",";\n  }\n"])),Z.Z.secondaryColor,Z.Z.textSecondary,Z.Z.tablet,Z.Z.accentColor);var Fn,qn,An,Bn=function(n){var e=n.trailerSrc;return(0,g.jsx)(g.Fragment,{children:e&&(0,g.jsx)(Nn,{title:"trailer",src:e})})},Hn=x.ZP.div(Fn||(Fn=(0,h.Z)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.25);\n  overflow-y: ",";\n  z-index: 1000;\n  scrollbar-color: rgba(255, 107, 1, 0.5) #f7f7f73b;\n  scrollbar-width: thin;\n\n  @media screen and (orientation: landscape) {\n    overflow-y: scroll;\n  }\n"])),(function(n){return n.video?"clip":"scroll"})),Tn=x.ZP.div(qn||(qn=(0,h.Z)(["\n  position: relative;\n  display: grid;\n  grid-template-columns: 240px;\n  grid-template-rows: repeat(2, fit-content);\n  gap: 30px;\n  background: ",";\n  width: 280px;\n  height: fit-content;\n  padding: 48px 20px 40px;\n  margin: 20px auto;\n\n  @media screen and (orientation: landscape) {\n    width: ",";\n    grid-template-columns: ",";\n  }\n\n  @media screen and (min-width: ","px) {\n    grid-template-columns: repeat(2, 264px);\n    gap: 32px;\n    width: 618px;\n    margin: 230px auto;\n    padding: 42px 30px 40px;\n  }\n\n  @media screen and (min-width: ","px) {\n    grid-template-columns: repeat(2, 396px);\n    gap: 30px;\n    width: 882px;\n    margin: 100px auto;\n  }\n"])),Z.Z.primaryColor,(function(n){return n.video&&"80%"}),(function(n){return n.video&&"1fr"}),Z.Z.tablet,Z.Z.desktop),Qn=(0,x.ZP)(pn.u)(An||(An=(0,h.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  color: ",";\n\n  :hover,\n  :focus,\n  :active {\n    color: ",";\n    scale: 1.3;\n  }\n"])),Z.Z.textColor,Z.Z.accentColor);var Dn=function(n){var e=n.movie,t=n.isOpen,r=n.onModalClose,i=n.inWatched,o=n.inQueue,c=(0,l.useState)(!1),s=(0,a.Z)(c,2),d=s[0],p=s[1],u=j(null===e||void 0===e?void 0:e.id),h=function(){document.body.classList.remove("isModalOpen"),r(),p(!1)};return O(h),(0,g.jsx)(g.Fragment,{children:t&&(0,g.jsx)(Hn,{id:"overlay",video:d,children:(0,g.jsxs)(Tn,{video:d,children:[(0,g.jsx)(Qn,{type:"button",onClick:h,children:(0,g.jsx)(_,{})}),d?(0,g.jsx)(Bn,{trailerSrc:u}):(0,g.jsx)(Rn,{movie:e,isOpen:t,inWatched:i,inQueue:o,onClick:p,trailerSrc:u})]})})})};var Vn,$n,Jn,Xn,Gn=function(n){var e=n.movie,t=(0,o.v9)((function(n){return n.libraryLists.watchedList})),r=(0,o.v9)((function(n){return n.libraryLists.queueList})),i=t.some((function(n){return n.id===e.id})),p=r.some((function(n){return n.id===e.id})),u=(0,l.useState)(null),h=(0,a.Z)(u,2),x=h[0],f=h[1],m=(0,l.useState)(!1),b=(0,a.Z)(m,2),Z=b[0],w=b[1],j=(0,c.TH)();return(0,g.jsxs)(g.Fragment,{children:[e&&(0,g.jsxs)(hn,{onClick:function(){document.body.classList.add("isModalOpen"),w(!0),f(e)},children:[(0,g.jsx)(xn,{src:e.poster_path?"".concat(d.t5).concat(d.bl).concat(e.poster_path):"".concat("/filmoteka/no_poster.webp"),alt:e.title?e.title:e.name,loading:"lazy"}),(0,g.jsx)(fn,{children:e.title?e.title:e.name}),(0,g.jsxs)(mn,{children:[e.genre_ids&&(0,g.jsx)(v,{ids:e.genre_ids,isOpen:!1}),e.release_date&&(0,g.jsx)(gn,{children:e.release_date}),(j.pathname.includes("library")||!j.search.includes("trendings"))&&(0,g.jsx)(y,{rating:e.vote_average})]})]}),(0,g.jsx)(s.Z,{children:(0,g.jsx)(Dn,{movie:x,isOpen:Z,onModalClose:function(){w(!1),f(null)},inWatched:i,inQueue:p}),container:document.getElementById("modal-root")})]})},Yn=t(1413),Kn=x.ZP.li(Vn||(Vn=(0,h.Z)(["\n  display: flex;\n  gap: 10px;\n  height: calc((","px - 20px * 2) * 0.4 / 2 * 3);\n\n  @media screen and (min-width: ","px) {\n    height: calc((","px - 30px - 75px * 2) / 2 * 0.4 / 2 * 3);\n  }\n\n  @media screen and (min-width: ","px) {\n    height: calc(\n      (","px - 30px * 2 - 71px * 2) / 3 * 0.4 / 2 * 3\n    );\n  }\n"])),Z.Z.mobile,Z.Z.tablet,Z.Z.tablet,Z.Z.desktop,Z.Z.desktop),Un=(0,x.ZP)(xn)($n||($n=(0,h.Z)(["\n  width: 40%;\n  height: 100%;\n  margin-bottom: 0;\n  aspect-ratio: 2/3;\n"]))),ne=(0,x.ZP)(fn)(Jn||(Jn=(0,h.Z)(["\n  margin-bottom: 10px;\n  text-overflow: clip;\n  font-weight: 700;\n"]))),ee=(0,x.ZP)(mn)(Xn||(Xn=(0,h.Z)(["\n  display: block;\n  color: ",";\n"])),Z.Z.textColor);var te,re=function(n){var e,t=n.actor,r=null===t||void 0===t||null===(e=t.known_for)||void 0===e?void 0:e.map((function(n){return(0,Yn.Z)((0,Yn.Z)({},n),{},{date:n.release_date?n.release_date.slice(0,4):n.first_air_date?n.first_air_date.slice(0,4):""})}));return(0,g.jsx)(g.Fragment,{children:t&&(0,g.jsxs)(Kn,{children:[(0,g.jsx)(Un,{src:t.profile_path?"".concat(d.t5).concat(d._q).concat(t.profile_path):"".concat("/filmoteka/no_poster.webp"),alt:t.name,loading:"lazy"}),(0,g.jsxs)(ee,{children:[(0,g.jsx)(ne,{children:t.name}),(0,g.jsx)("ul",{children:null===r||void 0===r?void 0:r.map((function(n){return(0,g.jsxs)("li",{children:[n.title?n.title:n.name,""!==n.date&&" (".concat(null===n||void 0===n?void 0:n.date,")")]},n.id)}))})]})]})})},ie=x.ZP.ul(te||(te=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: 280px;\n  gap: 20px;\n\n  @media screen and (min-width: ","px) {\n    grid-template-columns: repeat(2, 294px);\n    gap: 30px;\n  }\n\n  @media screen and (min-width: ","px) {\n    grid-template-columns: repeat(3, 274px);\n  } ;\n"])),Z.Z.tablet,Z.Z.desktop);var oe=function(n){var e=n.items,t=(0,o.v9)((function(n){return n.searchPath}));return(0,g.jsx)(ie,{children:"person"===t?e.map((function(n){return(0,g.jsx)(re,{actor:n},n.id)})):e.map((function(n){return(0,g.jsx)(Gn,{movie:n},n.id)}))})}},4189:function(n,e,t){t.d(e,{Z:function(){return z}});var r,i,o=t(2328),a=t(2791),l=t(9434),c=t(7689),s=t(5302),d=["title","titleId"];function p(){return p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function h(n,e){var t=n.title,o=n.titleId,l=u(n,d);return a.createElement("svg",p({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},l),t?a.createElement("title",{id:o},t):null,r||(r=a.createElement("path",{d:"M12.6667 8H3.33337",stroke:"currentColor",strokeWidth:1.33333,strokeLinecap:"round",strokeLinejoin:"round"})),i||(i=a.createElement("path",{d:"M8.00004 12.6667L3.33337 8.00004L8.00004 3.33337",stroke:"currentColor",strokeWidth:1.33333,strokeLinecap:"round",strokeLinejoin:"round"})))}var x,f,m=a.forwardRef(h),g=(t.p,["title","titleId"]);function b(){return b=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},b.apply(this,arguments)}function v(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function Z(n,e){var t=n.title,r=n.titleId,i=v(n,g);return a.createElement("svg",b({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?a.createElement("title",{id:r},t):null,x||(x=a.createElement("path",{d:"M3.33329 8H12.6666",stroke:"currentColor",strokeWidth:1.33333,strokeLinecap:"round",strokeLinejoin:"round"})),f||(f=a.createElement("path",{d:"M7.99996 12.6667L12.6666 8.00004L7.99996 3.33337",stroke:"currentColor",strokeWidth:1.33333,strokeLinecap:"round",strokeLinejoin:"round"})))}var w,y=a.forwardRef(Z),j=(t.p,["title","titleId"]);function C(){return C=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},C.apply(this,arguments)}function k(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function O(n,e){var t=n.title,r=n.titleId,i=k(n,j);return a.createElement("svg",C({width:10,height:3,viewBox:"0 0 10 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?a.createElement("title",{id:r},t):null,w||(w=a.createElement("path",{d:"M1.61719 0.5C1.88281 0.5 2.08789 0.576172 2.23242 0.728516C2.37695 0.876953 2.44922 1.06445 2.44922 1.29102C2.44922 1.51367 2.37695 1.69922 2.23242 1.84766C2.08789 1.99219 1.88281 2.06445 1.61719 2.06445C1.36328 2.06445 1.16211 1.99219 1.01367 1.84766C0.865234 1.70312 0.791016 1.51758 0.791016 1.29102C0.791016 1.06445 0.863281 0.876953 1.00781 0.728516C1.15234 0.576172 1.35547 0.5 1.61719 0.5ZM4.96875 0.5C5.23438 0.5 5.43945 0.576172 5.58398 0.728516C5.72852 0.876953 5.80078 1.06445 5.80078 1.29102C5.80078 1.51367 5.72852 1.69922 5.58398 1.84766C5.43945 1.99219 5.23438 2.06445 4.96875 2.06445C4.71484 2.06445 4.51367 1.99219 4.36523 1.84766C4.2168 1.70312 4.14258 1.51758 4.14258 1.29102C4.14258 1.06445 4.21484 0.876953 4.35938 0.728516C4.50391 0.576172 4.70703 0.5 4.96875 0.5ZM8.32031 0.5C8.58594 0.5 8.79102 0.576172 8.93555 0.728516C9.08008 0.876953 9.15234 1.06445 9.15234 1.29102C9.15234 1.51367 9.08008 1.69922 8.93555 1.84766C8.79102 1.99219 8.58594 2.06445 8.32031 2.06445C8.06641 2.06445 7.86523 1.99219 7.7168 1.84766C7.56836 1.70312 7.49414 1.51758 7.49414 1.29102C7.49414 1.06445 7.56641 0.876953 7.71094 0.728516C7.85547 0.576172 8.05859 0.5 8.32031 0.5Z",fill:"black"})))}var P,E=a.forwardRef(O),L=(t.p,t(168)),S=t(6444),_=t(6048),I=t.n(_),M=(0,S.ZP)(I())(P||(P=(0,L.Z)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-top: 40px;\n\n  @media screen and (min-width: ","px) {\n    margin-top: 50px;\n  }\n\n  .arrows {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    background: ",";\n    color: ",";\n    border-radius: 5px;\n  }\n\n  .link {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    background: transparent;\n    border-radius: 5px;\n    border: none;\n    transition: ",";\n\n    :focus,\n    :hover {\n      box-shadow: 0px 0px 5px "," inset;\n    }\n  }\n\n  .current {\n    border-radius: 5px;\n    color: ",";\n    background: ",";\n  }\n\n  .ellipsis {\n    display: flex;\n    align-items: center;\n    height: 40px;\n  }\n\n  .disabled {\n    color: #b3b3b3;\n  }\n"])),o.Z.tablet,o.Z.secondaryColor,o.Z.textColor,o.Z.transition,o.Z.accentColor,o.Z.primaryColor,o.Z.accentColor),W=t(3329);var z=function(n){var e=n.totalResults,t=n.perPage,r=n.cb,i=(0,l.I0)(),d=(0,c.TH)(),p=(0,l.v9)((function(n){return n.page})),u=Math.ceil(e/t),h=(0,a.useRef)(u),x=document.documentElement.clientWidth<"".concat(o.Z.tablet),f=h.current>u?u-1:0;return u>1&&(0,W.jsx)(M,{pageCount:u,previousLabel:(0,W.jsx)(m,{}),nextLabel:(0,W.jsx)(y,{}),breakLabel:x?null:(0,W.jsx)(E,{}),marginPagesDisplayed:x?0:1,pageRangeDisplayed:x&&2===p||x&&3===p?4:5,breakLinkClassName:!x&&"ellipsis",pageLinkClassName:"link",activeLinkClassName:"current",previousLinkClassName:"arrows",nextLinkClassName:"arrows",disabledLinkClassName:"disabled",onPageChange:function(n){window.scrollTo(0,200),d.pathname.includes("library")?r(n.selected):i((0,s.Y)(n.selected+1))},forcePage:d.pathname.includes("library")?f:p-1})}}}]);
//# sourceMappingURL=117.84e35a26.chunk.js.map