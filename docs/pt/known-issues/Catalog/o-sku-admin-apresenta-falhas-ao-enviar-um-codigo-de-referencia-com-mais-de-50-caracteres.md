---
title: 'O SKU admin apresenta falhas ao enviar um código de referência com mais de 50 caracteres'
slug: o-sku-admin-apresenta-falhas-ao-enviar-um-codigo-de-referencia-com-mais-de-50-caracteres
status: PUBLISHED
createdAt: 2023-08-21T17:52:12.000Z
updatedAt: 2023-08-21T17:52:12.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-admin-breaks-when-sending-a-reference-code-longer-than-50-characters
locale: pt
kiStatus: Backlog
internalReference: 884789
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Espera-se que o usuário consiga alterar o código de referência do SKU através do painel de administração. No entanto, quando é inserido um valor com mais de 50 caracteres, o painel de administração trava, exibindo uma mensagem de "ocorreu um erro".

## Simulação

- Acesse o painel de administração de um SKU: `/admin/Site/SkuForm.aspx?IdSku=`
- Vá para o campo **Código de referência** e insira um valor com mais de 50 caracteres, como:

 ABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEW

- Clique em salvar
- Uma mensagem "algo deu errado" será exibida na interface.

## Workaround

Envie no máximo 50 caracteres no campo **Código de referência** de um SKU