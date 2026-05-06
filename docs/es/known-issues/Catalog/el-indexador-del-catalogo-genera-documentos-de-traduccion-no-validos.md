---
title: 'El indexador del catálogo genera documentos de traducción no válidos'
slug: el-indexador-del-catalogo-genera-documentos-de-traduccion-no-validos
status: PUBLISHED
createdAt: 2024-02-29T21:02:24.000Z
updatedAt: 2025-07-24T01:23:55.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-indexer-generating-invalid-translation-documents
locale: es
kiStatus: No Fix
internalReference: 991494
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al indexar un producto con información traducida, se consulta la aplicación «Mensajes». Se espera que estas solicitudes tarden menos de 3 segundos; si tardan más, la indexación falla y se genera un documento de traducción no válido.

Esta situación generará errores en el historial de indexación con el mensaje «las traducciones son más pequeñas que el contexto».

## Simulación

No hay una forma fácil de reproducir esta situación, pero las cuentas con muchos idiomas o muchos campos que traducir son más propensas a que se produzca.

## Workaround

N/A