---
title: 'Valor do preço da SKU sendo exibido incorretamente nos detalhes do meu pedido'
slug: valor-do-preco-da-sku-sendo-exibido-incorretamente-nos-detalhes-do-meu-pedido
status: PUBLISHED
createdAt: 2025-10-16T20:33:52.940Z
updatedAt: 2025-10-16T20:33:52.940Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: sku-price-value-being-displayed-incorrectly-in-my-order-detail
locale: pt
kiStatus: Backlog
internalReference: 1171863
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A lista de itens na área de detalhes My Orders é gerada pela fusão das informações retornadas por dois roteiros internos. Embora esses roteiros forneçam dados semelhantes, eles não são idênticos. Quando há dois SKUs do mesmo item no pedido, o processo de mesclagem pode atribuir o mesmo preço a ambos, resultando em uma exibição incorreta do valor total na interface, divergindo do valor real registrado no pedido.
## Simulação


Crie um pedido com dois SKUs diferentes do mesmo item, mas com preços diferentes.
Acesse a área de detalhes do pedido em My Orders (Meus pedidos).
Compare os preços exibidos com os valores reais do pedido.
Se o problema ocorrer, as duas SKUs aparecerão com o mesmo preço, fazendo com que o total exibido seja diferente.


## Workaround


Não há nenhuma solução alternativa disponível.



