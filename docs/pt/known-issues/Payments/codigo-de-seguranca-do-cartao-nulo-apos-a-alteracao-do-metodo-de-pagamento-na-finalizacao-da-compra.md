---
title: 'Código de segurança do cartão nulo após a alteração do método de pagamento na finalização da compra'
slug: codigo-de-seguranca-do-cartao-nulo-apos-a-alteracao-do-metodo-de-pagamento-na-finalizacao-da-compra
status: PUBLISHED
createdAt: 2021-10-05T16:35:35.000Z
updatedAt: 2026-06-19T16:01:07.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: card-security-code-null-after-switching-payment-methods-in-checkout
locale: pt
kiStatus: Backlog
internalReference: 442772
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um usuário preenche o código de segurança de um cartão de crédito ou débito, depois alterna para uma forma de pagamento diferente e volta à forma anterior, o código de segurança parece continuar preenchido na interface do usuário — mas, na verdade, está vazio. Isso causa resultados diferentes dependendo do tipo de cartão:

- **Cartão de crédito:** A transação não é iniciada e um erro é exibido na finalização da compra antes de ser enviada ao provedor
- **Cartão de débito:** A transação é iniciada e enviada ao provedor sem o código de segurança do cartão

## Simulação

1. Crie um carrinho e preencha as informações de perfil e logística até chegar à etapa de pagamento.
2. Preencha os dados do cartão na interface nativa do cartão (crédito ou débito).
3. Mude para uma forma de pagamento diferente.
4. Volte para o cartão da etapa 2 — observe que o campo do código de segurança ainda parece preenchido.
5. Preencha os campos obrigatórios restantes sem alterar o código de segurança.
6. Tente finalizar o pedido.

## Workaround

Após mudar de forma de pagamento, apague o campo do código de segurança e insira-o novamente antes de finalizar o pedido.