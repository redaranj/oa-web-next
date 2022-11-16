(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{27047:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return __webpack_require__(76709)}])},82604:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{S:function(){return HeaderSection}});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35944),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(61953),styles_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(44542),components_common_PageSection__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(62452);let{white}=styles_theme__WEBPACK_IMPORTED_MODULE_0__.O9,HeaderSection=param=>{let{backgroundColor=white,backgroundImage,sx={},children}=param,{ps,ts,dl}=styles_theme__WEBPACK_IMPORTED_MODULE_0__.AV;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(components_common_PageSection__WEBPACK_IMPORTED_MODULE_1__.N,{backgroundColor:backgroundColor,backgroundImage:backgroundImage,sx:sx,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{sx:{pt:"90px",[ps]:{pt:"50px"},[ts]:{pt:"80px"},[dl]:{pt:"90px"}},children:children})})}},76709:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return faq}});var jsx_runtime=__webpack_require__(85893),lib=__webpack_require__(11151),emotion_react_jsx_runtime_browser_esm=__webpack_require__(35944),Box=__webpack_require__(61953),theme=__webpack_require__(44542),HeaderSection=__webpack_require__(82604),faq_header=__webpack_require__(53874);let HeaderSection_HeaderSection=param=>{let{children}=param,{white}=theme.O9;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(HeaderSection.S,{backgroundImage:faq_header.default,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,{sx:{"> h1":{color:white,textAlign:"center"}},children:children})})};var react=__webpack_require__(67294),Grid=__webpack_require__(79072),PageSection=__webpack_require__(62452),Button=__webpack_require__(75084);let ToggleButton=param=>{let{on=!1,children,onClick}=param,{black,white,lightGrey,mediumGrey,turquoise,lightTurquoise}=theme.O9;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,{sx:{fontFamily:"Montserrat, sans-serif",fontStyle:"normal",margin:0,lineHeight:"24px",[theme.AV.ps]:{fontSize:"14px"},[theme.AV.pl]:{fontSize:"14px"},[theme.AV.ts]:{fontSize:"14px"},[theme.AV.tl]:{fontSize:"14px"},[theme.AV.ds]:{fontSize:"16px"},[theme.AV.dl]:{fontSize:"18px"},borderRadius:"500px",fontWeight:700,whiteSpace:"nowrap",textTransform:"none",color:black,backgroundColor:on?lightTurquoise:lightGrey,border:"2px solid ".concat(on?lightTurquoise:mediumGrey),p:1,m:0,pl:"30px",pr:"30px","&:hover":{backgroundColor:turquoise,color:white,"& em > strong":{fontWeight:700,color:"".concat(white," !important")}}},onClick:onClick,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,{sx:{"& em > strong":{fontWeight:700,color:theme.O9.turquoise}},dangerouslySetInnerHTML:{__html:children}})})},QuestionsSection=param=>{let{children}=param,{lightGrey,mediumGrey}=theme.O9,{bodyLarge}=theme.cp,[selectedCategory,setSelectedCategory]=(0,react.useState)(null),toggleCategory=(0,react.useCallback)(category=>selectedCategory===category?setSelectedCategory(null):setSelectedCategory(category),[selectedCategory,setSelectedCategory]),filteredChildren=children;return"About OpenArchive"===selectedCategory?filteredChildren=[children[0],children[4]]:"About <em><strong>Save</em></strong>"===selectedCategory?filteredChildren=[children[1],children[2],children[3],children[5],children[6],children[7]]:"Support / Donations"===selectedCategory&&(filteredChildren=[children[8]]),(0,emotion_react_jsx_runtime_browser_esm.tZ)(PageSection.N,{backgroundColor:lightGrey,children:(0,emotion_react_jsx_runtime_browser_esm.BX)(Grid.ZP,{container:!0,sx:{flexDirection:"column",counterReset:"questionCounter",".question":{counterIncrement:"questionCounter"},".question::before":{...bodyLarge,content:"counter(questionCounter, decimal-leading-zero)",color:mediumGrey,display:"flex",pl:"10px",pt:"16px"}},children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Grid.ZP,{container:!0,direction:"row",justifyContent:"center",spacing:3,sx:{mb:6},children:["About OpenArchive","About <em><strong>Save</em></strong>","Support / Donations"].map(category=>(0,emotion_react_jsx_runtime_browser_esm.tZ)(Grid.ZP,{item:!0,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ToggleButton,{on:category===selectedCategory,onClick:()=>toggleCategory(category),children:category})},category))}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,{sx:{width:"100%"},children:filteredChildren})]})})};var Accordion=__webpack_require__(39786),AccordionSummary=__webpack_require__(29618),ExpandLess=__webpack_require__(91680),ExpandMore=__webpack_require__(6571);let Question=param=>{let{expanded,children}=param,{darkGrey,turquoise}=theme.O9;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(AccordionSummary.Z,{children:(0,emotion_react_jsx_runtime_browser_esm.BX)(Grid.ZP,{container:!0,direction:"row",wrap:"nowrap",justifyContent:"space-between",spacing:3,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Grid.ZP,{item:!0,className:"question"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Grid.ZP,{item:!0,flexGrow:1,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,{sx:{mt:"11px"},children:children})}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Grid.ZP,{item:!0,children:expanded?(0,emotion_react_jsx_runtime_browser_esm.tZ)(ExpandLess.Z,{htmlColor:turquoise,fontSize:"large",sx:{mt:"2px"}}):(0,emotion_react_jsx_runtime_browser_esm.tZ)(ExpandMore.Z,{htmlColor:darkGrey,fontSize:"large",sx:{mt:"4px"}})})]})})};var AccordionDetails=__webpack_require__(47028);let Answer=param=>{let{children}=param,{bodyLarge}=theme.cp;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(AccordionDetails.Z,{sx:{border:0},children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,{sx:{p:2,"> p":bodyLarge},children:children})})},QuestionItem=param=>{let{children}=param,[expanded,setExpanded]=(0,react.useState)(!1),[first,...rest]=children;return(0,emotion_react_jsx_runtime_browser_esm.BX)(Accordion.Z,{expanded:expanded,onChange:()=>setExpanded(!expanded),elevation:0,sx:{"::before":{display:"none"}},children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Question,{expanded:expanded,children:first}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Answer,{children:rest})]})},ContactUsSection=param=>{let{children}=param,{lightGrey}=theme.O9;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(PageSection.N,{backgroundColor:lightGrey,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Grid.ZP,{container:!0,sx:{flexDirection:"column"},children:children})})};function _createMdxContent(props){let _components=Object.assign({h1:"h1",h3:"h3",p:"p",em:"em",strong:"strong",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(HeaderSection_HeaderSection,{children:(0,jsx_runtime.jsx)(_components.h1,{children:"FAQ"})}),"\n",(0,jsx_runtime.jsxs)(QuestionsSection,{children:[(0,jsx_runtime.jsxs)(QuestionItem,{children:[(0,jsx_runtime.jsx)(_components.h3,{children:"What is OpenArchive?"}),(0,jsx_runtime.jsx)(_components.p,{children:"OpenArchive is an experienced research, usability, and development team dedicated to protecting media freedom by helping eyewitnesses preserve truth to power. We’ve created a distributed media archiving ecosystem that enables human rights defenders to share, archive, verify, and encrypt their evidentiary media. We conduct co-research, build tools, and create guides that advance human rights every day."}),(0,jsx_runtime.jsx)(_components.p,{children:"Created by and for eyewitnesses and human rights defenders in 2015, OpenArchive fosters a more just, equitable, and sustainable media ecosystem where people's history is the primary history."})]}),(0,jsx_runtime.jsxs)(QuestionItem,{children:[(0,jsx_runtime.jsxs)(_components.h3,{children:["What is ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})}),"?"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," (Share, Archive, Verify, Encrypt) is a free, open-source, secure-mobile application built with and for eyewitnesses and human rights defenders. ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," securely sends mobile media to the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://archive.org/",children:"Internet Archive"})," and other online and offline destinations using Orbot/Tor. OpenArchive unites the work of the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://guardianproject.info/",children:"Guardian Project"}),", ",(0,jsx_runtime.jsx)(_components.a,{href:"https://creativecommons.org/",children:"Creative Commons"}),", ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.torproject.org/",children:"Tor"}),", and distributed secure servers. It offers at-risk groups more agency over their historical record by affording them secure transit, media authentication, pseudonymity, licensing controls, and the ability to choose where and how the media will be stored for long-term access and reuse."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," helps you store, share, and amplify your mobile media while ensuring your identity remains protected. It's also freely available for ",(0,jsx_runtime.jsx)(_components.a,{href:"https://apps.apple.com/us/app/save-by-openarchive/id1462212414",children:"iOS"})," and ",(0,jsx_runtime.jsx)(_components.a,{href:"https://play.google.com/store/apps/details?id=net.opendasharchive.openarchive.release",children:"Android"}),". With ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})}),", you can add metadata and ",(0,jsx_runtime.jsx)(_components.a,{href:"https://creativecommons.org/",children:"Creative Commons"})," licensing to your audio or visual mobile media, then send it over TLS and the privacy-focused ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.torproject.org/",children:"Tor"})," network to the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://archive.org/",children:"Internet Archive"})," or other private archives to be saved."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," protects free speech by leveraging a suite of privacy-enhancing technologies to safeguard your media and identity in the event of internet shutdowns, surveillance, device confiscations, content takedowns, limited bandwidth, and data loss. It also assures continued access to your saved media for years to come."]})]}),(0,jsx_runtime.jsxs)(QuestionItem,{children:[(0,jsx_runtime.jsxs)(_components.h3,{children:["What can ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," do?"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," is committed to usability and digital inclusion. Unlike other media-sharing tools, it offers responsive features that streamline secure preservation based on participatory research and co-design with communities we serve. With ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," you can:"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Authenticate Media"}),": With ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})}),", you ensure your media is always authenticated because you have full control—without interference from intermediaries—from phone to archive. And, when paired with ProofMode (available now for Android, iOS coming soon), you can even add sensor data to corroborate the metadata captured alongside your media."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Secure Transit"}),": ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," always uses TLS (Transport Layer Security) to ensure in-transit security and encryption. When you enable Tor for mobile (either via Orbot: Tor for Android or Onion Browser for iOS), you add an additional layer of protection to ensure no one intercepts your media as it travels from your phone to the Internet Archive or your server of choice."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Long-Term Preservation"}),": When you use ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," to archive your mobile media in a trusted archive (such as the Internet Archive or OwnCloud), you ensure unobstructed access for generations to come. This is in stark contrast to popular social media platforms like Twitter, Facebook, or Instagram, which aren’t committed to long-term media preservation."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Licensing"}),": With ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," you can communicate your intentions for future use by easily generating a ",(0,jsx_runtime.jsx)(_components.a,{href:"https://creativecommons.org",children:"Creative Commons"})," license in-app allowing others to reuse or modify your work."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Stay Organized"}),": ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})}),"'s easy-to-use design allows teams and individuals to seamlessly streamline media from many phones into organized folders specific to each contributor."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Add Metadata"}),": ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," lets you add metadata like location, people, and notes to your archived media."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Flag Significant Content"}),": You can flag certain media as “significant” to alert reviewers that this folder contains sensitive/violent media or just use it as a “favorites” folder."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Import Media"}),": ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," allows you to import and share media from other apps on your phone, including audio, notes, and pdf files."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Improve Redundancy"}),": With ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," you can further protect your media by creating and storing multiple copies on different secure servers. Whether hosting locally or remotely, your data can be encrypted on the backend and only accessible by who you want."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"View Progress"}),": When storing media via ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})}),", you can view how much content has been uploaded."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Prioritize Uploads"}),": prioritize particular media to upload first over others (e.g., order the smallest files first and largest files last)."]})]}),(0,jsx_runtime.jsxs)(QuestionItem,{children:[(0,jsx_runtime.jsxs)(_components.h3,{children:["What can't ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," do?"]}),(0,jsx_runtime.jsxs)(_components.p,{children:["Although ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," offers a suite of many unique features, it’s no silver bullet. When using the app, please be aware of the following limitations:"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," ",(0,jsx_runtime.jsx)(_components.strong,{children:"does not provide storage or server space"}),": You will need to set up your own WebDav-compatible server (such as Nextcloud, etc.), or use the Internet Archive (free) or DropBox to create and store your collections."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," ",(0,jsx_runtime.jsx)(_components.strong,{children:"does not provide on-device encryption"}),": ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," does not store your media; it only stores thumbnails from your camera roll, which are not currently encrypted in the app. Once organized into projects and uploaded to the server, all media is sent over an encrypted connection. We recommend that you also encrypt your server for enhanced security."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," ",(0,jsx_runtime.jsx)(_components.strong,{children:"does not delete original copies of media from your camera roll"}),": Once media is sent to a server, you can then delete the thumbnails from the ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," app if you choose. The original content will remain in your camera roll (unless you remove it)."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," ",(0,jsx_runtime.jsx)(_components.strong,{children:"does not have an in-app killswitch"}),": Uninstalling ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," will remove all local copies of media/metadata stored in the app and all local configurations and settings, including account information."]})]}),(0,jsx_runtime.jsxs)(QuestionItem,{children:[(0,jsx_runtime.jsx)(_components.h3,{children:"Is OpenArchive the Internet Archive?"}),(0,jsx_runtime.jsx)(_components.p,{children:"No, OpenArchive collaborates with the Internet Archive, but is an independent project."}),(0,jsx_runtime.jsx)(_components.p,{children:"The Internet Archive is a nonprofit digital library offering free universal access to books, movies, and music, as well as almost a trillion archived web pages."}),(0,jsx_runtime.jsxs)(_components.p,{children:["OpenArchive is a project dedicated to the ethical collection and long-term preservation of mobile media. ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," (share, archive, verify, encrypt) is the mobile application we’ve created to do this. ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," enables people to send media to multiple places, including the Internet Archive and other destinations of their choice. This option also enables people to create public or private media collections."]})]}),(0,jsx_runtime.jsxs)(QuestionItem,{children:[(0,jsx_runtime.jsx)(_components.h3,{children:"Why not social media?"}),(0,jsx_runtime.jsxs)(_components.p,{children:["Although social media platforms are an easy place to house photos and videos, these platforms lack critical security safeguards and are subject to state censorship and content takedowns from the companies themselves. Use ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," to avoid these pitfalls:"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Social media often exposes at-risk sources"}),": Although major social media platforms can amplify content by exposing it to a large audience, these platforms can also expose sources to unwanted identification. Individuals shown or otherwise implicated in videos, photos, or audio clips may be targeted both online and offline."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Social media can make it difficult to authenticate or verify media"}),": Social media sites often strip metadata (info about where and how media was captured) from uploaded content. While this feature enhances privacy, the practice also makes media authentication and verification more difficult."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Media gets lost on social media platforms"}),": Within a sea of content, it is difficult to contextualize or organize media for easy access in the future."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Social Media is not committed to long-term preservation"}),": Companies moderate content, take down media, and go out of business."]})]}),(0,jsx_runtime.jsxs)(QuestionItem,{children:[(0,jsx_runtime.jsxs)(_components.h3,{children:["Who is ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," for?"]}),(0,jsx_runtime.jsxs)(_components.p,{children:["We designed ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," with and for individuals and organizations across the globe, including:"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Human rights organizations"})," collecting evidence of abuse;"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Academic organizations"})," accepting targeted or sensitive media from the field;"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Journalists and news organizations"})," receiving sensitive media from vulnerable sources whose identity and personal details must be protected from interception;"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Archivists and librarians"})," working to create community collections at the Internet Archive or other digital libraries; and"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Individuals, freelance documentarians, and citizen journalists/eyewitnesses"})," interested in organizing and curating their own mobile media collections."]})]}),(0,jsx_runtime.jsxs)(QuestionItem,{children:[(0,jsx_runtime.jsxs)(_components.h3,{children:["Why use ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," by OpenArchive?"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," ",(0,jsx_runtime.jsx)(_components.strong,{children:"helps combat common threats, including"}),":"]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Loss of data"}),": Both digital and analog data face ongoing threats, (e.g. theft, manipulation, surveillance, sabotage, or intentional destruction), loss (e.g. hard drive failure or misplaced USB stick), and incidental destruction (e.g. natural disaster, water-based damage, or mold). ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," helps protect against these threats by providing a way to create multiple backups of important data and distribute them across geographically and jurisdictionally diverse servers."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Single point of failure"}),": Keeping data in just one place increases the likelihood that any of the above scenarios may lead to an inability to use or access your data. With ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})}),", you can connect and send media to multiple storage servers so that if one fails, the data will still be available elsewhere."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Network surveillance and censorship"}),": People often want to protect their content, identity, and/or activities from those who may be watching them (like governments, private companies, or untrustworthy individuals). ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," hardens your network connection by always employing TLS (Transport Layer Security) and the Tor network via Orbot (for Android, iOS coming soon), which promotes privacy by encrypting data transfers and protecting against traffic analysis."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Inauthentic or unverified content"}),": Unverified content can lead to false conclusions and damage credibility. ",(0,jsx_runtime.jsx)(_components.em,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Save"})})," always uses SHA-256 hashes and incorporates ",(0,jsx_runtime.jsx)(_components.a,{href:"https://proofmode.org/",children:"ProofMode"})," (for Android, coming soon for iOS), a feature that supports robust verification and authentication practices."]})]}),(0,jsx_runtime.jsxs)(QuestionItem,{children:[(0,jsx_runtime.jsx)(_components.h3,{children:"How can I support OpenArchive?"}),(0,jsx_runtime.jsxs)(_components.p,{children:["Our work is critical and ongoing. If you would like to help fund our efforts, you can now make a ",(0,jsx_runtime.jsx)(_components.a,{href:"/donate",children:"tax-deductible donation"})," thanks to our fiscal sponsor, ",(0,jsx_runtime.jsx)(_components.a,{href:"https://media-alliance.org",children:"Media Alliance"}),"."]}),(0,jsx_runtime.jsx)(_components.p,{children:"There are other ways you can help too. Please contact us if you're interested in volunteering or providing in-kind expertise to advance human rights through secure digital media preservation. We’d love to hear from you!"})]})]}),"\n",(0,jsx_runtime.jsx)(ContactUsSection,{})]})}var faq=function(){let props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},function(__webpack_require__){__webpack_require__.O(0,[153,774,888,179],function(){return __webpack_require__(__webpack_require__.s=27047)}),_N_E=__webpack_require__.O()}]);