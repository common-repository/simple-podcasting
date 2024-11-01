(()=>{"use strict";const e=window.React,t=window.wp.i18n,a=window.wp.blocks,o=window.wp.components,s=window.wp.data,n=window.lodash,r=window.wp.element,i=window.wp.compose,l=window.wp.coreData,c=window.wp.a11y,d={per_page:-1,orderby:"name",order:"asc",_fields:"id,name,parent",context:"view"},p=[],m=(0,o.withFilters)("editor.PostTaxonomyType")((function({slug:a}){const[m,u]=(0,r.useState)(!1),[g,h]=(0,r.useState)(""),[_,b]=(0,r.useState)(""),[f,y]=(0,r.useState)(!1),[E,w]=(0,r.useState)(""),[v,C]=(0,r.useState)([]),x=(0,i.useDebounce)(c.speak,500),{hasCreateAction:k,hasAssignAction:T,terms:N,loading:S,availableTerms:I,taxonomy:A}=(0,s.useSelect)((e=>{const{getCurrentPost:t,getEditedPostAttribute:o}=e("core/editor"),{getTaxonomy:s,getEntityRecords:r,isResolving:i}=e(l.store),c=s(a);return{hasCreateAction:!!c&&(0,n.get)(t(),["_links","wp:action-create-"+c.rest_base],!1),hasAssignAction:!!c&&(0,n.get)(t(),["_links","wp:action-assign-"+c.rest_base],!1),terms:c?o(c.rest_base):p,loading:i("getEntityRecords",["taxonomy",a,d]),availableTerms:r("taxonomy",a,d)||p,taxonomy:c}}),[a]),{editPost:B}=(0,s.useDispatch)("core/editor"),{saveEntityRecord:P}=(0,s.useDispatch)(l.store),L=(0,r.useMemo)((()=>function(e,t){const a=e=>-1!==t.indexOf(e.id)||void 0!==e.children&&e.children.map(a).filter((e=>e)).length>0,o=[...e];return o.sort(((e,t)=>{const o=a(e),s=a(t);return o===s?0:o&&!s?-1:!o&&s?1:0})),o}(function(e){const t=e.map((e=>({children:[],parent:null,...e}))),a=(0,n.groupBy)(t,"parent");if(a.null&&a.null.length)return t;const o=e=>e.map((e=>{const t=a[e.id];return{...e,children:t&&t.length?o(t):[]}}));return o(a[0]||[])}(I),N)),[I]);if(!T)return null;const R=e=>{B({[A.rest_base]:e})},F=t=>t.map((t=>(0,e.createElement)("div",{key:t.id,className:"editor-post-taxonomies__hierarchical-terms-choice"},(0,e.createElement)(o.CheckboxControl,{checked:-1!==N.indexOf(t.id),onChange:()=>{(e=>{const t=N.includes(e)?(0,n.without)(N,e):[...N,e];R(t)})(parseInt(t.id,10))},label:(0,n.unescape)(t.name)}),!!t.children.length&&(0,e.createElement)("div",{className:"editor-post-taxonomies__hierarchical-terms-subchoices"},F(t.children))))),M=(e,t,o)=>(0,n.get)(A,["labels",e],"category"===a?t:o),z=M("add_new_item",(0,t.__)("Add new category"),(0,t.__)("Add new term")),D=M("new_item_name",(0,t.__)("Add new category"),(0,t.__)("Add new term")),U=M("parent_item",(0,t.__)("Parent Category"),(0,t.__)("Parent Term")),q=`— ${U} —`,O=z,$=(0,n.get)(A,["labels","search_items"],(0,t.__)("Search Terms")),W=(0,n.get)(A,["name"],(0,t.__)("Terms")),Q=I.length>=8;return(0,e.createElement)(e.Fragment,null,Q&&(0,e.createElement)(o.TextControl,{className:"editor-post-taxonomies__hierarchical-terms-filter",label:$,value:E,onChange:e=>{const a=L.map(function(e){const t=a=>{if(""===e)return a;const o={...a};return o.children.length>0&&(o.children=o.children.map(t).filter((e=>e))),(-1!==o.name.toLowerCase().indexOf(e.toLowerCase())||o.children.length>0)&&o};return t}(e)).filter((e=>e)),o=e=>{let t=0;for(let a=0;a<e.length;a++)t++,void 0!==e[a].children&&(t+=o(e[a].children));return t};w(e),C(a);const s=o(a),n=(0,t.sprintf)(/* translators: %d: number of results */
(0,t._n)("%d result found.","%d results found.",s),s);x(n,"assertive")}}),(0,e.createElement)("div",{className:"editor-post-taxonomies__hierarchical-terms-list",tabIndex:"0",role:"group","aria-label":W},F(""!==E?v:L)),!S&&k&&(0,e.createElement)(o.Button,{onClick:()=>{y(!f)},className:"editor-post-taxonomies__hierarchical-terms-add","aria-expanded":f,variant:"link"},z),f&&(0,e.createElement)("form",{onSubmit:async e=>{if(e.preventDefault(),""===g||m)return;const o=function(e,t,a){return(0,n.find)(e,(e=>(!e.parent&&!t||parseInt(e.parent)===parseInt(t))&&e.name.toLowerCase()===a.toLowerCase()))}(I,_,g);if(o)return(0,n.some)(N,(e=>e===o.id))||R([...N,o.id]),h(""),void b("");u(!0);const s=await(r={name:g,parent:_||void 0},P("taxonomy",a,r));var r;const i=(0,t.sprintf)(/* translators: %s: taxonomy name */
(0,t._x)("%s added","term"),(0,n.get)(A,["labels","singular_name"],"category"===a?(0,t.__)("Category"):(0,t.__)("Term")));(0,c.speak)(i,"assertive"),u(!1),h(""),b(""),R([...N,s.id])}},(0,e.createElement)(o.TextControl,{className:"editor-post-taxonomies__hierarchical-terms-input",label:D,value:g,onChange:e=>{h(e)},required:!0}),!!I.length&&(0,e.createElement)(o.TreeSelect,{label:U,noOptionLabel:q,onChange:e=>{b(e)},selectedId:_,tree:L}),(0,e.createElement)(o.Button,{variant:"secondary",type:"submit",className:"editor-post-taxonomies__hierarchical-terms-submit"},O)))})),{__}=wp.i18n,{Component:u}=wp.element,{BlockControls:g,InspectorControls:h,MediaPlaceholder:_,MediaReplaceFlow:b,MediaUpload:f,MediaUploadCheck:y,RichText:E}=wp.blockEditor,{FormToggle:w,PanelBody:v,PanelRow:C,SelectControl:x,TextControl:k,RadioControl:T}=wp.components,{Fragment:N}=wp.element,{apiFetch:S}=wp,I=["audio"];class A extends u{constructor({className:e}){super(...arguments),this.state={src:this.props.attributes.src?this.props.attributes.src:null,className:e}}componentWillUnmount(){wp.data.dispatch("core/editor").editPost({podcasting_podcasts:[]})}render(){const{setAttributes:t,isSelected:n,attributes:r,featuredImageUrl:i,setFeaturedImage:l,removeFeaturedImage:c,featuredImageId:d}=this.props,{caption:p,explicit:u}=r,A=r.duration||"",B=r.captioned||"",P=r.seasonNumber||"",L=r.episodeNumber||"",R=r.episodeType||"",{className:F,src:M}=this.state,z=e=>{let a,o,s;e.mime?a=e.mime:e.mime_type&&(a=e.mime_type),e.filesizeInBytes?o=e.filesizeInBytes:e.media_details&&e.media_details.filesize&&(o=e.media_details.filesize),e.fileLength?s=e.fileLength:e.media_details&&e.media_details.length_formatted&&(s=e.media_details.length_formatted),t({id:e.id,src:e.url,url:e.url,mime:a,filesize:o,duration:s,caption:e.title,enclosure:e.url+"\n"+o+"\n"+a}),this.setState({src:e.url})},D=e=>{e!==M&&(S({path:`simple-podcasting/v1/external-url/?url=${e}`}).then((a=>{if(a.success){const{mime:o,filesize:s,duration:n}=a.data;t({src:e,url:e,id:null,mime:o,filesize:s,duration:n,caption:""})}})).catch((e=>{console.error(e)})),this.setState({src:e}))},U=(0,e.createElement)(g,{key:"controls"},M?(0,e.createElement)(b,{mediaURL:r.src,allowedTypes:I,accept:"audio/*",onSelect:z,onSelectURL:D}):null);return(0,e.createElement)(N,null,U,(0,e.createElement)(h,null,(0,e.createElement)(v,{title:__("Podcast Settings","simple-podcasting")},(0,e.createElement)(C,null,(0,e.createElement)("div",{id:"hierar-podcasting_podcasts"},(0,e.createElement)(m,{slug:"podcasting_podcasts"}))),(0,e.createElement)(C,null,(0,e.createElement)("label",{htmlFor:"podcast-captioned-form-toggle"},__("Closed Captioned","simple-podcasting")),(0,e.createElement)(w,{id:"podcast-captioned-form-toggle",label:__("Closed Captioned","simple-podcasting"),checked:B,onChange:()=>t({captioned:!B})})),(0,e.createElement)(C,null,(0,e.createElement)(x,{label:__("Explicit Content","simple-podcasting"),value:u,options:[{value:"no",label:__("No","simple-podcasting")},{value:"yes",label:__("Yes","simple-podcasting")},{value:"clean",label:__("Clean","simple-podcasting")}],onChange:e=>t({explicit:e})})),(0,e.createElement)(C,null,(0,e.createElement)(k,{label:__("Length (MM:SS)","simple-podcasting"),value:A,onChange:e=>t({duration:e})})),(0,e.createElement)(C,null,(0,e.createElement)(k,{label:__("Season Number","simple-podcasting"),value:P,onChange:e=>t({seasonNumber:e})})),(0,e.createElement)(C,null,(0,e.createElement)(k,{label:__("Episode Number","simple-podcasting"),value:L,onChange:e=>t({episodeNumber:e})})),(0,e.createElement)(C,null,(0,e.createElement)(T,{label:__("Episode Type","simple-podcasting"),selected:R,options:[{label:__("None","simple-podcasting"),value:"none"},{label:__("Full","simple-podcasting"),value:"full"},{label:__("Trailer","simple-podcasting"),value:"trailer"},{label:__("Bonus","simple-podcasting"),value:"bonus"}],onChange:e=>t({episodeType:e})})),(0,e.createElement)(C,null,(0,e.createElement)(o.Button,{variant:"secondary",onClick:()=>(0,s.dispatch)("core/block-editor").insertBlocks((0,a.createBlock)("podcasting/podcast-transcript"))},__("Add Transcript","simple-podcasting"))),(0,e.createElement)("h3",{style:{marginTop:"20px"}},__("Cover Image","simple-podcasting")),(0,e.createElement)("p",null,__("The featured image of the current post is used as the episode cover art. Please select a featured image to set it.","simple-podcasting")),(0,e.createElement)(C,{className:"cover-art-container"},i&&(0,e.createElement)("img",{src:i,alt:"Cover Image"}),(0,e.createElement)(y,null,(0,e.createElement)(f,{onSelect:e=>{l(e.id)},allowedTypes:["image"],render:({open:t})=>(0,e.createElement)(o.Button,{isSecondary:!0,onClick:t},__(i?"Replace Cover Art":"Select Cover Art","simple-podcasting")),value:d})),i&&(0,e.createElement)(o.Button,{isLink:!0,isDestructive:!0,onClick:c},__("Delete Cover Art","simple-podcasting"))))),(0,e.createElement)("div",{className:F},M?(0,e.createElement)("figure",{key:"audio",className:F},(0,e.createElement)("audio",{controls:"controls",src:M}),(p&&p.length||!!n)&&(0,e.createElement)(E,{tagName:"figcaption",placeholder:__("Write caption…","simple-podcasting"),value:p,onChange:e=>t({caption:e}),isSelected:n})):(0,e.createElement)(_,{icon:"microphone",labels:{title:__("Podcast","simple-podcasting"),name:__("a podcast episode","simple-podcasting")},className:F,onSelect:z,onSelectURL:D,accept:"audio/*",allowedTypes:I,value:this.props.attributes})))}}const{select:B}=wp.data,{createBlock:P}=wp.blocks,L={from:[{type:"block",blocks:["core/audio"],transform:e=>P("podcasting/podcast",{id:e.id,src:e.src})}],to:[{type:"block",blocks:["core/audio"],isMatch:({id:e})=>{if(!e)return!1;const{getMedia:t}=B("core"),a=t(e);return!!a&&a.mime_type.includes("audio")},transform:e=>P("core/audio",{src:e.src,id:e.id})}]},R=((0,a.registerBlockType)("podcasting/podcast",{title:(0,t.__)("Podcast","simple-podcasting"),description:(0,t.__)("Insert a podcast episode into a post. To add it to a podcast feed, select a podcast in document settings.","simple-podcasting"),category:"common",icon:"microphone",supports:{multiple:!1},attributes:{id:{type:"number"},src:{type:"string",source:"attribute",selector:"audio",attribute:"src"},url:{type:"string",source:"meta",meta:"podcast_url"},filesize:{type:"number",source:"meta",meta:"podcast_filesize"},duration:{type:"string",source:"meta",meta:"podcast_duration"},mime:{type:"string",source:"meta",meta:"podcast_mime"},caption:{type:"array",source:"children",selector:"figcaption"},captioned:{type:"boolean",source:"meta",meta:"podcast_captioned",default:!1},explicit:{type:"string",source:"meta",meta:"podcast_explicit",default:"no"},enclosure:{type:"string",source:"meta",meta:"enclosure"},seasonNumber:{type:"string",source:"meta",meta:"podcast_season_number"},episodeNumber:{type:"string",source:"meta",meta:"podcast_episode_number"},episodeType:{type:"string",source:"meta",meta:"podcast_episode_type"}},transforms:L,edit:function(t){const a=function(){const e=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("featured_media")),[]),{editPost:t}=(0,s.useDispatch)("core/editor");return{featuredImageUrl:(0,s.useSelect)((t=>{const{getMedia:a}=t("core"),o=a(e);return o?.source_url}),[e]),setFeaturedImage:e=>{t({featured_media:e})},removeFeaturedImage:()=>{t({featured_media:0})},featuredImageId:e}}();return(0,e.createElement)(A,{...t,...a})},save:t=>{const{id:a,src:o,caption:s}=t.attributes;return(0,e.createElement)("figure",{className:a?`podcast-${a}`:null},(0,e.createElement)("audio",{controls:"controls",src:o}),s&&s.length>0&&(0,e.createElement)("figcaption",null,s))}}),"podcasting/latest-episode");(0,a.registerBlockVariation)("core/query",{name:R,title:"Latest Podcast Episode",description:"Displays the latest podcast episode.",isActive:["simple-podcasting"],icon:"microphone",attributes:{namespace:R,query:{postType:"post",podcastingQuery:"not_empty"}},allowedControls:[],scope:["inserter"],innerBlocks:[["core/post-template",{},[["core/group",{className:"podcasting-latest-episode"},[["core/post-featured-image"],["core/group",{className:"podcasting-latest-episode__content"},[["core/post-title"],["core/post-date"],["core/post-excerpt"]]]]]]],["core/query-no-results"]]})})();