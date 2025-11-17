---
title: 'La aplicación AB Tester muestra información errónea sobre sesiones y conversión'
slug: la-aplicacion-ab-tester-muestra-informacion-erronea-sobre-sesiones-y-conversion
status: PUBLISHED
createdAt: 2025-11-17T17:39:59.471Z
updatedAt: 2025-11-17T17:39:59.471Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: ab-tester-app-shows-miscalculated-information-for-sessions-and-conversion
locale: es
kiStatus: Fixed
internalReference: 865727
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La aplicación AB Tester muestra información mal calculada para las sesiones y la conversión al ejecutar las pruebas, lo que provoca una interpretación no deseada de los resultados. La funcionalidad de división del espacio de trabajo sigue funcionando como se esperaba.


#### Simulación



- Cree una prueba A/B;
- Deje que la prueba se ejecute durante algún tiempo;
- Compruebe los valores de sesiones y conversiones; mostrará información mal calculada.

## Workaround


Utilice una herramienta de análisis externa para analizar los datos.


