(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[227],{79019:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/UkraineMediaGuide",function(){return l(75641)}])},75641:function(e,t,l){"use strict";l.r(t);var n=l(50241);t.default=(0,n.Z)("/guides/ukraine-media-guide")},50241:function(e,t,l){"use strict";let n="src/index.tsx";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){let t;let l=e[0],n=1;for(;n<e.length;){let r=e[n],a=e[n+1];if(n+=2,("optionalAccess"===r||"optionalCall"===r)&&null==l)return;"access"===r||"optionalAccess"===r?(t=l,l=a(l)):("call"===r||"optionalCall"===r)&&(l=a((...e)=>l.call(t,...e)),t=void 0)}return l}var i=r(l(67294)),o=r(l(11163)),s=r(l(9008));let c="Option {params: true} require the url to be the name of the param to search for: `redirect('to', {params:true})` will work with `/redirect?to=https://example.com`",u=e=>{if("undefined"==typeof window)return"";let t=new URL(window.location.href),l=t.searchParams.get(e);if(!l)throw Error(c);return l};t.Z=(e,t)=>class extends i.default.Component{static async getInitialProps({res:l,query:n}){if(a([l,"optionalAccess",e=>e.writeHead])){var r;let i=e;if(!0===a([t,"optionalAccess",e=>e.params])){if(!a([n,"optionalAccess",t=>t[e]]))throw Error(c);i=n[e]}l.writeHead((r=a([t,"optionalAccess",e=>e.statusCode]),null!=r?r:301),{Location:i}),l.end()}else if("undefined"!=typeof window){let o=e;!0===a([t,"optionalAccess",e=>e.params])&&(o=u(o)),window.location.href=o}return{}}componentDidMount(){!0===a([t,"optionalAccess",e=>e.params])?window.location.href=u(e):null!=a([t,"optionalAccess",e=>e.asUrl])?o.default.push(e,t.asUrl,{shallow:!0}):"/"===e[0]?o.default.push(e):window.location.href=e}render(){var l;let r=(l=a([t,"optionalAccess",e=>e.asUrl]),null!=l?l:e);return null!=a([t,"optionalAccess",e=>e.params])&&(r=u(e)),i.default.createElement(i.default.Fragment,null,i.default.createElement(s.default,{__self:this,__source:{fileName:n,lineNumber:76}},i.default.createElement("noscript",{__self:this,__source:{fileName:n,lineNumber:78}},i.default.createElement("meta",{httpEquiv:"refresh",content:`0;url=${r}`,__self:this,__source:{fileName:n,lineNumber:79}})),(void 0===a([t,"optionalAccess",e=>e.statusCode])||301===a([t,"optionalAccess",e=>e.statusCode]))&&i.default.createElement("link",{rel:"canonical",href:r,__self:this,__source:{fileName:n,lineNumber:83}})),this.props.children?this.props.children:i.default.createElement("p",{__self:this,__source:{fileName:n,lineNumber:90}},"Redirecting to ",i.default.createElement("a",{href:r,__self:this,__source:{fileName:n,lineNumber:91}},r),"…"))}}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=79019)}),_N_E=e.O()}]);