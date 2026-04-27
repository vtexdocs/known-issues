---
title: 'Erro na transação causado por incompatibilidade na validação do BIN nas regras de pagamento'
slug: erro-na-transacao-causado-por-incompatibilidade-na-validacao-do-bin-nas-regras-de-pagamento
status: PUBLISHED
createdAt: 2026-04-27T19:42:55.738Z
updatedAt: 2026-04-27T19:42:55.738Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-error-caused-by-bin-validation-mismatch-in-payment-rules
locale: pt
kiStatus: Backlog
internalReference: 1398229
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando as regras de pagamento são configuradas com base nas condições do emissor do cartão, a validação do checkout pode considerar configurações de BIN de 8 ou 6 dígitos, mas o Gateway continua a resolver o BIN utilizando apenas os primeiros 6 dígitos. Se um determinado BIN estiver registrado no banco de dados da VTEX com 8 dígitos e não houver um BIN mais abrangente e equivalente com 6 dígitos, o checkout identifica corretamente a condição de pagamento, mas a transação falha porque o BIN de 6 dígitos não corresponde a nenhuma regra de pagamento configurada. O erro retornado nas interações da transação é `“Não há condição de pagamento que corresponda aos parâmetros de pagamento fornecidos...”`.

## Simulação

1. Configure uma regra de pagamento com condições especiais usando as informações do emissor do cartão (país, banco, nível do cartão);
2. Escolha um número de cartão com o BIN de 8 dígitos registrado no banco de dados da VTEX, mas não a versão de 6 dígitos;
3. O checkout identifica a regra de pagamento como uma opção válida, mas a transação falha porque o BIN de 6 dígitos utilizado não corresponde aos parâmetros da regra.

## Workaround

Abra um ticket para o suporte da VTEX para adicionar o respectivo BIN de 6 dígitos, enviando as informações necessárias: https://help.vtex.com/docs/tutorials/adding-bin-information.