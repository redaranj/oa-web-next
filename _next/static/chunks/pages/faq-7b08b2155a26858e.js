(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{7047:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return r(2801)}])},174:function(e,t,r){"use strict";r.d(t,{S:function(){return c}});var n=r(4924),o=r(5893),i=r(7357),a=r(4901),s=r(600),l=a.O9.white,c=function(e){var t,r=e.backgroundColor,c=void 0===r?l:r,d=e.backgroundImage,u=e.children,p=a.AV.ps,h=a.AV.ts,m=a.AV.dl;return(0,o.jsx)(s.NP,{backgroundColor:c,backgroundImage:d,children:(0,o.jsx)(i.Z,{sx:(t={minHeight:20,pt:"90px"},(0,n.Z)(t,p,{pt:"50px"}),(0,n.Z)(t,h,{pt:"80px"}),(0,n.Z)(t,m,{pt:"90px"}),t),children:u})})}},2801:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ge}});var n=r(5893),o=r(1151),i=r(7357),a=r(4901),s=r(174),l={src:"/web-next/_next/static/media/faq-header.e19a0d0b.png",height:700,width:2732,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPElEQVR42mOwPrLT4cgu/QNbfE4e0Nq3iXn7Svnd6+yP7mYwOLDF/fhex6O7gaTpgS0M21Yo7l4XcOoAAJLLGpn6CIorAAAAAElFTkSuQmCC"},c=function(e){var t=e.children,r=a.O9.white;return(0,n.jsx)(s.S,{backgroundImage:l,children:(0,n.jsx)(i.Z,{sx:{"> h1":{color:r,textAlign:"center"}},children:t})})},d=r(6042),u=r(9396),p=r(6886),h=r(600),m=function(e){var t=e.children,r=a.O9.lightGrey,o=a.O9.mediumGrey,i=a.cp.bodyLarge;return(0,n.jsx)(h.NP,{backgroundColor:r,children:(0,n.jsx)(p.ZP,{container:!0,sx:{flexDirection:"column",counterReset:"questionCounter",".question":{counterIncrement:"questionCounter"},".question::before":(0,u.Z)((0,d.Z)({},i),{content:"counter(questionCounter, decimal-leading-zero)",color:o,display:"flex",p:"4px"})},children:t})})},f=r(3654),x=r(7294),g=r(3366),b=r(7462),v=(r(9864),r(6010)),y=r(4780),Z=r(1496),S=r(7623),w=r(8885),A=r(6067),j=r(577),C=r(2734),R=r(1705),E=r(4867),N=r(1588);function z(e){return(0,E.Z)("MuiCollapse",e)}(0,N.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const M=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],I=(0,Z.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation],"entered"===r.state&&t.entered,"exited"===r.state&&!r.in&&"0px"===r.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,b.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,b.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),$=(0,Z.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,b.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),P=(0,Z.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,b.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),k=x.forwardRef((function(e,t){const r=(0,S.Z)({props:e,name:"MuiCollapse"}),{addEndListener:o,children:i,className:a,collapsedSize:s="0px",component:l,easing:c,in:d,onEnter:u,onEntered:p,onEntering:h,onExit:m,onExited:f,onExiting:Z,orientation:E="vertical",style:N,timeout:k=A.x9.standard,TransitionComponent:G=w.ZP}=r,T=(0,g.Z)(r,M),q=(0,b.Z)({},r,{orientation:E,collapsedSize:s}),O=(e=>{const{orientation:t,classes:r}=e,n={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,y.Z)(n,z,r)})(q),_=(0,C.Z)(),D=x.useRef(),L=x.useRef(null),V=x.useRef(),B="number"===typeof s?`${s}px`:s,W="horizontal"===E,F=W?"width":"height";x.useEffect((()=>()=>{clearTimeout(D.current)}),[]);const H=x.useRef(null),Q=(0,R.Z)(t,H),U=e=>t=>{if(e){const r=H.current;void 0===t?e(r):e(r,t)}},X=()=>L.current?L.current[W?"clientWidth":"clientHeight"]:0,Y=U(((e,t)=>{L.current&&W&&(L.current.style.position="absolute"),e.style[F]=B,u&&u(e,t)})),J=U(((e,t)=>{const r=X();L.current&&W&&(L.current.style.position="");const{duration:n,easing:o}=(0,j.C)({style:N,timeout:k,easing:c},{mode:"enter"});if("auto"===k){const t=_.transitions.getAutoHeightDuration(r);e.style.transitionDuration=`${t}ms`,V.current=t}else e.style.transitionDuration="string"===typeof n?n:`${n}ms`;e.style[F]=`${r}px`,e.style.transitionTimingFunction=o,h&&h(e,t)})),K=U(((e,t)=>{e.style[F]="auto",p&&p(e,t)})),ee=U((e=>{e.style[F]=`${X()}px`,m&&m(e)})),te=U(f),re=U((e=>{const t=X(),{duration:r,easing:n}=(0,j.C)({style:N,timeout:k,easing:c},{mode:"exit"});if("auto"===k){const r=_.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${r}ms`,V.current=r}else e.style.transitionDuration="string"===typeof r?r:`${r}ms`;e.style[F]=B,e.style.transitionTimingFunction=n,Z&&Z(e)}));return(0,n.jsx)(G,(0,b.Z)({in:d,onEnter:Y,onEntered:K,onEntering:J,onExit:ee,onExited:te,onExiting:re,addEndListener:e=>{"auto"===k&&(D.current=setTimeout(e,V.current||0)),o&&o(H.current,e)},nodeRef:H,timeout:"auto"===k?null:k},T,{children:(e,t)=>(0,n.jsx)(I,(0,b.Z)({as:l,className:(0,v.Z)(O.root,a,{entered:O.entered,exited:!d&&"0px"===B&&O.hidden}[e]),style:(0,b.Z)({[W?"minWidth":"minHeight"]:B},N),ownerState:(0,b.Z)({},q,{state:e}),ref:Q},t,{children:(0,n.jsx)($,{ownerState:(0,b.Z)({},q,{state:e}),className:O.wrapper,ref:L,children:(0,n.jsx)(P,{ownerState:(0,b.Z)({},q,{state:e}),className:O.wrapperInner,children:i})})}))}))}));k.muiSupportAuto=!0;var G=k,T=r(5113);var q=x.createContext({});var O=function({controlled:e,default:t,name:r,state:n="value"}){const{current:o}=x.useRef(void 0!==e),[i,a]=x.useState(t);return[o?e:i,x.useCallback((e=>{o||a(e)}),[])]};function _(e){return(0,E.Z)("MuiAccordion",e)}var D=(0,N.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);const L=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],V=(0,Z.ZP)(T.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${D.region}`]:t.region},t.root,!r.square&&t.rounded,!r.disableGutters&&t.gutters]}})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${D.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${D.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e,ownerState:t})=>(0,b.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${D.expanded}`]:{margin:"16px 0"}})));var B=x.forwardRef((function(e,t){const r=(0,S.Z)({props:e,name:"MuiAccordion"}),{children:o,className:i,defaultExpanded:a=!1,disabled:s=!1,disableGutters:l=!1,expanded:c,onChange:d,square:u=!1,TransitionComponent:p=G,TransitionProps:h}=r,m=(0,g.Z)(r,L),[f,Z]=O({controlled:c,default:a,name:"Accordion",state:"expanded"}),w=x.useCallback((e=>{Z(!f),d&&d(e,!f)}),[f,d,Z]),[A,...j]=x.Children.toArray(o),C=x.useMemo((()=>({expanded:f,disabled:s,disableGutters:l,toggle:w})),[f,s,l,w]),R=(0,b.Z)({},r,{square:u,disabled:s,disableGutters:l,expanded:f}),E=(e=>{const{classes:t,square:r,expanded:n,disabled:o,disableGutters:i}=e,a={root:["root",!r&&"rounded",n&&"expanded",o&&"disabled",!i&&"gutters"],region:["region"]};return(0,y.Z)(a,_,t)})(R);return(0,n.jsxs)(V,(0,b.Z)({className:(0,v.Z)(E.root,i),ref:t,ownerState:R,square:u},m,{children:[(0,n.jsx)(q.Provider,{value:C,children:A}),(0,n.jsx)(p,(0,b.Z)({in:f,timeout:"auto"},h,{children:(0,n.jsx)("div",{"aria-labelledby":A.props.id,id:A.props["aria-controls"],role:"region",className:E.region,children:j})}))]}))})),W=r(8652);function F(e){return(0,E.Z)("MuiAccordionSummary",e)}var H=(0,N.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);const Q=["children","className","expandIcon","focusVisibleClassName","onClick"],U=(0,Z.ZP)(W.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const r={duration:e.transitions.duration.shortest};return(0,b.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],r),[`&.${H.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${H.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${H.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${H.expanded}`]:{minHeight:64}})})),X=(0,Z.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,b.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${H.expanded}`]:{margin:"20px 0"}}))),Y=(0,Z.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${H.expanded}`]:{transform:"rotate(180deg)"}})));var J=x.forwardRef((function(e,t){const r=(0,S.Z)({props:e,name:"MuiAccordionSummary"}),{children:o,className:i,expandIcon:a,focusVisibleClassName:s,onClick:l}=r,c=(0,g.Z)(r,Q),{disabled:d=!1,disableGutters:u,expanded:p,toggle:h}=x.useContext(q),m=(0,b.Z)({},r,{expanded:p,disabled:d,disableGutters:u}),f=(e=>{const{classes:t,expanded:r,disabled:n,disableGutters:o}=e,i={root:["root",r&&"expanded",n&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]};return(0,y.Z)(i,F,t)})(m);return(0,n.jsxs)(U,(0,b.Z)({focusRipple:!1,disableRipple:!0,disabled:d,component:"div","aria-expanded":p,className:(0,v.Z)(f.root,i),focusVisibleClassName:(0,v.Z)(f.focusVisible,s),onClick:e=>{h&&h(e),l&&l(e)},ref:t,ownerState:m},c,{children:[(0,n.jsx)(X,{className:f.content,ownerState:m,children:o}),a&&(0,n.jsx)(Y,{className:f.expandIconWrapper,ownerState:m,children:a})]}))})),K=r(8216);function ee(e){return(0,E.Z)("MuiSvgIcon",e)}(0,N.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const te=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],re=(0,Z.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t[`color${(0,K.Z)(r.color)}`],t[`fontSize${(0,K.Z)(r.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var r,n,o,i,a,s,l,c,d,u,p,h,m,f,x,g,b;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=e.transitions)||null==(n=r.create)?void 0:n.call(r,"fill",{duration:null==(o=e.transitions)||null==(i=o.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(s=a.pxToRem)?void 0:s.call(a,20))||"1.25rem",medium:(null==(l=e.typography)||null==(c=l.pxToRem)?void 0:c.call(l,24))||"1.5rem",large:(null==(d=e.typography)||null==(u=d.pxToRem)?void 0:u.call(d,35))||"2.1875"}[t.fontSize],color:null!=(p=null==(h=(e.vars||e).palette)||null==(m=h[t.color])?void 0:m.main)?p:{action:null==(f=(e.vars||e).palette)||null==(x=f.action)?void 0:x.active,disabled:null==(g=(e.vars||e).palette)||null==(b=g.action)?void 0:b.disabled,inherit:void 0}[t.color]}})),ne=x.forwardRef((function(e,t){const r=(0,S.Z)({props:e,name:"MuiSvgIcon"}),{children:o,className:i,color:a="inherit",component:s="svg",fontSize:l="medium",htmlColor:c,inheritViewBox:d=!1,titleAccess:u,viewBox:p="0 0 24 24"}=r,h=(0,g.Z)(r,te),m=(0,b.Z)({},r,{color:a,component:s,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:p}),f={};d||(f.viewBox=p);const x=(e=>{const{color:t,fontSize:r,classes:n}=e,o={root:["root","inherit"!==t&&`color${(0,K.Z)(t)}`,`fontSize${(0,K.Z)(r)}`]};return(0,y.Z)(o,ee,n)})(m);return(0,n.jsxs)(re,(0,b.Z)({as:s,className:(0,v.Z)(x.root,i),ownerState:m,focusable:"false",color:c,"aria-hidden":!u||void 0,role:u?"img":void 0,ref:t},f,h,{children:[o,u?(0,n.jsx)("title",{children:u}):null]}))}));ne.muiName="SvgIcon";var oe=ne;function ie(e,t){const r=(r,o)=>(0,n.jsx)(oe,(0,b.Z)({"data-testid":`${t}Icon`,ref:o},r,{children:e}));return r.muiName=oe.muiName,x.memo(x.forwardRef(r))}var ae=ie((0,n.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),se=ie((0,n.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),le=function(e){var t=e.expanded,r=e.children,o=a.O9.darkGrey,i=a.O9.turquoise;return(0,n.jsx)(J,{children:(0,n.jsxs)(p.ZP,{container:!0,direction:"row",justifyContent:"space-between",spacing:3,children:[(0,n.jsx)(p.ZP,{item:!0,className:"question"}),(0,n.jsx)(p.ZP,{item:!0,flexGrow:1,children:r}),(0,n.jsx)(p.ZP,{item:!0,children:t?(0,n.jsx)(ae,{htmlColor:i,fontSize:"large",sx:{mt:"2px"}}):(0,n.jsx)(se,{htmlColor:o,fontSize:"large",sx:{mt:"4px"}})})]})})};function ce(e){return(0,E.Z)("MuiAccordionDetails",e)}(0,N.Z)("MuiAccordionDetails",["root"]);const de=["className"],ue=(0,Z.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({padding:e.spacing(1,2,2)})));var pe=x.forwardRef((function(e,t){const r=(0,S.Z)({props:e,name:"MuiAccordionDetails"}),{className:o}=r,i=(0,g.Z)(r,de),a=r,s=(e=>{const{classes:t}=e;return(0,y.Z)({root:["root"]},ce,t)})(a);return(0,n.jsx)(ue,(0,b.Z)({className:(0,v.Z)(s.root,o),ref:t,ownerState:a},i))})),he=function(e){var t=e.children;return(0,n.jsx)(pe,{sx:{border:0},children:(0,n.jsx)(i.Z,{sx:{p:2},children:t})})},me=function(e){var t=e.children,r=(0,x.useState)(!1),o=r[0],i=r[1],a=(0,f.Z)(t),s=a[0],l=a.slice(1);return(0,n.jsxs)(B,{expanded:o,onChange:function(){return i(!o)},elevation:0,sx:{"::before":{display:"none"}},children:[(0,n.jsx)(le,{expanded:o,children:s}),(0,n.jsx)(he,{children:l})]})},fe=function(e){var t=e.children,r=a.O9.lightGrey;return(0,n.jsx)(h.NP,{backgroundColor:r,children:(0,n.jsx)(p.ZP,{container:!0,sx:{flexDirection:"column"},children:t})})};function xe(e){var t=Object.assign({h1:"h1",h3:"h3",p:"p",strong:"strong"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{children:(0,n.jsx)(t.h1,{children:"FAQ"})}),"\n",(0,n.jsxs)(m,{children:[(0,n.jsxs)(me,{children:[(0,n.jsx)(t.h3,{children:"this is the question"}),(0,n.jsx)(t.p,{children:"And these are the answer paragraphs"}),(0,n.jsx)(t.p,{children:"And this one"})]}),(0,n.jsxs)(me,{children:[(0,n.jsx)(t.h3,{children:"another question"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"More"})," paras"]}),(0,n.jsx)(t.p,{children:"And even more"})]})]}),"\n",(0,n.jsx)(fe,{})]})}var ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,o.ah)(),e.components),r=t.wrapper;return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(xe,e)})):xe(e)}},9921:function(e,t){"use strict";var r,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case s:case a:case p:case h:return e;default:switch(e=e&&e.$$typeof){case d:case c:case u:case f:case m:case l:return e;default:return t}}case o:return t}}}r=Symbol.for("react.module.reference")},9864:function(e,t,r){"use strict";r(9921)},3654:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return o}})}},function(e){e.O(0,[774,888,179],(function(){return t=7047,e(e.s=t);var t}));var t=e.O();_N_E=t}]);