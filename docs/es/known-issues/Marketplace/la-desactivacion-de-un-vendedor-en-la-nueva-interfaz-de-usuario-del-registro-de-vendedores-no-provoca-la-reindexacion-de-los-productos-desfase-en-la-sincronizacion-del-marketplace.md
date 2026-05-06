---
title: 'La desactivación de un vendedor en la nueva interfaz de usuario del Registro de vendedores no provoca la reindexación de los productos (desfase en la sincronización del Marketplace)'
slug: la-desactivacion-de-un-vendedor-en-la-nueva-interfaz-de-usuario-del-registro-de-vendedores-no-provoca-la-reindexacion-de-los-productos-desfase-en-la-sincronizacion-del-marketplace
status: PUBLISHED
createdAt: 2023-10-06T22:44:56.000Z
updatedAt: 2025-10-08T19:21:56.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: seller-inactivation-in-new-seller-register-ui-does-not-trigger-product-reindexing-marketplace-sync-gap
locale: es
kiStatus: Fixed
internalReference: 915970
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En la nueva experiencia del vendedor (/admin/sellers), la desactivación de un vendedor no provoca la reindexación de productos prevista. El síntoma visible es que los productos del vendedor desactivado siguen apareciendo en los marketplaces conectados y no se eliminan ni se actualizan. Esto afecta a las tiendas que se integran con marketplaces a través de puntos de conexión de afiliados para la política comercial del vendedor, utilizando la nueva interfaz de usuario del Registro de vendedores.

## Simulación

- Requisitos previos: Tienda integrada con un marketplace a través de un punto de conexión de afiliados para la política comercial del vendedor.
- Pasos:
  - Acceda a la nueva interfaz de usuario del Registro de vendedores: /admin/sellers.
  - Desactive un vendedor que esté disponible para la misma política comercial integrada con el mercado.
  - Observe en el mercado que los artículos del vendedor no se actualizan ni se eliminan como se esperaba (no se activa la reindexación).

## Workaround

n/a