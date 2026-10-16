---
title: 'As configurações de finalização de compra B2B consideram o endereço de coleta para entregas.'
slug: as-configuracoes-de-finalizacao-de-compra-b2b-consideram-o-endereco-de-coleta-para-entregas
status: PUBLISHED
createdAt: 2025-02-26T20:57:28.000Z
updatedAt: 2026-10-16T16:58:24.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-checkout-settings-is-considering-pickup-address-for-deliveries
locale: pt
kiStatus: Backlog
internalReference: 1186568
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As configurações do Checkout B2B consideram todos os endereços disponíveis para entrega, incluindo endereços de retirada. Se um endereço de retirada for selecionado, a página de Checkout trava e não permite prosseguir para a etapa de pagamento enquanto o endereço de retirada estiver selecionado como endereço de entrega.

Na API do Checkout, é possível ver a mensagem "O endereço não pode ser usado para o canal de entrega especificado".

## Simulação

- Adicione qualquer produto ao carrinho;

- Na etapa de envio, altere para retirada e volte para entrega;

- O endereço de retirada aparecerá como endereço de entrega;

- Tente selecionar o endereço de retirada inserido na lista de endereços;

- Você não conseguirá prosseguir para a etapa de pagamento.

## Workaround

Atualize a página.