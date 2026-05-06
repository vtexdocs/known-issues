---
title: 'Os filtros ocultos na loja também ficam ocultos nas páginas de administração da Pesquisa Inteligente'
slug: os-filtros-ocultos-na-loja-tambem-ficam-ocultos-nas-paginas-de-administracao-da-pesquisa-inteligente
status: PUBLISHED
createdAt: 2021-08-20T17:41:25.000Z
updatedAt: 2025-05-27T20:11:48.000Z
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

Algumas facetas têm uso interno ou cenários que precisam ser ocultados, mas a loja precisa dessa faceta para fins de pesquisa, como para aplicar regras de produtos.

## Simulação

Em algumas contas, a especificação de SKU “cor” não aparece como opção em “Usar especificações de SKU para exibir produtos individuais nos resultados de pesquisa”. Observamos que “cor” é uma das especificações em “Ocultar facetas”.

## Workaround

Em **Admin > Configurações de pesquisa**, remova a faceta (ou filtro) da configuração “Ocultar facetas”, crie a regra de merchandising ou faça a configuração esperada e oculte a faceta (ou filtro) novamente.