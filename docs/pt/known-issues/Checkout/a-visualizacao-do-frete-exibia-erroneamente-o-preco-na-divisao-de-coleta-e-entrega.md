---
title: 'A visualização do frete exibia erroneamente o preço na divisão de coleta e entrega'
slug: a-visualizacao-do-frete-exibia-erroneamente-o-preco-na-divisao-de-coleta-e-entrega
status: PUBLISHED
createdAt: 2025-10-16T20:37:22.218Z
updatedAt: 2025-10-16T20:37:22.218Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-the-price-in-pickup-and-delivery-split
locale: pt
kiStatus: Fixed
internalReference: 1181570
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O preço de entrega exibido na visualização do envio (carrinho) está incorreto quando há uma divisão entre a retirada, oferecida pelo vendedor A, e a entrega, oferecida pelo vendedor B, e ambos os vendedores oferecem um SLA de entrega com o mesmo nome. Por exemplo:


- Item 1, oferecido pelo Vendedor A, com SLAs: coleta X e entrega X
- Item 2, oferecido pelo vendedor B, com SLAs: coleta Y e entrega X

Quando você seleciona "Pick up in store":

- O item 1 tem retirada X
- O item 2 tem entrega X com um preço maior do que o registrado na loja.
## Simulação



- Adicione dois ou mais itens ao carrinho, em que um vendedor diferente atende a cada item;
- Certifique-se de que um dos itens não esteja disponível para retirada;
- Ambos os vendedores devem oferecer um SLA com o mesmo nome
## Workaround


N/A


