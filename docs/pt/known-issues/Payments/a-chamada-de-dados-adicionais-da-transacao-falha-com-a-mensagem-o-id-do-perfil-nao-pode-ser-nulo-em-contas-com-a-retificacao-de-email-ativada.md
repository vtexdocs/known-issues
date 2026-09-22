---
title: 'A chamada de dados adicionais da transação falha com a mensagem "o ID do perfil não pode ser nulo" em contas com a retificação de e-mail ativada.'
slug: a-chamada-de-dados-adicionais-da-transacao-falha-com-a-mensagem-o-id-do-perfil-nao-pode-ser-nulo-em-contas-com-a-retificacao-de-email-ativada
status: PUBLISHED
createdAt: 2026-09-22T21:46:41.000Z
updatedAt: 2026-09-22T21:46:41.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-additionaldata-call-fails-with-profile-id-cannot-be-null-on-accounts-with-email-rectification-enabled
locale: pt
kiStatus: Backlog
internalReference: 1464703
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em contas onde o recurso de retificação de e-mail do gateway está habilitado, a chamada que envia dados adicionais para uma transação falha sempre que o objeto `clientProfileData` chega sem um `id`. Antes de armazenar a carga útil, o gateway tenta resolver o e-mail do comprador no Sistema de Perfil, e um identificador ausente aborta toda a solicitação — portanto, `cart`, `shippingData`, `billingAddress` e `paymentRecipients` nunca são persistidos na transação, e não apenas o e-mail. O identificador de perfil é opcional no fluxo de finalização da compra e não é declarado como obrigatório em nenhum lugar no contrato de dados adicionais.

- `POST /api/pvt/transactions/{transactionId}/additional-data` retorna `500` com o corpo `profile Id cannot be null`
- Variante: retorna `404` com `os dados pessoais do perfil não foram encontrados. Validar o profileId solicitado. Quando `clientProfileData.id` está presente, mas é desconhecido para o Sistema de Perfil.
- Variante: retorna `404` com `o e-mail do perfil não pode ser nulo` quando o perfil é resolvido, mas não possui e-mail.
- A transação fica sem seus campos de dados adicionais — nenhum carrinho, endereço de entrega, endereço de cobrança ou destinatários de pagamento são armazenados.
- Ocorre apenas em contas incluídas na lista de permissões `allow-email-rectification`; completamente silenciosa em todas as outras contas.

## Simulação

1. Confirme se a conta está listada na lista de permissões da flag `allow-email-rectification`.

2. Inicie uma transação e mantenha-a no status `iniciada`.

3. Envie uma requisição POST para `/api/pvt/transactions/{transactionId}/additional-data` com um campo `clientProfileData` cujo `id` está ausente, é `nulo` ou vazio.

4. Esperado: `500` com o corpo da requisição `o ID do perfil não pode ser nulo`. 5. Confirme se nenhum dos outros campos na mesma solicitação foi armazenado na transação.

Para confirmar se um caso existente é este KI, verifique os três critérios: a conta está na lista de permissões; o corpo da resposta com dados adicionais corresponde a uma das três strings acima; a transação não possui os campos de dados adicionais.

## Workaround

- **Abra um chamado para o Suporte ao Produto:** solicite a remoção da conta da lista de permissões `allow-email-rectification`. Isso restaura o comportamento anterior — o e-mail enviado no corpo da solicitação é armazenado como está.