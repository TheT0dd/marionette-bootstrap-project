define(["backbone.validation"],function(){_.extend(Backbone.Validation.validators,{urlArray:function(n,a,t,i){if(n&&t)for(var e=Backbone.Validation.patterns.url,o=0,r=n.length;r>o;o++)if(!e.test(n[o]))return a+" should contain value URLs"}})});