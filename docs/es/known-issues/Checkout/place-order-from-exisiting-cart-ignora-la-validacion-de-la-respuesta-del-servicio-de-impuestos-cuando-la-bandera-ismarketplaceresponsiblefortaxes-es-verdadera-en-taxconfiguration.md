---
title: 'Place Order from Exisiting Cart ignora la validación de la respuesta del servicio de impuestos cuando la bandera isMarketplaceResponsibleForTaxes es verdadera en taxConfiguration'
slug: place-order-from-exisiting-cart-ignora-la-validacion-de-la-respuesta-del-servicio-de-impuestos-cuando-la-bandera-ismarketplaceresponsiblefortaxes-es-verdadera-en-taxconfiguration
status: PUBLISHED
createdAt: 2025-12-02T18:55:19.114Z
updatedAt: 2025-12-02T18:55:19.114Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: place-order-from-exisiting-cart-ignores-tax-service-response-validation-when-ismarketplaceresponsiblefortaxes-flag-is-true-on-taxconfiguration
locale: es
kiStatus: Backlog
internalReference: 1334135
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Si `isMarketplaceResponsibleForTaxes` se establece como `true` en `taxConfiguration` en la configuración de orderForm, Place Order from Existing Cart ignorará la validación de la respuesta del servicio de impuestos. Esto significa que, si la respuesta del servicio de impuestos es un valor diferente del valor de impuestos presente en el orderForm, no se producirá ningún error y el pedido se realizará utilizando el valor de impuestos del orderForm.

## Simulación




1. Cree un servicio fiscal de acuerdo con nuestra documentación oficial. Puede ser a través de un Mocker o de una app vinculada al servicio de impuestos

2. Configure los objetos `taxConfiguration` de la configuración de orderForm como se indica a continuación utilizando el endpoint Update OrderForm Configuration:

`"taxConfiguration": {
        "url": {YOUR_TAX_SERVICE_URL},
        "authorizationHeader": {SU_CÓDIGO_DE_AUTORIZACIÓN},
        "allowExecutionAfterErrors": false,
        "integratedAuthentication": false,
        "appId": "tax-protocol-example",
        "isMarketplaceResponsibleForTaxes": true
    }`

3. Crear un nuevo carrito y seguir con el flujo de pago a través de la API. Mantener la respuesta del servicio de impuestos para el valor del impuesto aplicado al carrito en un valor fijo (ej.: 500) hasta inmediatamente antes de la petición de Realizar Pedido.

4. 4. Antes de realizar el pedido, cambie la respuesta del servicio de impuestos a otro valor (ej.: 900).

5. 5. Ejecute la orden de compra utilizando el depurador de Checkout. Con el depurador, se podrá ver que el Servicio de Impuestos devolverá el valor actualizado (900), distinto del pero el pedido se creará correctamente con el valor de impuestos anterior contenido en el orderForm (500).

## Workaround



Dado que este escenario sólo ocurre cuando el Marketplace es responsable de los impuestos, el comerciante responsable del Marketplace puede cambiar el valor del pedido para aplicar el valor correcto de los impuestos después de su creación.



%0A