"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[9073],{59073:(K,C,t)=>{t.d(C,{E:()=>Ie,a:()=>N});var e=t(74081),_=t(27279),T=t(96226),h=t(10701),L=t(2878),k=t(77970),U=t(25191),I=t(4540),j=t(51094),S=t(10989),E=t(32370),Z=t(67472),w=t(22572),$=t(73411),p=t(8295),te=t(61121),W=t(93415),F=t(23298),A=t(74577),z=t(12881),_e=t(1782),pe=t(27875),ne=t(48102),Ee=t(74758),me=t(73354),O=t(15530),B=t(40464),ae=t(51447),re=t(59491),fe=t(36938),Me=t(34547),oe=t(59082),ie=t(95066),xe=t(64820),ve=t(76827),x=t(71563),i=t(70627),D=t(61020),Pe=t(47599),le=t(19003),b=t(47853);const ye=s=>s.reduce((n,a)=>{const r=a.split(".")[0];return n[r]||(n[r]=[]),n[r].push(a),n},{}),Ce=(0,le.ZP)(T.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,de=s=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},je=s=>{const n=["entry.create","entry.update","entry.delete"];return s&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},Q=_.createContext(),ce=({children:s})=>{const{formatMessage:n}=(0,D.Z)(),{collectionTypes:a,isLoading:r}=(0,re.u)(),l=_.useMemo(()=>a.some(o=>o.options.draftAndPublish===!0),[a]),u=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,e.jsx)(Q.Provider,{value:{isDraftAndPublish:l},children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(L.Q,{"aria-hidden":!0,children:u}),r&&(0,e.jsx)(k.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,e.jsx)(Ce,{"aria-label":u,children:s})]})})};ce.propTypes={children:i.oneOfType([i.arrayOf(i.node),i.node]).isRequired};const X=({getHeaders:s=de})=>{const{isDraftAndPublish:n}=_.useContext(Q),{formatMessage:a}=(0,D.Z)(),r=s(n);return(0,e.jsx)(U.S,{children:(0,e.jsxs)(I.Z,{children:[(0,e.jsx)(j.g,{children:(0,e.jsx)(S.T,{children:a({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),r.map(l=>["app.utils.publish","app.utils.unpublish"].includes(l.id)?(0,e.jsx)(j.g,{title:a({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,e.jsx)(E.Z,{variant:"sigma",textColor:"neutral600",children:a(l)})},l.id):(0,e.jsx)(j.g,{children:(0,e.jsx)(E.Z,{variant:"sigma",textColor:"neutral600",children:a(l)})},l.id))]})})};X.defaultProps={getHeaders:de},X.propTypes={getHeaders:i.func};const G=({providedEvents:s})=>{const{isDraftAndPublish:n}=_.useContext(Q),a=s||je(n),{values:r,handleChange:l}=(0,x.u6)(),u="events",o=r.events,f=[],v=ye(o),g=({target:{name:c,value:d}})=>{let m=new Set(o);d?m.add(c):m.delete(c),l({target:{name:u,value:Array.from(m)}})},M=({target:{name:c,value:d}})=>{let m=new Set(o);d?a[c].forEach(P=>{f.includes(P)||m.add(P)}):a[c].forEach(P=>m.delete(P)),l({target:{name:u,value:Array.from(m)}})};return(0,e.jsx)(Z.X,{children:Object.entries(a).map(([c,d])=>(0,e.jsx)(H,{disabledEvents:f,name:c,events:d,inputValue:v[c],handleSelect:g,handleSelectAll:M},c))})};G.defaultProps={providedEvents:null},G.propTypes={providedEvents:i.object};const Oe=s=>s.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),H=({disabledEvents:s,name:n,events:a,inputValue:r,handleSelect:l,handleSelectAll:u})=>{const{formatMessage:o}=(0,D.Z)(),f=a.filter(d=>!s.includes(d)),v=r.length>0,g=r.length===f.length,M=({target:{name:d}})=>{u({target:{name:d,value:!g}})},c=5;return(0,e.jsxs)(I.Z,{children:[(0,e.jsx)(j.f,{children:(0,e.jsx)(w.X,{indeterminate:v&&!g,"aria-label":o({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:M,value:g,children:Oe(n)})}),a.map(d=>(0,e.jsx)(j.f,{children:(0,e.jsx)($.C,{disabled:s.includes(d),"aria-label":d,name:d,value:r.includes(d),onValueChange:m=>l({target:{name:d,value:m}})})},d)),a.length<c&&(0,e.jsx)(j.f,{colSpan:c-a.length})]})};H.defaultProps={disabledEvents:[],events:[],inputValue:[],handleSelect(){},handleSelectAll(){}},H.propTypes={disabledEvents:i.array,events:i.array,inputValue:i.array,handleSelect:i.func,handleSelectAll:i.func,name:i.string.isRequired};const N={Root:ce,Headers:X,Body:G,EventRow:H};function De(){return(0,e.jsxs)(N.Root,{children:[(0,e.jsx)(N.Headers,{}),(0,e.jsx)(N.Body,{})]})}const ge=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Y=({name:s,onChange:n,value:a,...r})=>{const{values:{headers:l}}=(0,x.u6)(),[u,o]=(0,_.useState)(ge);(0,_.useEffect)(()=>{o(ge.filter(g=>!l?.some(M=>M.key!==a&&M.key===g)))},[l,a]);const f=g=>{n({target:{name:s,value:g}})},v=g=>{o(M=>[...M,g]),f(g)};return(0,e.jsx)(p.XU,{...r,onClear:()=>f(""),onChange:f,onCreateOption:v,placeholder:"",value:a,children:u.map(g=>(0,e.jsx)(te.O,{value:g,children:g},g))})};Y.defaultProps={value:void 0},Y.propTypes={name:i.string.isRequired,onChange:i.func.isRequired,value:i.string};const be=()=>{const{formatMessage:s}=(0,D.Z)(),{values:n,errors:a}=(0,x.u6)();return(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(L.Q,{children:s({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,e.jsx)(W.x,{padding:8,background:"neutral100",hasRadius:!0,children:(0,e.jsx)(x.F2,{validateOnChange:!1,name:"headers",render:({push:r,remove:l})=>(0,e.jsxs)(F.r,{gap:4,children:[n.headers.map((u,o)=>(0,e.jsxs)(_.Fragment,{children:[(0,e.jsx)(A.P,{col:6,children:(0,e.jsx)(x.gN,{as:Y,name:`headers.${o}.key`,"aria-label":`row ${o+1} key`,label:s({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:a.headers?.[o]?.key&&a.headers[o].key})}),(0,e.jsx)(A.P,{col:6,children:(0,e.jsxs)(h.k,{alignItems:"flex-end",children:[(0,e.jsx)(W.x,{style:{flex:1},children:(0,e.jsx)(x.gN,{as:z.o,name:`headers.${o}.value`,"aria-label":`row ${o+1} value`,label:s({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:a.headers?.[o]?.value&&a.headers[o].value})}),(0,e.jsx)(h.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:a.headers?.[o]?.value?0:5,children:(0,e.jsx)(O.fG,{disabled:n.headers.length===1,onClick:()=>l(o),label:s({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:o+1})})})]})})]},`${o}.${u.key}`)),(0,e.jsx)(A.P,{col:12,children:(0,e.jsx)(_e.A,{type:"button",onClick:()=>{r({key:"",value:""})},startIcon:(0,e.jsx)(fe.Z,{}),children:s({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},V=le.ZP.svg(({theme:s,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${s.colors[n]};
  }
`),J=({isPending:s,statusCode:n})=>{const{formatMessage:a}=(0,D.Z)();return s?(0,e.jsxs)(h.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(V,{as:Me.Z}),(0,e.jsx)(E.Z,{children:a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,e.jsxs)(h.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(V,{as:oe.Z,color:"success700"}),(0,e.jsx)(E.Z,{children:a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,e.jsxs)(h.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(V,{as:ie.Z,color:"danger700"}),(0,e.jsxs)(E.Z,{children:[a({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null};J.propTypes={isPending:i.bool.isRequired,statusCode:i.number},J.defaultProps={statusCode:void 0};const q=({statusCode:s,message:n})=>{const{formatMessage:a}=(0,D.Z)();return s>=200&&s<300?(0,e.jsx)(h.k,{justifyContent:"flex-end",children:(0,e.jsx)(E.Z,{textColor:"neutral600",ellipsis:!0,children:a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):s>=300?(0,e.jsx)(h.k,{justifyContent:"flex-end",children:(0,e.jsx)(h.k,{maxWidth:(0,O.Q1)(250),justifyContent:"flex-end",title:n,children:(0,e.jsx)(E.Z,{ellipsis:!0,textColor:"neutral600",children:n})})}):null};q.propTypes={statusCode:i.number,message:i.string},q.defaultProps={statusCode:void 0,message:void 0};const ue=({onCancel:s})=>{const{formatMessage:n}=(0,D.Z)();return(0,e.jsx)(h.k,{justifyContent:"flex-end",children:(0,e.jsx)("button",{onClick:s,type:"button",children:(0,e.jsxs)(h.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(E.Z,{textColor:"neutral400",children:n({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,e.jsx)(V,{as:ie.Z,color:"neutral400"})]})})})};ue.propTypes={onCancel:i.func.isRequired};const ee=({isPending:s,onCancel:n,response:a})=>{const{statusCode:r,message:l}=a,{formatMessage:u}=(0,D.Z)();return(0,e.jsx)(W.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(F.r,{gap:4,style:{alignItems:"center"},children:[(0,e.jsx)(A.P,{col:3,children:(0,e.jsx)(E.Z,{children:u({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,e.jsx)(A.P,{col:3,children:(0,e.jsx)(J,{isPending:s,statusCode:r})}),(0,e.jsx)(A.P,{col:6,children:s?(0,e.jsx)(ue,{onCancel:n}):(0,e.jsx)(q,{statusCode:r,message:l})})]})})};ee.defaultProps={isPending:!1,onCancel(){},response:{}},ee.propTypes={isPending:i.bool,onCancel:i.func,response:i.object};const Te=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Ae=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Re=({formatMessage:s})=>b.Ry().shape({name:b.Z_().required(s({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Te,s({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:b.Z_().required(s({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Ae,s({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:b.Vo(n=>{let a=b.IX();if(n.length===1){const{key:r,value:l}=n[0];if(!r&&!l)return a}return a.of(b.Ry().shape({key:b.Z_().required(s({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:b.Z_().required(s({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:b.IX()}),se=({handleSubmit:s,triggerWebhook:n,isCreating:a,isTriggering:r,triggerResponse:l,data:u})=>{const{formatMessage:o}=(0,D.Z)(),[f,v]=(0,_.useState)(!1),g=(0,Pe.p)(De,async()=>(await t.e(684).then(t.bind(t,90684))).EventTableEE),M=d=>Object.keys(d).length?Object.entries(d).map(([m,P])=>({key:m,value:P})):[{key:"",value:""}],c=(0,x.TA)({initialValues:{name:u?.name||"",url:u?.url||"",headers:M(u?.headers||{}),events:u?.events||[]},onSubmit(d,{resetForm:m,setSubmitting:P}){s(d),m({values:d}),P(!1)},validationSchema:Re({formatMessage:o}),validateOnChange:!1,validateOnBlur:!1});return g?(0,e.jsx)(x.Hy,{value:c,children:(0,e.jsxs)(O.l0,{onSubmit:c.handleSubmit,children:[(0,e.jsx)(pe.T,{primaryAction:(0,e.jsxs)(h.k,{gap:2,children:[(0,e.jsx)(ne.z,{onClick:()=>{n(),v(!0)},variant:"tertiary",startIcon:(0,e.jsx)(xe.Z,{}),disabled:a||r,size:"L",children:o({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,e.jsx)(ne.z,{startIcon:(0,e.jsx)(oe.Z,{}),type:"submit",size:"L",disabled:!c.dirty,loading:c.isSubmitting,children:o({id:"global.save",defaultMessage:"Save"})})]}),title:a?o({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):u?.name,navigationAction:(0,e.jsx)(O.rU,{startIcon:(0,e.jsx)(ve.Z,{}),to:"/settings/webhooks",children:o({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(Ee.D,{children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:4,children:[f&&(0,e.jsx)(ee,{isPending:r,response:l,onCancel:()=>v(!1)}),(0,e.jsx)(W.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(F.r,{gap:6,children:[(0,e.jsx)(A.P,{col:6,children:(0,e.jsx)(x.gN,{as:z.o,name:"name",error:c?.errors?.name&&c.errors.name,label:o({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,e.jsx)(A.P,{col:12,children:(0,e.jsx)(x.gN,{as:z.o,name:"url",error:c?.errors?.url&&c.errors.url,label:o({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,e.jsx)(be,{}),(0,e.jsx)(g,{})]})})]})})]})}):null};se.propTypes={data:i.object,handleSubmit:i.func.isRequired,triggerWebhook:i.func.isRequired,isCreating:i.bool.isRequired,isTriggering:i.bool.isRequired,triggerResponse:i.object},se.defaultProps={data:void 0,triggerResponse:void 0};const he=s=>({...s,headers:s.headers.reduce((n,{key:a,value:r})=>(a!==""&&(n[a]=r),n),{})}),Ie=()=>{const{params:{id:s}}=(0,ae.$B)("/settings/webhooks/:id"),n=s==="create",{replace:a}=(0,ae.k6)(),r=(0,O.lm)(),{formatAPIError:l}=(0,O.So)(),u=(0,B.useQueryClient)(),{isLoading:o}=(0,re.u)(),{put:f,get:v,post:g}=(0,O.kY)(),{isLoading:M,data:c,error:d}=(0,B.useQuery)(["webhooks",s],async()=>{const{data:{data:y}}=await v(`/admin/webhooks/${s}`);return y},{enabled:!n});_.useEffect(()=>{d&&r({type:"warning",message:l(d)})},[d,r,l]);const{isLoading:m,data:P,isIdle:Se,mutate:Le}=(0,B.useMutation)(()=>g(`/admin/webhooks/${s}/trigger`)),ke=()=>Le(null,{onError(y){r({type:"warning",message:l(y)})}}),Ue=(0,B.useMutation)(y=>g("/admin/webhooks",y)),We=(0,B.useMutation)(({id:y,body:R})=>f(`/admin/webhooks/${y}`,R)),Be=async y=>{if(n){Ue.mutate(he(y),{onSuccess({data:R}){r({type:"success",message:{id:"Settings.webhooks.created"}}),a(`/settings/webhooks/${R.data.id}`)},onError(R){r({type:"warning",message:l(R)})}});return}We.mutate({id:s,body:he(y)},{onSuccess(){u.invalidateQueries(["webhooks",s]),r({type:"success",message:{id:"notification.form.success.fields"}})},onError(R){r({type:"warning",message:l(R)})}})};return M||o?(0,e.jsx)(O.dO,{}):(0,e.jsxs)(me.o,{children:[(0,e.jsx)(O.SL,{name:"Webhooks"}),(0,e.jsx)(se,{data:c,handleSubmit:Be,triggerWebhook:ke,isCreating:n,isTriggering:m,isTriggerIdle:Se,triggerResponse:P?.data.data})]})}},59491:(K,C,t)=>{t.d(C,{u:()=>L});var e=t(27279),_=t(15530),T=t(53532),h=t(40464);function L(){const{get:k}=(0,_.kY)(),{formatAPIError:U}=(0,_.So)(),I=(0,_.lm)(),j=(0,h.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:p}}=await k("/content-manager/components");return p},onError(p){p instanceof T.d7&&I({type:"warning",message:U(p)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:p}}=await k("/content-manager/content-types");return p},onError(p){p instanceof T.d7&&I({type:"warning",message:U(p)})}}]),[S,E]=j,Z=S.isLoading||E.isLoading,w=e.useMemo(()=>(E?.data??[]).filter(p=>p.kind==="collectionType"&&p.isDisplayed),[E?.data]),$=e.useMemo(()=>(E?.data??[]).filter(p=>p.kind!=="collectionType"&&p.isDisplayed),[E?.data]);return{isLoading:Z,components:e.useMemo(()=>S?.data??[],[S?.data]),collectionTypes:w,singleTypes:$}}},61121:(K,C,t)=>{t.d(C,{O:()=>_});var e=t(8295);const _=e.Wx},76827:(K,C,t)=>{t.d(C,{Z:()=>T});var e=t(74081);const _=h=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...h,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),T=_},53532:(K,C,t)=>{t.d(C,{d7:()=>T});var e=t(5466);const{Axios:_,AxiosError:T,CanceledError:h,isCancel:L,CancelToken:k,VERSION:U,all:I,Cancel:j,isAxiosError:S,spread:E,toFormData:Z,AxiosHeaders:w,HttpStatusCode:$,formToJSON:p,getAdapter:te,mergeConfig:W}=e.default}}]);
