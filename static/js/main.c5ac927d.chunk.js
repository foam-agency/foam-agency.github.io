(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={container:"Footer_container__188QZ",aside:"Footer_aside__3n9zm",row:"Footer_row__16dLG",title:"Footer_title__2-0u5",p:"Footer_p__1p26G",ticker:"Footer_ticker__W1vtg"}},,function(e,t,a){e.exports={container:"Intro_container__3L3Zr",title:"Intro_title__3WTgs",content:"Intro_content__26tWr",aside:"Intro_aside__2xRFs",image:"Intro_image__2q9l4",imageP:"Intro_imageP__1qY_P"}},,,,,,,function(e,t,a){e.exports={container:"Projects_container__24SQw",title:"Projects_title__3BfIb",list:"Projects_list__-mEBj",link:"Projects_link__14vvA"}},function(e,t,a){e.exports={container:"Clients_container__3pqRI",aside:"Clients_aside__1LvAb",title:"Clients_title__s2C5g",p:"Clients_p__2jLrQ"}},function(e,t,a){e.exports={inTouch:"Header_inTouch__T6HLx",container:"Header_container__21wXn",logo:"Header_logo__3T0lc",duck:"Header_duck__1VEPp"}},,,,,,,function(e,t,a){e.exports={container:"Contact_container__3LKin",title:"Contact_title__z-qXk"}},function(e,t,a){e.exports={ducks:"Ticker_ducks__HwpG4",text:"Ticker_text__3E5qT"}},,function(e,t,a){e.exports={aside:"AsideText_aside__25uOs",asideText:"AsideText_asideText__2oDuP"}},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/intro.2ec451b2.jpg"},function(e,t,a){e.exports=a.p+"static/media/intro@2x.7824534b.png"},,function(e,t,a){e.exports=a.p+"static/media/project-1.561d5838.png"},function(e,t,a){e.exports=a.p+"static/media/project-2.bfd203fd.png"},function(e,t,a){e.exports=a.p+"static/media/project-3.f329904f.png"},function(e,t,a){e.exports=a.p+"static/media/project-4.5cf22f01.png"},function(e,t,a){e.exports=a.p+"static/media/project-5.a2fe0a48.png"},function(e,t,a){e.exports=a.p+"static/media/project-6.f5b84555.png"},function(e,t,a){e.exports=a.p+"static/media/contact.d1422457.jpg"},function(e,t,a){e.exports=a.p+"static/media/contact@2x.ff564837.png"},function(e,t,a){e.exports={container:"Mainpage_container__6KE30"}},,function(e,t,a){e.exports=a.p+"static/media/duck-yellow.18a0207b.png"},,function(e,t,a){e.exports=a(89)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(25),o=a.n(r),c=(a(59),a(18)),l=a(4),s=a(14),p=a(15),d=a(17),C=a(16),u=a(3),m=a(2);window.CanvasSlideshow=function(e){var t=this;(e=e||{}).stageWidth=e.hasOwnProperty("stageWidth")?e.stageWidth:1920,e.stageHeight=e.hasOwnProperty("stageHeight")?e.stageHeight:1080,e.pixiSprites=e.hasOwnProperty("sprites")?e.sprites:[],e.texts=e.hasOwnProperty("texts")?e.texts:[],e.autoPlay=!e.hasOwnProperty("autoPlay")||e.autoPlay,e.autoPlaySpeed=e.hasOwnProperty("autoPlaySpeed")?e.autoPlaySpeed:[10,3],e.fullScreen=!e.hasOwnProperty("fullScreen")||e.fullScreen,e.displaceScale=e.hasOwnProperty("displaceScale")?e.displaceScale:[200,70],e.displacementImage=e.hasOwnProperty("displacementImage")?e.displacementImage:"",e.navElement=e.hasOwnProperty("navElement")?e.navElement:document.querySelectorAll(".scene-nav"),e.displaceAutoFit=!!e.hasOwnProperty("displaceAutoFit")&&e.displaceAutoFit,e.wacky=!!e.hasOwnProperty("wacky")&&e.wacky,e.interactive=!!e.hasOwnProperty("interactive")&&e.interactive,e.interactionEvent=e.hasOwnProperty("interactionEvent")?e.interactionEvent:"",e.displaceScaleTo=!1===e.autoPlay?[0,0]:[20,20],e.textColor=e.hasOwnProperty("textColor")?e.textColor:"#fff",e.displacementCenter=!!e.hasOwnProperty("displacementCenter")&&e.displacementCenter,e.dispatchPointerOver=!!e.hasOwnProperty("dispatchPointerOver")&&e.dispatchPointerOver,e.appendTo=!!e.hasOwnProperty("appendTo")&&e.appendTo;var a=new u.i({width:e.stageWidth,height:e.stageHeight,transparent:!0}),n=new u.a,i=new u.a,r=new u.a,o=new u.b.from(e.displacementImage),c=new u.j.DisplacementFilter(o),l=new u.d({fill:e.textColor,wordWrap:!0,wordWrapWidth:400,letterSpacing:20,fontSize:14});if(this.currentIndex=0,this.initPixi=function(){e.appendTo?document.body.querySelector(e.appendTo).appendChild(a.view):document.body.appendChild(a.view),i.addChild(r),i.interactive=!0,a.view.style.touchAction="auto",a.plugins.interaction.autoPreventDefault=!1,!0===e.fullScreen?(a.view.style.objectFit="cover",a.view.style.width="100%",a.view.style.height="100%",a.view.style.top="50%",a.view.style.left="50%",a.view.style.webkitTransform="translate( -50%, -50% )",a.view.style.transform="translate( -50%, -50% )"):(a.view.style.maxWidth="100%",a.view.style.top="50%",a.view.style.left="50%",a.view.style.webkitTransform="translate( -50%, -50% )",a.view.style.transform="translate( -50%, -50% )"),o.texture.baseTexture.wrapMode=u.h.REPEAT,i.filters=[c],!1===e.autoPlay&&(c.scale.x=0,c.scale.y=0),!0===e.wacky&&(o.anchor.set(.5),o.x=a.width/2,o.y=a.height/2),o.scale.x=2,o.scale.y=2,c.autoFit=e.displaceAutoFit,i.addChild(o)},this.bubble=function(e){var t=u.e.from("https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/bubble256.png?v=1"),a=u.e.from("https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/displacementmap.png?v=1"),n=new u.g(e),i=new u.b(t),r=new u.a,o=new u.b(a),c=new u.j.DisplacementFilter(o);r.addChild(o,i),m.d.set([r],{x:e.width/2,y:e.height/2}),m.d.set([o],{pixi:{scale:.625}}),m.d.set([o,i],{pixi:{anchor:.5}}),c.scale.set(20);var l=new u.a;return l.addChild(n,r),l.filters=[c],new m.c({repeat:-1,repeatDelay:.5,yoyo:!0,onRepeat:function(){}}).to(i,6,{rotation:360*Math.PI/180}).to(r,6,{x:125,y:125,scale:.6}).to(c,5,{scale:40}),l},this.loadPixiSprites=function(t){for(var a=e.sprites,n=e.texts,i=0;i<a.length;i++){var o=new u.e.from(t[i]),c=new u.b(o);if(n){var s=new u.c(n[i],l);c.addChild(s),s.anchor.set(.5),s.x=c.width/2,s.y=c.height/2}0!==i&&m.e.set(c,{alpha:0}),r.addChild(c)}},!0===e.autoPlay){var s=new u.f;s.autoStart=e.autoPlay,s.add(function(t){o.x+=e.autoPlaySpeed[0]*t,o.y+=e.autoPlaySpeed[1],a.render(n)})}else{var p=new u.f;p.autoStart=!0,p.add(function(e){a.render(n)})}var d,C,h,f=r.children;function g(){o.rotation+=.001,d=requestAnimationFrame(g)}this.moveSlider=function(a){var n=new m.c({onComplete:function(){t.currentIndex=a,!0===e.wacky&&o.scale.set(1)},onUpdate:function(){!0===e.wacky&&(o.rotation+=.02*n.progress(),o.scale.set(3*n.progress()))}});n.clear(),n.isActive()||n.to(c.scale,1.5,{x:e.displaceScale[0],y:e.displaceScale[1],ease:m.b.easeOut}).to(f[t.currentIndex],1.5,{alpha:0,ease:m.b.easeOut},0).to(f[a],1,{alpha:1,ease:m.b.easeOut},1).to(c.scale,1.5,{x:e.displaceScaleTo[0],y:e.displaceScaleTo[1],ease:m.a.easeOut},.8)},this.init=function(){t.initPixi(),t.loadPixiSprites(e.pixiSprites),n.addChild(i)},!0===e.interactive&&(r.interactive=!0,r.buttonMode=!0,"hover"!==e.interactionEvent&&"both"!==e.interactionEvent||(r.pointerover=function(e){C=e.data.global.x,h=e.data.global.y,m.e.to(c.scale,1,{x:"+="+25*Math.sin(C),y:"+="+25*Math.cos(h)}),g()},r.pointerout=function(e){m.e.to(c.scale,1,{x:0,y:0}),cancelAnimationFrame(d)}),"click"!==e.interactionEvent&&"both"!==e.interactionEvent||(r.pointerup=function(t){!0===e.dispatchPointerOver?m.e.to(c.scale,1,{x:0,y:0,onComplete:function(){m.e.to(c.scale,1,{x:20,y:20})}}):(m.e.to(c.scale,1,{x:0,y:0}),cancelAnimationFrame(d))},r.pointerdown=function(e){C=e.data.global.x,h=e.data.global.y,m.e.to(c.scale,1,{x:"+="+1200*Math.sin(C),y:"+="+200*Math.cos(h)})},r.pointerout=function(t){!0===e.dispatchPointerOver?m.e.to(c.scale,1,{x:0,y:0,onComplete:function(){m.e.to(c.scale,1,{x:20,y:20})}}):(m.e.to(c.scale,1,{x:0,y:0}),cancelAnimationFrame(d))})),!0===e.displacementCenter&&(o.anchor.set(.5),o.x=a.view.width/2,o.y=a.view.height/2),this.init()};var h=function(){return window.devicePixelRatio>1},f=a(39),g=a.n(f),w=a(40),L=a.n(w),v=a(31),y=a.n(v),E=function(e){var t=e.className,a=e.text,n=e.withArrow;return i.a.createElement("aside",{className:"".concat(y.a.aside," ").concat(n?"_arrow":""," ").concat(t)},i.a.createElement("span",{className:y.a.asideText},a))},_=a(12),x=a.n(_),b=function(e){Object(d.a)(a,e);var t=Object(C.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=h()?L.a:g.a;new window.CanvasSlideshow({sprites:[e],displacementImage:"clouds.jpg",autoPlay:!0,autoPlaySpeed:[.3,.3],displaceScale:[800,500],displaceAutoFit:!0,displacementCenter:!0,interactive:!0,interactionEvent:"hover",appendTo:".".concat(x.a.image),fullScreen:!0,stageWidth:1319,stageHeight:949})}},{key:"render",value:function(){return i.a.createElement("div",{className:x.a.container},i.a.createElement("h1",{className:x.a.title},"Digital design and development agency that solves all your problems from the bottom to the top"),i.a.createElement("div",{className:x.a.content},i.a.createElement(E,{className:x.a.aside,text:"scroll down",withArrow:!0}),i.a.createElement("div",{className:x.a.image},i.a.createElement("p",{className:x.a.imageP},"Websites Apps",i.a.createElement("br",null),"UX UI Branding"))))}}]),a}(n.Component),k=a(41),P=a.n(k),O=a(42),S=a.n(O),j=a(43),M=a.n(j),N=a(44),T=a.n(N),Z=a(45),A=a.n(Z),F=a(46),I=a.n(F),W=a(47),H=a.n(W),R=a(19),D=a.n(R),B=function(e){Object(d.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).checkVisibility=function(){if(e.list&&e.slider){var t=window.innerHeight,a=e.list.offsetHeight,n=e.list.getBoundingClientRect().top;n<t&&n+a>0?e.autoplay||(e.autoplay=!0,e.slider.slickPlay()):e.autoplay&&(e.autoplay=!1,e.slider.slickPause())}},e.sliderSettings={slidesToShow:2,infinite:!0,arrows:!1,autoplay:!1,autoplaySpeed:3e3,pauseOnHover:!1,speed:750,afterChange:function(){return e.afterChange()},responsive:[{breakpoint:682,settings:{slidesToShow:1}}]},e.images=[{link:"https://landing.adobe.com/en/na/dynamic-media/ctir-2755/dynamic-assets.html",image:S.a},{link:"https://www.xaxis.com/",image:M.a},{link:"http://www.nerdskincare.com/",image:T.a},{link:"https://sparkswell.com/",image:A.a},{link:"https://www.traxnyc.com/",image:I.a},{link:"https://hiyoume.io/",image:H.a}],e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.checkVisibility(),window.addEventListener("scroll",this.checkVisibility)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.checkVisibility)}},{key:"afterChange",value:function(){this.slider&&(this.slider.innerSlider.clickable=!0)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:D.a.container},i.a.createElement("h2",{className:"title-2 ".concat(D.a.title)},"Check out",i.a.createElement("br",null),"our projects"),i.a.createElement("div",{className:D.a.list,ref:function(t){return e.list=t}},i.a.createElement(P.a,Object.assign({},this.sliderSettings,{ref:function(t){return e.slider=t}}),this.images.map(function(e,t){return i.a.createElement("a",{target:"_blank",href:e.link,className:D.a.link,key:t},i.a.createElement("img",{src:e.image,alt:""}))}))))}}]),a}(n.Component),q=a(20),z=a.n(q),V=function(){return i.a.createElement("div",{className:z.a.container},i.a.createElement("h2",{className:"title-2 ".concat(z.a.title)},"Our clients"),i.a.createElement("p",{className:z.a.p},i.a.createElement("span",null,"Adobe")," ",i.a.createElement("span",null,"Google")," ",i.a.createElement("span",null,"Xaxis")," ",i.a.createElement("span",null,"Uber")," ",i.a.createElement("span",null,"Sony")," ",i.a.createElement("span",null,"ADP")," ",i.a.createElement("span",null,"BASIC")," ",i.a.createElement("span",null,"Droga5")," ",i.a.createElement("span",null,"Datto")," ",i.a.createElement("span",null,"Spinrilla")," ",i.a.createElement("span",null,"Extensis")," ",i.a.createElement("span",null,"Looking\xa0Glass")," ",i.a.createElement("span",null,"Nerd\xa0Skincare")," ",i.a.createElement("span",null,"Viventium")),i.a.createElement(E,{className:z.a.aside,text:"working hard"}))},G=a(48),U=a.n(G),X=a(49),Q=a.n(X),Y=a(28),J=a.n(Y),K=function(e){Object(d.a)(a,e);var t=Object(C.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=h()?Q.a:U.a;new window.CanvasSlideshow({sprites:[e],displacementImage:"clouds.jpg",autoPlay:!0,autoPlaySpeed:[.3,.3],displaceScale:[800,500],displaceAutoFit:!0,displacementCenter:!0,interactive:!0,interactionEvent:"hover",appendTo:".".concat(J.a.container),fullScreen:!0,stageWidth:1480,stageHeight:703})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:J.a.container,id:"contact",onClick:function(){return e.link.click()}},i.a.createElement("a",{ref:function(t){return e.link=t},href:"tel:+1-800-674-7976",className:J.a.title},"Contact us",i.a.createElement("br",null),"(800) 674-7976"))}}]),a}(n.Component),$=a(29),ee=a.n($),te=function(){return i.a.createElement("div",{className:ee.a.container},i.a.createElement("div",{className:ee.a.ducks}),i.a.createElement("div",{className:ee.a.text},"design    marketing   digital   branding   kittens   design   programming   design    marketing   digital   branding   kittens   design   programming    design    marketing   digital   branding   kittens   design   programming   design    marketing   digital   branding   kittens   design   programming   design    marketing   digital   branding   kittens   design   programming    design    marketing   digital   branding   kittens   design   programming"))},ae=a(10),ne=a.n(ae),ie=function(){return i.a.createElement("div",{className:ne.a.container},i.a.createElement(E,{className:ne.a.aside,text:"office at penn station"}),i.a.createElement("div",{className:ne.a.row},i.a.createElement("h3",{className:ne.a.title},"Visit us"),i.a.createElement("p",{className:ne.a.p},"315 W 36th, #6050, New York, NY 10018")),i.a.createElement("div",{className:ne.a.row},i.a.createElement("h3",{className:ne.a.title},"Or email us"),i.a.createElement("a",{href:"mailto:hey@foam.nyc",className:ne.a.p},"hey@foam.nyc")),i.a.createElement(te,{className:ne.a.ticker}))},re=a(50),oe=a.n(re),ce=function(){return i.a.createElement("div",{className:oe.a.container},i.a.createElement(b,null),i.a.createElement(B,null),i.a.createElement(V,null),i.a.createElement(K,null),i.a.createElement(ie,null))};var le,se,pe,de=function(){return i.a.createElement(l.c,null,i.a.createElement(l.a,{exact:!0,path:"/",component:ce}))},Ce=a(53),ue=["svgRef"];function me(){return(me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function he(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var fe=function(e){var t=e.svgRef,a=he(e,ue);return i.a.createElement("svg",me({viewBox:"0 0 72 71",ref:t},a),le||(le=i.a.createElement("path",{d:"M42.45,2.21 L43.8,2.4 L42.92,8.5 C42.8415978,9.42535973 42.3769173,10.2748537 41.64,10.84 C40.8701759,11.3539053 39.9277352,11.5409546 39.02,11.36 C37.7988988,11.2017058 36.6890286,10.5695467 35.93,9.6 L36.93,8.7 C37.4919074,9.36861227 38.2639511,9.82690307 39.12,10 C39.656683,10.1087316 40.2146306,10.0085871 40.68,9.72 C41.118089,9.39790583 41.3952638,8.90190896 41.44,8.36 L41.51,7.88 C40.840494,8.46125564 39.9386068,8.6978162 39.07,8.52 C38.1758584,8.415354 37.3667522,7.94004945 36.84,7.21 C36.3018856,6.465464 36.0889718,5.53441744 36.25,4.63 C36.3518619,3.7154769 36.8211138,2.88165232 37.55,2.32 C38.2627706,1.77063458 39.1734143,1.54569472 40.06,1.7 C41.0127694,1.7708197 41.862423,2.32592667 42.31,3.17 L42.45,2.21 Z M41.88,5.44 C42.0033187,4.87016629 41.8718465,4.27488924 41.52,3.81 C41.175057,3.3832311 40.6754447,3.11006177 40.13,3.05 C39.5693442,2.9397742 38.9883146,3.07461291 38.5335073,3.42049578 C38.0787,3.76637866 37.7935493,4.29027365 37.75,4.86 C37.6420376,5.43429701 37.7759128,6.0276898 38.12,6.5 C38.4608712,6.94319698 38.9651111,7.23133408 39.52,7.3 C40.0399171,7.37637448 40.5693663,7.25116688 41,6.95 C41.4998051,6.59936089 41.8212991,6.04770647 41.88,5.44 Z M51.83,10.08 L47.24,7.79 C47.0706109,8.28815803 47.0992539,8.8323754 47.32,9.31 C47.5541684,9.79567323 47.9501867,10.1846198 48.44,10.41 C49.1108158,10.731221 49.8770379,10.791806 50.59,10.58 L50.77,11.79 C49.7939694,12.1062713 48.7320725,12.0198797 47.82,11.55 C46.9291638,11.1351684 46.2439012,10.3777728 45.92,9.45 C45.590528,8.54447806 45.6595508,7.54183171 46.11,6.69 C46.5121253,5.81831033 47.2640069,5.15723568 48.18,4.87 C49.072413,4.54351802 50.0616437,4.6126187 50.9,5.06 C51.6702872,5.41698225 52.2597633,6.07517031 52.53,6.88 C52.8104256,7.6774111 52.7414358,8.55612348 52.34,9.3 C52.1986237,9.57762964 52.027629,9.83915096 51.83,10.08 Z M47.83,6.78 L51.17,8.45 C51.3874691,8.03901833 51.416638,7.55408586 51.25,7.12 C51.0890636,6.6805184 50.7624012,6.32154863 50.34,6.12 C49.9229186,5.91790688 49.4463527,5.87522933 49,6 C48.5153773,6.11111339 48.0842441,6.38675592 47.78,6.78 L47.83,6.78 Z M55.84,15.65 L55.02,16.59 C54.6648278,16.3972425 54.3298269,16.1694419 54.02,15.91 C53.4870078,15.4959029 53.1298894,14.895944 53.02,14.23 C52.9717614,13.564199 53.2164448,12.9104928 53.69,12.44 L55.89,9.9 L55,9.16 L55.83,8.16 L56.68,8.89 L57.86,7.53 L58.98,8.53 L57.81,9.91 L59.35,11.25 L58.52,12.25 L57,10.87 L54.88,13.31 C54.6317421,13.5448101 54.5030731,13.8793495 54.53,14.22 C54.6228843,14.5735886 54.8347793,14.884368 55.13,15.1 C55.23,15.2066667 55.4666667,15.39 55.84,15.65 Z M58.58,21.32 L64.58,17.88 L65.32,19.15 L59.32,22.59 L58.58,21.32 Z M66.17,17 C66.2267765,16.7446116 66.3907246,16.5260142 66.62,16.4 C66.8460103,16.2652493 67.1185254,16.2325475 67.37,16.31 C67.6296689,16.3813399 67.8495905,16.554393 67.98,16.79 C68.1102769,17.0172535 68.1461833,17.2865518 68.08,17.54 C68.02087,17.7942989 67.8575705,18.0120315 67.63,18.14 C67.4075012,18.2742908 67.1382016,18.3070435 66.89,18.23 C66.6395199,18.1563591 66.4277721,17.9876787 66.3,17.76 C66.1568175,17.5342291 66.1099998,17.2605258 66.17,17 Z M66.4,29.36 L62.28,30.59 L61.86,29.18 L65.79,28 C66.2068385,27.8986653 66.5664669,27.6361366 66.79,27.27 C66.9938951,26.9141813 67.0340023,26.4875868 66.9,26.1 C66.8061825,25.6739806 66.5327097,25.3093502 66.15,25.1 C65.7694401,24.90348 65.3251124,24.8709683 64.92,25.01 L61,26.25 L60.58,24.84 L67.17,22.84 L67.56,24.15 L66.92,24.34 C67.6052221,24.6940178 68.1071386,25.323232 68.3,26.07 C68.5315555,26.7303521 68.4696881,27.4582036 68.13,28.07 C67.749707,28.7146413 67.1263529,29.1794545 66.4,29.36 Z M63.37,40.78 L62.13,40.65 C62.0886945,40.2410403 62.0886945,39.8289597 62.13,39.42 C62.1619842,38.743938 62.4476424,38.1047778 62.93,37.63 C63.4488716,37.2115481 64.1243193,37.0399479 64.78,37.16 L68.12,37.52 L68.24,36.41 L69.51,36.54 L69.39,37.66 L71.19,37.85 L71,39.32 L69.2,39.13 L68.98,41.13 L67.73,41 L67.95,39 L64.73,38.66 C64.3948401,38.5886589 64.0454132,38.673257 63.78,38.89 C63.5423505,39.1698612 63.4081804,39.5229405 63.4,39.89 C63.38,40 63.38,40.34 63.37,40.78 Z M65.41,42.37 C66.3099502,42.6788572 67.0367587,43.3547891 67.41,44.23 C68.2317777,46.0591974 67.4468087,48.2101012 65.64,49.08 C64.7781147,49.4940942 63.7858809,49.54406 62.8867563,49.2186446 C61.9876316,48.8932292 61.2572146,48.2197936 60.86,47.35 C60.4375208,46.4750169 60.4012472,45.4629842 60.76,44.56 C61.0656724,43.6431364 61.7450076,42.8984107 62.63,42.51 C63.4935495,42.0662217 64.5062355,42.0152231 65.41,42.37 Z M63.41,47.79 C63.9604886,48.0188898 64.5795114,48.0188898 65.13,47.79 C65.650077,47.5523349 66.0507506,47.1128697 66.2394796,46.5731047 C66.4282086,46.0333398 66.3886715,45.4399548 66.13,44.93 C65.8625068,44.3989117 65.3948177,43.9959795 64.83,43.81 C64.286,43.5833333 63.674,43.5833333 63.13,43.81 C62.6131671,44.0540306 62.2160912,44.4955321 62.0280341,45.0352558 C61.8399771,45.5749795 61.8767189,46.1676371 62.13,46.68 C62.3959949,47.2101077 62.8647593,47.6103604 63.43,47.79 L63.41,47.79 Z M60.81,51.64 L63.93,54.12 L63,55.27 L59.79,52.72 C59.4755597,52.4426108 59.0587944,52.3105504 58.6419839,52.3562283 C58.2251734,52.4019061 57.8469011,52.6210939 57.6,52.96 C57.3354283,53.2695782 57.2121755,53.6755872 57.26,54.08 C57.3271996,54.4818663 57.549932,54.8411121 57.88,55.08 L61.09,57.63 L60.17,58.78 L57.05,56.3 C56.4003752,55.8206176 55.9713891,55.0996326 55.86,54.3 C55.7746127,53.5091083 56.0167213,52.7177382 56.53,52.11 C57.0078217,51.4500893 57.7427949,51.0234385 58.5528007,50.9357673 C59.3628065,50.848096 60.1720468,51.1076085 60.78,51.65 L60.81,51.64 Z M55.61,58.52 C56.179686,59.29221 56.3908661,60.2716486 56.19,61.21 C56.0316326,62.1651204 55.4803369,63.0101987 54.67,63.54 C53.7260231,64.2651053 52.4554007,64.4002778 51.38,63.89 L51.76,62.63 C52.4533727,62.9364789 53.2561765,62.8607427 53.88,62.43 C54.3765061,62.1096804 54.7059633,61.5862094 54.78,61 C54.9204891,59.8168275 54.1570169,58.7145108 53,58.43 C52.4316226,58.3038561 51.8364912,58.4316451 51.37,58.78 C50.760957,59.2208644 50.4150725,59.9389508 50.45,60.69 L49.14,60.63 C49.0925699,60.0716693 49.1889676,59.5104967 49.42,59 C49.6794252,58.4715013 50.0723954,58.0199303 50.56,57.69 C51.3318307,57.0929211 52.3168863,56.8430357 53.28,57 C54.2351204,57.1583674 55.0801987,57.7096631 55.61,58.52 Z M42.05,66.16 L40.76,62.06 L42.16,61.62 L43.39,65.52 C43.4933305,65.9359092 43.7553567,66.2948492 44.12,66.52 C44.4783989,66.71857 44.905448,66.7514199 45.29,66.61 C45.6949249,66.4975089 46.0352051,66.2223887 46.23,65.85 C46.4232256,65.4680486 46.4521222,65.0237626 46.31,64.62 L45.08,60.72 L46.48,60.28 L49.63,70.28 L48.23,70.72 L46.95,66.6 C46.6445604,67.2955757 46.0360294,67.8119051 45.3,68 C44.641952,68.2412585 43.9113227,68.1828082 43.3,67.84 C42.6817326,67.4627454 42.2337018,66.860592 42.05,66.16 Z",fill:"#00FF5A",fillRule:"nonzero"})),se||(se=i.a.createElement("path",{d:"M28.38,68.55 L27,68.35 L28,62.26 C28.084822,61.3345904 28.5570495,60.4882134 29.3,59.93 C30.073103,59.4240466 31.0149047,59.2443135 31.92,59.43 C33.1436871,59.6008703 34.2505148,60.2477177 35,61.23 L34,62.12 C33.4341238,61.4287407 32.6459991,60.9551591 31.77,60.78 C31.2345863,60.6682985 30.676728,60.7648509 30.21,61.05 C29.7696352,61.3669812 29.4886592,61.8596015 29.44,62.4 L29.37,62.88 C30.0464166,62.3048742 30.9528794,62.0791835 31.82,62.27 C32.6993295,62.3927707 33.4885372,62.8742599 34,63.6 C35.040198,65.1779211 34.7160175,67.2872555 33.25,68.48 C32.5341106,69.0223267 31.6237619,69.23994 30.74,69.08 C29.7903962,68.9984397 28.9487697,68.4360973 28.51,67.59 L28.38,68.55 Z M28.98,65.33 C28.8386184,65.9095156 28.9632937,66.5218915 29.32,67 C29.6607889,67.4282195 30.1566145,67.7048758 30.7,67.77 C31.2572792,67.8863746 31.8377433,67.7597418 32.295918,67.421838 C32.7540927,67.0839341 33.0465518,66.566786 33.1,66 C33.2108208,65.4270853 33.0805927,64.8338239 32.74,64.36 C32.4033072,63.9153457 31.9028524,63.6237138 31.35,63.55 C30.8196771,63.4571439 30.2740758,63.5755968 29.83,63.88 C29.3637752,64.2269203 29.0630442,64.7522936 29,65.33 L28.98,65.33 Z M15.11,55 L15.94,54.07 C16.295535,54.2660351 16.6305405,54.4971888 16.94,54.76 C17.4751446,55.1765259 17.8324883,55.7804369 17.94,56.45 C17.9787295,57.1152756 17.7270076,57.764645 17.25,58.23 L15,60.73 L15.84,61.47 L15,62.47 L14.16,61.73 L13,63 L11.89,62 L13.09,60.65 L11.56,59.3 L12.4,58.3 L13.93,59.65 L16.07,57.23 C16.3219375,56.9970562 16.4543851,56.6622582 16.43,56.32 C16.3418086,55.9641909 16.1333817,55.6497841 15.84,55.43 C15.72,55.3966667 15.4766667,55.2533333 15.11,55 Z M4.79,53.56 C4.73063613,53.8116681 4.56701124,54.0261985 4.34,54.15 C4.11251989,54.2813983 3.84007819,54.3104587 3.59,54.23 C3.33405786,54.1562882 3.1180964,53.983519 2.99,53.75 C2.8597231,53.5227465 2.82381666,53.2534482 2.89,53 C2.95145285,52.7438853 3.11862192,52.5258387 3.35,52.4 C3.57398385,52.2690627 3.84320752,52.2399575 4.09,52.32 C4.34048013,52.3936409 4.55222793,52.5623213 4.68,52.79 C4.81907426,53.0213055 4.85874574,53.2990059 4.79,53.56 Z M12.43,49.29 L6.43,52.67 L5.71,51.39 L11.71,48.01 L12.43,49.29 Z M4.68,41.19 L8.81,40 L9.22,41.41 L5.28,42.55 C4.86529647,42.6499054 4.50628094,42.9083966 4.28,43.27 C4.07277685,43.6243254 4.0290167,44.0509868 4.16,44.44 C4.25151966,44.8641779 4.52110375,45.2284808 4.9,45.44 C5.27776125,45.6431429 5.72218717,45.6828883 6.13,45.55 L10.07,44.41 L10.48,45.82 L3.88,47.73 L3.5,46.35 L4.15,46.16 C3.46795117,45.7971815 2.97317202,45.1605171 2.79,44.41 C2.56451988,43.7468251 2.63367716,43.0188537 2.98,42.41 C3.3677106,41.7989209 3.97696432,41.3616917 4.68,41.19 Z M7.82,29.78 L9.06,29.92 C9.10151004,30.3289493 9.10151004,30.7410507 9.06,31.15 C9.02535041,31.8274534 8.73603495,32.4668048 8.25,32.94 C7.72479714,33.3530519 7.04593159,33.5172935 6.39,33.39 L3.06,33 L2.93,34.11 L1.67,34 L1.8,32.89 L0,32.65 L0.17,31.18 L2,31.39 L2.24,29.39 L3.51,29.54 L3.28,31.54 L6.49,31.91 C6.82364201,31.9841057 7.17289783,31.9032254 7.44,31.69 C7.68198276,31.4119494 7.81984268,31.0584625 7.83,30.69 C7.81666667,30.5366667 7.81333333,30.2333333 7.82,29.78 Z M5.8,28.19 C4.89541387,27.8777574 4.16754616,27.1935617 3.8,26.31 C3.38616098,25.4387175 3.35713561,24.4337143 3.72,23.54 C4.02992033,22.6199967 4.71208768,21.8725155 5.6,21.48 C6.45858755,21.0510967 7.45989809,21.0110443 8.35,21.37 C9.25590347,21.6856055 9.98370614,22.373379 10.35,23.26 C10.7559874,24.1219823 10.7885468,25.1132338 10.44,26 C10.1188966,26.9025491 9.43296131,27.6284066 8.55,28 C7.70197944,28.4512318 6.70201869,28.52032 5.8,28.19 Z M7.8,22.79 C7.24951138,22.5611102 6.63048862,22.5611102 6.08,22.79 C5.54575017,23.0124179 5.12696317,23.4454427 4.92252422,23.9868273 C4.71808527,24.528212 4.74611683,25.1299654 5,25.65 C5.26098008,26.1866632 5.72531364,26.5970045 6.29,26.79 C6.834,27.0166667 7.446,27.0166667 7.99,26.79 C8.51225654,26.556883 8.91882402,26.1235338 9.11819586,25.5874869 C9.3175677,25.05144 9.29299199,24.4577358 9.05,23.94 C8.81106515,23.4106628 8.37251643,22.9972767 7.83,22.79 L7.8,22.79 Z M10.48,19 L7.38,16.49 L8.3,15.36 L11.49,17.94 C11.8047454,18.2194578 12.2207161,18.356909 12.64,18.32 C13.0398497,18.2609129 13.3996997,18.0450028 13.64,17.72 C13.9227724,17.4039662 14.054162,16.9805997 14,16.56 C13.9352962,16.1597093 13.716308,15.8007122 13.39,15.56 L10.2,12.98 L11.13,11.84 L14.23,14.35 C14.8721056,14.8330756 15.2935816,15.5535474 15.4,16.35 C15.4798989,17.143718 15.230454,17.9354343 14.71,18.54 C14.2275413,19.1987304 13.4881461,19.621711 12.675762,19.7037122 C11.863378,19.7857134 11.0543685,19.5190272 10.45,18.97 L10.48,19 Z M15.78,12.1 C15.2166681,11.3210816 15.0162504,10.3372128 15.23,9.4 C15.3983605,8.44878404 15.9567085,7.61126196 16.77,7.09 C17.721815,6.37802085 18.9919457,6.25834288 20.06,6.78 L19.66,8 C18.9717502,7.6847293 18.1692159,7.74908347 17.54,8.17 C17.0470523,8.4816654 16.7147014,8.99297449 16.63,9.57 C16.4573226,10.7775238 17.2333152,11.9176694 18.42,12.2 C18.9900823,12.3320459 19.5893975,12.2077976 20.06,11.86 C20.6615891,11.4335519 21.0134669,10.7372829 21,10 L22.31,10.08 C22.3520228,10.647606 22.2451677,11.2163511 22,11.73 C21.7202348,12.2494067 21.3101323,12.6870791 20.81,13 C20.0198112,13.5636206 19.0324139,13.7770142 18.08,13.59 C17.1409367,13.4310575 16.3089174,12.8920536 15.78,12.1 Z M29.37,4.61 L30.62,8.72 L29.21,9.15 L28,5.24 C27.8991122,4.82574803 27.6408636,4.46706943 27.28,4.24 C26.9230932,4.03812847 26.4959879,4.00162374 26.11,4.14 C25.7007736,4.24891439 25.3560881,4.52466281 25.16,4.9 C24.96348,5.28055985 24.9309683,5.72488758 25.07,6.13 L26.28,10 L24.87,10.43 L21.82,0.43 L23.23,0 L24.48,4.13 C24.7923961,3.43975044 25.4043007,2.93105869 26.14,2.75 C26.8011051,2.51617229 27.5312696,2.58188709 28.14,2.93 C28.7507118,3.31107031 29.191198,3.91271005 29.37,4.61 Z M19.06,60.59 L23.62,62.92 C23.8009852,62.4252077 23.7794238,61.8789866 23.56,61.4 C23.3302192,60.9122613 22.9377387,60.5197808 22.45,60.29 C21.7833409,59.9563754 21.0148364,59.888461 20.3,60.1 L20.14,58.88 C21.1186683,58.5698817 22.1806624,58.6634812 23.09,59.14 C23.9906969,59.5595525 24.6807341,60.3290704 25,61.27 C25.6130638,63.1635007 24.5871155,65.1975547 22.7,65.83 C21.8035355,66.1485907 20.8136097,66.0685231 19.98,65.61 C19.2131902,65.2440959 18.6308771,64.5785952 18.37,63.77 C18.0956857,62.9698028 18.1719469,62.0909835 18.58,61.35 C18.713878,61.0810811 18.874702,60.8264431 19.06,60.59 Z M23.06,63.93 L19.73,62.23 C19.5059666,62.6380312 19.4694986,63.1230564 19.63,63.56 C19.7885547,63.997681 20.111381,64.3563769 20.53,64.56 C20.9407664,64.7788846 21.4175885,64.8393769 21.87,64.73 C22.3541672,64.6123286 22.7820987,64.3293986 23.08,63.93 L23.06,63.93 Z",fill:"#FF00E7",fillRule:"nonzero"})),pe||(pe=i.a.createElement("path",{d:"M31.75,40.62 C30.6898928,39.6242648 30.1043169,38.2239747 30.14,36.77 C30.109619,35.3082686 30.6936487,33.9007935 31.75,32.89 C32.7870814,31.8516368 34.2027244,31.281046 35.67,31.31 C37.1107041,31.2709327 38.5036745,31.8281209 39.52,32.85 C40.5507191,33.8891873 41.1077651,35.3071225 41.06,36.77 C41.0960585,38.2102685 40.5397721,39.6022866 39.5210294,40.6210294 C38.5022866,41.6397721 37.1102685,42.1960585 35.67,42.16 C34.2099641,42.1915615 32.7981347,41.6369142 31.75,40.62 Z",fill:"#3E2B9E",fillRule:"nonzero"})))},ge=i.a.forwardRef(function(e,t){return i.a.createElement(fe,me({svgRef:t},e))}),we=(a.p,a(52)),Le=a.n(we),ve=a(21),ye=a.n(ve),Ee=(Ce.a,Object(l.f)(function(){return i.a.createElement("header",{className:ye.a.container},i.a.createElement(c.b,{to:"/",className:ye.a.logo},"foam"),i.a.createElement("button",{className:ye.a.inTouch,onClick:function(){return m.d.to(window,1,{scrollTo:"#contact"})}},i.a.createElement(ge,null),i.a.createElement("img",{src:Le.a,alt:"duck",className:ye.a.duck})))}));var _e=function(){return i.a.createElement(c.a,null,i.a.createElement(Ee,null),i.a.createElement(de,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[54,1,2]]]);
//# sourceMappingURL=main.c5ac927d.chunk.js.map