import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,f as r,a as s,d as a,g as t,b as e,r as p,o as h}from"./app-CL8-NTe8.js";const d={};function c(k,i){const n=p("font");return h(),o("div",null,[i[3]||(i[3]=r(`<h2 id="docker-compose文件介绍" tabindex="-1"><a class="header-anchor" href="#docker-compose文件介绍"><span>docker-compose文件介绍</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># docker-compose的版本</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;3.1&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #服务名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  mssql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #容器名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mssql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #镜像名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mcr.microsoft.com/mssql/server:2019-latest</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #总是重启后启动</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;no&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #端口映射（映射端口:真正的service端口)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1433:1433</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #挂载</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./data:/var/lib/rabbitmq</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #环境变量</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ACCEPT_EULA=Y</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #SA用户密码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SA_PASSWORD=MSSQL!123</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose中定义重试策略" tabindex="-1"><a class="header-anchor" href="#docker-compose中定义重试策略"><span>docker-compose中定义重试策略</span></a></h2>`,3)),s("table",null,[s("thead",null,[s("tr",null,[s("th",null,[a(n,{color:"red"},{default:t(()=>i[0]||(i[0]=[e("restart policies")])),_:1})]),s("th",null,[a(n,{color:"red"},{default:t(()=>i[1]||(i[1]=[e("comment")])),_:1})])])]),i[2]||(i[2]=s("tbody",null,[s("tr",null,[s("td",null,[s("strong",null,"“no”")]),s("td",null,"Never attempt to restart a container even if it crashes or stops altogether")]),s("tr",null,[s("td",null,[s("strong",null,"always")]),s("td",null,"If the container stops for any reasons whatsoever, always attempt to restart it")]),s("tr",null,[s("td",null,[s("strong",null,"on-failure")]),s("td",null,"Only attempt to restart the container if it failed because of an error code")]),s("tr",null,[s("td",null,[s("strong",null,"unless-stopped")]),s("td",null,"Always restart the container unless we (the developers) stop it explicitly.")])],-1))]),i[4]||(i[4]=s("blockquote",null,[s("p",null,[e("Note here that the “no” restart policy explicitly has opening and closing quotes. This is because in a YAML file, a plain "),s("em",null,"no"),e(" is interpreted as "),s("em",null,"false"),e(". Hence, to avoid the confusion, if we use the "),s("strong",null,"no restart policy"),e(", we have to always specify it as “no”.")])],-1))])}const y=l(d,[["render",c],["__file","docker-compose.html.vue"]]),g=JSON.parse('{"path":"/guide/Docker/docker-compose.html","title":"","lang":"zh-CN","frontmatter":{"description":"docker-compose文件介绍 docker-compose中定义重试策略 Note here that the “no” restart policy explicitly has opening and closing quotes. This is because in a YAML file, a plain no is interpre...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Notes/guide/Docker/docker-compose.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:description","content":"docker-compose文件介绍 docker-compose中定义重试策略 Note here that the “no” restart policy explicitly has opening and closing quotes. This is because in a YAML file, a plain no is interpre..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-11T11:39:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-11T11:39:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-11T11:39:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"docker-compose文件介绍","slug":"docker-compose文件介绍","link":"#docker-compose文件介绍","children":[]},{"level":2,"title":"docker-compose中定义重试策略","slug":"docker-compose中定义重试策略","link":"#docker-compose中定义重试策略","children":[]}],"git":{"createdTime":1733917170000,"updatedTime":1733917170000,"contributors":[{"name":"cyoukon","username":"cyoukon","email":"z1162289133@gmail.com","commits":1,"url":"https://github.com/cyoukon"}]},"readingTime":{"minutes":0.69,"words":206},"filePathRelative":"guide/Docker/docker-compose.md","localizedDate":"2024年12月11日","autoDesc":true}');export{y as comp,g as data};