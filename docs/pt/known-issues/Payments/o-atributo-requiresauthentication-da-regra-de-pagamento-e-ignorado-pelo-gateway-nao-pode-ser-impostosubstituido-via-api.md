---
title: 'O atributo requiresAuthentication da regra de pagamento é ignorado pelo gateway (não pode ser imposto/substituído via API)'
slug: o-atributo-requiresauthentication-da-regra-de-pagamento-e-ignorado-pelo-gateway-nao-pode-ser-impostosubstituido-via-api
status: PUBLISHED
createdAt: 2025-11-14T19:30:33.000Z
updatedAt: 2025-11-14T19:30:33.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-rule-requiresauthentication-attribute-is-ignored-by-gateway-cannot-be-enforcedoverridden-via-api
locale: pt
kiStatus: Backlog
internalReference: 1301482
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O atributo `requiresAuthentication` nas regras de pagamento é ignorado pelo Gateway/Orquestrador de Pagamentos. A atualização do campo via API não tem efeito e o comportamento de autenticação para o método de pagamento permanece inalterado.
**Escopo:** Afeta as regras de pagamento em que os operadores tentam controlar a autenticação por meio do sinalizador `requiresAuthentication`.
**Impacto:** Os comerciantes não podem ativar ou desativar a autenticação como pretendido, causando possível confusão operacional ou configurações bloqueadas.
## Simulação



- Pré-condições: Ter uma regra de pagamento configurada (por exemplo, para um método de boleto bancário).


- Etapas:
1) Use a API "Update payment rule by ID" para definir requiresAuthentication como true ou false para uma determinada regra.
2) Obtenha imediatamente a mesma regra de pagamento e observe que requiresAuthentication permanece nula ou inalterada.
3) Faça um pedido de teste usando esse método de pagamento e observe que o comportamento da autenticação não é afetado pela tentativa de alteração.


- Esperado vs. Real:
- Esperado: A alteração de requiresAuthentication na regra afeta o fato de o método exigir autenticação.
- Real: as alterações de campo são ignoradas pela lógica do gateway; o comportamento não é alterado
## Workaround


N/A


