---
title: 'Seleção inesperada de vários pontos de retirada para o mesmo vendedor, quando nem todos os itens estão disponíveis por meio da mesma opção'
slug: selecao-inesperada-de-varios-pontos-de-retirada-para-o-mesmo-vendedor-quando-nem-todos-os-itens-estao-disponiveis-por-meio-da-mesma-opcao
status: PUBLISHED
createdAt: 2021-11-11T20:53:49.000Z
updatedAt: 2023-05-05T10:34:30.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: unexpected-multiple-pickup-point-selection-for-the-same-seller-when-not-every-item-is-available-through-the-same-option
locale: pt
kiStatus: Backlog
internalReference: 467702
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os componentes do ponto de retirada na interface de checkout estão configurados para lidar com uma única opção por vendedor. Os itens de diferentes vendedores regulares são gerenciados separadamente, mas, no caso de um vendedor de marca branca, eles serão considerados no mesmo grupo.

Se nem todos os itens estiverem disponíveis na mesma opção de ponto de retirada para o mesmo vendedor, isso pode levar a um erro, o que inclui o tratamento incorreto dos itens de uma opção selecionada posteriormente ou até mesmo a exibição incorreta das opções adicionais aplicadas a diferentes itens no formulário de pedido, focando apenas na primeira opção de ponto de retirada.

O cenário esperado é que qualquer opção selecionada anteriormente seja removida para aplicar apenas a última selecionada pelo usuário.

## Simulação

- ter um carrinho com um endereço onde não haja opções de retirada que abranjam todos os itens,
- interagir com as diferentes opções de retirada para ver combinações inesperadas

## Workaround

Atualmente, não há solução alternativa para este cenário.