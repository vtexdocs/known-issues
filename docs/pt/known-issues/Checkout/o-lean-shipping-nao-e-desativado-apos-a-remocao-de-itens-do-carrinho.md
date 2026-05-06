---
title: 'O Lean Shipping não é desativado após a remoção de itens do carrinho'
slug: o-lean-shipping-nao-e-desativado-apos-a-remocao-de-itens-do-carrinho
status: PUBLISHED
createdAt: 2023-10-09T14:19:49.000Z
updatedAt: 2023-10-09T14:19:49.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-doesnt-deactivate-after-removing-items-from-cart
locale: pt
kiStatus: Backlog
internalReference: 916461
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O recurso "Envio enxuto" não é desativado automaticamente após a remoção de itens do carrinho, mantendo apenas um item quando deveria exibir todas as opções.

## Simulação

- Adicione 2 ou mais itens de diferentes vendedores com SLAs diferentes;
- O Lean Shipping estará ativo;
- Remova todos os itens, mantendo apenas 1;
- O Lean Shipping continuará ativo.

## Workaround

Atualize a página