---
title: 'Las promociones de suscripción voluntaria se pueden configurar con vendedores de marca blanca a través de la API.'
slug: las-promociones-de-suscripcion-voluntaria-se-pueden-configurar-con-vendedores-de-marca-blanca-a-traves-de-la-api
status: PUBLISHED
createdAt: 2026-09-25T20:19:09.000Z
updatedAt: 2026-09-25T20:19:09.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: optin-promotions-can-be-configured-with-white-label-sellers-via-api
locale: es
kiStatus: Backlog
internalReference: 1466622
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los vendedores de marca blanca (tipo de vendedor 2) no son compatibles con las promociones que utilizan la función de suscripción voluntaria. La interfaz de administración impide intencionadamente esta configuración, ya que el flujo de suscripción voluntaria no se diseñó para admitir vendedores de marca blanca.

Sin embargo, actualmente es posible crear o actualizar la configuración a través de la API. Esto permite configurar promociones de suscripción voluntaria no compatibles con vendedores de marca blanca, pero su funcionamiento no está garantizado y podría no ser el esperado.

## Simulación

1. Cree o edite una promoción con la función de suscripción voluntaria.

2. Intente configurar un vendedor de marca blanca (tipo de vendedor 2) como vendedor suscrito a través de la interfaz de administración.

3. Observe que la interfaz de administración no permite esta configuración.

4. Configure el mismo vendedor a través de la API de promociones.

5. Observe que la API permite agregar al vendedor de marca blanca a la configuración de suscripción voluntaria.

La promoción resultante puede configurarse correctamente, pero este escenario no es compatible y no se puede garantizar su comportamiento.

## Workaround

No aplica