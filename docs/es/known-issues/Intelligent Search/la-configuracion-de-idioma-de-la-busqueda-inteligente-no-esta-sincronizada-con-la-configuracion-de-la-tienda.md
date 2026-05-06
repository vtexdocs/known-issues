---
title: 'La configuración de idioma de la búsqueda inteligente no está sincronizada con la configuración de la tienda'
slug: la-configuracion-de-idioma-de-la-busqueda-inteligente-no-esta-sincronizada-con-la-configuracion-de-la-tienda
status: PUBLISHED
createdAt: 2024-02-27T21:30:23.000Z
updatedAt: 2024-03-06T15:38:05.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-language-settings-not-in-sync-with-store-configurations
locale: es
kiStatus: Backlog
internalReference: 990343
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El idioma principal de la Búsqueda inteligente no se actualiza automáticamente según la política comercial y la configuración de vinculación, lo que provoca una falta de sincronización.

En las tiendas monolingües, los contenidos de la Búsqueda inteligente —como sinónimos, reglas de comercialización, banners de búsqueda y redireccionamientos de búsqueda— se crean sobre la base de las configuraciones regionales registradas en la vinculación. La tienda se muestra basándose también en la política comercial, que puede anular la vinculación y no coincidir con el contenido registrado.

En el caso de las tiendas multilingües, esto también puede afectar a las traducciones proporcionadas en la tienda y en las API.

## Simulación

- Crea una tienda en «pt-BR»;
- Habilite/configure el módulo de Búsqueda inteligente;
- Cambie la política comercial de «pt-BR» a «en-US»;
- Un solo idioma:
  - Mantenga el enlace como «pt-BR»;
  - Cree contenido de Búsqueda inteligente;
  - Acceda a la página de la tienda que debería mostrar el contenido registrado;
  - El contenido/comportamiento no será visible.
- Multilingüe:
  - Registre los productos en inglés;
  - Añada el portugués como segundo idioma o idioma alternativo en las vinculaciones;
  - Registre las traducciones del catálogo al portugués;
  - En este escenario, la navegación entre ambos idiomas puede presentar problemas.

## Workaround

Asegúrese de que las vinculaciones y las políticas comerciales coincidan; de lo contrario, el contenido de búsqueda no será válido.

El contenido registrado anteriormente no seguirá el nuevo idioma principal si este cambia; permanecerá vinculado a su idioma de creación. Es necesario registrar al menos dos configuraciones regionales en la configuración de enlaces (el idioma antiguo/inesperado y el nuevo/esperado) para que aparezca el selector de idioma en el editor de contenido y así poder corregirlos manualmente para utilizar el idioma esperado. Otro método es volver a crear el contenido.

En algunos casos, como las traducciones multilingües y de catálogos, es posible que también tenga que ponerse en contacto con nuestro servicio de asistencia para revisar la configuración interna de idiomas de Intelligent Search.


%0A