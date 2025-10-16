---
title: Erro 504 na interface de auditoria ao adicionar um filtro que retorna caracteres especiais.
slug: erro-504-na-interface-de-auditoria-ao-adicionar-um-filtro-que-retorna-caracteres-especiais
status: PUBLISHED
createdAt: 2025-10-16T20:00:19.194Z
updatedAt: 2025-10-16T20:00:19.194Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-504-in-audit-ui-when-adding-filter-that-returns-special-characters
locale: pt
kiStatus: Backlog
internalReference: 1151566
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A adição de um filtro na interface do usuário de auditoria resulta em um erro. Esse problema ocorre porque o valor do campo contém um caractere especial que a interface do usuário não consegue interpretar, causando a falha do aplicativo.
## Simulação



- Navegue até a interface do usuário de auditoria "https://.myvtex.com/admin/ui/audit".
- Adicione um campo "Event Detail" ao aplicativo "Site Editor".
- Observe que o aplicativo gera um erro `504 gateway Timeout` ao tentar processar os detalhes `Algo deu errado`.

 ![](https://vtexhelp.zendesk.com/attachments/token/rK7X8AT7k1gH5uh71R9Mksvdd/?name=Captura+de+Tela+2024-12-16+a%CC%80s+15.53.33.png
## Workaround

"N/A"