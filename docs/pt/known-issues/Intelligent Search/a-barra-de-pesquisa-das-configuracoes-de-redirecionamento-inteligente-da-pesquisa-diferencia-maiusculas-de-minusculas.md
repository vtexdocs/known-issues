---
title: 'A barra de pesquisa das configurações de redirecionamento inteligente da pesquisa diferencia maiúsculas de minúsculas'
slug: a-barra-de-pesquisa-das-configuracoes-de-redirecionamento-inteligente-da-pesquisa-diferencia-maiusculas-de-minusculas
status: PUBLISHED
createdAt: 2021-04-28T23:23:02.000Z
updatedAt: 2024-10-01T14:14:44.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-redirect-settings-search-bar-is-case-sensitive
locale: pt
kiStatus: Fixed
internalReference: 361894
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A página de configurações do Redirecionamento de Pesquisa Inteligente possui uma barra de pesquisa para ajudar a localizar configurações específicas de redirecionamento, mas ela diferencia maiúsculas de minúsculas e só encontrará termos se eles corresponderem exatamente.

## Simulação

Acesse `/admin/search/redirects`.

Pesquise o nome de uma configuração, mas altere uma letra para maiúscula. A pesquisa não retornará nenhum resultado.

## Workaround

Gere nomes de rotas com um padrão consistente: apenas letras minúsculas, apenas maiúsculas ou em camel case.