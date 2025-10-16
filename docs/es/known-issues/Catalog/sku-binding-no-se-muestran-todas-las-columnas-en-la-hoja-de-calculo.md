---
title: Sku binding No se muestran todas las columnas en la hoja de cálculo
slug: sku-binding-no-se-muestran-todas-las-columnas-en-la-hoja-de-calculo
status: PUBLISHED
createdAt: 2025-10-16T20:29:32.155Z
updatedAt: 2025-10-16T20:29:32.155Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-binding-doesnt-show-all-columns-in-the-spreadsheet
locale: es
kiStatus: Backlog
internalReference: 1163100
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Hay dos escenarios aquí

1. En la antigua UI de sku binding la hoja de cálculo de exportación devolvía 7 columnas, hoy la nueva UI cuando exportamos la hoja de cálculo devuelve 4 columnas.
2. El nombre del archivo se cambió a (accountname + username) y anteriormente en la antigua UI se exportaba con la fecha "SkuSeller_2025-01-14_15-1-16"


#### Simulación




1. En la antigua UI de sku binding la hoja de cálculo de exportación devolvía 7 columnas, hoy la nueva UI cuando exportamos la hoja de cálculo devuelve 4 columnas.

 ![](https://vtexhelp.zendesk.com/attachments/token/OCsHYfXDqaz6W76qYhp7C1DDW/?name=image.png)

**NUEVAS COLUMNAS**
StockKeepingUnitId
SellerId
SellerStockKeepingUnitId
IsActive

 ![](https://vtexhelp.zendesk.com/attachments/token/gKb7BUfDenjXsGTQ0sE9F1DXr/?name=image.png)

**COLUMNAS ANTIGUAS**
SkuSellerId
SellerId
StockKeepingUnitId
SellerStockKeepingUnitId
IsActive
UpdateDate
Fecha de actualización solicitada

**2.** El nombre del fichero se ha cambiado a (accountname + username) y anteriormente en la antigua UI se exportaba con la fecha "SkuSeller_2025-01-14_15-1-16"

**NOMBRE DEL FICHERO ANTES | ANTIGUO**

 ![](https://vtexhelp.zendesk.com/attachments/token/HjApMXd3SVgQ7Pb8XEN3Mgv20/?name=image.png)

**NOMBRE DEL FICHERO DESPUÉS | NUEVO **

 ![](https://vtexhelp.zendesk.com/attachments/token/R2WZAjWdduzMXo7mFAT8LFmN6/?name=image.png)

## Workaround


Utilizar la antigua interfaz de usuario



