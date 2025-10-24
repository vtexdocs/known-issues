---
title: 'El análisis de riesgos se cancela antes de lo previsto debido al límite fijo de reintentos'
slug: el-analisis-de-riesgos-se-cancela-antes-de-lo-previsto-debido-al-limite-fijo-de-reintentos
status: PUBLISHED
createdAt: 2025-08-28T13:19:56.808Z
updatedAt: 2025-08-28T13:19:56.808Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: risk-analysis-canceled-earlier-than-expected-due-to-fixed-retry-limit
locale: es
kiStatus: Backlog
internalReference: 1282965
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En una transacción con un conector antifraude construido utilizando el protocolo antifraude estándar de VTEX, es posible observar que cuando se envía el campo **hook**, la transacción se cancela antes de lo esperado. Por defecto, el controlador antifraude pone en cola **24 intentos** en lugar del número deseado definido por el proveedor cuando se activa el método con gancho. Esto resulta en muchos menos intentos de análisis de los esperados.

El siguiente mensaje es una prueba fehaciente de que se ha producido el problema:

    No se ha podido realizar el análisis de riesgo de la transacción . El estado actual de la transacción era AnalizandoRiesgo. Intentos de autorización: 24. Mensaje de Excepción : No se pudo confirmar la transacción con Id = . Confirmación pendiente. Intentos de autorización: 24.Reintentos finalizados.



#### Simulación



1. Configurar un conector antifraude que tenga el campo **gancho**.
2. Cree una transacción que utilice una regla con un conector antifraude (AFPP).
3. Compruebe las iteraciones: sólo habrá 24 reintentos de análisis de riesgo. Después, la transacción entrará en el flujo de cancelación.

## Workaround


No hay solución.



