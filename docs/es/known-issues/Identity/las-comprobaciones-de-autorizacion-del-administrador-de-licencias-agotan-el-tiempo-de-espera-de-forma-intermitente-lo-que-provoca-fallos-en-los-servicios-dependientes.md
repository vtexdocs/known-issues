---
title: 'Las comprobaciones de autorización del Administrador de licencias agotan el tiempo de espera de forma intermitente, lo que provoca fallos en los servicios dependientes.'
slug: las-comprobaciones-de-autorizacion-del-administrador-de-licencias-agotan-el-tiempo-de-espera-de-forma-intermitente-lo-que-provoca-fallos-en-los-servicios-dependientes
status: PUBLISHED
createdAt: 2026-10-08T19:03:55.000Z
updatedAt: 2026-10-08T19:03:55.000Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: license-manager-authorization-checks-intermittently-time-out-causing-failures-in-dependent-services
locale: es
kiStatus: Backlog
internalReference: 1471842
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Un pequeño porcentaje de las solicitudes a los puntos finales de autorización del Administrador de Licencias (LM), como `/logins/{user}/granted` y `/resources/{resourceKey}/granted`, tardan más de lo establecido por el servicio que las llama. La mayoría de estas solicitudes se responden en milisegundos, pero algunas tardan varios segundos. En ese caso, el servicio que realiza la llamada cancela su propia solicitud y la rechaza. Ocasionalmente, LM también devuelve errores 503 o 500.

Dado que muchos servicios VTEX verifican los permisos con LM antes de realizar cualquier otra acción, una respuesta lenta o fallida de LM provoca que estos servicios también fallen, incluso si el usuario o la aplicación tienen los permisos correctos. Los servicios afectados incluyen la Pasarela de Pago, el Proceso de Compra, SOS, OMS, Datos Maestros y Administración. Cada uno muestra un error diferente, según su propio tiempo de espera y manejo de errores.

El impacto más significativo actualmente se observa en la **Pasarela de Pago**. Esta verifica el acceso a la cuenta en LM en cada solicitud, con un límite de 2 segundos. Cuando LM no responde a tiempo, la pasarela devuelve el error HTTP 500 «Se canceló una tarea» sin ejecutar la operación solicitada. El efecto depende de la ruta de la pasarela:

- `StartTransaction`, `SendAdditionalData` y `AuthorizeTransaction`: la transacción se detiene antes de llegar al adquirente y el pedido puede cancelarse.

- `GetTransaction`, cuando Checkout la llama tras la aprobación del pago: el pedido puede cancelarse aunque el pago se haya aprobado. Con los conectores que utilizan reembolsos manuales, el cliente permanece con el cargo hasta que la tienda le reembolsa el dinero.

- Rutas de lectura (pagos, liquidaciones, reembolsos): estas suelen funcionar correctamente al reintentarlas.

El problema es intermitente, ocurre a diario y se presenta en varias cuentas sin un patrón específico. Reintentar la misma solicitud suele solucionar el problema.

## Simulación

Este problema no se puede reproducir a demanda. Es intermitente y ocurre principalmente cuando el servicio que realiza la llamada necesita un nuevo resultado de autorización del Administrador de licencias. Por ejemplo, la pasarela de pago reutiliza un resultado durante 5 minutos y luego vuelve a solicitarlo al Administrador de licencias. Los fallos aparecen en los registros del servicio que llamó al Administrador de licencias, no en los registros del propio Administrador de licencias.

- **Pasarela de pago:** HTTP 500 «Se canceló una tarea» después de aproximadamente 2000 ms, registrado como «CancelingRequestProcessing» / «GatewayRequestTimeoutException».

- Si falla al crear o autorizar la transacción, el adquirente no tiene registro de la solicitud.

- Si falla en `GetTransaction` durante la devolución de llamada de Checkout, el pedido se cancela aunque el pago haya sido aprobado.

- **Otros servicios que llaman al Administrador de licencias:** En los registros de la red (`vlm`), las solicitudes finalizan con el estado `0` (el emisor desistió) o `503`, aproximadamente al alcanzar el tiempo de espera del emisor.

- **Administrador de licencias:** En algunos días, se devuelven errores `BrokenCircuitException` con código 500. Estos errores provienen de las consultas de usuario del Administrador de licencias en el ID de VTEX.

## Workaround

No existe ninguna solución alternativa en la tienda.

- Reintentar la solicitud fallida suele dar resultado.

- Los pedidos cancelados tras la aprobación del pago deben reembolsarse a través del flujo del conector.