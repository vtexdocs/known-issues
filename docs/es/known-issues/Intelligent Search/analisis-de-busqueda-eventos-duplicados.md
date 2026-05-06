---
title: 'Análisis de búsqueda: eventos duplicados'
slug: analisis-de-busqueda-eventos-duplicados
status: PUBLISHED
createdAt: 2023-03-15T19:38:51.000Z
updatedAt: 2024-08-05T16:28:34.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-analytics-duplicated-events
locale: es
kiStatus: Fixed
internalReference: 771986
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos eventos de los informes de Búsqueda Inteligente aparecen duplicados, lo que puede afectar a la vista de análisis del módulo de administración de búsqueda.


#### Preguntas frecuentes

**1. ¿Afecta esto a todos los eventos de VTEX (por ejemplo, captura de solicitudes, paneles de la página de inicio de administración, etc.)?**

No, por el momento, los análisis de Búsqueda Inteligente se calculan de forma diferente e independiente de esas métricas y eventos. Este problema solo afecta a la página Búsqueda > Análisis.

**2. ¿Se están sobrecalculando todas las métricas?**

Sí, en este momento se están sobrecalculando todas las métricas sin procesar que se muestran en la página Búsqueda > Análisis.

Estas son: recuento de búsquedas, clics en un término, clics únicos en un término, recuento de transacciones tras la búsqueda de un término e ingresos generados por dichas transacciones, tasa de clics y conversión.

**3. ¿Se han visto afectados también los datos de «Exportar a CSV»?**

Sí, los datos exportados a CSV también se ven afectados por el sobrecálculo.

**4. ¿Afecta esto al algoritmo de relevancia de búsqueda y a los resultados de búsqueda?**

No, aunque el algoritmo de relevancia de búsqueda también utiliza los eventos de análisis para calcular la puntuación de popularidad del producto, no utiliza las métricas agregadas.

## Simulación

La situación se puede observar al consultar la página de administración de búsqueda en la sección de informes/análisis.

## Workaround

provisional**
N/A