var g=Object.defineProperty;var y=(i,e,s)=>e in i?g(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var o=(i,e,s)=>y(i,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(t){if(t.ep)return;t.ep=!0;const c=s(t);fetch(t.href,c)}})();class u{constructor(e="",s="",n=!1){o(this,"_id");o(this,"_item");o(this,"_checked");this._id=e,this._item=s,this._checked=n}get id(){return this._id}set id(e){this._id=e}get item(){return this._item}set item(e){this._item=e}get checked(){return this._checked}set checked(e){this._checked=e}}const h=new u("1","Buy milk",!1);console.log(h.id);h.id="2";console.log(h.id);const d=class d{constructor(e=[]){this._list=e}get list(){return this._list}set list(e){this._list=e}load(){const e=localStorage.getItem("list");if(typeof e!="string")return;JSON.parse(e).forEach(n=>{const t=new u(n._id,n._item,n._checked);d.instance.addItem(t)})}save(){localStorage.setItem("list",JSON.stringify(this._list))}clearList(){this._list=[],this.save()}addItem(e){this._list.push(e),this.save()}removeItem(e){const s=this._list.filter(n=>n.id!==e);this._list=s,this.save()}};o(d,"instance",new d);let a=d;const l=class l{constructor(){o(this,"ul");this.ul=document.getElementById("listItems")}clear(){l.instance.ul.innerHTML=""}render(e){this.clear(),e.list.forEach(s=>{const n=document.createElement("li");n.className="item";const t=document.createElement("input");t.type="checkbox",t.id=s.id,t.checked=s.checked,n.append(t),t.addEventListener("change",()=>{s.checked=!s.checked,e.save()});const c=document.createElement("label");c.htmlFor=s.id,c.textContent=s.item,n.append(c);const r=document.createElement("button");r.className="button",r.textContent="X",n.append(r),r.addEventListener("click",()=>{e.removeItem(s.id),this.render(e)}),this.ul.append(n)})}};o(l,"instance",new l);let m=l;const I=()=>{const i=a.instance,e=m.instance;document.getElementById("itemEntryForm").addEventListener("submit",t=>{t.preventDefault();const r=document.getElementById("newItem").value.trim();if(!r.length)return;const p=i.list.length?Number(i.list[i.list.length-1].id)+1:1,f=new u(p.toString(),r);i.addItem(f),e.render(i)}),document.getElementById("clearItemsButton").addEventListener("click",()=>{i.clearList(),e.clear()}),i.load(),e.render(i)};document.addEventListener("DOMContentLoaded",I);
