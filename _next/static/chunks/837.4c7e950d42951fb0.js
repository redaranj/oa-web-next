"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{74837:function(e,t,n){n.r(t),n.d(t,{MenuButton:function(){return Z}});var r=n(35944),o=n(41664),l=n.n(o),u=n(89755),i=n.n(u),c=n(75084),s=n(79072),a=n(61953),d=n(45697),p=n(67294);function f(e){let t=p.useRef(null);return p.useLayoutEffect(()=>{t.current=e}),p.useCallback((...e)=>{var n;null===(n=t.current)||void 0===n||n.call(t,...e)},[])}let h={},v={isOpen:!1,setAnchorElUsed:!1,anchorEl:void 0,anchorPosition:void 0,hovered:!1,focused:!1,_openEventType:null,_childPopupState:null,_deferNextOpen:!1,_deferNextClose:!1};function E(e,t){let{anchorEl:n,_childPopupState:r}=t;return m(n,e)||m(function(e,{popupId:t}){if(!t)return null;let n="function"==typeof e.getRootNode?e.getRootNode():document;return"function"==typeof n.getElementById?n.getElementById(t):null}(e,t),e)||null!=r&&E(e,r)}function m(e,t){if(!e)return!1;for(;t;){if(t===e)return!0;t=t.parentElement}return!1}function b({children:e,popupId:t,variant:n,parentPopupState:r,disableAutoFocus:o}){let l=function({parentPopupState:e,popupId:t,variant:n,disableAutoFocus:r}){let o=(0,p.useRef)(!0);(0,p.useEffect)(()=>(o.current=!0,()=>{o.current=!1}),[]);let[l,u]=(0,p.useState)(v),i=(0,p.useCallback)(e=>{o.current&&u(e)},[]),c=(0,p.useCallback)(e=>i(t=>({...t,setAnchorElUsed:!0,anchorEl:null!=e?e:void 0})),[]),s=f(e=>(l.isOpen?m(e):a(e),l)),a=f(t=>{let n=t instanceof Element?void 0:t,r=t instanceof Element?t:(null==t?void 0:t.currentTarget)instanceof Element?t.currentTarget:void 0;if((null==n?void 0:n.type)==="touchstart"){i(e=>({...e,_deferNextOpen:!0}));return}let o=null==n?void 0:n.clientX,l=null==n?void 0:n.clientY,u="number"==typeof o&&"number"==typeof l?{left:o,top:l}:void 0,c=o=>{if(!t&&!o.setAnchorElUsed){var l;h[l="missingEventOrAnchorEl"]||(h[l]=!0,console.error("[material-ui-popup-state] WARNING","eventOrAnchorEl should be defined if setAnchorEl is not used"))}if(e){if(!e.isOpen)return o;setTimeout(()=>e._setChildPopupState(P))}let i={...o,isOpen:!0,anchorPosition:u,hovered:(null==n?void 0:n.type)==="mouseover"||o.hovered,focused:(null==n?void 0:n.type)==="focus"||o.focused,_openEventType:null==n?void 0:n.type};return null!=n&&n.currentTarget?o.setAnchorElUsed||(i.anchorEl=null==n?void 0:n.currentTarget):r&&(i.anchorEl=r),i};i(e=>e._deferNextOpen?(setTimeout(()=>i(c),0),{...e,_deferNextOpen:!1}):c(e))}),d=t=>{let{_childPopupState:n}=t;return setTimeout(()=>{null==n||n.close(),null==e||e._setChildPopupState(null)}),{...t,isOpen:!1,hovered:!1,focused:!1}},m=f(e=>{let t=e instanceof Element?void 0:e;if((null==t?void 0:t.type)==="touchstart"){i(e=>({...e,_deferNextClose:!0}));return}i(e=>e._deferNextClose?(setTimeout(()=>i(d),0),{...e,_deferNextClose:!1}):d(e))}),b=(0,p.useCallback)((e,t)=>{e?a(t):m(t)},[]),x=f(e=>{let{relatedTarget:t}=e;i(e=>e.hovered&&!(t instanceof Element&&E(t,P))?e.focused?{...e,hovered:!1}:d(e):e)}),g=f(e=>{if(!e)return;let{relatedTarget:t}=e;i(e=>e.focused&&!(t instanceof Element&&E(t,P))?e.hovered?{...e,focused:!1}:d(e):e)}),y=(0,p.useCallback)(e=>i(t=>({...t,_childPopupState:e})),[]),P={...l,setAnchorEl:c,popupId:t,variant:n,open:a,close:m,toggle:s,setOpen:b,onBlur:g,onMouseLeave:x,disableAutoFocus:null!=r?r:Boolean(l.hovered||l.focused),_setChildPopupState:y};return P}({popupId:t,variant:n,parentPopupState:r,disableAutoFocus:o}),u=e(l);return null!=u?u:null}b.propTypes={children:d.func.isRequired,popupId:d.string,variant:d.oneOf(["popover","popper"]).isRequired,parentPopupState:d.object,disableAutoFocus:d.bool};var x=n(87462),g=n(30110);let y=p.forwardRef(function(e,t){var n;return p.createElement(g.ZP,(0,x.Z)({},e,{ref:t,style:{pointerEvents:"none",...e.style},PaperProps:{...e.PaperProps,style:{pointerEvents:"auto",...null===(n=e.PaperProps)||void 0===n?void 0:n.style}}}))});var P=n(44542),_=n(8973);let Z=e=>{let{title:t,anchorEl:n,href:o="",children:u}=e,{black:d,turquoise:p}=P.O9,{body:f}=P.cp;return(0,r.tZ)(b,{variant:"popover",popupId:t,children:e=>(0,r.BX)(r.HY,{children:[(0,r.tZ)(l(),{href:o,children:(0,r.tZ)(c.Z,{sx:{...f,height:"100%",textAlign:"center",fontWeight:700,textTransform:"none",color:d,whiteSpace:"nowrap",cursor:"pointer",borderTop:"6px solid transparent",borderRadius:0,"&:hover":{color:p,borderTop:"6px solid ".concat(p),backgroundColor:"transparent",img:{filter:"brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)"}}},...function(e){let{open:t,onMouseLeave:n}=e;return{...function({isOpen:e,popupId:t,variant:n}){return{..."popover"===n?{"aria-haspopup":!0,"aria-controls":e&&null!=t?t:void 0}:"popper"===n?{"aria-describedby":e&&null!=t?t:void 0}:void 0}}(e),onTouchStart:t,onMouseOver:t,onMouseLeave:n}}(e),children:(0,r.BX)(s.ZP,{container:!0,direction:"row",wrap:"nowrap",children:[(0,r.tZ)(s.ZP,{item:!0,children:t}),u&&(0,r.tZ)(s.ZP,{item:!0,children:(0,r.tZ)(a.Z,{sx:{ml:"6px",mr:"-6px",mt:"-3px",width:20},children:(0,r.tZ)(i(),{src:_.default,alt:"",loader:P._m})})})]})})}),u&&(0,r.tZ)(y,{elevation:0,...function({isOpen:e,anchorEl:t,anchorPosition:n,close:r,popupId:o,onMouseLeave:l,disableAutoFocus:u,_openEventType:i}){return{id:o,anchorEl:t,anchorPosition:n,anchorReference:"contextmenu"===i?"anchorPosition":"anchorEl",open:e,onClose:r,onMouseLeave:l,...u&&{disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0}}}(e),anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},PaperProps:{sx:{backgroundColor:"".concat(p,"df"),minWidth:584,mt:-1,a:{textDecoration:"none"}}},children:(0,r.tZ)(a.Z,{sx:{pt:2},children:u})})]})})}}}]);