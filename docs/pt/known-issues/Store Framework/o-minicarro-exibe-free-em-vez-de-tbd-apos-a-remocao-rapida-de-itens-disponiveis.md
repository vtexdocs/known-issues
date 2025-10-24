---
title: 'O minicarro exibe "FREE" em vez de "TBD" após a remoção rápida de itens disponíveis'
slug: o-minicarro-exibe-free-em-vez-de-tbd-apos-a-remocao-rapida-de-itens-disponiveis
status: PUBLISHED
createdAt: 2025-10-16T19:29:21.944Z
updatedAt: 2025-10-16T19:29:21.944Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: minicart-displays-free-instead-of-tbd-after-removing-available-items-quickly
locale: pt
kiStatus: No Fix
internalReference: 1248177
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando um usuário adiciona uma SKU indisponível ao carrinho e, em seguida, adiciona e remove rapidamente os itens disponíveis, o minicarro exibe incorretamente o total como "FREE" em vez de "TBD". Isso ocorre devido à falta de sincronização adequada com o `orderForm`, especialmente quando as interações ocorrem rapidamente.
## Simulação



1. Adicione uma SKU ao carrinho.
2. Defina o código postal de entrega para um código em que o produto inicial não esteja disponível
3. Retorne à página inicial e adicione as SKUs disponíveis.
4. Remova rapidamente as SKUs disponíveis do minicarro.
5. Observe que a mensagem de preço total permanece como "FREE" em vez de ser atualizada para "TBD"
## Workaround


Remova os itens em um ritmo mais lento para permitir a sincronização adequada. Isso reduz a chance de ocorrência do problema.



