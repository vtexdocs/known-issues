---
title: 'Inconsistência no comportamento da opção de pagamento em uma única parcela durante a finalização da compra'
slug: inconsistencia-no-comportamento-da-opcao-de-pagamento-em-uma-unica-parcela-durante-a-finalizacao-da-compra
status: PUBLISHED
createdAt: 2022-06-27T17:53:30.000Z
updatedAt: 2026-02-19T17:16:11.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-in-single-installment-payment-condition-behavior-at-checkout
locale: pt
kiStatus: Backlog
internalReference: 605568
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao configurar condições de pagamento que incluem uma única opção de parcelamento, a interface de checkout não reflete de forma consistente a configuração de parcelamento que será efetivamente aplicada pelo Gateway de Pagamentos.

Em casos em que várias regras de pagamento são elegíveis, o gateway sempre aplica a regra mais restritiva, independentemente da opção de parcelamento selecionada pelo comprador na interface de checkout.

O Gateway de Pagamentos considera uma regra “mais restritiva” **apenas** com base nos seguintes atributos:

- **Emissor / país do emissor**
- **Marca compartilhada**
- **Nível do cartão**
- **Intervalos de BIN**
- **Canal de vendas**

Como resultado, a interface de checkout pode exibir opções de parcelamento que não correspondem à regra aplicada no final, ou pode exibir apenas o valor total enquanto a transação é processada com uma condição de pagamento em parcela única.

Cenário 1 – Duas condições de pagamento (pagamento único e parcela única)
Configuração

Duas condições de pagamento ativas para o mesmo método de pagamento:

Condição de pagamento A (Regra): Pagamento único (1x valor total), sem restrições

Condição de pagamento B (Regra): Parcelamento único (10x, não é pagamento único), com restrições adicionais, tais como:

- Emissor / país do emissor
- Banco BIN / intervalos de BIN
- Marca compartilhada
- Nível do cartão
- Canal de vendas

Comportamento esperado

A interface de checkout exibe:

Opção de parcela única

Independentemente da opção selecionada na interface (incluindo a seleção de pagamento único), a transação é processada usando a Condição B, uma vez que é a regra mais restritiva correspondente ao BIN do cartão e aos outros atributos listados acima.

Este é o comportamento atual e esperado do Gateway de Pagamentos, já que a priorização das regras é baseada no nível de restrição, e não na seleção da interface.

Cenário 2 – Condição de pagamento único com uma opção de parcelamento
Configuração

Uma condição de pagamento único configurada com:

Apenas uma opção de parcelamento, diferente do pagamento único

Comportamento esperado

a. A interface de checkout exibe apenas a opção de pagamento único
b. Ao concluir a compra, a transação é processada usando a condição de pagamento em parcela única configurada

A opção de parcelamento é retornada corretamente na resposta paymentData (visível via DevTools → Rede).

A opção de parcelamento não é exibida no menu suspenso de parcelamento do checkout.

Apenas o valor total (pagamento único) é mostrado ao comprador.

Após concluir a compra, a transação reflete corretamente a opção de parcela única configurada.

## Simulação

- Configure as condições de pagamento de acordo com o Cenário 1 ou o Cenário 2.
- Acesse a página de checkout e adicione qualquer produto ao carrinho.
- Conclua a compra e verifique a regra de pagamento aplicada à transação.

## Workaround

**Cenário 1** - a solução alternativa é alinhar o nível de restrição entre as condições de pagamento único e de parcela única.

Em vez de ter:

Condição de pagamento A → 1x (valor total), sem restrições

Condição de pagamento B → 10x, com restrições adicionais (emissor/país do emissor, BIN do banco/intervalos de BIN, co-branding, nível do cartão, canal de vendas, etc.)

O comerciante pode configurar:

Condição de pagamento A → 1x (valor total), com as mesmas restrições aplicadas na Condição B

Condição de pagamento B → 10x, com essas mesmas restrições

**Cenário 2** - Não há solução alternativa.%0A