"use strict";(self.webpackChunkmediumclone_angular=self.webpackChunkmediumclone_angular||[]).push([[126],{8126:(N,d,i)=>{i.r(d),i.d(d,{loginRoutes:()=>I,registerRoutes:()=>k});var t=i(5879),e=i(6223),l=i(2394),p=i(4221),f=i(2414),c=i(6814),m=i(1582),x=i(2572),h=i(8904),g=i(8091),u=i(9515);function _(o,a){if(1&o&&t._UZ(0,"mc-backend-error-messages",15),2&o){const n=t.oxw(2).ngIf;t.Q6J("errors",n.backendErrors)}}const b=function(){return["/login"]};function Z(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"h1",6),t._uU(4),t.qZA(),t.TgZ(5,"p",6)(6,"a",7),t._uU(7),t.qZA()(),t.YNc(8,_,1,1,"mc-backend-error-messages",8),t.TgZ(9,"form",9),t.NdJ("ngSubmit",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.onSubmit())}),t.TgZ(10,"fieldset",10),t._UZ(11,"input",11),t.qZA(),t.TgZ(12,"fieldset",10),t._UZ(13,"input",11),t.qZA(),t.TgZ(14,"fieldset",10),t._UZ(15,"input",12),t.qZA(),t.TgZ(16,"button",13),t._UZ(17,"i",14),t._uU(18),t.qZA()()()()()}if(2&o){const n=a.ngrxLet,r=t.oxw().ngIf,s=t.oxw();t.xp6(4),t.Oqu(n.title),t.xp6(2),t.Q6J("routerLink",t.DdM(13,b)),t.xp6(1),t.Oqu(n.link),t.xp6(1),t.Q6J("ngIf",r.backendErrors),t.xp6(1),t.Q6J("formGroup",s.form),t.xp6(2),t.Q6J("placeholder",n.inputs.usernamePlaceholder)("formControl",s.form.controls.username),t.xp6(2),t.Q6J("placeholder",n.inputs.emailPlaceholder)("formControl",s.form.controls.email),t.xp6(2),t.Q6J("placeholder",n.inputs.passwordPlaceholder)("formControl",s.form.controls.password),t.xp6(1),t.Q6J("disabled",r.isSubmitting),t.xp6(2),t.hij(" \xa0 ",n.buttons.submit," ")}}function v(o,a){1&o&&(t.ynx(0),t.TgZ(1,"div",1),t.YNc(2,Z,19,14,"div",2),t.ALo(3,"translate"),t.qZA(),t.BQk()),2&o&&(t.xp6(2),t.Q6J("ngrxLet",t.lcZ(3,1,"register")))}function w(o,a){if(1&o&&t._UZ(0,"mc-backend-error-messages",15),2&o){const n=t.oxw(2).ngrxLet;t.Q6J("errors",n.backendErrors)}}const L=function(){return["/register"]};function C(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"h1",6),t._uU(5),t.qZA(),t.TgZ(6,"p",6)(7,"a",7),t._uU(8),t.qZA()(),t.YNc(9,w,1,1,"mc-backend-error-messages",8),t.TgZ(10,"form",9),t.NdJ("ngSubmit",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.onSubmit())}),t.TgZ(11,"fieldset",10),t._UZ(12,"input",11),t.qZA(),t.TgZ(13,"fieldset",10),t._UZ(14,"input",12),t.qZA(),t.TgZ(15,"button",13),t._UZ(16,"i",14),t._uU(17),t.qZA()()()()()()}if(2&o){const n=a.ngrxLet,r=t.oxw().ngrxLet,s=t.oxw();t.xp6(5),t.hij(" ",n.title," "),t.xp6(2),t.Q6J("routerLink",t.DdM(11,L)),t.xp6(1),t.hij(" ",n.link," "),t.xp6(1),t.Q6J("ngIf",!!r&&r.backendErrors),t.xp6(1),t.Q6J("formGroup",s.form),t.xp6(2),t.Q6J("placeholder",n.inputs.emailPlaceholder)("formControl",s.form.controls.email),t.xp6(2),t.Q6J("placeholder",n.inputs.passwordPlaceholder)("formControl",s.form.controls.password),t.xp6(1),t.Q6J("disabled",null==r?null:r.isSubmitting),t.xp6(2),t.hij(" \xa0 ",n.buttons.submit," ")}}function T(o,a){1&o&&(t.ynx(0),t.YNc(1,C,18,12,"div",1),t.ALo(2,"translate"),t.BQk()),2&o&&(t.xp6(1),t.Q6J("ngrxLet",t.lcZ(2,1,"login")))}const k=[{path:"",component:(()=>{class o{constructor(){this.form=new e.cw({username:new e.NI("",{validators:[e.kI.required],nonNullable:!0}),email:new e.NI("",{validators:[e.kI.required],nonNullable:!0}),password:new e.NI("",{validators:[e.kI.required],nonNullable:!0})}),this._store=(0,t.f3M)(p.yh),this.data$=(0,x.a)({isSubmitting:this._store.select(m.rQ),backendErrors:this._store.select(m.km)})}onSubmit(){this._store.dispatch(f.Y.register({request:{user:{...this.form.getRawValue(),email:this.form.controls.email.getRawValue().toLowerCase()}}}))}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["mc-register"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"auth-page"],["class","container page",4,"ngrxLet"],[1,"container","page"],[1,"row"],[1,"col-md-6","offset-md-3","col-xs-12"],[1,"text-xs-center"],[3,"routerLink"],[3,"errors",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text",1,"form-control","form-control-lg",3,"placeholder","formControl"],["type","password",1,"form-control","form-control-lg",3,"placeholder","formControl"],["type","submit",1,"btn","btn-lg","btn-primary","pull-xs-right",3,"disabled"],[1,"ion-person-add"],[3,"errors"]],template:function(r,s){1&r&&(t.YNc(0,v,4,3,"ng-container",0),t.ALo(1,"ngrxPush")),2&r&&t.Q6J("ngIf",t.lcZ(1,1,s.data$))},dependencies:[l.Bz,l.rH,e.UX,e._Y,e.Fj,e.JJ,e.JL,e.oH,e.sg,c.ez,c.O5,h.a,g.fM,u.aw,u.X$,g.eJ],encapsulation:2,changeDetection:0})}return o})()}],I=[{path:"",component:(()=>{class o{constructor(){this._store=(0,t.f3M)(p.yh),this.form=new e.cw({email:new e.NI("",{validators:[e.kI.required],nonNullable:!0}),password:new e.NI("",{validators:[e.kI.required],nonNullable:!0})}),this.data$=(0,x.a)({isSubmitting:this._store.select(m.rQ),backendErrors:this._store.select(m.km)})}onSubmit(){this._store.dispatch(f.Y.login({request:{user:{...this.form.getRawValue(),email:this.form.controls.email.getRawValue().toLowerCase()}}}))}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["mc-login"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngrxLet"],["class","auth-page",4,"ngrxLet"],[1,"auth-page"],[1,"container","page"],[1,"row"],[1,"col-md-6","offset-md-3","col-xs-12"],[1,"text-xs-center"],[3,"routerLink"],[3,"errors",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","maxlength","35","minlength","6",1,"form-control","form-control-lg",3,"placeholder","formControl"],["type","password","maxlength","35",1,"form-control","form-control-lg",3,"placeholder","formControl"],["type","submit",1,"btn","btn-lg","btn-primary","pull-xs-right",3,"disabled"],[1,"ion-log-in"],[3,"errors"]],template:function(r,s){1&r&&t.YNc(0,T,3,3,"ng-container",0),2&r&&t.Q6J("ngrxLet",s.data$)},dependencies:[l.Bz,l.rH,g.eJ,e.UX,e._Y,e.Fj,e.JJ,e.JL,e.wO,e.nD,e.oH,e.sg,c.ez,c.O5,h.a,u.aw,u.X$],encapsulation:2,changeDetection:0})}return o})()}]}}]);