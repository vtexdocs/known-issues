---
title: 'Error al publicar una publicación programada antes de lo previsto en Admin ("No se puede publicar una publicación vacía")'
slug: error-al-publicar-una-publicacion-programada-antes-de-lo-previsto-en-admin-no-se-puede-publicar-una-publicacion-vacia
status: PUBLISHED
createdAt: 2026-01-05T19:44:25.445Z
updatedAt: 2026-01-05T19:44:25.445Z
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


Al intentar publicar manualmente una **Publicación Programada** antes de su fecha prevista a través del panel de administración, el sistema bloquea la acción y muestra el mensaje de error: **"No puede publicar una versión vacía. Añada actualizaciones e inténtelo de nuevo "**.

Se ha verificado a través de la API que la publicación **no está vacía** y que contiene eventos/actualizaciones asociados. Esto indica un falso positivo en la validación de la interfaz de administración que impide la publicación manual antes de la hora programada.


#### Simulación



- Cree una nueva versión en el módulo **CMS / Releases**.
- Añada actualizaciones/eventos a esta versión (asegúrese de que no está vacía).
- Programe esta publicación para una fecha futura.
- Antes de la fecha programada, intente publicar la publicación manualmente utilizando el botón de publicación en el Admin.
- El sistema mostrará el error No puede publicar una versión vacía. Añada actualizaciones e inténtelo de nuevo".

## Workaround


N/A


