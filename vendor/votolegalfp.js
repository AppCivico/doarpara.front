// @ts-nocheck
(function(p,a,c){"function"===typeof window.define&&window.define.amd?window.define(c):"undefined"!==typeof module&&module.exports?module.exports=c():a.exports?a.exports=c():a[p]=c()})("VotolegalFP",this,function(){var p=function(a){if(!(this instanceof p)){return new p(a)}
this.options=this.extend(a,{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",detectScreenOrientation:!0,sortPluginsFor:[/palemoon/i],userDefinedFonts:[],excludeDoNotTrack:!0,excludePixelRatio:!0});this.nativeForEach=Array.prototype.forEach;this.nativeMap=Array.prototype.map};p.prototype={extend:function(a,c){if(null==a){return c}
for(var b in a){null!=a[b]&&c[b]!==a[b]&&(c[b]=a[b])}
return c},get:function(a){var c=this,b={data:[],addPreprocessedComponent:function(a){var d=a.value;"function"===typeof c.options.preprocessor&&(d=c.options.preprocessor(a.key,d));b.data.push({key:a.key,value:d})}};b=this.userAgentKey(b);b=this.languageKey(b);b=this.colorDepthKey(b);b=this.deviceMemoryKey(b);b=this.pixelRatioKey(b);b=this.hardwareConcurrencyKey(b);b=this.screenResolutionKey(b);b=this.availableScreenResolutionKey(b);b=this.timezoneOffsetKey(b);b=this.sessionStorageKey(b);b=this.localStorageKey(b);b=this.indexedDbKey(b);b=this.addBehaviorKey(b);b=this.openDatabaseKey(b);b=this.cpuClassKey(b);b=this.platformKey(b);b=this.doNotTrackKey(b);b=this.pluginsKey(b);b=this.canvasKey(b);b=this.webglKey(b);b=this.webglVendorAndRendererKey(b);b=this.adBlockKey(b);b=this.hasLiedLanguagesKey(b);b=this.hasLiedResolutionKey(b);b=this.hasLiedOsKey(b);b=this.hasLiedBrowserKey(b);b=this.touchSupportKey(b);b=this.customEntropyFunction(b);this.fontsKey(b,function(b){var d=[];c.each(b.data,function(a){(a=a.value)&&"function"===typeof a.join&&(a=a.join(";"));d.push(a)});var h=c.x64hash128(d.join("~~~"),31);return a(h,b.data)})},customEntropyFunction:function(a){"function"===typeof this.options.customFunction&&a.addPreprocessedComponent({key:"custom",value:this.options.customFunction()});return a},userAgentKey:function(a){this.options.excludeUserAgent||a.addPreprocessedComponent({key:"user_agent",value:this.getUserAgent()});return a},getUserAgent:function(){return navigator.userAgent},languageKey:function(a){this.options.excludeLanguage||a.addPreprocessedComponent({key:"language",value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||""});return a},colorDepthKey:function(a){this.options.excludeColorDepth||a.addPreprocessedComponent({key:"color_depth",value:window.screen.colorDepth||-1});return a},deviceMemoryKey:function(a){this.options.excludeDeviceMemory||a.addPreprocessedComponent({key:"device_memory",value:this.getDeviceMemory()});return a},getDeviceMemory:function(){return navigator.deviceMemory||-1},pixelRatioKey:function(a){this.options.excludePixelRatio||a.addPreprocessedComponent({key:"pixel_ratio",value:this.getPixelRatio()});return a},getPixelRatio:function(){return window.devicePixelRatio||""},screenResolutionKey:function(a){return this.options.excludeScreenResolution?a:this.getScreenResolution(a)},getScreenResolution:function(a){a.addPreprocessedComponent({key:"resolution",value:this.options.detectScreenOrientation?window.screen.height>window.screen.width?[window.screen.height,window.screen.width]:[window.screen.width,window.screen.height]:[window.screen.width,window.screen.height]});return a},availableScreenResolutionKey:function(a){return this.options.excludeAvailableScreenResolution?a:this.getAvailableScreenResolution(a)},getAvailableScreenResolution:function(a){var c;window.screen.availWidth&&window.screen.availHeight&&(c=this.options.detectScreenOrientation?window.screen.availHeight>window.screen.availWidth?[window.screen.availHeight,window.screen.availWidth]:[window.screen.availWidth,window.screen.availHeight]:[window.screen.availHeight,window.screen.availWidth]);"undefined"!==typeof c&&a.addPreprocessedComponent({key:"available_resolution",value:c});return a},timezoneOffsetKey:function(a){this.options.excludeTimezoneOffset||a.addPreprocessedComponent({key:"timezone_offset",value:(new Date).getTimezoneOffset()});return a},sessionStorageKey:function(a){!this.options.excludeSessionStorage&&this.hasSessionStorage()&&a.addPreprocessedComponent({key:"session_storage",value:1});return a},localStorageKey:function(a){!this.options.excludeSessionStorage&&this.hasLocalStorage()&&a.addPreprocessedComponent({key:"local_storage",value:1});return a},indexedDbKey:function(a){!this.options.excludeIndexedDB&&this.hasIndexedDB()&&a.addPreprocessedComponent({key:"indexed_db",value:1});return a},addBehaviorKey:function(a){!this.options.excludeAddBehavior&&document.body&&document.body.addBehavior&&a.addPreprocessedComponent({key:"add_behavior",value:1});return a},openDatabaseKey:function(a){!this.options.excludeOpenDatabase&&window.openDatabase&&a.addPreprocessedComponent({key:"open_database",value:1});return a},cpuClassKey:function(a){this.options.excludeCpuClass||a.addPreprocessedComponent({key:"cpu_class",value:this.getNavigatorCpuClass()});return a},platformKey:function(a){this.options.excludePlatform||a.addPreprocessedComponent({key:"navigator_platform",value:this.getNavigatorPlatform()});return a},doNotTrackKey:function(a){this.options.excludeDoNotTrack||a.addPreprocessedComponent({key:"do_not_track",value:this.getDoNotTrack()});return a},canvasKey:function(a){!this.options.excludeCanvas&&this.isCanvasSupported()&&a.addPreprocessedComponent({key:"canvas",value:this.getCanvasFp()});return a},webglKey:function(a){!this.options.excludeWebGL&&this.isWebGlSupported()&&a.addPreprocessedComponent({key:"webgl",value:this.getWebglFp()});return a},webglVendorAndRendererKey:function(a){!this.options.excludeWebGLVendorAndRenderer&&this.isWebGlSupported()&&a.addPreprocessedComponent({key:"webgl_vendor",value:this.getWebglVendorAndRenderer()});return a},adBlockKey:function(a){this.options.excludeAdBlock||a.addPreprocessedComponent({key:"adblock",value:this.getAdBlock()});return a},hasLiedLanguagesKey:function(a){this.options.excludeHasLiedLanguages||a.addPreprocessedComponent({key:"has_lied_languages",value:this.getHasLiedLanguages()});return a},hasLiedResolutionKey:function(a){this.options.excludeHasLiedResolution||a.addPreprocessedComponent({key:"has_lied_resolution",value:this.getHasLiedResolution()});return a},hasLiedOsKey:function(a){this.options.excludeHasLiedOs||a.addPreprocessedComponent({key:"has_lied_os",value:this.getHasLiedOs()});return a},hasLiedBrowserKey:function(a){this.options.excludeHasLiedBrowser||a.addPreprocessedComponent({key:"has_lied_browser",value:this.getHasLiedBrowser()});return a},fontsKey:function(a,c){return this.options.excludeJsFonts?this.flashFontsKey(a,c):this.jsFontsKey(a,c)},flashFontsKey:function(a,c){if(this.options.excludeFlashFonts||!this.hasSwfObjectLoaded()||!this.hasMinFlashInstalled()||"undefined"===typeof this.options.swfPath){return c(a)}
this.loadSwfAndDetectFonts(function(b){a.addPreprocessedComponent({key:"swf_fonts",value:b.join(";")});c(a)})},jsFontsKey:function(a,c){var b=this;return setTimeout(function(){var h=["monospace","sans-serif","serif"],d="Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),f=[];b.options.extendedJsFonts&&(d=d.concat(f));d=d.concat(b.options.userDefinedFonts);d=d.filter(function(a,b){return d.indexOf(a)===b});f=document.getElementsByTagName("body")[0];var e=document.createElement("div"),g=document.createElement("div"),l={},n={},k=function(){var a=document.createElement("span");a.style.position="absolute";a.style.left="-9999px";a.style.fontSize="72px";a.style.fontStyle="normal";a.style.fontWeight="normal";a.style.letterSpacing="normal";a.style.lineBreak="auto";a.style.lineHeight="normal";a.style.textTransform="none";a.style.textAlign="left";a.style.textDecoration="none";a.style.textShadow="none";a.style.whiteSpace="normal";a.style.wordBreak="normal";a.style.wordSpacing="normal";a.innerHTML="mmmmmmmmmmlli";return a},p=function(a){for(var b=!1,c=0;c<h.length&&!(b=a[c].offsetWidth!==l[h[c]]||a[c].offsetHeight!==n[h[c]]);c++){}
return b},q=function(){for(var a=[],b=0,c=h.length;b<c;b++){var d=k();d.style.fontFamily=h[b];e.appendChild(d);a.push(d)}
return a}();f.appendChild(e);for(var m=0,r=h.length;m<r;m++){l[h[m]]=q[m].offsetWidth,n[h[m]]=q[m].offsetHeight}
q=function(){for(var a={},b=0,c=d.length;b<c;b++){for(var e=[],f=0,n=h.length;f<n;f++){var l=d[b];var q=h[f],m=k();m.style.fontFamily="'"+l+"',"+q;l=m;g.appendChild(l);e.push(l)}
a[d[b]]=e}
return a}();f.appendChild(g);m=[];r=0;for(var t=d.length;r<t;r++){p(q[d[r]])&&m.push(d[r])}
f.removeChild(g);f.removeChild(e);a.addPreprocessedComponent({key:"js_fonts",value:m});c(a)},1)},pluginsKey:function(a){this.options.excludePlugins||(this.isIE()?this.options.excludeIEPlugins||a.addPreprocessedComponent({key:"ie_plugins",value:this.getIEPlugins()}):a.addPreprocessedComponent({key:"regular_plugins",value:this.getRegularPlugins()}));return a},getRegularPlugins:function(){var a=[];if(navigator.plugins){for(var c=0,b=navigator.plugins.length;c<b;c++){navigator.plugins[c]&&a.push(navigator.plugins[c])}}
this.pluginsShouldBeSorted()&&(a=a.sort(function(a,b){return a.name>b.name?1:a.name<b.name?-1:0}));return this.map(a,function(a){var b=this.map(a,function(a){return[a.type,a.suffixes].join("~")}).join(",");return[a.name,a.description,b].join("::")},this)},getIEPlugins:function(){var a=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject" in window){a=this.map("AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);Scripting.Dictionary;SWCtl.SWCtl;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;Skype.Detection;TDCCtl.TDCCtl;WMPlayer.OCX;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1".split(";"),function(a){try{return new window.ActiveXObject(a),a}catch(b){return null}})}
navigator.plugins&&(a=a.concat(this.getRegularPlugins()));return a},pluginsShouldBeSorted:function(){for(var a=!1,c=0,b=this.options.sortPluginsFor.length;c<b;c++){if(navigator.userAgent.match(this.options.sortPluginsFor[c])){a=!0;break}}
return a},touchSupportKey:function(a){this.options.excludeTouchSupport||a.addPreprocessedComponent({key:"touch_support",value:this.getTouchSupport()});return a},hardwareConcurrencyKey:function(a){this.options.excludeHardwareConcurrency||a.addPreprocessedComponent({key:"hardware_concurrency",value:this.getHardwareConcurrency()});return a},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(a){return!0}},hasLocalStorage:function(){try{return!!window.localStorage}catch(a){return!0}},hasIndexedDB:function(){try{return!!window.indexedDB}catch(a){return!0}},getHardwareConcurrency:function(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"unknown"},getNavigatorCpuClass:function(){return navigator.cpuClass?navigator.cpuClass:"unknown"},getNavigatorPlatform:function(){return navigator.platform?navigator.platform:"unknown"},getDoNotTrack:function(){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:"unknown"},getTouchSupport:function(){var a=0,c=!1;"undefined"!==typeof navigator.maxTouchPoints?a=navigator.maxTouchPoints:"undefined"!==typeof navigator.msMaxTouchPoints&&(a=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),c=!0}catch(b){}
return[a,c,"ontouchstart" in window]},getCanvasFp:function(){var a=[],c=document.createElement("canvas");c.width=2000;c.height=200;c.style.display="inline";var b=c.getContext("2d");b.rect(0,0,10,10);b.rect(2,2,6,6);a.push("canvas winding:"+(!1===b.isPointInPath(5,5,"evenodd")?"yes":"no"));b.textBaseline="alphabetic";b.fillStyle="#f60";b.fillRect(125,1,62,20);b.fillStyle="#069";b.font=this.options.dontUseFakeFontInCanvas?"11pt Arial":"11pt no-real-font-123";b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",2,15);b.fillStyle="rgba(102, 204, 0, 0.2)";b.font="18pt Arial";b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",4,45);b.globalCompositeOperation="multiply";b.fillStyle="rgb(255,0,255)";b.beginPath();b.arc(50,50,50,0,2*Math.PI,!0);b.closePath();b.fill();b.fillStyle="rgb(0,255,255)";b.beginPath();b.arc(100,50,50,0,2*Math.PI,!0);b.closePath();b.fill();b.fillStyle="rgb(255,255,0)";b.beginPath();b.arc(75,100,50,0,2*Math.PI,!0);b.closePath();b.fill();b.fillStyle="rgb(255,0,255)";b.arc(75,75,75,0,2*Math.PI,!0);b.arc(75,75,25,0,2*Math.PI,!0);b.fill("evenodd");c.toDataURL&&a.push("canvas fp:"+c.toDataURL());return a.join("~")},getWebglFp:function(){var a=function(a){c.clearColor(0.0,0.0,0.0,1.0);c.enable(c.DEPTH_TEST);c.depthFunc(c.LEQUAL);c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT);return"["+a[0]+", "+a[1]+"]"};var c=this.getWebglCanvas();if(!c){return null}
var b=[],h=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,h);var d=new Float32Array([-0.2,-0.9,0,0.4,-0.26,0,0,0.732134444,0]);c.bufferData(c.ARRAY_BUFFER,d,c.STATIC_DRAW);h.itemSize=3;h.numItems=3;d=c.createProgram();var f=c.createShader(c.VERTEX_SHADER);c.shaderSource(f,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");c.compileShader(f);var e=c.createShader(c.FRAGMENT_SHADER);c.shaderSource(e,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");c.compileShader(e);c.attachShader(d,f);c.attachShader(d,e);c.linkProgram(d);c.useProgram(d);d.vertexPosAttrib=c.getAttribLocation(d,"attrVertex");d.offsetUniform=c.getUniformLocation(d,"uniformOffset");c.enableVertexAttribArray(d.vertexPosArray);c.vertexAttribPointer(d.vertexPosAttrib,h.itemSize,c.FLOAT,!1,0,0);c.uniform2f(d.offsetUniform,1,1);c.drawArrays(c.TRIANGLE_STRIP,0,h.numItems);try{b.push(c.canvas.toDataURL())}catch(n){}
b.push("extensions:"+(c.getSupportedExtensions()||[]).join(";"));b.push("webgl aliased line width range:"+a(c.getParameter(c.ALIASED_LINE_WIDTH_RANGE)));b.push("webgl aliased point size range:"+a(c.getParameter(c.ALIASED_POINT_SIZE_RANGE)));b.push("webgl alpha bits:"+c.getParameter(c.ALPHA_BITS));b.push("webgl antialiasing:"+(c.getContextAttributes().antialias?"yes":"no"));b.push("webgl blue bits:"+c.getParameter(c.BLUE_BITS));b.push("webgl depth bits:"+c.getParameter(c.DEPTH_BITS));b.push("webgl green bits:"+c.getParameter(c.GREEN_BITS));b.push("webgl max anisotropy:"+function(a){var b=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic");return b?(a=a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT),0===a&&(a=2),a):null}(c));b.push("webgl max combined texture image units:"+c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS));b.push("webgl max cube map texture size:"+c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE));b.push("webgl max fragment uniform vectors:"+c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS));b.push("webgl max render buffer size:"+c.getParameter(c.MAX_RENDERBUFFER_SIZE));b.push("webgl max texture image units:"+c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS));b.push("webgl max texture size:"+c.getParameter(c.MAX_TEXTURE_SIZE));b.push("webgl max varying vectors:"+c.getParameter(c.MAX_VARYING_VECTORS));b.push("webgl max vertex attribs:"+c.getParameter(c.MAX_VERTEX_ATTRIBS));b.push("webgl max vertex texture image units:"+c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS));b.push("webgl max vertex uniform vectors:"+c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS));b.push("webgl max viewport dims:"+a(c.getParameter(c.MAX_VIEWPORT_DIMS)));b.push("webgl red bits:"+c.getParameter(c.RED_BITS));b.push("webgl renderer:"+c.getParameter(c.RENDERER));b.push("webgl shading language version:"+c.getParameter(c.SHADING_LANGUAGE_VERSION));b.push("webgl stencil bits:"+c.getParameter(c.STENCIL_BITS));b.push("webgl vendor:"+c.getParameter(c.VENDOR));b.push("webgl version:"+c.getParameter(c.VERSION));try{var g=c.getExtension("WEBGL_debug_renderer_info");g&&(b.push("webgl unmasked vendor:"+c.getParameter(g.UNMASKED_VENDOR_WEBGL)),b.push("webgl unmasked renderer:"+c.getParameter(g.UNMASKED_RENDERER_WEBGL)))}catch(n){}
if(!c.getShaderPrecisionFormat){return b.join("~")}
var l=this;l.each(["FLOAT","INT"],function(a){l.each(["VERTEX","FRAGMENT"],function(d){l.each(["HIGH","MEDIUM","LOW"],function(e){l.each(["precision","rangeMin","rangeMax"],function(f){var g=c.getShaderPrecisionFormat(c[d+"_SHADER"],c[e+"_"+a])[f];"precision"!==f&&(f="precision "+f);f=["webgl ",d.toLowerCase()," shader ",e.toLowerCase()," ",a.toLowerCase()," ",f,":",g];b.push(f.join(""))})})})});return b.join("~")},getWebglVendorAndRenderer:function(){try{var a=this.getWebglCanvas(),c=a.getExtension("WEBGL_debug_renderer_info");return a.getParameter(c.UNMASKED_VENDOR_WEBGL)+"~"+a.getParameter(c.UNMASKED_RENDERER_WEBGL)}catch(b){return null}},getAdBlock:function(){var a=document.createElement("div");a.innerHTML="&nbsp;";a.className="adsbox";var c=!1;try{document.body.appendChild(a),c=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(a)}catch(b){c=!1}
return c},getHasLiedLanguages:function(){if("undefined"!==typeof navigator.languages){try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2)){return!0}}catch(a){return!0}}
return!1},getHasLiedResolution:function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight?!0:!1},getHasLiedOs:function(){var a=navigator.userAgent.toLowerCase(),c=navigator.oscpu,b=navigator.platform.toLowerCase();a=0<=a.indexOf("windows phone")?"Windows Phone":0<=a.indexOf("win")?"Windows":0<=a.indexOf("android")?"Android":0<=a.indexOf("linux")?"Linux":0<=a.indexOf("iphone")||0<=a.indexOf("ipad")?"iOS":0<=a.indexOf("mac")?"Mac":"Other";return("ontouchstart" in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&"Windows Phone"!==a&&"Android"!==a&&"iOS"!==a&&"Other"!==a||"undefined"!==typeof c&&(c=c.toLowerCase(),0<=c.indexOf("win")&&"Windows"!==a&&"Windows Phone"!==a||0<=c.indexOf("linux")&&"Linux"!==a&&"Android"!==a||0<=c.indexOf("mac")&&"Mac"!==a&&"iOS"!==a||(-1===c.indexOf("win")&&-1===c.indexOf("linux")&&-1===c.indexOf("mac"))!==("Other"===a))?!0:0<=b.indexOf("win")&&"Windows"!==a&&"Windows Phone"!==a||(0<=b.indexOf("linux")||0<=b.indexOf("android")||0<=b.indexOf("pike"))&&"Linux"!==a&&"Android"!==a||(0<=b.indexOf("mac")||0<=b.indexOf("ipad")||0<=b.indexOf("ipod")||0<=b.indexOf("iphone"))&&"Mac"!==a&&"iOS"!==a||(-1===b.indexOf("win")&&-1===b.indexOf("linux")&&-1===b.indexOf("mac"))!==("Other"===a)?!0:"undefined"===typeof navigator.plugins&&"Windows"!==a&&"Windows Phone"!==a?!0:!1},getHasLiedBrowser:function(){var a=navigator.userAgent.toLowerCase(),c=navigator.productSub;a=0<=a.indexOf("firefox")?"Firefox":0<=a.indexOf("opera")||0<=a.indexOf("opr")?"Opera":0<=a.indexOf("chrome")?"Chrome":0<=a.indexOf("safari")?"Safari":0<=a.indexOf("trident")?"Internet Explorer":"Other";if(("Chrome"===a||"Safari"===a||"Opera"===a)&&"20030107"!==c){return!0}
c=eval.toString().length;if(37===c&&"Safari"!==a&&"Firefox"!==a&&"Other"!==a||39===c&&"Internet Explorer"!==a&&"Other"!==a||33===c&&"Chrome"!==a&&"Opera"!==a&&"Other"!==a){return!0}
try{throw "a"}catch(h){try{h.toSource();var b=!0}catch(d){b=!1}}
return b&&"Firefox"!==a&&"Other"!==a?!0:!1},isCanvasSupported:function(){var a=document.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},isWebGlSupported:function(){if(!this.isCanvasSupported()){return!1}
var a=this.getWebglCanvas();return!!window.WebGLRenderingContext&&!!a},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName||"Netscape"===navigator.appName&&/Trident/.test(navigator.userAgent)?!0:!1},hasSwfObjectLoaded:function(){return"undefined"!==typeof window.swfobject},hasMinFlashInstalled:function(){return window.swfobject.hasFlashPlayerVersion("9.0.0")},addFlashDivNode:function(){var a=document.createElement("div");a.setAttribute("id",this.options.swfContainerId);document.body.appendChild(a)},loadSwfAndDetectFonts:function(a){window.___fp_swf_loaded=function(b){a(b)};var c=this.options.swfContainerId;this.addFlashDivNode();window.swfobject.embedSWF(this.options.swfPath,c,"1","1","9.0.0",!1,{onReady:"___fp_swf_loaded"},{allowScriptAccess:"always",menu:"false"},{})},getWebglCanvas:function(){var a=document.createElement("canvas"),c=null;try{c=a.getContext("webgl")||a.getContext("experimental-webgl")}catch(b){}
c||(c=null);return c},each:function(a,c,b){if(null!==a){if(this.nativeForEach&&a.forEach===this.nativeForEach){a.forEach(c,b)}else{if(a.length===+a.length){for(var h=0,d=a.length;h<d&&c.call(b,a[h],h,a)!=={};h++){}}else{for(h in a){if(a.hasOwnProperty(h)&&c.call(b,a[h],h,a)==={}){break}}}}}},map:function(a,c,b){var h=[];if(null==a){return h}
if(this.nativeMap&&a.map===this.nativeMap){return a.map(c,b)}
this.each(a,function(a,f,e){h[h.length]=c.call(b,a,f,e)});return h},x64Add:function(a,c){a=[a[0]>>>16,a[0]&65535,a[1]>>>16,a[1]&65535];c=[c[0]>>>16,c[0]&65535,c[1]>>>16,c[1]&65535];var b=[0,0,0,0];b[3]+=a[3]+c[3];b[2]+=b[3]>>>16;b[3]&=65535;b[2]+=a[2]+c[2];b[1]+=b[2]>>>16;b[2]&=65535;b[1]+=a[1]+c[1];b[0]+=b[1]>>>16;b[1]&=65535;b[0]+=a[0]+c[0];b[0]&=65535;return[b[0]<<16|b[1],b[2]<<16|b[3]]},x64Multiply:function(a,c){a=[a[0]>>>16,a[0]&65535,a[1]>>>16,a[1]&65535];c=[c[0]>>>16,c[0]&65535,c[1]>>>16,c[1]&65535];var b=[0,0,0,0];b[3]+=a[3]*c[3];b[2]+=b[3]>>>16;b[3]&=65535;b[2]+=a[2]*c[3];b[1]+=b[2]>>>16;b[2]&=65535;b[2]+=a[3]*c[2];b[1]+=b[2]>>>16;b[2]&=65535;b[1]+=a[1]*c[3];b[0]+=b[1]>>>16;b[1]&=65535;b[1]+=a[2]*c[2];b[0]+=b[1]>>>16;b[1]&=65535;b[1]+=a[3]*c[1];b[0]+=b[1]>>>16;b[1]&=65535;b[0]+=a[0]*c[3]+a[1]*c[2]+a[2]*c[1]+a[3]*c[0];b[0]&=65535;return[b[0]<<16|b[1],b[2]<<16|b[3]]},x64Rotl:function(a,c){c%=64;if(32===c){return[a[1],a[0]]}
if(32>c){return[a[0]<<c|a[1]>>>32-c,a[1]<<c|a[0]>>>32-c]}
c-=32;return[a[1]<<c|a[0]>>>32-c,a[0]<<c|a[1]>>>32-c]},x64LeftShift:function(a,c){c%=64;return 0===c?a:32>c?[a[0]<<c|a[1]>>>32-c,a[1]<<c]:[a[1]<<c-32,0]},x64Xor:function(a,c){return[a[0]^c[0],a[1]^c[1]]},x64Fmix:function(a){a=this.x64Xor(a,[0,a[0]>>>1]);a=this.x64Multiply(a,[4283543511,3981806797]);a=this.x64Xor(a,[0,a[0]>>>1]);a=this.x64Multiply(a,[3301882366,444984403]);return a=this.x64Xor(a,[0,a[0]>>>1])},x64hash128:function(a,c){a=a||"";c=c||0;for(var b=a.length%16,h=a.length-b,d=[0,c],f=[0,c],e,g,l=[2277735313,289559509],n=[1291169091,658871167],k=0;k<h;k+=16){e=[a.charCodeAt(k+4)&255|(a.charCodeAt(k+5)&255)<<8|(a.charCodeAt(k+6)&255)<<16|(a.charCodeAt(k+7)&255)<<24,a.charCodeAt(k)&255|(a.charCodeAt(k+1)&255)<<8|(a.charCodeAt(k+2)&255)<<16|(a.charCodeAt(k+3)&255)<<24],g=[a.charCodeAt(k+12)&255|(a.charCodeAt(k+13)&255)<<8|(a.charCodeAt(k+14)&255)<<16|(a.charCodeAt(k+15)&255)<<24,a.charCodeAt(k+8)&255|(a.charCodeAt(k+9)&255)<<8|(a.charCodeAt(k+10)&255)<<16|(a.charCodeAt(k+11)&255)<<24],e=this.x64Multiply(e,l),e=this.x64Rotl(e,31),e=this.x64Multiply(e,n),d=this.x64Xor(d,e),d=this.x64Rotl(d,27),d=this.x64Add(d,f),d=this.x64Add(this.x64Multiply(d,[0,5]),[0,1390208809]),g=this.x64Multiply(g,n),g=this.x64Rotl(g,33),g=this.x64Multiply(g,l),f=this.x64Xor(f,g),f=this.x64Rotl(f,31),f=this.x64Add(f,d),f=this.x64Add(this.x64Multiply(f,[0,5]),[0,944331445])}
e=[0,0];g=[0,0];switch(b){case 15:g=this.x64Xor(g,this.x64LeftShift([0,a.charCodeAt(k+14)],48));case 14:g=this.x64Xor(g,this.x64LeftShift([0,a.charCodeAt(k+13)],40));case 13:g=this.x64Xor(g,this.x64LeftShift([0,a.charCodeAt(k+12)],32));case 12:g=this.x64Xor(g,this.x64LeftShift([0,a.charCodeAt(k+11)],24));case 11:g=this.x64Xor(g,this.x64LeftShift([0,a.charCodeAt(k+10)],16));case 10:g=this.x64Xor(g,this.x64LeftShift([0,a.charCodeAt(k+9)],8));case 9:g=this.x64Xor(g,[0,a.charCodeAt(k+8)]),g=this.x64Multiply(g,n),g=this.x64Rotl(g,33),g=this.x64Multiply(g,l),f=this.x64Xor(f,g);case 8:e=this.x64Xor(e,this.x64LeftShift([0,a.charCodeAt(k+7)],56));case 7:e=this.x64Xor(e,this.x64LeftShift([0,a.charCodeAt(k+6)],48));case 6:e=this.x64Xor(e,this.x64LeftShift([0,a.charCodeAt(k+5)],40));case 5:e=this.x64Xor(e,this.x64LeftShift([0,a.charCodeAt(k+4)],32));case 4:e=this.x64Xor(e,this.x64LeftShift([0,a.charCodeAt(k+3)],24));case 3:e=this.x64Xor(e,this.x64LeftShift([0,a.charCodeAt(k+2)],16));case 2:e=this.x64Xor(e,this.x64LeftShift([0,a.charCodeAt(k+1)],8));case 1:e=this.x64Xor(e,[0,a.charCodeAt(k)]),e=this.x64Multiply(e,l),e=this.x64Rotl(e,31),e=this.x64Multiply(e,n),d=this.x64Xor(d,e)}
d=this.x64Xor(d,[0,a.length]);f=this.x64Xor(f,[0,a.length]);d=this.x64Add(d,f);f=this.x64Add(f,d);d=this.x64Fmix(d);f=this.x64Fmix(f);d=this.x64Add(d,f);f=this.x64Add(f,d);return("00000000"+(d[0]>>>0).toString(16)).slice(-8)+("00000000"+(d[1]>>>0).toString(16)).slice(-8)+("00000000"+(f[0]>>>0).toString(16)).slice(-8)+("00000000"+(f[1]>>>0).toString(16)).slice(-8)}};p.VERSION="1.8.0";return p})
