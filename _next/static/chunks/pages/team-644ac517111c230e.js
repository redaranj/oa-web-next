(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{93481:function(e,i,t){"use strict";t.d(i,{Z:function(){return k}});var n=t(63366),r=t(87462),a=t(67294),o=t(86010),s=t(8662),h=t(94780),l=t(67074),c=t(45959),d=t(53204),p=t(53566),u=t(62097),m=t(84771),g=t(34867);function x(e){return(0,g.Z)("MuiCollapse",e)}(0,t(1588).Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var w=t(85893);let f=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],v=e=>{let{orientation:i,classes:t}=e,n={root:["root",`${i}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${i}`],wrapperInner:["wrapperInner",`${i}`]};return(0,h.Z)(n,x,t)},j=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver(e,i){let{ownerState:t}=e;return[i.root,i[t.orientation],"entered"===t.state&&i.entered,"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&i.hidden]}})(({theme:e,ownerState:i})=>(0,r.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===i.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===i.state&&(0,r.Z)({height:"auto",overflow:"visible"},"horizontal"===i.orientation&&{width:"auto"}),"exited"===i.state&&!i.in&&"0px"===i.collapsedSize&&{visibility:"hidden"})),y=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,i)=>i.wrapper})(({ownerState:e})=>(0,r.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),b=(0,l.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,i)=>i.wrapperInner})(({ownerState:e})=>(0,r.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),Z=a.forwardRef(function(e,i){let t=(0,c.Z)({props:e,name:"MuiCollapse"}),{addEndListener:h,children:l,className:g,collapsedSize:x="0px",component:Z,easing:k,in:S,onEnter:C,onEntered:A,onEntering:P,onExit:D,onExited:M,onExiting:T,orientation:I="vertical",style:E,timeout:F=d.x9.standard,TransitionComponent:N=s.ZP}=t,H=(0,n.Z)(t,f),B=(0,r.Z)({},t,{orientation:I,collapsedSize:x}),O=v(B),z=(0,u.Z)(),U=a.useRef(),W=a.useRef(null),L=a.useRef(),R="number"==typeof x?`${x}px`:x,V="horizontal"===I,G=V?"width":"height";a.useEffect(()=>()=>{clearTimeout(U.current)},[]);let X=a.useRef(null),_=(0,m.Z)(i,X),K=e=>i=>{if(e){let t=X.current;void 0===i?e(t):e(t,i)}},Y=()=>W.current?W.current[V?"clientWidth":"clientHeight"]:0,$=K((e,i)=>{W.current&&V&&(W.current.style.position="absolute"),e.style[G]=R,C&&C(e,i)}),Q=K((e,i)=>{let t=Y();W.current&&V&&(W.current.style.position="");let{duration:n,easing:r}=(0,p.C)({style:E,timeout:F,easing:k},{mode:"enter"});if("auto"===F){let a=z.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${a}ms`,L.current=a}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[G]=`${t}px`,e.style.transitionTimingFunction=r,P&&P(e,i)}),J=K((e,i)=>{e.style[G]="auto",A&&A(e,i)}),q=K(e=>{e.style[G]=`${Y()}px`,D&&D(e)}),ee=K(M),ei=K(e=>{let i=Y(),{duration:t,easing:n}=(0,p.C)({style:E,timeout:F,easing:k},{mode:"exit"});if("auto"===F){let r=z.transitions.getAutoHeightDuration(i);e.style.transitionDuration=`${r}ms`,L.current=r}else e.style.transitionDuration="string"==typeof t?t:`${t}ms`;e.style[G]=R,e.style.transitionTimingFunction=n,T&&T(e)}),et=e=>{"auto"===F&&(U.current=setTimeout(e,L.current||0)),h&&h(X.current,e)};return(0,w.jsx)(N,(0,r.Z)({in:S,onEnter:$,onEntered:J,onEntering:Q,onExit:q,onExited:ee,onExiting:ei,addEndListener:et,nodeRef:X,timeout:"auto"===F?null:F},H,{children:(e,i)=>(0,w.jsx)(j,(0,r.Z)({as:Z,className:(0,o.Z)(O.root,g,{entered:O.entered,exited:!S&&"0px"===R&&O.hidden}[e]),style:(0,r.Z)({[V?"minWidth":"minHeight"]:R},E),ownerState:(0,r.Z)({},B,{state:e}),ref:_},i,{children:(0,w.jsx)(y,{ownerState:(0,r.Z)({},B,{state:e}),className:O.wrapper,ref:W,children:(0,w.jsx)(b,{ownerState:(0,r.Z)({},B,{state:e}),className:O.wrapperInner,children:l})})}))}))});Z.muiSupportAuto=!0;var k=Z},57854:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return t(14697)}])},82604:function(e,i,t){"use strict";t.d(i,{S:function(){return h}});var n=t(35944),r=t(61953),a=t(44542),o=t(62452);let{white:s}=a.O9,h=e=>{let{backgroundColor:i=s,backgroundImage:t,sx:h={},children:l}=e,{ps:c,ts:d,dl:p}=a.AV;return(0,n.tZ)(o.N,{backgroundColor:i,backgroundImage:t,sx:h,children:(0,n.tZ)(r.Z,{sx:{pt:"90px",[c]:{pt:"50px"},[d]:{pt:"80px"},[p]:{pt:"90px"}},children:l})})}},14778:function(e,i,t){"use strict";t.d(i,{U:function(){return j}});var n=t(35944),r=t(41664),a=t.n(r),o=t(89755),s=t.n(o),h=t(75084),l=t(61953),c=t(44542),d=t(99029),p=t(8973);let{black:u,white:m,mediumGrey:g,turquoise:x}=c.O9,{body:w}=c.cp,f={up:p.default,down:p.default,right:d.default},v=e=>{let{textColor:i=u,borderColor:t=g,arrowDirection:r="none",onClick:a,children:o}=e;return(0,n.BX)(h.Z,{onClick:a,sx:{border:"1px solid ".concat(t),...w,borderRadius:"500px",whiteSpace:"nowrap",fontWeight:700,textTransform:"none",color:i,p:1.25,pl:"40px",pr:"40px","&:hover":{backgroundColor:x,border:"1px solid ".concat(x),color:m,img:{filter:"brightness(0) saturate(100%) invert(93%) sepia(93%) saturate(27%) hue-rotate(99deg) brightness(107%) contrast(105%)"}}},children:[o,"none"!==r&&(0,n.tZ)(l.Z,{sx:{ml:"8px",mt:"up"===r?"4px":"-3px",transform:"up"===r?"rotate(180deg)":null},children:(0,n.tZ)(s(),{src:f[r],alt:"",loader:c._m})})]})},j=e=>{let{textColor:i,borderColor:t,arrowDirection:r,href:o,onClick:s,children:h}=e;return o?(0,n.tZ)(a(),{href:o,style:{textDecoration:"none !important"},children:(0,n.tZ)(v,{textColor:i,borderColor:t,arrowDirection:r,children:h})}):(0,n.tZ)(v,{textColor:i,borderColor:t,arrowDirection:r,onClick:s,children:h})}},66831:function(e,i,t){"use strict";t.d(i,{Ax:function(){return r},po:function(){return n}});let n=e=>t(50425)("./".concat(e.props.children.props.src)).default,r=e=>e.props.children.props.href},14697:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return D}});var n=t(85893),r=t(11151),a=t(35944),o=t(89755),s=t.n(o),h=t(79072),l=t(61953),c=t(44542),d=t(82604),p=t(46844);let u=e=>{let{children:i}=e,{lightGrey:t,mediumGrey:n}=c.O9,{bodyLarge:r}=c.cp,{ps:o,pl:u,ts:m,tl:g,ds:x,dl:w}=c.AV,[f,...v]=i;return(0,a.tZ)(d.S,{backgroundColor:t,children:(0,a.BX)(h.ZP,{container:!0,sx:{borderBottom:"1px solid ".concat(n),flexDirection:"row",[o]:{flexDirection:"column"},[g]:{flexDirection:"row"}},children:[(0,a.tZ)(h.ZP,{container:!0,direction:"column",justifyContent:"space-around",item:!0,sx:{width:"50%",pr:8,[o]:{width:"100%",pt:4},[m]:{width:"100%",pt:6},[g]:{width:"50%"}},children:(0,a.BX)(h.ZP,{item:!0,container:!0,direction:"column",children:[(0,a.tZ)(h.ZP,{item:!0,children:f}),(0,a.tZ)(h.ZP,{item:!0,children:(0,a.tZ)(l.Z,{sx:{"> p":r,maxWidth:600,mb:6,[o]:{maxWidth:"100%",mb:4},[u]:{maxWidth:"100%",mb:4},[g]:{maxWidth:400,mb:6},[x]:{maxWidth:500},[w]:{maxWidth:600}},children:v})})]})}),(0,a.tZ)(h.ZP,{item:!0,sx:{width:"50%",[o]:{width:"100%"},[m]:{width:"50%"}},children:(0,a.tZ)(l.Z,{sx:{width:700,mb:-1,[o]:{width:"100%",margin:"auto",mt:6},[m]:{width:600,mb:0,mt:8},[g]:{width:550},[x]:{mr:"-20px",width:600,mb:-1},[w]:{mr:"-20px",width:700}},children:(0,a.tZ)(s(),{src:p.default,alt:"",loader:c._m})})})]})})};t(14408);var m=t(62452);t(10826);let g=e=>{let{children:i}=e,{lightGrey:t}=c.O9,[n,...r]=i;return(0,a.tZ)(m.N,{backgroundColor:t,children:(0,a.BX)(h.ZP,{container:!0,direction:"column",rowSpacing:8,children:[(0,a.tZ)(h.ZP,{item:!0,children:n}),r]})})};var x=t(67294),w=t(93481),f=t(14778);let v=e=>{let{name:i,jobTitle:t="",bio:n,image:r,backgroundColor:o,expand:d=!1}=e,[p,u]=(0,x.useState)(!1),{turquoise:m,mediumGrey:g,white:v,black:j}=c.O9,{bodyLarge:y}=c.cp,{ps:b,tl:Z}=c.AV;return(0,a.tZ)(h.ZP,{item:!0,children:(0,a.tZ)(l.Z,{sx:{backgroundColor:o,p:6,pb:0,[b]:{p:3,mt:3},[Z]:{p:6,mt:0}},children:(0,a.BX)(h.ZP,{item:!0,container:!0,flexWrap:"nowrap",spacing:4,sx:{flexDirection:"row",[b]:{flexDirection:"column"},[Z]:{flexDirection:"row"}},children:[(0,a.BX)(h.ZP,{item:!0,container:!0,direction:"row",sx:{width:"50%",flexDirection:"row",[b]:{width:"100%",flexDirection:"column"},[Z]:{width:"50%",flexDirection:"row"}},flexWrap:"nowrap",spacing:4,children:[(0,a.tZ)(h.ZP,{item:!0,children:(0,a.tZ)(l.Z,{sx:{mt:-10,width:120,p:1,backgroundColor:v,border:"1px solid ".concat(g)},children:(0,a.tZ)(s(),{src:r,alt:"",loader:c._m})})}),(0,a.BX)(h.ZP,{item:!0,container:!0,direction:"column",children:[i,(0,a.tZ)(l.Z,{sx:{mt:2,"> p":{color:m,mb:0}},children:t})]})]}),(0,a.tZ)(h.ZP,{item:!0,container:!0,direction:"column",sx:{width:"50%",[b]:{width:"100%"},[Z]:{width:"50%"}},children:(0,a.BX)(h.ZP,{item:!0,sx:{borderTop:"none",[b]:{borderTop:"1px solid ".concat(g),pt:4},[Z]:{borderTop:"none",pt:0}},children:[!d&&(0,a.tZ)(l.Z,{sx:{"> p":y,pb:2,minHeight:250},children:n}),d&&(0,a.BX)(a.HY,{children:[(0,a.tZ)(w.Z,{in:p,collapsedSize:200,children:(0,a.tZ)(l.Z,{sx:{"> p":y,pb:2},children:n})}),(0,a.BX)(l.Z,{sx:{position:"relative"},children:[(0,a.tZ)(l.Z,{sx:{position:"absolute",top:-30,width:"100%",height:30,background:"linear-gradient(to bottom, ".concat(o,"dd 0%, ").concat(o,"ff 100%)")}}),(0,a.tZ)(f.U,{textColor:j,arrowDirection:p?"up":"down",onClick:()=>u(!p),children:p?"Less":"More"})]})]})]})})]})})})};var j=t(66831);let y=e=>{let{expand:i=!1,children:t}=e,{white:n}=c.O9,[r,o,s,...h]=t,l=(0,j.po)(r);return(0,a.tZ)(v,{name:o,jobTitle:s,bio:h,image:l,backgroundColor:n,expand:i})},b=e=>{let{children:i}=e,{white:t}=c.O9,[n,...r]=i;return(0,a.tZ)(m.N,{backgroundColor:t,children:(0,a.BX)(h.ZP,{container:!0,direction:"column",rowSpacing:8,children:[(0,a.tZ)(h.ZP,{item:!0,children:n}),r]})})},Z=e=>{let{expand:i=!1,children:t}=e,{lightGrey:n}=c.O9,[r,o,...s]=t,h=(0,j.po)(r);return(0,a.tZ)(v,{name:o,bio:s,image:h,backgroundColor:n,expand:i})};var k=t(24630);let S=e=>{let{children:i}=e,{white:t,lightGrey:n}=c.O9,{outlinedButton:r,bodyLarge:o}=c.cp,{ps:d,pl:p,ts:u,tl:g,ds:x,dl:w}=c.AV;return(0,a.tZ)(m.N,{backgroundColor:t,sx:{mb:-1,py:13,pb:0,px:11.25,[d]:{py:6,px:3,pb:0},[p]:{py:6,px:3,pb:0},[u]:{py:7,px:4.375,pb:0},[g]:{py:9,px:4.375,pb:0},[x]:{py:13,px:6.25,pb:0},[w]:{py:13,px:11.25,pb:0}},children:(0,a.BX)(h.ZP,{container:!0,sx:{flexDirection:"row",[d]:{flexDirection:"column"},[g]:{flexDirection:"row"}},children:[(0,a.tZ)(h.ZP,{item:!0,sx:{width:"50%",[d]:{width:"100%"},[g]:{width:"50%"}},children:(0,a.tZ)(l.Z,{sx:{backgroundColor:n},children:(0,a.tZ)(h.ZP,{container:!0,direction:"column",justifyContent:"space-around",children:(0,a.tZ)(h.ZP,{item:!0,children:(0,a.tZ)(l.Z,{sx:{"> p":o,py:10,px:5,a:r},children:i})})})})}),(0,a.tZ)(h.ZP,{item:!0,container:!0,direction:"column",justifyContent:"center",alignItems:"flex-end",sx:{width:"50%",backgroundColor:n},children:(0,a.tZ)(h.ZP,{item:!0,sx:{width:"100%"},children:(0,a.tZ)(l.Z,{sx:{width:"80%",backgroundColor:n,margin:"0 auto"},children:(0,a.tZ)(s(),{src:k.default,alt:"",loader:c._m})})})})]})})},C=e=>{let{children:i}=e,{white:t,mediumBurgundy:n,darkBurgundy:r}=c.O9,{bodyLarge:o}=c.cp,{ps:s,tl:l}=c.AV,[d,p,...u]=i;return(0,a.tZ)(m.N,{backgroundColor:t,children:(0,a.BX)(h.ZP,{container:!0,direction:"column",children:[(0,a.tZ)(h.ZP,{item:!0,sx:{textAlign:"center"},children:d}),(0,a.tZ)(h.ZP,{item:!0,sx:{textAlign:"center","> p":o},children:p}),(0,a.tZ)(h.ZP,{item:!0,container:!0,spacing:6,alignItems:"flex-end",sx:{pt:6,pb:12,flexDirection:"row",[s]:{flexDirection:"column"},[l]:{flexDirection:"row"},".participateItem:nth-of-type(2) a":{border:0,color:t,backgroundColor:n,"&:hover":{backgroundColor:r}}},children:u})]})})},A=e=>{let{children:i}=e,{lightTurquoise:t}=c.O9,{ps:n,tl:r,ds:o}=c.AV,{outlinedButton:s}=c.cp,[d,...p]=i;return(0,a.tZ)(h.ZP,{className:"participateItem",item:!0,sx:{width:"33%",height:360,[n]:{width:"100%"},[r]:{width:"50%"},[o]:{width:"33%"}},children:(0,a.tZ)(h.ZP,{item:!0,container:!0,direction:"column",justifyContent:"space-between",sx:{height:"100%"},children:(0,a.tZ)(l.Z,{sx:{height:"100%",backgroundColor:t,p:3,pb:0,"> p":{display:"inline-block"},a:{...s,m:0,mr:1},".mdx-link":{textDecoration:"none"}},children:(0,a.BX)(h.ZP,{container:!0,direction:"column",justifyContent:"space-between",sx:{height:"100%",a:{textDecoration:"none"}},children:[(0,a.tZ)(h.ZP,{item:!0,children:d}),(0,a.tZ)(h.ZP,{item:!0,children:p})]})})})})};function P(e){let i=Object.assign({h1:"h1",strong:"strong",p:"p",h2:"h2",img:"img",h6:"h6",a:"a",h5:"h5"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u,{children:[(0,n.jsxs)(i.h1,{children:["Our ",(0,n.jsx)(i.strong,{children:"Team"})]}),(0,n.jsx)(i.p,{children:"We are a team of archival activists collaborating with human rights defenders and at-risk communities worldwide. We work to create responsive, secure, and ethical archiving technologies to advance justice and accountability."})]}),"\n",(0,n.jsxs)(g,{children:[(0,n.jsxs)(i.h2,{children:[(0,n.jsx)(i.strong,{children:"Team"})," Members"]}),(0,n.jsxs)(y,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"natalie.png",alt:"Natalie Cadranel",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Natalie Cadranel"}),(0,n.jsx)(i.p,{children:"Founder and Executive Director"}),(0,n.jsx)(i.p,{children:"Natalie is an archivist and ethnographer working at the nexus of human rights, design, and technology. She aims to protect and amplify community media by helping organizations better manage, protect, and preserve documentation they create and receive. She consults with human rights-focused organizations worldwide and was a 2019 fellow at Stanford's Digital Civil Society Lab. For the last decade, she shaped initiatives dedicated to improving access to information for social and environmental justice organizations. She holds a Masters from the UC Berkeley School of Information and a Bachelors in International Relations from UC Davis."})]}),(0,n.jsxs)(y,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"vani.png",alt:"Vani Chitkara",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Vani Chitkara"}),(0,n.jsx)(i.p,{children:"UX Developer/Designer"}),(0,n.jsxs)(i.p,{children:["Vani is a web developer, UI and graphics designer, and aspiring software developer. She is also an active member of several tech communities. Vani has led the Google Developer Student Club at her university and has volunteered at several initiatives that uplift and support women in tech. She was a student fellow at Reboot, which focuses on the intersection of tech, humanity, and power. She is interested in technology, reading, and writing. You can connect with her ",(0,n.jsx)(i.a,{href:"https://linktr.ee/VaniChitkara",children:"here"}),"."]})]}),(0,n.jsxs)(y,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"Madeline.png",alt:"Madeline de Figueiredo",width:"948",height:"1084"})}),(0,n.jsx)(i.h6,{children:"Madeline de Figueiredo"}),(0,n.jsx)(i.p,{children:"Program Manager"}),(0,n.jsx)(i.p,{children:"Madeline is a digital security specialist and historian. She used to spend her time in the archives of library basements and museum storage rooms and is now dedicated to empowering communities to document the present. She has previously worked at Human Rights Watch, Internews, and Center for Legal Aid Voice in Bulgaria. Madeline holds a Bachelor's degree in History from the University of Chicago."})]}),(0,n.jsxs)(y,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"alex.png",alt:"Alex Esenler",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Alex Esenler"}),(0,n.jsx)(i.p,{children:"Deputy Director"}),(0,n.jsxs)(i.p,{children:["Alex is a data and database nerd who is passionate about knowledge sharing and building systems that amplify impact, improve workflows, and facilitate collaboration. She’s been active in the digital and human rights, media and democracy, and communications spaces for nearly a decade through work with mission-oriented organizations such as ",(0,n.jsx)(i.a,{href:"https://globalvoices.org/",children:"Global Voices"}),",the Center for Global Communication Studies, and Annenberg School at the University of Pennsylvania. Recent projects include Global Voices' Civic Media Observatory which uses deep qualitative analysis from local researchers to increase understanding of what is going on in regional media ecosystems. She holds a Masters of Public Administration from the University of Pennsylvania and a Bachelors in History and Communications from McGill University in Montreal, Canada."]})]}),(0,n.jsxs)(y,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"benjamin.png",alt:"Benjamin Erhart",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Benjamin Erhart"}),(0,n.jsx)(i.p,{children:"Programmer"}),(0,n.jsxs)(i.p,{children:["Benjamin fell in love with computers when he was a teenager and still is today after over 20 years. His passion is to create tangible software for end users, breathing life into designer's visions. He's happiest when some healthy technical challenges and a higher purpose are stirred into the mix. Currently, he feels most at home developing mobile platforms, but has a long history in web tech, and a knack for security-related topics, which makes him well-suited for this era. He is self-employed and works out of his office in Salzburg, Austria. Find him ",(0,n.jsx)(i.a,{href:"https://die.netzarchitekten.com/",children:"here"}),"."]})]}),(0,n.jsxs)(y,{children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"nathan.png",alt:"Nathan Freitas",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Nathan Freitas"}),(0,n.jsx)(i.p,{children:"Tech Lead Emeritus"}),(0,n.jsxs)(i.p,{children:["Nathan is the Executive Director of ",(0,n.jsx)(i.a,{href:"https://guardianproject.info",children:"Guardian Project"})," and a Research Fellow at the Berkman Klein Center."]})]}),(0,n.jsxs)(y,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"kelcie.png",alt:"Kelcie Grega",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Kelcie Grega"}),(0,n.jsx)(i.p,{children:"Program and Editorial Manager"}),(0,n.jsx)(i.p,{children:"Kelcie is a recovering journalist who strives to help improve media literacy within a digital landscape rife with false and misleading information. She's passionate about working at the intersection of privacy, verification, decentralization, and evidentiary media. She got her start as a fact-checker at the Arizona Republic, where she debunked false statements mentioned by public figures. She also spent time at the Las Vegas Sun writing about environmental issues, social justice and the brothel/sex work industry."})]}),(0,n.jsxs)(y,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"john.png",alt:"John Hess",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"John Hess"}),(0,n.jsx)(i.p,{children:"Tech Lead"}),(0,n.jsx)(i.p,{children:"John is an engineer and data scientist with experience across domains as varied as aerospace, healthcare, and education. He’s worked on cyber security, privacy, and disinformation as a Berkman Klein Assembly Fellow, led application teams at Google, and most recently became a volunteer EMT near his home in Wisconsin. He holds Masters degrees in Technology & Policy and Aeronautics & Astronautics from MIT."})]}),(0,n.jsxs)(y,{children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"pratik.png",alt:"Pratik Khivesara",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Pratik Khivesara"}),(0,n.jsx)(i.p,{children:"Developer"}),(0,n.jsx)(i.p,{children:"Software architect for the past decade, has helped companies like General Motors, AT&T, PGA and various startups with heavy traffic mobile platforms. He started his own blockchain-first consulting firm (oaktreeapps.com) helping greenfield projects launch to market. Has a B.S. in Information and Science Technology from Penn State University."})]}),(0,n.jsxs)(y,{children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"angelica.png",alt:"Ang\xe9lica Pag\xe9s",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Ang\xe9lica Pag\xe9s"}),(0,n.jsx)(i.p,{children:"UX/UI Designer"}),(0,n.jsx)(i.p,{children:"Angelica is a UX/UI designer, photographer and front-end developer. She is also a community manager at Argentina-based nonprofit Fundaci\xf3n Todav\xeda es Tiempo. Her passion is to help others fight against poverty, misinformation, and to create a safe space where history can be preserved for the next generations."})]}),(0,n.jsxs)(y,{children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"purvi.png",alt:"Purvi Shah",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Purvi Shah"}),(0,n.jsx)(i.p,{children:"Developer"}),(0,n.jsx)(i.p,{children:"Purvi holds a Master's degree in Computer Applications and over 16 years of experience in Testing and Quality Assurance. She started her career with companies like Infosys and Cognizant Technology Solutions, and worked as Software Testing Lead. She has vast experience in testing mobile apps, software, web applications in various domains and industries. Testing and QA is not just the daily work but a passion for her."})]}),(0,n.jsxs)(y,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"viktoriia.png",alt:"Viktoriia Savchuk",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Viktoriia Savchuk"}),(0,n.jsx)(i.p,{children:"Director of Communications"}),(0,n.jsx)(i.p,{children:"Viktoriia is a communications specialist with over six years' of experience working with non-profit organizations globally. She served as a freelance consultant with international organizations like Internews and UNICEF and worked with various open-source projects to help them develop strategies to communicate with the public more effectively. While working in Ukraine, she also implemented successful campaigns advocating for anti-corruption and healthcare reforms. Viktoriia earned her master's degree from Ohio University as a Fulbright grantee and is currently pursuing her doctoral degree in communication at the University of Maryland. She is interested in the role of media and technology in modern democracies and the interlinkage between digital media, political communication, and activism."})]})]}),"\n",(0,n.jsxs)(b,{children:[(0,n.jsxs)(i.h2,{children:[(0,n.jsx)(i.strong,{children:"Advisory"})," Board"]}),(0,n.jsxs)(Z,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"harlo.png",alt:"Harlo Holmes",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Harlo Holmes"}),(0,n.jsxs)(i.p,{children:["Harlo is the Director of Newsroom Digital Security at ",(0,n.jsx)(i.a,{href:"https://freedom.press/",children:"Freedom of the Press Foundation"})," She strives to help individual journalists in various media organizations become confident and effective in securing their communications within their newsrooms, with their sources, and with the public at large. She is a media scholar, software programmer, and activist; and contributes regularly to the open source mobile security collective The Guardian Project."]})]}),(0,n.jsxs)(Z,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"micah.png",alt:"Micah Lee",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Micah Lee"}),(0,n.jsxs)(i.p,{children:["Micah Lee is a computer security engineer and an open-source software developer at ",(0,n.jsx)(i.a,{href:"https://theintercept.com/",children:"The Intercept"}),". He writes about technical topics like digital and operational security, encryption tools, whistleblowing, and hacking using language that everyone can understand without dumbing it down. An avid user of Qubes and Linux, he develops security tools such as OnionShare. Before joining The Intercept, he worked as a staff technologist at the Electronic Frontier Foundation, where he explained how technologies work to journalists and lawyers, and worked to encrypt the web. He is also a founder and board member of the Freedom of the Press Foundation."]})]}),(0,n.jsxs)(Z,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"nicole.png",alt:"Nicole Martin",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Nicole Martin"}),(0,n.jsxs)(i.p,{children:["Nicole Martin is the Senior Manager of Archives and Digital Systems at ",(0,n.jsx)(i.a,{href:"https://www.hrw.org/",children:"Human Rights Watch"})," where she established the organization’s first digital archive. She holds a master’s degree in Moving Image Archiving and Preservation from New York University, and teaches Digital Preservation as an adjunct professor in the same program. Nicole has worked with several nonprofit community media organizations, including Democracy Now!, The Lesbian Herstory Archives, and Deep Dish Television. She received an undergraduate degree in Film and Digital Media from the University of California, Santa Cruz, where she studied early interactive web design, electronic music, and queer film theory."]})]}),(0,n.jsxs)(Z,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"beatrice.png",alt:"Beatrice Martini",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Beatrice Martini"}),(0,n.jsxs)(i.p,{children:["Beatrice is the Education Coordinator for the ",(0,n.jsx)(i.a,{href:"https://www.accessnow.org/",children:"Access Now"})," Digital Security Helpline. Previously, she led the Human Rights Technology program at Aspiration and worked at the Open Knowledge Foundation and on several projects leveraging open source technology in support of justice and rights endeavors. She is also a research fellow at the Harvard Kennedy School, where she explores the implications of Internet infrastructure design on human rights, and serves in a formal advisory role with the Center for Tech Cultivation. Further information about her projects are available at beatricemartini.it."]})]}),(0,n.jsxs)(Z,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"yvonne.png",alt:"Yvonne Ng",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Yvonne Ng"}),(0,n.jsxs)(i.p,{children:["Yvonne is the Archives Program Manager at ",(0,n.jsx)(i.a,{href:"https://www.witness.org/",children:"WITNESS"}),", where she trains and supports partners on collecting, managing, and preserving video documentation for human rights advocacy and evidence. She develops training resources related to archiving and preservation, such as the groundbreaking Activists' Guide to Archiving Video. Before joining WITNESS in 2009, Yvonne worked as a Research Fellow on the Preserving Digital Public Television Project, and at NYU Libraries, New York Public Library, and the Canadian Filmmakers' Distribution Centre. Yvonne holds an MA in Moving Image Archiving and Preservation from New York University, where she has also taught a course on Personal Digital Archiving. She holds a BA in Cinema Studies from the University of Toronto."]})]}),(0,n.jsxs)(Z,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"kurt.png",alt:"Kurt Opsahl",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Kurt Opsahl"}),(0,n.jsxs)(i.p,{children:["Kurt Opsahl is the Deputy Executive Director and General Counsel of the Electronic Frontier Foundation. In addition to representing clients on civil liberties, free speech and privacy law, Opsahl counsels on EFF projects and initiatives. Opsahl is the lead attorney on the ",(0,n.jsx)(i.a,{href:"https://www.eff.org/issues/coders",children:"Coders' Rights Project"}),", and is representing several companies who are challenging ",(0,n.jsx)(i.a,{href:"https://www.eff.org/issues/national-security-letters",children:"National Security Letters"}),". Before joining EFF, Opsahl worked at ",(0,n.jsx)(i.a,{href:"https://www.perkinscoie.com/",children:"Perkins Coie"}),", where he represented technology clients with respect to intellectual property, privacy, defamation, and other online liability matters, including working on ",(0,n.jsx)(i.a,{href:"https://www.eff.org/cases/kelly-v-arriba-soft",children:"Kelly v. Arribasoft"}),", ",(0,n.jsx)(i.a,{href:"https://www.eff.org/cases/mgm-v-grokster",children:"MGM v. Grokster"})," and ",(0,n.jsx)(i.a,{href:"https://www.eff.org/cases/costar-v-loopnet",children:"CoStar v. LoopNet"}),'. For his work responding to government subpoenas, Opsahl is proud to have been called a "rabid dog" by the Department of Justice. Prior to Perkins, Opsahl was a research fellow to Professor Pamela Samuelson at the ',(0,n.jsx)(i.a,{href:"http://www.sims.berkeley.edu/",children:"U.C. Berkeley School of Information Management & Systems"}),". Opsahl received his law degree from ",(0,n.jsx)(i.a,{href:"http://www.law.berkeley.edu/",children:"Boalt Hall"}),", and undergraduate degree from ",(0,n.jsx)(i.a,{href:"http://www.ucsc.edu/",children:"U.C. Santa Cruz"}),'. Opsahl co-authored "',(0,n.jsx)(i.a,{href:"http://www.amazon.com/exec/obidos/tg/detail/-/1879650118/",children:"Electronic Media and Privacy Law Handbook"}),'." In 2007, Opsahl was named as one of the "',(0,n.jsx)(i.a,{href:"https://www.dailyjournal.com/articles/316585-2007-california-lawyer-attorneys-of-the-year-awards",children:"Attorneys of the Year"}),'" by ',(0,n.jsx)(i.a,{href:"https://www.callawyer.com/",children:"California Lawyer magazine"})," for his work on the ",(0,n.jsx)(i.a,{href:"http://www.eff.org/Censorship/Apple_v_Does/",children:"O'Grady v. Superior Court"})," appeal. From 2014 to 2022, Opsahl served on the ",(0,n.jsx)(i.a,{href:"https://www.usenix.org/about",children:"USENIX"})," Board of Directors. Opsahl is a member of the ",(0,n.jsx)(i.a,{href:"https://fil.org/",children:"Filecoin Foundation"})," Advisory Board and the ",(0,n.jsx)(i.a,{href:"https://www.cisa.gov/about-cisa-cybersecurity-advisory-committee",children:"CISA Cybersecurity Advisory Committee"}),"’s Technical Advisory Council."]})]}),(0,n.jsxs)(Z,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"cooper.png",alt:"Cooper Quintin",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Cooper Quintin"}),(0,n.jsxs)(i.p,{children:["Cooper is a security researcher and Senior Staff Technologist at the ",(0,n.jsx)(i.a,{href:"https://www.eff.org/",children:"Electronic Frontier Foundation"}),". He has worked on projects such as Privacy Badger, Canary Watch, and analysis of state- sponsored malware. He has also performed security trainings for activists, nonprofit workers and ordinary folks around the world. He previously built worked building websites for nonprofits, such as Greenpeace, Adbusters, and the Chelsea Manning Support Network. He also was a co-founder of the Hackbloc hacktivist collective. In his spare time he enjoys playing music and participating in street protests."]})]}),(0,n.jsxs)(Z,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"teague.png",alt:"Teague Schneiter",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Teague Schneiter"}),(0,n.jsxs)(i.p,{children:["Teague serves as the Sr. Manager of the Academy of Motion Picture Arts and Sciences' ",(0,n.jsx)(i.a,{href:"https://www.oscars.org/oral-history/collections",children:"Oral History Projects department"}),", where she is responsible for new video productions and the acquisition of a collection of over 2,000 legacy interviews with filmmakers (1948-present). As the initiative's founder, she has been responsible for strategic planning; developing born digital video production, research, description, metadata and access practices specific to oral history; collection development; digital preservation planning; curatorial projects; cross-institutional initiatives; and outreach. She has been involved in multiple grants projects, including co-developing an oral history project dedicated to documenting the stories of Latina/o/x and Latin American filmmakers which resulted in a richly searchable multilingual website using OHMS for the Getty's 2017 PST:LA/LA cultural festival."]}),(0,n.jsx)(i.p,{children:"Teague is a graduate of the University of Amsterdam's moving image preservation program, and worked in the early part of her career with oral history, human rights and other cultural heritage materials in Australia, the Netherlands, Canada, and the United States with organizations such as WITNESS and IsumaTV. Since November 2016, Teague has served on the Board of AMIA, served as Vice President, and co-founded: AMIA's CEA Task Force, ADIFP Fellowship Task Force, Advocacy Committee of the Board, and Oral History Committee. She is an active member of the Oral History Association's Archives Interest Group and founder of a best practices collective with the craft guilds called the MICD Alliance. She proudly serves on the board of OpenArchive."})]}),(0,n.jsxs)(Z,{expand:!0,children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"caroline.png",alt:"Caroline Sinders",width:"1500",height:"1500"})}),(0,n.jsx)(i.h6,{children:"Caroline Sinders"}),(0,n.jsx)(i.p,{children:"Caroline is an award winning critical designer, researcher, and artist. For the past few years, she has been examining the intersections of artificial intelligence, intersectional justice, systems design, harm, and politics in digital conversational spaces and technology platforms. She has worked with the United Nations, Amnesty International, IBM Watson, the Wikimedia Foundation, and others. Sinders has held fellowships with the Harvard Kennedy School, Google’s PAIR (People and Artificial Intelligence Research group), Ars Electronica’s AI Lab, the Weizenbaum Institute, the Mozilla Foundation, Pioneer Works, Eyebeam, Ars Electronica, the Yerba Buena Center for the Arts, the Sci Art Resonances program with the European Commission, and the International Center of Photography. Her work has been featured in the Tate Exchange in Tate Modern, the Contemporary Art Center of New Orleans, Telematic Media Arts, Victoria and Albert Museum, MoMA PS1, LABoral, Wired, Slate, Hyperallergic, Clot Magazine, Quartz, the Channels Festival, and others. Sinders holds a Masters from New York University’s Interactive Telecommunications Program."})]})]}),"\n",(0,n.jsxs)(S,{children:[(0,n.jsxs)(i.h2,{children:[(0,n.jsx)(i.strong,{children:"Join"})," our team"]}),(0,n.jsx)(i.p,{children:"OpenArchive is an experienced research and development nonprofit organization dedicated to the ethical collection and long-term preservation of mobile media. We work to promote freedom of expression and privacy on the internet by creating tools, guides, and workshops to protect human rights defenders and their media."}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/jobs",children:"All vacancies"})})]}),"\n",(0,n.jsxs)(C,{children:[(0,n.jsxs)(i.h2,{children:["Get ",(0,n.jsx)(i.strong,{children:"Involved"})]}),(0,n.jsx)(i.p,{children:"Together, we can preserve truth to power!"}),(0,n.jsxs)(A,{children:[(0,n.jsx)(i.h5,{children:"Learn more"}),(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/about",children:"About"}),"\n",(0,n.jsx)(i.a,{href:"/faq",children:"FAQ"})]})]}),(0,n.jsxs)(A,{children:[(0,n.jsx)(i.h5,{children:"Support our work"}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/donate",children:"Donate"})})]}),(0,n.jsxs)(A,{children:[(0,n.jsx)(i.h5,{children:"Partner with us"}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/partner",children:"Partner"})})]})]})]})}var D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,r.ah)(),e.components);return i?(0,n.jsx)(i,Object.assign({},e,{children:(0,n.jsx)(P,e)})):P(e)}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=57854)}),_N_E=e.O()}]);