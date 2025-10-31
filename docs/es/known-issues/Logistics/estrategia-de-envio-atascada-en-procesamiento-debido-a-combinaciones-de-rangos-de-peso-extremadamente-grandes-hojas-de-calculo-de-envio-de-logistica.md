---
title: 'Estrategia de envío atascada en Procesamiento debido a combinaciones de rangos de peso extremadamente grandes (hojas de cálculo de envío de Logística).'
slug: estrategia-de-envio-atascada-en-procesamiento-debido-a-combinaciones-de-rangos-de-peso-extremadamente-grandes-hojas-de-calculo-de-envio-de-logistica
status: PUBLISHED
createdAt: 2025-10-31T16:42:38.889Z
updatedAt: 2025-10-31T16:42:38.889Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-strategy-stuck-in-processing-due-to-extremely-large-weightrange-combinations-logistics-shipping-spreadsheets
locale: es
kiStatus: Backlog
internalReference: 1304893
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las políticas de envío cargadas a través de la hoja de cálculo de Logística pueden permanecer en Procesamiento indefinidamente cuando el archivo contiene una gran combinación de rangos de peso por rango de código postal, lo que resulta en un número excesivo de combinaciones de estrategias de envío.

El síntoma visible es que el estado Estrategia de envío nunca cambia de En proceso después de importar la hoja de cálculo.
Las cuentas con tablas de envío con miles de rangos de peso por rango de código postal se ven afectadas, incluso si el total de filas de la hoja de cálculo es grande pero estructuralmente repetitivo.

## Simulación


Para reproducir el problema:

- Configure una hoja de cálculo de envíos de Logística con numerosos pasos de peso y múltiples rangos de código postal/precio, dando como resultado un conjunto muy grande de combinaciones.
- Intente cargar la hoja de cálculo en las Políticas de envío de la cuenta
-

Observe que la Estrategia de Envío creada a partir de esta hoja de cálculo permanece en Procesamiento y no se completa, incluso después de intervalos de tiempo prolongados.


## Workaround



- Reduzca la complejidad de la hoja de cálculo antes de cargarla:
- Fusione rangos de peso contiguos que tengan el mismo precio y SLA.
- Después de reducir el número de rangos de pesos por destino, vuelva a cargar la hoja de cálculo y vuelva a procesar la política.
- Si la estrategia actual ya está atascada, cancele/elimine la estrategia pendiente y vuelva a cargar una versión simplificada de la hoja de cálculo.
-

Si la simplificación no es factible: No hay solución disponible en este momento.