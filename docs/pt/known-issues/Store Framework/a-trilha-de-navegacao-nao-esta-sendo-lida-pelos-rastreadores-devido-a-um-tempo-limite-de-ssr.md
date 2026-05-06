---
title: 'A trilha de navegação não está sendo lida pelos rastreadores devido a um tempo limite de SSR'
slug: a-trilha-de-navegacao-nao-esta-sendo-lida-pelos-rastreadores-devido-a-um-tempo-limite-de-ssr
status: PUBLISHED
createdAt: 2021-11-02T14:32:38.000Z
updatedAt: 2023-01-31T15:54:11.000Z
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

Ao carregar o breadcrumb pela primeira vez, os dados da lista de categorias são carregados mais rapidamente do que os da árvore de categorias enviada pela consulta de facetas. Isso está causando um comportamento inesperado no tempo de carregamento do breadcrumb, pois a lista de categorias também exibe categorias de produtos semelhantes e não contém todas as informações necessárias para o JSON+LD.

## Simulação

Abra uma página de produto

Desative o JavaScript na página (isso garantirá que você trabalhe com SSR)

Atualize a página

Você verá que o breadcrumb carregará inicialmente toda a árvore de categorias devido ao tempo necessário para buscá-la e, em seguida, apresentará os resultados esperados (da árvore de categorias); se não houver categorias semelhantes para as categorias em questão, você não verá nenhum efeito visual

Outra maneira de reproduzir o problema é acessar https://validator.schema.org/
e tentar validar a página do produto; se a trilha de navegação estiver presente, não há problema com o seu produto; se não estiver, esse é o KI

## Workaround

Não