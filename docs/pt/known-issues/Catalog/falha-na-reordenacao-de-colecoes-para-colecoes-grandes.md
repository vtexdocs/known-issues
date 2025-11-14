---
title: 'Falha na reordenação de coleções para coleções grandes'
slug: falha-na-reordenacao-de-colecoes-para-colecoes-grandes
status: PUBLISHED
createdAt: 2025-11-14T19:13:52.098Z
updatedAt: 2025-11-14T19:13:52.098Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: reorder-collection-failing-for-large-collections
locale: pt
kiStatus: Backlog
internalReference: 408140
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Na nova UI de administração de coleções, quando um usuário tenta reordenar a exibição de pedidos de produtos, a mutação GraphQL do catálogo que executa essa ação geralmente falha
## Simulação


1) Verifique uma coleção no Collection Module com mais de 1.000 SKUs
2) Tente executar a ação de arrastar e soltar para reordenar
3) Veja que uma mensagem de erro será exibida



## Workaround


Não há nenhuma solução alternativa (seria criar uma nova coleção na ordem correta, mas isso não é uma solução alternativa em si, apenas uma alternativa).



