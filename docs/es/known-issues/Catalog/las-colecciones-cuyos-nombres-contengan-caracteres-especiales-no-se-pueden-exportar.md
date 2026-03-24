---
title: 'Las colecciones cuyos nombres contengan caracteres especiales no se pueden exportar'
slug: las-colecciones-cuyos-nombres-contengan-caracteres-especiales-no-se-pueden-exportar
status: PUBLISHED
createdAt: 2026-03-24T18:11:08.612Z
updatedAt: 2026-03-24T18:11:08.612Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-named-with-special-characters-cannot-be-exported
locale: es
kiStatus: Fixed
internalReference: 683343
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se espera que una colección se pueda exportar desde el panel de administración. Sin embargo, las colecciones cuyos nombres contengan símbolos como `$`, `+` o `,` no se pueden exportar.

## Simulación

- Crea una colección con `$`, `+` o `,` en el nombre
- Intenta exportar la colección
- Se mostrará un error en el panel de administración

## Workaround

Elimina el carácter