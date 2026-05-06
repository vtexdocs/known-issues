---
title: 'Os gatilhos de visualização de página no G4A estão sendo duplicados nas páginas de pesquisa personalizadas'
slug: os-gatilhos-de-visualizacao-de-pagina-no-g4a-estao-sendo-duplicados-nas-paginas-de-pesquisa-personalizadas
status: PUBLISHED
createdAt: 2023-08-25T17:36:51.000Z
updatedAt: 2024-02-19T18:42:58.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: pageview-triggers-on-g4a-are-being-duplicated-in-custom-search-pages
locale: pt
kiStatus: Backlog
internalReference: 888042
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O evento pageView aparece duplicado no dataLayer em páginas de pesquisa personalizadas

## Simulação

- Acesse qualquer página de pesquisa personalizada
- Abra o console do seu navegador
- Digite dataLayer e verifique o evento pageView

O comportamento esperado é a ocorrência do evento duplicado

## Workaround

N/A


## **Notas internas**

Também encontrei algo curioso na página do departamento com pageView e page_view

https://storetheme.vtex.com/apparel---accessories/

 ![](https://vtexhelp.zendesk.com/attachments/token/dXFuDY5Q9XhZ7hgIvA8m8ugJ3/?name=image.png)

Mas, esse problema específico é replicável em

https://www.dzarm.com.br/outlet

 ![](https://vtexhelp.zendesk.com/attachments/token/EVakZYSBKtcrCQoNXBe92uAzQ/?name=image.png)