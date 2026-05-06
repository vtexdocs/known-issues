---
title: 'O MercadoPagoV1 não consegue autorizar transações quando o valor do dado do usuário do telefone é 0.'
slug: o-mercadopagov1-nao-consegue-autorizar-transacoes-quando-o-valor-do-dado-do-usuario-do-telefone-e-0
status: PUBLISHED
createdAt: 2023-03-27T15:34:56.000Z
updatedAt: 2023-03-27T15:34:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: mercadopagov1-fails-to-authorize-transactions-when-it-comes-with-phone-user-data-value-as-0
locale: pt
kiStatus: Backlog
internalReference: 778611
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Se o checkout do cliente enviar dados do usuário sem a devida validação, como um número de telefone com menos de três dígitos, esses dados serão repassados ao gateway tal como estão, o que pode causar erros inesperados durante o processamento. Por exemplo, nosso analisador pode gerar uma exceção e cancelar a transação.

## Simulação

Para simular esse problema, usamos nosso conector legado MercadoPagoV1 para fazer um pedido e passamos dados de telefone do usuário com menos de três dígitos.

## Workaround

Infelizmente, não há solução alternativa no momento. Para evitar esse problema, recomendamos garantir que todos os dados do usuário sejam devidamente validados antes de serem enviados ao gateway.