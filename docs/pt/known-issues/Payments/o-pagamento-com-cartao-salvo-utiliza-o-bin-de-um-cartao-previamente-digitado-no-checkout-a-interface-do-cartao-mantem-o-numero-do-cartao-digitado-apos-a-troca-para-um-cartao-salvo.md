---
title: 'O pagamento com cartão salvo utiliza o BIN de um cartão previamente digitado no Checkout (a interface do cartão mantém o número do cartão digitado após a troca para um cartão salvo).'
slug: o-pagamento-com-cartao-salvo-utiliza-o-bin-de-um-cartao-previamente-digitado-no-checkout-a-interface-do-cartao-mantem-o-numero-do-cartao-digitado-apos-a-troca-para-um-cartao-salvo
status: PUBLISHED
createdAt: 2026-11-12T17:39:36.000Z
updatedAt: 2026-11-12T17:39:36.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: savedcard-payment-uses-the-bin-of-a-previously-typed-card-in-checkout-card-ui-keeps-the-typed-card-number-after-switching-to-a-saved-card
locale: pt
kiStatus: Backlog
internalReference: 1484421
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Se um cliente digitar um novo número de cartão e, em seguida, alternar para um cartão salvo, o pagamento será criado com a regra de pagamento selecionada para o cartão digitado, mas o cartão salvo será o cobrado. Isso ocorre porque a interface do usuário do cartão mantém o número do cartão digitado após a troca e o envia ao Gateway juntamente com o `accountId` do cartão salvo. O Gateway seleciona a regra de pagamento a partir dos primeiros 6 dígitos desse número. Como resultado, o cliente pode receber uma opção de parcelamento ou uma regra restrita por emissor destinada a um cartão de outro banco, e o adquirente pode recusar o pagamento. A troca entre dois cartões salvos, sem digitar nenhum número, não é afetada.

## Simulação

Com um cliente conectado que tenha cartões salvos e uma regra de pagamento restrita a um emissor específico (por exemplo, oferecendo mais opções de parcelamento):

1. Em Pagamento → Cartão de crédito, escolha usar um novo cartão e digite um cartão do emissor da regra restrita.

2. Volte à lista de cartões salvos e selecione um cartão salvo de outra emissora.
3. Finalize a compra.

As parcelas exibidas na tela são recalculadas para o cartão salvo, mas o pagamento é criado com a regra restritiva da emissora do cartão digitado, enquanto o cartão salvo é cobrado.

## Workaround

Se o cliente digitou um número de cartão e depois deseja pagar com um cartão salvo:

- recarregue a página de pagamento antes de selecionar o cartão salvo, **ou**
- limpe o campo do número do cartão antes de voltar à lista de cartões salvos.