---
title: 'StockKeepingUnitInsertUpdate WebService method allows to insert existent RefId'
slug: stockkeepingunitinsertupdate-webservice-method-allows-to-insert-existent-refid
status: PUBLISHED
createdAt: 2026-01-26T13:57:27.139Z
updatedAt: 2026-01-26T13:57:27.139Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: stockkeepingunitinsertupdate-webservice-method-allows-to-insert-existent-refid
locale: en
kiStatus: Fixed
internalReference: 419460
---

## Summary



Today we are not able to insert/update a RefId already registered for another SKU using API REST, spreadsheet upload, or Catalog Admin, but using WebService we can insert an existent RefId.


#### Simulation



- Try to insert an existent RefId to another SKU using the following method:

    curl --location --request POST 'http://webservice-merch.vtexcommerce.com.br/Service.svc?wsdl' \--header 'Content-Type: text/xml' \--header 'SOAPAction: http://tempuri.org/IService/StockKeepingUnitInsertUpdate' \--header 'Authorization: Basic ' \--header 'Cookie: ISSMB=ScreenMedia=0&UserAcceptMobile=False' \--data-raw '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:a="http://schemas.datacontract.org/2004/07/Vtex.Commerce.WebApps.AdminWcfService.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">  <soapenv:Header/>  <soapenv:Body>      <tem:StockKeepingUnitInsertUpdate>        <tem:stockKeepingUnitVO>            <!--Required:-->            <a:CommercialConditionId>1</a:CommercialConditionId>            <!--Required:-->            <a:CostPrice>1.00</a:CostPrice>            <!--Required:-->            <a:CubicWeight>10</a:CubicWeight>            <!--Required:-->            <a:DateUpdated>2014-12-18T00:00:00</a:DateUpdated>            <!--Required:-->            <a:EstimatedDateArrival>2014-12-18T00:00:00</a:EstimatedDateArrival>            <!--Required:-->            <a:Height>10</a:Height>            <!--Required:-->            <a:Id>4</a:Id>            <!--Optional:-->            <a:InternalNote></a:InternalNote>            <!--Required:-->            <a:IsActive>true</a:IsActive>            <!--Required:-->            <a:IsAvaiable>true</a:IsAvaiable>            <!--Required:-->            <a:IsKit>true</a:IsKit>            <!--Required:-->            <a:Length>10</a:Length>            <!--Required:-->            <a:ListPrice>4.00</a:ListPrice>            <!--Required:-->            <a:ManufacturerCode>1</a:ManufacturerCode>            <!--Required:-->            <a:MeasurementUnit>1</a:MeasurementUnit>            <!--Required:-->            <a:ModalId>1</a:ModalId>            <!--Optional:-->            <a:ModalType></a:ModalType>            <!--Required:-->            <a:Name>SKU KIT 1</a:Name>            <!--Required:-->            <a:Price>1.00</a:Price>            <!--Required:-->            <a:ProductId>10003</a:ProductId>            <!--Required:-->            <a:ProductName>Produto KIT</a:ProductName>            <!--Required:-->            <a:RealHeight>10</a:RealHeight>            <!--Required:-->            <a:RealLength>10</a:RealLength>            <!--Required:-->            <a:RealWeightKg>10</a:RealWeightKg>            <!--Required:-->            <a:RealWidth>10</a:RealWidth>            <!--Required:-->            <a:RefId>999999</a:RefId>            <!--Required:-->            <a:RewardValue>0</a:RewardValue>            <!--Required:-->            <a:StockKeepingUnitEans>              <!--Zero or more repetitions:-->              <a:StockKeepingUnitEanDTO>                  <!--Required:-->                  <a:Ean>1234567891014</a:Ean>              </a:StockKeepingUnitEanDTO>            </a:StockKeepingUnitEans>            <!--Required:-->            <a:UnitMultiplier>1</a:UnitMultiplier>            <!--Required:-->            <a:VenderSeparadamente>false</a:VenderSeparadamente>            <!--Required:-->            <a:WeightKg>10</a:WeightKg>            <!--Required:-->            <a:Width>10</a:Width>        </tem:stockKeepingUnitVO>      </tem:StockKeepingUnitInsertUpdate>  </soapenv:Body></soapenv:Envelope>'


#### Workaround


Do not use the same RefId for different SKUs.



