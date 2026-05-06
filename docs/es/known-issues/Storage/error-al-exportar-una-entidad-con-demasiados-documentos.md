---
title: 'Error al exportar una entidad con demasiados documentos'
slug: error-al-exportar-una-entidad-con-demasiados-documentos
status: PUBLISHED
createdAt: 2023-07-07T15:59:34.000Z
updatedAt: 2023-07-07T15:59:34.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-exporting-entity-with-too-many-documents
locale: es
kiStatus: Backlog
internalReference: 857894
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La exportación de un gran número de documentos desde una entidad genera una carga de procesamiento excesiva, lo que provoca errores en la cola de procesos e impide la exportación de la lista de documentos.

## Simulación

1. Acceda a la plataforma Master Data CRM y vaya al formulario de la entidad deseada.
2. Localice el botón «Exportar XLS» en la interfaz y haga clic en él.
3. Localice y haga clic en el botón «Exportar XLS».
4. Inicie el proceso de exportación confirmando la selección y comenzando la exportación.
5. Para supervisar el progreso de la exportación, vaya a la pestaña Aplicaciones dentro de la plataforma.
6. Busque el botón «Exportaciones» y haga clic en él para ver la lista de exportaciones en curso.
7. Observe el estado de la exportación y compruebe si se ha producido algún error o problema durante el proceso de exportación.

## Workaround

Una solución alternativa para este problema es utilizar la API de desplazamiento.