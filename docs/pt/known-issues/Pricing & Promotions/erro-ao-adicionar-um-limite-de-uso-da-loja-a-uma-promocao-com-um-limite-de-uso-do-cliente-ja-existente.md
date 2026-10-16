---
title: 'Erro ao adicionar um limite de uso da loja a uma promoção com um limite de uso do cliente já existente.'
slug: erro-ao-adicionar-um-limite-de-uso-da-loja-a-uma-promocao-com-um-limite-de-uso-do-cliente-ja-existente
status: PUBLISHED
createdAt: 2026-10-16T16:31:43.000Z
updatedAt: 2026-10-16T16:32:25.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: error-when-adding-a-store-usage-limit-to-a-promotion-with-an-existing-customer-usage-limit
locale: pt
kiStatus: Backlog
internalReference: 1474500
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao editar uma promoção que já possui um limite máximo de uso por cliente, a tentativa de adicionar um limite máximo de uso por loja aciona o seguinte erro:
"Não é possível alterar uma calculadora que já utiliza o limite máximo de uso por cliente para utilizar o limite máximo de uso por loja". Essa validação ocorre somente quando o limite por cliente é configurado e salvo antes da adição do limite por loja. Configurar ambos os limites simultaneamente ou adicionar o limite por loja primeiro e o limite por cliente depois funciona conforme o esperado.

## Simulação

1. Crie uma promoção e configure um limite máximo de uso por cliente.

2. Salve a promoção.

3. Edite a promoção e adicione um limite máximo de uso por loja.

4. Salve as alterações e verifique se o seguinte erro é exibido: "Não é possível alterar uma calculadora que já utiliza o limite máximo de uso por cliente para utilizar o limite máximo de uso por loja".

## Workaround

Edite a promoção existente removendo ambas as restrições de uso e salvando as alterações. Em seguida, edite a promoção novamente e configure simultaneamente o limite máximo de uso por cliente e o limite máximo de uso por loja. Salve as alterações.

Essa solução alternativa foi testada com sucesso. Ela permite configurar ambas as restrições sem duplicar a promoção ou afetar seu contador de uso existente.