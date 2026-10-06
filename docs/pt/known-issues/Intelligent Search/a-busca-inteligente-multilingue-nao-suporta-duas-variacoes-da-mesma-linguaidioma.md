---
title: 'A Busca Inteligente multilíngue não suporta duas variações da mesma língua/idioma.'
slug: a-busca-inteligente-multilingue-nao-suporta-duas-variacoes-da-mesma-linguaidioma
status: PUBLISHED
createdAt: 2023-06-09T23:41:19.000Z
updatedAt: 2026-10-06T17:22:48.000Z
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

Quando usamos mais de uma localidade na conta, a tradução será feita com base no idioma ao qual a localidade se refere.

Quando duas variações de localidade diferentes do mesmo idioma são usadas (por exemplo, `en-US` e `en-GB` ou `en-CA`), as traduções na Busca Inteligente não funcionarão corretamente, pois todas serão consideradas como o mesmo idioma (`inglês`). Somente os valores de uma delas (geralmente a que aparece primeiro) serão usados.

Existem apenas duas exceções:

- `pt-BR` e `pt-PT`
- `es-ES` e `ca-ES`

## Simulação

Se você tiver uma lista de vinculação com vários idiomas e tentar usar a internacionalização para o mesmo idioma raiz, não funcionará.

## Workaround

N/A