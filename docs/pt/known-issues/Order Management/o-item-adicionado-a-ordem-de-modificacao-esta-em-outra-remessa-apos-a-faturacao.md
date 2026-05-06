---
title: 'O item adicionado à ordem de modificação está em outra remessa após a faturação'
slug: o-item-adicionado-a-ordem-de-modificacao-esta-em-outra-remessa-apos-a-faturacao
status: PUBLISHED
createdAt: 2021-08-12T23:01:42.000Z
updatedAt: 2023-05-09T12:40:39.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: item-added-to-change-order-is-in-another-package-after-invoiced
locale: pt
kiStatus: Backlog
internalReference: 412526
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os itens removidos ou adicionados pelo fluxo de alteração de pedido não fazem parte do pacote; portanto, não aparecerão no e-mail da fatura. Além disso, caso todos os itens de um pedido sejam removidos e adicionados posteriormente, o e-mail da fatura não será enviado, pois os itens adicionados não são incluídos no pacote do pedido original;

## Simulação

1 - Tenha um pedido no status "**Processando envio**" e, em seguida, selecione "_Alteração de item_";
2 - Adicione uma ou mais unidades de um SKU existente ao pedido (ou adicione um novo SKU);
3 - Verifique se a unidade foi adicionada ao pacote;
4 - Emita a fatura do pedido (via interface do usuário ou API). Nesse caso, fiz isso pela interface do usuário (_"Faturar pacote" > "Enviar uma fatura" > "Total"_). Mas você pode fazer isso usando este endpoint;
5 - E então, podemos observar que, mesmo após faturar o pacote inteiro, a unidade adicionada estava em um pacote separado;
6 - E não é possível faturar esse pacote separadamente;

O pedido ficará normalmente no status "**Faturado**", mas esse detalhe não é muito "intuitivo" (pacotes separados):

## Workaround

Infelizmente, não temos uma solução alternativa para esse cenário.