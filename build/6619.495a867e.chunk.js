"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[6619],{6619:(c,d,_)=>{_.r(d),_.d(d,{InstalledPluginsPage:()=>g,ProtectedInstalledPluginsPage:()=>f});var s=_(74081),A=_(27279),r=_(51926),D=_(27997),O=_(9941),I=_(27875),L=_(74758),B=_(70774),W=_(38101),o=_(93153),n=_(50086),P=_(32370),K=_(86967),t=_(47665),R=_(364),i=_(61020),U=_(40464),h=_(59461),m=_(50942),u=_(64797),e=_(85811),Z=_(22380),N=_(15816),F=_(97442),S=_(13576),$=_(87830),G=_(47184),Q=_(93533),Y=_(49204),z=_(47853),H=_(74919),J=_(29206),V=_(98934),X=_(43433),p=_(75719),k=_(8175),b=_(6078),w=_(51943),q=_(55783),__=_(92249),s_=_(41942),E_=_(22919),t_=_(53915),a_=_(75041),n_=_(30200),P_=_(91379),M_=_(33299),l_=_(33409),d_=_(63645),D_=_(7988),O_=_(7055),o_=_(26757),i_=_(58311),g_=_(29510),C_=_(16946),v_=_(10124),T_=_(69530),A_=_(86961),r_=_(51527),I_=_(19764),L_=_(42982),B_=_(26126);const g=()=>{const{formatMessage:E}=(0,i.Z)(),{notifyStatus:M}=(0,r.G)(),C=(0,t.lm)(),{get:j}=(0,t.kY)();(0,t.go)();const{status:v,data:l,error:T}=(0,U.useQuery)(["plugins"],async()=>{const{data:a}=await j("/admin/plugins");return a});return A.useEffect(()=>{l&&M(E({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:E({id:"global.plugins",defaultMessage:"Plugins"})})),T&&C({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})},[l,T,E,M,C]),v!=="success"&&v!=="error"?(0,s.jsx)(D.A,{children:(0,s.jsx)(O.o,{"aria-busy":!0,children:(0,s.jsx)(t.dO,{})})}):(0,s.jsx)(D.A,{children:(0,s.jsxs)(O.o,{children:[(0,s.jsx)(I.T,{title:E({id:"global.plugins",defaultMessage:"Plugins"}),subtitle:E({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),(0,s.jsx)(L.D,{children:(0,s.jsxs)(B.i,{colCount:2,rowCount:l?.plugins?.length??0+1,children:[(0,s.jsx)(W.h,{children:(0,s.jsxs)(o.Tr,{children:[(0,s.jsx)(n.Th,{children:(0,s.jsx)(P.Z,{variant:"sigma",textColor:"neutral600",children:E({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(n.Th,{children:(0,s.jsx)(P.Z,{variant:"sigma",textColor:"neutral600",children:E({id:"global.description",defaultMessage:"description"})})})]})}),(0,s.jsx)(K.p,{children:l?.plugins.map(({name:a,displayName:x,description:y})=>(0,s.jsxs)(o.Tr,{children:[(0,s.jsx)(n.Td,{children:(0,s.jsx)(P.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold",children:E({id:`global.plugins.${a}`,defaultMessage:x})})}),(0,s.jsx)(n.Td,{children:(0,s.jsx)(P.Z,{textColor:"neutral800",children:E({id:`global.plugins.${a}.description`,defaultMessage:y})})})]},a))})]})})]})})},f=()=>{const{formatMessage:E}=(0,i.Z)(),M=(0,h.v9)(m.s);return(0,s.jsxs)(t.O4,{permissions:M.marketplace?.main,children:[(0,s.jsx)(R.q,{title:E({id:"global.plugins",defaultMessage:"Plugins"})}),(0,s.jsx)(g,{})]})}}}]);
