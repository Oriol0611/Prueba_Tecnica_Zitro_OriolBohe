System.register("chunks:///_virtual/pausemenu.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,s,i,u,a,o,r,c,p,l,d,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,s=e.defineProperty,i=e.assertThisInitialized,u=e.initializerDefineProperty},function(e){a=e.cclegacy,o=e._decorator,r=e.Node,c=e.director,p=e.input,l=e.Input,d=e.KeyCode,h=e.Component}],execute:function(){var f,m,y,P,v;a._RF.push({},"445d5BbRGFC6JiX7Xx86/EN","pausemenu",void 0);var I=o.ccclass,_=o.property;e("pausemenu",(f=I("pausemenu"),m=_(r),f((v=t((P=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,s(i(t),"GameIsPaused",!1),u(i(t),"pauseMenu",v,i(t)),t}n(t,e);var a=t.prototype;return a.Yes_Clicked=function(){c.loadScene("mainmenu"),this.GameIsPaused=!1},a.No_Clicked=function(){this.pauseMenu.active=!1,this.GameIsPaused=!1},a.start=function(){p.on(l.EventType.KEY_DOWN,this.onKeyDown,this)},a.onKeyDown=function(e){switch(e.keyCode){case d.ESCAPE:this.GameIsPaused?this.Resume():this.Pause()}},a.Resume=function(){this.pauseMenu.active=!1,this.GameIsPaused=!1},a.Pause=function(){this.pauseMenu.active=!0,this.GameIsPaused=!0},t}(h)).prototype,"pauseMenu",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=P))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/cameracontrol.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,i,o,n,a,c,l,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,c=e.Node,l=e.misc,s=e.Component}],execute:function(){var u,p,y,_,d,f,h,b,m;n._RF.push({},"5bce3+YcdNLNrThYM6uSXi0","cameracontrol",void 0);var B=a.ccclass,P=a.property;e("cameracontrol",(u=B("cameracontrol"),p=P({type:c}),y=P({type:c}),_=P({type:c}),u((h=t((f=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,i(o(t),"Player_Node",h,o(t)),i(o(t),"BG_Layer_Back",b,o(t)),i(o(t),"BG_Layer_Mid",m,o(t)),t}return r(t,e),t.prototype.update=function(e){var t=this.Player_Node.getPosition();t.y=l.clampf(t.y,0,220);var r=this.node.getPosition();r.lerp(t,.1,r),this.node.setPosition(r),this.BG_Layer_Back.setPosition(r.x/2,r.y/2),this.BG_Layer_Mid.setPosition(r.x/4,r.y/4)},t}(s)).prototype,"Player_Node",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=t(f.prototype,"BG_Layer_Back",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(f.prototype,"BG_Layer_Mid",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/playerController.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,n,t,o,r,s,c,a,l,p,u,h,d,y,_,f,C;return{setters:[function(e){i=e.applyDecoratedDescriptor,n=e.inheritsLoose,t=e.initializerDefineProperty,o=e.assertThisInitialized,r=e.defineProperty},function(e){s=e.cclegacy,c=e._decorator,a=e.Label,l=e.Animation,p=e.input,u=e.Input,h=e.RigidBody2D,d=e.BoxCollider2D,y=e.Contact2DType,_=e.Vec2,f=e.KeyCode,C=e.Component}],execute:function(){var m,b,A,g,T,R,E;s._RF.push({},"76c54AfsBdPQ4t2He69w6jI","playerController",void 0);var O=c.ccclass,w=c.property;e("playerController",(m=O("playerController"),b=w({type:a}),A=w({type:l}),m((R=i((T=function(e){function i(){for(var i,n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return i=e.call.apply(e,[this].concat(s))||this,t(o(i),"scoreLabel",R,o(i)),r(o(i),"score",0),r(o(i),"collider",void 0),r(o(i),"rigidbody",void 0),r(o(i),"direction",0),r(o(i),"walk_force",1e3),r(o(i),"jump_force",1e4),r(o(i),"On_The_Ground",!1),t(o(i),"runAnim",E,o(i)),i}n(i,e);var s=i.prototype;return s.start=function(){p.on(u.EventType.KEY_DOWN,this.onKeyDown,this),p.on(u.EventType.KEY_UP,this.onKeyUp,this),this.rigidbody=this.node.getComponent(h),this.collider=this.node.getComponent(d),this.collider&&this.collider.on(y.BEGIN_CONTACT,this.onBeginContact,this)},s.update=function(e){this.rigidbody.applyForceToCenter(new _(this.direction*this.walk_force,0),!0)},s.onBeginContact=function(e,i,n){"coin<BoxCollider2D>"==i.name&&(i.node.getComponent("coin").destroyCoin(),this.score++,this.scoreLabel.string="Score: "+this.score),i.name&&2===e.tag&&(this.On_The_Ground=!0)},s.onKeyDown=function(e){switch(e.keyCode){case f.KEY_A:case f.ARROW_LEFT:if(this.On_The_Ground){this.direction=-1,this.runAnim.play("player_left");break}case f.KEY_D:case f.ARROW_RIGHT:if(this.On_The_Ground){this.direction=1,this.runAnim.play("player_run");break}case f.SPACE:case f.KEY_W:case f.ARROW_UP:if(this.On_The_Ground){this.rigidbody.applyForceToCenter(new _(0,this.jump_force),!0),this.runAnim.play("player_jump"),this.On_The_Ground=!1;break}}},s.onKeyUp=function(e){switch(e.keyCode){case f.KEY_A:case f.ARROW_LEFT:this.direction=0,this.runAnim.play("player_idle");break;case f.KEY_D:case f.ARROW_RIGHT:this.direction=0,this.runAnim.play("player_idle")}},i}(C)).prototype,"scoreLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=i(T.prototype,"runAnim",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=T))||g));s._RF.pop()}}}));

System.register("chunks:///_virtual/changescene.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,c,o,t,r;return{setters:[function(e){n=e.inheritsLoose},function(e){c=e.cclegacy,o=e._decorator,t=e.director,r=e.Component}],execute:function(){var s;c._RF.push({},"87f46s1J6pDYbt2+7KFHrp/","changescene",void 0);var a=o.ccclass;o.property,e("changescene",a("changescene")(s=function(e){function c(){return e.apply(this,arguments)||this}n(c,e);var o=c.prototype;return o.Load_SceneA=function(){t.loadScene("sceneA")},o.Load_SceneB=function(){t.loadScene("sceneB")},o.Load_SceneC=function(){t.loadScene("sceneC")},o.start=function(){t.preloadScene("sceneA",(function(){console.log("Scene A preloaded")})),t.preloadScene("sceneB",(function(){console.log("Scene B preloaded")})),t.preloadScene("sceneC",(function(){console.log("Scene C preloaded")}))},c}(r))||s);c._RF.pop()}}}));

System.register("chunks:///_virtual/coin.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,e,r;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,r=t.Component}],execute:function(){var i;o._RF.push({},"9d92fh2yg5IuLnYakU9BbQX","coin",void 0);var c=e.ccclass;e.property,t("coin",c("coin")(i=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var e=o.prototype;return e.start=function(){},e.destroyCoin=function(){var t=this;setTimeout((function(){t.remove()}),1)},e.remove=function(){this.node.destroy()},o}(r))||i);o._RF.pop()}}}));

System.register("chunks:///_virtual/botinnumber.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,o,r;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var u;e._RF.push({},"e0a71RExUFE2KoWESBpozPK","botinnumber",void 0);var i=o.ccclass;o.property,t("botinnumber",i("botinnumber")(u=function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){},e}(r))||u);e._RF.pop()}}}));

System.register("chunks:///_virtual/arrowanimation.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(r){"use strict";var i,t,n,a,e,o,c,s,u;return{setters:[function(r){i=r.applyDecoratedDescriptor,t=r.inheritsLoose,n=r.initializerDefineProperty,a=r.assertThisInitialized,e=r.defineProperty},function(r){o=r.cclegacy,c=r._decorator,s=r.Animation,u=r.Component}],execute:function(){var l,p,f,y,h;o._RF.push({},"f6285ysAGdA9aGefGDSq5MI","arrowanimation",void 0);var m=c.ccclass,w=c.property;r("arrowanimation",(l=m("arrowanimation"),p=w({type:s}),l((h=i((y=function(r){function i(){for(var i,t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return i=r.call.apply(r,[this].concat(o))||this,n(a(i),"backAnim",h,a(i)),e(a(i),"isBack",!1),i}t(i,r);var o=i.prototype;return o.Play_Arrow=function(){this.isBack?this.Resume_Arrow():this.Back_Arrow()},o.Resume_Arrow=function(){this.backAnim.play("arrowidle"),this.isBack=!1},o.Back_Arrow=function(){this.backAnim.play("arrowback"),this.isBack=!0},o.start=function(){this.backAnim.play("arrowidle")},o.update=function(r){},i}(u)).prototype,"backAnim",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=y))||f));o._RF.pop()}}}));

System.register("chunks:///_virtual/emoji.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,n,r;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,r=t.Component}],execute:function(){var c;o._RF.push({},"f6333rYj6tEgZsXKZnXzorw","emoji",void 0);var s=n.ccclass;n.property,t("NewComponent",s("NewComponent")(c=function(t){function o(){return t.apply(this,arguments)||this}return e(o,t),o.prototype.start=function(){},o}(r))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./pausemenu.ts","./cameracontrol.ts","./playerController.ts","./changescene.ts","./coin.ts","./botinnumber.ts","./arrowanimation.ts","./emoji.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});