---
title: 'Erro de mensagem incorreta ao criar/editar SKUs'
slug: erro-de-mensagem-incorreta-ao-criareditar-skus
status: PUBLISHED
createdAt: 2025-12-05T20:27:43.915Z
updatedAt: 2025-12-05T20:27:43.915Z
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


Para criar ou editar uma SKU, é necessário preencher os campos obrigatórios, como peso da remessa, altura, largura e comprimento. No entanto, quando deixamos um desses campos sem um valor válido e salvamos a SKU, o Admin retorna uma mensagem de erro sobre especificações, mesmo quando não há especificações obrigatórias a serem preenchidas.

## Simulação



- Ir para o módulo Catalog
- Adicione um novo produto e salve-o para criar um novo SKU
- Preencha todos os campos, exceto as informações de remessa, que são obrigatórias
- Salve a SKU e observe que duas mensagens serão exibidas: "Invalid parameters" (Parâmetros inválidos) e "Specifications not entered Check tab" (Especificações não inseridas Verificar guia)


## Workaround


Não há solução alternativa


