---
title: 'FBE Las imágenes PLP/PDP fallan intermitentemente al cargarse cuando Meta'
slug: fbe-las-imagenes-plppdp-fallan-intermitentemente-al-cargarse-cuando-meta
status: PUBLISHED
createdAt: 2026-03-24T19:36:10.000Z
updatedAt: 2026-09-14T22:38:30.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: fbe-plppdp-images-intermittently-fail-to-load-when-meta
locale: es
kiStatus: Fixed
internalReference: 1382819
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

SOLUCIÓN: Hemos lanzado nuevas versiones de las aplicaciones vtex.facebook-pixel y vtex.facebook-fbe.

Algunas colecciones de PLP y algunas PDP dejan de mostrar las imágenes de los productos de forma intermitente cuando la extensión Meta Facebook Business está activada. El problema es más frecuente en dispositivos móviles y en el dominio de producción; los entornos de QA y myvtex.com no presentan este problema. Desactivar la aplicación FBE restablece la carga de imágenes inmediatamente, y volver a activarla reproduce el fallo, lo que indica una correlación con la extensión en la tienda afectada.

## Simulación

- Activa la extensión Meta Facebook Business en la cuenta.

- Accede a la PLP afectada en el dominio de producción. Observa fallos intermitentes en los que las imágenes de los productos no se cargan.

- Abre una PDP de estas colecciones y comprueba que las imágenes también pueden fallar al cargarse. Este comportamiento se observa con mayor frecuencia en dispositivos móviles.

- Desactiva la extensión FBE y vuelve a cargar las mismas páginas PLP/PDP. Las imágenes vuelven a cargarse con normalidad, lo que confirma la correlación.

## Workaround

¿Existe alguna solución alternativa para este error? Si es así, descríbala aquí. Si no, escriba «N/A» o «No hay solución alternativa disponible». Por favor, no elimine esta sección si no hay solución alternativa.