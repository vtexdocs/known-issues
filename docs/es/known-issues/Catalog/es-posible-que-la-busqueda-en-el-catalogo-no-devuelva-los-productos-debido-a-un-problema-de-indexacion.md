---
title: 'Es posible que la búsqueda en el catálogo no devuelva los productos debido a un problema de indexación.'
slug: es-posible-que-la-busqueda-en-el-catalogo-no-devuelva-los-productos-debido-a-un-problema-de-indexacion
status: PUBLISHED
createdAt: 2025-11-25T17:01:08.319Z
updatedAt: 2025-11-25T17:01:08.319Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-search-inconsistencies-may-not-return-products-due-to-an-indexing-issue
locale: es
kiStatus: Backlog
internalReference: 1330325
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


De forma intermitente, es posible que los productos no se actualicen correctamente en el CatalogSearch durante el proceso de indexación. Como efecto secundario, el producto no aparecerá en el Catalog Search, afectando a las tiendas Store Framework o al uso de la API. Otro efecto secundario incluye que el CatalogSearch devuelva menos artículos de los solicitados (según los parámetros de paginación). También afecta a los almacenes de Portal (CMS heredados). Para contextualizar, las tiendas Store Framework dependen de esta API para el PDP, y en estos casos, el PDP no se puede cargar, mientras que un PLP que utilice Intelligent Search puede seguir mostrando el artículo.


#### Simulación


Acceda a la PDP de una SKU afectada en la que se devuelva un 404; Revise los registros de indexación en el Catálogo y compruebe la sesión GenerateAndSaveIndexDocuments. Si hay un mensaje "skipping commit", el documento interno no está indexado correctamente.

## Workaround


Edite la información del producto para activar un objetivo de indexación que actualice la información registrada en la base de datos CatalogSearch. A gran escala, realice una reindexación completa en la cuenta.



