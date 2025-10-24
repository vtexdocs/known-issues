---
title: 'Agenda de banner no funciona correctamente'
id: 5JrrUCTU1q2KKCqo20SQqQ
status: PUBLISHED
createdAt: 2017-03-29T23:39:38.141Z
updatedAt: 2022-12-22T20:45:37.766Z
publishedAt: 2022-12-22T20:45:37.766Z
firstPublishedAt: 2017-03-29T23:42:49.292Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: banner-scheduling-is-deactivated-after-expiry-date
locale: es
kiStatus: Backlog
internalReference: null
---

## Sumario

La agenda de un banner no dispara acciones para actualizar el cache del template. Por esta razón el banner no aparece en el template en el horario programado.

En otras palabras, cuando un usuario programa el banner para la hora X del día X, el sistema guarda esa información para activar el banner a la hora de la programación, pero la activación del banner no dispara una acción para forzar la actualización del cache. En consecuencia, el banner no aparece instantáneamente en el template. El mismo sucede para la función de desactivar el banner.

Cuando una programación de banner funciona correctamente es una coincidencia de estar actualizándose el cache cerca de la hora de la programación. Pero desafortunadamente, este comportamiento no está estandarizad a punto de utilizar la programación en el periodo de la actualización.

## Simulación

- Acceder al módulo CMS
- Acceder al Portal > Web-sites > *tienda* > / > *template*
- Hacer clic en Configuraciones
- Hacer clic para editar el control
- Hacer clic para editar el contenido
- Configurar una fecha de validez en los campos en “Periodos”
- Hacer clic en el botón “Cambiar en la Lista de Contenido”
- Hacer clic en el botón “Guardar Contenido”
- Hacer clic en el botón “OK” en el mensaje de confirmación de la operación
- Hacer clic en el botón “Guardar Configuraciones”
- Hacer clic en el botón “OK” en el mensaje de confirmación de la operación

![Agendamiento de Banner](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Marketing%20&%20Merchandising/agenda-de-banner-no-funciona-correctamente_1.png)

## Workaround

Para la programación no hay una solución paliativa, pero es posible activar un banner manualmente a través del Módulo CMS de la plataforma VTEX. Y para ello hay que se remuevan las programaciones. Así el botón __Activar__ será el trigger para activar el banner.

