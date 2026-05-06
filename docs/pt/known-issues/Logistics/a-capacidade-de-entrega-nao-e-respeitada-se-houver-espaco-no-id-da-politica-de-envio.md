---
title: 'A capacidade de entrega não é respeitada se houver espaço no ID da política de envio'
slug: a-capacidade-de-entrega-nao-e-respeitada-se-houver-espaco-no-id-da-politica-de-envio
status: PUBLISHED
createdAt: 2023-07-14T21:25:36.000Z
updatedAt: 2024-12-19T19:05:00.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: delivery-capacity-is-not-respected-if-there-is-space-in-the-id-of-shipping-policy
locale: pt
kiStatus: Fixed
internalReference: 862830
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Se o recurso de agendamento de entregas estiver em uso e a capacidade de entrega estiver habilitada, há dois cenários conhecidos que podem tornar a janela disponível mesmo após ela ter atingido seu limite máximo de capacidade configurado.
Os cenários são: ID da política de envio com um espaço ou com muitos caracteres na sequência; `AccountName+ShippingPolicyId` não pode exceder 60 caracteres.

## Simulação

Crie uma política de envio e, em seu ID, insira um espaço ou `AccountName+ShippingPolicyId` resultando em mais de 60 caracteres; configure a entrega programada e a capacidade de entrega.
Faça pedidos selecionando a janela registrada e verifique se será possível criar mais pedidos do que o máximo configurado na capacidade de entrega.
No checkout, quando o limite configurado for atingido, a janela não deve ficar indisponível, mas permanecerá visível e poderá ser selecionada.

## Workaround

Não registre nenhum Id com espaço na política de envio ou com mais de 60 caracteres somando os caracteres em `AccountName+ShippingPolicyId`.