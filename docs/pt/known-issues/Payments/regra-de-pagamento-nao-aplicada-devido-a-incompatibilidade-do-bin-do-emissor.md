---
title: 'Regra de pagamento não aplicada devido à incompatibilidade do BIN do emissor'
slug: regra-de-pagamento-nao-aplicada-devido-a-incompatibilidade-do-bin-do-emissor
status: PUBLISHED
createdAt: 2026-05-21T23:23:21.000Z
updatedAt: 2026-05-21T23:25:12.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-rule-not-applied-due-to-bin-issuer-mismatch
locale: pt
kiStatus: Backlog
internalReference: 1410739
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As regras de pagamento direcionadas a um emissor específico (nível de país, banco ou cartão) não são aplicadas quando o cartão do comprador é identificado pelo Checkout por meio de um BIN de 8 dígitos cujas informações de emissor diferem do registro do BIN de 6 dígitos correspondente no banco de dados de BIN da VTEX. Isso afeta carrinhos nos quais existem regras de pagamento disponíveis para ambas as versões do BIN.

## Simulação

**Pré-requisitos:**

- Existirem registros de BIN com incompatibilidade de emissor (nível de país, banco ou cartão) entre suas versões de 6 e 8 dígitos
- O comerciante ter uma regra de pagamento (A) condicionada ao emissor (nível de país, banco ou cartão) que corresponda ao registro atual do BIN de 6 dígitos
- O comerciante tenha outra regra de pagamento (B) com menos restrições ou restrições diferentes que corresponda ao registro atual do BIN de 8 dígitos

**Etapas:**

1. Configure uma regra de pagamento (A) com condições especiais usando as informações do emissor do banco (país, banco, nível do cartão);
2. No Checkout, insira um número de cartão que corresponda a um BIN de 6 dígitos coberto pela regra (A)
3. Em seguida, insira um número de cartão que corresponda à versão de 8 dígitos do mesmo BIN;
4. Observe que o Checkout prioriza o BIN de 8 dígitos e avalia as regras com base no nome do emissor de 8 dígitos, que não corresponde à regra de pagamento (A). A regra esperada (A) não é aplicada; em vez disso, uma regra mais ampla (B) é selecionada.

## Workaround

Como solução alternativa rápida, o comerciante pode criar uma regra de pagamento semelhante com as mesmas informações do emissor bancário da versão de 6 dígitos do BIN

**Recomendado**: Abra um ticket para o suporte da VTEX e padronize as informações do BIN de 6 e 8 dígitos, enviando as informações necessárias: https://help.vtex.com/docs/tutorials/adding-bin-information.