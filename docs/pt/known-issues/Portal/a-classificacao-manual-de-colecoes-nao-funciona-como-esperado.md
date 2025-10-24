---
title: 'A classificação manual de coleções não funciona como esperado'
slug: a-classificacao-manual-de-colecoes-nao-funciona-como-esperado
status: PUBLISHED
createdAt: 2025-08-12T18:34:35.237Z
updatedAt: 2025-08-12T18:34:35.237Z
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



A classificação manual de coleções não funciona como esperado. Há duas maneiras de classificar SKUs usando uma coleção:


1. Usando a coleção do tipo de controle ContentPlaceHolder;
2. Usando uma pesquisa ou um contexto de pesquisa de uma Landing Page com o controle SearchResult (nesse caso, a string de consulta _O=productClusterOrder_{ProductClusterId}%20asc_ deve ser usada).

Em ambos os casos, o sistema suporta a classificação de até **30** SKUs da coleção. Quando a coleção tiver mais de 30 SKUs, todas as SKUs sobressalentes serão listadas ANTES daquelas posicionadas entre 1 e 30.


> Esse comportamento é observado em todos os armazenamentos da VTEX, incluindo aqueles desenvolvidos com o VTEX IO.

## Simulação




1. Crie uma coleção;
2. Inserir manualmente mais de 30 SKUs;
3. Salve a coleção;
4. Crie um modelo com ContentPlaceHolder ou SearchResult;
5. Configure a associação do ContentPlaceHolder com a coleção ou defina a pesquisa no contexto de pesquisa da pasta;
6. Aguarde alguns minutos para que o cache expire;
7. Acesse a página e observe que os primeiros itens ordenados serão os itens colocados após 30
## Workaround



Como solução alternativa, temos as seguintes opções:


- Use coleções com apenas 30 itens, se for essencial aplicar a classificação manual;
- Usar o campo Release Date, registrar as datas na sequência desejada e usar o campo para classificar a coleção.


