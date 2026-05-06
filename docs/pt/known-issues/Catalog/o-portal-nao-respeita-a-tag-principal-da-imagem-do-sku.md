---
title: 'O portal não respeita a tag "Principal" da imagem do SKU'
slug: o-portal-nao-respeita-a-tag-principal-da-imagem-do-sku
status: PUBLISHED
createdAt: 2022-12-07T17:47:12.000Z
updatedAt: 2022-12-08T13:43:57.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: portal-dont-respect-the-tag-principal-of-skus-image
locale: pt
kiStatus: Backlog
internalReference: 712443
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Uma loja precisa configurar a imagem **Principal**, independentemente da ordem em que ela foi carregada no sistema. Atualmente, o sistema não respeita a tag **Principal** e acaba considerando a primeira imagem registrada como a principal.

## Simulação

1. Configure duas imagens na SKU.

2. Tente alterar a imagem principal usando o botão **Principal** na lista de imagens.

3. Verifique na vitrine da loja se a alteração funcionou.

## Workaround

Sempre defina a imagem que você deseja como principal como a primeira imagem registrada para o SKU. Isso implica mais trabalho, pois é necessário apagar as imagens e recarregá-las.