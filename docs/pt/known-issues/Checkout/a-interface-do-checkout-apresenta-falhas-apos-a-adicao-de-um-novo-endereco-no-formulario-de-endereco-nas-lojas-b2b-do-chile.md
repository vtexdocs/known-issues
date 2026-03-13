---
title: 'A interface do checkout apresenta falhas após a adição de um novo endereço no formulário de endereço nas lojas B2B do Chile'
slug: a-interface-do-checkout-apresenta-falhas-apos-a-adicao-de-um-novo-endereco-no-formulario-de-endereco-nas-lojas-b2b-do-chile
status: PUBLISHED
createdAt: 2026-03-13T19:50:34.216Z
updatedAt: 2026-03-13T19:50:34.216Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-breaks-after-new-address-is-added-on-address-form-in-chile-b2b-stores
locale: pt
kiStatus: Backlog
internalReference: 1378467
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Nas lojas chilenas que utilizam o B2B Suite, após adicionar um novo endereço por meio da opção “Entregar em outro endereço” no formulário de endereço da interface do usuário e inserir o estado e o bairro, não é possível inserir as informações de rua e número através da interface, o que causa uma falha na interface e impede a finalização do pedido (o botão “Finalizar pedido” fica carregando indefinidamente)

## Simulação

1. Faça login no site B2B em uma área de trabalho não personalizada, com o tema nativo do B2B, usando um perfil completo vinculado a uma organização com endereços registrados em seu centro de custo 2. Crie um carrinho com um item aleatório e siga até a etapa de Envio 3. Selecione “Alterar opções de entrega” -> “Entregar em outro endereço”
4. Selecione “Estado” e “Bairro” (no Chile, “Região” e “Comuna”, respectivamente) 5. Um dos seguintes cenários ocorrerá: 1. O formulário de endereço exibe a opção de adicionar `número` e `rua`, mas, ao adicioná-los pela interface do usuário, a solicitação `/shippingData` com essas informações não ocorre 2. O formulário de endereço não exibe a opção para adicionar `número` e `rua` Em ambos os casos, a última solicitação `/shippingData` feita atualiza o formulário de pedido apenas com `bairro` e `estado`; `rua` e `número` permanecem em branco, o que impede a realização do pedido.

## Workaround

Não há solução alternativa no momento.