---
title: 'Markeplace-IN La paginación del cursor de la API de sugerencias (_next) solo cubre las sugerencias pendientes y puede parecer que se detuvo antes de tiempo.'
slug: markeplacein-la-paginacion-del-cursor-de-la-api-de-sugerencias-next-solo-cubre-las-sugerencias-pendientes-y-puede-parecer-que-se-detuvo-antes-de-tiempo
status: PUBLISHED
createdAt: 2026-08-17T17:03:35.000Z
updatedAt: 2026-08-17T17:03:35.000Z
contentType: knownIssue
productTeam: Marketplace In
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace In
slugEN: markeplacein-suggestions-api-cursor-pagination-next-only-covers-pending-suggestions-and-may-look-like-it-stopped-early
locale: es
kiStatus: Backlog
internalReference: 1448547
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La paginación del cursor `GET /{accountName}/suggestions` (`_next`) restringe implícitamente los resultados a `status=pending`, lo que imposibilita escanear la base completa de sugerencias de una cuenta (todos los estados) mediante el cursor en una sola pasada. Se detiene sin error ni advertencia una vez que se agota el subconjunto de sugerencias pendientes, mucho antes de cubrir el total de sugerencias de la cuenta.

## Simulación

- Seleccione una cuenta con una gran base de sugerencias (decenas de miles de registros en múltiples estados y tipos).

- Llame a `GET https://api.vtex.com/{accountName}/suggestions?_from=1&_to=1` para confirmar el total mediante `Range.Total`. Tenga en cuenta que esto incluye todos los estados y tipos.
- Llama a `GET https://api.vtex.com/{accountName}/suggestions` usando solo el cursor `_next` (sin otros parámetros de consulta), siguiendo cada token `Next` devuelto hasta que la respuesta deje de incluir `Next`.

- Compara el total de elementos escaneados mediante el cursor con `Range.Total` del paso 2: el total del cursor será significativamente menor (en los casos observados, aproximadamente entre el 10 % y el 20 % del total de la cuenta), sin errores HTTP en ningún momento.

## Workaround

Sí. Para leer la base de sugerencias completa (todos los estados) de una cuenta, usa la paginación con desplazamiento (`_from`/`_to`) en lugar del cursor.

1. Envíe siempre el estado explícitamente (valores documentados: `accepted`, `pending`, `denied`; confirme si se aplica algún valor adicional antes de utilizarlo).

2. Envíe siempre el tipo explícitamente; solo acepta un valor por llamada (`new` o `update`), por lo que debe ejecutar una pasada completa por tipo.

3. Mantenga la ventana de página constante durante todo el escaneo (máximo 50 registros por página); cambiarla durante el escaneo puede provocar un problema de reordenamiento ya conocido.

4. Elimine los resultados duplicados del lado del cliente (por ejemplo, por `sellerId` + `sellerSkuId`) y vuelva a ejecutar cada segmentación de estado × tipo hasta que una pasada no devuelva nuevos registros, ya que no se garantiza la estabilidad del orden en un conjunto de datos en tiempo real o cambiante.