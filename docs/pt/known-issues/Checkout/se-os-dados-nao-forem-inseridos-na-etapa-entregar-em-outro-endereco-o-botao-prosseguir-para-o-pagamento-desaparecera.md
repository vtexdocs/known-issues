---
title: 'Se os dados não forem inseridos na etapa “entregar em outro endereço”, o botão “prosseguir para o pagamento” desaparecerá'
slug: se-os-dados-nao-forem-inseridos-na-etapa-entregar-em-outro-endereco-o-botao-prosseguir-para-o-pagamento-desaparecera
status: PUBLISHED
createdAt: 2021-11-11T17:44:34.000Z
updatedAt: 2023-10-13T15:29:02.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: failure-to-add-data-in-the-deliver-to-another-address-step-causes-the-go-to-payment-button-to-disappear
locale: pt
kiStatus: Backlog
internalReference: 467419
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Durante a etapa de finalização da compra, na fase de preenchimento dos dados de entrega, ao clicar na opção “Entregar em outro endereço”, se nenhum endereço for adicionado e o comprador voltar à lista de endereços (usando o botão “Voltar à agenda de endereços”), o botão “Ir para o pagamento” desaparece.

## Simulação

- Durante a etapa de finalização da compra, ao preencher os dados de entrega, se houver uma lista de endereços, clique em “Entregar em outro endereço”;
- Não adicione nenhum endereço e retorne aos dados de envio clicando no botão “Voltar à lista de endereços”;
- O botão “Ir para o pagamento” desaparece.

## Workaround

Para que o botão seja exibido novamente, basta clicar em um dos endereços da lista de endereços. No entanto, não há solução alternativa para evitar esse comportamento.