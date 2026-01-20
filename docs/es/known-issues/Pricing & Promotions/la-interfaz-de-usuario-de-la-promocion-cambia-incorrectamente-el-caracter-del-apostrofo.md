---
title: 'La interfaz de usuario de la promoción cambia incorrectamente el carácter del apóstrofo.'
slug: la-interfaz-de-usuario-de-la-promocion-cambia-incorrectamente-el-caracter-del-apostrofo
status: PUBLISHED
createdAt: 2026-01-20T14:00:34.555Z
updatedAt: 2026-01-20T14:00:34.555Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-ui-incorrectly-changes-aphostrophe-character
locale: es
kiStatus: Backlog
internalReference: 1353323
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Al restringir una promoción de envío a un SLA cuyo nombre contiene un carácter especial (apóstrofo), la interfaz de usuario del administrador guarda el nombre utilizando un apóstrofo tipográfico (’), que difiere del apóstrofo simple (') utilizado por Logística/Checkout.

Dado que la coincidencia se realiza mediante una comparación exacta de cadenas, la promoción nunca reconoce el SLA seleccionado en el momento del pago, lo que impide que se aplique la ventaja. #### Simulación

## Workaround

