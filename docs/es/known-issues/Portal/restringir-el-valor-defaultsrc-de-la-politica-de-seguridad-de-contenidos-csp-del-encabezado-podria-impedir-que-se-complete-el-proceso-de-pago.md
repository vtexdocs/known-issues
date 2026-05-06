---
title: 'Restringir el valor «default-src» de la Política de Seguridad de Contenidos (CSP) del encabezado podría impedir que se complete el proceso de pago.'
slug: restringir-el-valor-defaultsrc-de-la-politica-de-seguridad-de-contenidos-csp-del-encabezado-podria-impedir-que-se-complete-el-proceso-de-pago
status: PUBLISHED
createdAt: 2023-03-02T17:29:18.000Z
updatedAt: 2023-03-02T17:29:18.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: restrict-the-defaultsrc-of-the-header-content-security-policy-could-break-the-checkout
locale: es
kiStatus: Backlog
internalReference: 763359
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Restringir el encabezado de la Política de Seguridad de Contenidos (CSP) puede provocar que no se carguen los archivos del proceso de pago. Por ejemplo, la configuración `default-src 'self'` puede hacer que no se carguen los archivos procedentes de vtex.com

## Simulación

1. Configure **default-src** de la Política de seguridad de contenidos
2. Intente realizar una compra a través del proceso de pago
3. Observe el error en la consola

 Política de seguridad de contenidos: la configuración de la página ha bloqueado la carga de un recurso en

## Workaround

Elimine el encabezado