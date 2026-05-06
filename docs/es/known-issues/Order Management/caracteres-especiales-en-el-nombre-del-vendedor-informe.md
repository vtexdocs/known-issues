---
title: 'Caracteres especiales en el nombre del vendedor: Informe'
slug: caracteres-especiales-en-el-nombre-del-vendedor-informe
status: PUBLISHED
createdAt: 2023-02-17T13:18:06.000Z
updatedAt: 2023-02-17T13:18:06.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: special-character-in-seller-name-report
locale: es
kiStatus: Backlog
internalReference: 756243
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En concreto, en el caso del carácter especial «:», cuando tenemos un vendedor cuyo nombre contiene este carácter y tratamos de filtrarlo para generar un informe, al verlo en «devtools» aparece lo siguiente:

«No se puede devolver un valor nulo para el campo ReportDetails.rowNumber, que no admite valores nulos».

## Simulación

Para simular este comportamiento, es necesario seleccionar un vendedor que contenga este carácter especial en el nombre e intentar eliminar un informe del mismo.

## Workaround

Como solución alternativa, este carácter especial debe eliminarse del nombre del vendedor.