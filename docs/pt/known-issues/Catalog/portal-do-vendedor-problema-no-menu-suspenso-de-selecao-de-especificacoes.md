---
title: 'Portal do vendedor: Problema no menu suspenso de seleção de especificações'
slug: portal-do-vendedor-problema-no-menu-suspenso-de-selecao-de-especificacoes
status: PUBLISHED
createdAt: 2022-12-06T14:27:31.000Z
updatedAt: 2023-05-09T19:07:57.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-portal-select-specifications-dropdown-malfunctioning
locale: pt
kiStatus: Backlog
internalReference: 711303
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, a caixa de seleção de especificações do produto na página accountname.myvtex.com/admin/products/new/ apresenta um comportamento incorreto ao tentar selecionar um valor para uma especificação do produto.

Quando o usuário tenta escolher um valor, às vezes, o campo de entrada abaixo é selecionado por engano.

Por exemplo, você tem duas opções: cor e tamanho. Ao clicar em cor, às vezes, o tamanho é selecionado em vez disso:

 ![](https://vtexhelp.zendesk.com/attachments/token/PpTFjmsH4i975D0uQSLD7WmkO/?name=image.png)

## Simulação

Este é um caso intermitente; portanto, é bastante difícil replicá-lo de forma consistente.

De qualquer forma, para fazê-lo, você deve acessar a página mencionada acima e escolher a função (+) adicionar variações.

Ao fazer isso, aparecerá um pop-up com o menu suspenso em questão, que apresenta o comportamento defeituoso. Tentar selecionar um valor pode retornar os dados abaixo em seu lugar.

## Workaround

Usar as APIs ou mesmo simplesmente alterar o idioma do administrador trará resultados positivos.