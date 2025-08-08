---
title: El evento view_cart se activa intermitentemente dos veces al añadir artículos al minicart
slug: el-evento-viewcart-se-activa-intermitentemente-dos-veces-al-anadir-articulos-al-minicart
status: PUBLISHED
createdAt: 2025-08-08T17:31:19.465Z
updatedAt: 2025-08-08T17:31:19.465Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: viewcart-event-is-intermittently-triggered-twice-when-adding-items-to-the-minicart
locale: es
kiStatus: Backlog
internalReference: 1265581
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al añadir artículos al carrito, el evento analítico `view_cart` se activa dos veces de forma intermitente. Este comportamiento inesperado provoca entradas de eventos duplicadas, lo que puede causar imprecisiones en el análisis de datos y la generación de informes.


#### Simulación


1. Añade un producto al minicarro;
2. Compruebe su dataLayer, a veces verá dos eventos de `view_cart` después del `add_to_cart`.


#### Workaround


N/A



