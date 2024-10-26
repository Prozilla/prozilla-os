import{_ as a,c as t,a3 as l,o as r}from"./chunks/framework.BAnOA2-A.js";const g=JSON.parse('{"title":"Class VirtualBase extends EventEmitter","description":"","frontmatter":{"outline":"deep","package":"@prozilla-os/core","head":[["meta",{"name":"og:title","content":"Class VirtualBase extends EventEmitter | ProzillaOS Docs"}],["meta",{"name":"twitter:title","content":"Class VirtualBase extends EventEmitter | ProzillaOS Docs"}],["meta",{"name":"og:description","content":"Documentation for ProzillaOS and its packages."}],["meta",{"name":"twitter:description","content":"Documentation for ProzillaOS and its packages."}],["link",{"rel":"canonical","href":"https://os.prozilla.dev/docs/reference/core/classes/virtual-drive/virtual-base"}],["meta",{"name":"og:url","content":"https://os.prozilla.dev/docs/reference/core/classes/virtual-drive/virtual-base"}],["meta",{"name":"twitter:url","content":"https://os.prozilla.dev/docs/reference/core/classes/virtual-drive/virtual-base"}],["meta",{"name":"og:locale","content":"en_US"}],["meta",{"name":"og:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"twitter:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}]]},"headers":[],"relativePath":"reference/core/classes/virtual-drive/virtual-base.md","filePath":"reference/core/classes/virtual-drive/virtual-base.md"}'),o={name:"reference/core/classes/virtual-drive/virtual-base.md"};function i(s,e,n,d,u,c){return r(),t("div",null,e[0]||(e[0]=[l('<h1 id="class-virtualbase-extends-eventemitter" tabindex="-1">Class <a href="https://github.com/prozilla-os/ProzillaOS/blob/main/packages/core/src/features/virtual-drive/virtualBase.ts" target="_blank" rel="noreferrer"><code>VirtualBase</code></a> extends <a href="./../../../shared/classes/event-emitter"><code>EventEmitter</code></a> <a class="header-anchor" href="#class-virtualbase-extends-eventemitter" aria-label="Permalink to &quot;Class [`VirtualBase`](https://github.com/prozilla-os/ProzillaOS/blob/main/packages/core/src/features/virtual-drive/virtualBase.ts) extends [`EventEmitter`](../../../shared/classes/event-emitter)&quot;">​</a></h1><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><blockquote><p><code>new VirtualBase(name)</code></p></blockquote><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ul><li><strong>name</strong><ul><li><strong>Type:</strong> <code>string</code></li></ul></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><h3 id="alias" tabindex="-1">alias <a class="header-anchor" href="#alias" aria-label="Permalink to &quot;alias&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string | undefined</code></li></ul><h3 id="parent" tabindex="-1">parent <a class="header-anchor" href="#parent" aria-label="Permalink to &quot;parent&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>VirtualFolder | undefined</code></li></ul><div class="note custom-block github-alert"><p class="custom-block-title">References</p><p></p><ul><li><a href="./virtual-folder">VirtualFolder</a></li></ul></div><h3 id="isprotected" tabindex="-1">isProtected <a class="header-anchor" href="#isprotected" aria-label="Permalink to &quot;isProtected&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>boolean | undefined</code></li></ul><h3 id="iconurl" tabindex="-1">iconUrl <a class="header-anchor" href="#iconurl" aria-label="Permalink to &quot;iconUrl&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string | undefined</code></li></ul><h3 id="linkedfile" tabindex="-1">linkedFile <a class="header-anchor" href="#linkedfile" aria-label="Permalink to &quot;linkedFile&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>VirtualFile | undefined</code></li></ul><h3 id="linkedfolder" tabindex="-1">linkedFolder <a class="header-anchor" href="#linkedfolder" aria-label="Permalink to &quot;linkedFolder&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>VirtualFolder | undefined</code></li></ul><div class="note custom-block github-alert"><p class="custom-block-title">References</p><p></p><ul><li><a href="./virtual-folder">VirtualFolder</a></li></ul></div><h3 id="editedbyuser" tabindex="-1">editedByUser <a class="header-anchor" href="#editedbyuser" aria-label="Permalink to &quot;editedByUser&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>boolean | undefined</code></li></ul><h3 id="isroot" tabindex="-1">isRoot <a class="header-anchor" href="#isroot" aria-label="Permalink to &quot;isRoot&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>boolean | undefined</code></li></ul><h3 id="root" tabindex="-1">root <a class="header-anchor" href="#root" aria-label="Permalink to &quot;root&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>VirtualRoot | undefined</code></li></ul><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;path&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><h3 id="displaypath" tabindex="-1">displayPath <a class="header-anchor" href="#displaypath" aria-label="Permalink to &quot;displayPath&quot;">​</a></h3><p>Returns path without using this item&#39;s alias</p><ul><li><strong>Type:</strong> <code>string</code></li></ul><h3 id="absolutepath" tabindex="-1">absolutePath <a class="header-anchor" href="#absolutepath" aria-label="Permalink to &quot;absolutePath&quot;">​</a></h3><p>Returns path without using any aliases</p><ul><li><strong>Type:</strong> <code>string</code></li></ul><h3 id="canbeedited" tabindex="-1">canBeEdited <a class="header-anchor" href="#canbeedited" aria-label="Permalink to &quot;canBeEdited&quot;">​</a></h3><p>Returns whether this can be edited in its current state</p><ul><li><strong>Type:</strong> <code>boolean</code></li></ul><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="setname-name" tabindex="-1">setName(name) <a class="header-anchor" href="#setname-name" aria-label="Permalink to &quot;setName(name)&quot;">​</a></h3><ul><li><strong>Parameters</strong><ul><li><strong>name</strong><ul><li><strong>Type:</strong> <code>string</code></li></ul></li></ul></li><li><strong>Returns:</strong> <code>this</code></li></ul><h3 id="setalias-alias" tabindex="-1">setAlias(alias) <a class="header-anchor" href="#setalias-alias" aria-label="Permalink to &quot;setAlias(alias)&quot;">​</a></h3><ul><li><strong>Parameters</strong><ul><li><strong>alias</strong><ul><li><strong>Type:</strong> <code>string</code></li></ul></li></ul></li><li><strong>Returns:</strong> <code>this</code></li></ul><h3 id="setparent-parent" tabindex="-1">setParent(parent) <a class="header-anchor" href="#setparent-parent" aria-label="Permalink to &quot;setParent(parent)&quot;">​</a></h3><ul><li><strong>Parameters</strong><ul><li><strong>parent</strong><ul><li><strong>Type:</strong> <a href="./virtual-folder"><code>VirtualFolder</code></a></li></ul></li></ul></li><li><strong>Returns:</strong> <code>this</code></li></ul><h3 id="setprotected-value" tabindex="-1">setProtected(value) <a class="header-anchor" href="#setprotected-value" aria-label="Permalink to &quot;setProtected(value)&quot;">​</a></h3><ul><li><strong>Parameters</strong><ul><li><strong>value</strong><ul><li><strong>Type:</strong> <code>boolean</code></li></ul></li></ul></li><li><strong>Returns:</strong> <code>this</code></li></ul><h3 id="seticonurl-iconurl" tabindex="-1">setIconUrl(iconUrl) <a class="header-anchor" href="#seticonurl-iconurl" aria-label="Permalink to &quot;setIconUrl(iconUrl)&quot;">​</a></h3><ul><li><strong>Parameters</strong><ul><li><strong>iconUrl</strong><ul><li><strong>Type:</strong> <code>string | null</code></li></ul></li></ul></li><li><strong>Returns:</strong> <code>this</code></li></ul><h3 id="geticonurl" tabindex="-1">getIconUrl() <a class="header-anchor" href="#geticonurl" aria-label="Permalink to &quot;getIconUrl()&quot;">​</a></h3><ul><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>string</code></li></ul></li></ul><h3 id="gettype" tabindex="-1">getType() <a class="header-anchor" href="#gettype" aria-label="Permalink to &quot;getType()&quot;">​</a></h3><ul><li><strong>Returns:</strong> <code>&quot;None&quot;</code></li></ul><h3 id="delete" tabindex="-1">delete() <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;delete()&quot;">​</a></h3><h3 id="confirmchanges-root" tabindex="-1">confirmChanges(root) <a class="header-anchor" href="#confirmchanges-root" aria-label="Permalink to &quot;confirmChanges(root)&quot;">​</a></h3><ul><li><strong>Parameters</strong><ul><li><strong>root</strong><ul><li><strong>Type:</strong> <code>VirtualRoot | undefined</code></li></ul></li></ul></li></ul><h3 id="open-args" tabindex="-1">open(...args) <a class="header-anchor" href="#open-args" aria-label="Permalink to &quot;open(...args)&quot;">​</a></h3><ul><li><strong>Parameters</strong><ul><li><strong>args</strong><ul><li><strong>Type:</strong> <code>unknown[]</code></li></ul></li></ul></li><li><strong>Returns:</strong> <code>null</code></li></ul><h3 id="getroot" tabindex="-1">getRoot() <a class="header-anchor" href="#getroot" aria-label="Permalink to &quot;getRoot()&quot;">​</a></h3><ul><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>VirtualRoot</code></li></ul></li></ul><h3 id="isfile" tabindex="-1">isFile() <a class="header-anchor" href="#isfile" aria-label="Permalink to &quot;isFile()&quot;">​</a></h3><ul><li><strong>Returns:</strong> <code>false</code><ul><li><strong>Type:</strong> <code>boolean</code></li></ul></li></ul><h3 id="isfolder" tabindex="-1">isFolder() <a class="header-anchor" href="#isfolder" aria-label="Permalink to &quot;isFolder()&quot;">​</a></h3><ul><li><strong>Returns:</strong> <code>false</code><ul><li><strong>Type:</strong> <code>boolean</code></li></ul></li></ul><h3 id="tojson" tabindex="-1">toJSON() <a class="header-anchor" href="#tojson" aria-label="Permalink to &quot;toJSON()&quot;">​</a></h3><ul><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>VirtualBaseJson | null</code></li></ul></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes material-theme material-theme-lighter vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C792EA;--shiki-light:#9C3EDA;">interface</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> VirtualBaseJson</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;"> {</span></span>\n<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">	nam</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> string</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">;</span></span>\n<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E53935;">	ico</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">?:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#E2931D;"> string</span><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">;</span></span>\n<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#39ADB5;">}</span></span></code></pre></div><h3 id="tostring" tabindex="-1">toString() <a class="header-anchor" href="#tostring" aria-label="Permalink to &quot;toString()&quot;">​</a></h3><ul><li><strong>Returns</strong><ul><li><strong>Type:</strong> <code>string | null</code></li></ul></li></ul>',72)]))}const p=a(o,[["render",i]]);export{g as __pageData,p as default};