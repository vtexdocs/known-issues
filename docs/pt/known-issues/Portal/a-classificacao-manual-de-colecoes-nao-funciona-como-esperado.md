---
title: 'A classificação manual de coleções não funciona como esperado.'
slug: a-classificacao-manual-de-colecoes-nao-funciona-como-esperado
status: PUBLISHED
createdAt: 2020-10-09T18:09:41.000Z
updatedAt: 2026-10-06T18:33:43.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: manual-sorting-of-collections-doesnt-work-as-expected
locale: pt
kiStatus: Fixed
internalReference: 295245
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A ordenação manual de coleções não funciona como esperado. Existem duas maneiras de ordenar SKUs usando uma coleção:

1. Usando o controle ContentPlaceHolder;

2. Usando uma pesquisa ou contexto de pesquisa de uma Landing Page com o controle SearchResult (neste caso, a string de consulta _O=productClusterOrder_{ProductClusterId}%20asc_ deve ser usada).

Em ambos os casos, o sistema suporta a ordenação de até **30** SKUs da coleção. Quando a coleção tem mais de 30 SKUs, todos os SKUs restantes serão listados ANTES dos SKUs posicionados entre 1 e 30.

> Este comportamento é observado em todas as lojas VTEX, incluindo aquelas desenvolvidas com VTEX IO.

## Simulação

1. Crie uma coleção;

2. Insira manualmente mais de 30 SKUs;

3. Salve a coleção;
4. Crie um modelo com ContentPlaceHolder ou SearchResult;
5. Configure a associação do ContentPlaceHolder com a coleção ou defina a pesquisa no contexto de pesquisa de pastas;

6. Aguarde alguns minutos para que o cache expire;

7. Acesse a página e observe que os primeiros itens ordenados serão aqueles colocados após o 30º item.

## Workaround

Como solução alternativa, temos as seguintes opções:

- Use coleções com apenas 30 itens, caso seja essencial aplicar a classificação manual;

- Use o campo Data de lançamento, registre as datas na sequência desejada e use o campo para classificar a coleção.