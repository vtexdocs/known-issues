---
title: Caso Las variaciones en el ID del documento provocan duplicaciones en el indexador
slug: caso-las-variaciones-en-el-id-del-documento-provocan-duplicaciones-en-el-indexador
status: PUBLISHED
createdAt: 2025-10-16T20:44:44.467Z
updatedAt: 2025-10-16T20:44:44.467Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: case-variations-in-document-id-cause-duplications-in-indexer
locale: es
kiStatus: Backlog
internalReference: 1203412
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando se crea un documento y luego se aplica una solicitud de parche con el ID en un caso diferente (por ejemplo, todo en mayúsculas), el sistema lo trata como una nueva entrada en algunos componentes. Este problema se produce porque la persistencia del documento en la base de datos no distingue entre mayúsculas y minúsculas, lo que significa que sólo existe un documento. Sin embargo, otros flujos, como el indexador, tratan el ID sin normalizar mayúsculas y minúsculas, lo que da lugar a entradas duplicadas en la API de búsqueda.

## Simulación



1. Crea un documento con un identificador en minúsculas.
2. Aplicar una solicitud de parche utilizando el mismo ID pero en mayúsculas (o cualquier otra variante de mayúsculas).
3. Observe que el indizador crea varios registros para el mismo ID de documento, aunque sólo exista un documento en la base de datos.

## Workaround


Asegúrese de que todas las referencias de ID utilizan un caso coherente antes de enviar las solicitudes para evitar duplicaciones involuntarias en el indizador.



