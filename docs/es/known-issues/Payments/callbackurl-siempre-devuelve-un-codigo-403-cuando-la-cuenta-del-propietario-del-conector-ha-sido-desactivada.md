---
title: 'CallbackUrl siempre devuelve un código 403 cuando la cuenta del propietario del conector ha sido desactivada'
slug: callbackurl-siempre-devuelve-un-codigo-403-cuando-la-cuenta-del-propietario-del-conector-ha-sido-desactivada
status: PUBLISHED
createdAt: 2023-03-21T18:37:32.000Z
updatedAt: 2023-03-21T18:37:32.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: callbackurl-always-returns-403-when-the-connector-owner-account-has-been-disabled
locale: es
kiStatus: Backlog
internalReference: 775235
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En el caso de los conectores que utilizan nuestro PPP, la configuración del conector incluye un campo denominado `accountName` que especifica la cuenta utilizada para publicar la aplicación. Normalmente, el valor de `accountName` coincide con el nombre de la cuenta del socio. Sin embargo, cuando el socio publica conectores utilizando su propia infraestructura, emplea un punto final específico que no es relativo; así es como lo hacen los conectores que utilizan nuestra infraestructura IO.

Esta diferencia en los métodos de publicación afecta a la forma en que la puerta de enlace construye la `callbackUrl`, que utiliza el `accountName` para determinar el inquilino. Como resultado, la construcción de la URL es inflexible, y hay casos en los que la cuenta asociada al `accountName` podría estar desactivada y no poder aceptar solicitudes. Esto hace que todas las solicitudes sean denegadas con un código 403, ya que la puerta de enlace siempre utiliza esta cuenta para construir la URL.

## Simulación

Este escenario no se puede simular a menos que se disponga de una cuenta desactivada.

## Workaround

Existen algunas soluciones alternativas para este escenario, entre ellas cambiar el `accountName` donde se publicó el conector y enviar una nueva solicitud de publicación para cambiar el conector a nuestra nueva solución «wrapper». Por parte del proveedor, pueden sustituir el inquilino por la cuenta actual al solicitar una devolución de llamada.