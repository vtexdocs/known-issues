---
title: 'As tags canônicas não são aplicadas após o terceiro nível de categoria'
slug: as-tags-canonicas-nao-sao-aplicadas-apos-o-terceiro-nivel-de-categoria
status: PUBLISHED
createdAt: 2023-11-08T13:31:07.000Z
updatedAt: 2024-10-10T14:50:23.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: canonical-tags-are-not-applied-after-3rd-category-level
locale: pt
kiStatus: Backlog
internalReference: 932349
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As tags canônicas não são aplicadas após o terceiro nível de categoria quando se tem uma árvore de categorias com mais de três níveis (departamento, categoria e subcategoria); os níveis superiores não são exibidos na tag canônica. A única exceção ocorre quando as rotas são armazenadas no rewriter.

## Simulação

1. Crie uma subcategoria de quarto nível
2. Acesse a página criada
3. Verifique a tag canônica dela no console; ela não mostrará nada após o terceiro nível. Apenas o terceiro e os níveis inferiores.

## Workaround

Execute a consulta bootstrap no rewriter vtex.routes-bootstrap@0.x:


 {bootstrap{categories}}