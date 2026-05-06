---
title: 'Validação de anexos apenas na loja virtual ao adicionar um item de um vendedor que inclua um anexo'
slug: validacao-de-anexos-apenas-na-loja-virtual-ao-adicionar-um-item-de-um-vendedor-que-inclua-um-anexo
status: PUBLISHED
createdAt: 2023-12-22T18:18:42.000Z
updatedAt: 2023-12-22T18:18:42.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: attachment-validation-only-in-the-marketplace-when-adding-an-item-from-a-seller-with-attachment
locale: pt
kiStatus: Backlog
internalReference: 957343
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao adicionar um item de um vendedor com um anexo na mesma solicitação de API, a validação do anexo ocorre apenas no marketplace.

**Cenário 1:**
Se o marketplace tiver o mesmo nome de anexo, mas as chaves forem diferentes das do vendedor, será exibida a mensagem de erro “O anexo do item possui um valor inválido para a chave”, e o item não será adicionado ao carrinho.

**Cenário 2:**
Se o marketplace não tiver o mesmo anexo, será exibida a mensagem de erro “O nome do anexo é inválido” e o item não será adicionado ao carrinho.

Esse comportamento ocorre em ambas as APIs para adicionar itens: Adicionar itens ao carrinho e Gerenciar itens do carrinho.

## Simulação

- Configure o mesmo anexo no marketplace e no vendedor com chaves de campo diferentes;
- Associe a um item;
- Adicione o item por meio de Adicionar itens ao carrinho ou Gerenciar itens do carrinho, com anexos.


- Configure um anexo no vendedor e associe-o a um item;
- Adicione o item via Adicionar itens ao carrinho ou Gerenciar itens do carrinho, com anexos.

## Workaround

- Adicione o item primeiro e o anexo depois em solicitações diferentes. Para enviar o anexo, você pode:
  - enviar os anexos via Gerenciar itens do carrinho;
  - enviar os anexos via Adicionar um anexo a um item, por exemplo:

    curl --location 'https://{accountName}.{environment}.com.br/api/checkout/pub/orderForm/{orderFormId}/items/{itemIndex}/attachments/{attachmentName}' \--header 'Content-Type: application/json' \--data '{  "content": { "key": "value"  },  "noSplitItem": true}'