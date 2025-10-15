---
title: Carrinhos quebrados ao adicionar a opção de montagem indisponível
slug: carrinhos-quebrados-ao-adicionar-a-opcao-de-montagem-indisponivel
status: PUBLISHED
createdAt: 2025-10-15T20:35:32.646Z
updatedAt: 2025-10-15T20:35:32.646Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: broken-carts-when-adding-unavailable-assembly-option
locale: pt
kiStatus: Backlog
internalReference: 1308431
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Ao adicionar um item com opções de montagem a um carrinho que:

- Tem uma localização de comprador conhecida;
- Já tem um item disponível no carrinho com a mesma opção de montagem;
- Seleciona um vendedor que não é capaz de atender ao item adicionado devido a esse cenário.

O carrinho entrará em um estado defeituoso em que não poderá ser acessado e nenhuma operação poderá ser feita nele.
## Simulação



Isso não é fácil de reproduzir, e vários fatores podem afetar a seleção do vendedor.


- Crie um carrinho e adicione dados de localização;
- Adicione um item disponível com uma opção de montagem;
- Adicione um item com a mesma montagem que seleciona um vendedor que não pode atender ao carrinho;
- Será gerado um erro de comunicação e o carrinho entrará em estado de falha
## Workaround


N/A



