---
title: 'Si no se introducen los datos en el paso «enviar a otra dirección», el botón «pasar al pago» desaparece'
slug: si-no-se-introducen-los-datos-en-el-paso-enviar-a-otra-direccion-el-boton-pasar-al-pago-desaparece
status: PUBLISHED
createdAt: 2021-11-11T17:44:34.000Z
updatedAt: 2023-10-13T15:29:02.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: failure-to-add-data-in-the-deliver-to-another-address-step-causes-the-go-to-payment-button-to-disappear
locale: es
kiStatus: Backlog
internalReference: 467419
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Durante el proceso de pago, en el paso en el que se rellenan los datos de envío, al hacer clic en la opción «Entregar en otra dirección», si no se añade ninguna dirección y el comprador vuelve a la lista de direcciones (mediante el botón «Volver a la libreta de direcciones»), el botón «Ir al pago» desaparece.

## Simulación

- Durante la fase de pago, al rellenar los datos de envío, si hay una lista de direcciones, haz clic en «Entregar en otra dirección»;
- No añadas ninguna dirección y vuelve a los datos de envío haciendo clic en el botón «Volver a la lista de direcciones»;
- El botón «Ir al pago» desaparece.

## Workaround

provisional**
Para que el botón vuelva a aparecer, basta con hacer clic en una de las direcciones de la libreta de direcciones. Sin embargo, no hay ninguna solución provisional para evitar este comportamiento.