(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{iB8h:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),e=u("pMnS"),r=u("gIcY"),i=u("PuCV"),a=u("HZwm"),s=u("QmLB"),c=u("Ip0R"),b=u("fNgX"),d=u("Hf/j"),g=u("ZYjt"),p=u("ZYCi"),m=u("wHSu"),h=function(){function l(l,n,u){this.formBuilder=l,this.errorService=n,this.router=u,this.userIcon=m.t,this.keyIcon=m.n,this.initForm()}return Object.defineProperty(l.prototype,"email",{get:function(){return this.loginForm.get("email")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"password",{get:function(){return this.loginForm.get("password")},enumerable:!0,configurable:!0}),l.prototype.initForm=function(){this.loginForm=this.formBuilder.group({email:[null,[r.r.required,r.r.email]],password:[null,r.r.required]})},l.prototype.clientValidation=function(){return!this.email||this.email&&!this.email.value?(this.errorService.handleError(null,"Please enter your email address."),!1):!this.password||this.password&&!this.password.value?(this.errorService.handleError(null,"Please enter your password."),!1):!!this.errorService.isEmailAddressValid(this.email.value)||(this.errorService.handleError(null,"Please enter a valid email address."),!1)},l.prototype.loginClicked=function(){this.clientValidation()&&(this.errorService.clearError(),this.router.navigate(["/login/two-factor"]))},l}(),f=t.ob({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{height:100%;align-content:center}.card[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto;width:400px;background-color:rgba(0,0,0,.2)!important}.logo[_ngcontent-%COMP%]{width:25%;height:25%;margin-bottom:1rem}.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50px;background-color:#daa650;color:#40278c;border:0!important}input[_ngcontent-%COMP%]:focus{outline:0!important;box-shadow:0 0!important}.login_btn[_ngcontent-%COMP%]{color:#40278c;background-color:#daa650}.login_btn[_ngcontent-%COMP%]:hover{cursor:pointer;color:#40278c;background-color:rgba(0,0,0,.2)}a.blue-link[_ngcontent-%COMP%]{color:#f8f9fa!important}a.blue-link[_ngcontent-%COMP%]:hover{color:#40278c!important}"]],data:{}});function v(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"small",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please enter your email address. "]))],null,null)}function y(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"small",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please enter a valid email address. "]))],null,null)}function A(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"small",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please enter your password. "]))],null,null)}function C(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,55,"div",[["class","container h-100"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,54,"div",[["class","row justify-content-center align-items-center h-100"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,53,"div",[["class","col-12 text-center"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,52,"div",[["class","card"],["style","margin: 0 auto"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,0,"img",[["alt","Logo"],["class","img img-fluid logo"],["src","assets/images/logo.png"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"h4",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Sign in to GRAYLL"])),(l()(),t.qb(8,0,null,null,38,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(9,0,null,null,37,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==t.Ab(l,11).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Ab(l,11).onReset()&&o),o},null,null)),t.pb(10,16384,null,0,r.t,[],null,null),t.pb(11,540672,null,0,r.g,[[8,null],[8,null]],{form:[0,"form"]},null),t.Fb(2048,null,r.c,null,[r.g]),t.pb(13,16384,null,0,r.m,[[4,r.c]],null,null),(l()(),t.qb(14,0,null,null,1,"app-error",[],null,null,null,i.b,i.a)),t.pb(15,180224,null,0,a.a,[s.a],null,null),(l()(),t.hb(16777216,null,null,1,null,v)),t.pb(17,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,y)),t.pb(19,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(20,0,null,null,10,"div",[["class","input-group form-group"]],null,null,null,null,null)),(l()(),t.qb(21,0,null,null,3,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),t.qb(22,0,null,null,2,"span",[["class","input-group-text"]],null,null,null,null,null)),(l()(),t.qb(23,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(24,573440,null,0,d.a,[g.b,d.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(25,0,null,null,5,"input",[["class","form-control form-control-no-border"],["formControlName","email"],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,26)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,26).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,26)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,26)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(26,16384,null,0,r.d,[t.E,t.k,[2,r.a]],null,null),t.Fb(1024,null,r.j,function(l){return[l]},[r.d]),t.pb(28,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.j],[2,r.v]],{name:[0,"name"]},null),t.Fb(2048,null,r.k,null,[r.f]),t.pb(30,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),t.hb(16777216,null,null,1,null,A)),t.pb(32,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(33,0,null,null,10,"div",[["class","input-group form-group"]],null,null,null,null,null)),(l()(),t.qb(34,0,null,null,3,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),t.qb(35,0,null,null,2,"span",[["class","input-group-text"]],null,null,null,null,null)),(l()(),t.qb(36,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(37,573440,null,0,d.a,[g.b,d.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(38,0,null,null,5,"input",[["class","form-control form-control-no-border"],["formControlName","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,39)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,39).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,39)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,39)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(39,16384,null,0,r.d,[t.E,t.k,[2,r.a]],null,null),t.Fb(1024,null,r.j,function(l){return[l]},[r.d]),t.pb(41,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.j],[2,r.v]],{name:[0,"name"]},null),t.Fb(2048,null,r.k,null,[r.f]),t.pb(43,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),t.qb(44,0,null,null,2,"div",[["class","form-group mb-0"]],null,null,null,null,null)),(l()(),t.qb(45,0,null,null,1,"button",[["class","btn btn-block login_btn"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.loginClicked()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Login"])),(l()(),t.qb(47,0,null,null,8,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.qb(48,0,null,null,3,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(49,0,null,null,2,"a",[["class","blue-link"],["routerLink","/login/new-password"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,50).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),t.pb(50,671744,null,0,p.m,[p.k,p.a,c.h],{routerLink:[0,"routerLink"]},null),(l()(),t.Ib(-1,null,["Forgot your password?"])),(l()(),t.qb(52,0,null,null,3,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(53,0,null,null,2,"a",[["class","blue-link"],["routerLink","/login/register"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,54).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),t.pb(54,671744,null,0,p.m,[p.k,p.a,c.h],{routerLink:[0,"routerLink"]},null),(l()(),t.Ib(-1,null,["Don't have an account?"]))],function(l,n){var u=n.component;l(n,11,0,u.loginForm),l(n,17,0,(u.email.dirty||u.email.touched)&&u.email.invalid&&u.email.errors.required),l(n,19,0,(u.email.dirty||u.email.touched)&&u.email.invalid&&u.email.errors.email),l(n,24,0,u.userIcon),l(n,28,0,"email"),l(n,32,0,(u.password.dirty||u.password.touched)&&u.password.invalid&&u.password.errors.required),l(n,37,0,u.keyIcon),l(n,41,0,"password"),l(n,50,0,"/login/new-password"),l(n,54,0,"/login/register")},function(l,n){l(n,9,0,t.Ab(n,13).ngClassUntouched,t.Ab(n,13).ngClassTouched,t.Ab(n,13).ngClassPristine,t.Ab(n,13).ngClassDirty,t.Ab(n,13).ngClassValid,t.Ab(n,13).ngClassInvalid,t.Ab(n,13).ngClassPending),l(n,23,0,t.Ab(n,24).renderedIconHTML),l(n,25,0,t.Ab(n,30).ngClassUntouched,t.Ab(n,30).ngClassTouched,t.Ab(n,30).ngClassPristine,t.Ab(n,30).ngClassDirty,t.Ab(n,30).ngClassValid,t.Ab(n,30).ngClassInvalid,t.Ab(n,30).ngClassPending),l(n,36,0,t.Ab(n,37).renderedIconHTML),l(n,38,0,t.Ab(n,43).ngClassUntouched,t.Ab(n,43).ngClassTouched,t.Ab(n,43).ngClassPristine,t.Ab(n,43).ngClassDirty,t.Ab(n,43).ngClassValid,t.Ab(n,43).ngClassInvalid,t.Ab(n,43).ngClassPending),l(n,49,0,t.Ab(n,50).target,t.Ab(n,50).href),l(n,53,0,t.Ab(n,54).target,t.Ab(n,54).href)})}function k(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-login",[],null,null,null,C,f)),t.pb(1,49152,null,0,h,[r.e,s.a,p.k],null,null)],null,null)}var q=t.mb("app-login",h,k,{},{},[]),P=u("9AJC"),w=u("4GxJ"),I=function(){function l(l,n){this.formBuilder=l,this.errorService=n,this.userIcon=m.t,this.keyIcon=m.n,this.initForm()}return Object.defineProperty(l.prototype,"code",{get:function(){return this.loginForm.get("code")},enumerable:!0,configurable:!0}),l.prototype.initForm=function(){this.loginForm=this.formBuilder.group({code:[null,r.r.required],dontAskForNext30Days:!1})},l.prototype.clientValidation=function(){return!(!this.code||this.code&&!this.code.value)||(this.errorService.handleError(null,"Please enter your code."),!1)},l.prototype.loginClicked=function(){this.clientValidation()&&(this.errorService.clearError(),alert("Frontend validation passed"))},l}(),_=t.ob({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{height:100%;align-content:center}.card[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto;width:400px;background-color:rgba(0,0,0,.2)!important}.logo[_ngcontent-%COMP%]{width:25%;height:25%;margin-bottom:1rem}.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50px;background-color:#daa650;color:#40278c;border:0!important}input[_ngcontent-%COMP%]:focus{outline:0!important;box-shadow:0 0!important}.login_btn[_ngcontent-%COMP%]{color:#40278c;background-color:#daa650}.login_btn[_ngcontent-%COMP%]:hover{cursor:pointer;color:#40278c;background-color:rgba(0,0,0,.2)}a.blue-link[_ngcontent-%COMP%]{color:#f8f9fa!important}a.blue-link[_ngcontent-%COMP%]:hover{color:#40278c}"]],data:{}});function M(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"small",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please enter your code. "]))],null,null)}function x(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,42,"div",[["class","h-100 container-fluid"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,41,"div",[["class","row justify-content-center align-items-center h-100"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,40,"div",[["class","card"],["style","margin: 0 auto"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,3,"div",[["class","card-header text-center"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,0,"img",[["alt","Logo"],["class","img img-fluid logo"],["src","assets/images/logo.png"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"h4",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["2 Factor Authentication Code"])),(l()(),t.qb(7,0,null,null,30,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,2,"ngb-alert",[["class","alert"],["role","alert"],["type","success"]],[[2,"alert-dismissible",null]],null,null,P.f,P.c)),t.pb(9,638976,null,0,w.d,[w.e,t.E,t.k],{dismissible:[0,"dismissible"],type:[1,"type"]},null),(l()(),t.Ib(-1,0,[" Enter the 2-step verification generated by your authenticator app. "])),(l()(),t.qb(11,0,null,null,26,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==t.Ab(l,13).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Ab(l,13).onReset()&&o),o},null,null)),t.pb(12,16384,null,0,r.t,[],null,null),t.pb(13,540672,null,0,r.g,[[8,null],[8,null]],{form:[0,"form"]},null),t.Fb(2048,null,r.c,null,[r.g]),t.pb(15,16384,null,0,r.m,[[4,r.c]],null,null),(l()(),t.qb(16,0,null,null,1,"app-error",[],null,null,null,i.b,i.a)),t.pb(17,180224,null,0,a.a,[s.a],null,null),(l()(),t.hb(16777216,null,null,1,null,M)),t.pb(19,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(20,0,null,null,10,"div",[["class","input-group form-group"]],null,null,null,null,null)),(l()(),t.qb(21,0,null,null,3,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),t.qb(22,0,null,null,2,"span",[["class","input-group-text"]],null,null,null,null,null)),(l()(),t.qb(23,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(24,573440,null,0,d.a,[g.b,d.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(25,0,null,null,5,"input",[["class","form-control form-control-no-border"],["formControlName","code"],["placeholder","Enter 2FA Code"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,26)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,26).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,26)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,26)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(26,16384,null,0,r.d,[t.E,t.k,[2,r.a]],null,null),t.Fb(1024,null,r.j,function(l){return[l]},[r.d]),t.pb(28,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.j],[2,r.v]],{name:[0,"name"]},null),t.Fb(2048,null,r.k,null,[r.f]),t.pb(30,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),t.qb(31,0,null,null,2,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.qb(32,0,null,null,1,"button",[["class","btn btn-block login_btn"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.loginClicked()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Verify"])),(l()(),t.qb(34,0,null,null,3,"div",[["class","form-check mt-2"]],null,null,null,null,null)),(l()(),t.qb(35,0,null,null,0,"input",[["class","form-check-input"],["id","defaultCheck1"],["type","checkbox"],["value",""]],null,null,null,null,null)),(l()(),t.qb(36,0,null,null,1,"label",[["class","form-check-label text-light text-center"],["for","defaultCheck1"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Don't ask me for the code again for 30 days when I use this computer "])),(l()(),t.qb(38,0,null,null,4,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.qb(39,0,null,null,3,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(40,0,null,null,2,"a",[["class","blue-link"],["routerLink","/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,41).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),t.pb(41,671744,null,0,p.m,[p.k,p.a,c.h],{routerLink:[0,"routerLink"]},null),(l()(),t.Ib(-1,null,["Unable to submit a one-time code?"]))],function(l,n){var u=n.component;l(n,9,0,!1,"success"),l(n,13,0,u.loginForm),l(n,19,0,(u.code.dirty||u.code.touched)&&u.code.invalid&&u.code.errors.required),l(n,24,0,u.keyIcon),l(n,28,0,"code"),l(n,41,0,"/login")},function(l,n){l(n,8,0,t.Ab(n,9).dismissible),l(n,11,0,t.Ab(n,15).ngClassUntouched,t.Ab(n,15).ngClassTouched,t.Ab(n,15).ngClassPristine,t.Ab(n,15).ngClassDirty,t.Ab(n,15).ngClassValid,t.Ab(n,15).ngClassInvalid,t.Ab(n,15).ngClassPending),l(n,23,0,t.Ab(n,24).renderedIconHTML),l(n,25,0,t.Ab(n,30).ngClassUntouched,t.Ab(n,30).ngClassTouched,t.Ab(n,30).ngClassPristine,t.Ab(n,30).ngClassDirty,t.Ab(n,30).ngClassValid,t.Ab(n,30).ngClassInvalid,t.Ab(n,30).ngClassPending),l(n,40,0,t.Ab(n,41).target,t.Ab(n,41).href)})}function F(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-two-factor",[],null,null,null,x,_)),t.pb(1,49152,null,0,I,[r.e,s.a],null,null)],null,null)}var O=t.mb("app-two-factor",I,F,{},{},[]),E=function(){function l(l,n){this.formBuilder=l,this.errorService=n,this.userIcon=m.t,this.emailIcon=m.k,this.keyIcon=m.n,this.initForm()}return Object.defineProperty(l.prototype,"name",{get:function(){return this.registerForm.get("name")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"email",{get:function(){return this.registerForm.get("email")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"password",{get:function(){return this.registerForm.get("password")},enumerable:!0,configurable:!0}),l.prototype.initForm=function(){this.registerForm=this.formBuilder.group({name:[null,r.r.required],email:[null,[r.r.required,r.r.email]],password:[null,r.r.required]})},l.prototype.clientValidation=function(){return!this.name||this.name&&!this.name.value?(this.errorService.handleError(null,"Please enter your name."),!1):!this.email||this.email&&!this.email.value?(this.errorService.handleError(null,"Please enter your email address."),!1):!this.password||this.password&&!this.password.value?(this.errorService.handleError(null,"Please enter your password."),!1):!!this.errorService.isEmailAddressValid(this.email.value)||(this.errorService.handleError(null,"Please enter a valid email address."),!1)},l.prototype.registerClicked=function(){this.clientValidation()&&(this.errorService.clearError(),alert("Frontend validation passed."))},l}(),L=t.ob({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{height:100%;align-content:center}.card[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto;width:400px;background-color:rgba(0,0,0,.2)!important}.logo[_ngcontent-%COMP%]{width:25%;height:25%;margin-bottom:1rem}.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50px;background-color:#daa650;color:#40278c;border:0!important}input[_ngcontent-%COMP%]:focus{outline:0!important;box-shadow:0 0!important}.login_btn[_ngcontent-%COMP%]{color:#40278c;background-color:#daa650}.login_btn[_ngcontent-%COMP%]:hover{cursor:pointer;color:#40278c;background-color:rgba(0,0,0,.2)}a.blue-link[_ngcontent-%COMP%]{color:#f8f9fa!important}a.blue-link[_ngcontent-%COMP%]:hover{color:#40278c!important}"]],data:{}});function j(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"small",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please enter your name. "]))],null,null)}function S(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"small",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please enter your email address. "]))],null,null)}function T(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"small",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please enter a valid email address. "]))],null,null)}function K(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"small",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please enter your password. "]))],null,null)}function V(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,63,"div",[["class","h-100 container"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,62,"div",[["class","row align-items-center justify-content-center h-100"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,61,"div",[["class","card"],["style","margin: 0 auto"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,3,"div",[["class","card-header text-center"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,0,"img",[["alt","Logo"],["class","img img-fluid logo"],["src","assets/images/logo.png"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"h4",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Create a new Account"])),(l()(),t.qb(7,0,null,null,51,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,50,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==t.Ab(l,10).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Ab(l,10).onReset()&&o),o},null,null)),t.pb(9,16384,null,0,r.t,[],null,null),t.pb(10,540672,null,0,r.g,[[8,null],[8,null]],{form:[0,"form"]},null),t.Fb(2048,null,r.c,null,[r.g]),t.pb(12,16384,null,0,r.m,[[4,r.c]],null,null),(l()(),t.qb(13,0,null,null,1,"app-error",[],null,null,null,i.b,i.a)),t.pb(14,180224,null,0,a.a,[s.a],null,null),(l()(),t.hb(16777216,null,null,1,null,j)),t.pb(16,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(17,0,null,null,10,"div",[["class","input-group form-group"]],null,null,null,null,null)),(l()(),t.qb(18,0,null,null,3,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),t.qb(19,0,null,null,2,"span",[["class","input-group-text"]],null,null,null,null,null)),(l()(),t.qb(20,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(21,573440,null,0,d.a,[g.b,d.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(22,0,null,null,5,"input",[["class","form-control form-control-no-border"],["formControlName","name"],["placeholder","Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,23)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,23).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,23)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,23)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(23,16384,null,0,r.d,[t.E,t.k,[2,r.a]],null,null),t.Fb(1024,null,r.j,function(l){return[l]},[r.d]),t.pb(25,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.j],[2,r.v]],{name:[0,"name"]},null),t.Fb(2048,null,r.k,null,[r.f]),t.pb(27,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),t.hb(16777216,null,null,1,null,S)),t.pb(29,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,T)),t.pb(31,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(32,0,null,null,10,"div",[["class","input-group form-group"]],null,null,null,null,null)),(l()(),t.qb(33,0,null,null,3,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),t.qb(34,0,null,null,2,"span",[["class","input-group-text"]],null,null,null,null,null)),(l()(),t.qb(35,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(36,573440,null,0,d.a,[g.b,d.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(37,0,null,null,5,"input",[["class","form-control form-control-no-border"],["formControlName","email"],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,38)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,38).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,38)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,38)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(38,16384,null,0,r.d,[t.E,t.k,[2,r.a]],null,null),t.Fb(1024,null,r.j,function(l){return[l]},[r.d]),t.pb(40,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.j],[2,r.v]],{name:[0,"name"]},null),t.Fb(2048,null,r.k,null,[r.f]),t.pb(42,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),t.hb(16777216,null,null,1,null,K)),t.pb(44,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(45,0,null,null,10,"div",[["class","input-group form-group"]],null,null,null,null,null)),(l()(),t.qb(46,0,null,null,3,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),t.qb(47,0,null,null,2,"span",[["class","input-group-text"]],null,null,null,null,null)),(l()(),t.qb(48,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(49,573440,null,0,d.a,[g.b,d.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(50,0,null,null,5,"input",[["class","form-control form-control-no-border"],["formControlName","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,51)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,51).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,51)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,51)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(51,16384,null,0,r.d,[t.E,t.k,[2,r.a]],null,null),t.Fb(1024,null,r.j,function(l){return[l]},[r.d]),t.pb(53,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.j],[2,r.v]],{name:[0,"name"]},null),t.Fb(2048,null,r.k,null,[r.f]),t.pb(55,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),t.qb(56,0,null,null,2,"div",[["class","form-group mb-0"]],null,null,null,null,null)),(l()(),t.qb(57,0,null,null,1,"button",[["class","btn btn-block login_btn"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.registerClicked()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Register"])),(l()(),t.qb(59,0,null,null,4,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.qb(60,0,null,null,3,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(61,0,null,null,2,"a",[["class","blue-link"],["routerLink","/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,62).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),t.pb(62,671744,null,0,p.m,[p.k,p.a,c.h],{routerLink:[0,"routerLink"]},null),(l()(),t.Ib(-1,null,["Already have an account?"]))],function(l,n){var u=n.component;l(n,10,0,u.registerForm),l(n,16,0,(u.name.dirty||u.name.touched)&&u.name.invalid&&u.name.errors.required),l(n,21,0,u.userIcon),l(n,25,0,"name"),l(n,29,0,(u.email.dirty||u.email.touched)&&u.email.invalid&&u.email.errors.required),l(n,31,0,(u.email.dirty||u.email.touched)&&u.email.invalid&&u.email.errors.email),l(n,36,0,u.emailIcon),l(n,40,0,"email"),l(n,44,0,(u.password.dirty||u.password.touched)&&u.password.invalid&&u.password.errors.required),l(n,49,0,u.keyIcon),l(n,53,0,"password"),l(n,62,0,"/login")},function(l,n){l(n,8,0,t.Ab(n,12).ngClassUntouched,t.Ab(n,12).ngClassTouched,t.Ab(n,12).ngClassPristine,t.Ab(n,12).ngClassDirty,t.Ab(n,12).ngClassValid,t.Ab(n,12).ngClassInvalid,t.Ab(n,12).ngClassPending),l(n,20,0,t.Ab(n,21).renderedIconHTML),l(n,22,0,t.Ab(n,27).ngClassUntouched,t.Ab(n,27).ngClassTouched,t.Ab(n,27).ngClassPristine,t.Ab(n,27).ngClassDirty,t.Ab(n,27).ngClassValid,t.Ab(n,27).ngClassInvalid,t.Ab(n,27).ngClassPending),l(n,35,0,t.Ab(n,36).renderedIconHTML),l(n,37,0,t.Ab(n,42).ngClassUntouched,t.Ab(n,42).ngClassTouched,t.Ab(n,42).ngClassPristine,t.Ab(n,42).ngClassDirty,t.Ab(n,42).ngClassValid,t.Ab(n,42).ngClassInvalid,t.Ab(n,42).ngClassPending),l(n,48,0,t.Ab(n,49).renderedIconHTML),l(n,50,0,t.Ab(n,55).ngClassUntouched,t.Ab(n,55).ngClassTouched,t.Ab(n,55).ngClassPristine,t.Ab(n,55).ngClassDirty,t.Ab(n,55).ngClassValid,t.Ab(n,55).ngClassInvalid,t.Ab(n,55).ngClassPending),l(n,61,0,t.Ab(n,62).target,t.Ab(n,62).href)})}function H(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-register",[],null,null,null,V,L)),t.pb(1,49152,null,0,E,[r.e,s.a],null,null)],null,null)}var D=t.mb("app-register",E,H,{},{},[]),N=function(){function l(l,n){this.formBuilder=l,this.errorService=n,this.keyIcon=m.n,this.initForm()}return Object.defineProperty(l.prototype,"password",{get:function(){return this.newPasswordForm.get("password")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"confirm",{get:function(){return this.newPasswordForm.get("confirm")},enumerable:!0,configurable:!0}),l.prototype.initForm=function(){this.newPasswordForm=this.formBuilder.group({password:[null,r.r.required],confirm:[null,r.r.required]})},l.prototype.clientValidation=function(){return!this.password||this.password&&!this.password.value?(this.errorService.handleError(null,"Please enter a new password."),!1):!this.confirm||this.confirm&&!this.confirm.value?(this.errorService.handleError(null,"Please confirm you new password."),!1):this.confirm.value===this.password.value||(this.errorService.handleError(null,"Passwords do not match."),!1)},l.prototype.submitClicked=function(){this.clientValidation()&&(this.errorService.clearError(),alert("Frontend validation passed."))},l}(),U=t.ob({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{height:100%;align-content:center}.card[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto;width:400px;background-color:rgba(0,0,0,.2)!important}.logo[_ngcontent-%COMP%]{width:25%;height:25%;margin-bottom:1rem}.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50px;background-color:#daa650;color:#40278c;border:0!important}input[_ngcontent-%COMP%]:focus{outline:0!important;box-shadow:0 0!important}.login_btn[_ngcontent-%COMP%]{color:#40278c;background-color:#daa650}.login_btn[_ngcontent-%COMP%]:hover{cursor:pointer;color:#40278c;background-color:rgba(0,0,0,.2)}a.blue-link[_ngcontent-%COMP%]{color:#f8f9fa!important}a.blue-link[_ngcontent-%COMP%]:hover{color:#40278c!important}"]],data:{}});function B(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"small",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please enter your new password. "]))],null,null)}function R(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"small",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Passwords do not match. "]))],null,null)}function J(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,48,"div",[["class","container h-100"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,47,"div",[["class","row align-items-center justify-content-center h-100"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,46,"div",[["class","card"],["style","margin: 0 auto"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,3,"div",[["class","card-header text-center"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,0,"img",[["alt","Logo"],["class","img img-fluid logo"],["src","assets/images/logo.png"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"h4",[["class","text-light"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Set a new Password"])),(l()(),t.qb(7,0,null,null,36,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==t.Ab(l,10).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Ab(l,10).onReset()&&o),o},null,null)),t.pb(9,16384,null,0,r.t,[],null,null),t.pb(10,540672,null,0,r.g,[[8,null],[8,null]],{form:[0,"form"]},null),t.Fb(2048,null,r.c,null,[r.g]),t.pb(12,16384,null,0,r.m,[[4,r.c]],null,null),(l()(),t.qb(13,0,null,null,1,"app-error",[],null,null,null,i.b,i.a)),t.pb(14,180224,null,0,a.a,[s.a],null,null),(l()(),t.hb(16777216,null,null,1,null,B)),t.pb(16,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(17,0,null,null,10,"div",[["class","input-group form-group"]],null,null,null,null,null)),(l()(),t.qb(18,0,null,null,3,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),t.qb(19,0,null,null,2,"span",[["class","input-group-text"]],null,null,null,null,null)),(l()(),t.qb(20,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(21,573440,null,0,d.a,[g.b,d.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(22,0,null,null,5,"input",[["class","form-control form-control-no-border"],["formControlName","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,23)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,23).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,23)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,23)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(23,16384,null,0,r.d,[t.E,t.k,[2,r.a]],null,null),t.Fb(1024,null,r.j,function(l){return[l]},[r.d]),t.pb(25,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.j],[2,r.v]],{name:[0,"name"]},null),t.Fb(2048,null,r.k,null,[r.f]),t.pb(27,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),t.hb(16777216,null,null,1,null,R)),t.pb(29,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(30,0,null,null,10,"div",[["class","input-group form-group"]],null,null,null,null,null)),(l()(),t.qb(31,0,null,null,3,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),t.qb(32,0,null,null,2,"span",[["class","input-group-text"]],null,null,null,null,null)),(l()(),t.qb(33,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(34,573440,null,0,d.a,[g.b,d.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(35,0,null,null,5,"input",[["class","form-control form-control-no-border"],["formControlName","confirm"],["placeholder","Confirm Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,36)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,36).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,36)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,36)._compositionEnd(u.target.value)&&o),o},null,null)),t.pb(36,16384,null,0,r.d,[t.E,t.k,[2,r.a]],null,null),t.Fb(1024,null,r.j,function(l){return[l]},[r.d]),t.pb(38,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.j],[2,r.v]],{name:[0,"name"]},null),t.Fb(2048,null,r.k,null,[r.f]),t.pb(40,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),t.qb(41,0,null,null,2,"div",[["class","form-group mb-0"]],null,null,null,null,null)),(l()(),t.qb(42,0,null,null,1,"button",[["class","btn btn-block login_btn"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.submitClicked()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Save"])),(l()(),t.qb(44,0,null,null,4,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.qb(45,0,null,null,3,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(46,0,null,null,2,"a",[["class","blue-link"],["routerLink","/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,47).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),t.pb(47,671744,null,0,p.m,[p.k,p.a,c.h],{routerLink:[0,"routerLink"]},null),(l()(),t.Ib(-1,null,["Return to login"]))],function(l,n){var u=n.component;l(n,10,0,u.newPasswordForm),l(n,16,0,(u.password.dirty||u.password.touched)&&u.password.invalid&&u.password.errors.required),l(n,21,0,u.keyIcon),l(n,25,0,"password"),l(n,29,0,(u.confirm.dirty||u.confirm.touched)&&u.confirm.value!==u.password.value),l(n,34,0,u.keyIcon),l(n,38,0,"confirm"),l(n,47,0,"/login")},function(l,n){l(n,8,0,t.Ab(n,12).ngClassUntouched,t.Ab(n,12).ngClassTouched,t.Ab(n,12).ngClassPristine,t.Ab(n,12).ngClassDirty,t.Ab(n,12).ngClassValid,t.Ab(n,12).ngClassInvalid,t.Ab(n,12).ngClassPending),l(n,20,0,t.Ab(n,21).renderedIconHTML),l(n,22,0,t.Ab(n,27).ngClassUntouched,t.Ab(n,27).ngClassTouched,t.Ab(n,27).ngClassPristine,t.Ab(n,27).ngClassDirty,t.Ab(n,27).ngClassValid,t.Ab(n,27).ngClassInvalid,t.Ab(n,27).ngClassPending),l(n,33,0,t.Ab(n,34).renderedIconHTML),l(n,35,0,t.Ab(n,40).ngClassUntouched,t.Ab(n,40).ngClassTouched,t.Ab(n,40).ngClassPristine,t.Ab(n,40).ngClassDirty,t.Ab(n,40).ngClassValid,t.Ab(n,40).ngClassInvalid,t.Ab(n,40).ngClassPending),l(n,46,0,t.Ab(n,47).target,t.Ab(n,47).href)})}function Y(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-new-password",[],null,null,null,J,U)),t.pb(1,49152,null,0,N,[r.e,s.a],null,null)],null,null)}var Z=t.mb("app-new-password",N,Y,{},{},[]),G=u("jE6/"),Q=function(){return function(){}}(),z=u("4u1J"),X=u("QpxQ"),W=u("Zseb"),$=u("PCNd");u.d(n,"AuthorizationModuleNgFactory",function(){return ll});var ll=t.nb(o,[],function(l){return t.xb([t.yb(512,t.j,t.cb,[[8,[e.a,q,O,D,Z,P.a]],[3,t.j],t.y]),t.yb(4608,c.m,c.l,[t.v,[2,c.D]]),t.yb(4608,r.u,r.u,[]),t.yb(4608,r.e,r.e,[]),t.yb(4608,G.c,G.c,[]),t.yb(1073742336,c.b,c.b,[]),t.yb(1073742336,p.n,p.n,[[2,p.t],[2,p.k]]),t.yb(1073742336,Q,Q,[]),t.yb(1073742336,r.s,r.s,[]),t.yb(1073742336,r.h,r.h,[]),t.yb(1073742336,r.q,r.q,[]),t.yb(1073742336,d.f,d.f,[]),t.yb(1073742336,w.f,w.f,[]),t.yb(1073742336,w.m,w.m,[]),t.yb(1073742336,w.P,w.P,[]),t.yb(1073742336,z.a,z.a,[]),t.yb(1073742336,X.c,X.c,[]),t.yb(1073742336,W.b,W.b,[]),t.yb(1073742336,G.b,G.b,[]),t.yb(1073742336,$.a,$.a,[]),t.yb(1073742336,o,o,[]),t.yb(1024,p.i,function(){return[[{path:"",component:h},{path:"two-factor",component:I},{path:"register",component:E},{path:"new-password",component:N}]]},[]),t.yb(256,X.d,X.e,[])])})}}]);