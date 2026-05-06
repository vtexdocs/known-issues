---
title: 'A função `addToCart` não funciona corretamente com anexos e com os anexos dos componentes das opções de montagem'
slug: a-funcao-addtocart-nao-funciona-corretamente-com-anexos-e-com-os-anexos-dos-componentes-das-opcoes-de-montagem
status: PUBLISHED
createdAt: 2023-05-23T15:40:20.000Z
updatedAt: 2023-05-23T15:40:20.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: addtocart-function-doesnt-work-correctly-with-attachments-and-assembly-options-components-attachment
locale: pt
kiStatus: Backlog
internalReference: 830495
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A função `addToCart` não funciona corretamente quando um produto possui opções de montagem e anexos configurados e um dos componentes dessas opções de montagem também possui anexos. Apenas o anexo do componente será adicionado ao carrinho.

## Simulação

- Configure um acessório para um produto;
- Configure opções de montagem para o mesmo produto, nas quais um dos componentes tenha acessórios;
- Adicione o produto ao carrinho, selecionando os acessórios do produto e do componente;
- Acesse o checkout e verifique se o acessório do produto não foi adicionado.

## Workaround

N/A