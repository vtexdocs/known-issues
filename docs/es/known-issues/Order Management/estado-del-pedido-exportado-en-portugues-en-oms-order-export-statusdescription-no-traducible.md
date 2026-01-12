---
title: 'Estado del pedido exportado en portugués en OMS Order Export (statusDescription no traducible)'
slug: estado-del-pedido-exportado-en-portugues-en-oms-order-export-statusdescription-no-traducible
status: PUBLISHED
createdAt: 2026-01-12T21:57:30.124Z
updatedAt: 2026-01-12T21:57:30.124Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-status-exported-in-portuguese-in-oms-order-export-nontranslatable-statusdescription
locale: es
kiStatus: Backlog
internalReference: 1350055
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Al exportar pedidos desde OMS (Exportación de pedidos/Informes), la columna «Estado» siempre se muestra en portugués, independientemente del idioma del administrador/usuario. El síntoma visible son las exportaciones en varios idiomas: todos los demás campos aparecen en el idioma esperado, mientras que el campo Estado permanece en portugués. Las cuentas que operan en otros idiomas (por ejemplo, español o inglés) se ven afectadas cuando se utilizan las exportaciones de OMS para la generación de informes. Ingeniería confirmó que el texto del estado proviene de una descripción de estado codificada sin ruta de traducción actual. #### Simulación

## Workaround

