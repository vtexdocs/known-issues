---
title: 'As opções de montagem são ignoradas quando selecionadas na página de detalhes do produto (PDP) e ao adicionar ao carrinho'
slug: as-opcoes-de-montagem-sao-ignoradas-quando-selecionadas-na-pagina-de-detalhes-do-produto-pdp-e-ao-adicionar-ao-carrinho
status: PUBLISHED
createdAt: 2023-01-31T15:59:59.000Z
updatedAt: 2023-04-05T21:24:21.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: assembly-options-being-ignored-when-selected-on-pdp-and-adding-to-cart
locale: pt
kiStatus: Fixed
internalReference: 743529
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em uma página de detalhes do produto (PDP) com opções de montagem, quando o usuário seleciona quantidades diferentes para um único item e vai para o carrinho do checkout, a seleção é ignorada e as quantidades são redefinidas para a quantidade inicial. Mas se o usuário aumentar, para **todos** os itens, a quantidade em pelo menos 1, a seleção é mantida.

## Simulação

- Faça login na conta;
- Acesse a PDP de um produto com montagem;
- Os itens serão exibidos com as quantidades iniciais;
- Aumente em 1 a quantidade de qualquer um dos itens e clique no botão “Adicionar ao carrinho”;
- Em seguida, vá para o carrinho do checkout e você notará as quantidades iniciais, o que significa que a seleção anterior foi ignorada.

## Workaround

Defina a quantidade mínima de itens que podem ser selecionados do grupo como 0 nas configurações de anexo, por exemplo: [_**0**_-3]#10000[1-7][1]pricetable1;#20000[2-8][2]pricetable2;#30000[3-6][3]pricetable3