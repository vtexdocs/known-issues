---
title: 'Netshoes - Imagem principal não respeitada'
slug: netshoes-imagem-principal-nao-respeitada
status: PUBLISHED
createdAt: 2025-05-06T17:10:23.000Z
updatedAt: 2026-06-23T16:02:44.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: netshoes-main-image-not-respected
locale: pt
kiStatus: Backlog
internalReference: 1220978
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A imagem principal definida no painel de administração do VTEX **não é respeitada** na integração com o Netshoes. A imagem principal exibida no Netshoes é sempre a **primeira imagem carregada**, com base na ordem de upload — independentemente da imagem marcada como principal no VTEX.

## Simulação

- Acesse o painel de administração do VTEX e abra um produto.

- Carregue duas ou mais imagens para um SKU. Marque uma delas como imagem principal, **mas não a primeira adicionada**.

- Após a sincronização com o Netshoes, observe que a imagem principal exibida no marketplace é a **primeira imagem carregada**, ignorando a imagem principal definida no painel de administração.

## Workaround

Para controlar qual imagem é exibida como principal no Netshoes, o vendedor deve **garantir que a imagem principal desejada seja carregada primeiro** ao registrar o produto no VTEX.

Além disso, **não é possível atualizar a imagem do SKU por meio da integração com o VTEX depois que ela for enviada para o Netshoes**. Qualquer atualização de imagem deve ser **solicitada manualmente, abrindo um chamado diretamente com a Netshoes**.
A integração atual **não suporta mapeamento ou priorização da imagem principal**.