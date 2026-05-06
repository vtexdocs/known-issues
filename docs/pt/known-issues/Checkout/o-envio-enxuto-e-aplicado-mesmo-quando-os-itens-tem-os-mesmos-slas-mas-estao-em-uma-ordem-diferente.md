---
title: 'O envio enxuto é aplicado mesmo quando os itens têm os mesmos SLAs, mas estão em uma ordem diferente'
slug: o-envio-enxuto-e-aplicado-mesmo-quando-os-itens-tem-os-mesmos-slas-mas-estao-em-uma-ordem-diferente
status: PUBLISHED
createdAt: 2021-10-22T16:40:31.000Z
updatedAt: 2023-09-11T21:38:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-being-forced-even-when-the-items-have-the-same-slas-but-in-a-different-ordination
locale: pt
kiStatus: Fixed
internalReference: 455218
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos, é possível que, mesmo que o recurso LeanShipping esteja desativado nas configurações, o sistema ainda considere necessário agrupar as opções de envio e, por isso, não desative o LeanShipping. Isso ocorre porque a regra utilizada pelo sistema para definir o uso ou não do LeanShipping não se baseia apenas na configuração (ativada ou desativada), mas também na existência de SLAs iguais ou diferentes disponíveis para os itens do carrinho;
No entanto, há cenários em que apenas a ordem em que os SLAs são apresentados faz com que o sistema entenda que se trata de SLAs diferentes, ativando o LeanShipping no checkout e começando a exibir as etiquetas mais rápidas e baratas para o método de envio.

## Simulação

Não há uma maneira linear de replicar o cenário; no entanto, ele pode ocorrer sempre que tivermos um carrinho com dois ou mais itens cujos SLAs sejam semelhantes entre os itens e estejam sendo apresentados em ordens diferentes dentro do SLA de cada item;

## Workaround

N/A