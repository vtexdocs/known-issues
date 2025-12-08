---
title: 'O Intelligent Search pode gerar um erro quando um produto/sku tem uma especificação com o mesmo nome de um campo nativo'
slug: o-intelligent-search-pode-gerar-um-erro-quando-um-produtosku-tem-uma-especificacao-com-o-mesmo-nome-de-um-campo-nativo
status: PUBLISHED
createdAt: 2025-12-08T14:48:59.900Z
updatedAt: 2025-12-08T14:48:59.900Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-can-throw-an-error-when-a-productsku-has-a-specification-with-the-same-name-as-a-native-field
locale: pt
kiStatus: Backlog
internalReference: 1336576
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando as especificações de produto/SKU usam os mesmos nomes dos campos padrão no catálogo, a camada de compatibilidade do Intelligent Search mescla incorretamente esses dados, fazendo com que os valores da especificação substituam os valores nativos do catálogo.

Isso faz com que a consulta de pesquisa principal retorne dados inválidos ou falhos para esses itens, levando a erros para os clientes que tentam carregar mais resultados ou visualizar os produtos afetados nas páginas de listagem de produtos (PLP) da loja.
## Simulação


Crie uma especificação de produto/SKU com o mesmo nome de um campo nativo (por exemplo, measurementUnit). Depois que o campo for indexado, pesquise esse produto e ocorrerá um erro ao carregar a página
## Workaround


Não crie um campo de especificação com o mesmo nome exato de um campo nativo. Se ele for criado, renomeie-o para um campo de catálogo não nativo.

