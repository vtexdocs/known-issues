---
title: 'Possibilidade de prosseguir com o pagamento mesmo que o código postal esteja em branco na interface de finalização da compra'
slug: possibilidade-de-prosseguir-com-o-pagamento-mesmo-que-o-codigo-postal-esteja-em-branco-na-interface-de-finalizacao-da-compra
status: PUBLISHED
createdAt: 2021-02-12T14:02:53.000Z
updatedAt: 2023-01-18T21:47:29.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: possibility-to-proceed-to-payment-with-blank-postal-code-in-the-checkout-ui
locale: pt
kiStatus: Backlog
internalReference: 334310
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um usuário que já está logado vai para o checkout, onde os dados são ocultados, e, no formulário de envio, escolhe a opção de entrega em outro endereço, existe a possibilidade de avançar para o pagamento sem precisar preencher o CEP. Assim, chega-se ao processo de pagamento com os dados de entrega em branco na interface do usuário.

## Simulação

Você precisa ter seus dados ocultos e um produto que possa ser tanto entregue quanto retirado.


1. Adicione produtos ao carrinho (sem login)
2. Vá para o checkout e preencha com seu e-mail (usuário com dados completos, endereço e perfil)
3. Entre no checkout com seus dados mascarados
4. Vá para o formulário de envio e escolha “Entregar em outro endereço”
5. Não preencha o código postal e pressione o botão “Ir para o pagamento”
6. Agora você tem um endereço de entrega em branco

## Workaround

NA