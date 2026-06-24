---
title: 'O botão "Publicar" apresenta falhas intermitentes na criação/atualização de produtos no Seller Portal.'
slug: o-botao-publicar-apresenta-falhas-intermitentes-na-criacaoatualizacao-de-produtos-no-seller-portal
status: PUBLISHED
createdAt: 2026-03-25T20:02:23.000Z
updatedAt: 2026-06-24T20:19:58.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: publish-button-intermittently-unresponsive-in-seller-portal-product-creationupdate
locale: pt
kiStatus: Backlog
internalReference: 1383511
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em algumas contas do Seller Portal, clicar no botão "Publicar" durante a criação ou atualização de um produto, de forma intermitente, não produz nenhum resultado e a janela de confirmação não é exibida. Às vezes, a janela aparece, mas o botão "Atualizar" seguinte não executa nenhuma ação. Os cenários afetados incluem a criação de novos produtos e a atualização de produtos existentes por meio do Seller Portal.

## Simulação

1) Abra o Seller Portal e comece a criar um novo produto ou abra um produto existente para editar. Use dados de produto típicos;

2) Clique no botão "Publicar". Observe que, intermitentemente, a janela de confirmação não é aberta e nenhum erro de interface é exibido;

3) Verifique a guia "Rede" das Ferramentas de Desenvolvedor do navegador (F12). Nenhuma função `createProduct` ou `updateProduct` foi executada nos registros.

## Workaround

Registre o produto por meio da API do Seller Portal.