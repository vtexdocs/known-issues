---
title: 'O campo de especificação do produto não é exibido na página de detalhes do produto (PDP) quando seu nome corresponde ao nome do grupo de especificações.'
slug: o-campo-de-especificacao-do-produto-nao-e-exibido-na-pagina-de-detalhes-do-produto-pdp-quando-seu-nome-corresponde-ao-nome-do-grupo-de-especificacoes
status: PUBLISHED
createdAt: 2026-08-26T15:34:13.000Z
updatedAt: 2026-08-26T15:34:13.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: product-specification-field-is-not-displayed-on-pdp-when-its-name-matches-the-specification-group-name
locale: pt
kiStatus: Backlog
internalReference: 1452333
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um produto possui um campo de especificação (ficha técnica) com o mesmo nome do grupo de especificações ao qual pertence, o Store Framework exibe apenas uma especificação na página de detalhes do produto (PDP), ignorando as demais, mesmo que a API do Catálogo retorne todos os valores corretamente. Esse comportamento ocorre no Store Framework; no Portal/CMS Legado, todas as especificações são exibidas na PDP normalmente.

## Simulação

- Crie (ou utilize) um conjunto de especificações, por exemplo, `Especificações`.

- Adicione dois ou mais campos a esse grupo (ex.: `Material`, `Tipo de fio`) - nesse cenário, ambas as especificações são exibidas corretamente na PDP do Store Framework.

![](https://vtexhelp.zendesk.com/attachments/token/8z5Igx1ng1y4N3cbE0V10t7Ry/?name=image.png)
![](https://vtexhelp.zendesk.com/attachments/token/JCaTTHt0OuzS6K75iELZfbwtf/?name=image.png)
- Adicione um terceiro campo ao mesmo grupo com o **mesmo nome do grupo** (por exemplo, um campo chamado `Especificações` dentro do grupo `Especificações`).

- ![](https://vtexhelp.zendesk.com/attachments/token/uTAFSbKbpjK4WmbfQ00rGFVdC/?name=image.png)
- Reindexe o produto após preencher esta nova especificação.
- Verifique a página de detalhes do produto (PDP) no Store Framework - apenas uma especificação é exibida, mesmo que a resposta do endpoint `catalog_system/pub/products/search/{slug}/p` retorne todos os valores.

![](https://vtexhelp.zendesk.com/attachments/token/yyDSIHMYmdJIjvb6v4YSDMqsE/?name=image.png)

- Compare com o vtexcommercestable (CMS legado). Lá, todas as especificações aparecem corretamente, confirmando que o problema está limitado ao Store Framework.

![](https://vtexhelp.zendesk.com/attachments/token/GAa1YetuNh0thiUcwjSsGkFsq/?name=image.png)

## Workaround

Renomeie o campo de especificação para que seu nome não corresponda ao nome do grupo de especificações ao qual ele pertence.