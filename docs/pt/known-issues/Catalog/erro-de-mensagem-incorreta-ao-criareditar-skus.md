---
title: 'Erro de mensagem incorreta ao criar/editar SKUs'
slug: erro-de-mensagem-incorreta-ao-criareditar-skus
status: PUBLISHED
createdAt: 2023-03-20T22:49:59.000Z
updatedAt: 2025-12-05T23:27:12.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrect-message-error-when-creatingediting-skus
locale: pt
kiStatus: Backlog
internalReference: 774518
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para criar ou editar um SKU, é necessário preencher os campos obrigatórios, como peso, altura, largura e comprimento da remessa. No entanto, quando deixamos um desses campos sem um valor válido e salvamos o SKU, o Admin exibe uma mensagem de erro sobre as especificações, mesmo quando não há especificações obrigatórias a serem preenchidas.

## Simulação

- Acesse o Módulo de Catálogo
- Adicione um novo produto e salve-o para criar um novo SKU
- Preencha todos os campos, exceto as informações de envio — que são obrigatórias
- Salve o SKU e observe que duas mensagens serão exibidas: “Parâmetros inválidos” e “Especificações não inseridas. Verifique a guia”

## Workaround

Não há solução alternativa