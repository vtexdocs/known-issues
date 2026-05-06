---
title: 'Pedidos sem endereço de faturamento criados por meio da interface de usuário nativa'
slug: pedidos-sem-endereco-de-faturamento-criados-por-meio-da-interface-de-usuario-nativa
status: PUBLISHED
createdAt: 2020-11-16T17:31:41.000Z
updatedAt: 2023-12-19T21:34:01.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orders-without-invoiceaddress-created-through-native-ui
locale: pt
kiStatus: Fixed
internalReference: 306140
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos, ainda é possível criar pedidos sem o campo `invoiceAddress` através da interface de checkout.
O endereço de faturamento deve ser obrigatório na interface de todas as lojas que tenham essa funcionalidade ativada.

## Simulação

Até o momento, as etapas conhecidas para reproduzir o cenário são:


1. Acesse a loja sem estar conectado/identificado
2. Coloque um produto no carrinho
3. No carrinho, clique em “Fechar pedido”
4. Na tela de e-mail, insira um endereço de e-mail de um comprador existente — o usuário provavelmente será direcionado para a etapa de pagamento
5. Clique para editar a etapa de entrega e selecione “retirada”
6. Não preencha o endereço de entrega
7. Clique para editar “Dados pessoais”
8. Será solicitado que você faça login.
9. Após o login, na etapa de edição de “Dados Pessoais”, aparecerá o botão para ir diretamente para o pagamento, mesmo que o endereço de faturamento não esteja preenchido.

Além do acima exposto, o comportamento pode ser observado quando o usuário está na etapa de envio e, ao recarregar a página, é automaticamente direcionado para o pagamento sem preencher os dados de faturamento.
Outro cenário que induz o comportamento é alternar entre a lista de endereços previamente registrados e um novo endereço, o que permite que o usuário prossiga para o pagamento sem preencher o CEP (de um novo endereço).

## Workaround

Não há nenhuma solução alternativa conhecida para evitar o cenário original.