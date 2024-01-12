"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2337],{62337:(H,P,s)=>{s.d(P,{ProtectedEditPage:()=>as});var a=s(74081),e=s(27279),d=s(9941),E=s(27875),r=s(48102),D=s(74758),p=s(93415),U=s(10701),x=s(32370),T=s(23298),B=s(74577),j=s(79213),t=s(47665),y=s(59082),S=s(76827),V=s(53532),O=s(93533),_=s(98934),g=s(74919),L=s(47184),R=s(61020),m=s(51447),v=s(47533),l=s(47853),I=s(22380),u=s(50942),X=s(44485),Z=s(9670),o=s(44506),ds=s(15816),_s=s(97442),ls=s(13576),Es=s(87830),Ms=s(364),ms=s(59461),cs=s(40464),Ps=s(49204),Ds=s(29206),Os=s(43433),gs=s(75719),hs=s(8175),fs=s(6078),As=s(51943),Ls=s(55783),vs=s(92249),Is=s(41942),us=s(22919),Cs=s(53915),ps=s(75041),Us=s(30200),Ts=s(91379),Bs=s(33299),Rs=s(33409),Ks=s(63645),Ws=s(7988),xs=s(7055),js=s(26757),ys=s(58311),Ss=s(29510),Zs=s(16946),zs=s(10124),Ns=s(69530),$s=s(86961),Ys=s(51527),Fs=s(19764),Hs=s(42982),Vs=s(26126),Xs=s(64797),Js=s(85811);const w=l.Ry().shape({...o.C,isActive:l.Xg(),roles:l.IX().min(1,t.I0.required).required(t.I0.required)}),G=["email","firstname","lastname","username","isActive","roles"],q=()=>{const{put:z}=(0,t.kY)(),{formatMessage:n}=(0,R.Z)(),h=(0,m.$B)("/settings/users/:id")?.params?.id??"",{push:K}=(0,m.k6)(),{setUserDisplayName:J}=(0,t.L7)(),C=(0,t.lm)(),{lockApp:ts,unlockApp:es}=(0,t.o1)(),b=(0,I.j)(Z.M,async()=>(await s.e(3294).then(s.bind(s,53294))).MagicLinkEE),{formatAPIError:os}=(0,t.So)(),k=(0,I.f)(u.s),{isLoading:ns,allowedActions:{canUpdate:Q}}=(0,t.ss)({read:k.settings?.users.read??[],update:k.settings?.users.update??[]});(0,t.go)();const{users:[$],isLoading:is}=(0,I.g)({id:h},{cacheTime:0,onError(i){const{status:f}=i.response??{};f===403?(C({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),K("/")):C({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}});if(is||!b||ns)return(0,a.jsxs)(d.o,{"aria-busy":"true",children:[(0,a.jsx)(t.SL,{name:"Users"}),(0,a.jsx)(E.T,{primaryAction:(0,a.jsx)(r.z,{disabled:!0,startIcon:(0,a.jsx)(y.Z,{}),type:"button",size:"L",children:n({id:"global.save",defaultMessage:"Save"})}),title:n({id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}),navigationAction:(0,a.jsx)(j.r,{as:v.OL,startIcon:(0,a.jsx)(S.Z,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:n({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsx)(D.D,{children:(0,a.jsx)(t.dO,{})})]});const Y={...L($,G),roles:$.roles.map(({id:i})=>i),password:"",confirmPassword:""},rs=async(i,f)=>{ts?.();try{const{data:{data:M}}=await z(`/admin/users/${h}`,g(i,"confirmPassword"));C({type:"success",message:n({id:"notification.success.saved",defaultMessage:"Saved"})});const A=t.I8.getUserInfo();if(h.toString()===A?.id.toString()){t.I8.setUserInfo(M);const W=_(i,"username")||(0,u.g)(i?.firstname??"",i.lastname);J(W)}f.setValues({...L(i,G),password:"",confirmPassword:""})}catch(M){if(M instanceof V.d7&&M.response){const A=(0,X.f)(M.response.data),W=Object.keys(A).reduce((F,c)=>(F[c]=A[c].id,F),{});f.setErrors(W),C({type:"warning",message:os(M)})}}es?.()};return(0,a.jsxs)(d.o,{children:[(0,a.jsx)(t.SL,{name:"Users"}),(0,a.jsx)(O.J9,{onSubmit:rs,initialValues:Y,validateOnChange:!1,validationSchema:w,children:({errors:i,values:f,handleChange:M,isSubmitting:A,dirty:W})=>(0,a.jsxs)(t.l0,{children:[(0,a.jsx)(E.T,{primaryAction:(0,a.jsx)(r.z,{disabled:A||!Q?!0:!W,startIcon:(0,a.jsx)(y.Z,{}),loading:A,type:"submit",size:"L",children:n({id:"global.save",defaultMessage:"Save"})}),title:n({id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},{name:Y.username||(0,u.g)(Y?.firstname??"",Y.lastname)}),navigationAction:(0,a.jsx)(j.r,{as:v.OL,startIcon:(0,a.jsx)(S.Z,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:n({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsxs)(D.D,{children:[$?.registrationToken&&(0,a.jsx)(p.x,{paddingBottom:6,children:(0,a.jsx)(b,{registrationToken:$.registrationToken})}),(0,a.jsxs)(U.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,a.jsx)(p.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,a.jsxs)(U.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsx)(x.Z,{variant:"delta",as:"h2",children:n({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})}),(0,a.jsx)(T.r,{gap:5,children:ss.map(F=>F.map(c=>(0,a.jsx)(B.P,{...c.size,children:(0,a.jsx)(t.jm,{...c,disabled:!Q,error:i[c.name],onChange:M,value:f[c.name]})},c.name)))})]})}),(0,a.jsx)(p.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,a.jsxs)(U.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsx)(x.Z,{variant:"delta",as:"h2",children:n({id:"global.roles",defaultMessage:"User's role"})}),(0,a.jsx)(T.r,{gap:5,children:(0,a.jsx)(B.P,{col:6,xs:12,children:(0,a.jsx)(Z.S,{disabled:!Q,error:i.roles,onChange:M,value:f.roles})})})]})})]})]})]})})]})},ss=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]],as=()=>{const z=(0,t.lm)(),n=(0,I.f)(u.s),{isLoading:N,allowedActions:{canRead:h,canUpdate:K}}=(0,t.ss)({read:n.settings?.users.read??[],update:n.settings?.users.update??[]}),{state:J}=(0,m.TH)(),C=J?.from??"/";return e.useEffect(()=>{N||!h&&!K&&z({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[N,h,K,z]),N?(0,a.jsx)(t.dO,{}):!h&&!K?(0,a.jsx)(m.l_,{to:C}):(0,a.jsx)(q,{})}},9670:(H,P,s)=>{s.d(P,{M:()=>j,S:()=>t,a:()=>B});var a=s(74081),e=s(61020),d=s(22380),E=s(4987),r=s(97232),D=s(47665),p=s(78031),U=s(34547),x=s(40464),T=s(72450);const B=({children:O,target:_})=>{const g=(0,D.lm)(),{formatMessage:L}=(0,e.Z)(),{copy:R}=(0,D.VP)(),m=L({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),v=async()=>{await R(_)&&g({type:"info",message:{id:"notification.link-copied"}})};return(0,a.jsx)(D.Y_,{endAction:(0,a.jsx)(E.h,{label:m,noBorder:!0,icon:(0,a.jsx)(p.Z,{}),onClick:v}),title:_,titleEllipsis:!0,subtitle:O,icon:(0,a.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},j=({registrationToken:O})=>{const{formatMessage:_}=(0,e.Z)(),g=`${window.location.origin}${(0,d.p)()}/auth/register?registrationToken=${O}`;return(0,a.jsx)(B,{target:g,children:_({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},t=({disabled:O,error:_,onChange:g,value:L})=>{const{get:R}=(0,D.kY)(),{isLoading:m,data:v}=(0,x.useQuery)(["roles"],async()=>{const{data:{data:o}}=await R("/admin/roles");return o},{staleTime:5e4}),{formatMessage:l}=(0,e.Z)(),I=_?l({id:_,defaultMessage:_}):"",u=l({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),X=l({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),Z=l({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,a.jsx)(r.NU,{id:"roles",disabled:O,error:I,hint:X,label:u,name:"roles",onChange:o=>{g({target:{name:"roles",value:o}})},placeholder:Z,startIcon:m?(0,a.jsx)(V,{}):void 0,value:L.map(o=>o.toString()),withTags:!0,required:!0,children:(v??[]).map(o=>(0,a.jsx)(r.ML,{value:o.id.toString(),children:l({id:`global.${o.code}`,defaultMessage:o.name})},o.id))})},y=(0,T.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,S=T.default.div`
  animation: ${y} 2s infinite linear;
`,V=()=>(0,a.jsx)(S,{children:(0,a.jsx)(U.Z,{})})},44485:(H,P,s)=>{s.d(P,{f:()=>a});const a=({data:e})=>{try{return Object.keys(e).reduce((d,E)=>{const r=e[E][0];return d[E]={id:r,defaultMessage:r},d},{})}catch{return{}}}},44506:(H,P,s)=>{s.d(P,{C:()=>d});var a=s(47665),e=s(47853);const d={firstname:e.Z_().trim().required(a.I0.required),lastname:e.Z_(),email:e.Z_().email(a.I0.email).lowercase().required(a.I0.required),username:e.Z_().nullable(),password:e.Z_().min(8,a.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,a.I0.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(E,r)=>E?r.required(a.I0.required):r)}}}]);
