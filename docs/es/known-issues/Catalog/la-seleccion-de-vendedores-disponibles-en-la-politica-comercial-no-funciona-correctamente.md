---
title: 'La selección de vendedores disponibles en la política comercial no funciona correctamente.'
slug: la-seleccion-de-vendedores-disponibles-en-la-politica-comercial-no-funciona-correctamente
status: PUBLISHED
createdAt: 2022-02-01T23:55:11.000Z
updatedAt: 2026-09-22T21:42:12.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: selection-of-sellers-available-in-the-commercial-policy-is-not-working-properly
locale: es
kiStatus: Fixed
internalReference: 515480
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El cambio en la disponibilidad de un vendedor en una política comercial no se está reflejando correctamente en el catálogo. Esto puede generar dos escenarios: un producto de un vendedor no seleccionado queda disponible o un producto de un vendedor seleccionado deja de estar disponible.

## Simulación

Escenario 1
- Eliminar un vendedor de una política comercial a través de la interfaz de usuario `/admin/Site/StoreForm.aspx?Id={{SC}}`
- Verificar mediante la ruta `http://portal.vtexcommercestable.com.br/api/seller-register/pvt/sellers/?an=` si la política comercial se eliminó del campo _availableSalesChannel_

Escenario 2
- Agregar un vendedor a una política comercial a través de la interfaz de usuario
- Verificar mediante la ruta `http://portal.vtexcommercestable.com.br/api/seller-register/pvt/sellers/?an=` si la política comercial está disponible en el campo _availableSalesChannel_

## Workaround

Guardar nuevamente la configuración de la política comercial desde la interfaz de usuario