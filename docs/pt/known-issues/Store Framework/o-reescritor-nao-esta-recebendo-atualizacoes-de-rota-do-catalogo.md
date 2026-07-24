---
title: 'O reescritor não está recebendo atualizações de rota do catálogo.'
slug: o-reescritor-nao-esta-recebendo-atualizacoes-de-rota-do-catalogo
status: PUBLISHED
createdAt: 2024-07-16T22:24:41.000Z
updatedAt: 2026-07-24T23:48:54.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: rewriter-not-receiving-route-updates-from-the-catalog
locale: pt
kiStatus: Backlog
internalReference: 1066527
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas atualizações de catálogo relacionadas a rotas não chegam ao reescritor. Isso afeta marcas, categorias, subcategorias e departamentos, em ambas as direções:

- **Rotas novas ou editadas** não são recebidas pelo reescritor. Executar a consulta de inicialização geralmente é suficiente para sincronizá-las, mas em casos específicos não funciona. Na loja virtual, a rota não retorna produtos ou exibe o erro "algo explodiu".

- **Rotas alteradas ou excluídas** deixam uma entrada obsoleta, fazendo com que a URL continue apontando para o tipo errado. Uma marca excluída, por exemplo, continua sendo resolvida com `map=b`. Essa divergência também pode causar problemas na Busca Inteligente.

Um sinal útil para o segundo caso: compare o caminho em `pageType` e no reescritor. Se `pageType` retornar `fullText` enquanto o reescritor ainda retornar o tipo antigo, o `pageType` foi atualizado e o reescritor não.

-

## Simulação

1. Reproduza a atualização ausente:

- _Criação/edição:_ crie uma nova rota de categoria/subcategoria/marca no catálogo ou edite uma existente e tente acessá-la na loja virtual;

- _Exclusão/alteração:_ exclua uma marca existente do catálogo e procure por essa marca na loja virtual.

2. Verifique o que o reescritor tem para o caminho:

{ internal { get(path: "/path") { from declarer id query disableSitemapEntry } }}

Uma resposta `null` significa que o reescritor nunca recebeu a atualização: execute o bootstrap e, se isso falhar, use a

## Workaround

`internal.save`.

Uma resposta contendo a `query`/`type` antiga significa que o reescritor manteve uma entrada obsoleta: use a solução alternativa `internal.delete`.

3. Primeiro, tente a consulta do Bootstrap:

{ bootstrap { marcas categorias }}

Se a rota ainda estiver ausente ou desatualizada após o Bootstrap, aplique as soluções alternativas abaixo.

## **Solução alternativa**
Para rotas que foram removidas ou alteradas no catálogo, mas persistem no reescritor, exclua a rota manualmente:

mutation { internal { delete(path: "/path") { from id resolveAs } }}

Para rotas que foram criadas ou editadas, mas nunca chegaram ao destino, adicione a rota manualmente:

mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id query endDate binding resolveAs origin disableSitemapEntry } }}

{ "route": { "from": "", "query": { "map": "" // "b" para marcas, por exemplo }, "declarer": "vtex.store@2.x", "binding": "", "type": "", "id": "{{id}}", "origin": "vtex.routes-bootstrap@0.4.3:brand-bootstrap" }}

Após qualquer uma das mutações, Execute novamente a consulta `internal.get` para confirmar se o caminho está sendo resolvido conforme o esperado.