---
title: 'El componente de envío se encuentra bloqueado en el estado «A la espera de más información»'
slug: el-componente-de-envio-se-encuentra-bloqueado-en-el-estado-a-la-espera-de-mas-informacion
status: PUBLISHED
createdAt: 2023-03-29T19:25:51.000Z
updatedAt: 2023-03-29T20:51:25.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-component-locked-in-waiting-for-more-information-state
locale: es
kiStatus: Backlog
internalReference: 780673
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La interfaz de pago no muestra el componente de envío cuando se accede a la página de pago directamente a través de un paso específico de la URL (excepto /cart y /shipping); los datos de envío («shippingData») están incompletos y se produce un aumento de la latencia en las solicitudes de la API de orderForm. Aparecerá el mensaje «Esperando más información» y no se podrá continuar con la compra.

## Simulación

- Añade un producto al carrito;
- Rellena el perfil y deja la información de envío en blanco;
- Dado que el problema se produce debido al aumento de la latencia, considera utilizar una extensión como URL Throttler para añadir un retraso en las solicitudes de la API orderForm;
- Ve a una nueva pestaña y accede al proceso de pago directamente en un paso específico a través de la URL, por ejemplo, utilizando «_www.store.com_/checkout/#/payment»;
- Verás el mensaje «Esperando más información» en el componente de envío.

## Workaround

Actualiza la página o accede al proceso de pago utilizando específicamente el paso de envío (_www.store.com_/checkout/#/shipping).