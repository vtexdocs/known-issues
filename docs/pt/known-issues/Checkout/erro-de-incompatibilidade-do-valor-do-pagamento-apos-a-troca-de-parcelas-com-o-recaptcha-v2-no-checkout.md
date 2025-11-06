---
title: 'Erro de incompatibilidade do valor do pagamento após a troca de parcelas com o reCaptcha v2 no Checkout'
slug: erro-de-incompatibilidade-do-valor-do-pagamento-apos-a-troca-de-parcelas-com-o-recaptcha-v2-no-checkout
status: PUBLISHED
createdAt: 2025-11-06T23:57:31.817Z
updatedAt: 2025-11-06T23:57:31.817Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: payment-amount-mismatch-error-after-switching-installments-with-recaptcha-v2-in-checkout
locale: pt
kiStatus: Backlog
internalReference: 1320840
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O checkout pode bloquear intermitentemente a colocação do pedido com o erro "O valor do pagamento não corresponde ao valor esperado" depois que o comprador alterna entre as opções de parcelamento com e sem juros e, em seguida, prossegue com a colocação do pedido. Os casos foram reproduzidos de forma consistente quando o reCaptcha v2 está ativado, o que às vezes pode acionar uma solicitação de transação com valor total diferente do total do pagamento.
## Simulação




-

**Pré-requisitos:** Conta com reCaptcha v2 ativado no Checkout. Ter pelo menos um método de pagamento que ofereça parcelas com juros e outra opção sem juros.



-

**Etapas:**

1) Crie um novo carrinho.



2) Selecione um cartão de crédito com uma opção de parcelamento que aplique juros e, em seguida, insira os dados do cartão.



3) Mude para uma opção sem juros para que o valor total seja alterado (o inverso também funciona, ou seja, selecionar primeiro a opção sem juros e depois mudar para uma opção com juros).



4) Clique para finalizar/realizar o pedido. Nas tentativas fracassadas, o Checkout retorna "o valor do pagamento não corresponde ao valor esperado". O comportamento é intermitente, mas facilmente reproduzível (aproximadamente 3 tentativas para reproduzir, em média).
## Workaround



Desative o reCaptcha v2 ou mude do reCaptcha v2 para o reCaptcha v3 no checkout. Como alternativa, tente trocar as opções de parcelamento e faça o pedido novamente.


