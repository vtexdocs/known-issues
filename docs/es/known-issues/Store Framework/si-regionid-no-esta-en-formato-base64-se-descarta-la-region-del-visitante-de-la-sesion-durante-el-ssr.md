---
title: 'Si region_id no está en formato Base64, se descarta la región del visitante de la sesión durante el SSR.'
slug: si-regionid-no-esta-en-formato-base64-se-descarta-la-region-del-visitante-de-la-sesion-durante-el-ssr
status: PUBLISHED
createdAt: 2026-11-18T00:45:14.000Z
updatedAt: 2026-11-18T00:45:14.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: regionid-outside-the-base64-format-discards-the-visitors-region-from-the-session-during-ssr
locale: es
kiStatus: Backlog
internalReference: 1486293
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la URL de la página de detalles del producto (PDP) incluye el parámetro `region_id` y su valor no sigue el formato esperado (Base64 de `vtex:{país ISO-3}:{código postal}`), el visitante pierde la regionalización que ya tenía en la sesión. El servidor de renderizado reemplaza el segmento del visitante con uno de una sesión nueva y vacía, y el `segmentToken` se genera sin `regionId`. La PDP se muestra sin regionalización (el precio y la disponibilidad difieren de lo que el visitante vería sin el parámetro).

Esto ocurre principalmente en tiendas que utilizan anuncios regionales de Google donde las regiones se crearon manualmente en Merchant Center: Google agrega el ID registrado a la URL (por ejemplo, `?region_id=007979`), lo cual no cumple con el contrato de la plataforma.

## Simulación

1. Abra una PDP con una sesión regionalizada (por ejemplo, ingresando un código postal o utilizando la regionalización del vendedor) y observe el precio y la disponibilidad. 2. En la misma sesión, abra el mismo PDP añadiendo `?region_id=<valor fuera del formato>`, por ejemplo, `?region_id=007979`.

3. Observe que el PDP se muestra sin regionalización y que el `segmentToken` tiene `regionId` nulo.

4. Para comparar, ábralo con un `region_id` en el formato correcto (Base64 de `vtex:BRA:<código postal>`) o sin el parámetro: la región se mantiene.

## Workaround

N/A