"use strict";(self.webpackChunkmediumclone_angular=self.webpackChunkmediumclone_angular||[]).push([[592],{4440:(M,T,o)=>{o.d(T,{AQ:()=>l,Jl:()=>h,Lo:()=>g,d5:()=>D,hb:()=>A,q7:()=>p,uD:()=>C});var e=o(4221),t=o(493),n=o(7808);const x={isLoading:!1,isSubmitting:!1,data:null,comments:null,errors:null,httpError:null},d=(0,e.Tz)({name:"article",reducer:(0,e.Lq)(x,(0,e.on)(n.o.getArticle,s=>({...s,isLoading:!0,errors:null})),(0,e.on)(n.o.getArticleSuccess,(s,{article:a})=>({...s,isLoading:!1,data:a})),(0,e.on)(n.o.getArticleFailure,(s,{error:a})=>({...s,isLoading:!1,httpError:a})),(0,e.on)(n.o.createArticle,s=>({...s,isSubmitting:!0,data:null,errors:null})),(0,e.on)(n.o.createArticleSuccess,(s,{article:a})=>({...s,isSubmitting:!1,data:a})),(0,e.on)(n.o.createArticleFailure,(s,{errors:a})=>({...s,isSubmitting:!1,errors:a})),(0,e.on)(n.o.getArticleComments,s=>({...s,isLoading:!0,comments:null})),(0,e.on)(n.o.getArticleCommentsSuccess,(s,{comments:a})=>({...s,isLoading:!1,comments:a})),(0,e.on)(n.o.getArticleCommentsFailure,(s,{errors:a})=>({...s,isLoading:!1,errors:a})),(0,e.on)(n.o.createArticleComment,s=>({...s,isSubmitting:!0})),(0,e.on)(n.o.createArticleCommentSuccess,s=>({...s,isSubmitting:!1})),(0,e.on)(n.o.createArticleCommentFailure,(s,{errors:a})=>({...s,isSubmitting:!1,errors:a})),(0,e.on)(n.o.deleteArticleComment,s=>({...s,isLoading:!0})),(0,e.on)(n.o.deleteArticleCommentSuccess,s=>({...s,isLoading:!1})),(0,e.on)(n.o.deleteArticleCommentFailure,(s,{errors:a})=>({...s,isLoading:!1,errors:a})),(0,e.on)(n.o.editArticle,s=>({...s,isSubmitting:!0,data:null,errors:null})),(0,e.on)(n.o.editArticleSuccess,(s,{article:a})=>({...s,isSubmitting:!1,data:a})),(0,e.on)(n.o.editArticleFailure,(s,{errors:a})=>({...s,isSubmitting:!1,errors:a})),(0,e.on)(n.o.deleteArticle,s=>({...s,isLoading:!0})),(0,e.on)(n.o.deleteArticleSuccess,()=>x),(0,e.on)(n.o.deleteArticleFailure,s=>({...s,isLoading:!1})),(0,e.on)(t.tr,()=>x))}),{name:l,reducer:h,selectData:p,selectIsLoading:g,selectIsSubmitting:A,selectErrors:C,selectComments:D}=d},6233:(M,T,o)=>{o.d(T,{E:()=>O});var e=o(6814),t=o(5879),n=o(6223),x=o(8904),d=o(5619),l=o(2572),h=o(7921),p=o(8091),g=o(9515);function A(r,u){if(1&r&&(t.ynx(0),t._uU(1),t.BQk()),2&r){const i=t.oxw().ngrxLet;t.xp6(1),t.Oqu(i.create)}}function C(r,u){if(1&r&&(t.ynx(0),t._uU(1),t.BQk()),2&r){const i=t.oxw().ngrxLet;t.xp6(1),t.Oqu(i.edit)}}function D(r,u){1&r&&(t.ynx(0),t._uU(1,"Unknown"),t.BQk())}const s=function(r){return{backgroundColor:r}};function a(r,u){if(1&r){const i=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"input",19),t.TgZ(2,"button",20),t.NdJ("click",function(){const U=t.CHM(i).index,Z=t.oxw(4);return t.KtG(Z.removeTag(U))}),t._UZ(3,"i",21),t.qZA()()}if(2&r){const i=u.$implicit,_=t.oxw(2).ngrxLet,f=t.oxw(2);t.xp6(1),t.Q6J("value",i)("readonly",!0)("ngStyle",t.VKq(4,s,"dark"===_.theme?"#373a3c":void 0)),t.xp6(1),t.Q6J("disabled","edit"===f.action||(null==_?null:_.isLoading))}}function E(r,u){if(1&r&&(t.TgZ(0,"div",16),t.YNc(1,a,4,6,"div",17),t.qZA()),2&r){const i=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",i.form.controls.tagList.value)}}function L(r,u){if(1&r){const i=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(i);const f=t.oxw(4);return t.KtG(f.addTag())}),t._UZ(1,"i",26),t.qZA()}if(2&r){const i=t.oxw(2).ngrxLet,_=t.oxw().ngrxLet;t.Q6J("disabled","INVALID"===i.formData.addTagStatus||!i.formData.addTagValue)("title",_.buttons.addTag)}}function c(r,u){if(1&r&&(t.TgZ(0,"div",22),t._UZ(1,"input",23),t.YNc(2,L,2,2,"button",24),t.qZA()),2&r){const i=t.oxw().ngrxLet,_=t.oxw().ngrxLet,f=t.oxw();t.xp6(1),t.Q6J("placeholder",_.inputs.placeholders.newTag)("formControl",f.addTagControl),t.xp6(1),t.Q6J("ngIf",!!i&&i.formData)}}function v(r,u){if(1&r&&(t.ynx(0),t._UZ(1,"mc-backend-error-messages",27),t.BQk()),2&r){const i=t.oxw(3);t.xp6(1),t.Q6J("errors",i.errors)}}function P(r,u){if(1&r&&(t.TgZ(0,"button",28),t._UZ(1,"i",29),t._uU(2),t.qZA()),2&r){const i=t.oxw().ngrxLet,_=t.oxw().ngrxLet;t.Q6J("disabled","INVALID"===i.formData.formStatus||i.isLoading||i.isSubmitting),t.xp6(2),t.hij(" \xa0 ",_.buttons.submit," ")}}function I(r,u){if(1&r){const i=t.EpF();t.TgZ(0,"form",6,7),t.NdJ("ngSubmit",function(){t.CHM(i);const f=t.oxw(2);return t.KtG(f.onSubmit())}),t.TgZ(2,"fieldset",8),t._UZ(3,"input",9),t.qZA(),t.TgZ(4,"fieldset",8),t._UZ(5,"textarea",10),t.qZA(),t.TgZ(6,"fieldset",8),t._UZ(7,"input",9),t.qZA(),t.TgZ(8,"fieldset",11)(9,"span")(10,"h5"),t._uU(11),t.qZA()(),t.YNc(12,E,2,1,"div",12),t.YNc(13,c,3,3,"div",13),t.qZA(),t.YNc(14,v,2,1,"ng-container",14),t.YNc(15,P,3,2,"button",15),t.qZA()}if(2&r){const i=u.ngrxLet,_=t.oxw().ngrxLet,f=t.oxw();t.Q6J("formGroup",f.form),t.xp6(3),t.Q6J("placeholder",_.inputs.placeholders.title)("formControl",f.form.controls.title),t.xp6(2),t.Q6J("placeholder",_.inputs.placeholders.body)("formControl",f.form.controls.body)("rows",4),t.xp6(2),t.Q6J("placeholder",_.inputs.placeholders.description)("formControl",f.form.controls.description),t.xp6(4),t.Oqu(_.tagsTitle),t.xp6(1),t.Q6J("ngIf",f.form.controls.tagList.value),t.xp6(1),t.Q6J("ngIf","create"===f.action),t.xp6(1),t.Q6J("ngIf",f.errors),t.xp6(1),t.Q6J("ngIf",!!i&&i.formData)}}const b=function(r,u,i,_){return{isLoading:r,isSubmitting:u,formData:i,theme:_}};function m(r,u){if(1&r&&(t.TgZ(0,"div",1)(1,"h1",2),t.YNc(2,A,2,1,"ng-container",3),t.YNc(3,C,2,1,"ng-container",3),t.YNc(4,D,2,0,"ng-container",4),t.qZA(),t._UZ(5,"hr"),t.YNc(6,I,16,13,"form",5),t.qZA()),2&r){const i=t.oxw();t.xp6(1),t.Q6J("ngSwitch",i.action),t.xp6(1),t.Q6J("ngSwitchCase","create"),t.xp6(1),t.Q6J("ngSwitchCase","edit"),t.xp6(3),t.Q6J("ngrxLet",t.l5B(4,b,i.isLoading$,i.isSubmitting$,i.formData$,i.theme$))}}let O=(()=>{class r{constructor(){this._isLoadingEmitter$=new d.X(!1),this._isSubmittingEmitter$=new d.X(!1),this._themeEmitter$=new d.X(null),this.isLoading$=this._isLoadingEmitter$.asObservable(),this.isSubmitting$=this._isSubmittingEmitter$.asObservable(),this.theme$=this._themeEmitter$.asObservable(),this.action=null,this.item=null,this.isLoading=!1,this.isSubmitting=!1,this.errors=null,this.theme=null,this.saveEmitter$=new t.vpe,this.form=new n.cw({body:new n.NI("",{validators:[n.kI.required,n.kI.minLength(1),n.kI.maxLength(800)],nonNullable:!0}),description:new n.NI("",{validators:[n.kI.required,n.kI.minLength(1),n.kI.maxLength(40)],nonNullable:!0}),title:new n.NI("",{validators:[n.kI.required,n.kI.minLength(1),n.kI.maxLength(30)],nonNullable:!0}),tagList:new n.NI(null,{validators:[n.kI.required]})}),this.addTagControl=new n.NI("",{validators:[n.kI.maxLength(50),n.kI.minLength(1),n.kI.required],nonNullable:!0}),this.formData$=(0,l.a)({formValues:this.form.valueChanges.pipe((0,h.O)(this.form.getRawValue())),formStatus:this.form.statusChanges.pipe((0,h.O)("INVALID")),addTagValue:this.addTagControl.valueChanges.pipe((0,h.O)("")),addTagStatus:this.addTagControl.statusChanges.pipe((0,h.O)("INVALID"))})}ngOnInit(){if(!this.action)throw new TypeError("Property action is required for this component.");"create"===this.action?(this.form.controls.tagList.addValidators(n.kI.required),this.form.controls.tagList.updateValueAndValidity()):"edit"===this.action&&this.item&&(this.form.patchValue(this.item,{emitEvent:!1}),this.form.controls.tagList.disable({emitEvent:!1}),this.addTagControl.disable({emitEvent:!1})),this.theme&&this._themeEmitter$.next(this.theme)}ngOnChanges(i){i.isLoading&&this._isLoadingEmitter$.next(i.isLoading.currentValue),i.isSubmitting&&this._isSubmittingEmitter$.next(i.isSubmitting.currentValue),i.theme&&this._themeEmitter$.next(i.theme.currentValue)}ngOnDestroy(){this._isLoadingEmitter$.complete(),this._isSubmittingEmitter$.complete(),this._themeEmitter$.complete()}addTag(){if(this.form.controls.tagList.value){const _=[...this.form.controls.tagList.value,this.addTagControl.value];this.form.controls.tagList.patchValue(_)}else this.form.controls.tagList.patchValue([this.addTagControl.value]);this.addTagControl.reset()}removeTag(i){if(this.form.controls.tagList.value){const _=this.form.controls.tagList.value.filter((f,U)=>U!==i);this.form.controls.tagList.patchValue(_)}}onSubmit(){this.saveEmitter$.emit({...this.form.getRawValue(),tagList:this.form.controls.tagList.getRawValue()??[]})}static#t=this.\u0275fac=function(_){return new(_||r)};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["art-form-ui"]],inputs:{action:"action",item:["articleToEdit","item"],isLoading:"isLoading",isSubmitting:"isSubmitting",errors:"errors",theme:"theme"},outputs:{saveEmitter$:"save"},standalone:!0,features:[t.TTD,t.jDz],decls:2,vars:3,consts:[["class","container",4,"ngrxLet"],[1,"container"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"formGroup","ngSubmit",4,"ngrxLet"],[3,"formGroup","ngSubmit"],["formTemplate","ngForm"],[1,"form-group"],["type","text",1,"form-control","form-control-lg",3,"placeholder","formControl"],["type","text",1,"form-control","form-control-lg",3,"placeholder","formControl","rows"],[1,"form-group",2,"border","1px solid #dee2e6","padding","1rem","border-radius","5px"],["style","display: flex; gap: 10px; margin-top: 1rem;",4,"ngIf"],["style","display: flex; gap: 1rem; margin-top: 1rem;",4,"ngIf"],[4,"ngIf"],["type","submit","class","btn btn-lg btn-success pull-xs-right",3,"disabled",4,"ngIf"],[2,"display","flex","gap","10px","margin-top","1rem"],["style","display: flex; gap: 3px;",4,"ngFor","ngForOf"],[2,"display","flex","gap","3px"],["type","text",1,"form-control","form-control-sm",3,"value","readonly","ngStyle"],["type","button",1,"btn","btn-sm","btn-warning",3,"disabled","click"],[1,"ion-android-close"],[2,"display","flex","gap","1rem","margin-top","1rem"],["type","text",1,"form-control","form-control-sm",3,"placeholder","formControl"],["type","button","class","btn btn-lg btn-primary rounded-circle",3,"disabled","title","click",4,"ngIf"],["type","button",1,"btn","btn-lg","btn-primary","rounded-circle",3,"disabled","title","click"],[1,"ion-android-add"],[3,"errors"],["type","submit",1,"btn","btn-lg","btn-success","pull-xs-right",3,"disabled"],[1,"ion-checkmark"]],template:function(_,f){1&_&&(t.YNc(0,m,7,9,"div",0),t.ALo(1,"translate")),2&_&&t.Q6J("ngrxLet",t.lcZ(1,1,"article"))},dependencies:[e.ez,e.sg,e.O5,e.PC,e.RF,e.n9,e.ED,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.oH,n.sg,x.a,p.eJ,g.aw,g.X$],encapsulation:2,changeDetection:0})}return r})()},8810:(M,T,o)=>{o.d(T,{S:()=>d});var e=o(8091),t=o(9515),n=o(5879);function x(l,h){if(1&l&&(n.TgZ(0,"div",2)(1,"h1"),n._uU(2),n.qZA(),n.TgZ(3,"p"),n._uU(4),n.qZA()()),2&l){const p=h.ngrxLet;n.xp6(2),n.Oqu(p.title),n.xp6(2),n.Oqu(p.subTitle)}}let d=(()=>{class l{static#t=this.\u0275fac=function(g){return new(g||l)};static#e=this.\u0275cmp=n.Xpm({type:l,selectors:[["mc-banner"]],standalone:!0,features:[n.jDz],decls:3,vars:3,consts:[[1,"banner"],["class","container",4,"ngrxLet"],[1,"container"]],template:function(g,A){1&g&&(n.TgZ(0,"div",0),n.YNc(1,x,5,2,"div",1),n.ALo(2,"translate"),n.qZA()),2&g&&(n.xp6(1),n.Q6J("ngrxLet",n.lcZ(2,1,"banner")))},dependencies:[e.eJ,t.aw,t.X$],encapsulation:2})}return l})()},6796:(M,T,o)=>{o.d(T,{$:()=>s});var e=o(5879),t=o(4221),n=o(1582),x=o(6814),d=o(2394),l=o(8091),h=o(9515);function p(a,E){if(1&a&&(e.TgZ(0,"li",4)(1,"a",6),e._uU(2),e.qZA()()),2&a){const L=e.oxw().ngrxLet;e.xp6(2),e.hij(" ",L.tabs.yours," ")}}const g=function(a){return["/tags",a]};function A(a,E){if(1&a&&(e.TgZ(0,"li",4)(1,"a",7)(2,"i",8),e._uU(3),e.qZA()()()),2&a){const L=e.oxw(2);e.xp6(1),e.Q6J("routerLink",e.VKq(2,g,L.tagName)),e.xp6(2),e.Oqu(L.tagName)}}const C=function(){return{exact:!0}};function D(a,E){if(1&a&&(e.TgZ(0,"ul",2),e.YNc(1,p,3,1,"li",3),e.ALo(2,"ngrxPush"),e.TgZ(3,"li",4)(4,"a",5),e._uU(5),e.qZA()(),e.YNc(6,A,4,4,"li",3),e.qZA()),2&a){const L=E.ngrxLet,c=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,6,c.currentUser$)),e.xp6(3),e.Q6J("routerLink","/home")("routerLinkActive","active")("routerLinkActiveOptions",e.DdM(8,C)),e.xp6(1),e.hij(" ",L.tabs.global," "),e.xp6(1),e.Q6J("ngIf",c.tagName)}}let s=(()=>{class a{constructor(){this.tagName="",this._store=(0,e.f3M)(t.yh),this.currentUser$=this._store.select(n.HF)}static#t=this.\u0275fac=function(c){return new(c||a)};static#e=this.\u0275cmp=e.Xpm({type:a,selectors:[["mc-feed-toggler"]],inputs:{tagName:"tagName"},standalone:!0,features:[e.jDz],decls:3,vars:3,consts:[[1,"feed-toggle"],["class","nav nav-underline",4,"ngrxLet"],[1,"nav","nav-underline"],["class","nav-item",4,"ngIf"],[1,"nav-item"],["queryParamsHandling","merge",1,"nav-link",3,"routerLink","routerLinkActive","routerLinkActiveOptions"],["routerLink","/feed","routerLinkActive","active",1,"nav-link"],["routerlinkActive","active",1,"nav-link",3,"routerLink"],[1,"ion-pound"]],template:function(c,v){1&c&&(e.TgZ(0,"div",0),e.YNc(1,D,7,9,"ul",1),e.ALo(2,"translate"),e.qZA()),2&c&&(e.xp6(1),e.Q6J("ngrxLet",e.lcZ(2,1,"feed")))},dependencies:[x.ez,x.O5,d.Bz,d.rH,d.Od,l.fM,h.aw,h.X$,l.eJ],encapsulation:2,changeDetection:0})}return a})()},4172:(M,T,o)=>{o.d(T,{G:()=>a});var e=o(5879),t=o(4221),n=o(2572),x=o(9397),d=o(8180),l=o(2181),h=o(7398),p=o(559),g=o(7317),A=o(4440),C=o(6814),D=o(8091);function s(E,L){if(1&E){const c=e.EpF();e.TgZ(0,"button",1),e.NdJ("click",function(){e.CHM(c);const P=e.oxw();return e.KtG(P.onFollow())}),e._UZ(1,"i",2),e._uU(2),e.qZA()}if(2&E){const c=L.ngIf;e.Q6J("disabled",c.isLoading),e.xp6(2),e.hij(" \xa0 ",c.isFollowing?"Unfollow":"Follow","\n")}}let a=(()=>{class E{constructor(){this._store=(0,e.f3M)(t.yh),this.data$=(0,n.a)({isLoading:this._store.select(g.ik),isFollowing:this._store.select(g.RE).pipe((0,x.b)(c=>{null===c&&this._store.select(A.q7).pipe((0,d.q)(1),(0,l.h)(v=>!!v)).subscribe(v=>{this._store.dispatch(p.e.getProfile({username:v.author.username}))})}),(0,l.h)(c=>!!c),(0,h.U)(c=>c.isFollowing))})}onFollow(){this._store.select(g.RE).pipe((0,d.q)(1),(0,l.h)(c=>!!c)).subscribe(c=>{this._store.dispatch(c.isFollowing?p.e.unfollowAuthor({username:c.username}):p.e.followAuthor({username:c.username}))})}static#t=this.\u0275fac=function(v){return new(v||E)};static#e=this.\u0275cmp=e.Xpm({type:E,selectors:[["app-follow-profile"]],decls:2,vars:3,consts:[["type","button","class","btn btn-sm btn-outline-secondary",3,"disabled","click",4,"ngIf"],["type","button",1,"btn","btn-sm","btn-outline-secondary",3,"disabled","click"],[1,"ion-person-stalker"]],template:function(v,P){1&v&&(e.YNc(0,s,3,2,"button",0),e.ALo(1,"ngrxPush")),2&v&&e.Q6J("ngIf",e.lcZ(1,1,P.data$))},dependencies:[C.O5,D.fM],encapsulation:2,changeDetection:0})}return E})()},9340:(M,T,o)=>{o.d(T,{D:()=>d});var e=o(6814),t=o(9907),n=o(5879);let x=(()=>{class l extends t.U{constructor(){super()}followUser(p){return super.followUser(p)}static#t=this.\u0275fac=function(g){return new(g||l)};static#e=this.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac})}return l})(),d=(()=>{class l{static#t=this.\u0275fac=function(g){return new(g||l)};static#e=this.\u0275mod=n.oAB({type:l});static#n=this.\u0275inj=n.cJS({providers:[x],imports:[e.ez]})}return l})()},5561:(M,T,o)=>{o.d(T,{R:()=>b});var e=o(5879),t=o(4221),n=o(4217),x=o(2572),d=o(8690),l=o(6814),h=o(6992),p=o(4208),g=o(2394),A=o(8091),C=o(9515),D=o(5921);function s(m,O){1&m&&e._UZ(0,"mc-loading")}function a(m,O){if(1&m&&e._UZ(0,"mc-error-message",4),2&m){const r=e.oxw().ngrxLet;e.Q6J("errorMessage",r.error)}}function E(m,O){if(1&m&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&m){const r=O.ngrxLet;e.xp6(1),e.hij(" ",r.tagsText," ")}}const L=function(m){return["/tags",m]};function c(m,O){if(1&m&&(e.TgZ(0,"a",8),e._uU(1),e.qZA()),2&m){const r=O.$implicit,u=e.oxw(2).ngrxLet;e.Q6J("routerLink",e.VKq(3,L,r))("ngClass","dark"===u.theme?"dark":void 0),e.xp6(1),e.hij(" ",r," ")}}const v=function(m){return{backgroundColor:m}};function P(m,O){if(1&m&&(e.TgZ(0,"div",5),e.YNc(1,E,2,1,"p",0),e.ALo(2,"translate"),e.TgZ(3,"div",6),e.YNc(4,c,2,5,"a",7),e.qZA()()),2&m){const r=e.oxw().ngrxLet;e.Q6J("ngStyle",e.VKq(5,v,"dark"===r.theme?"rgb(110, 110, 110)":void 0)),e.xp6(1),e.Q6J("ngrxLet",e.lcZ(2,3,"app")),e.xp6(3),e.Q6J("ngForOf",r.popularTags)}}function I(m,O){if(1&m&&(e.ynx(0),e.YNc(1,s,1,0,"mc-loading",1),e.YNc(2,a,1,1,"mc-error-message",2),e.YNc(3,P,5,7,"div",3),e.BQk()),2&m){const r=O.ngrxLet;e.xp6(1),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("ngIf",r.error),e.xp6(1),e.Q6J("ngIf",r.popularTags)}}let b=(()=>{class m{constructor(){this._store=(0,e.f3M)(t.yh),this._prefsService=(0,e.f3M)(D.y),this.data$=(0,x.a)({popularTags:this._store.select(d.P4),isLoading:this._store.select(d.xU),error:this._store.select(d.zh),theme:this._prefsService.appThemes$})}ngOnInit(){this._store.dispatch(n.T.getPopularTags())}static#t=this.\u0275fac=function(u){return new(u||m)};static#e=this.\u0275cmp=e.Xpm({type:m,selectors:[["mc-popular-tags"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[[4,"ngrxLet"],[4,"ngIf"],[3,"errorMessage",4,"ngIf"],["class","sidebar",3,"ngStyle",4,"ngIf"],[3,"errorMessage"],[1,"sidebar",3,"ngStyle"],[1,"tag-list"],["class","tag-default tag-pill pill",3,"routerLink","ngClass",4,"ngFor","ngForOf"],[1,"tag-default","tag-pill","pill",3,"routerLink","ngClass"]],template:function(u,i){1&u&&e.YNc(0,I,4,3,"ng-container",0),2&u&&e.Q6J("ngrxLet",i.data$)},dependencies:[l.ez,l.mk,l.sg,l.O5,l.PC,h.N,p.H,g.Bz,g.rH,A.eJ,C.aw,C.X$],styles:[".pill[_ngcontent-%COMP%]{color:#fff!important}.pill.dark[_ngcontent-%COMP%]{background-color:#d8d8d8;color:#000!important}"],changeDetection:0})}return m})()}}]);