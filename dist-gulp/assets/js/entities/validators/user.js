define({validation:{role:{required:!0,oneOf:["user","admin"]},"user.first_name":{required:!0,msg:"First Name is required"},"user.last_name":{required:!0,msg:"Last Name is required"},"user.email":[{required:!0,msg:"Email address is required"},{pattern:"email",msg:"You must enter a valid email address"}],password:[{required:function(e,r,s){return!Boolean(s.id)&&"professional client"!==s.role},msg:"Password is required"},{equalTo:"passwordRepeat",msg:"Your passwords do not match"}],expertise:{minExpertise:1,msg:"You must choose at least one field of expertise"},language:{minLanguages:1,msg:"You must choose at least one language"},linkedIn:{required:!1,pattern:"url",msg:"Only valid URLs are accepted"},twitter:{required:!1,pattern:"url",msg:"Only valid URLs are accepted"},webPage:{required:!1,pattern:"url",msg:"Only valid URLs are accepted"},phone:[{required:function(e,r,s){return"professional client"===s.role}},{pattern:/^(\s)*\+?[0-9\s]+$/,msg:"A valid phone number is required"}],someAttribute:"customValidator"},customValidator:function(e,r,s){return"content creator"===this.get("role")&&this.has("writer")&&!this.get("writer")&&this.has("editor")&&!this.get("editor")&&this.has("proofReader")&&!this.get("proofReader")?"You must choose at least one role":void 0}});