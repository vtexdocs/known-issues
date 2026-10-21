---
title: 'Pedidos de vale-presente ficam retidos após a emissão da fatura (ID da transação do fornecedor ausente na autorização).'
slug: pedidos-de-valepresente-ficam-retidos-apos-a-emissao-da-fatura-id-da-transacao-do-fornecedor-ausente-na-autorizacao
status: PUBLISHED
createdAt: 2023-07-05T15:50:22.000Z
updatedAt: 2026-10-21T12:10:34.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-orders-stuck-after-invoicing-provider-transaction-id-missing-at-authorization
locale: pt
kiStatus: Backlog
internalReference: 855864
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Pedidos pagos total ou parcialmente com um cartão-presente de um provedor externo do Gift Card Hub são faturados, mas nunca prosseguem: o pedido permanece em "Verificando fatura" e o pagamento com cartão-presente nunca é capturado. Isso ocorre quando o provedor responde à solicitação de criação de transação sem um ID de transação. O pagamento ainda é aprovado, mas todas as tentativas de captura posteriores não têm um ID de referência e falham, e tentar novamente não resolve o problema. O pedido permanece em "Verificando fatura" após o envio da fatura. O histórico do pedido mostra "Ocorreu um erro no Gateway" (SalesOrderSystem009), repetido a cada nova tentativa. A transação permanece "Aprovada" no VTEX Payments e nunca chega a "Concluída".

## Simulação

1. Registre um provedor de cartão-presente de teste no Gift Card Hub cujo endpoint de criação de transação retorne uma resposta de sucesso com um ID de transação vazio.

2. Faça um pedido em uma loja de teste pagando com um cartão-presente desse provedor.

3. Verifique o pedido: o pagamento é aprovado e o pedido chega a "Pronto para processamento". 4. Emita a fatura do pedido.

5. O pedido permanece em "Verificando fatura" e seu histórico mostra "Ocorreu um erro com o Gateway" a cada nova tentativa.

## Workaround

Fornecedor (prevenção): a resposta de criação da transação deve sempre incluir um ID de transação não vazio, conforme exigido pelo protocolo do provedor Gift Card Hub.