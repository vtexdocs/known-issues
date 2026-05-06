---
title: 'A interface do usuário gera solicitações separadas para cada chave/campo de um anexo'
slug: a-interface-do-usuario-gera-solicitacoes-separadas-para-cada-chavecampo-de-um-anexo
status: PUBLISHED
createdAt: 2021-02-19T17:13:53.000Z
updatedAt: 2024-03-01T20:32:04.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-triggers-separate-requests-for-each-keyfield-of-an-attachment
locale: pt
kiStatus: Backlog
internalReference: 336371
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando você define o valor de um campo de anexo de item pela interface do usuário, isso aciona uma solicitação para atualizar o orderForm, mesmo que ainda haja outros campos por preencher.
Essa solicitação será então processada, e a resposta incluirá o orderForm atualizado.

Nos casos em que o anexo possui vários campos de texto abertos, isso pode fazer com que os campos subsequentes sejam sobrescritos enquanto você digita seus valores.
Isso ocorre porque a solicitação de atualização terá sido enviada quando esse campo ainda estava em branco, portanto, ele também estará em branco na resposta.

Nos casos em que o item possui um anexo de assinatura com várias chaves, isso pode acionar uma mensagem de erro como “unable to communicate with seller” / “não foi possível se comunicar com o seller”.
Isso ocorre porque a assinatura espera que várias chaves tenham sido preenchidas, mas a primeira solicitação enviou apenas uma.

## Simulação

Crie um anexo com pelo menos duas chaves/campos.
Adicione um item vinculado a esse anexo ao seu carrinho e, em seguida, adicione o anexo.
Por fim, defina o valor de um campo e observe o comportamento resultante.

## Workaround

N/A