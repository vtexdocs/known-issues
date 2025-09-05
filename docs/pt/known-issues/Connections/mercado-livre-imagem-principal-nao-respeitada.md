---
title: Mercado Livre Imagem principal não respeitada
slug: mercado-livre-imagem-principal-nao-respeitada
status: PUBLISHED
createdAt: 2025-09-05T16:26:37.989Z
updatedAt: 2025-09-05T16:26:37.989Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-main-image-not-respected
locale: pt
kiStatus: Backlog
internalReference: 1287784
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A imagem principal definida no VTEX admin não é respeitada na integração com o Mercado Livre. A imagem principal exibida na Netshoes é sempre a primeira imagem enviada, com base na ordem de envio, independentemente da imagem marcada como principal na VTEX.

## Simulação



- Acesse o administrador da VTEX e abra um produto.
- Faça upload de duas ou mais imagens para uma SKU. Selecione uma delas como a imagem principal, mas não a primeira adicionada.
- Após a sincronização com o Mercado Livre, observe que a imagem principal exibida no marketplace é a primeira imagem carregada, ignorando a imagem principal definida no administrador
## Workaround



1. Para controlar qual imagem aparece como imagem principal no Marketplace, o vendedor deve garantir que a imagem principal desejada seja carregada primeiro ao registrar o produto na VTEX.
2. O vendedor também tem a opção de ajustar o pedido diretamente no painel do Mercado Livre.
3. Não é possível atualizar a imagem do SKU por meio da integração com a VTEX depois de ter sido enviada ao Mercado Livre.



