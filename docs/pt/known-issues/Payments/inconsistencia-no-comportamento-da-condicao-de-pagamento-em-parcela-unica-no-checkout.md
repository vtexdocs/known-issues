---
title: 'Inconsistência no comportamento da condição de pagamento em parcela única no checkout'
slug: inconsistencia-no-comportamento-da-condicao-de-pagamento-em-parcela-unica-no-checkout
status: PUBLISHED
createdAt: 2026-02-19T15:30:48.264Z
updatedAt: 2026-02-19T15:30:48.264Z
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

Ao configurar condições de pagamento que incluem uma opção de parcelamento único, a interface do usuário do checkout não reflete de forma consistente a configuração de parcelamento que será realmente aplicada pelo gateway de pagamentos. Em cenários em que várias regras de pagamento são elegíveis, o gateway sempre aplica a regra mais restritiva, independentemente da opção de parcelamento selecionada pelo comprador na interface do usuário do checkout.

O gateway de pagamentos considera uma regra “mais restritiva” **apenas** com base nos seguintes atributos: - **Emissor/país emissor** - **Cobrand** - **Nível do cartão**
- **Intervalos de BIN** - **Canal de vendas** Como resultado, a interface do usuário do checkout pode exibir opções de parcelamento que não correspondem à regra aplicada, ou pode exibir apenas o valor total enquanto a transação é processada com uma condição de pagamento em parcela única. Cenário 1 – Duas condições de pagamento (pagamento único e parcela única) Configuração

Duas condições de pagamento ativas para o mesmo método de pagamento: Condição de pagamento A (regra): pagamento único (1x valor total), sem restrições Condição de pagamento B (regra): parcela única (10x, pagamento não único), com restrições adicionais, tais como: - Emissor/país emissor - Banco BIN/intervalos BIN - Cobrand - Nível do cartão - Canal de vendas

Comportamento esperado A interface do usuário do checkout exibe: Opção de parcela única Independentemente da opção selecionada na interface do usuário (incluindo a seleção de pagamento único), a transação é processada usando a Condição B, uma vez que é a regra mais restritiva correspondente ao BIN do cartão e aos outros atributos listados acima. Este é o comportamento atual e esperado do Gateway de Pagamentos, uma vez que a priorização das regras é baseada no nível de restrição, e não na seleção da interface do usuário.

Cenário 2 – Condição de pagamento único com uma opção de parcelamento Configuração Uma condição de pagamento único configurada com: Apenas uma opção de parcelamento, diferente do pagamento único Comportamento esperado a. A interface do usuário do checkout exibe apenas a opção de pagamento único b. Após concluir a compra, a transação é processada usando a condição de pagamento único configurada A opção de parcelamento é retornada corretamente na resposta paymentData (visível via DevTools → Rede).

A opção de parcelamento não é exibida no menu suspenso de parcelamento do checkout. Apenas o valor total (pagamento único) é mostrado ao comprador. Após concluir a compra, a transação reflete corretamente a opção de parcelamento único configurada.

## Simulação

- Configure as condições de pagamento de acordo com o Cenário 1 ou o Cenário 2.
- Vá para a página de checkout e adicione qualquer produto ao carrinho. - Conclua a compra e verifique a regra de pagamento aplicada à transação.

## Workaround

**Cenário 1** - a solução alternativa é alinhar o nível de restrição entre as condições de pagamento único e parcelamento único.

Em vez de ter: Condição de pagamento A → 1x (valor total), sem restrições Condição de pagamento B → 10x, com restrições adicionais (emissor/país emissor, banco BIN/intervalos BIN, cobrand, nível do cartão, canal de vendas, etc.)

O comerciante pode configurar: Condição de pagamento A → 1x (valor total), com as mesmas restrições aplicadas na Condição B Condição de pagamento B → 10x, com as mesmas restrições **Cenário 2** - Não há solução alternativa.