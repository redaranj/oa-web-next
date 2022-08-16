(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{57922:function(e,i,n){"use strict";n.d(i,{Z:function(){return Z}});var r=n(63366),t=n(87462),o=n(67294),a=n(86010),s=n(8662),c=n(94780),h=n(11496),d=n(27623),l=n(96067),u=n(30577),p=n(2734),g=n(51705),m=n(34867);function x(e){return(0,m.Z)("MuiCollapse",e)}(0,n(1588).Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var f=n(85893);const j=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],w=(0,h.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:n}=e;return[i.root,i[n.orientation],"entered"===n.state&&i.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&i.hidden]}})((({theme:e,ownerState:i})=>(0,t.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===i.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===i.state&&(0,t.Z)({height:"auto",overflow:"visible"},"horizontal"===i.orientation&&{width:"auto"}),"exited"===i.state&&!i.in&&"0px"===i.collapsedSize&&{visibility:"hidden"}))),v=(0,h.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,i)=>i.wrapper})((({ownerState:e})=>(0,t.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),y=(0,h.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,i)=>i.wrapperInner})((({ownerState:e})=>(0,t.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),b=o.forwardRef((function(e,i){const n=(0,d.Z)({props:e,name:"MuiCollapse"}),{addEndListener:h,children:m,className:b,collapsedSize:Z="0px",component:k,easing:S,in:A,onEnter:C,onEntered:P,onEntering:T,onExit:D,onExited:E,onExiting:M,orientation:N="vertical",style:I,timeout:O=l.x9.standard,TransitionComponent:H=s.ZP}=n,F=(0,r.Z)(n,j),V=(0,t.Z)({},n,{orientation:N,collapsedSize:Z}),z=(e=>{const{orientation:i,classes:n}=e,r={root:["root",`${i}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${i}`],wrapperInner:["wrapperInner",`${i}`]};return(0,c.Z)(r,x,n)})(V),U=(0,p.Z)(),G=o.useRef(),L=o.useRef(null),B=o.useRef(),W="number"===typeof Z?`${Z}px`:Z,R="horizontal"===N,_=R?"width":"height";o.useEffect((()=>()=>{clearTimeout(G.current)}),[]);const $=o.useRef(null),Y=(0,g.Z)(i,$),K=e=>i=>{if(e){const n=$.current;void 0===i?e(n):e(n,i)}},q=()=>L.current?L.current[R?"clientWidth":"clientHeight"]:0,Q=K(((e,i)=>{L.current&&R&&(L.current.style.position="absolute"),e.style[_]=W,C&&C(e,i)})),X=K(((e,i)=>{const n=q();L.current&&R&&(L.current.style.position="");const{duration:r,easing:t}=(0,u.C)({style:I,timeout:O,easing:S},{mode:"enter"});if("auto"===O){const i=U.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${i}ms`,B.current=i}else e.style.transitionDuration="string"===typeof r?r:`${r}ms`;e.style[_]=`${n}px`,e.style.transitionTimingFunction=t,T&&T(e,i)})),J=K(((e,i)=>{e.style[_]="auto",P&&P(e,i)})),ee=K((e=>{e.style[_]=`${q()}px`,D&&D(e)})),ie=K(E),ne=K((e=>{const i=q(),{duration:n,easing:r}=(0,u.C)({style:I,timeout:O,easing:S},{mode:"exit"});if("auto"===O){const n=U.transitions.getAutoHeightDuration(i);e.style.transitionDuration=`${n}ms`,B.current=n}else e.style.transitionDuration="string"===typeof n?n:`${n}ms`;e.style[_]=W,e.style.transitionTimingFunction=r,M&&M(e)}));return(0,f.jsx)(H,(0,t.Z)({in:A,onEnter:Q,onEntered:J,onEntering:X,onExit:ee,onExited:ie,onExiting:ne,addEndListener:e=>{"auto"===O&&(G.current=setTimeout(e,B.current||0)),h&&h($.current,e)},nodeRef:$,timeout:"auto"===O?null:O},F,{children:(e,i)=>(0,f.jsx)(w,(0,t.Z)({as:k,className:(0,a.Z)(z.root,b,{entered:z.entered,exited:!A&&"0px"===W&&z.hidden}[e]),style:(0,t.Z)({[R?"minWidth":"minHeight"]:W},I),ownerState:(0,t.Z)({},V,{state:e}),ref:Y},i,{children:(0,f.jsx)(v,{ownerState:(0,t.Z)({},V,{state:e}),className:z.wrapper,ref:L,children:(0,f.jsx)(y,{ownerState:(0,t.Z)({},V,{state:e}),className:z.wrapperInner,children:m})})}))}))}));b.muiSupportAuto=!0;var Z=b},57854:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return n(7531)}])},174:function(e,i,n){"use strict";n.d(i,{S:function(){return h}});var r=n(14924),t=n(85893),o=n(87357),a=n(74901),s=n(50600),c=a.O9.white,h=function(e){var i,n=e.backgroundColor,h=void 0===n?c:n,d=e.backgroundImage,l=e.sx,u=void 0===l?{}:l,p=e.children,g=a.AV.ps,m=a.AV.ts,x=a.AV.dl;return(0,t.jsx)(s.N,{backgroundColor:h,backgroundImage:d,sx:u,children:(0,t.jsx)(o.Z,{sx:(i={pt:"90px"},(0,r.Z)(i,g,{pt:"50px"}),(0,r.Z)(i,m,{pt:"80px"}),(0,r.Z)(i,x,{pt:"90px"}),i),children:p})})}},73559:function(e,i,n){"use strict";n.d(i,{U:function(){return b}});var r=n(26042),t=n(69396),o=n(85893),a=n(41664),s=n.n(a),c=n(25675),h=n.n(c),d=n(83321),l=n(87357),u=n(74901),p=n(17066),g=n(92778),m=u.O9.black,x=u.O9.white,f=u.O9.mediumGrey,j=u.O9.turquoise,w=u.cp.body,v={up:g.default,down:g.default,right:p.default},y=function(e){var i=e.textColor,n=void 0===i?m:i,a=e.borderColor,s=void 0===a?f:a,c=e.arrowDirection,p=void 0===c?"none":c,g=e.onClick,y=e.children;return(0,o.jsxs)(d.Z,{onClick:g,sx:(0,t.Z)((0,r.Z)({border:"1px solid ".concat(s)},w),{borderRadius:"500px",fontWeight:700,textTransform:"none",color:n,p:1.25,pl:"40px",pr:"40px","&:hover":{backgroundColor:j,border:"1px solid ".concat(j),color:x,img:{filter:"brightness(0) saturate(100%) invert(93%) sepia(93%) saturate(27%) hue-rotate(99deg) brightness(107%) contrast(105%)"}}}),children:[y,"none"!==p&&(0,o.jsx)(l.Z,{sx:{ml:"8px",mt:"up"===p?"4px":"-3px",transform:"up"===p?"rotate(180deg)":null},children:(0,o.jsx)(h(),{src:v[p],alt:"",loader:u._m})})]})},b=function(e){var i=e.textColor,n=e.borderColor,r=e.arrowDirection,t=e.href,a=e.onClick,c=e.children;return t?(0,o.jsx)(s(),{href:t,passHref:!0,children:(0,o.jsx)(y,{textColor:i,borderColor:n,arrowDirection:r,children:c})}):(0,o.jsx)(y,{textColor:i,borderColor:n,arrowDirection:r,onClick:a,children:c})}},8284:function(e,i,n){"use strict";n.d(i,{Ax:function(){return t},po:function(){return r}});var r=function(e){return n(50425)("./".concat(e.props.children.props.src)).default},t=function(e){return e.props.children.props.href}},7531:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return M}});var r=n(85893),t=n(11151),o=n(14924),a=n(59637),s=n(25675),c=n.n(s),h=n(86886),d=n(87357),l=n(74901),u=n(174),p=n(41149),g=function(e){var i,n,t,s,g,m=e.children,x=l.O9.lightGrey,f=l.O9.mediumGrey,j=l.cp.bodyLarge,w=l.AV.ps,v=l.AV.pl,y=l.AV.ts,b=l.AV.tl,Z=l.AV.ds,k=l.AV.dl,S=(0,a.Z)(m),A=S[0],C=S.slice(1);return(0,r.jsx)(u.S,{backgroundColor:x,children:(0,r.jsxs)(h.ZP,{container:!0,sx:(i={borderBottom:"1px solid ".concat(f),flexDirection:"row"},(0,o.Z)(i,w,{flexDirection:"column"}),(0,o.Z)(i,b,{flexDirection:"row"}),i),children:[(0,r.jsx)(h.ZP,{container:!0,direction:"column",justifyContent:"space-around",item:!0,sx:(n={width:"50%",pr:8},(0,o.Z)(n,w,{width:"100%",pt:4}),(0,o.Z)(n,y,{width:"100%",pt:6}),(0,o.Z)(n,b,{width:"50%"}),n),children:(0,r.jsxs)(h.ZP,{item:!0,container:!0,direction:"column",children:[(0,r.jsx)(h.ZP,{item:!0,children:A}),(0,r.jsx)(h.ZP,{item:!0,children:(0,r.jsx)(d.Z,{sx:(t={"> p":j,maxWidth:600,mb:6},(0,o.Z)(t,w,{maxWidth:"100%",mb:4}),(0,o.Z)(t,v,{maxWidth:"100%",mb:4}),(0,o.Z)(t,b,{maxWidth:400,mb:6}),(0,o.Z)(t,Z,{maxWidth:500}),(0,o.Z)(t,k,{maxWidth:600}),t),children:C})})]})}),(0,r.jsx)(h.ZP,{item:!0,sx:(s={width:"50%"},(0,o.Z)(s,w,{width:"100%"}),(0,o.Z)(s,y,{width:"50%"}),s),children:(0,r.jsx)(d.Z,{sx:(g={width:700,mb:-1},(0,o.Z)(g,w,{width:"100%",margin:"auto",mt:6}),(0,o.Z)(g,y,{width:600,mb:0,mt:8}),(0,o.Z)(g,b,{width:550}),(0,o.Z)(g,Z,{mr:"-20px",width:600,mb:-1}),(0,o.Z)(g,k,{mr:"-20px",width:700}),g),children:(0,r.jsx)(c(),{src:p.default,alt:"",loader:l._m})})})]})})},m=(n(14408),n(50600)),x=(n(37595),function(e){var i=e.children,n=l.O9.lightGrey,t=(0,a.Z)(i),o=t[0],s=t.slice(1);return(0,r.jsx)(m.N,{backgroundColor:n,children:(0,r.jsxs)(h.ZP,{container:!0,direction:"column",rowSpacing:8,children:[(0,r.jsx)(h.ZP,{item:!0,children:o}),s]})})}),f=n(67294),j=n(57922),w=n(73559),v=function(e){var i,n=e.name,t=e.jobTitle,a=void 0===t?"":t,s=e.bio,u=e.image,p=e.backgroundColor,g=e.expand,m=void 0!==g&&g,x=(0,f.useState)(!1),v=x[0],y=x[1],b=l.O9.turquoise,Z=l.O9.mediumGrey,k=l.O9.white,S=l.O9.black,A=l.cp.bodyLarge,C=l.AV.ps,P=l.AV.tl;return(0,r.jsx)(h.ZP,{item:!0,children:(0,r.jsx)(d.Z,{sx:{backgroundColor:p,p:6,pb:0},children:(0,r.jsxs)(h.ZP,{item:!0,container:!0,flexWrap:"nowrap",spacing:4,sx:(i={flexDirection:"row"},(0,o.Z)(i,C,{flexDirection:"column"}),(0,o.Z)(i,P,{flexDirection:"row"}),i),children:[(0,r.jsxs)(h.ZP,{item:!0,container:!0,direction:"row",sx:{width:"50%"},flexWrap:"nowrap",spacing:4,children:[(0,r.jsx)(h.ZP,{item:!0,children:(0,r.jsx)(d.Z,{sx:{mt:-10,width:120,p:1,backgroundColor:k,border:"1px solid ".concat(Z)},children:(0,r.jsx)(c(),{src:u,alt:"",loader:l._m})})}),(0,r.jsxs)(h.ZP,{item:!0,container:!0,direction:"column",children:[n,(0,r.jsx)(d.Z,{sx:{mt:2,"> p":{color:b}},children:a})]})]}),(0,r.jsx)(h.ZP,{item:!0,container:!0,direction:"column",sx:{width:"50%"},children:(0,r.jsxs)(h.ZP,{item:!0,children:[!m&&(0,r.jsx)(d.Z,{sx:{"> p":A,pb:2,minHeight:250},children:s}),m&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z,{in:v,collapsedSize:200,children:(0,r.jsx)(d.Z,{sx:{"> p":A,pb:2},children:s})}),(0,r.jsxs)(d.Z,{sx:{position:"relative"},children:[(0,r.jsx)(d.Z,{sx:{position:"absolute",top:-30,width:"100%",height:30,background:"linear-gradient(to bottom, ".concat(p,"dd 0%, ").concat(p,"ff 100%)")}}),(0,r.jsx)(w.U,{textColor:S,arrowDirection:v?"up":"down",onClick:function(){return y(!v)},children:v?"Less":"More"})]})]})]})})]})})})},y=n(8284),b=function(e){var i=e.expand,n=void 0!==i&&i,t=e.children,o=l.O9.white,s=(0,a.Z)(t),c=s[0],h=s[1],d=s[2],u=s.slice(3),p=(0,y.po)(c);return(0,r.jsx)(v,{name:h,jobTitle:d,bio:u,image:p,backgroundColor:o,expand:n})},Z=function(e){var i=e.children,n=l.O9.white,t=(0,a.Z)(i),o=t[0],s=t.slice(1);return(0,r.jsx)(m.N,{backgroundColor:n,children:(0,r.jsxs)(h.ZP,{container:!0,direction:"column",rowSpacing:8,children:[(0,r.jsx)(h.ZP,{item:!0,children:o}),s]})})},k=function(e){var i=e.expand,n=void 0!==i&&i,t=e.children,o=l.O9.lightGrey,s=(0,a.Z)(t),c=s[0],h=s[1],d=s.slice(2),u=(0,y.po)(c);return(0,r.jsx)(v,{name:h,bio:d,image:u,backgroundColor:o,expand:n})},S=n(78691),A=function(e){var i,n,t=e.children,a=l.O9.white,s=l.O9.lightGrey,u=l.cp.outlinedButton,p=l.cp.bodyLarge,g=l.AV.ps,x=l.AV.tl;return(0,r.jsx)(m.N,{backgroundColor:a,children:(0,r.jsxs)(h.ZP,{container:!0,sx:(i={flexDirection:"row"},(0,o.Z)(i,g,{flexDirection:"column"}),(0,o.Z)(i,x,{flexDirection:"row"}),i),children:[(0,r.jsx)(h.ZP,{container:!0,direction:"column",justifyContent:"space-around",item:!0,sx:(n={width:"50%"},(0,o.Z)(n,g,{width:"100%"}),(0,o.Z)(n,x,{width:"50%"}),n),children:(0,r.jsx)(h.ZP,{item:!0,children:(0,r.jsx)(d.Z,{sx:{"> p":p,backgroundColor:s,py:10,px:5,a:u},children:t})})}),(0,r.jsx)(h.ZP,{item:!0,sx:{width:"50%"},children:(0,r.jsx)(d.Z,{sx:{width:"100%"},children:(0,r.jsx)(c(),{src:S.default,alt:"",loader:l._m})})})]})})},C=function(e){var i,n=e.children,t=l.O9.white,s=l.O9.mediumBurgundy,c=l.O9.darkBurgundy,d=l.cp.bodyLarge,u=l.AV.ps,p=l.AV.tl,g=(0,a.Z)(n),x=g[0],f=g[1],j=g.slice(2);return(0,r.jsx)(m.N,{backgroundColor:t,children:(0,r.jsxs)(h.ZP,{container:!0,direction:"column",sx:{mt:10},children:[(0,r.jsx)(h.ZP,{item:!0,sx:{textAlign:"center"},children:x}),(0,r.jsx)(h.ZP,{item:!0,sx:{textAlign:"center","> p":d},children:f}),(0,r.jsx)(h.ZP,{item:!0,container:!0,spacing:6,alignItems:"flex-end",sx:(i={pt:6,pb:12,flexDirection:"row"},(0,o.Z)(i,u,{flexDirection:"column"}),(0,o.Z)(i,p,{flexDirection:"row"}),(0,o.Z)(i,".participateItem:nth-of-type(2) a",{border:0,color:t,backgroundColor:s,"&:hover":{backgroundColor:c}}),i),children:j})]})})},P=n(26042),T=n(69396),D=function(e){var i,n=e.children,t=l.O9.lightTurquoise,s=l.AV.ps,c=l.AV.tl,u=l.AV.ds,p=l.cp.outlinedButton,g=(0,a.Z)(n),m=g[0],x=g.slice(1);return(0,r.jsx)(h.ZP,{className:"participateItem",item:!0,sx:(i={width:"33%",height:360},(0,o.Z)(i,s,{width:"100%"}),(0,o.Z)(i,c,{width:"50%"}),(0,o.Z)(i,u,{width:"33%"}),i),children:(0,r.jsx)(h.ZP,{item:!0,container:!0,direction:"column",justifyContent:"space-between",sx:{height:"100%"},children:(0,r.jsx)(d.Z,{sx:{height:"100%",backgroundColor:t,p:3,pb:0,"> p":{display:"inline-block"},a:(0,T.Z)((0,P.Z)({},p),{m:0,mr:1})},children:(0,r.jsxs)(h.ZP,{container:!0,direction:"column",justifyContent:"space-between",sx:{height:"100%"},children:[(0,r.jsx)(h.ZP,{item:!0,children:m}),(0,r.jsx)(h.ZP,{item:!0,children:x})]})})})})};function E(e){var i=Object.assign({h1:"h1",strong:"strong",p:"p",h2:"h2",img:"img",h6:"h6",a:"a",h5:"h5"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g,{children:[(0,r.jsxs)(i.h1,{children:["Our ",(0,r.jsx)(i.strong,{children:"Team"})]}),(0,r.jsx)(i.p,{children:"We are a team of archival activists collaborating with human rights defenders and at-risk communities to create responsive, secure, and ethical archiving technologies to advance justice and accountability."})]}),"\n",(0,r.jsxs)(x,{children:[(0,r.jsxs)(i.h2,{children:[(0,r.jsx)(i.strong,{children:"Team"})," Members"]}),(0,r.jsxs)(b,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"natalie.png",alt:"Natalie Cadranel",width:"1101",height:"1140"})}),(0,r.jsx)(i.h6,{children:"Natalie Cadranel"}),(0,r.jsx)(i.p,{children:"Founder and Director"}),(0,r.jsx)(i.p,{children:"Natalie is an archivist and ethnographer working at the nexus of human rights, design, and technology. She aims to protect and amplify community media by helping organizations better manage, protect, and preserve documentation they create and receive. She consults with human rights-focused organizations worldwide and was a 2019 fellow at Stanford's Digital Civil Society Lab. For the last decade, she shaped initiatives dedicated to improving access to information for social and environmental justice organizations. She holds a Masters from the UC Berkeley School of Information and a Bachelors in International Relations from UC Davis."})]}),(0,r.jsxs)(b,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"vani.png",alt:"Vani Chitkara",width:"1101",height:"1351"})}),(0,r.jsx)(i.h6,{children:"Vani Chitkara"}),(0,r.jsx)(i.p,{children:"UX Developer/Designer"}),(0,r.jsxs)(i.p,{children:["Vani is a web developer, UI and graphics designer, and aspiring software developer. She is also an active member of several tech communities. She has led the Google Developer Student Club at \u200b\u200bIndira Gandhi Delhi Technical University for her university and has volunteered at several initiatives that supporting and upliftinguplift the women in tech. She was a student fellow at the Reboot Student Fellowship, which focuses a fellowship based on the intersection of tech, humanity, and power. She is interested in technology, reading, and writing. You can connect with her ",(0,r.jsx)(i.a,{href:"https://linktr.ee/VaniChitkara",children:"here"}),"."]})]}),(0,r.jsxs)(b,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"alex.png",alt:"Alex Esenler",width:"804",height:"1378"})}),(0,r.jsx)(i.h6,{children:"Alex Esenler"}),(0,r.jsx)(i.p,{children:"Director of Programs and Operations"}),(0,r.jsxs)(i.p,{children:["Alex is a data and database nerd who is passionate about knowledge sharing and building systems that amplify impact, improve workflows, and facilitate collaboration. She\u2019s been active in the digital and human rights, media and democracy, and communications spaces for nearly a decade through work with mission-oriented organizations such as ",(0,r.jsx)(i.a,{href:"https://globalvoices.org/",children:"Global Voices"}),",the Center for Global Communication Studies, and Annenberg School at the University of Pennsylvania. Recent projects include Global Voices's Civic Media Observatory which uses deep qualitative analysis from local researchers to increase understanding of what is going on in regional media ecosystems. She holds a Masters of Public Administration from the University of Pennsylvania and a Bachelors in History and Communications from McGill University in Montreal, Canada."]})]}),(0,r.jsxs)(b,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"benjamin.png",alt:"Benjamin Erhart",width:"946",height:"1031"})}),(0,r.jsx)(i.h6,{children:"Benjamin Erhart"}),(0,r.jsx)(i.p,{children:"Programmer"}),(0,r.jsxs)(i.p,{children:["Benjamin fell in love with computers when he was a teenager and still is today after over 20 years. His passion is to create tangible software for end users, breathing life into designer's visions. He's happiest when some healthy technical challenges and a higher purpose are stirred into the mix. Currently, he feels most at home developing mobile platforms, but has a long history in web tech, and a knack for security-related topics, which makes him well-suited for this era. He is self-employed and works out of his office in Salzburg, Austria. Find him ",(0,r.jsx)(i.a,{href:"https://die.netzarchitekten.com/",children:"here"}),"."]})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"eyes.svg",alt:"Nathan Freitas",width:"540",height:"416"})}),(0,r.jsx)(i.h6,{children:"Nathan Freitas"}),(0,r.jsx)(i.p,{children:"Tech Lead Emeritus"}),(0,r.jsxs)(i.p,{children:["Nathan is the Executive Director of ",(0,r.jsx)(i.a,{href:"https://guardianproject.info",children:"Guardian Project"})," and a Research Fellow at the Berkman Klein Center."]})]}),(0,r.jsxs)(b,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"kelcie.png",alt:"Kelcie Grega",width:"1044",height:"1276"})}),(0,r.jsx)(i.h6,{children:"Kelcie Grega"}),(0,r.jsx)(i.p,{children:"Program and Editorial Manager"}),(0,r.jsx)(i.p,{children:"Kelcie is a recovering journalist who strives to help improve media literacy within a digital landscape rife with false and misleading information. She's passionate about working at the intersection of privacy, verification, decentralization, and evidentiary media. She got her start as a fact-checker at the Arizona Republic, where she debunked false statements mentioned by public figures. She also spent time at the Las Vegas Sun writing about environmental issues, social justice and the brothel/sex work industry."})]}),(0,r.jsxs)(b,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"john.png",alt:"John Hess",width:"782",height:"1234"})}),(0,r.jsx)(i.h6,{children:"John Hess"}),(0,r.jsx)(i.p,{children:"Tech Lead"}),(0,r.jsx)(i.p,{children:"John is an engineer and data scientist with experience across domains as varied as aerospace, healthcare, and education. He\u2019s worked on cyber security, privacy, and disinformation as a Berkman Klein Assembly Fellow, led application teams at Google, and most recently became a volunteer EMT near his home in Wisconsin. He holds Masters degrees in Technology & Policy and Aeronautics & Astronautics from MIT."})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"pratik.png",alt:"Pratik Khivesara",width:"1024",height:"1376"})}),(0,r.jsx)(i.h6,{children:"Pratik Khivesara"}),(0,r.jsx)(i.p,{children:"Developer"}),(0,r.jsx)(i.p,{children:"Software architect for the past decade, has helped companies like General Motors, AT&T, PGA and various startups with heavy traffic mobile platforms. He started his own blockchain-first consulting firm (oaktreeapps.com) helping greenfield projects launch to market. Has a B.S. in Information and Science Technology from Penn State University."})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"angelica.png",alt:"Ang\xe9lica Pag\xe9s",width:"904",height:"922"})}),(0,r.jsx)(i.h6,{children:"Ang\xe9lica Pag\xe9s"}),(0,r.jsx)(i.p,{children:"UX/UI Designer"}),(0,r.jsx)(i.p,{children:"Angelica is a UX/UI designer, photographer and front-end developer. She is also a community manager at Argentina-based nonprofit Fundaci\xf3n Todav\xeda es Tiempo. Her passion is to help others fight against poverty, misinformation, and to create a safe space where history can be preserved for the next generations."})]}),(0,r.jsxs)(b,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"purvi.png",alt:"Purvi Shah",width:"1037",height:"1372"})}),(0,r.jsx)(i.h6,{children:"Purvi Shah"}),(0,r.jsx)(i.p,{children:"Developer"}),(0,r.jsx)(i.p,{children:"Purvi holds a Master's degree in Computer Applications and over 16 years of experience in Testing and Quality Assurance. She started her career with companies like Infosys and Cognizant Technology Solutions, and worked as Software Testing Lead. She has vast experience in testing mobile apps, software, web applications in various domains and industries. Testing and QA is not just the daily work but a passion for her."})]}),(0,r.jsxs)(b,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"viktoriia.png",alt:"Viktoriia Savchuk",width:"1074",height:"1248"})}),(0,r.jsx)(i.h6,{children:"Viktoriia Savchuk"}),(0,r.jsx)(i.p,{children:"Director of Communications"}),(0,r.jsx)(i.p,{children:"Viktoriia is a communications specialist with over six years' of experience working with non-profit organizations globally. She served as a freelance consultant with international organizations like Internews and UNICEF and worked with various open-source projects to help them develop strategies to communicate with the public more effectively. While working in Ukraine, she also implemented successful campaigns advocating for anti-corruption and healthcare reforms. Viktoriia earned her master's degree from Ohio University as a Fulbright grantee and is currently pursuing her doctoral degree in communication at the University of Maryland. She is interested in the role of media and technology in modern democracies and the interlinkage between digital media, political communication, and activism."})]})]}),"\n",(0,r.jsxs)(Z,{children:[(0,r.jsxs)(i.h2,{children:[(0,r.jsx)(i.strong,{children:"Advisory"})," Board"]}),(0,r.jsxs)(k,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"harlo.png",alt:"Harlo Holmes",width:"1248",height:"1264"})}),(0,r.jsx)(i.h6,{children:"Harlo Holmes"}),(0,r.jsxs)(i.p,{children:["Harlo is the Director of Newsroom Digital Security at ",(0,r.jsx)(i.a,{href:"https://freedom.press/",children:"Freedom of the Press Foundation"})," She strives to help individual journalists in various media organizations become confident and effective in securing their communications within their newsrooms, with their sources, and with the public at large. She is a media scholar, software programmer, and activist; and contributes regularly to the open source mobile security collective The Guardian Project."]})]}),(0,r.jsxs)(k,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"micah.png",alt:"Micah Lee",width:"762",height:"1286"})}),(0,r.jsx)(i.h6,{children:"Micah Lee"}),(0,r.jsxs)(i.p,{children:["Micah Lee is a computer security engineer and an open-source software developer at ",(0,r.jsx)(i.a,{href:"https://theintercept.com/",children:"The Intercept"}),". He writes about technical topics like digital and operational security, encryption tools, whistleblowing, and hacking using language that everyone can understand without dumbing it down. An avid user of Qubes and Linux, he develops security tools such as OnionShare. Before joining The Intercept, he worked as a staff technologist at the Electronic Frontier Foundation, where he explained how technologies work to journalists and lawyers, and worked to encrypt the web. He is also a founder and board member of the Freedom of the Press Foundation."]})]}),(0,r.jsxs)(k,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"nicole.png",alt:"Nicole Martin",width:"812",height:"1139"})}),(0,r.jsx)(i.h6,{children:"Nicole Martin"}),(0,r.jsxs)(i.p,{children:["Nicole Martin is the Senior Manager of Archives and Digital Systems at ",(0,r.jsx)(i.a,{href:"https://www.hrw.org/",children:"Human Rights Watch"})," where she established the organization\u2019s first digital archive. She holds a master\u2019s degree in Moving Image Archiving and Preservation from New York University, and teaches Digital Preservation as an adjunct professor in the same program. Nicole has worked with several nonprofit community media organizations, including Democracy Now!, The Lesbian Herstory Archives, and Deep Dish Television. She received an undergraduate degree in Film and Digital Media from the University of California, Santa Cruz, where she studied early interactive web design, electronic music, and queer film theory."]})]}),(0,r.jsxs)(k,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"eyes.svg",alt:"Beatrice Martini",width:"540",height:"416"})}),(0,r.jsx)(i.h6,{children:"Beatrice Martini"}),(0,r.jsxs)(i.p,{children:["Beatrice is the Education Coordinator for the ",(0,r.jsx)(i.a,{href:"https://www.accessnow.org/",children:"Access Now"})," Digital Security Helpline. Previously, she led the Human Rights Technology program at Aspiration and worked at the Open Knowledge Foundation and on several projects leveraging open source technology in support of justice and rights endeavors. She is also a research fellow at the Harvard Kennedy School, where she explores the implications of Internet infrastructure design on human rights, and serves in a formal advisory role with the Center for Tech Cultivation. Further information about her projects are available at beatricemartini.it."]})]}),(0,r.jsxs)(k,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"yvonne.png",alt:"Yvonne Ng",width:"989",height:"1234"})}),(0,r.jsx)(i.h6,{children:"Yvonne Ng"}),(0,r.jsxs)(i.p,{children:["Yvonne is the Archives Program Manager at ",(0,r.jsx)(i.a,{href:"https://www.witness.org/",children:"WITNESS"}),", where she trains and supports partners on collecting, managing, and preserving video documentation for human rights advocacy and evidence. She develops training resources related to archiving and preservation, such as the groundbreaking Activists' Guide to Archiving Video. Before joining WITNESS in 2009, Yvonne worked as a Research Fellow on the Preserving Digital Public Television Project, and at NYU Libraries, New York Public Library, and the Canadian Filmmakers' Distribution Centre. Yvonne holds an MA in Moving Image Archiving and Preservation from New York University, where she has also taught a course on Personal Digital Archiving. She holds a BA in Cinema Studies from the University of Toronto."]})]}),(0,r.jsxs)(k,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"cooper.png",alt:"Cooper Quintin",width:"896",height:"1265"})}),(0,r.jsx)(i.h6,{children:"Cooper Quintin"}),(0,r.jsxs)(i.p,{children:["Cooper is a security researcher and Senior Staff Technologist at the ",(0,r.jsx)(i.a,{href:"https://www.eff.org/",children:"Electronic Frontier Foundation"}),". He has worked on projects such as Privacy Badger, Canary Watch, and analysis of state- sponsored malware. He has also performed security trainings for activists, nonprofit workers and ordinary folks around the world. He previously built worked building websites for nonprofits, such as Greenpeace, Adbusters, and the Chelsea Manning Support Network. He also was a co-founder of the Hackbloc hacktivist collective. In his spare time he enjoys playing music and participating in street protests."]})]}),(0,r.jsxs)(k,{expand:!0,children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"teague.png",alt:"Teague Schneiter",width:"989",height:"1044"})}),(0,r.jsx)(i.h6,{children:"Teague Schneiter"}),(0,r.jsxs)(i.p,{children:["Teague serves as the Sr. Manager of the Academy of Motion Picture Arts and Sciences' ",(0,r.jsx)(i.a,{href:"https://www.oscars.org/oral-history/collections",children:"Oral History Projects department"}),", where she is responsible for new video productions and the acquisition of a collection of over 2,000 legacy interviews with filmmakers (1948-present). As the initiative's founder, she has been responsible for strategic planning; developing born digital video production, research, description, metadata and access practices specific to oral history; collection development; digital preservation planning; curatorial projects; cross-institutional initiatives; and outreach. She has been involved in multiple grants projects, including co-developing an oral history project dedicated to documenting the stories of Latina/o/x and Latin American filmmakers which resulted in a richly searchable multilingual website using OHMS for the Getty's 2017 PST:LA/LA cultural festival."]}),(0,r.jsx)(i.p,{children:"Teague is a graduate of the University of Amsterdam's moving image preservation program, and worked in the early part of her career with oral history, human rights and other cultural heritage materials in Australia, the Netherlands, Canada, and the United States with organizations such as WITNESS and IsumaTV. Since November 2016, Teague has served on the Board of AMIA, served as Vice President, and co-founded: AMIA's CEA Task Force, ADIFP Fellowship Task Force, Advocacy Committee of the Board, and Oral History Committee. She is an active member of the Oral History Association's Archives Interest Group and founder of a best practices collective with the craft guilds called the MICD Alliance. She proudly serves on the board of OpenArchive."})]})]}),"\n",(0,r.jsxs)(A,{children:[(0,r.jsxs)(i.h2,{children:[(0,r.jsx)(i.strong,{children:"Join"})," our team"]}),(0,r.jsx)(i.p,{children:"OpenArchive is an experienced research and development nonprofit organization dedicated to the ethical collection and long-term preservation of mobile media. We work to promote freedom of expression and privacy on the internet by creating tools, guides, and workshops to protect human rights defenders and their media."}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"/jobs",children:"All vacancies"})})]}),"\n",(0,r.jsxs)(C,{children:[(0,r.jsxs)(i.h2,{children:["Get ",(0,r.jsx)(i.strong,{children:"Involved"})]}),(0,r.jsx)(i.p,{children:"Together, we can preserve truth to power!"}),(0,r.jsxs)(D,{children:[(0,r.jsx)(i.h5,{children:"Learn more"}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/about",children:"About"}),"\n",(0,r.jsx)(i.a,{href:"/faq",children:"FAQ"})]})]}),(0,r.jsxs)(D,{children:[(0,r.jsx)(i.h5,{children:"Support our work"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"/donate",children:"Donate"})})]}),(0,r.jsxs)(D,{children:[(0,r.jsx)(i.h5,{children:"Partner with us"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"/partner",children:"Partner"})})]})]})]})}var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=Object.assign({},(0,t.ah)(),e.components),n=i.wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(E,e)})):E(e)}},39474:function(e,i,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(i,{Z:function(){return r}})},13375:function(e,i,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(i,{Z:function(){return r}})},53128:function(e,i,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(i,{Z:function(){return r}})},59637:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(39474),o=r(13375),a=r(53128),s=r(37688);function c(e){return(0,t.Z)(e)||(0,o.Z)(e)||(0,s.Z)(e,i)||(0,a.Z)()}},37688:function(e,i,n){"use strict";function r(e,i){(null==i||i>e.length)&&(i=e.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=e[n];return r}function t(e,i){if(e){if("string"===typeof e)return r(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,i):void 0}}n.d(i,{Z:function(){return t}})}},function(e){e.O(0,[774,888,179],(function(){return i=57854,e(e.s=i);var i}));var i=e.O();_N_E=i}]);