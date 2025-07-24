---
title: 'Pedido sem assinatura Criado e sem e-mail de Novos Pedidos em Casos relacionados ao método de pagamento usando conectadores como Payment App ou Redirect.'
id: 747TGL3sy1mmM1LnVkEjuO
status: PUBLISHED
createdAt: 2022-02-21T20:54:35.174Z
updatedAt: 2024-02-16T20:23:42.061Z
publishedAt: 2024-02-16T20:23:42.061Z
firstPublishedAt: 2022-05-18T18:43:19.767Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-with-no-subscription-created-and-no-email-of-new-orders-on-cases-related-to-payment-method-using-conectors-like-payment-app-or-redirect
locale: pt
kiStatus: No Fix
internalReference: 529143
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Para pedidos com método de pagamento usando conectores como aplicativo de pagamento ou redirecionamento, não há GatewayCallback para Checkout, que é responsável por criar a assinatura e enviar um e-mail de novo pedido.
E por causa disso, o Checkout não está enviando o evento Finished Order Group, ou seja, indica o pedido como concluído.


Assim, para pedidos que utilizam este tipo de conectores de pagamento, há dois cenários ou um inclinado a ambos.

1 - Ordem Comunitária - Nenhum e-mail de modelo de nova ordem será enviado.
2 - Ordem responsável para gerar a assinatura - Não criará a assinatura e não enviará o primeiro e-mail de nova ordem.




## Simulação



## Workaround



