---
title: 'Coleções com nomes que contenham caracteres especiais não podem ser exportadas'
slug: colecoes-com-nomes-que-contenham-caracteres-especiais-nao-podem-ser-exportadas
status: PUBLISHED
createdAt: 2026-03-24T18:11:04.242Z
updatedAt: 2026-03-24T18:11:04.242Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-named-with-special-characters-cannot-be-exported
locale: pt
kiStatus: Fixed
internalReference: 683343
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Espera-se que uma coleção possa ser exportada no painel de administração. No entanto, coleções com nomes que contenham símbolos como `$`, `+` ou `,` não podem ser exportadas.

## Simulação

- Crie uma coleção com `$`, `+` ou `,` no nome
- Tente exportar a coleção
- Um erro será exibido no painel de administração

## Workaround

Remova o caractere