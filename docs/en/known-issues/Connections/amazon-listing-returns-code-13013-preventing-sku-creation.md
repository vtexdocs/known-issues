---
title: Amazon Listing Returns Code #13013 preventing SKU creation
slug: amazon-listing-returns-code-13013-preventing-sku-creation
status: PUBLISHED
createdAt: 2025-10-17T12:08:29.332Z
updatedAt: 2025-10-17T12:08:29.332Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-returns-code-13013-preventing-sku-creation
locale: en
kiStatus: Backlog
internalReference: 1309398
---

## Summary


Some merchants are facing Amazon error Code #13013 when attempting to list products via the VTEX Amazon connector. The visible symptom is that affected SKUs fail to be created/associated in Amazon, and listings remain in error in Bridge/Listing. Reports span multiple accounts and SKUs.


#### Simulation


VTEX account connected to Amazon marketplace and attempting to list products via Amazon Listing/Bridge.

- Steps:
  - Send product listing for one of the affected SKUs to Amazon through the VTEX Amazon connector.
  - Observe return in Bridge/Listing: Amazon rejects with Code #13013 message indicating the SKU cannot be added because the product is not in the catalog or was removed, instructing to resend with original UPC/GTIN instead of a suggested ASIN and to check Seller Central progress or issues.


    [Code #13013] Seu SKU não pode ser adicionado porque o produto não está no catálogo ou foi excluído. Verifique os dados do produto, corrija os erros e reenvie com o UPC/GTIN original em vez de um ASIN sugerido. Se você estiver publicando um produto em outro site da Amazon, talvez sejam necessárias algumas horas para que o anúncio esteja disponível. Verifique se há progresso ou problemas em sua conta de vendedor.
#### Workaround


Is there a workaround for this bug? If yes, describe it here. If not, write "N/A" or "There is no workaround available.". Do not remove this section if there is no workaround, please.



