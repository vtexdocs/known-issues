---
title: 'A inserção do CEP na visualização de envio do carrinho está gerando opções de endereço duplicadas para clientes recorrentes'
slug: a-insercao-do-cep-na-visualizacao-de-envio-do-carrinho-esta-gerando-opcoes-de-endereco-duplicadas-para-clientes-recorrentes
status: PUBLISHED
createdAt: 2023-12-20T21:36:35.000Z
updatedAt: 2023-12-20T21:36:35.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: placing-postal-code-in-the-shipping-preview-of-the-cart-is-duplicating-address-options-for-recurring-customers
locale: pt
kiStatus: Backlog
internalReference: 956338
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Estamos enfrentando alguns problemas ao inserir códigos postais no módulo **Pré-visualização de envio** do carrinho; alguns deles estão descritos nestas KIs:


- Ref. 1: [KI]  Colocar um código postal na pré-visualização de envio do carrinho às vezes retorna um resultado nulo da API
- Ref. 2: [KI] O campo de entrada do código postal na pré-visualização de envio não fica oculto

Nesse caso, o que acontece é que, para clientes que já têm endereços registrados em seu perfil (compradores recorrentes), ao inserir um código postal na Pré-visualização de Envio já utilizado em uma compra anterior, na API uma opção adicional de endereço de entrega é inserida (`shippingData.availableAddresses`), ao avançar pelas etapas do Checkout e chegar à seleção de endereço (`/checkout/#/shipping`), verifica-se que, em vez de selecionar o endereço correspondente ao referido código postal, abre-se uma nova opção de seleção incompleta e, em alguns casos, oculta, forçando o cliente a selecionar um na lista ou a complementar o “novo” para avançar para a próxima etapa.

## Simulação

1. Use um usuário que já tenha feito algumas compras e cujo perfil tenha algum endereço para entrega.
2. Adicione alguns itens ao carrinho e, em seguida, vá para o checkout.
3. No carrinho, use a Visualização de Envio para inserir o código postal do seu perfil.
  1. Tente revisar o `orderForm` e procure por `shippingData.availableAddresses`
  2. O endereço em seu perfil será listado com um detalhe importante: o endereço já possui o número da rua (`shippingData.availableAddresses.[].number`)
  3. A nova opção na matriz que gera o problema não possui o `number`, o que a converte em uma opção de endereço incompleto.
4. Tente ir para a etapa de envio do checkout (`/checkout/#/shipping`) e você verá que não é possível avançar para a etapa de pagamento se não completar o endereço selecionado ou selecionar outra das opções.

## Workaround

Na etapa de envio do checkout, tente selecionar o endereço listado desejado (forçar a seleção de um dos endereços anteriores do cliente).



%0A