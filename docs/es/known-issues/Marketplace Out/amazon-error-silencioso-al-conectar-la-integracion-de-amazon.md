---
title: 'Amazon Error silencioso al conectar la integración de Amazon'
slug: amazon-error-silencioso-al-conectar-la-integracion-de-amazon
status: PUBLISHED
createdAt: 2026-08-31T18:41:28.000Z
updatedAt: 2026-08-31T18:41:28.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-silent-error-when-connecting-amazon-integration
locale: es
kiStatus: Backlog
internalReference: 1454182
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un vendedor intenta configurar la integración nativa de Amazon pero no completa los campos de datos de FBA Classic requeridos, se produce un error silencioso. No se muestra ningún mensaje de error al usuario. Tras hacer clic en "Conectar", la página se carga indefinidamente sin ninguna solicitud de red, lo que impide avanzar a la autorización de Amazon Seller Central.

## Simulación

1. Acceda a Administración de VTEX → Marketplace → Integraciones de Amazon
2. Abra el formulario de configuración de la integración nativa (componente `NativeMkpConfig`)
3. Complete los campos de configuración básicos
4. Active la opción "Usar FBA Classic"
5. Deje el campo "ID de Dock" vacío (los demás campos de datos de FBA Classic permanecen sin completar)
6. Haga clic en "Conectar"

**Resultado:** La página se carga indefinidamente sin ningún mensaje de error. Fallo silencioso: no se activa ninguna solicitud de red.

## Workaround

Complete todos los campos de datos según las funciones habilitadas en Amazon:
Si el error persiste después de completar correctamente todos los datos según su configuración de Amazon, abra un ticket de soporte.