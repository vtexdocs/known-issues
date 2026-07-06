---
title: 'Eliminar una actualización de una versión puede crear un borrador con contenido incompleto.'
slug: eliminar-una-actualizacion-de-una-version-puede-crear-un-borrador-con-contenido-incompleto
status: PUBLISHED
createdAt: 2026-07-06T15:30:21.000Z
updatedAt: 2026-07-06T15:30:21.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: removing-an-update-from-a-release-can-create-a-draft-with-incomplete-content
locale: es
kiStatus: Backlog
internalReference: 1430344
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un usuario elimina una actualización de una versión programada en el Planificador, el sistema crea automáticamente un borrador para la página afectada. En algunos casos, este borrador puede contener contenido obsoleto o incompleto. Esto no sucede siempre; depende del historial de la página. Si el usuario publica este borrador sin darse cuenta, la página final no incluirá secciones o campos que se agregaron posteriormente.

## Simulación

1. Abra el Planificador de administración y navegue hasta una versión programada.
2. En la tabla de actualizaciones, busque una actualización de página de tipo "publicar".
3. Haga clic en el menú de tres puntos de la fila de la actualización y seleccione ****Eliminar****.
4. Confirme la eliminación en la ventana emergente.
5. Navegue a Headless CMS y abra el borrador creado para esa página.
6. El contenido del borrador no incluirá secciones en comparación con la versión final.

## Workaround

Después de eliminar una actualización de una versión, no publique inmediatamente el borrador creado automáticamente. En su lugar, ábralo en el editor del CMS y verifique que todo el contenido esté completo y correcto antes de publicarlo. Si al borrador le falta contenido, descártelo y vuelva a crearlo manualmente con el contenido correcto.