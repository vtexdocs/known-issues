---
title: 'A Pesquisa Explica não apresenta resultados quando o idioma corresponde à configuração regional do administrador, também definida na Pesquisa Inteligente'
slug: a-pesquisa-explica-nao-apresenta-resultados-quando-o-idioma-corresponde-a-configuracao-regional-do-administrador-tambem-definida-na-pesquisa-inteligente
status: PUBLISHED
createdAt: 2023-05-23T15:35:02.000Z
updatedAt: 2023-05-23T15:35:02.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: explain-search-has-no-results-when-language-matches-with-admin-locale-also-configured-in-intelligent-search
locale: pt
kiStatus: Backlog
internalReference: 830490
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando mais de um idioma está configurado na Pesquisa Inteligente, a Pesquisa Explicada não retornará nenhum resultado se houver correspondência com uma localidade de administração que também esteja na Pesquisa Inteligente, mas não for uma correspondência exata. Por exemplo:


- Idiomas na Pesquisa Inteligente: es-AR e en-US
- Ao selecionar es-AR na Pesquisa Explicada e a localidade de administração for en-US, nenhum resultado é exibido.

## Simulação

- Acesse a Pesquisa Explicada e selecione um idioma;
- Selecione um idioma na configuração de administração que também esteja na Pesquisa Inteligente.

## Workaround

Selecione o idioma exato na configuração de administração ou qualquer outro que não esteja configurado na Pesquisa Inteligente.