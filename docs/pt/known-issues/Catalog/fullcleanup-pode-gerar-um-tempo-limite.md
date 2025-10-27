---
title: 'Fullcleanup pode gerar um tempo limite'
slug: fullcleanup-pode-gerar-um-tempo-limite
status: PUBLISHED
createdAt: 2025-10-02T19:29:27.443Z
updatedAt: 2025-10-02T19:29:27.443Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: fullcleanup-may-generate-a-timeout
locale: pt
kiStatus: Backlog
internalReference: 1228132
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Na interface `/admin/Site/fullcleanup.aspx`, o uso desse procedimento para contas com vários produtos, marcas ou categorias gera um tempo limite, o que normalmente resulta em um erro 500 e nenhuma saída ao executar a operação.
## Simulação


1) Crie mais de ~5 mil produtos em uma loja. (essa é apenas uma estimativa aproximada, pode acontecer com mais ou menos produtos do que isso)

2) Tente executar o procedimento de exclusão de produtos e SKUs na interface do FullCleanUp: `.myvtex.com/admin/site/fullcleanup.aspx`

Uma resposta 500 será retornada juntamente com um erro de tempo limit
## Workaround


Peça à equipe de suporte para executar essa ação.



