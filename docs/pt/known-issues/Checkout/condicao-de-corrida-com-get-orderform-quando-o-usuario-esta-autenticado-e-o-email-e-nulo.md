---
title: 'Condição de corrida com GET OrderForm quando o usuário está autenticado e o e-mail é nulo'
slug: condicao-de-corrida-com-get-orderform-quando-o-usuario-esta-autenticado-e-o-email-e-nulo
status: PUBLISHED
createdAt: 2026-03-31T19:07:08.468Z
updatedAt: 2026-03-31T19:07:08.468Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: race-condition-with-get-orderform-when-user-is-authenticated-and-email-is-null
locale: pt
kiStatus: Backlog
internalReference: 1386397
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A solicitação GET OrderForm pode ser executada simultaneamente com outras solicitações de atualização do orderForm. Se, ao realizar a solicitação, o usuário estiver autenticado e o campo `email` do orderForm estiver `null`, a solicitação GET OrderForm carregará os dados do perfil do usuário no orderForm, o que pode gerar conflito com o resultado de outras solicitações simultâneas.

Especialmente, quando o GET é executado simultaneamente com uma solicitação POST `/attachments/clientProfileData` e é concluído após ela, o `clientProfileData` passado na solicitação de anexo pode ser sobrescrito e os dados do perfil do usuário carregados pela solicitação GET prevalecerão.

## Simulação

Não há uma maneira simples de simular esse problema, mas ele deve ocorrer se:


1. O usuário estiver autenticado e o campo `email` do orderForm for `null`
2. For feita uma solicitação POST para `/attachments/clientProfileData` passando dados diferentes dos do perfil do usuário
3.

Uma solicitação GET do orderForm for feita _**antes**_ e concluída _**depois**_ que a solicitação POST `/attachments/clientProfileData` tenha sido concluída



Após a conclusão de ambas as solicitações, `clientProfileData` deve ser o dado do perfil do usuário e não aquele passado na solicitação POST `/attachments/clientProfileData`

## Workaround

N/A