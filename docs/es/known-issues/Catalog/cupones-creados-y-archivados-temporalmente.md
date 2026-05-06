---
title: 'Cupones creados y archivados temporalmente'
slug: cupones-creados-y-archivados-temporalmente
status: PUBLISHED
createdAt: 2023-09-01T13:34:06.000Z
updatedAt: 2023-09-01T13:34:06.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: coupons-created-as-archived-temporarrily
locale: es
kiStatus: Backlog
internalReference: 892041
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, cuando se crea un cupón, la interfaz de usuario (UI) y la API muestran que está archivado durante unos minutos (aproximadamente 2), cuando en realidad (en la base de datos de precios) el cupón está activo.

Tras unos minutos, el cupón muestra los datos correctos.

Es importante señalar que esto no afecta a la información «real» del cupón; aunque se muestre incorrectamente como «archivado» en la interfaz de usuario debido a este problema, se podrá utilizar al finalizar la compra.

## Simulación

Basta con crear un cupón y comprobar sus datos para que ya aparezca como archivado.

## Workaround

provisional**
No hay otra solución provisional que esperar un breve periodo de tiempo.