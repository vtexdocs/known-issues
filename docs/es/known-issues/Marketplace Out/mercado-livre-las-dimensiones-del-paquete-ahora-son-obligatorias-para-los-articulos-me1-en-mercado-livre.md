---
title: 'Mercado Livre Las dimensiones del paquete ahora son obligatorias para los artículos ME1 en Mercado Livre'
slug: mercado-livre-las-dimensiones-del-paquete-ahora-son-obligatorias-para-los-articulos-me1-en-mercado-livre
status: PUBLISHED
createdAt: 2026-10-15T16:41:43.000Z
updatedAt: 2026-10-15T16:41:43.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-package-dimensions-are-now-mandatory-for-me1-items-on-mercado-livre
locale: es
kiStatus: Backlog
internalReference: 1474056
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Mercado Livre ahora requiere que se completen las dimensiones y el peso del paquete también para los artículos ME1, no solo para los ME2. Dado que la integración aún no envía estos datos para los artículos ME1, la exportación y actualización de estos SKU se rechaza.

## Simulación

La exportación o actualización de SKU ME1 a Mercado Livre falla.

El error devuelto es: Los atributos [altura_paquete_vendedor, ancho_paquete_vendedor, longitud_paquete_vendedor, peso_paquete_vendedor] son ​​obligatorios.

El SKU se clasifica correctamente como ME1, por ejemplo, artículos de más de 70 cm por lado.

Observado en categorías que requieren dimensiones del paquete, como neumáticos agrícolas.

La integración solo envía las dimensiones y el peso del paquete para los artículos ME2. Mercado Livre ha indicado que, para los vendedores que trabajan con ME1 y ME2, estos campos son obligatorios al crear cualquier artículo, incluidos los ME1. Los vendedores que trabajan solo con ME1 no están obligados a enviarlos. Meli lo rechaza con el mensaje "Los atributos [altura_paquete_vendedor, ancho_paquete_vendedor, longitud_paquete_vendedor, peso_paquete_vendedor] son ​​obligatorios", pero el SKU es **me1** (correcto para el tamaño del artículo: un neumático de 75x75x18 cm, que supera el umbral de 70 cm por lado que define ME1).

## Workaround

No hay solución alternativa disponible. Cambiar el artículo a ME2 no ayuda, ya que podría no ser elegible y provocaría un error de coexistencia ME1/ME2.