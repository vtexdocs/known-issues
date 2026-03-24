---
title: 'FBE Las imágenes PLP/PDP a veces no se cargan cuando está activada la extensión Meta Facebook Business (FBE)'
slug: fbe-las-imagenes-plppdp-a-veces-no-se-cargan-cuando-esta-activada-la-extension-meta-facebook-business-fbe
status: PUBLISHED
createdAt: 2026-03-24T16:37:07.656Z
updatedAt: 2026-03-24T16:37:07.656Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: fbe-plppdp-images-intermittently-fail-to-load-when-meta-facebook-business-extension-fbe-is-enabled
locale: es
kiStatus: Backlog
internalReference: 1382819
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunas colecciones de PLP y algunas páginas de producto (PDP) dejan de mostrar las imágenes de los productos de forma intermitente cuando la extensión Meta Facebook Business está activada. El problema es más frecuente en dispositivos móviles y en el dominio de producción; los entornos de control de calidad y myvtex.com no presentan este problema. Al desactivar la aplicación FBE, las imágenes vuelven a cargarse inmediatamente, y al volver a activarla se reproduce el fallo, lo que indica una correlación con la extensión en la tienda afectada

## Simulación

- Habilita la extensión Meta Facebook Business en la cuenta.
- Accede a la PLP afectada en el dominio de producción. Observa fallos intermitentes en los que las imágenes de los productos no se cargan.
- Abre una PDP de estas colecciones y comprueba que las imágenes también pueden no cargarse. Este comportamiento se observa con mayor frecuencia en dispositivos móviles.
- Desactive la extensión FBE y vuelva a cargar las mismas páginas PLP/PDP. Las imágenes comienzan a cargarse de nuevo con normalidad, lo que confirma la correlación.

## Workaround

¿Existe alguna solución alternativa para este error? En caso afirmativo, descríbala aquí. Si no es así, escriba «N/A» o «No hay ninguna solución alternativa disponible». No elimine esta sección si no hay ninguna solución alternativa, por favor.