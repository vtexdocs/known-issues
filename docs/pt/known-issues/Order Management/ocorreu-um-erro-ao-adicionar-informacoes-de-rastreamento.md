---
title: '"Ocorreu um erro" ao adicionar informações de rastreamento'
slug: ocorreu-um-erro-ao-adicionar-informacoes-de-rastreamento
status: PUBLISHED
createdAt: 2021-08-06T20:30:17.000Z
updatedAt: 2023-02-08T18:38:41.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: an-error-has-occurred-when-adding-tracking-information
locale: pt
kiStatus: Backlog
internalReference: 409225
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao inserir as informações de rastreamento quando o número da fatura contém espaços, ocorre o seguinte erro (seja pela interface do usuário ou pela API): "`Ocorreu um erro`".

## Simulação

Para simular ou realizar a análise deste cenário, basta:

1. Insira uma fatura (via API) em um pedido com espaços no número da fatura (certifique-se de que a fatura não contenha nenhuma informação de rastreamento);
2. Adicione informações de rastreamento via interface do usuário (UI) ou API:
3. Observe que você receberá um código de erro 500 junto com a mensagem `Ocorreu um erro`.

## Workaround

Para pedidos que já foram faturados com o espaço e cujo rastreamento é informado posteriormente, infelizmente não há como inserir os dados de rastreamento. No entanto, para evitar esse tipo de problema, o ideal é não enviar o espaço na fatura ou informar os dados de rastreamento ao inserir a fatura.