---
title: 'O reembolso não foi processado após a entrada da fatura devido a dados de fatura inconsistentes (OMS ↔ Pagamentos).'
slug: o-reembolso-nao-foi-processado-apos-a-entrada-da-fatura-devido-a-dados-de-fatura-inconsistentes-oms-pagamentos
status: PUBLISHED
createdAt: 2026-01-15T15:30:15.000Z
updatedAt: 2026-09-21T16:24:34.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: refund-not-triggered-after-input-invoice-due-to-inconsistent-invoicedata-oms-payments
locale: pt
kiStatus: Fixed
internalReference: 1351358
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Após um reembolso bem-sucedido, os dados da fatura (invoiceData) do pedido podem não ser atualizados se a etapa síncrona pós-reembolso falhar (por exemplo, erro de armazenamento). Quando uma nova fatura de entrada (devolução) é adicionada posteriormente, o SOS calcula os reembolsos pendentes usando os dados da fatura desatualizados e tenta novamente o reembolso anterior em vez do novo. O sintoma visível é: a fatura de entrada aparece nas Interações do Pedido, mas nenhuma interação de "Pagamento de Reembolso" é criada e nenhum reembolso é enviado ao conector.

## Simulação

Pré-requisitos:

Um pedido que teve um reembolso anterior executado com sucesso e um recibo de reembolso salvo, mas os dados da fatura (invoiceData) não foram atualizados devido a uma falha no fluxo síncrono.

Etapas:

Executar o primeiro reembolso; o recibo é salvo, mas os dados da fatura (invoiceData) não são atualizados (estado inconsistente).

Inserir uma segunda fatura de entrada (por exemplo, R$ 50).

O SOS verifica os reembolsos pendentes com base nos dados da fatura (invoiceData) e tenta novamente o reembolso da primeira fatura em vez do novo.

O sistema de pagamentos retorna o código CHK0054 "não há valor para reembolsar" e nenhuma interação de "Reembolso de Pagamento" é criada para a segunda fatura (apenas as notificações da fatura são exibidas).

## Workaround

Processe manualmente o reembolso ausente na interface do usuário do PCI Gateway ou por meio da API de Reembolso de Pagamentos para a transação afetada; confirme se uma nova interação de "Reembolso de Pagamento" é criada posteriormente.

Se necessário internamente, corrija o estado do pedido alinhando os dados da fatura com o recibo de reembolso salvo e, em seguida, execute o reembolso pendente para que o SOS direcione o valor correto da fatura.