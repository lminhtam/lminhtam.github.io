(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{120:function(e,t,a){e.exports=a.p+"static/media/big_avatar.33b40a83.jpg"},124:function(e,t,a){e.exports=a.p+"static/media/logo.7b1c30d6.svg"},125:function(e,t,a){e.exports=a.p+"static/media/avatar.f17716ec.jpg"},145:function(e,t,a){e.exports=a(170)},162:function(e,t,a){},163:function(e,t,a){var n={"./CV_Luong_Minh_Tam.pdf":164,"./avatar.jpg":125,"./bg.jpg":165,"./big_avatar.jpg":120,"./dimo.svg":166,"./lemon-aid.svg":167,"./logo.svg":124,"./tickit.svg":168};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=163},164:function(e,t,a){e.exports=a.p+"static/media/CV_Luong_Minh_Tam.402427ce.pdf"},165:function(e,t,a){e.exports=a.p+"static/media/bg.0cb5a02a.jpg"},166:function(e,t,a){e.exports=a.p+"static/media/dimo.0acc733e.svg"},167:function(e,t,a){e.exports=a.p+"static/media/lemon-aid.581fcb2a.svg"},168:function(e,t,a){e.exports=a.p+"static/media/tickit.41a69370.svg"},169:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t),a.d(t,"COLOR",(function(){return Ce}));var n=a(135),r=a(231),i=a(1),o=a.n(i),l=a(10),c=a.n(l),s=a(138),m=a(206),d=a(208),u=a(203),g=a(75),p=a.n(g),v=a(36),E=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:Ce.lightWhite,paddingTop:e.spacing(27),paddingBottom:e.spacing(6)},avatar:{width:"75%",height:"50%"},about:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},description:{marginTop:e.spacing(4),marginBottom:e.spacing(4),textAlign:"justify"}}}));var f=function(){var e=E(),t=Object(v.useMediaQuery)({minDeviceWidth:1224});return o.a.createElement("div",{className:e.root,id:"about"},o.a.createElement(m.a,{maxWidth:"lg",className:e.about,style:{flexDirection:t?"row":"column"}},o.a.createElement("div",{style:{flex:1,display:"flex",justifyContent:"flex-start"}},o.a.createElement("img",{src:a(120),alt:"avatar",className:e.avatar,style:{width:t?"75%":"100%"}})),o.a.createElement("div",{style:{flex:1.2,marginTop:t?0:24}},o.a.createElement(s.a,{variant:"h2",style:{fontWeight:800}},"About Me"),o.a.createElement(s.a,{variant:"body1",className:e.description},"My name is Minh Tam Luong. I'm a Front-end Developer based in Ho Chi Minh City, Vietnam, and I'm very passionate and dedicated to my work. With 6 months experience as a React Native Developer, I have acquired the skills necessary to learn and participate in building website with ReactJS. I also aim to be a Fullstack Developer."),o.a.createElement("div",{className:e.about,style:{border:"2px solid ".concat(Ce.primary),borderRadius:8,padding:24,flexDirection:t?"row":"column"}},o.a.createElement("div",null,o.a.createElement(s.a,{variant:"body1"},o.a.createElement("strong",null,"Name:")," Minh Tam Luong"),o.a.createElement(s.a,{variant:"body1"},o.a.createElement("strong",null,"Age:")," ",p()((new Date).getTime()).diff(p()("1999-11-24"),"years")),o.a.createElement(s.a,{variant:"body1"},o.a.createElement("strong",null,"Phone:")," (+84) 076 7494 146")),o.a.createElement("div",null,o.a.createElement(s.a,{variant:"body1"},o.a.createElement("strong",null,"Address:")," District 4, HCMC"),o.a.createElement(s.a,{variant:"body1"},o.a.createElement("strong",null,"Experience:")," 6 Months"),o.a.createElement(s.a,{variant:"body1"},o.a.createElement("strong",null,"Skype:")," Tam Luong"))),o.a.createElement(d.a,{color:"primary",variant:"contained",size:"large",style:{marginTop:36}},o.a.createElement("a",{href:"https://drive.google.com/uc?export=download&id=1K_L0ivFe7DZtO6vUVhLwmnLgQJzsIuIv",download:!0,style:{textDecoration:"none",color:"white",fontWeight:700},target:"_blank",rel:"noopener noreferrer"},"Download CV")))))},h=a(32),b=a(232),y=a(233),x=a(172),w=a(210),C=a(211),j=a(212),k=a(213),D=a(136),N=a(71),O=a(73),I={position:"absolute",width:"40vw",backgroundColor:"white",padding:24,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},T=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:Ce.lightWhite,paddingTop:e.spacing(21),paddingBottom:e.spacing(18)},contact:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},box:{border:"2px solid ".concat(Ce.primary),borderRadius:8,padding:24,marginBottom:24,display:" flex",justifyContent:"space-between",alignItems:"center"},field:{marginBottom:e.spacing(3)}}})),S=Object(u.a)((function(e){return{root:{color:"red"}}})),F=O.a().shape({email:O.b().trim().max(48,"Maxium length is 48").label("Email").email("Invalid email").required("* Email is required"),name:O.b().trim().required("* Name is required").matches(/(?:(?![0-9A-Z_a-z\xC0-\xC3\xC8-\xCA\xCC\xCD\xD2-\xD5\xD9\xDA\xDD\xE0-\xE3\xE8-\xEA\xEC\xED\xF2-\xF5\xF9\xFA\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0\u1EA0-\u1EBD\u1EC0-\u1EF9])[\s\S])/,{message:"Invalid name"}),subject:O.b().trim().required("* Subject is required"),message:O.b().trim().required("* Message is required")});var W=function(){var e=T(),t=S(),a=Object(v.useMediaQuery)({minDeviceWidth:1224}),n=Object(i.useState)(!1),r=Object(h.a)(n,2),l=r[0],c=r[1],u=Object(i.useState)(""),g=Object(h.a)(u,2),p=g[0],E=g[1],f=function(e,t){window.emailjs.send("service_6vf1ur8",e,t).then((function(e){E("Your message has been sent. I'll will respond as soon as I receive it."),c(!0)})).catch((function(e){E("There is error while sending your message. Please try again."),c(!0)}))};return o.a.createElement("div",{className:e.root,id:"contact"},o.a.createElement(m.a,{maxWidth:"lg"},o.a.createElement(s.a,{variant:"h2",style:{fontWeight:800,marginBottom:48}},"Contact Me"),o.a.createElement("div",{className:e.contact,style:{flexDirection:a?"row":"column"}},o.a.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",width:"100%"}},o.a.createElement("div",{className:e.box},o.a.createElement("div",null,o.a.createElement(s.a,{variant:"h6"},o.a.createElement("strong",null,"LOCATION")),o.a.createElement(s.a,{variant:"body1"},"District 4, HCMC")),o.a.createElement(N.b,{size:48,color:Ce.primary})),o.a.createElement("div",{className:e.box},o.a.createElement("div",null,o.a.createElement(s.a,{variant:"h6"},o.a.createElement("strong",null,"EMAIL")),o.a.createElement(s.a,{variant:"body1"},"lminhtam99@gmail.com")),o.a.createElement(N.a,{size:48,color:Ce.primary})),o.a.createElement("div",{className:e.box},o.a.createElement("div",null,o.a.createElement(s.a,{variant:"h6"},o.a.createElement("strong",null,"PHONE")),o.a.createElement(s.a,{variant:"body1"},"(+84) 076 7494 146")),o.a.createElement(N.d,{size:48,color:Ce.primary}))),o.a.createElement(D.a,{initialValues:{email:"",name:"",subject:"",message:""},isInitialValid:!1,validationSchema:F,onSubmit:function(e){return function(e){f("template_4zjuhwn",{message:e.message,from_name:e.name,reply_to:e.email,subject:e.subject})}(e)}},(function(n){var r=n.handleChange,i=n.handleBlur,l=n.handleSubmit,c=n.values,s=n.isValid,m=n.errors,u=(n.touched,n.setFieldTouched);return o.a.createElement("div",{style:{flex:2,paddingLeft:a?48:0,paddingTop:a?0:24}},o.a.createElement(b.a,{placeholder:"Name",variant:"outlined",fullWidth:!0,className:e.field,helperText:m.name&&m.name,FormHelperTextProps:{classes:t},value:c.name,onChange:r("name"),onTouchStart:function(){return u("name")},onBlur:i("name")}),o.a.createElement(b.a,{placeholder:"Email",variant:"outlined",fullWidth:!0,className:e.field,helperText:m.email&&m.email,FormHelperTextProps:{classes:t},value:c.email,onChange:r("email"),onTouchStart:function(){return u("email")},onBlur:i("email")}),o.a.createElement(b.a,{placeholder:"Subject",variant:"outlined",fullWidth:!0,className:e.field,helperText:m.subject&&m.subject,FormHelperTextProps:{classes:t},value:c.subject,onChange:r("subject"),onTouchStart:function(){return u("subject")},onBlur:i("subject")}),o.a.createElement(b.a,{placeholder:"Your message",variant:"outlined",fullWidth:!0,multiline:!0,className:e.field,helperText:m.message&&m.message,FormHelperTextProps:{classes:t},value:c.message,onChange:r("message"),onTouchStart:function(){return u("message")},onBlur:i("message")}),o.a.createElement(d.a,{color:"primary",variant:"contained",size:"large",style:{marginTop:16,fontWeight:700},disabled:!s,onClick:l},"Send Message"))})))),o.a.createElement(y.a,{open:l,onClose:function(){return c(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(x.a,{elevation:0,style:I},o.a.createElement(w.a,{id:"alert-dialog-title"},"Message"),o.a.createElement(C.a,null,o.a.createElement(j.a,{id:"alert-dialog-description"},p)),o.a.createElement(k.a,null,o.a.createElement(d.a,{onClick:function(){window.location.reload(),c(!1)},color:"primary",variant:"contained",autoFocus:!0},"OK")))))},M=a(215),B=a(218),A=a(219),L=a(209),R=a(220),_=a(234),z=a(235),H=a(221),P=a(216),V=a(217),q=a(214),J=a(133),U=a(104),Q=(a(162),Object(u.a)((function(e){return{button:{fontWeight:700,paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},root:{position:"fixed",bottom:e.spacing(4),right:e.spacing(4),zIndex:100}}})));function K(e){var t=e.children,a=Q(),n=Object(q.a)({disableHysteresis:!0,threshold:0});return o.a.createElement(M.a,{in:n},o.a.createElement("div",{onClick:function(){U.animateScroll.scrollToTop({duration:500,delay:100,smooth:!0})},role:"presentation",className:a.root},t))}var Y=[{title:"Home",to:"home"},{title:"About",to:"about"},{title:"Skills",to:"skill"},{title:"Resume",to:"resume"},{title:"Porfolio",to:"porfolio"},{title:"Contact",to:"contact"}];function Z(e){var t=Object(q.a)({disableHysteresis:!0,threshold:window.innerHeight-100}),n=Q(),r=Object(v.useMediaQuery)({minDeviceWidth:1224}),l=Object(i.useState)(null),c=Object(h.a)(l,2),s=c[0],m=c[1],u=function(){m(null)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(P.a,{style:{backgroundColor:t?Ce.carbon:"transparent"},elevation:0},o.a.createElement(V.a,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:20}},o.a.createElement("a",{href:"."},o.a.createElement("img",{src:a(124),width:48,alt:"logo"})),o.a.createElement("div",null,r?Y.map((function(e){return o.a.createElement(d.a,{color:"secondary",variant:"text",className:n.button,id:"header-".concat(e.to)},o.a.createElement(U.Link,{activeClass:"active",to:e.to,spy:!0,smooth:!0,duration:500},e.title))})):o.a.createElement(B.a,{onClick:function(e){m(e.currentTarget)}},o.a.createElement(N.c,{size:28,color:"white"}))),o.a.createElement(A.a,{open:!!s,anchorEl:s,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps;return o.a.createElement(L.a,Object.assign({},t,{id:"menu-item-grow",style:{transformOrigin:"center top",backgroundColor:Ce.carbon,width:"100vw"}}),o.a.createElement(x.a,null,o.a.createElement(R.a,{onClickAway:u},o.a.createElement(_.a,null,Y.map((function(e){return o.a.createElement(z.a,null,o.a.createElement(U.Link,{activeClass:"active",to:e.to,spy:!0,smooth:!0,duration:500,style:{fontWeight:700,color:"white"}},e.title))}))))))})))),o.a.createElement(K,e,o.a.createElement(H.a,{color:"primary",size:"medium","aria-label":"scroll back to top"},o.a.createElement(J.a,{size:28,color:"white"}))))}var $=a(236),G=Object(u.a)((function(e){return{root:{position:"relative",display:"flex",flexDirection:"column",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center",backgroundColor:"black"},bg:{width:"100%",height:"100vh",backgroundImage:"url('https://cdn.pixabay.com/photo/2016/12/12/03/05/sky-1900714_1280.jpg')",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"absolute",top:0,left:0,opacity:.4,filter:"blur(4px)",WebkitFilter:"blur(4px)"},avatar:{width:e.spacing(24),height:e.spacing(24)}}}));var X=function(){var e=G();return o.a.createElement("div",{className:e.root,id:"home"},o.a.createElement("div",{className:e.bg}),o.a.createElement($.a,{src:a(125),alt:"avatar",className:e.avatar}),o.a.createElement(s.a,{variant:"h4",color:"primary",style:{fontWeight:900,zIndex:2}},"Minh Tam Luong"),o.a.createElement(s.a,{variant:"h6",style:{zIndex:2,color:"white"}},"A front-end developer"))},ee=a(222),te=a(35),ae=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:Ce.lightWhite,paddingTop:e.spacing(21),paddingBottom:e.spacing(6)},about:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},paper:{width:"100%",position:"absolute",bottom:0,left:0,backgroundColor:"rgba(37, 37, 37, 0.8)",borderRadius:8,textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},line:{height:2,width:"20%",backgroundColor:Ce.primary,borderRadius:25,margin:16}}})),ne=[{title:"Lemon-aid",image:"lemon-aid.svg",description:"Recipe sharing platform",pos:"Front-end Developer",link:"https://lemon-aid-cookbook.github.io/"},{title:"Dimo",image:"dimo.svg",description:"Ticket management website",pos:"Web Developer",link:"https://tyt-dimove.github.io/"},{title:"Tickit",image:"tickit.svg",description:"Ticket selling mobile app",pos:"Mobile Developer",link:"https://drive.google.com/uc?export=download&id=1Fm7SMKW78LO8BpWxAVLZIsnp6rkIhrI-"}];var re=function(){var e=ae(),t=Object(i.useState)(null),n=Object(h.a)(t,2),r=n[0],l=n[1],c=function(t){var a=t.item,n=Object(te.b)({height:"100%",from:{height:"0%"}});return o.a.createElement(te.a.div,{className:e.paper,style:n},o.a.createElement(s.a,{variant:"h5",color:"secondary"},o.a.createElement("strong",null,a.title)),o.a.createElement(s.a,{color:"secondary"},a.description),o.a.createElement("div",{className:e.line}),o.a.createElement(s.a,{color:"secondary"},a.pos))};return o.a.createElement("div",{className:e.root,id:"porfolio"},o.a.createElement(m.a,{maxWidth:"lg",className:e.about},o.a.createElement(s.a,{variant:"h2",style:{fontWeight:800,marginBottom:48}},"Portfolio"),o.a.createElement(ee.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:3},ne.map((function(e,t){return o.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:6,lg:4},o.a.createElement("a",{href:e.link,target:"_black",id:"pro-".concat(e.title)},o.a.createElement("div",{style:{position:"relative",borderRadius:8},onMouseEnter:function(){return l(t)},onMouseLeave:function(){return l(null)}},o.a.createElement("img",{src:a(163)("./".concat(e.image)),style:{width:"100%",borderRadius:8},alt:e.title}),r===t&&o.a.createElement(c,{hoverItem:r===t,item:e}))))})))))},ie=a(223),oe=a(224),le=a(225),ce=a(226),se=a(227),me=a(228),de=a(229),ue=a(134),ge=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:Ce.lightWhite,paddingTop:e.spacing(21),paddingBottom:e.spacing(6)},about:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},paper:{padding:e.spacing(2),backgroundColor:"transparent",border:"2px solid ".concat(Ce.primary),borderRadius:8,height:90,justifyContent:"center",display:"flex",flexDirection:"column"},timeline:{textAlign:"center",backgroundColor:"transparent"}}})),pe=[{time:"September 2017 - September 2021",company:"VNUHCM - University of Science",des:"Majored in Software Engineering"},{time:"September 2019 - December 2019",company:"Coderschool",des:"Participated as a Fresher React Native Developer in Developer Circles VietNam Innovation Challenge"},{time:"November 2019 - July 2020",company:"Ban Vien Corporation",des:"Participated in develop mobile app using React Native framework"}];var ve=function(){var e=ge(),t=Object(v.useMediaQuery)({minDeviceWidth:1224}),a=Object(i.useState)(!1),n=Object(h.a)(a,2),r=n[0],l=n[1],c=Object(te.b)({to:{opacity:r?1:0,marginRight:r?0:-500},from:{opacity:0,marginRight:-500},config:{duration:400}}),d=Object(te.b)({to:{opacity:r?1:0,marginLeft:r?0:-500},from:{opacity:0,marginLeft:-500},config:{duration:400}}),u=function(t){var a=t.item,n=t.index;Object(i.useEffect)((function(){return document.addEventListener("scroll",m),function(){return document.removeEventListener("scroll",m)}}),[]);var m=function e(){var t=document.getElementById("timeline".concat(n));t.getBoundingClientRect().bottom<=window.innerHeight&&(l(!0),document.removeEventListener("scroll",e))};return r?o.a.createElement(te.a.div,{style:r?n%2===0?c:d:{}},o.a.createElement(x.a,{elevation:0,className:e.timeline,id:"timeline".concat(n)},o.a.createElement(ue.a,{size:48,color:Ce.primary}),o.a.createElement(x.a,{elevation:0,className:e.paper,style:{textAlign:"center",height:140}},o.a.createElement(s.a,{variant:"body1",color:"textSecondary"},a.time),o.a.createElement(s.a,{variant:"h6"},o.a.createElement("strong",null,a.company)),o.a.createElement(s.a,null,a.des)))):o.a.createElement("div",{id:"timeline".concat(n)})},g=function(t){var a=t.item,n=t.index;Object(i.useEffect)((function(){return document.addEventListener("scroll",m),function(){return document.removeEventListener("scroll",m)}}),[]);var m=function e(){var t=document.getElementById("timeline".concat(n));t.getBoundingClientRect().bottom<=window.innerHeight&&(l(!0),document.removeEventListener("scroll",e))};return r?n%2===0?o.a.createElement(te.a.div,{style:r?c:{},id:"timeline".concat(n)},o.a.createElement(ie.a,{style:{marginBottom:28}},o.a.createElement(oe.a,null,o.a.createElement(s.a,{variant:"body1",color:"textSecondary"},a.time)),o.a.createElement(le.a,null,o.a.createElement(ce.a,{color:"primary"}),o.a.createElement(se.a,{style:{backgroundColor:Ce.neutral}})),o.a.createElement(me.a,null,o.a.createElement(x.a,{elevation:0,className:e.paper},o.a.createElement(s.a,{variant:"h6"},o.a.createElement("strong",null,a.company)),o.a.createElement(s.a,null,a.des))))):o.a.createElement(te.a.div,{style:r?d:{},id:"timeline".concat(n)},o.a.createElement(ie.a,{style:{marginBottom:28}},o.a.createElement(oe.a,null,o.a.createElement(x.a,{elevation:0,className:e.paper},o.a.createElement(s.a,{variant:"h6"},o.a.createElement("strong",null,a.company)),o.a.createElement(s.a,null,a.des))),o.a.createElement(le.a,null,o.a.createElement(ce.a,{color:"primary"}),o.a.createElement(se.a,{style:{backgroundColor:Ce.neutral}})),o.a.createElement(me.a,null,o.a.createElement(s.a,{variant:"body1",color:"textSecondary"},a.time)))):o.a.createElement("div",{id:"timeline".concat(n)})};return o.a.createElement("div",{className:e.root,id:"resume"},o.a.createElement(m.a,{maxWidth:"lg",className:e.about},o.a.createElement(s.a,{variant:"h2",style:{fontWeight:800,marginBottom:48}},"My Resume"),t?o.a.createElement(de.a,{align:"alternate",style:{width:"100%"}},pe.map((function(e,t){return o.a.createElement(g,{item:e,index:t})}))):pe.map((function(e,t){return o.a.createElement(u,{item:e,index:t})}))))},Ee=a(230),fe=a(5),he=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:Ce.lightWhite,paddingTop:e.spacing(21),paddingBottom:e.spacing(6)},about:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},description:{marginBottom:e.spacing(1)}}})),be=Object(fe.a)((function(e){return{root:{height:4,borderRadius:9},colorPrimary:{backgroundColor:Ce.neutral},bar:{borderRadius:9,backgroundColor:Ce.primary}}}))(Ee.a),ye=[{title:"JAVASCRIPT",value:80},{title:"REACT JS",value:60},{title:"NODE JS",value:50},{title:"PYTHON",value:50},{title:"C#",value:60},{title:"ANDROID (JAVA)",value:60}];var xe=function(){var e=he();return o.a.createElement("div",{className:e.root,id:"skill"},o.a.createElement(m.a,{maxWidth:"lg",className:e.about},o.a.createElement(s.a,{variant:"h2",style:{fontWeight:800,marginBottom:48}},"My Skills"),o.a.createElement(ee.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:3},ye.map((function(t){return o.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:6,lg:4},o.a.createElement(s.a,{variant:"body1",className:e.description},t.title),o.a.createElement(be,{value:t.value,variant:"determinate"}))})))))};var we=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z,null),o.a.createElement(X,null),o.a.createElement(f,null),o.a.createElement(xe,null),o.a.createElement(ve,null),o.a.createElement(re,null),o.a.createElement(W,null),o.a.createElement("div",{style:{width:"100%",backgroundColor:Ce.carbon,paddingBottom:48,paddingTop:48,textAlign:"center"}},o.a.createElement(s.a,{variant:"body2",style:{color:"white"}},"All Right Reserved \xa9 ",p()(new Date).year()," ",o.a.createElement("a",{href:".",style:{textDecoration:"none",color:Ce.primary}},o.a.createElement("b",null,"LMT")))))};a(169),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce={primary:"#FF3B3F",neutral:"#EFEFEF",carbon:"#252525",lightWhite:"#f8f8ff"},je=Object(n.a)({typography:{fontFamily:["Montserrat","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),button:{textTransform:"none",fontSize:16}},palette:{primary:{main:Ce.primary},secondary:{main:"#FFFFFF"}}});c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.a,{theme:je},o.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.1e2875a9.chunk.js.map