---
title: 'Carácter especial en el informe del nombre del vendedor'
slug: caracter-especial-en-el-informe-del-nombre-del-vendedor
status: PUBLISHED
createdAt: 2023-02-17T16:18:06.000Z
updatedAt: 2026-09-14T22:45:30.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: special-character-in-seller-name-report
locale: es
kiStatus: Fixed
internalReference: 756243
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En concreto, para el carácter especial ":", cuando tenemos un vendedor con este carácter en su nombre e intentamos filtrarlo para generar informes, al visualizarlo en "devtools" aparece el siguiente mensaje:

"No se puede devolver un valor nulo para el campo ReportDetails.rowNumber, que no admite valores nulos."

## Simulación

Para simular este comportamiento, es necesario seleccionar un vendedor que contenga este carácter especial en su nombre e intentar eliminar un informe de dicho vendedor.

## Workaround

Como solución alternativa, se debe eliminar este carácter especial del nombre del vendedor.