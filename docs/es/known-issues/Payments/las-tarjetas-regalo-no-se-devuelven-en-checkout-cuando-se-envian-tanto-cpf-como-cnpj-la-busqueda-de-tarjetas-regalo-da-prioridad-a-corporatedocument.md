---
title: 'Las tarjetas regalo no se devuelven en Checkout cuando se envían tanto CPF como CNPJ (la búsqueda de tarjetas regalo da prioridad a corporateDocument)'
slug: las-tarjetas-regalo-no-se-devuelven-en-checkout-cuando-se-envian-tanto-cpf-como-cnpj-la-busqueda-de-tarjetas-regalo-da-prioridad-a-corporatedocument
status: PUBLISHED
createdAt: 2025-12-04T12:33:22.543Z
updatedAt: 2025-12-04T12:33:22.543Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-cards-not-returned-in-checkout-when-both-cpf-and-cnpj-are-sent-gift-card-search-prioritizes-corporatedocument
locale: es
kiStatus: Backlog
internalReference: 1335218
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando el perfil de un comprador incluye documentos personales (CPF) y corporativos (CNPJ), la búsqueda de tarjetas regalo (/giftcards/_search) da prioridad al documento corporativo (CNPJ) e ignora las tarjetas regalo emitidas para el documento personal (CPF).
El síntoma visible es que las tarjetas regalo válidas asociadas al CPF del comprador no se devuelven a la caja, lo que da lugar a respuestas de "código de regalo no válido" o "ListAllGiftCards" vacías. Esto afecta a los compradores que previamente recibieron tarjetas regalo vinculadas a su CPF y que más tarde proceden a pagar con el CPF y el CNPJ rellenados en su perfil o en la carga útil de la solicitud.

## Simulación



- Requisitos previos:
  - Cuenta con el proveedor de tarjetas regalo VTEX (VtexGiftCard) activa.
  - Perfil de comprador en el que ambos campos estén presentes en el contexto de pago: documento (CPF) y documento corporativo (CNPJ).
  -

Una tarjeta regalo creada/asociada con el CPF del comprador (ownerId = documento/CPF).





Pasos:

1. En Checkout, proceda con el comprador que tiene ambos CPF y CNPJ rellenados (isCorporate puede ser verdadero, pero la ruta de búsqueda sólo recibe documento y corporateDocument).
2. 2. Active el flujo de recuperación de la tarjeta regalo (`ListAllGiftCards` o durante la vinculación del pago). Observe que la respuesta está vacía cuando se envían ambos documentos; si se omite el corporateDocument, se devuelve la tarjeta regalo vinculada al CPF.

## Workaround


Asegúrese de que sólo se envía el documento deseado en el contexto de búsqueda de tarjetas regalo:

- Si la tarjeta regalo se creó para el CPF, evite enviar corporateDocument en la solicitud (o en el contexto de perfil activo del comprador en el momento del pago) para que la búsqueda utilice el documento (CPF).
- Como alternativa, vuelva a emitir/registrar una tarjeta regalo espejo con el mismo saldo pero asociada al CNPJ (corporateDocument) para ese comprador, de modo que la búsqueda que devuelva corporateDocument la encuentre.


