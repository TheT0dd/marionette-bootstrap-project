define(["app","common/utility","entities/validators/user","backbone.validation"],function(e,t,r){return e.module("Entities",function(e,t,n,i,o,s){e.User=n.Model.extend({urlRoot:t.request("setting","RootURL")+"/users"}),e.LoggedUser=e.User.extend({sync:function(e,t,r){return r.url="read"===e?t.url()+"/loggedUser":t.url(),n.sync(e,t,r)}}),s.extend(e.User.prototype,n.Validation.mixin,r,{defaults:{}});var u={getUserEntity:function(t){var r=o.Deferred();if(t instanceof e.User)r.resolveWith(null,[t]);else{var t=new e.User({id:t}),n=t.fetch();n.done(function(){r.resolveWith(n,[t])}),n.fail(function(){r.rejectWith(n,arguments)})}return r.promise()},getLoggedUserEntity:function(){var t=new e.LoggedUser,r=o.Deferred(),n=t.fetch();return n.done(function(){r.resolveWith(n,[t])}),n.fail(function(){r.rejectWith(n,arguments)}),r.promise()},getEmptyUserEntity:function(){return new e.User},createModelFromObject:function(t){return new e.User(t)}};t.reqres.setHandler("user:entity",function(e){return u.getUserEntity(e)}),t.reqres.setHandler("loggedUser:entity",function(){return u.getLoggedUserEntity()}),t.reqres.setHandler("empty:user:entity",function(){return u.getEmptyUserEntity()}),t.reqres.setHandler("user:model:from:object",function(e){return u.createModelFromObject(e)})}),e.Entities.User});