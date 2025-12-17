---
title: 'Inconsistência no comportamento da condição de pagamento em parcela única no checkout'
slug: inconsistencia-no-comportamento-da-condicao-de-pagamento-em-parcela-unica-no-checkout
status: PUBLISHED
createdAt: 2025-12-17T12:51:40.186Z
updatedAt: 2025-12-17T12:51:40.186Z
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



Ao configurar as condições de pagamento que incluem uma única opção de parcelamento, a interface do usuário do checkout não reflete consistentemente a configuração de parcelamento que será realmente aplicada pelo gateway de pagamentos.
Em cenários em que várias regras de pagamento são elegíveis, o gateway sempre aplica a regra mais restritiva (por exemplo, com base no país do emissor e/ou banco BIN), independentemente da opção de parcelamento selecionada pelo comprador na interface do usuário do checkout.
Como resultado, a interface do usuário do checkout pode exibir opções de parcelamento que não correspondem à regra aplicada ou pode exibir apenas o valor total enquanto a transação é processada com uma condição de pagamento de parcela única.

Cenário 1 - Duas condições de pagamento (pagamento único e parcela única)
Configuração

Duas condições de pagamento ativas para o mesmo método de pagamento:

Condição de pagamento A (Regra): Pagamento único (1x valor total), sem restrições

Condição de pagamento B (regra): Parcela única (10x, pagamento não único), com restrições adicionais (por exemplo, país emissor e/ou banco BIN)

Comportamento esperado

A UI de checkout é exibida:

Opção de parcela única

Independentemente da opção selecionada na interface do usuário (incluindo a seleção de pagamento único), a transação é processada usando a Condição B, pois é a regra mais restritiva correspondente ao BIN do cartão.

Esse é o comportamento atual e esperado do Gateway de pagamentos, pois a priorização da regra é baseada no nível de restrição, não na seleção da interface do usuário.

Cenário 2 - Condição de pagamento único com uma opção de parcelamento
Configuração

Uma única condição de pagamento configurada com:

Apenas uma opção de parcelamento, diferente do pagamento único

Comportamento esperado

a. A interface de usuário do checkout exibe apenas a opção de pagamento único
b. Ao concluir a compra, a transação é processada usando a condição de pagamento de parcela única configurada

A opção de parcelamento é retornada corretamente na resposta paymentData (visível via DevTools → Network).

A opção de parcelamento não é exibida no menu suspenso de parcelamento do checkout.

Somente o valor total (pagamento único) é exibido para o comprador.

Após a conclusão da compra, a transação reflete corretamente a opção de pagamento único configurada.
## Simulação



- Configure as condições de pagamento de acordo com o Cenário 1 ou o Cenário 2.
- Vá para a página de checkout e adicione qualquer produto ao carrinho.
- Conclua a compra e verifique a regra de pagamento aplicada à transação.


## Workaround


Não há solução alternativa.%0A