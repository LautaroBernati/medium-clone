"use strict";(self.webpackChunkmediumclone_angular=self.webpackChunkmediumclone_angular||[]).push([[788],{1445:(h,a,o)=>{o.d(a,{Cn:()=>d,FI:()=>u,NI:()=>c,jU:()=>s,k3:()=>g});var l=o(4221),i=o(493),n=o(559);const r={isLoading:!1,data:null,validationErrors:null,error:void 0},f=(0,l.Tz)({name:"profile",reducer:(0,l.Lq)(r,(0,l.on)(n.e.getProfile,t=>({...t,isLoading:!0,validationErrors:null})),(0,l.on)(n.e.getProfileSuccess,(t,{profile:e})=>({...t,isLoading:!1,data:e})),(0,l.on)(n.e.getProfileFailure,(t,{error:e})=>({...t,error:e,isLoading:!1})),(0,l.on)(n.e.followAuthor,t=>({...t,isLoading:!0})),(0,l.on)(n.e.followAuthorSuccess,(t,{profile:e})=>({...t,data:e,isLoading:!1})),(0,l.on)(n.e.followAuthorFailure,t=>({...t,isLoading:!1})),(0,l.on)(n.e.unfollowAuthor,t=>({...t,isLoading:!0})),(0,l.on)(n.e.unfollowAuthorSuccess,(t,{profile:e})=>({...t,data:e,isLoading:!1})),(0,l.on)(n.e.unfollowAuthorFailure,(t,{errors:e})=>({...t,isLoading:!1,validationErrors:e})),(0,l.on)(i.tr,()=>r))}),{name:u,reducer:d,selectData:c,selectIsLoading:s,selectValidationErrors:g}=f},2788:(h,a,o)=>{o.r(a),o.d(a,{ProfilesModule:()=>c});var l=o(2394),i=o(5879);const n=[{path:":username",loadChildren:()=>Promise.all([o.e(867),o.e(592),o.e(45)]).then(o.bind(o,45)).then(s=>s.ProfileDetailModule)},{path:":username/favorites",loadChildren:()=>Promise.all([o.e(867),o.e(592),o.e(45)]).then(o.bind(o,45)).then(s=>s.ProfileDetailModule)}];let r=(()=>{class s{static#o=this.\u0275fac=function(e){return new(e||s)};static#t=this.\u0275mod=i.oAB({type:s});static#l=this.\u0275inj=i.cJS({imports:[l.Bz.forChild(n),l.Bz]})}return s})();var f=o(5109),u=o(4221),d=o(1445);let c=(()=>{class s{static#o=this.\u0275fac=function(e){return new(e||s)};static#t=this.\u0275mod=i.oAB({type:s});static#l=this.\u0275inj=i.cJS({providers:[f.L,(0,u.oY)(d.FI,d.Cn)],imports:[r]})}return s})()}}]);