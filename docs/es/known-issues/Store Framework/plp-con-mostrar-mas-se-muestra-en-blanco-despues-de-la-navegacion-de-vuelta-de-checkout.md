---
title: PLP con "Mostrar más" se muestra en blanco después de la navegación de vuelta de Checkout
slug: plp-con-mostrar-mas-se-muestra-en-blanco-despues-de-la-navegacion-de-vuelta-de-checkout
status: PUBLISHED
createdAt: 2025-10-02T19:50:56.361Z
updatedAt: 2025-10-02T19:50:56.361Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: plp-with-show-more-renders-blank-after-browser-back-navigation-from-checkout
locale: es
kiStatus: -
internalReference: 1301762
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando los usuarios cargan la segunda o más páginas de un PLP a través del botón "Mostrar más", navegan a un PDP, proceden al pago y, a continuación, pulsan dos veces el botón de retroceso del navegador para volver al PLP, éste se queda completamente en blanco. El síntoma visible es un PLP blanco/vacío sin mosaicos de productos ni contenido. Esto afecta a los escaparates de Store Framework que utilizan la carga infinita/paginada de PLP a través de "Mostrar más", concretamente después de un flujo PDP → Pago seguido de una navegación de retroceso del navegador. El comportamiento se ha reproducido en varias cuentas durante la validación.

## Simulación


Requisitos previos: escaparate de Store Framework con PLP utilizando "Mostrar más" para cargar resultados adicionales.

Pasos:

1. Abra el PLP y desplácese hasta el final de la página.
2. Pulse el botón "Mostrar más" para cargar la segunda página de resultados.
3. Haga clic en un producto de los resultados recién cargados (segunda página) para ir al PDP.
4.

4. Añada el producto a la cesta y pase por caja.



Utilice el botón Atrás del navegador para volver al PDP y, a continuación, pulse Atrás de nuevo para volver al PLP. El PLP aparece completamente en blanco

## Workaround


N/A


