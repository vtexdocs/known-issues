---
title: 'O CallbackUrl sempre retorna um código 403 quando a conta do proprietário do conector foi desativada'
slug: o-callbackurl-sempre-retorna-um-codigo-403-quando-a-conta-do-proprietario-do-conector-foi-desativada
status: PUBLISHED
createdAt: 2023-03-21T18:37:32.000Z
updatedAt: 2023-03-21T18:37:32.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: callbackurl-always-returns-403-when-the-connector-owner-account-has-been-disabled
locale: pt
kiStatus: Backlog
internalReference: 775235
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para conectores que utilizam nossa PPP, a configuração do conector inclui um campo chamado `accountName`, que especifica a conta usada para publicar o aplicativo. Normalmente, o valor de `accountName` é o mesmo que o nome da conta do parceiro. No entanto, quando o parceiro publica conectores com sua própria infraestrutura, ele utiliza um endpoint específico, que não é relativo; é assim que funcionam os conectores que utilizam nossa infraestrutura IO.

Essa diferença nos métodos de publicação afeta a forma como o gateway constrói o `callbackUrl`, que usa o `accountName` para determinar o locatário. Como resultado, a construção da URL é inflexível, e há casos em que a conta associada ao `accountName` pode estar desativada e incapaz de aceitar solicitações. Isso faz com que todas as solicitações sejam negadas com um código 403, já que o gateway sempre usa essa conta para construir a URL.

## Simulação

Este cenário não pode ser simulado, a menos que haja uma conta desativada disponível.

## Workaround

Existem algumas soluções alternativas para este cenário, incluindo alterar o `accountName` onde o conector foi publicado e enviar uma nova solicitação de publicação para mudar o conector para nossa nova solução de “wrapper”. Do lado do provedor, eles podem substituir o locatário pela conta atual ao solicitar um callback.