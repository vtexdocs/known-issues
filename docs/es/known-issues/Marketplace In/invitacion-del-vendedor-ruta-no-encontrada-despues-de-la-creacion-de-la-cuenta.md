---
title: 'Invitación del vendedor Ruta no encontrada después de la creación de la cuenta'
slug: invitacion-del-vendedor-ruta-no-encontrada-despues-de-la-creacion-de-la-cuenta
status: PUBLISHED
createdAt: 2025-01-22T19:09:53.000Z
updatedAt: 2026-09-22T19:24:46.000Z
contentType: knownIssue
productTeam: Marketplace In
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace In
slugEN: seller-invite-route-not-found-after-account-creation
locale: es
kiStatus: Fixed
internalReference: 1167493
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En este proceso, generamos una cuenta VTEX para estos vendedores, que corresponde al Portal del Vendedor. La creación de la cuenta es un proceso de autoservicio; es decir, el propio vendedor proporciona los datos a través de un formulario y, al enviarlo, creamos la cuenta. Una vez creada la cuenta, el vendedor es redirigido inmediatamente a su panel de administración.

## Simulación

- Acceda al flujo de invitación de vendedores en: https://VTEX.myvtex.com/admin/seller-invite/
- Registre una nueva cuenta en el Portal del Vendedor.
- Finalizar el registro de una cuenta en el Portal del Vendedor

**ERROR**

{"code":"NotFound","message":"Route test21nov2569.myvtex.com/_v/segment/admin-login/v1/login?returnUrl=/admin&email=andrei.basoc+test21nov2@vtex.com not found","source":"Vtex.Kube.Router","requestId":"f19875630eac47a588b2e32250292f4a"}

![](https://vtexhelp.zendesk.com/attachments/token/aoT6ZHSmrHyO7Te9aKKN1pRCQ/?name=image.png)

## Workaround

Existe un retraso en el aprovisionamiento de la cuenta, ya que, tras un tiempo, este error se normaliza y la cuenta queda accesible para el vendedor.