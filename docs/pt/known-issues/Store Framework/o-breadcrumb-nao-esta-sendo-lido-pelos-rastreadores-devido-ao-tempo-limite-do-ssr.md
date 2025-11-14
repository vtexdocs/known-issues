---
title: 'O Breadcrumb não está sendo lido pelos rastreadores devido ao tempo limite do SSR'
slug: o-breadcrumb-nao-esta-sendo-lido-pelos-rastreadores-devido-ao-tempo-limite-do-ssr
status: PUBLISHED
createdAt: 2025-11-14T19:39:56.319Z
updatedAt: 2025-11-14T19:39:56.319Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: breadcrumb-not-being-read-by-crawlers-due-ssr-timeout
locale: pt
kiStatus: Backlog
internalReference: 460999
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao carregar o breadcrumbs pela primeira vez, os dados da lista de categorias estão ficando mais rápidos do que os da árvore de categorias enviada pela consulta de facetas, o que está causando um comportamento inesperado no tempo de carregamento do breadcrumb, porque a lista de categorias também traz categorias semelhantes de produtos semelhantes e não tem todas as informações necessárias para o json+ld.
## Simulação



Abra uma página de produto

Desative o javascript da página (isso garantirá que você trabalhará no SSR)

Atualize a página

Você verá que o breadcrumb carregará inicialmente toda a árvore de categorias, o tempo necessário para buscar e, em seguida, trará os resultados esperados (da árvore de categorias); se não houver categorias semelhantes para as categorias, você não verá nenhum efeito visual

Outra maneira de reproduzir é acessar https://validator.schema.org/
e tentar validar a página do produto; se o breadcrumb estiver lá, não há problema com seu produto; se não estiver lá, esse é o KI


## Workaround


Não