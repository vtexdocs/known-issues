---
title: 'El documento del titular de la tarjeta no se envía al sistema antifraude.'
slug: el-documento-del-titular-de-la-tarjeta-no-se-envia-al-sistema-antifraude
status: PUBLISHED
createdAt: 2023-05-22T18:24:32.000Z
updatedAt: 2023-05-22T18:24:32.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: cardholderdocument-is-not-sent-to-antifraud
locale: es
kiStatus: Backlog
internalReference: 829864
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al crear la carga útil que se enviará para el análisis antifraude, no estamos instanciando el «cardholderDocument» según los datos del documento, Enviar datos antifraude, aunque la configuración en el manifiesto se realice según nuestra documentación, el comprador estará obligado a introducirlo en la caja si así se ha configurado en la afiliación de antifraude, pero en ningún caso se enviará la información sobre el documento del titular de la tarjeta al proveedor de antifraude en el análisis de riesgo.

## Simulación

1. Configure el menú desplegable «Campo del documento del titular de la tarjeta» como obligatorio u opcional;
2. Registre una regla con el antifraude configurado;
3. Realice una compra rellenando la información del CPF en la interfaz de usuario de la tarjeta al finalizar la compra;
4. Compruebe que, en el cuerpo de «Enviar datos antifraude», no se envía el cardholderDocument.

## Workaround

No hay ninguna solución alternativa disponible