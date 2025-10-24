---
title: 'Valores incorrectos en las comillas de los artículos con configuración de multiplicador unitario'
slug: valores-incorrectos-en-las-comillas-de-los-articulos-con-configuracion-de-multiplicador-unitario
status: PUBLISHED
createdAt: 2025-10-16T19:16:49.507Z
updatedAt: 2025-10-16T19:16:49.507Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: incorrect-values-in-quotes-on-items-with-unity-multiplier-configuration
locale: es
kiStatus: Backlog
internalReference: 1271492
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al crear un presupuesto con artículos que tienen una configuración de multiplicador unitario sólo se tiene en cuenta la cantidad original, no multiplicada, mientras que la cantidad multiplicada no se tiene en cuenta. El precio se multiplica correctamente.

Esto conduce a un escenario en el que `n` unidades del artículo se les asigna el precio de `n * multiplicador` artículos en la cotización creada.


#### Simulación



- Añada un artículo con configuración de multiplicador de unidades al carrito;
- Elija la opción `Crear un presupuesto`;
- La cantidad original del artículo se mantendrá y el precio considerará los artículos multiplicados.


#### Workaround


N/A



