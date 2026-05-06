---
title: 'Os pedidos com itens na matriz MarketplaceItems não estão sendo exibidos na nova interface de administração'
slug: os-pedidos-com-itens-na-matriz-marketplaceitems-nao-estao-sendo-exibidos-na-nova-interface-de-administracao
status: PUBLISHED
createdAt: 2022-09-13T03:01:48.000Z
updatedAt: 2023-09-28T15:01:03.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-with-items-on-array-marketplaceitems-is-not-opening-on-new-ui-admin
locale: pt
kiStatus: Fixed
internalReference: 656821
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas encomendas apresentam a matriz "Itens do marketplace" preenchida com mais itens do que a matriz "itens" do JSON da encomenda. Essa configuração é normal e diz respeito, por exemplo, a "listas de presentes de casamento".
No entanto, a nova interface do usuário não está preparada para lidar com esse tipo de encomenda com itens na matriz "Itens do marketplace" e exibe uma mensagem de erro:


"Desculpe, ocorreu um erro do nosso lado.
Tente novamente ou atualize a página.
Voltar à lista"

## Simulação

Crie um pedido com catálogo usando a matriz "Itens do marketplace"; depois disso, você pode tentar visualizar o pedido na interface de administração. A interface irá falhar e exibirá uma mensagem de erro.

## Workaround

Use a interface antiga para abrir esse pedido.