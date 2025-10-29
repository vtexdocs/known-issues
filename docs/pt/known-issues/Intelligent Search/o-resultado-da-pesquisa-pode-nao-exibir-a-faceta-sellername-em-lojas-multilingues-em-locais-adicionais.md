---
title: 'O resultado da pesquisa pode não exibir a faceta sellerName em lojas multilíngues em locais adicionais'
slug: o-resultado-da-pesquisa-pode-nao-exibir-a-faceta-sellername-em-lojas-multilingues-em-locais-adicionais
status: PUBLISHED
createdAt: 2025-10-29T18:48:28.786Z
updatedAt: 2025-10-29T18:48:28.786Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-result-may-not-display-the-facet-sellername-on-multilanguage-stores-in-additional-locales
locale: pt
kiStatus: Fixed
internalReference: 1186137
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A pesquisa de facetas na Intelligent Search pode não exibir a faceta `sellerName` quando a localidade é uma localidade adicional.

Esse problema ocorre ao pesquisar facetas por meio do GraphQL e da API.

## Simulação



As etapas para simular o Know Issue são as seguintes:


1. Na ferramenta Postman ou em outra ferramenta de desenvolvedor, crie uma solicitação de API do endpoint Get list of the possible facets for a given query.
2. Na solicitação de API, adicione uma localidade que não seja a localidade padrão ao parâmetro `locale` da string de consulta.
3. Execute o ponto de extremidade.

O resultado da pesquisa não retorna a faceta `sellerName`.
## Workaround


N/A



