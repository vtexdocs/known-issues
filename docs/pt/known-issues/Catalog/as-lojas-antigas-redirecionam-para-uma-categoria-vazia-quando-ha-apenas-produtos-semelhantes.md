---
title: 'As lojas antigas redirecionam para uma categoria vazia quando há apenas produtos semelhantes'
slug: as-lojas-antigas-redirecionam-para-uma-categoria-vazia-quando-ha-apenas-produtos-semelhantes
status: PUBLISHED
createdAt: 2026-05-28T20:25:12.000Z
updatedAt: 2026-06-02T22:20:31.000Z
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

Atualmente, existe a opção de registrar uma categoria semelhante no módulo de catálogo, o que fará com que os produtos dessa categoria também sejam exibidos nos resultados de pesquisa da categoria principal.

No entanto, se a categoria principal não tiver produtos disponíveis, o sistema redireciona o usuário para uma página de “não encontrado” antes de entrar na lógica de busca por itens semelhantes; consequentemente, os produtos semelhantes nunca são carregados

## Simulação

1 - em uma categoria sem itens disponíveis ou exibidos, registre uma categoria semelhante com itens ativos e exibidos
2 - tente carregar a primeira categoria; nada será exibido
3 - adicione pelo menos 1 item exibido na primeira categoria - tudo

## Workaround

adicione pelo menos 1 item, mesmo que definido como “exibir se indisponível”, na categoria principal