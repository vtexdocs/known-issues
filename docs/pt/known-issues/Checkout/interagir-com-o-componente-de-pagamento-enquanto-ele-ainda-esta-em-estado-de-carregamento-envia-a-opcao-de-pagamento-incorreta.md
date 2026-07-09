---
title: 'Interagir com o componente de pagamento enquanto ele ainda está em estado de carregamento envia a opção de pagamento incorreta.'
slug: interagir-com-o-componente-de-pagamento-enquanto-ele-ainda-esta-em-estado-de-carregamento-envia-a-opcao-de-pagamento-incorreta
status: PUBLISHED
createdAt: 2023-12-13T01:07:44.000Z
updatedAt: 2026-07-09T14:54:00.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: interacting-with-the-payment-component-while-is-still-in-a-loading-state-sends-the-wrong-payment-option
locale: pt
kiStatus: No Fix
internalReference: 952086
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um cliente seleciona uma subopção de pagamento (por exemplo, EFECTY, PSE, Boleto) enquanto o componente de pagamento ainda está carregando na página de finalização da compra, uma condição de corrida faz com que a opção errada seja enviada para o formulário de pedido. Em vez da opção selecionada pelo cliente, a primeira subopção disponível é enviada. O pedido não é criado e o cliente vê um erro solicitando que revise suas informações de pagamento.

## Simulação

- Adicione itens ao carrinho e prossiga para a etapa de pagamento.

- Enquanto o componente de pagamento ainda está carregando, clique em um método de pagamento que tenha várias subopções.

- Selecione qualquer subopção que não seja a primeira da lista.

- Tente fazer o pedido.

- Observe que o pedido falha e a primeira subopção da lista foi enviada em vez da selecionada.

- Observação: o comportamento é intermitente, pois depende do momento durante o carregamento.

## Workaround

Aguarde o carregamento completo do componente de pagamento antes de selecionar um método de pagamento ou qualquer uma de suas subopções. Prossiga com a seleção somente depois que todas as opções estiverem visíveis e o indicador de carregamento tiver desaparecido.