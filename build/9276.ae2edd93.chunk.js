"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9276,4754],{69276:(Q,h,s)=>{s.d(h,{ProtectedCreateView:()=>Y});var _=s(74081),I=s(47665),R=s(59461),B=s(50942),K=s(84754),j=s(27279),x=s(40464),S=s(64797),l=s(85811),p=s(22380),u=s(15816),n=s(97442),N=s(13576),f=s(87830),V=s(47184),U=s(364),F=s(93533),c=s(49204),W=s(47853),M=s(74919),y=s(29206),Z=s(98934),T=s(43433),i=s(75719),X=s(8175),k=s(6078),w=s(51943),b=s(55783),q=s(92249),ss=s(41942),_s=s(22919),ts=s(53915),ns=s(75041),as=s(30200),Es=s(91379),os=s(33299),es=s(33409),rs=s(63645),ds=s(7988),is=s(7055),Ms=s(26757),Ps=s(58311),Ds=s(29510),Os=s(16946),ls=s(10124),Ts=s(69530),ms=s(86961),vs=s(51527),As=s(19764),Ls=s(42982),Cs=s(26126),Is=s(50292);const Y=()=>{const $=(0,R.v9)(B.s);return(0,_.jsx)(I.O4,{permissions:$.settings?.["transfer-tokens"].create,children:(0,_.jsx)(K.N,{})})}},84754:(Q,h,s)=>{s.d(h,{N:()=>z,ProtectedEditView:()=>Ks});var _=s(74081),I=s(27279),R=s(9941),B=s(74758),K=s(10701),j=s(93415),x=s(32370),S=s(23298),l=s(74577),p=s(27875),u=s(48102),n=s(47665),N=s(59082),f=s(53532),V=s(93533),U=s(61020),F=s(40464),c=s(59461),W=s(51447),M=s(47853),y=s(50942),Z=s(44485),T=s(90114),i=s(50292),X=s(64797),k=s(85811),w=s(22380),b=s(15816),q=s(97442),ss=s(13576),_s=s(87830),ts=s(47184),ns=s(364),as=s(49204),Es=s(74919),os=s(29206),es=s(98934),rs=s(43433),ds=s(75719),is=s(8175),Ms=s(6078),Ps=s(51943),Ds=s(55783),Os=s(92249),ls=s(41942),Ts=s(22919),ms=s(53915),vs=s(75041),As=s(30200),Ls=s(91379),Cs=s(33299),Is=s(33409),Y=s(63645),$=s(7988),Vs=s(7055),Fs=s(26757),Zs=s(58311),Ys=s(29510),$s=s(16946),zs=s(10124),Gs=s(69530),Hs=s(86961),Js=s(51527),Qs=s(19764),Xs=s(42982),ks=s(26126);const Rs=M.Ry().shape({name:M.Z_().max(100).required(n.I0.required),description:M.Z_().nullable(),lifespan:M.Rx().integer().min(0).nullable().defined(n.I0.required),permissions:M.Z_().required(n.I0.required)}),Bs="Name already taken",z=()=>{(0,n.go)();const{formatMessage:e}=(0,U.Z)(),{lockApp:d,unlockApp:P}=(0,n.o1)(),r=(0,n.lm)(),D=(0,W.k6)(),{state:m}=(0,W.TH)(),[E,v]=I.useState(m&&"accessKey"in m.transferToken?{...m.transferToken}:null),{trackUsage:O}=(0,n.rS)(),{setCurrentStep:Ws}=(0,n.c1)(),gs=(0,c.v9)(y.s),{allowedActions:{canCreate:hs,canUpdate:cs,canRegenerate:ys}}=(0,n.ss)(gs.settings["transfer-tokens"]),js=(0,W.$B)("/settings/transfer-tokens/:id"),{get:xs,post:Ss,put:ps}=(0,n.kY)(),g=js?.params?.id,o=g==="create",{formatAPIError:G}=(0,n.So)();I.useEffect(()=>{O(o?"didAddTokenFromList":"didEditTokenFromList",{tokenType:T.T})},[o,O]),(0,F.useQuery)(["transfer-token",g],async()=>{const{data:{data:t}}=await xs(`/admin/transfer/tokens/${g}`);return v({...t}),t},{enabled:!o&&!E,onError(t){t instanceof f.d7&&(t.response.data.error.details?.code==="INVALID_TOKEN_SALT"?r({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):r({type:"warning",message:G(t)}))}});const us=async(t,A)=>{O(o?"willCreateToken":"willEditToken",{tokenType:T.T}),d();const L=t.permissions.split("-");if((a=>a.length===1?a[0]==="push"||a[0]==="pull":a[0]==="push"&&a[1]==="pull")(L))try{let a;if(o){const{data:C}=await Ss("/admin/transfer/tokens",{...t,permissions:L});a=C.data}else{const{data:C}=await ps(`/admin/transfer/tokens/${g}`,{name:t.name,description:t.description,permissions:L});a=C.data}P(),o&&(D.replace(`/settings/transfer-tokens/${a.id}`,{transferToken:a}),Ws("transferTokens.success")),v({...a}),r({type:"success",message:e(o?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),O(o?"didCreateToken":"didEditToken",{type:E?.permissions,tokenType:T.T})}catch(a){if(a instanceof f.d7){const C=(0,Z.f)(a.response.data);A.setErrors(C),a?.response?.data?.error?.message===Bs?r({type:"warning",message:a.response.data.message||"notification.error.tokennamenotunique"}):a?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?r({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):r({type:"warning",message:a?.response?.data?.message||"notification.error"})}P()}},H=cs&&!o||hs&&o;if(!o&&!E)return(0,_.jsx)(Us,{});const Ns=t=>{t instanceof f.d7&&(t?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?r({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):r({type:"warning",message:G(t)}))};return(0,_.jsxs)(R.o,{children:[(0,_.jsx)(n.SL,{name:"Transfer Tokens"}),(0,_.jsx)(V.J9,{validationSchema:Rs,validateOnChange:!1,initialValues:{name:E?.name||"",description:E?.description||"",lifespan:E?.lifespan??null,permissions:E?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(t,A)=>us(t,A),children:({errors:t,handleChange:A,isSubmitting:L,values:J})=>(0,_.jsxs)(n.l0,{children:[(0,_.jsx)(i.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:E,setToken:v,canEditInputs:H,canRegenerate:ys,isSubmitting:L,regenerateUrl:"/admin/transfer/tokens/",onErrorRegenerate:Ns}),(0,_.jsx)(B.D,{children:(0,_.jsxs)(K.k,{direction:"column",alignItems:"stretch",gap:6,children:[E&&Boolean(E?.name)&&"accessKey"in E&&(0,_.jsx)(i.c,{token:E.accessKey,tokenType:T.T}),(0,_.jsx)(fs,{errors:t,onChange:A,canEditInputs:H,isCreating:o,values:J,transferToken:E})]})})]})})]})},Ks=()=>{const e=(0,c.v9)(y.s);return(0,_.jsx)(n.O4,{permissions:e.settings?.["transfer-tokens"].read,children:(0,_.jsx)(z,{})})},fs=({errors:e={},onChange:d,canEditInputs:P,isCreating:r,values:D,transferToken:m={}})=>{const{formatMessage:E}=(0,U.Z)(),v=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,_.jsx)(j.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,_.jsxs)(K.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,_.jsx)(x.Z,{variant:"delta",as:"h2",children:E({id:"global.details",defaultMessage:"Details"})}),(0,_.jsxs)(S.r,{gap:5,children:[(0,_.jsx)(l.P,{col:6,xs:12,children:(0,_.jsx)(i.T,{error:e.name,value:D.name,canEditInputs:P,onChange:d})},"name"),(0,_.jsx)(l.P,{col:6,xs:12,children:(0,_.jsx)(i.a,{error:e.description,value:D.description,canEditInputs:P,onChange:d})},"description"),(0,_.jsx)(l.P,{col:6,xs:12,children:(0,_.jsx)(i.L,{isCreating:r,error:e.lifespan,value:D.lifespan,onChange:d,token:m})},"lifespan"),(0,_.jsx)(l.P,{col:6,xs:12,children:(0,_.jsx)(i.b,{name:"permissions",value:D.permissions,error:e.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:O=>{d({target:{name:"permissions",value:O}})},options:v,canEditInputs:P})},"permissions")]})]})})},Us=({transferTokenName:e})=>{const{formatMessage:d}=(0,U.Z)();return(0,n.go)(),(0,_.jsxs)(R.o,{"aria-busy":"true",children:[(0,_.jsx)(n.SL,{name:"Transfer Tokens"}),(0,_.jsx)(p.T,{primaryAction:(0,_.jsx)(u.z,{disabled:!0,startIcon:(0,_.jsx)(N.Z,{}),type:"button",size:"L",children:d({id:"global.save",defaultMessage:"Save"})}),title:e||d({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,_.jsx)(B.D,{children:(0,_.jsx)(n.dO,{})})]})}}}]);
