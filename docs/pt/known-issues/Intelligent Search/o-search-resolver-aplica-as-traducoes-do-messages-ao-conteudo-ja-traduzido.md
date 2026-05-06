---
title: 'O Search Resolver aplica as traduções do Messages ao conteúdo já traduzido'
slug: o-search-resolver-aplica-as-traducoes-do-messages-ao-conteudo-ja-traduzido
status: PUBLISHED
createdAt: 2023-07-20T15:28:40.000Z
updatedAt: 2024-06-13T20:51:03.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-resolver-applying-messages-translations-over-already-translated-content
locale: pt
kiStatus: Backlog
internalReference: 865918
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O Search Resolver (camada GraphQL para a Pesquisa Inteligente) solicita traduções ao serviço de Mensagens, mesmo para lojas com um único idioma ou para conteúdo já traduzido em uma loja multilíngue.

Na prática, essas traduções são feitas com base nos mesmos idiomas de origem e de destino, mas se a loja tiver o recurso de tradução automática ativado, a string pode sofrer alterações inesperadas.

Isso afeta especialmente strings com várias palavras que podem ser consideradas de idiomas diferentes, como palavras em inglês no nome de um produto que é principalmente em francês, e potencialmente datas (entre as notações “dd/mm/aaaa” e “mm/dd/aaaa”).

## Simulação

- Traduza qualquer conteúdo do catálogo da loja para um idioma diferente do padrão;
- Certifique-se de que ainda haja pelo menos uma palavra em um idioma diferente daquele traduzido;
- Verifique a vitrine da loja; ela não corresponderá à tradução.

## Workaround

- Desative a tradução automática;
- Crie traduções para esses conteúdos usando o mesmo idioma como "de" e "para", por exemplo, traduzindo de "fr-FR" para "fr-FR".