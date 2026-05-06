---
title: 'O método do serviço web `StockKeepingUnitInsertUpdate` permite inserir um RefId já existente'
slug: o-metodo-do-servico-web-stockkeepingunitinsertupdate-permite-inserir-um-refid-ja-existente
status: PUBLISHED
createdAt: 2021-08-25T22:49:22.000Z
updatedAt: 2026-01-26T16:56:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: stockkeepingunitinsertupdate-webservice-method-allows-to-insert-existent-refid
locale: pt
kiStatus: Fixed
internalReference: 419460
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, não é possível inserir/atualizar um RefId já registrado para outro SKU usando a API REST, o upload de planilhas ou o Catalog Admin; no entanto, usando o WebService, é possível inserir um RefId existente.

## Simulação

- Tente inserir um RefId existente em outro SKU usando o seguinte método:

 curl --location --request POST 'http://webservice-merch.vtexcommerce.com.br/Service.svc?wsdl' \--header 'Content-Type: text/xml' \--header 'SOAPAction: http://tempuri.org/IService/StockKeepingUnitInsertUpdate' \--header 'Authorization: Basic ' \--header 'Cookie: ISSMB=ScreenMedia=0&UserAcceptMobile=False' \--data-raw '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">  <soapenv:Header/>  <soapenv:Body> <tem:StockKeepingUnitInsertUpdate> <tem:stockKeepingUnitVO> <!--Obrigatório:--> <a:CommercialConditionId>1</a:CommercialConditionId> <!--Obrigatório:--> <a:CostPrice>1,00</a:CostPrice> <!--Obrigatório:--> <a:CubicWeight>10</a:CubicWeight> <!--Obrigatório:--> <a:DateUpdated>2014-12-18T00:00:00</a:DateUpdated> <!--Obrigatório:--> <a:EstimatedDateArrival>2014-12-18T00:00:00</a:EstimatedDateArrival> <!--Obrigatório:--> <a:Height>10</a:Height> <!--Obrigatório:--> <a:Id>4</a:Id> <!--Opcional:--> <a:InternalNote></a:InternalNote> <!--Obrigatório:--> <a:IsActive>true</a:IsActive> <!--Obrigatório:--> <a:IsAvaiable>true</a:IsAvaiable> <!--Obrigatório:--> <a:IsKit>true</a:IsKit> <!--Obrigatório:--> <a:Length>10</a:Length> <!--Obrigatório:--> <a:ListPrice>4,00</a:ListPrice> <!--Obrigatório:--> <a:ManufacturerCode>1</a:ManufacturerCode> <!--Obrigatório:--> <a:MeasurementUnit>1</a:MeasurementUnit> <!--Obrigatório:--> <a:ModalId>1</a:ModalId> <!--Opcional:--> <a:ModalType></a:ModalType> <!--Obrigatório:--> <a:Name>SKU KIT 1</a:Name> <!--Obrigatório:--> <a:Price>1,00</a:Price> <!--Obrigatório:--> <a:ProductId>10003</a:ProductId> <!--Obrigatório:--> <a:ProductName>Produto KIT</a:ProductName> <!--Obrigatório:--> <a:RealHeight>10</a:RealHeight> <!--Obrigatório:--> <a:RealLength>10</a:RealLength> <!--Obrigatório:--> <a:RealWeightKg>10</a:RealWeightKg> <!--Obrigatório:--> <a:RealWidth>10</a:RealWidth> <!--Obrigatório:--> <a:RefId>999999</a:RefId> <!--Obrigatório:--> <a:RewardValue>0</a:RewardValue> <!--Obrigatório:--> <a:StockKeepingUnitEans> <!--Zero ou mais repetições:--> <a:StockKeepingUnitEanDTO> <!--Obrigatório:--> <a:Ean>1234567891014</a:Ean> </a:StockKeepingUnitEanDTO> </a:StockKeepingUnitEans> <!--Obrigatório:--> <a:UnitMultiplier>1</a:UnitMultiplier> <!--Obrigatório:--> <a:VenderSeparadamente>false</a:VenderSeparadamente> <!--Obrigatório:--> <a:WeightKg>10</a:PesoKg> <!--Obrigatório:--> <a:Largura>10</a:Largura> </tem:unidadeDeestoqueVO> </tem:unidadeDeestoqueInserirAtualizar>  </soapenv:Corpo></soapenv:Envelope>'

## Workaround

Não use o mesmo RefId para SKUs diferentes.



%0A