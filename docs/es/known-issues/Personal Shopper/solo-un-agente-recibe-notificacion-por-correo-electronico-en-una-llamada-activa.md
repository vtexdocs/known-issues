---
title: 'Solo un agente recibe notificación por correo electrónico en una llamada activa.'
slug: solo-un-agente-recibe-notificacion-por-correo-electronico-en-una-llamada-activa
status: PUBLISHED
createdAt: 2025-04-30T16:10:04.000Z
updatedAt: 2026-10-08T17:32:51.000Z
contentType: knownIssue
productTeam: Personal Shopper
author: 2mXZkbi0oi061KicTExNjo
tag: Personal Shopper
slugEN: only-one-agent-receives-email-notification-in-active-call
locale: es
kiStatus: No Fix
internalReference: 1218130
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

> **Nota: Tras una reciente revisión interna, hemos decidido descontinuar el servicio de Personal Shopper. Por este motivo, este problema conocido no se solucionará. Para obtener más información sobre nuestra solución de compras personalizadas, consulte la **Plataforma CX** (https://www.vtex.com/en-us/solutions/business-needs/agentic-customer-service), que ofrece soporte tanto para la compra como para la posventa, aportando mayor agilidad al proceso y aumentando potencialmente la conversión de ventas.**

Cuando la asignación manual de agentes está habilitada en Personal Shopper, solo uno de los agentes asignados a una llamada recibe la notificación por correo electrónico. Los demás agentes asignados no reciben notificación, por lo que podrían perder llamadas entrantes de clientes. Este comportamiento no se limita a una cuenta específica.

## Simulación

1. En el panel de administración, habilite la asignación manual de agentes para Personal Shopper.

2. Registre al menos dos agentes y asígnelos a la misma [tienda/cola/sesión].
3. Como cliente, solicite una llamada de un Asesor de Compras Personal desde la tienda.

4. Revise la bandeja de entrada de cada agente asignado:

## Workaround

1. En el panel de administración, vaya a [ruta exacta del menú, por ejemplo: Asesor de Compras Personal > Configuración > Agentes].

2. Identifique al agente que no recibe las notificaciones por correo electrónico.

3. Elimine a este agente.

4. Registre al agente nuevamente, utilizando la misma dirección de correo electrónico y la misma configuración.

5. Guarde los cambios.

6. Solicite una nueva llamada para confirmar que todos los agentes asignados reciben la notificación por correo electrónico.