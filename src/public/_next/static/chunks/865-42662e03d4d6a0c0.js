(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[865],{9372:function(t,e,n){var r=function(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}),e.default=t,Object.freeze(e)}(n(2265)),i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};e.Z=function(t){var e=t.bgColor,n=t.height,a=void 0===n?"20px":n,o=t.width,s=t.borderRadius,l=t.labelAlignment,u=void 0===l?"right":l,c=t.baseBgColor,f=t.labelColor,p=t.labelSize,d=t.isLabelVisible,h=t.dir,m=t.ariaValuemin,g=t.ariaValuemax,y=t.ariaValuetext,v=void 0===y?null:y,b=t.maxCompleted,V=t.animateOnRender,w=void 0!==V&&V,E=t.initCompletedOnAnimation,O=void 0===E?0:E,S=t.completed,F=t.margin,x=t.padding,j=t.customLabelStyles,C=t.transitionDuration,R=t.transitionTimingFunction,A=t.className,N=t.customLabel,P=t.barContainerClassName,D=t.completedClassName,T=t.labelClassName,k="left"===u?"flex-start":"center"===u?"center":"right"===u?"flex-end":null,I="number"==typeof O?"".concat(O,"%"):O,U=function(t,e){if(t){var n=Number(e)/t;return n>1?"100%":"".concat(100*n,"%")}return I}(void 0===b?100:b,S),M=r.useState(I),z=M[0],G=M[1],_={height:a,width:w?z:U,background:void 0===e?"#6a1b9a":e,transition:"width ".concat(C||"1s"," ").concat(R||"ease-in-out"),borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:"outside"!==u&&k?k:"normal"},q=i({padding:"outside"===u?"0 0 0 5px":"5px",color:void 0===f?"#fff":f,fontWeight:"bold",fontSize:void 0===p?"15px":p,display:void 0===d||d?"initial":"none"},j),L=N||("number"==typeof S?"".concat(S,"%"):"".concat(S));return r.useEffect(function(){w&&requestAnimationFrame(function(){return G(U)})},[U,w]),r.createElement("div",{style:A?void 0:{display:"outside"===u?"flex":"initial",alignItems:"outside"===u?"center":"initial"},className:A,dir:void 0===h?"ltr":h,role:"progressbar","aria-valuenow":parseFloat(L),"aria-valuemin":void 0===m?0:m,"aria-valuemax":void 0===g?100:g,"aria-valuetext":"".concat(null===v?L:v)},r.createElement("div",{style:P?void 0:{height:a,background:void 0===c?"#e0e0de":c,borderRadius:void 0===s?"50px":s,padding:x,width:void 0===o?"100%":o,margin:F,overflow:"hidden"},className:P},r.createElement("div",{style:D?void 0:_,className:D},"outside"!==u&&r.createElement("span",{style:T?void 0:q,className:T},L))),"outside"===u&&r.createElement("span",{style:T?void 0:q,className:T},L))}},7992:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,a=(Math.abs(t).toFixed(i.options.decimalPlaces)+"").split(".");if(e=a[0],n=a.length>1?i.options.decimal+a[1]:"",i.options.useGrouping){r="";for(var o=3,s=0,l=0,u=e.length;l<u;++l)i.options.useIndianSeparators&&4===l&&(o=2,s=1),0!==l&&s%o==0&&(r=i.options.separator+r),s++,r=e[u-l-1]+r;e=r}return i.options.numerals&&i.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return i.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return i.options.numerals[+t]})),(t<0?"-":"")+i.options.prefix+e+n+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},7095:function(t,e,n){"use strict";var r=n(2265),i=n(7992);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){var r,i;r=e,i=n[e],(r=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(r))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function f(t){var e=r.useRef(t);return c(function(){e.current=t}),r.useCallback(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)},[])}var p=function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,o=e.easingFn,s=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,f=e.separator,p=e.start,d=e.suffix,h=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,y=e.enableScrollSpy,v=e.scrollSpyDelay,b=e.scrollSpyOnce,V=e.plugin;return new i.CountUp(t,s,{startVal:p,duration:a,decimal:n,decimalPlaces:r,easingFn:o,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:d,plugin:V,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:y,scrollSpyDelay:v,scrollSpyOnce:b})},d=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},m=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(t){return void 0!==(function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a,o,s=[],l=!0,u=!1;try{for(a=(n=n.call(t)).next;!(l=(r=a.call(n)).done)&&(s.push(r.value),2!==s.length);l=!0);}catch(t){u=!0,i=t}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return s}}(t,2)||function(t,e){if(t){if("string"==typeof t)return u(t,2);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=r.useMemo(function(){return o(o({},h),e)},[t]),i=n.ref,a=n.startOnMount,s=n.enableReinitialize,c=n.delay,m=n.onEnd,g=n.onStart,y=n.onPauseResume,v=n.onReset,b=n.onUpdate,V=l(n,d),w=r.useRef(),E=r.useRef(),O=r.useRef(!1),S=f(function(){return p("string"==typeof i?i:i.current,V)}),F=f(function(t){var e=w.current;if(e&&!t)return e;var n=S();return w.current=n,n}),x=f(function(){var t=function(){return F(!0).start(function(){null==m||m({pauseResume:j,reset:C,start:A,update:R})})};c&&c>0?E.current=setTimeout(t,1e3*c):t(),null==g||g({pauseResume:j,reset:C,update:R})}),j=f(function(){F().pauseResume(),null==y||y({reset:C,start:A,update:R})}),C=f(function(){F().el&&(E.current&&clearTimeout(E.current),F().reset(),null==v||v({pauseResume:j,start:A,update:R}))}),R=f(function(t){F().update(t),null==b||b({pauseResume:j,reset:C,start:A})}),A=f(function(){C(),x()}),N=f(function(t){a&&(t&&C(),x())});return r.useEffect(function(){O.current?s&&N(!0):(O.current=!0,N())},[s,O,N,c,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect(function(){return function(){C()}},[C]),{start:A,pauseResume:j,reset:C,update:R,getCountUp:F}},g=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,u=t.style,c=l(t,g),p=r.useRef(null),d=r.useRef(!1),h=m(o(o({},c),{},{ref:p,startOnMount:"function"!=typeof a||0===t.delay,enableReinitialize:!1})),y=h.start,v=h.reset,b=h.update,V=h.pauseResume,w=h.getCountUp,E=f(function(){y()}),O=f(function(e){t.preserveValue||v(),b(e)}),S=f(function(){if("function"==typeof t.children&&!(p.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}w()});r.useEffect(function(){S()},[S]),r.useEffect(function(){d.current&&O(t.end)},[t.end,O]);var F=n&&t;return(r.useEffect(function(){n&&d.current&&E()},[E,n,F]),r.useEffect(function(){!n&&d.current&&E()},[E,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect(function(){d.current=!0},[]),"function"==typeof a)?a({countUpRef:p,start:y,reset:v,update:b,pauseResume:V,getCountUp:w}):r.createElement("span",s({className:e,ref:p,style:u},i),void 0!==t.start?w().formattingFn(t.start):"")}},7322:function(){}}]);