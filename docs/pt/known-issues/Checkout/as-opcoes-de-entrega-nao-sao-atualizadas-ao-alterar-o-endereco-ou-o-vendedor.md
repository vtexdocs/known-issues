---
title: 'As opções de entrega não são atualizadas ao alterar o endereço ou o vendedor'
slug: as-opcoes-de-entrega-nao-sao-atualizadas-ao-alterar-o-endereco-ou-o-vendedor
status: PUBLISHED
createdAt: 2020-09-18T00:59:05.000Z
updatedAt: 2023-06-22T19:53:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: schedule-delivery-options-are-not-updated-when-changing-address-or-seller
locale: pt
kiStatus: Backlog
internalReference: 288574
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

**Cenário 1**: Em um carrinho identificado (mas sem login), com um endereço mascarado na etapa de envio, ao alternar entre os endereços disponíveis, as opções de janela de entrega não são recalculadas na interface do usuário.

**Cenário 2**: Em um carrinho onde dois vendedores de marca branca estão configurados com o mesmo ID de SLA, mas com opções de janela de entrega diferentes. Após alterar a opção de entrega selecionada e o vendedor, as opções de janela de entrega não são recalculadas na interface do usuário.

Há uma solicitação à API, que retorna com o "deliveryWindow", mas a interface do usuário não atualiza o componente. Ao selecionar uma janela de entrega inválida, não é possível avançar para a etapa de pagamento para concluir a compra.

## Simulação

### Cenário 1

- Registrar um comprador com dois endereços;
- Montar um carrinho e alternar entre os endereços disponíveis na etapa de envio;
- Selecionar a janela de entrega.


### Cenário 2

- Configurar dois vendedores de marca branca diferentes com o mesmo ID de SLA para entrega programada, mas com janelas de entrega diferentes;
- Cada um dos vendedores de marca branca também deve ter sua própria opção de entrega programada;
- Selecione a entrega programada específica para um dos vendedores;
- Alterne para a entrega programada com o mesmo ID de SLA e selecione o horário de entrega.

## Workaround

**Cenário 1**: N/A
**Cenário 2**: Configure o mesmo horário de entrega para todos os vendedores de marca branca ou altere o ID de SLA.