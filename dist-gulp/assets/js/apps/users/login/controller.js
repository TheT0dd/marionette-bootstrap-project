define(["app","apps/users/login/view","common/authenticate","cache/cache","common/notify"],function(o,n,e){return o.module("UsersApp.Login",function(o,i,r,t,c,a){o.Controller={showLogin:function(){var o=new n.Login;o.on("submit",function(n){console.log(n),o.triggerMethod("clear:validation:errors"),o.triggerMethod("show:preloader");var i=e.login(n);i.done(function(o){}),i.fail(function(){})}),o.on("cancel",function(){i.showLanding()}),i.rootView.showChildView("main",o)}}}),o.UsersApp.Login.Controller});