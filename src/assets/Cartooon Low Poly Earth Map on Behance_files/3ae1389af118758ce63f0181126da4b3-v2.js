"use strict";(self.webpackChunksketchfab=self.webpackChunksketchfab||[]).push([[2417],{"4fae":(t,e,n)=>{function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function u(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function a(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function c(t,e,n){return Object.keys(t).reduce((function(e,r){var i=""+r;return e.has(i)?e.set(i,n(e.get(i),t[i])):e}),e)}n.d(e,{Fv:()=>_,cY:()=>w,fK:()=>z});var f=function(){function t(t,e,n){if(void 0===e&&(e={}),void 0===n&&(n={}),!t||"string"!=typeof t)throw new Error("Expected a string key for Entity, but found "+t+".");var r=n,i=r.idAttribute,u=void 0===i?"id":i,c=r.mergeStrategy,f=void 0===c?function(t,e){return o({},t,e)}:c,s=r.processStrategy,h=void 0===s?function(t){return o({},t)}:s,l=r.fallbackStrategy,y=void 0===l?function(t,e){}:l;this._key=t,this._getId="function"==typeof u?u:function(t){return function(e){return a(e)?e.get(t):e[t]}}(u),this._idAttribute=u,this._mergeStrategy=f,this._processStrategy=h,this._fallbackStrategy=y,this.define(e)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce((function(e,n){var r,i=t[n];return o({},e,((r={})[n]=i,r))}),this.schema||{})},e.getId=function(t,e,n){return this._getId(t,e,n)},e.merge=function(t,e){return this._mergeStrategy(t,e)},e.fallback=function(t,e){return this._fallbackStrategy(t,e)},e.normalize=function(t,e,n,r,i,o){var u=this,a=this.getId(t,e,n),c=this.key;if(c in o||(o[c]={}),a in o[c]||(o[c][a]=[]),o[c][a].some((function(e){return e===t})))return a;o[c][a].push(t);var f=this._processStrategy(t,e,n);return Object.keys(this.schema).forEach((function(e){if(f.hasOwnProperty(e)&&"object"==typeof f[e]){var n=u.schema[e],a="function"==typeof n?n(t):n;f[e]=r(f[e],f,e,a,i,o)}})),i(this,f,t,e,n),a},e.denormalize=function(t,e){var n=this;return a(t)?c(this.schema,t,e):(Object.keys(this.schema).forEach((function(r){if(t.hasOwnProperty(r)){var i=n.schema[r];t[r]=e(t[r],i)}})),t)},i(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),s=function(){function t(t,e){e&&(this._schemaAttribute="string"==typeof e?function(t){return t[e]}:e),this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=t},e.getSchemaAttribute=function(t,e,n){return!this.isSingleSchema&&this._schemaAttribute(t,e,n)},e.inferSchema=function(t,e,n){if(this.isSingleSchema)return this.schema;var r=this.getSchemaAttribute(t,e,n);return this.schema[r]},e.normalizeValue=function(t,e,n,r,i,o){var u=this.inferSchema(t,e,n);if(!u)return t;var a=r(t,e,n,u,i,o);return this.isSingleSchema||null==a?a:{id:a,schema:this.getSchemaAttribute(t,e,n)}},e.denormalizeValue=function(t,e){var n=a(t)?t.get("schema"):t.schema;return this.isSingleSchema||n?e((this.isSingleSchema?void 0:a(t)?t.get("id"):t.id)||t,this.isSingleSchema?this.schema:this.schema[n]):t},i(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),h=function(t){function e(e,n){if(!n)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return t.call(this,e,n)||this}u(e,t);var n=e.prototype;return n.normalize=function(t,e,n,r,i,o){return this.normalizeValue(t,e,n,r,i,o)},n.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(s),l=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var n=e.prototype;return n.normalize=function(t,e,n,r,i,u){var a=this;return Object.keys(t).reduce((function(e,n,c){var f,s=t[n];return null!=s?o({},e,((f={})[n]=a.normalizeValue(s,t,n,r,i,u),f)):e}),{})},n.denormalize=function(t,e){var n=this;return Object.keys(t).reduce((function(r,i){var u,a=t[i];return o({},r,((u={})[i]=n.denormalizeValue(a,e),u))}),{})},e}(s),y=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},m=function(t){return Array.isArray(t)?t:Object.keys(t).map((function(e){return t[e]}))},p=function(t,e,n,r,i,o,u){return t=y(t),m(e).map((function(e,a){return i(e,n,r,t,o,u)}))},d=function(t,e,n){return t=y(t),e&&e.map?e.map((function(e){return n(e,t)})):e},v=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var n=e.prototype;return n.normalize=function(t,e,n,r,i,o){var u=this;return m(t).map((function(t,a){return u.normalizeValue(t,e,n,r,i,o)})).filter((function(t){return null!=t}))},n.denormalize=function(t,e){var n=this;return t&&t.map?t.map((function(t){return n.denormalizeValue(t,e)})):t},e}(s),b=function(t,e,n,r,i,u,a){var c=o({},e);return Object.keys(t).forEach((function(n){var r=t[n],o="function"==typeof r?r(e):r,f=i(e[n],e,n,o,u,a);null==f?delete c[n]:c[n]=f})),c},g=function(t,e,n){if(a(e))return c(t,e,n);var r=o({},e);return Object.keys(t).forEach((function(e){null!=r[e]&&(r[e]=n(r[e],t[e]))})),r},k=function(){function t(t){this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce((function(e,n){var r,i=t[n];return o({},e,((r={})[n]=i,r))}),this.schema||{})},e.normalize=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return b.apply(void 0,[this.schema].concat(e))},e.denormalize=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return g.apply(void 0,[this.schema].concat(e))},t}(),S=function t(e,n,r,i,o,u){return"object"==typeof e&&e?"object"!=typeof i||i.normalize&&"function"==typeof i.normalize?i.normalize(e,n,r,t,o,u):(Array.isArray(i)?p:b)(i,e,n,r,t,o,u):e},z={Array:v,Entity:f,Object:k,Union:h,Values:l},_=function(t,e){if(!t||"object"!=typeof t)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===t?"null":typeof t)+'".');var n={},r=function(t){return function(e,n,r,i,o){var u=e.key,a=e.getId(r,i,o);u in t||(t[u]={});var c=t[u][a];t[u][a]=c?e.merge(c,n):n}}(n);return{entities:n,result:S(t,t,null,e,r,{})}},j=function(t){var e={},n=A(t);return function t(r,i){return"object"!=typeof i||i.denormalize&&"function"==typeof i.denormalize?null==r?r:i instanceof f?function(t,e,n,r,i){var u=r(t,e);if(void 0===u&&e instanceof f&&(u=e.fallback(t,e)),"object"!=typeof u||null===u)return u;if(i[e.key]||(i[e.key]={}),!i[e.key][t]){var c=a(u)?u:o({},u);i[e.key][t]=c,i[e.key][t]=e.denormalize(c,n)}return i[e.key][t]}(r,i,t,n,e):i.denormalize(r,t):(Array.isArray(i)?d:g)(i,r,t)}},A=function(t){var e=a(t);return function(n,r){var i=r.key;return"object"==typeof n?n:e?t.getIn([i,n.toString()]):t[i]&&t[i][n]}},w=function(t,e,n){if(void 0!==t)return j(n)(t,e)}}}]);