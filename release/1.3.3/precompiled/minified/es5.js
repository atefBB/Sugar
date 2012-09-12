F(o,m,m,{keys:function(a){var b=[];if(!la(a)&&!E(a)&&!A(a))throw new TypeError("Object required");H(a,function(c){b.push(c)});return b}});
function wa(a,b,c,d){var e=a.length,f=d==-1,g=f?e-1:0;c=isNaN(c)?g:parseInt(c>>0);if(c<0)c=e+c;if(!f&&c<0||f&&c>=e)c=g;for(;f&&c>=0||!f&&c<e;){if(a[c]===b)return c;c+=d}return-1}function xa(a,b,c,d){var e=a.length,f=0,g=J(c);ya(b);if(e==0&&!g)throw new TypeError("Reduce called on empty array with no initial value");else if(g)c=c;else{c=a[d?e-1:f];f++}for(;f<e;){g=d?e-f-1:f;if(g in a)c=b(c,a[g],g,a);f++}return c}function ya(a){if(!a||!a.call)throw new TypeError("Callback is not callable");}
function za(a){if(a.length===0)throw new TypeError("First argument must be defined");}F(p,m,m,{isArray:function(a){return fa(a)}});
F(p,k,m,{every:function(a,b){var c=this.length,d=0;for(za(arguments);d<c;){if(d in this&&!a.call(b,this[d],d,this))return m;d++}return k},some:function(a,b){var c=this.length,d=0;for(za(arguments);d<c;){if(d in this&&a.call(b,this[d],d,this))return k;d++}return m},map:function(a,b){var c=this.length,d=0,e=Array(c);for(za(arguments);d<c;){if(d in this)e[d]=a.call(b,this[d],d,this);d++}return e},filter:function(a,b){var c=this.length,d=0,e=[];for(za(arguments);d<c;){d in this&&a.call(b,this[d],d,this)&&
e.push(this[d]);d++}return e},indexOf:function(a,b){if(D(this))return this.indexOf(a,b);return wa(this,a,b,1)},lastIndexOf:function(a,b){if(D(this))return this.lastIndexOf(a,b);return wa(this,a,b,-1)},forEach:function(a,b){var c=this.length,d=0;for(ya(a);d<c;){d in this&&a.call(b,this[d],d,this);d++}},reduce:function(a,b){return xa(this,a,b)},reduceRight:function(a,b){return xa(this,a,b,k)}});
F(Function,k,m,{bind:function(a){var b=this,c=G(arguments).slice(1),d;if(!A(this))throw new TypeError("Function.prototype.bind called on a non-function");d=function(){return b.apply(b.prototype&&this instanceof b?this:a,c.concat(G(arguments)))};d.prototype=this.prototype;return d}});F(s,m,m,{now:function(){return(new s).getTime()}});
(function(){var a=qa().match(/^\s+$/);try{t.prototype.trim.call([1])}catch(b){a=m}F(t,k,!a,{trim:function(){return this.toString().trimLeft().trimRight()},trimLeft:function(){return this.replace(q("^["+qa()+"]+"),"")},trimRight:function(){return this.replace(q("["+qa()+"]+$"),"")}})})();
(function(){var a=new s(s.UTC(1999,11,31));a=a.toISOString&&a.toISOString()==="1999-12-31T00:00:00.000Z";I(s,k,!a,"toISOString,toJSON",function(b,c){b[c]=function(){return R(this.getUTCFullYear(),4)+"-"+R(this.getUTCMonth()+1,2)+"-"+R(this.getUTCDate(),2)+"T"+R(this.getUTCHours(),2)+":"+R(this.getUTCMinutes(),2)+":"+R(this.getUTCSeconds(),2)+"."+R(this.getUTCMilliseconds(),3)+"Z"}})})();
