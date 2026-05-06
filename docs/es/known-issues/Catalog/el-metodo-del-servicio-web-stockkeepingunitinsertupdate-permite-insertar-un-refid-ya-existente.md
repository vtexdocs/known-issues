---
title: 'El método del servicio web «StockKeepingUnitInsertUpdate» permite insertar un RefId ya existente'
slug: el-metodo-del-servicio-web-stockkeepingunitinsertupdate-permite-insertar-un-refid-ya-existente
status: PUBLISHED
createdAt: 2021-08-25T22:49:22.000Z
updatedAt: 2026-01-26T16:56:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: stockkeepingunitinsertupdate-webservice-method-allows-to-insert-existent-refid
locale: es
kiStatus: Fixed
internalReference: 419460
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente no es posible insertar ni actualizar un RefId que ya esté registrado para otra SKU mediante la API REST, la carga de hojas de cálculo o el Administrador de catálogos; sin embargo, mediante el servicio web sí se puede insertar un RefId ya existente.

## Simulación

- Intenta insertar un RefId existente en otra SKU utilizando el siguiente método:

 curl --location --request POST 'http://webservice-merch.vtexcommerce.com.br/Service.svc?wsdl' \--header 'Content-Type: text/xml' \--header 'SOAPAction: http://tempuri.org/IService/StockKeepingUnitInsertUpdate' \--header 'Authorization: Basic ' \--header 'Cookie: ISSMB=ScreenMedia=0&UserAcceptMobile=False' \--data-raw '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">  <soapenv:Header/>  <soapenv:Body> <tem:StockKeepingUnitInsertUpdate> <tem:stockKeepingUnitVO> <!--Obligatorio:--> <a:CommercialConditionId>1</a:CommercialConditionId> <!--Obligatorio:--> <a:CostPrice>1,00</a:CostPrice> <!--Obligatorio:--> <a:CubicWeight>10</a:CubicWeight> <!--Obligatorio:--> <a:DateUpdated>2014-12-18T00:00:00</a:DateUpdated> <!--Obligatorio:--> <a:EstimatedDateArrival>2014-12-18T00:00:00</a:EstimatedDateArrival> <!--Obligatorio:--> <a:Height>10</a:Height> <!--Obligatorio:--> <a:Id>4</a:Id> <!--Opcional:--> <a:InternalNote></a:InternalNote> <!--Obligatorio:--> <a:IsActive>true</a:IsActive> <!--Obligatorio:--> <a:IsAvaiable>true</a:IsAvaiable> <!--Obligatorio:--> <a:IsKit>true</a:IsKit> <!--Obligatorio:--> <a:Length>10</a:Longitud> <!--Obligatorio:--> <a:PrecioDeCatálogo>4,00</a:PrecioDeCatálogo> <!--Obligatorio:--> <a:CódigoDeFabricante>1</a:CódigoDeFabricante> <!--Obligatorio:--> <a:MeasurementUnit>1</a:MeasurementUnit> <!--Obligatorio:--> <a:ModalId>1</a:ModalId> <!--Opcional:--> <a:ModalType></a:ModalType> <!--Obligatorio:--> <a:Name>SKU KIT 1</a:Name> <!--Obligatorio:--> <a:Precio>1,00</a:Precio> <!--Obligatorio:--> <a:IdProducto>10003</a:IdProducto> <!--Obligatorio:--> <a:ProductName>Producto KIT</a:ProductName> <!--Obligatorio:--> <a:RealHeight>10</a:RealHeight> <!--Obligatorio:--> <a:LongitudReal>10</a:LongitudReal> <!--Obligatorio:--> <a:PesoRealKg>10</a:PesoRealKg> <!--Obligatorio:--> <a:RealWidth>10</a:RealWidth> <!--Obligatorio:--> <a:RefId>999999</a:RefId> <!--Obligatorio:--> <a:RewardValue>0</a:RewardValue> <!--Obligatorio:--> <a:StockKeepingUnitEans> <!--Cero o más repeticiones:--> <a:StockKeepingUnitEanDTO> <!--Obligatorio:--> <a:Ean>1234567891014</a:Ean> </a:StockKeepingUnitEanDTO> </a:StockKeepingUnitEans> <!--Obligatorio:--> <a:MultiplicadorDeUnidad>1</a:MultiplicadorDeUnidad> <!--Obligatorio:--> <a:VenderPorSeparado>false</a:VenderPorSeparado> <!--Obligatorio:--> <a:PesoKg>10</a:PesoKg> <!--Obligatorio:--> <a:Ancho>10</a:Ancho> </tem:unidadDealmacenamientoVO> </tem:InsertarActualizarUnidadDealmacenamiento>  </soapenv:Cuerpo></soapenv:Sobre>'

## Workaround

No utilice el mismo RefId para diferentes SKU.



%0A