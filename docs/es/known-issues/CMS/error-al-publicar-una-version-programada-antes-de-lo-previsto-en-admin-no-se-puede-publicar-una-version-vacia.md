---
title: 'Error al publicar una versión programada antes de lo previsto en Admin («No se puede publicar una versión vacía»).'
slug: error-al-publicar-una-version-programada-antes-de-lo-previsto-en-admin-no-se-puede-publicar-una-version-vacia
status: PUBLISHED
createdAt: 2026-02-27T21:30:46.150Z
updatedAt: 2026-02-27T21:30:46.150Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: error-publishing-scheduled-release-ahead-of-schedule-in-admin-you-cant-publish-an-empty-release
locale: es
kiStatus: Backlog
internalReference: 1346648
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar publicar manualmente una **publicación programada** antes de la fecha prevista a través del panel de administración, el sistema bloquea la acción y muestra el mensaje de error: **«No se puede publicar una publicación vacía. Añada actualizaciones y vuelva a intentarlo».**

Se ha verificado a través de la API que la publicación **no está vacía** y que, de hecho, contiene eventos/actualizaciones asociados. Esto indica un falso positivo en la validación de la interfaz de administración que impide la publicación manual antes de la hora programada.

## Simulación

- Cree una nueva publicación en el módulo **CMS / Publicaciones**. - Añada actualizaciones/eventos a esta publicación (asegúrese de que no esté vacía).
- Programe esta versión para una fecha futura. - Antes de la fecha programada, intente publicar la versión manualmente utilizando el botón de publicación en Admin. - El sistema mostrará el error: _«No se puede publicar una versión vacía. Añada actualizaciones y vuelva a intentarlo»._

## Workaround

N/A