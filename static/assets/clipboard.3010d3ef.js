import{a as u}from"./index.6f926540.js";function r(a){const t=new FormData(a),c=[];for(const[l,n]of t)c.push({name:l,value:n});return c}function h(a,t,c){let l={},n=r(a);return a.querySelectorAll("input[type=checkbox]:checked").forEach(e=>{n.push({name:e.name,value:!0})}),a.querySelectorAll("input[type=checkbox]:not(:checked)").forEach(e=>{n.push({name:e.name,value:!1})}),n.map(e=>{if(c)if(e.value!==null&&e.value!=="")l[e.name]=e.value;else{let o=a.querySelector(`[name='${e.name}']`);t[o.name]!==o.value&&(l[e.name]=e.value)}else l[e.name]=e.value}),l}function m(a){const t=new u(a,{title:"Copied!",trigger:"manual"});navigator.clipboard.writeText(a.value).then(()=>{t.show(),setTimeout(()=>{t.hide()},1500)})}export{m as c,h as s};
