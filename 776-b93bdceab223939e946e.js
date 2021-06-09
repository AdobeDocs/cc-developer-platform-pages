(self.webpackChunkcc_developer_platform_pages=self.webpackChunkcc_developer_platform_pages||[]).push([[776],{3776:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return I}});var t,r,i,c,a,s=o(5007),u=o(5444),l=o(4922);!function(e){e.Call="call",e.Reply="reply",e.Syn="syn",e.SynAck="synAck",e.Ack="ack"}(t||(t={})),function(e){e.Fulfilled="fulfilled",e.Rejected="rejected"}(r||(r={})),function(e){e.ConnectionDestroyed="ConnectionDestroyed",e.ConnectionTimeout="ConnectionTimeout",e.NotInIframe="NotInIframe",e.NoIframeSrc="NoIframeSrc"}(i||(i={})),function(e){e.DataCloneError="DataCloneError"}(c||(c={})),function(e){e.Message="message"}(a||(a={}));var d={"http:":"80","https:":"443"},f=/^(https?:)?\/\/([^/:]+)?(:(\d+))?/,g=["file:","data:"],m=function(e){return{name:e.name,message:e.message,stack:e.stack}},v=function(e){var n=new Error;return Object.keys(e).forEach((function(o){return n[o]=e[o]})),n},h=0,p=function(){return++h},y=function(e,n,o,c,s){var u=n.localName,l=n.local,d=n.remote,f=n.originForSending,g=n.originForReceiving,m=!1;s("".concat(u,": Connecting call sender"));return o.reduce((function(e,n){return e[n]=function(e){return function(){for(var n=arguments.length,o=new Array(n),h=0;h<n;h++)o[h]=arguments[h];var y;s("".concat(u,": Sending ").concat(e,"() call"));try{d.closed&&(y=!0)}catch(E){y=!0}if(y&&c(),m){var w=new Error("Unable to send ".concat(e,"() call due ")+"to destroyed connection");throw w.code=i.ConnectionDestroyed,w}return new Promise((function(n,i){var c=p();l.addEventListener(a.Message,(function o(f){if(f.source===d&&f.data.penpal===t.Reply&&f.data.id===c)if(f.origin===g){var m=f.data;s("".concat(u,": Received ").concat(e,"() reply")),l.removeEventListener(a.Message,o);var h=m.returnValue;m.returnValueIsError&&(h=v(h)),(m.resolution===r.Fulfilled?n:i)(h)}else s("".concat(u," received message from origin ").concat(f.origin," which did not match expected origin ").concat(g))}));var m={penpal:t.Call,id:c,methodName:e,args:o};d.postMessage(m,f)}))}}(n),e}),e),function(){m=!0}},w=function(e,n,o,i,s){var u,l,d=i.destroy,f=i.onDestroy,g={};return function(i){if(i.origin===n){s("Parent: Handshake - Received ACK");var v={localName:"Parent",local:window,remote:i.source,originForSending:o,originForReceiving:n};u&&u(),u=function(e,n,o){var i=e.localName,s=e.local,u=e.remote,l=e.originForSending,d=e.originForReceiving,f=!1,g=function(e){if(e.source===u&&e.data.penpal===t.Call)if(e.origin===d){var a=e.data,s=a.methodName,g=a.args,v=a.id;o("".concat(i,": Received ").concat(s,"() call"));var h=function(e){return function(n){if(o("".concat(i,": Sending ").concat(s,"() reply")),f)o("".concat(i,": Unable to send ").concat(s,"() reply due to destroyed connection"));else{var a={penpal:t.Reply,id:v,resolution:e,returnValue:n};e===r.Rejected&&n instanceof Error&&(a.returnValue=m(n),a.returnValueIsError=!0);try{u.postMessage(a,l)}catch(g){if(g.name===c.DataCloneError){var d={penpal:t.Reply,id:v,resolution:r.Rejected,returnValue:m(g),returnValueIsError:!0};u.postMessage(d,l)}throw g}}}};new Promise((function(e){return e(n[s].apply(n,g))})).then(h(r.Fulfilled),h(r.Rejected))}else o("".concat(i," received message from origin ").concat(e.origin," which did not match expected origin ").concat(d))};return s.addEventListener(a.Message,g),function(){f=!0,s.removeEventListener(a.Message,g)}}(v,e,s),f(u),l&&l.forEach((function(e){delete g[e]})),l=i.data.methodNames;var h=y(g,v,l,d,s);return f(h),g}s("Parent: Handshake - Received ACK message from origin ".concat(i.origin," which did not match expected origin ").concat(n))}},E=function(e){var n,o,r=e.iframe,c=e.methods,s=void 0===c?{}:c,u=e.childOrigin,l=e.timeout,m=e.debug,v=function(e){return function(){if(e){for(var n,o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];(n=console).log.apply(n,["[Penpal]"].concat(t))}}}(void 0!==m&&m),h=(n=[],o=!1,{destroy:function(e){o=!0,n.forEach((function(n){n(e)}))},onDestroy:function(e){o?e():n.push(e)}}),p=h.onDestroy,y=h.destroy;u||(!function(e){if(!e.src&&!e.srcdoc){var n=new Error("Iframe must have src or srcdoc property defined.");throw n.code=i.NoIframeSrc,n}}(r),u=function(e){if(e&&g.find((function(n){return e.startsWith(n)})))return"null";var n,o,t,r=document.location,i=f.exec(e);i?(n=i[1]?i[1]:r.protocol,o=i[2],t=i[4]):(n=r.protocol,o=r.hostname,t=r.port);var c=t&&t!==d[n]?":".concat(t):"";return"".concat(n,"//").concat(o).concat(c)}(r.src));var E="null"===u?"*":u,S=function(e,n,o,r){return function(i){if(i.origin===o){e("Parent: Handshake - Received SYN, responding with SYN-ACK");var c={penpal:t.SynAck,methodNames:Object.keys(n)};i.source.postMessage(c,r)}else e("Parent: Handshake - Received SYN message from origin ".concat(i.origin," which did not match expected origin ").concat(o))}}(v,s,u,E),C=w(s,u,E,h,v);return{promise:new Promise((function(e,n){var o=function(e,n){var o;return void 0!==e&&(o=window.setTimeout((function(){var o=new Error("Connection timed out after ".concat(e,"ms"));o.code=i.ConnectionTimeout,n(o)}),e)),function(){clearTimeout(o)}}(l,y),c=function(n){if(n.source===r.contentWindow&&n.data)if(n.data.penpal!==t.Syn)if(n.data.penpal!==t.Ack);else{var i=C(n);i&&(o(),e(i))}else S(n)};window.addEventListener(a.Message,c),v("Parent: Awaiting handshake"),function(e,n){var o=n.destroy,t=n.onDestroy,r=setInterval((function(){e.isConnected||(clearInterval(r),o())}),6e4);t((function(){clearInterval(r)}))}(r,h),p((function(e){window.removeEventListener(a.Message,c),e||((e=new Error("Connection destroyed")).code=i.ConnectionDestroyed),n(e)}))})),destroy:function(){y()}}},S=o(8094),C=o(7791),k=o(2390),I=function(e){var n=e.src,o=e.height,t=void 0===o?"calc(100vh - var(--spectrum-global-dimension-size-800))":o,r=e.location,i=(0,s.useRef)(null),c=(0,s.useContext)(C.Z).ims,a=(0,s.useState)(null),d=a[0],f=a[1];return(0,s.useEffect)((function(){d&&(0===i.current.clientHeight?d.onHide():d.onShow())}),[r.pathname]),(0,l.tZ)(s.default.Fragment,null,(0,l.tZ)("iframe",{ref:i,src:(0,k.Bm)(n)?n:(0,u.dq)(n),onLoad:function(){E({iframe:i.current,methods:{scrollTop:function(e){var n;void 0===e&&(e=0),null!==(n=document)&&void 0!==n&&n.scrollingElement&&(document.scrollingElement.scrollTop=e)},getURL:function(){var e,n;return null===(e=window)||void 0===e||null===(n=e.location)||void 0===n?void 0:n.href},setHeight:function(e){i.current.style.height=e},getIMSAccessToken:function(){return null!=c&&c.isSignedInUser()?c.getAccessToken():null},getIMSProfile:function(){return null!=c&&c.isSignedInUser()?c.getProfile():null},signIn:function(){c&&!c.isSignedInUser()&&c.signIn()},signOut:function(){c&&c.isSignedInUser()&&c.signOut()}}}).promise.then((function(e){0===i.current.clientHeight?e.onHide():e.onShow(),f(e)}))},css:(0,l.iv)("display:block;height:",t,";width:100%;border:none;","")}),(0,l.tZ)(S.$,null))}}}]);
//# sourceMappingURL=776-b93bdceab223939e946e.js.map