---
title: Ao excluir rotas do arquivo routes.json, elas não são excluídas da interface do usuário
slug: ao-excluir-rotas-do-arquivo-routesjson-elas-nao-sao-excluidas-da-interface-do-usuario
status: PUBLISHED
createdAt: 2025-10-16T20:34:34.000Z
updatedAt: 2025-10-16T20:34:34.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: when-deleting-routes-from-the-routesjson-file-they-are-not-deleted-from-the-ui
locale: pt
kiStatus: Backlog
internalReference: 1172460
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Se você criar uma rota no arquivo `routes.json` do seu tema, a rota não será excluída do painel de administração.
## Simulação


Crie uma página em seus temas no arquivo routes.json:
 ![](https://vtexhelp.zendesk.com/attachments/token/zoljY2X9GZ6NL4wUd10zoranp/?name=image.png)

A página será criada corretamente no administrador:
 ![](https://vtexhelp.zendesk.com/attachments/token/n2RP165BLtHwdHRrscu0IwOTo/?name=image.png)

Se você excluir essa rota do tema, a referência do administrador ainda estará lá. Mas você ainda poderá editar as rotas no painel de administração.


## Workaround


Você pode abrir um tíquete para a equipe de suporte solicitando a exclusão dessas rotas.


