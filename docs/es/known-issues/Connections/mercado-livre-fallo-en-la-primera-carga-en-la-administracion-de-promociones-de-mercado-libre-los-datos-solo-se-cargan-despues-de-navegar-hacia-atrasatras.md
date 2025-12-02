---
title: 'Mercado Livre Fallo en la primera carga en la administración de promociones de Mercado Libre (los datos sólo se cargan después de navegar hacia atrás/atrás).'
slug: mercado-livre-fallo-en-la-primera-carga-en-la-administracion-de-promociones-de-mercado-libre-los-datos-solo-se-cargan-despues-de-navegar-hacia-atrasatras
status: PUBLISHED
createdAt: 2025-12-02T13:02:34.495Z
updatedAt: 2025-12-02T13:02:34.495Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-firstload-failure-in-mercado-libre-promotions-admin-data-only-loads-after-navigating-awayback
locale: es
kiStatus: Fixed
internalReference: 1327218
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Hemos finalizado los ajustes.


#### Simulación


Después de instalar el módulo Mercado Libre Promociones, la página de administración a veces no carga los datos en el primer intento. El síntoma visible es una pantalla de error inicial; en intentos posteriores (navegando a otro menú de administración y volviendo, o abriendo el módulo en una nueva pestaña), los datos se cargan correctamente. Esto afecta a los usuarios que acceden a Admin > Promociones de Mercado Libre justo después de la instalación o en la primera carga de la página.


- Acceda a Admin > Promociones Mercado Libre por primera vez tras la instalación (nueva pestaña/sesión).
- Observe que la página muestra un error y no carga los datos esperados en este primer intento.
- Navegue a otro menú de Admin y vuelva al módulo Promociones, o abra el módulo en una nueva pestaña del navegador.
- Observe que los datos se cargan correctamente en los siguientes intentos.

## Workaround



- Navegue a otro menú de Administración y luego regrese a Promociones de Mercado Libre; los datos deberían cargarse.
- Alternativamente, abra Mercado Libre Promociones en una nueva pestaña del navegador; los datos deberían cargarse en este segundo intento.



