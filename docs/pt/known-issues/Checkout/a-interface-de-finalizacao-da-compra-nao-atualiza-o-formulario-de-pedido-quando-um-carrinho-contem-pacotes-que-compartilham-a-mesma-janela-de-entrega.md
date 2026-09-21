---
title: 'A interface de finalização da compra não atualiza o formulário de pedido quando um carrinho contém pacotes que compartilham a mesma janela de entrega.'
slug: a-interface-de-finalizacao-da-compra-nao-atualiza-o-formulario-de-pedido-quando-um-carrinho-contem-pacotes-que-compartilham-a-mesma-janela-de-entrega
status: PUBLISHED
createdAt: 2026-09-21T18:28:37.000Z
updatedAt: 2026-09-21T18:28:37.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-fails-to-update-orderform-when-a-cart-has-packages-that-share-the-same-delivery-window
locale: pt
kiStatus: Backlog
internalReference: 1463913
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em carrinhos com mais de um pacote de entrega agendada, a janela de entrega não é salva para o segundo pacote quando a mesma data e horário são selecionados para ambos. O checkout salva a janela apenas para o primeiro pacote, deixando o segundo sem nenhuma.

Como resultado, o botão "Ir para o pagamento" não responde, nenhuma mensagem de erro é exibida e nenhuma solicitação é enviada à API do checkout. Embora a interface do usuário mostre uma janela de entrega selecionada para ambos os pacotes, apenas a primeira é salva no formulário de pedido.

Isso afeta carrinhos onde os itens são divididos em dois pacotes, cada um com sua própria opção de entrega agendada, como itens enviados de armazéns diferentes ou sob diferentes condições de entrega.

## Simulação

- Habilite a entrega agendada para dois SLAs/métodos de envio.

- Adicione dois itens ao carrinho - cada um deve receber métodos de envio diferentes.

- Acesse a página `#/envio`.

- Selecione a mesma data e horário de entrega agendada para ambos os pacotes.

- Tente prosseguir para o pagamento.

**Resultado esperado:** O comprador deveria conseguir prosseguir para o pagamento.

**Resultado real:** O comprador não consegue prosseguir para o pagamento.

## Workaround

Selecione um horário de entrega diferente para o segundo pacote e, em seguida, selecione novamente o horário de entrega desejado.