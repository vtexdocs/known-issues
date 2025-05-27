---
title: Os filtros ocultos na loja também são ocultos nas páginas de administração do Intelligent Search
slug: os-filtros-ocultos-na-loja-tambem-sao-ocultos-nas-paginas-de-administracao-do-intelligent-search
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filters-hidden-from-the-store-are-also-hidden-from-intelligent-search-admin-pages
locale: pt
kiStatus: Backlog
internalReference: 416638
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Algumas facetas têm uso interno ou cenários que precisam ser ocultados, mas a loja precisa dessa faceta para fins de pesquisa, como usá-la para Regras de comercialização.
## Simulação


Em algumas contas, a especificação de SKU "cor" não aparece como uma opção em "Usar especificações de SKU para exibir produtos individuais nos resultados de pesquisa". Vemos que a "cor" é uma das especificações em "Hide facets" (Ocultar facetas)
## Workaround


Em **Admin > Search Settings**, remova a faceta (ou filtro) da configuração "Hide facets" (Ocultar facetas), crie a regra de merchandising ou faça a configuração esperada e oculte a faceta (ou filtro) novamente.