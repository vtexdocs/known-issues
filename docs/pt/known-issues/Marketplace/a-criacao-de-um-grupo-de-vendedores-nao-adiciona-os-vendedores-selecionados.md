---
title: 'A criação de um grupo de vendedores não adiciona os vendedores selecionados'
slug: a-criacao-de-um-grupo-de-vendedores-nao-adiciona-os-vendedores-selecionados
status: PUBLISHED
createdAt: 2023-10-27T17:33:31.000Z
updatedAt: 2024-01-26T16:53:58.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: seller-group-creation-does-not-add-selected-sellers
locale: pt
kiStatus: Fixed
internalReference: 926969
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O marketplace pode criar grupos com alguns vendedores na interface de gerenciamento de vendedores.
 ![](https://vtexhelp.zendesk.com/attachments/token/Mi9PZxDSnInogb65PbJ3fEduu/?name=image.png)

No entanto, ao adicionar um nome de grupo e vendedores nessa interface, apenas o nome do grupo é salvo. Aparece uma mensagem de erro:
"Desculpe, ocorreu um erro ao adicionar os vendedores ao grupo XXX."
 ![](https://vtexhelp.zendesk.com/attachments/token/Gd0FRbqKLDnCGFmIjuXIctxwX/?name=image.png)

## Simulação

1. Acesse a área de Gerenciamento de Vendedores e clique em Gerenciar grupos;
2. Clique em Adicionar Grupo e insira as informações, como nome e vendedores;
3. Verifique se o grupo foi criado, mas sem nenhum vendedor.

## Workaround

Adicione os vendedores ao grupo manualmente posteriormente na interface de usuário “Detalhes do Vendedor”