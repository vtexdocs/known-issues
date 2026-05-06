---
title: 'orderForm (API Chk) indica uma data de entrega programada inválida que não pode ser utilizada'
slug: orderform-api-chk-indica-uma-data-de-entrega-programada-invalida-que-nao-pode-ser-utilizada
status: PUBLISHED
createdAt: 2020-10-21T23:23:00.000Z
updatedAt: 2023-12-01T13:10:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-chk-api-suggesting-invalid-scheduled-delivery-that-cant-be-used
locale: pt
kiStatus: Backlog
internalReference: 298665
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um carrinho/formulário de pedido contém vários itens com entrega programada do mesmo vendedor, as opções programadas com o mesmo ID (consideradas o mesmo método de envio) precisam ter os mesmos intervalos de entrega entre si. Se não houver sobreposição, o método de envio será descartado para alguns itens.

O problema é que, em alguns fluxos, como a API “GET orderForm”, esse comportamento de filtragem não está sendo aplicado, oferecendo uma entrega programada inválida (sem sobreposição). Em outros fluxos, como na “

## Simulação

de orderForm” ou durante a seleção do método de envio, a opção oferecida será corretamente filtrada/removida.

Efeito colateral: a interface do usuário do Chk tentará usar/simular a opção inválida e pode ficar presa em um **loop de solicitações** porque o método de envio está disponível no primeiro momento, mas não pode ser usado no segundo momento, e a interface do usuário tenta a primeira etapa novamente enquanto analisa as opções disponíveis no orderForm.


## **Simulação**

- Para o mesmo vendedor, configure duas políticas de envio diferentes (transportadoras) com o mesmo “tipo de frete” (que define o “slaId”);
- Ambas são entregas agendadas, mas com janelas de entrega diferentes entre si;
- Adicione 2 itens ao carrinho, um item de cada política de envio.

A interface do usuário pode ficar travada em um loop devido à divergência entre o "GET orderForm" e a "simulação do orderForm".

## Workaround

É necessário corrigir a janela de entrega entre os métodos de envio com o mesmo ID (para que tenham as mesmas janelas de entrega) ou tratá-los como métodos de envio diferentes, usando IDs diferentes.