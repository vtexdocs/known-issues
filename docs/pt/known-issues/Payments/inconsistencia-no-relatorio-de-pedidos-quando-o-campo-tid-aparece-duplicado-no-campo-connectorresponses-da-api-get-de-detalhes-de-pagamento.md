---
title: 'Inconsistência no relatório de pedidos quando o campo "tid" aparece duplicado no campo "connectorResponses" da API GET de detalhes de pagamento.'
slug: inconsistencia-no-relatorio-de-pedidos-quando-o-campo-tid-aparece-duplicado-no-campo-connectorresponses-da-api-get-de-detalhes-de-pagamento
status: PUBLISHED
createdAt: 2023-09-06T21:17:51.000Z
updatedAt: 2023-09-06T21:17:51.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-report-inconsistency-when-tid-field-is-duplicated-in-the-connectorresponses-field-from-get-payment-details-api
locale: pt
kiStatus: Backlog
internalReference: 895664
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os conectores dessa lista precisam salvar mais campos para o conector que funciona com o aplicativo “Venda direta”. Especificamente, para os conectores listados abaixo, e apenas para eles, todo o conteúdo da carga útil deve ser direcionado para o campo "`connectorResponses`". Isso resulta em uma duplicação do campo “`tid`”, que já existe no “`connectorResponses`”. Embora essa duplicação não represente um problema em termos do ciclo de vida da transação, ela cria uma inconsistência ao gerar relatórios a partir da página de pedidos.


- PagarMeV3
- PagarMeV3Stg
- Adyen V3

## Simulação

1. Acesse a página de pedidos do administrador.
2. Gere o relatório de pedidos.
3. Procure a coluna `tId` onde os pedidos foram feitos usando um desses conectores

## Workaround

Use a rota /payment ou a API GET de pedidos para recuperar esses dados