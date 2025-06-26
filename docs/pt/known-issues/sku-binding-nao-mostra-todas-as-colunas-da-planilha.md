---
title: [Sku binding] Não mostra todas as colunas da planilha
slug: sku-binding-nao-mostra-todas-as-colunas-da-planilha
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-binding-doesnt-show-all-columns-in-the-spreadsheet
locale: pt
kiStatus: Backlog
internalReference: 1163100
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Há dois cenários aqui

1. Na antiga IU de vinculação de sku, a planilha de exportação retornava 7 colunas; hoje, a nova IU, quando exportamos a planilha, retorna 4 colunas.
2. O nome do arquivo foi alterado para (nome da conta + nome de usuário) e, anteriormente, na IU antiga, ele era exportado com a data "SkuSeller_2025-01-14_15-1-16"
## Simulação




1. Na antiga interface de usuário de vinculação de sku, a planilha de exportação retornava 7 colunas; hoje, na nova interface de usuário, quando exportamos a planilha, retornamos 4 colunas.

 ![](https://vtexhelp.zendesk.com/attachments/token/OCsHYfXDqaz6W76qYhp7C1DDW/?name=image.png)

**NOVAS COLUNAS**
StockKeepingUnitId
SellerId
SellerStockKeepingUnitId
Está Ativo

 ![](https://vtexhelp.zendesk.com/attachments/token/gKb7BUfDenjXsGTQ0sE9F1DXr/?name=image.png)

**COLUNAS ANTIGAS**
SkuSellerId
SellerId
StockKeepingUnitId
SellerStockKeepingUnitId
IsActive
UpdateDate (data de atualização)
RequestedUpdateDate (data de atualização solicitada)

**2.** O nome do arquivo foi alterado para (accountname + nome de usuário) e, anteriormente, na interface de usuário antiga, ele era exportado com a data "SkuSeller_2025-01-14_15-1-16"

**NOME DO ARQUIVO ANTES | ANTIGO**

 ![](https://vtexhelp.zendesk.com/attachments/token/HjApMXd3SVgQ7Pb8XEN3Mgv20/?name=image.png)

**NOME DO ARQUIVO APÓS | NOVO **

 ![](https://vtexhelp.zendesk.com/attachments/token/R2WZAjWdduzMXo7mFAT8LFmN6/?name=image.png
## Workaround


Usar a IU antiga



