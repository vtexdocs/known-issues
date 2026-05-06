---
title: 'Tiempos de espera del administrador del catálogo relacionados con el número de valores en una sola especificación'
slug: tiempos-de-espera-del-administrador-del-catalogo-relacionados-con-el-numero-de-valores-en-una-sola-especificacion
status: PUBLISHED
createdAt: 2021-09-20T23:01:28.000Z
updatedAt: 2025-10-02T23:00:36.000Z
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

No hay ningún límite en el registro de campos de especificación, lo que puede provocar tiempos de espera en la administración del catálogo.

## Simulación

- Registra un gran número de campos (por ejemplo, más de 1000) en una sola especificación.
- Abre la administración de esta especificación o intenta modificar un producto que contenga dicha especificación.
- Se recibe una respuesta de solicitud 404 o 504.

## Workaround

Prevención: No registre demasiados valores en una sola especificación.
Solución: Desactive la especificación y registre los valores en varias especificaciones, preferiblemente distribuidas en diferentes categorías.
Consejo: No concatene especificaciones, especialmente en la categoría raíz.