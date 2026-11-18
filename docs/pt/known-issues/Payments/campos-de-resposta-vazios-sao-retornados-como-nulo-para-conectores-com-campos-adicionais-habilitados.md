---
title: 'Campos de resposta vazios são retornados como "nulo" para conectores com campos adicionais habilitados.'
slug: campos-de-resposta-vazios-sao-retornados-como-nulo-para-conectores-com-campos-adicionais-habilitados
status: PUBLISHED
createdAt: 2026-11-18T20:35:00.000Z
updatedAt: 2026-11-18T20:35:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: empty-response-fields-returned-as-null-for-connectors-with-additional-fields-enabled
locale: pt
kiStatus: Backlog
internalReference: 1486591
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os campos retornados na resposta de autorização são salvos nos dados de pagamento como **string** em vez de seu tipo original. Isso ocorre em conectores que possuem o recurso `additional-fields` ativado. O valor retornado pelo conector e armazenado no pagamento está correto; apenas o tipo do valor armazenado é afetado.

O problema afeta principalmente transações que não envolvem cartão (por exemplo, Pix) realizadas pelo aplicativo de vendas quando o conector que processa a transação possui o recurso `additional-fields` ativado. Nessas transações, espera-se que campos de pagamento como `nsu` e `generatedCardToken` sejam nulos e, portanto, são salvos como `"null"`. O mesmo valor é transferido para o pedido, onde o campo NSU do pagamento é exibido como `"null"`.

## Simulação

1. Configure uma condição de pagamento Pix usando um conector que possui o recurso `additional-fields` ativado;

2. Faça um pedido pelo aplicativo de vendas, selecionando um método de pagamento que não seja com cartão (por exemplo, Pix);
3. Aguarde a resposta de autorização do conector e verifique quais campos são retornados como `null`;
4. Recupere os dados de pagamento por meio da API de pagamentos GET: os campos identificados na etapa 3 são salvos como `null`.

## Workaround

Não há solução alternativa disponível para impedir que esses campos sejam salvos como a string `null`. Se o valor estiver afetando integrações externas que consomem os dados do pedido, essas integrações devem tratar a string `null` como um valor vazio.