---
title: 'Códigos de producto recibidos: la función de exportación no funciona para los administradores en otros idiomas (solo PT, EN, ES)'
slug: codigos-de-producto-recibidos-la-funcion-de-exportacion-no-funciona-para-los-administradores-en-otros-idiomas-solo-pt-en-es
status: PUBLISHED
createdAt: 2022-09-29T14:22:30.000Z
updatedAt: 2023-04-28T12:18:16.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: received-skus-export-function-not-working-for-admins-in-other-languages-only-pt-en-es
locale: es
kiStatus: Fixed
internalReference: 668122
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La función de exportación para obtener una hoja de cálculo con los SKU pendientes, aprobados o rechazados por vendedor no funciona cuando el administrador tiene configurado un idioma distinto al PT, EN o ES.

El mensaje de error que aparece es genérico. Un ejemplo de mensaje en francés es:
`Se ha producido un error al exportar la hoja, por favor, inténtalo de nuevo.`

## Simulación

1. Configure el panel de administración en un idioma distinto de PT, EN o ES;
2. Vaya al módulo «SKU recibidos»;
3. Seleccione un vendedor y exporte los SKU de las áreas «pendientes», «aprobados» o «rechazados»;
4. Compruebe que aparece un error genérico.

## Workaround

provisional**
Cambie el idioma del panel de administración a PT, EN o ES y exporte la hoja de cálculo.