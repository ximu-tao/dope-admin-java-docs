import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DkvLLw5I.js";const g=JSON.parse('{"title":"服务","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/service.md","filePath":"src/guide/service.md","lastUpdated":null}'),e={name:"src/guide/service.md"},l=n(`<h1 id="服务" tabindex="-1">服务 <a class="header-anchor" href="#服务" aria-label="Permalink to &quot;服务&quot;">​</a></h1><p>处理业务逻辑的代码应该被封装在服务中。</p><h2 id="crud" tabindex="-1">Crud <a class="header-anchor" href="#crud" aria-label="Permalink to &quot;Crud&quot;">​</a></h2><p><code>BaseService</code>中集成了常用的 CRUD 操作，可以参考<code>BaseService</code>的实现。</p><h2 id="修改前后" tabindex="-1">修改前后 <a class="header-anchor" href="#修改前后" aria-label="Permalink to &quot;修改前后&quot;">​</a></h2><p>可以重写<code>modifyBefore</code>和<code>modifyAfter</code>方法，在修改数据之前或之后做一些处理</p><ul><li>修改之前</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 修改之前</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> requestParams</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 请求参数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> t</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             对应实体</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> type</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          修改类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> modifyBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(JSONObject requestParams, T t, ModifyEnum type) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>修改之后</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 修改之后</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> requestParams</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 请求参数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> t</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             对应实体</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> type</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          修改类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> modifyAfter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(JSONObject requestParams, T t, ModifyEnum type) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,10),p=[l];function t(h,k,r,d,c,o){return a(),i("div",null,p)}const y=s(e,[["render",t]]);export{g as __pageData,y as default};
