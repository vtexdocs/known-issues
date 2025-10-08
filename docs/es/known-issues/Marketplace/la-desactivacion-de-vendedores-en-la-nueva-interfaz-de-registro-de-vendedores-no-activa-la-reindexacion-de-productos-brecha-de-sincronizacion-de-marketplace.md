---
title: La desactivación de vendedores en la nueva interfaz de registro de vendedores no activa la reindexación de productos (brecha de sincronización de Marketplace).
slug: la-desactivacion-de-vendedores-en-la-nueva-interfaz-de-registro-de-vendedores-no-activa-la-reindexacion-de-productos-brecha-de-sincronizacion-de-marketplace
status: PUBLISHED
createdAt: 2025-10-08T16:22:29.073Z
updatedAt: 2025-10-08T16:22:29.073Z
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


En la nueva experiencia de vendedor (/admin/sellers), la desactivación de un vendedor no provoca la reindexación de productos esperada. El síntoma visible es que los productos del vendedor desactivado siguen apareciendo/estando disponibles en los mercados conectados y no se eliminan ni se actualizan. Esto afecta a las tiendas que se integran con los mercados a través de puntos finales de afiliación para la política comercial del vendedor, utilizando la nueva interfaz de usuario de registro de vendedores.

## Simulación



- Requisitos previos: tienda integrada con un mercado a través de un punto final de afiliación para la política comercial del vendedor.
- Pasos:
  - Acceda a la nueva interfaz de usuario de registro de vendedores: /admin/sellers.
  - Desactive un vendedor que esté disponible para la misma política comercial integrada con el mercado.
  - Observe en el mercado que los artículos del vendedor no se actualizan/eliminan como se esperaba (no se activa ningún reindexado).

## Workaround


n/a


