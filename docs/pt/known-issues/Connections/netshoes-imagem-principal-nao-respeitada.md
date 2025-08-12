---
title: Netshoes - Imagem principal não respeitada
slug: netshoes-imagem-principal-nao-respeitada
status: PUBLISHED
createdAt: 2025-08-12T20:23:15.517Z
updatedAt: 2025-08-12T20:23:15.517Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: netshoes-main-image-not-respected
locale: pt
kiStatus: Backlog
internalReference: 1220978
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A imagem principal definida no VTEX admin não é **respeitada** na integração com a Netshoes. A imagem principal exibida na Netshoes é sempre a **primeira imagem carregada**, com base na ordem de carregamento - independentemente da imagem marcada como principal na VTEX.
## Simulação



- Acesse o administrador da VTEX e abra um produto.
- Faça upload de duas ou mais imagens para um SKU. Marque uma delas como a imagem principal, mas não a primeira a ser adicionada**.
- Após a sincronização com a Netshoes, observe que a imagem principal exibida no marketplace é a **primeira imagem carregada**, ignorando a imagem principal definida no admin.


## Workaround


Para controlar qual imagem é exibida como principal na Netshoes, o vendedor deve **assegurar que a imagem principal desejada seja carregada primeiro** ao registrar o produto na VTEX.
Além disso, **não é possível atualizar a imagem do SKU por meio da integração com a VTEX depois que ela for enviada à Netshoes**. Qualquer atualização de imagem deve ser **solicitada manualmente, abrindo um tíquete diretamente com a Netshoes**.
A integração atual **não suporta o mapeamento ou a priorização da imagem principal**