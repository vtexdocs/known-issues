---
title: 'O sistema não aceita mais de uma afiliação de pagamento por extensão para o método de débito online'
slug: o-sistema-nao-aceita-mais-de-uma-afiliacao-de-pagamento-por-extensao-para-o-metodo-de-debito-online
status: PUBLISHED
createdAt: 2020-12-28T21:11:38.000Z
updatedAt: 2026-06-05T21:05:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-system-doesnt-work-with-more-than-one-extension-payment-affiliation-for-debit-online-method
locale: pt
kiStatus: No Fix
internalReference: 319750
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando mais de uma **afiliação de pagamento por extensão** é configurada para o método de pagamento **débito online** utilizando diferentes adquirentes, as transações podem ser encaminhadas para a **afiliação errada** de forma intermitente. Isso significa que um pagamento destinado a um adquirente pode acabar sendo processado por outro, causando comportamento inconsistente no checkout.

## Simulação

Não foi possível reproduzir o problema de forma consistente em um ambiente controlado. O problema se manifesta intermitentemente em produção quando duas ou mais regras de pagamento por débito online são configuradas com afiliações diferentes do mesmo tipo.

## Workaround

Use apenas **uma afiliação** por regra de pagamento por débito online ou desative as afiliações adicionais. A configuração de múltiplas afiliações de extensão para o mesmo método de pagamento não é suportada de forma confiável.