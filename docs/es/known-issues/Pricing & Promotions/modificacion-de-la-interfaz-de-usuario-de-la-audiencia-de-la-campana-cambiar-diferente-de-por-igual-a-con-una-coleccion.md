---
title: 'Modificación de la interfaz de usuario de la audiencia de la campaña: cambiar «Diferente de» por «Igual a» con una colección'
slug: modificacion-de-la-interfaz-de-usuario-de-la-audiencia-de-la-campana-cambiar-diferente-de-por-igual-a-con-una-coleccion
status: PUBLISHED
createdAt: 2023-08-15T15:12:38.000Z
updatedAt: 2023-08-15T15:17:55.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: campaign-audience-ui-changing-different-from-to-equal-to-with-a-collection
locale: es
kiStatus: Backlog
internalReference: 881131
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al crear un público objetivo y configurar las «Colecciones» con la opción **Diferente de**, esta opción se guarda en la interfaz de usuario; sin embargo, al volver al público objetivo, se mostrará como **Igual a** en la interfaz de usuario, aunque en la API se mantiene la primera opción seleccionada.

## Simulación

** **
Crea un público de campaña con un público objetivo; en «Colecciones», selecciona **Diferente de** y guarda.
Vuelve al público objetivo y comprueba que la opción «Diferente de» ha cambiado a «Igual a»

Antes de guardar:
 ![](https://vtexhelp.zendesk.com/attachments/token/kHN5aLHsNDPz5pblzihtgsw28/?name=Captura+de+Tela+2023-08-15+a%CC%80s+12.09.12.png)

Después de guardar:

 ![](https://vtexhelp.zendesk.com/attachments/token/hLAnRYl94mE99yyyRWVo461j5/?name=Captura+de+Tela+2023-08-15+a%CC%80s+12.09.24.png)

## Workaround

Dado que se trata de un error visual, no hay ninguna solución alternativa disponible. Solo tienes que comprobar en la API si tu opción se ha guardado correctamente y el destino se aplicará en consecuencia.