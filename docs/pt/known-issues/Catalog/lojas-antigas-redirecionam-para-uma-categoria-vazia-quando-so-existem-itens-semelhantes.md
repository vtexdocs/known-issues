---
title: 'Lojas antigas redirecionam para uma categoria vazia quando só existem itens semelhantes.'
slug: lojas-antigas-redirecionam-para-uma-categoria-vazia-quando-so-existem-itens-semelhantes
status: PUBLISHED
createdAt: 2026-05-28T20:25:12.000Z
updatedAt: 2026-09-23T16:42:11.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-stores-redirect-to-empty-category-when-there-are-only-similars
locale: pt
kiStatus: Backlog
internalReference: 1413684
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, existe a opção de registrar uma categoria similar no módulo de catálogo, o que fará com que os produtos dessa categoria também sejam exibidos nos resultados de busca da categoria principal.

No entanto, se a categoria principal não tiver produtos disponíveis, o sistema redireciona o usuário para uma página de "não encontrado" antes de iniciar a lógica de busca dos itens similares. Consequentemente, os produtos similares nunca são exibidos.

## Simulação

1 - Em uma categoria sem itens disponíveis ou visíveis, registre uma categoria similar com itens ativos e visíveis.
2 - Tente carregar a primeira categoria; nada será exibido.
3 - Adicione pelo menos um item visível na primeira categoria; todos serão exibidos.

## Workaround

Adicione pelo menos um item, mesmo que esteja configurado como "exibir se indisponível", na categoria principal.