---
title: 'O aplicativo de vendas redireciona para /payment após a inserção do código do vendedor (ignorando a etapa atual do checkout)'
slug: o-aplicativo-de-vendas-redireciona-para-payment-apos-a-insercao-do-codigo-do-vendedor-ignorando-a-etapa-atual-do-checkout
status: PUBLISHED
createdAt: 2026-05-15T19:37:16.000Z
updatedAt: 2026-05-15T19:37:16.000Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: sales-app-redirects-to-payment-after-entering-salesperson-code-ignores-current-step-in-checkout
locale: pt
kiStatus: Backlog
internalReference: 1407771
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No aplicativo de vendas, após a inserção do código do vendedor, o fluxo é redirecionado incorretamente diretamente para a etapa de pagamento, ignorando a etapa prevista de informações do cliente. O sintoma visível é uma navegação abrupta para `/payment`, independentemente da página em que o usuário se encontra (por exemplo, a partir do carrinho).

## Simulação

- Crie um carrinho no aplicativo de vendas.
- Clique em “Adicionar” para o código do fornecedor. Uma barra lateral será aberta, onde você poderá inserir o código do vendedor.
- Clique em “Aplicar”


Observe que o aplicativo navega diretamente para a página de pagamento do Checkout (/payment), pulando a etapa de informações do cliente, mesmo que você não estivesse em uma etapa que deveria fazer a transição para o pagamento.

## Workaround

Não insira o código do vendedor na etapa `/cart`. Aguarde até chegar à página `/order-summary`.