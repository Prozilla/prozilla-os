var u=Object.defineProperty,o=(i,e,t)=>e in i?u(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,r=(i,e,t)=>o(i,typeof e!="symbol"?e+"":e,t);class a{constructor(){r(this,"name","command"),r(this,"options",[]),r(this,"manual"),r(this,"requireArgs"),r(this,"requireOptions"),r(this,"execute",()=>{})}setName(e){var t;return this.name=e,(t=this.manual)!=null&&t.usage||(this.manual||(this.manual={}),this.manual.usage=e),this}setExecute(e){return this.execute=e,this}setRequireArgs(e){return this.requireArgs=e,this}setRequireOptions(e){return this.requireOptions=e,this}setManual({purpose:e,usage:t,description:s,options:n}){return this.manual={purpose:e,usage:t,description:s,options:n},this}addOption({short:e,long:t,isInput:s}){return this.options.push({short:e,long:t,isInput:s}),this}getOption(e){let t=null;return this.options.forEach(s=>{(s.short===e||s.long===e)&&(t=s)}),t}}export{a as o};