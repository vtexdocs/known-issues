---
title: 'Erro com o código de retorno 355 no processo de cancelamento com o ERedeRest e o E-Rede V2'
slug: erro-com-o-codigo-de-retorno-355-no-processo-de-cancelamento-com-o-erederest-e-o-erede-v2
status: PUBLISHED
createdAt: 2023-01-25T13:35:02.000Z
updatedAt: 2024-11-26T19:46:33.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-with-returncode-355-in-cancellation-process-with-erederest-and-erede-v2
locale: pt
kiStatus: Backlog
internalReference: 740084
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os conectores legados, ERedeRest e E-Rede V2, iniciam os cancelamentos enviando uma solicitação ao provedor e esperam um "returnCode":"359" indicando que o cancelamento foi bem-sucedido. Qualquer outro código é interpretado pelo nosso gateway como um status indefinido, fazendo com que a transação fique presa no estado de cancelamento. Mesmo que, em alguns casos, a solicitação de reembolso/cancelamento seja bem-sucedida. Isso levava a tentativas repetidas de cancelamento, mesmo quando o cancelamento já havia sido processado pelo provedor.

## Simulação

Não é possível simular, pois dependemos da resposta do provedor.

## Workaround

Se o pagamento do lado do provedor já estiver cancelado

 {"returnCode":"355","returnMessage":"Transação já cancelada."}

A equipe de suporte ao produto tem a opção de utilizar uma API interna, '`force-cancel-status`', para atualizar o status do pagamento e da transação para 'cancelado'.

Isso pode não funcionar em transações com vários pagamentos, dependendo da consistência do status de suas liquidações.