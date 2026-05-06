---
title: 'A Pesquisa Inteligente multilíngue não suporta duas variações do mesmo idioma'
slug: a-pesquisa-inteligente-multilingue-nao-suporta-duas-variacoes-do-mesmo-idioma
status: PUBLISHED
createdAt: 2023-06-09T23:41:19.000Z
updatedAt: 2026-01-27T19:36:01.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-multilanguage-doesnt-support-2-variations-of-the-same-languageidiom
locale: pt
kiStatus: Backlog
internalReference: 841704
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando utilizamos mais de uma configuração regional na conta, a tradução será feita com base no idioma ao qual a configuração regional se refere; e, se utilizarmos mais de uma configuração regional na conta, a tradução será feita com base no idioma ao qual a configuração regional se refere.

Quando duas variações de localidade diferentes do mesmo idioma são usadas (por exemplo, `en-US` e `en-GB` ou `en-CA`), as traduções na Pesquisa Inteligente não funcionarão corretamente, pois consideraremos todas elas como o mesmo idioma (`english`). Apenas os valores de uma delas (geralmente a que vem primeiro) serão usados.

Existem apenas duas exceções:

- `pt-BR` e `pt-PT`
- `es-ES` e `ca-ES`

## Simulação

Se você tiver uma lista de ligações com vários idiomas e tentar usar a internacionalização para o mesmo idioma raiz, isso não funcionará.

## Workaround

N/A