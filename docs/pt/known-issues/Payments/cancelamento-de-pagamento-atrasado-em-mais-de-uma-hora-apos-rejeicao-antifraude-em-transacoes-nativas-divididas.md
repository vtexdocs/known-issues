---
title: 'Cancelamento de pagamento atrasado em mais de uma hora após rejeição antifraude em transações nativas divididas.'
slug: cancelamento-de-pagamento-atrasado-em-mais-de-uma-hora-apos-rejeicao-antifraude-em-transacoes-nativas-divididas
status: PUBLISHED
createdAt: 2026-11-03T22:48:20.000Z
updatedAt: 2026-11-03T22:48:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-cancellation-delayed-over-one-hour-after-antifraud-rejection-in-native-split-transactions
locale: pt
kiStatus: Backlog
internalReference: 1480709
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o sistema antifraude rejeita uma transação que utiliza divisão nativa, a autorização do cartão não é cancelada no provedor de pagamento no momento da rejeição. A transação permanece em "Cancelando" e o pagamento permanece em "Autorizado", portanto, o valor permanece retido no cartão do comprador e o provedor só recebe a solicitação de cancelamento de 1 a 2 horas depois, ocasionalmente mais. Isso ocorre quando a divisão nativa está habilitada na transação (afiliação enviando destinatários divididos), o modo pós-compra é "Retido" ou "Total" e o pagamento ainda não foi capturado. Foi observado com rejeições da ClearSale e da Konduto. A mesma rejeição em uma transação sem divisão nativa é cancelada no provedor em segundos.

## Simulação

1. Configure uma afiliação com divisão nativa, enviando os destinatários divididos, em uma conta cujo modo pós-compra é "Retido" ou "Total";

2. Configure um provedor antifraude (por exemplo, ClearSale) para o método de pagamento;
3. Faça um pedido com mais de um vendedor e obtenha a autorização de pagamento, sem capturá-lo;
4. Faça com que o sistema antifraude rejeite a transação;
5. A transação passa para o status "Cancelando" com o pagamento ainda "Autorizado", e o cancelamento só chega ao provedor de pagamento de 1 a 2 horas depois.

## Workaround

Não há solução alternativa disponível.