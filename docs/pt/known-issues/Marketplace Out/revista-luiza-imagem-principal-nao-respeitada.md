---
title: 'Revista Luiza - Imagem principal não respeitada'
slug: revista-luiza-imagem-principal-nao-respeitada
status: PUBLISHED
createdAt: 2025-05-06T18:19:45.000Z
updatedAt: 2026-06-23T15:54:07.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: magazine-luiza-main-image-not-respected
locale: pt
kiStatus: Backlog
internalReference: 1221096
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A imagem principal definida no painel de administração do VTEX **não é respeitada** na integração com a Magazine Luiza. A imagem principal exibida na Magazine Luiza é sempre a **primeira imagem carregada**, com base na ordem de upload — independentemente da imagem marcada como principal no VTEX.

## Simulação

- Acesse o painel de administração do VTEX e abra um produto.

- Carregue duas ou mais imagens para um SKU. Marque uma delas como imagem principal, **mas não a primeira adicionada**.

- Após a sincronização com a Magazine Luiza, observe que a imagem principal exibida no marketplace é a **primeira imagem carregada**, ignorando a imagem principal definida no painel de administração.

## Workaround

Para garantir que a imagem desejada seja exibida como principal na Magazine Luiza, o vendedor deve carregá-la **primeiro** no painel de administração do VTEX, certificando-se de que ela apareça no topo da lista.

Embora seja tecnicamente possível atualizar a imagem principal após o envio do SKU por meio de uma nova sincronização, o comportamento atual **não prioriza a lógica da imagem principal definida no painel de administração do VTEX**.