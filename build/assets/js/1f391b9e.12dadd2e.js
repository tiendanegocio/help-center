(self.webpackChunktiendanegocio_help=self.webpackChunktiendanegocio_help||[]).push([[3085],{895:function(e,t,n){"use strict";n.d(t,{dK:function(){return a},_k:function(){return c},vc:function(){return l},rx:function(){return s},qo:function(){return u},Hk:function(){return i},Iz:function(){return d}});var r=n(1336),o=n.n(r);n(892)(o()),n(9574)(o());var a=["es"],c=!1,l=null,s=null,u=8,i=50,d={search_placeholder:"Buscar...",see_all_results:"Ver todos los resultados",no_results:"Sin resultados.",search_results_for:'Resultados de b\xfasqueda "{{ keyword }}"',search_the_documentation:"Buscar en la documentaci\xf3n",count_documents_found:"{{ count }} documento encontrado",count_documents_found_plural:"{{ count }} documentos encontrados",no_documents_were_found:"No se encontraron documentos"}},9366:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(4543),a=n(3905),c=n(3541),l=n(571),s=n(6700);t.default=function(e){var t=e.content,n=t.frontMatter,u=t.metadata,i=n.title,d=n.description,m=n.wrapperClassName,f=n.hide_table_of_contents,v=u.permalink;return r.createElement(o.Z,{title:i,description:d,permalink:v,wrapperClassName:null!=m?m:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},r.createElement("main",null,r.createElement("div",{className:"container container--fluid"},r.createElement("div",{className:"margin-vert--lg padding-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--8 col--offset-2"},r.createElement("div",{className:"container"},r.createElement(a.Zo,{components:c.Z},r.createElement(t,null)))),!f&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(l.Z,{toc:t.toc})))))))}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),o=n(6010);var a=function(e,t,n){var o=(0,r.useState)(void 0),a=o[0],c=o[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var o=0,l=!1,s=document.getElementsByClassName(e);o<s.length&&!l;){var u=s[o],i=u.href,d=decodeURIComponent(i.substring(i.indexOf("#")+1));r.id===d&&(a&&a.classList.remove(t),u.classList.add(t),c(u),l=!0),o+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},c="tableOfContents_35-E",l="table-of-contents__link";function s(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:l,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children}))}))):null}var u=function(e){var t=e.toc;return a(l,"table-of-contents__link--active",100),r.createElement("div",{className:(0,o.Z)(c,"thin-scrollbar")},r.createElement(s,{toc:t}))}}}]);