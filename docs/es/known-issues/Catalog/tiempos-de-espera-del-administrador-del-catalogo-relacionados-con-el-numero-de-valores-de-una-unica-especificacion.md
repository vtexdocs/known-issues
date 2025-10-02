---
title: Tiempos de espera del administrador del catálogo relacionados con el número de valores de una única especificación
slug: tiempos-de-espera-del-administrador-del-catalogo-relacionados-con-el-numero-de-valores-de-una-unica-especificacion
status: PUBLISHED
createdAt: 2025-10-02T20:01:14.724Z
updatedAt: 2025-10-02T20:01:14.724Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-admin-timeouts-related-to-the-number-of-values-in-a-single-specification
locale: es
kiStatus: Backlog
internalReference: 433664
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


No hay límite en el registro de campos de especificación, lo que puede generar tiempos de espera en el administrador del catálogo.


#### Simulación



- Registre un gran número de campos (es decir, más de 1000) en una única especificación.
- Abrir el admin de esta especificación, o intentar cambiar un producto que contenga esta especificación.
- Reciba una respuesta de solicitud 404 o 504.

## Workaround


Prevenir: No registrar demasiados valores en una sola especificación.
Solución: Desactive la especificación y registre los valores en varias especificaciones, preferiblemente distribuidas en diferentes categorías.
Consejo: No concatene especificaciones, especialmente en la categoría raíz.