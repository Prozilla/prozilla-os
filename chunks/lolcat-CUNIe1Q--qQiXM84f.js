import{c as d,A as e}from"../index.js";import{o as j}from"./command-nBL1aO7T-CliNWZCP.js";const n=5,c=2,g=[e.fg.red,e.fg.yellow,e.fg.green,e.fg.cyan,e.fg.blue,e.fg.magenta],C=new j().setManual({purpose:"Display text with a rainbow effect"}).setExecute(function(I,i){const{rawInputValue:a,timestamp:p}=i;if(a==null)return;let o=d(a).split(`
`);const m=p/100;return o=o.map((l,h)=>{const r=[],f=h+m,s=n-c*f%n;let w=Math.floor(f/(n/c));const u=(t,b)=>{const x=l.substring(t,b),y=g[w++%g.length];r.push(y+x)};s>0&&u(0,s);for(let t=s;t<l.length;t+=n+1)u(t,t+n+1);return l.length===0?"":r.join("")}),o.join(`
`)});export{C as lolcat};