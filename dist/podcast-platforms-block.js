(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.i18n,n=window.wp.blocks,r=window.React,a=window.wp.blockEditor,c=window.wp.element,i=window.wp.apiFetch;var s=e.n(i);function l(e,t){return e===t}function o(e){return"function"==typeof e?function(){return e}:e}const u=window.wp.components;(0,n.registerBlockType)("podcasting/podcast-platforms",{title:(0,t.__)("Podcast Platforms","simple-podcasting"),description:(0,t.__)("Displays the list of platforms where the selected show is available.","simple-podcasting"),category:"common",icon:"microphone",supports:{multiple:!1},attributes:{showId:{type:"number",default:0},iconSize:{type:"number",default:48},align:{type:"string",default:"center"}},edit:function(e){const{setAttributes:n,isSelected:i,attributes:{showId:p,iconSize:m,align:d}}=e,[f,g]=(0,c.useState)(""),[_]=(C=f,N=l,R=(0,r.useState)(o(C)),I=R[1],x=[R[0],(0,r.useCallback)((function(e){return I(o(e))}),[])],B=x[0],$=x[1],z=function(e,t,n){var a=this,c=(0,r.useRef)(null),i=(0,r.useRef)(0),s=(0,r.useRef)(null),l=(0,r.useRef)([]),o=(0,r.useRef)(),u=(0,r.useRef)(),p=(0,r.useRef)(e),m=(0,r.useRef)(!0);(0,r.useEffect)((function(){p.current=e}),[e]);var d=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var f=!!(n=n||{}).leading,g=!("trailing"in n)||!!n.trailing,_="maxWait"in n,h=_?Math.max(+n.maxWait||0,t):null;(0,r.useEffect)((function(){return m.current=!0,function(){m.current=!1}}),[]);var w=(0,r.useMemo)((function(){var e=function(e){var t=l.current,n=o.current;return l.current=o.current=null,i.current=e,u.current=p.current.apply(n,t)},n=function(e,t){d&&cancelAnimationFrame(s.current),s.current=d?requestAnimationFrame(e):setTimeout(e,t)},r=function(e){if(!m.current)return!1;var n=e-c.current;return!c.current||n>=t||n<0||_&&e-i.current>=h},w=function(t){return s.current=null,g&&l.current?e(t):(l.current=o.current=null,u.current)},E=function e(){var a=Date.now();if(r(a))return w(a);if(m.current){var s=t-(a-c.current),l=_?Math.min(s,h-(a-i.current)):s;n(e,l)}},v=function(){var p=Date.now(),d=r(p);if(l.current=[].slice.call(arguments),o.current=a,c.current=p,d){if(!s.current&&m.current)return i.current=c.current,n(E,t),f?e(c.current):u.current;if(_)return n(E,t),e(c.current)}return s.current||n(E,t),u.current};return v.cancel=function(){s.current&&(d?cancelAnimationFrame(s.current):clearTimeout(s.current)),i.current=0,l.current=c.current=o.current=s.current=null},v.isPending=function(){return!!s.current},v.flush=function(){return s.current?w(Date.now()):u.current},v}),[f,_,t,h,g,d]);return w}((0,r.useCallback)((function(e){return $(e)}),[$]),300,k),A=(0,r.useRef)(C),N(A.current,C)||(z(C),A.current=C),[B,z]),[h,w]=(0,c.useState)(!1),[E,v]=(0,c.useState)([]),[y,b]=(0,c.useState)("color"),[S,P]=(0,c.useState)([]);var C,k,R,I,N,x,B,$,z,A;(0,c.useEffect)((()=>{(async()=>{if(w(!1),!f.length)return void v([]);const e=new URLSearchParams({search:f,type:"term",subtype:"podcasting_podcasts"}).toString(),t=await s()({path:`/wp/v2/search?${e}`});t.length||w(!0),v(t),w(!0)})()}),[_]),(0,c.useEffect)((()=>{p&&(async()=>{const e=await s()({url:`${ajaxurl}?show_id=${p}&action=get_podcast_platforms`});if(!e.success)return void P([]);const{data:{platforms:t,theme:n}}=e;P(t),b(n)})()}),[p]);const F=(0,a.useBlockProps)({className:i?"simple-podcasting__podcast-platforms simple-podcasting__podcast-platforms--selected":"simple-podcasting__podcast-platforms"}),j=Object.keys(S);return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(a.InspectorControls,null,(0,r.createElement)(u.Panel,{header:(0,t.__)("Customization Controls","simple-podacsting")},(0,r.createElement)(u.PanelBody,null,(0,r.createElement)(u.BaseControl,{label:(0,t.__)("Icon size","simple-podcasting")}),(0,r.createElement)(u.PanelRow,null,(0,r.createElement)(u.RangeControl,{min:16,max:96,step:16,value:m,onChange:e=>{n({iconSize:e})}})),(0,r.createElement)(u.BaseControl,{label:(0,t.__)("Alignment","simple-podcasting")}),(0,r.createElement)(u.PanelRow,null,(0,r.createElement)(u.ButtonGroup,null,(0,r.createElement)(u.Button,{isPressed:"left"===d,variant:"ternary",icon:(0,r.createElement)(u.Icon,{icon:"align-left"}),onClick:()=>n({align:"left"})}),(0,r.createElement)(u.Button,{isPressed:"center"===d,variant:"ternary",icon:(0,r.createElement)(u.Icon,{icon:"align-center"}),onClick:()=>n({align:"center"})}),(0,r.createElement)(u.Button,{isPressed:"right"===d,variant:"ternary",icon:(0,r.createElement)(u.Icon,{icon:"align-right"}),onClick:()=>n({align:"right"})})))))),(0,r.createElement)("div",{...F},j.length?(0,r.createElement)("div",{className:`simple-podcasting__podcasting-platform-list simple-podcasting__podcasting-platform-list--${d}`},j.map(((e,t)=>(0,r.createElement)("span",{key:t,className:"simple-podcasting__podcasting-platform-list-item"},(0,r.createElement)("a",{href:S[e],target:"_blank"},(0,r.createElement)("img",{className:`simple-pocasting__icon-size--${m}`,src:`${podcastingPlatformVars.podcastingUrl}dist/images/icons/${e}/${y}-100.png`})))))):(0,r.createElement)("div",{className:"simple-podcasting__podcasting-platform-list"},(0,r.createElement)("p",null,(0,t.__)("No platforms are set for this podcast.","simple-podcasting"))),i||!p?(0,r.createElement)("div",{className:"simple-podcasting__podcasting-search-controls"},(0,r.createElement)(u.SearchControl,{placeholder:(0,t.__)("Search a Podcast Show","simple-podcasting"),onChange:e=>g(e),value:f}),E.length?(0,r.createElement)("div",{className:"simple-podcasting__podcasting-search-results"},(0,r.createElement)(u.__experimentalItemGroup,{isSeparated:!0},E.map((e=>(0,r.createElement)(u.__experimentalItem,{key:e.id,className:"simple-podcasting__podcast-search-results",onClick:()=>{return t=e.id,n({showId:t}),v([]),void w(!1);var t}},e.title))))):!E.length&&h?(0,r.createElement)("div",{className:"simple-podcasting__podcasting-search-results"},(0,r.createElement)(u.__experimentalItemGroup,{isSeparated:!0},(0,r.createElement)(u.__experimentalItem,null,(0,t.__)("No results found.","simple-podcasting")))):null):null))},save:()=>null})})();