import{_ as e,c as a,o as t,a3 as r}from"./chunks/framework.B9C7KmY_.js";const g=JSON.parse('{"title":"Making a custom app","description":"","frontmatter":{"outline":"deep","head":[["meta",{"name":"og:title","content":"Making a custom app | ProzillaOS Docs"}],["meta",{"name":"twitter:title","content":"Making a custom app | ProzillaOS Docs"}],["meta",{"name":"og:description","content":"Documentation for ProzillaOS and its packages."}],["meta",{"name":"twitter:description","content":"Documentation for ProzillaOS and its packages."}],["link",{"rel":"canonical","href":"https://os.prozilla.dev/docs/guides/custom-app"}],["meta",{"name":"og:url","content":"https://os.prozilla.dev/docs/guides/custom-app"}],["meta",{"name":"twitter:url","content":"https://os.prozilla.dev/docs/guides/custom-app"}],["meta",{"name":"og:locale","content":"en_US"}],["meta",{"name":"og:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"twitter:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}]]},"headers":[],"relativePath":"guides/custom-app.md","filePath":"guides/custom-app.md"}'),o={name:"guides/custom-app.md"},i=r('<h1 id="making-a-custom-app" tabindex="-1">Making a custom app <a class="header-anchor" href="#making-a-custom-app" aria-label="Permalink to &quot;Making a custom app&quot;">​</a></h1><p>There are two main ways to create custom applications for ProzillaOS:</p><ol><li><a href="#internal-app">Internal app</a></li><li><a href="#external-app">External app</a></li></ol><p>An internal app lives inside the same repository as the OS itself. An external app has a separate repository and must therefore also be published to a package directory, like npm, before being usable in a ProzillaOS project. The internal app approach is the simplest one and easiest one to set up, while the other approach is a bit more technical.</p><h2 id="internal-app" tabindex="-1">1. Internal app <a class="header-anchor" href="#internal-app" aria-label="Permalink to &quot;1. Internal app {#internal-app}&quot;">​</a></h2><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><p>This guide assumes you have already set up a basic project that implements ProzillaOS. You can use to <a href="/docs/guides/getting-started">getting started guide</a> to set up a project with ProzillaOS.</p><h3 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><p>Create a new folder where you can put the source code of your custom ProzillaOS application.</p><h2 id="external-app" tabindex="-1">2. External app <a class="header-anchor" href="#external-app" aria-label="Permalink to &quot;2. External app {#external-app}&quot;">​</a></h2><h3 id="prerequisites-1" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites-1" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><p>This guide assumes you have already set up a basic React project with TypeScript. To learn more about how to set up a React project, check out the official <a href="https://react.dev/learn/start-a-new-react-project" target="_blank" rel="noreferrer">React documentation</a>. The React documentation also has a guide on <a href="https://react.dev/learn/typescript" target="_blank" rel="noreferrer">how to start using TypeScript in your React project</a>.</p><h3 id="setup-1" tabindex="-1">Setup <a class="header-anchor" href="#setup-1" aria-label="Permalink to &quot;Setup&quot;">​</a></h3>',13),n=[i];function s(p,l,c,u,h,d){return t(),a("div",null,n)}const f=e(o,[["render",s]]);export{g as __pageData,f as default};
