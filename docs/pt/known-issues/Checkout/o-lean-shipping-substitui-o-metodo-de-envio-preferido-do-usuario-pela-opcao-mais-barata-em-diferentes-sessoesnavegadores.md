---
title: 'O Lean Shipping substitui o método de envio preferido do usuário pela opção mais barata em diferentes sessões/navegadores'
slug: o-lean-shipping-substitui-o-metodo-de-envio-preferido-do-usuario-pela-opcao-mais-barata-em-diferentes-sessoesnavegadores
status: PUBLISHED
createdAt: 2025-11-14T19:16:56.256Z
updatedAt: 2025-11-14T19:16:56.256Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-overrides-user-preferred-shipping-method-to-cheapest-option-in-different-sessionsbrowsers
locale: pt
kiStatus: Backlog
internalReference: 607411
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em novas sessões (navegadores diferentes) para o mesmo formulário de pedido, a opção selecionada anteriormente não é levada em conta, sendo sempre sobreposta à opção "mais barata", o que afeta especialmente os cenários de carrinho compartilhado
## Simulação



- Faça o processo de compra até chegar ao carrinho, faça uma simulação de frete e selecione a opção mais rápida que tenha o valor do frete a ser cobrado
- Gere o link de venda social (carrinho compartilhado) e abra-o em uma nova guia anônima, por exemplo
- Veja que o custo do frete é a opção mais barata em vez da opção selecionada anteriorment
## Workaround


N/A


