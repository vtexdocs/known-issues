---
title: Exportación lenta de tablas de precios para cuentas con un catálogo grande
slug: exportacion-lenta-de-tablas-de-precios-para-cuentas-con-un-catalogo-grande
status: PUBLISHED
createdAt: 2025-07-04T18:50:06.526Z
updatedAt: 2025-07-04T18:50:06.526Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: slow-price-table-export-for-accounts-with-large-catalog
locale: es
kiStatus: Scheduled
internalReference: 674353
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las exportaciones de tablas de precios en cuentas con un gran número de SKUs pueden tardar varias horas en completarse. El principal cuello de botella ocurre durante el paso inicial, donde los productos son recuperados del Catálogo antes de que los datos de precios puedan ser recuperados. Durante esta fase, la exportación permanece en el estado `Iniciando` en el VTEX Admin, sin mostrar ningún porcentaje de progreso. Esto puede persistir por un largo tiempo, causando confusión y dando la impresión de que el proceso está atorado, cuando en realidad todavía está enumerando los SKUs.In algunos casos, la exportación puede fallar silenciosamente debido a un tiempo de espera del Catálogo. Cuando esto ocurre, no se muestra ningún error y no se envía el informe por correo electrónico.

## Simulación


Nota: Dado que el proceso depende del tiempo de respuesta del catálogo, es posible que el problema no se produzca siempre. En ocasiones, la exportación podría completarse más rápido si la consulta del Catálogo vuelve rápidamente. Para una reproducción más fiable, evite aplicar filtros y elija una cuenta con un gran número de artículos (por ejemplo, cuentas con más de 400.000 SKU).

- Vaya a VTEX Admin > Precios > Exportar > Tabla de Precios Base.
- Activar una exportación de precios
- Observe que el estado de exportación permanece como `Iniciando` durante largos periodos
## Workaround


Aplique filtros (por ejemplo, por marca, categoría, colección) al exportar para reducir el número de artículos y disminuir el tiempo de exportación.



