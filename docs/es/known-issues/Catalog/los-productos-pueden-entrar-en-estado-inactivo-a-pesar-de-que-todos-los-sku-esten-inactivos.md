---
title: 'Los productos pueden entrar en estado inactivo a pesar de que todos los SKU estén inactivos.'
slug: los-productos-pueden-entrar-en-estado-inactivo-a-pesar-de-que-todos-los-sku-esten-inactivos
status: PUBLISHED
createdAt: 2026-11-04T00:25:13.000Z
updatedAt: 2026-11-04T00:25:13.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-can-enter-inactive-state-despite-all-skus-being-inactive
locale: es
kiStatus: Backlog
internalReference: 1480822
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, existe una inconsistencia de origen desconocido en la que el catálogo puede tener un producto inactivo con al menos una referencia activa. Esto no debería ser posible según las reglas del catálogo.

Aún no se ha identificado el origen de cómo los productos pueden llegar a este estado, y parece ser una situación poco frecuente.

## Simulación

No aplica (los pasos de la simulación aún no se han definido; este informe de conocimiento indica que se han detectado algunas inconsistencias en la base de datos y sirve como

## Workaround

provisional).

## **Solución provisional**
Editar cualquier dato del producto (por ejemplo, actualizar su descripción) lo cambia automáticamente al estado correcto (activo).