---
title: 'AmazonCoincidencia En algunos casos, el SKU vuelve a estar en "Pendiente de revisión" después de la confirmación de la coincidencia, sin ninguna indicación del motivo del rechazo de Amazon.'
slug: amazoncoincidencia-en-algunos-casos-el-sku-vuelve-a-estar-en-pendiente-de-revision-despues-de-la-confirmacion-de-la-coincidencia-sin-ninguna-indicacion-del-motivo-del-rechazo-de-amazon
status: PUBLISHED
createdAt: 2026-09-04T00:37:34.000Z
updatedAt: 2026-09-04T00:37:34.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazonmatch-in-some-cases-sku-reverts-to-pending-review-after-match-confirmation-with-no-indication-of-amazons-rejection-reason
locale: es
kiStatus: Backlog
internalReference: 1456640
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En el proceso de coincidencia de anuncios, algunos SKU vuelven a mostrar el estado "Pendiente de revisión" poco después de ser aprobados, sin que aparezca ningún mensaje explicativo en pantalla. La pantalla no indica cuándo Amazon rechaza la coincidencia por un motivo que requiere la intervención del vendedor (por ejemplo, cuando la marca del producto requiere autorización previa para su venta).

1. En Bridge, puede aparecer este mensaje de error, pero puede ser reemplazado si el SKU recibe alguna otra actualización, y el motivo real se pierde.

2. En la coincidencia, el estado "Pendiente de revisión" se ve idéntico al de un SKU que simplemente aún no se ha procesado, por lo que el usuario termina confirmando la misma coincidencia repetidamente sin comprender por qué no se completa.

**Importante:** Este escenario no ocurre con todos los SKU; solo sucede en casos específicos.

## Simulación

- Vaya a Marketplace > Amazon > Publicación de producto.
- Busca un SKU con una sugerencia coincidente para un producto cuya marca requiere autorización directa del propietario (no se puede recuperar mediante una simple solicitud en Amazon).

- Abre los detalles de la sugerencia y haz clic en "Confirmar y publicar".

- Espera un tiempo después de la publicación (el procesamiento es asíncrono).

- No se muestra ninguna advertencia en pantalla antes de la confirmación, y el botón permanece habilitado.

- El SKU vuelve a mostrarse como "Pendiente de revisión" en la ficha, sin ninguna indicación de que Amazon haya rechazado el anuncio.

- Comprueba si el mensaje de error se registró en Bridge; en algunos casos, puede que no aparezca, ya que se ha sustituido por otra actualización de SKU.

## Workaround

Comprueba si el mensaje de error se registró en Bridge; en algunos casos, puede que no aparezca, ya que se ha sustituido por otra actualización de SKU.