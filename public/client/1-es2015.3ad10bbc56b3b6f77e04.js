(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/2vq":function(e,t,i){"use strict";i.d(t,"a",(function(){return v}));var n=i("2Vo4"),a=i("3Pt+"),o=i("0IaG"),s=i("nYR2"),r=i("fXoL"),c=i("VxIU"),l=i("i2dy"),d=i("ofXK"),b=i("NFeN"),u=i("Rd8u"),m=i("bTqV");function h(e,t){1&e&&(r.Vb(0,"span",6),r.Kc(1,"Create Workspace"),r.Ub())}function p(e,t){1&e&&(r.Vb(0,"span",6),r.Kc(1,"Update Workspace"),r.Ub())}function g(e,t){if(1&e&&(r.Vb(0,"div",15),r.Kc(1),r.Ub()),2&e){const e=r.gc().ngIf;r.Db(1),r.Lc(e.name)}}function f(e,t){if(1&e){const e=r.Wb();r.Vb(0,"form",7),r.cc("ngSubmit",(function(){return r.xc(e),r.gc().confirm()})),r.Vb(1,"mat-dialog-content",8),r.Vb(2,"div",9),r.Vb(3,"label",10),r.Kc(4,"Name"),r.Ub(),r.Qb(5,"input",11),r.Ic(6,g,2,1,"div",12),r.Ub(),r.Ub(),r.Vb(7,"mat-dialog-actions"),r.Vb(8,"button",13),r.cc("click",(function(){return r.xc(e),r.gc().close()})),r.Kc(9,"Cancel"),r.Ub(),r.Vb(10,"button",14),r.hc(11,"async"),r.Kc(12),r.Ub(),r.Ub(),r.Ub()}if(2&e){const e=t.ngIf,i=r.gc();r.mc("formGroup",i.form),r.Db(6),r.mc("ngIf",e.name),r.Db(4),r.mc("disabled",r.ic(11,4,i.loading$)),r.Db(2),r.Lc(i.data.workspace?"Update":"Create")}}let v=(()=>{class e{constructor(e,t,i,o){this.dialogRef=e,this.data=t,this.workspaces=i,this.toast=o,this.loading$=new n.a(!1),this.errors$=new n.a({}),this.form=new a.l({name:new a.i}),t.workspace&&this.form.patchValue(t.workspace)}confirm(){this.loading$.next(!0),(this.data.workspace?this.workspaces.update(this.data.workspace.id,this.form.value):this.workspaces.create(this.form.value)).pipe(Object(s.a)(()=>this.loading$.next(!1))).subscribe(e=>{this.toast.open(this.data.workspace?"Workspace updated.":"Workspace created."),this.close(e.workspace)},e=>this.errors$.next(e.errors))}close(e){this.dialogRef.close(e)}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(o.h),r.Pb(o.a),r.Pb(c.a),r.Pb(l.b))},e.\u0275cmp=r.Jb({type:e,selectors:[["crupdate-workspace-modal"]],decls:8,vars:5,consts:[[1,"modal-header"],["mat-dialog-title",""],["trans","",4,"ngIf"],["type","button","tabindex","-1",1,"close-button","no-style",3,"click"],["svgIcon","close"],["ngNativeValidate","",3,"formGroup","ngSubmit",4,"ngIf"],["trans",""],["ngNativeValidate","",3,"formGroup","ngSubmit"],[1,"many-inputs"],[1,"input-container","name-container"],["for","crupdate-workspace-name","trans",""],["type","text","id","crupdate-workspace-name","formControlName","name","required","","minlength","3"],["class","error",4,"ngIf"],["type","button","mat-button","","trans","",3,"click"],["type","submit","mat-raised-button","","color","accent","trans","",3,"disabled"],[1,"error"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.Vb(1,"h2",1),r.Ic(2,h,2,0,"span",2),r.Ic(3,p,2,0,"span",2),r.Ub(),r.Vb(4,"button",3),r.cc("click",(function(){return t.close()})),r.Qb(5,"mat-icon",4),r.Ub(),r.Ub(),r.Ic(6,f,13,6,"form",5),r.hc(7,"async")),2&e&&(r.Db(2),r.mc("ngIf",!t.data.workspace),r.Db(1),r.mc("ngIf",t.data.workspace),r.Db(3),r.mc("ngIf",r.ic(7,3,t.errors$)))},directives:[o.i,d.t,b.a,u.a,a.v,a.m,o.f,a.d,a.u,a.k,a.F,a.q,o.c,m.b],pipes:[d.b],styles:["[_nghost-%COMP%]{display:block;width:400px;max-width:100%}"],changeDetection:0}),e})()},ClHV:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={title:"Leave Workspace",body:"Are you sure you want to leave this workspace?",bodyBold:"All resources you've created in the workspace will be transferred to workspace owner.",ok:"Leave"}},QibW:function(e,t,i){"use strict";i.d(t,"a",(function(){return x})),i.d(t,"b",(function(){return _})),i.d(t,"c",(function(){return P}));var n=i("fXoL"),a=i("FKr1"),o=i("8LU1"),s=i("3Pt+"),r=i("R1ws"),c=i("u47x"),l=i("0EQZ");const d=["input"],b=function(){return{enterDuration:150}},u=["*"],m=new n.s("mat-radio-default-options",{providedIn:"root",factory:function(){return{color:"accent"}}});let h=0;const p={provide:s.s,useExisting:Object(n.W)(()=>_),multi:!0};class g{constructor(e,t){this.source=e,this.value=t}}const f=new n.s("MatRadioGroup");let v=(()=>{class e{constructor(e){this._changeDetector=e,this._value=null,this._name="mat-radio-group-"+h++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new n.o}get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(o.c)(e),this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=Object(o.c)(e),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new g(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(n.Pb(n.i))},e.\u0275dir=n.Kb({type:e,inputs:{name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"}}),e})(),_=(()=>{class e extends v{}return e.\u0275fac=function(t){return k(t||e)},e.\u0275dir=n.Kb({type:e,selectors:[["mat-radio-group"]],contentQueries:function(e,t,i){var a;1&e&&n.Ib(i,x,!0),2&e&&n.tc(a=n.dc())&&(t._radios=a)},hostAttrs:["role","radiogroup",1,"mat-radio-group"],exportAs:["matRadioGroup"],features:[n.Cb([p,{provide:f,useExisting:e}]),n.Ab]}),e})();const k=n.Xb(_);class w{constructor(e){this._elementRef=e}}const y=Object(a.v)(Object(a.y)(w));let I=(()=>{class e extends y{constructor(e,t,i,a,s,r,c,l){super(t),this._changeDetector=i,this._focusMonitor=a,this._radioDispatcher=s,this._animationMode=r,this._providerOverride=c,this._uniqueId="mat-radio-"+ ++h,this.id=this._uniqueId,this.change=new n.o,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,l&&(this.tabIndex=Object(o.f)(l,0)),this._removeUniqueSelectionListener=s.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(e){const t=Object(o.c)(e);this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled(Object(o.c)(e))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=Object(o.c)(e)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return(this.id||this._uniqueId)+"-input"}focus(e){this._focusMonitor.focusVia(this._inputElement,"keyboard",e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.name=this.radioGroup.name)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new g(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputChange(e){e.stopPropagation();const t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(n.Pb(v),n.Pb(n.m),n.Pb(n.i),n.Pb(c.h),n.Pb(l.d),n.Pb(String),n.Pb(void 0),n.Pb(String))},e.\u0275dir=n.Kb({type:e,viewQuery:function(e,t){var i;1&e&&n.Qc(d,!0),2&e&&n.tc(i=n.dc())&&(t._inputElement=i.first)},inputs:{id:"id",checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change"},features:[n.Ab]}),e})(),x=(()=>{class e extends I{constructor(e,t,i,n,a,o,s,r){super(e,t,i,n,a,o,s,r)}}return e.\u0275fac=function(t){return new(t||e)(n.Pb(f,8),n.Pb(n.m),n.Pb(n.i),n.Pb(c.h),n.Pb(l.d),n.Pb(r.a,8),n.Pb(m,8),n.ac("tabindex"))},e.\u0275cmp=n.Jb({type:e,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-radio-button"],hostVars:17,hostBindings:function(e,t){1&e&&n.cc("focus",(function(){return t._inputElement.nativeElement.focus()})),2&e&&(n.Eb("tabindex",-1)("id",t.id)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),n.Hb("mat-radio-checked",t.checked)("mat-radio-disabled",t.disabled)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-primary","primary"===t.color)("mat-accent","accent"===t.color)("mat-warn","warn"===t.color))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[n.Ab],ngContentSelectors:u,decls:13,vars:19,consts:[[1,"mat-radio-label"],["label",""],[1,"mat-radio-container"],[1,"mat-radio-outer-circle"],[1,"mat-radio-inner-circle"],["type","radio",1,"mat-radio-input","cdk-visually-hidden",3,"id","checked","disabled","tabIndex","required","change","click"],["input",""],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-radio-label-content"],[2,"display","none"]],template:function(e,t){if(1&e&&(n.lc(),n.Vb(0,"label",0,1),n.Vb(2,"div",2),n.Qb(3,"div",3),n.Qb(4,"div",4),n.Vb(5,"input",5,6),n.cc("change",(function(e){return t._onInputChange(e)}))("click",(function(e){return t._onInputClick(e)})),n.Ub(),n.Vb(7,"div",7),n.Qb(8,"div",8),n.Ub(),n.Ub(),n.Vb(9,"div",9),n.Vb(10,"span",10),n.Kc(11,"\xa0"),n.Ub(),n.kc(12),n.Ub(),n.Ub()),2&e){const e=n.uc(1);n.Eb("for",t.inputId),n.Db(5),n.mc("id",t.inputId)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex)("required",t.required),n.Eb("name",t.name)("value",t.value)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby),n.Db(2),n.mc("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",n.pc(18,b)),n.Db(2),n.Hb("mat-radio-label-before","before"==t.labelPosition)}},directives:[a.p],styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],encapsulation:2,changeDetection:0}),e})(),P=(()=>{class e{}return e.\u0275mod=n.Nb({type:e}),e.\u0275inj=n.Mb({factory:function(t){return new(t||e)},imports:[[a.q,a.h],a.h]}),e})()},fm7k:function(e,t,i){"use strict";i.r(t),i.d(t,"WorkspaceModule",(function(){return w}));var n=i("ofXK"),a=i("/2vq"),o=i("jSir"),s=i("NFeN"),r=i("bTqV"),c=i("0IaG"),l=i("6rvT"),d=i("3Pt+"),b=i("QibW"),u=i("1ImS"),m=i("fXoL");let h=(()=>{class e{}return e.\u0275mod=m.Nb({type:e}),e.\u0275inj=m.Mb({factory:function(t){return new(t||e)},imports:[[n.c,s.b,r.c]]}),e})();var p=i("Qu3c"),g=i("k3xQ"),f=i("bv9b"),v=i("losq"),_=i("0Gur"),k=i("STbY");let w=(()=>{class e{}return e.components={crupdateModal:a.a,manageMembers:o.a},e.\u0275mod=m.Nb({type:e}),e.\u0275inj=m.Mb({factory:function(t){return new(t||e)},imports:[[n.c,d.o,d.E,l.a,u.a,h,g.a,v.a,_.a,s.b,r.c,c.g,b.c,p.b,f.b,k.c]]}),e})()},jSir:function(e,t,i){"use strict";i.d(t,"a",(function(){return K}));var n=i("2Vo4"),a=i("3Pt+"),o=i("0IaG"),s=i("nYR2"),r=function(e){return e.LEFT_WORKSPACE="You have left the workspace.",e.MEMBER_DELETED="Member Deleted.",e.INVITES_SENT="Invites Sent.",e.INVITE_RESENT="Resent invite.",e.ROLE_ASSIGNED="Role Assigned.",e}({}),c=i("/RwR"),l=i("R0Ic"),d=i("ClHV"),b=i("fXoL"),u=i("VxIU"),m=i("i2dy"),h=i("0Ej5"),p=i("twBr"),g=i("QGXG"),f=i("Rd8u"),v=i("NFeN"),_=i("ofXK"),k=i("STbY"),w=i("I3oe"),y=i("bTqV"),I=i("bv9b"),x=i("JxJJ"),P=i("Qu3c"),V=i("zW5C");function C(e,t){1&e&&b.Qb(0,"mat-progress-bar",23)}function D(e,t){if(1&e){const e=b.Wb();b.Vb(0,"div",16),b.Vb(1,"div",17),b.Vb(2,"label",18),b.Kc(3,"Invite by email"),b.Ub(),b.Vb(4,"div",19),b.Qb(5,"chip-input",20),b.Vb(6,"button",21),b.cc("click",(function(){return b.xc(e),b.gc().invitePeople()})),b.hc(7,"async"),b.hc(8,"async"),b.Kc(9,"Invite "),b.Ub(),b.Ub(),b.Ub(),b.Ic(10,C,1,0,"mat-progress-bar",22),b.hc(11,"async"),b.Ub()}if(2&e){const e=b.gc();var i=null;b.mc("@fadeIn",void 0),b.Db(5),b.mc("emailsInput",!0)("formControl",e.peopleToInvite),b.Db(1),b.mc("disabled",b.ic(7,5,e.inviting$)||!(null!=(i=b.ic(8,7,e.peopleToInvite.valueChanges))&&i.length)),b.Db(4),b.mc("ngIf",b.ic(11,9,e.inviting$))}}function R(e,t){1&e&&(b.Vb(0,"li",24),b.Qb(1,"skeleton",25),b.Vb(2,"div",26),b.Qb(3,"skeleton"),b.Qb(4,"skeleton"),b.Ub(),b.Ub())}const O=function(){return[1,2,3]};function U(e,t){1&e&&(b.Vb(0,"ul",12),b.Ic(1,R,5,0,"li",13),b.Ub()),2&e&&(b.mc("@fadeOut",void 0),b.Db(1),b.mc("ngForOf",b.pc(2,O)))}function M(e,t){1&e&&(b.Vb(0,"span",38),b.Kc(1,"(You)"),b.Ub())}function E(e,t){if(1&e){const e=b.Wb();b.Tb(0),b.Kc(1," \xb7 "),b.Vb(2,"button",39),b.cc("click",(function(){b.xc(e);const t=b.gc(2).$implicit;return b.gc().maybeResendInvite(t)})),b.hc(3,"async"),b.Kc(4,"Resend Invite"),b.Ub(),b.Sb()}if(2&e){const e=b.gc(3);b.Db(2),b.mc("disabled",b.ic(3,1,e.inviting$))}}function $(e,t){if(1&e&&(b.Vb(0,"span"),b.Kc(1," \xb7 "),b.Vb(2,"span",34),b.Kc(3,"Invited"),b.Ub(),b.Ic(4,E,5,3,"ng-container",30),b.Ub()),2&e){const e=b.gc(2);b.Db(4),b.mc("ngIf",e.canInvite)}}function G(e,t){if(1&e){const e=b.Wb();b.Vb(0,"button",40),b.cc("click",(function(){b.xc(e);const t=b.gc().$implicit;return b.gc().maybeDeleteMember(t)})),b.hc(1,"async"),b.Qb(2,"mat-icon",3),b.Ub()}if(2&e){const e=b.gc().$implicit,t=b.gc();b.Hb("visually-hidden",e.is_owner||!t.canDelete),b.mc("disabled",b.ic(1,3,t.deleting$))}}function T(e,t){if(1&e){const e=b.Wb();b.Vb(0,"button",41),b.cc("click",(function(){b.xc(e);const t=b.gc().$implicit;return b.gc().maybeLeaveWorkspace(t)})),b.hc(1,"trans"),b.hc(2,"async"),b.Qb(3,"mat-icon",42),b.Ub()}if(2&e){const e=b.gc(2);b.mc("matTooltip",b.ic(1,2,"Leave workspace"))("disabled",b.ic(2,4,e.deleting$))}}const q=function(e){return{member:e}};function L(e,t){if(1&e){const e=b.Wb();b.Vb(0,"li",24),b.cc("@fadeIn.done",(function(){return b.xc(e),b.gc(),b.uc(6).style.overflow="auto"})),b.Qb(1,"img",27),b.Vb(2,"div",26),b.Vb(3,"div",28),b.Vb(4,"span"),b.Kc(5),b.Ub(),b.Kc(6," "),b.Ic(7,M,2,0,"span",29),b.Ic(8,$,5,1,"span",30),b.Ub(),b.Vb(9,"div",31),b.Kc(10),b.Ub(),b.Ub(),b.Vb(11,"div",32),b.Vb(12,"button",33),b.Vb(13,"span",34),b.Kc(14),b.Ub(),b.Qb(15,"mat-icon",35),b.Ub(),b.Ic(16,G,3,5,"button",36),b.Ic(17,T,4,6,"button",37),b.Ub(),b.Ub()}if(2&e){const e=t.$implicit,i=b.gc(),n=b.uc(19);b.mc("@fadeIn",void 0),b.Db(1),b.mc("src",e.avatar,b.Ac),b.Db(4),b.Lc(e.display_name),b.Db(2),b.mc("ngIf",i.currentUser.get("id")===e.id),b.Db(1),b.mc("ngIf","invite"===e.model_type),b.Db(2),b.Lc(e.email),b.Db(2),b.Hb("not-clickable",e.is_owner||!i.canEdit),b.mc("matMenuTriggerFor",n)("matMenuTriggerData",b.qc(13,q,e)),b.Db(2),b.Lc(e.role_name),b.Db(2),b.mc("ngIf",e.is_owner||i.currentUser.get("id")!==e.id),b.Db(1),b.mc("ngIf",!e.is_owner&&i.currentUser.get("id")===e.id)}}function S(e,t){if(1&e){const e=b.Wb();b.Vb(0,"div",44),b.cc("click",(function(){b.xc(e);const i=t.$implicit,n=b.gc().member;return b.gc().changeRole(n,i)})),b.Qb(1,"mat-icon",45),b.Vb(2,"div",46),b.Vb(3,"div",47),b.Kc(4),b.Ub(),b.Vb(5,"div",48),b.Kc(6),b.Ub(),b.Ub(),b.Ub()}if(2&e){const e=t.$implicit,i=b.gc().member;b.Hb("active",i.role_id===e.id),b.Db(1),b.Hb("visually-hidden",i.role_id!==e.id),b.Db(3),b.Lc(e.name),b.Db(2),b.Lc(e.description)}}function j(e,t){if(1&e&&(b.Ic(0,S,7,6,"div",43),b.hc(1,"async")),2&e){const e=b.gc();b.mc("ngForOf",b.ic(1,1,e.workspaceRoles$))}}const F=function(e){return{workspace:e}};let K=(()=>{class e{constructor(e,t,i,o,s,r,c){this.dialogRef=e,this.data=t,this.workspaces=i,this.toast=o,this.valueLists=s,this.currentUser=r,this.modal=c,this.inviting$=new n.a(!1),this.deleting$=new n.a(!1),this.loadingMembers$=new n.a(!1),this.workspaceRoles$=new n.a([]),this.members$=new n.a([]),this.peopleToInvite=new a.i([]),this.canInvite=!1,this.canEdit=!1,this.canDelete=!1}ngOnInit(){this.loadingMembers$.next(!0),this.valueLists.get(["workspaceRoles"]).subscribe(e=>{this.workspaceRoles$.next(e.workspaceRoles)}),this.workspaces.get(this.data.workspace.id).pipe(Object(s.a)(()=>this.loadingMembers$.next(!1))).subscribe(e=>{this.members$.next([...e.workspace.invites,...e.workspace.members]),this.setCurrentUserPermissions()})}close(e){this.dialogRef.close(e)}invitePeople(){const e=this.peopleToInvite.value.filter(e=>!this.members$.value.find(t=>t.email===e));if(!e.length)return this.peopleToInvite.reset(),void this.toast.open("All invited people are already members.");const t={emails:e,roleId:(this.workspaceRoles$.value.find(e=>e.default)||this.workspaceRoles$.value[0]).id};this.inviting$.next(!0),this.workspaces.invitePeople(this.data.workspace.id,t).pipe(Object(s.a)(()=>this.inviting$.next(!1))).subscribe(e=>{this.members$.next([...this.members$.value,...e.invites]),this.peopleToInvite.reset(),this.toast.open(r.INVITES_SENT)})}resendInvite(e){this.inviting$.next(!0),this.workspaces.resendInvite(this.data.workspace.id,e.id).pipe(Object(s.a)(()=>this.inviting$.next(!1))).subscribe(()=>{this.toast.open(r.INVITE_RESENT)})}changeRole(e,t){this.workspaces.changeRole(this.data.workspace.id,e,t.id).subscribe(()=>{this.toast.open(r.ROLE_ASSIGNED);const i=[...this.members$.value],n=i.findIndex(t=>t.id===e.id);i[n].role_name=t.name,i[n].role_id=t.id,this.members$.next(i)})}deleteMember(e){this.deleting$.next(!0),("member"===e.model_type?this.workspaces.deleteMember(this.data.workspace.id,e.id):this.workspaces.deleteInvite(e.id)).pipe(Object(s.a)(()=>this.deleting$.next(!1))).subscribe(()=>{const t=[...this.members$.value],i=t.findIndex(t=>e.id&&t.model_type===e.model_type);t.splice(i,1),this.members$.next(t),e.id===this.currentUser.get("id")?(this.close(),this.toast.open(r.LEFT_WORKSPACE)):this.toast.open(r.MEMBER_DELETED)})}maybeDeleteMember(e){this.modal.show(c.a,{title:"Delete Member",body:"Are you sure you want to delete this member?",bodyBold:"All workspace resources created by this member will be transferred to workspace owner.",ok:"Delete"}).afterClosed().subscribe(t=>{t&&this.deleteMember(e)})}maybeResendInvite(e){this.modal.show(c.a,{title:"Resend Invite",body:"Are you sure you want to send this invite again?",ok:"Resend"}).afterClosed().subscribe(t=>{t&&this.resendInvite(e)})}maybeLeaveWorkspace(e){this.modal.show(c.a,d.a).afterClosed().subscribe(t=>{t&&this.deleteMember(e)})}setCurrentUserPermissions(){const e=this.members$.value.find(e=>e.id===this.currentUser.get("id"));this.canInvite=e.is_owner||!!e.permissions.find(e=>"workspace_members.invite"===e.name),this.canEdit=e.is_owner||!!e.permissions.find(e=>"workspace_members.update"===e.name),this.canDelete=e.is_owner||!!e.permissions.find(e=>"workspace_members.delete"===e.name)}}return e.\u0275fac=function(t){return new(t||e)(b.Pb(o.h),b.Pb(o.a),b.Pb(u.a),b.Pb(m.b),b.Pb(h.a),b.Pb(p.a),b.Pb(g.a))},e.\u0275cmp=b.Jb({type:e,selectors:[["manage-workspace-members-modal"]],decls:21,vars:10,consts:[[1,"modal-header"],["mat-dialog-title","","trans",""],["type","button","tabindex","-1",1,"close-button","no-style",3,"click"],["svgIcon","close"],[2,"overflow","hidden"],["container",""],["class","invite-container",4,"ngIf"],[1,"header"],["svgIcon","people"],["trans","",1,"text",3,"transValues"],[1,"animation-container"],["class","member-list unstyled-list",4,"ngIf"],[1,"member-list","unstyled-list"],["class","member-list-item",4,"ngFor","ngForOf"],["selectRoleMenu","matMenu"],["matMenuContent",""],[1,"invite-container"],[1,"input-container"],["for","workspace-emails-input","trans",""],[1,"input-with-action"],["id","workspace-emails-input","placeholder","Email addresses",3,"emailsInput","formControl"],["type","button","mat-flat-button","","color","accent","trans","",1,"add-tags-button",3,"disabled","click"],["mode","indeterminate","color","accent",4,"ngIf"],["mode","indeterminate","color","accent"],[1,"member-list-item"],["variant","avatar"],[1,"details"],["alt","",3,"src"],[1,"email"],["class","strong","trans","",4,"ngIf"],[4,"ngIf"],[1,"invited_at"],[1,"actions"],["type","button","mat-stroked-button","",1,"role-trigger-button",3,"matMenuTriggerFor","matMenuTriggerData"],["trans",""],["svgIcon","keyboard-arrow-down",1,"dropdown-icon"],["type","button","class","delete-member-button","mat-icon-button","",3,"visually-hidden","disabled","click",4,"ngIf"],["type","button","class","delete-member-button","mat-icon-button","",3,"matTooltip","disabled","click",4,"ngIf"],["trans","",1,"strong"],["type","button","trans","",1,"no-style","resend-invite-button",3,"disabled","click"],["type","button","mat-icon-button","",1,"delete-member-button",3,"disabled","click"],["type","button","mat-icon-button","",1,"delete-member-button",3,"matTooltip","disabled","click"],["svgIcon","exit-to-app"],["class","multiline-mat-menu-item with-icon","mat-menu-item","","trans","",3,"active","click",4,"ngFor","ngForOf"],["mat-menu-item","","trans","",1,"multiline-mat-menu-item","with-icon",3,"click"],["svgIcon","check"],[1,"menu-item-content"],["trans","",1,"title"],["trans","",1,"description"]],template:function(e,t){1&e&&(b.Vb(0,"div",0),b.Vb(1,"h2",1),b.Kc(2,"Manage workspace members"),b.Ub(),b.Vb(3,"button",2),b.cc("click",(function(){return t.close()})),b.Qb(4,"mat-icon",3),b.Ub(),b.Ub(),b.Vb(5,"mat-dialog-content",4,5),b.Ic(7,D,12,11,"div",6),b.Vb(8,"div",7),b.Qb(9,"mat-icon",8),b.Vb(10,"span",9),b.Kc(11,"Members of :workspace"),b.Ub(),b.Ub(),b.Vb(12,"div",10),b.Ic(13,U,2,3,"ul",11),b.hc(14,"async"),b.Vb(15,"ul",12),b.Ic(16,L,18,15,"li",13),b.hc(17,"async"),b.Ub(),b.Ub(),b.Ub(),b.Vb(18,"mat-menu",null,14),b.Ic(20,j,2,3,"ng-template",15),b.Ub()),2&e&&(b.Db(7),b.mc("ngIf",t.canInvite),b.Db(3),b.mc("transValues",b.qc(8,F,t.data.workspace.name)),b.Db(3),b.mc("ngIf",b.ic(14,4,t.loadingMembers$)),b.Db(3),b.mc("ngForOf",b.ic(17,6,t.members$)))},directives:[o.i,f.a,v.a,o.f,_.t,_.s,k.e,k.a,w.a,a.u,a.j,y.b,I.a,x.a,k.d,P.a,k.b],pipes:[_.b,V.a],styles:["[_nghost-%COMP%]{display:block;width:600px;max-width:100%}chip-input[_ngcontent-%COMP%]{flex:1}.invite-container[_ngcontent-%COMP%]{margin-bottom:30px;position:relative}.mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0}.header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:15px}.header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:5px}.header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{vertical-align:middle}.animation-container[_ngcontent-%COMP%]{position:relative}.member-list-item[_ngcontent-%COMP%]{display:flex;margin-bottom:20px}.member-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{flex-shrink:0;width:40px;height:40px;-o-object-fit:cover;object-fit:cover;margin-right:10px;border-radius:4px}.member-list-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{flex:1 1 auto}.member-list-item[_ngcontent-%COMP%]   .delete-member-button[_ngcontent-%COMP%], .member-list-item[_ngcontent-%COMP%]   .invited_at[_ngcontent-%COMP%]{color:var(--be-secondary-text)}.not-clickable[_ngcontent-%COMP%]{pointer-events:none}.not-clickable[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{display:none}.dropdown-icon[_ngcontent-%COMP%]{width:18px;height:18px;line-height:18px}.resend-invite-button[_ngcontent-%COMP%]{color:var(--be-link)}.role-trigger-button[_ngcontent-%COMP%]{margin-right:8px;font-size:1.3rem;font-weight:400}"],data:{animation:[Object(l.m)("fadeIn",[Object(l.l)(":enter",[Object(l.k)({opacity:0}),Object(l.e)("325ms ease-in",Object(l.k)({opacity:1}))])]),Object(l.m)("fadeOut",[Object(l.l)(":leave",[Object(l.k)({opacity:1,position:"absolute",left:"0",right:"0"}),Object(l.e)("325ms ease-out",Object(l.k)({opacity:0}))])])]},changeDetection:0}),e})()}}]);
//# sourceMappingURL=1-es2015.3ad10bbc56b3b6f77e04.js.map