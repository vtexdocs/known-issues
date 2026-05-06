---
title: 'Autor de la versión: «Nota: No se encuentra en el ID de VTEX» en el perfil'
slug: autor-de-la-version-nota-no-se-encuentra-en-el-id-de-vtex-en-el-perfil
status: PUBLISHED
createdAt: 2023-10-04T21:45:38.000Z
updatedAt: 2023-10-04T22:14:33.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: version-author-note-not-found-on-vtex-id-on-the-profile
locale: es
kiStatus: Scheduled
internalReference: 914314
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el cliente realiza una compra, al autor de la versión se le asigna un identificador de usuario (GUID) o un servicio, seguido del nombre de usuario/nombre/descripción «`Nota: No encontrado en el ID de VTEX.`» en el perfil.
Este comportamiento no afecta al perfil ni a la experiencia del comprador, ya que solo se trata de un aspecto de la interfaz de usuario, y es posible consultar la información a través de la API de versiones.

## Simulación

- Acceda a Master Data CRM (por ejemplo, https://my-account-here.vtexcrm.com.br);
- Acceda a la pestaña Entidad de datos de CL (Clientes):
- Seleccione un documento y haga clic en el icono del ojo para ver los datos;
- Haga clic en el botón «_Registro de cambios_»;
- Abra una versión reciente;
- Compruebe el «_Autor de la versión_», será un ID de usuario, y el nombre «`Nota: No encontrado en el ID de VTEX.`», por ejemplo:
 ![](https://vtexhelp.zendesk.com/attachments/token/9ngSibhlO4er0Df3Fi7oQAhot/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/8tlsDbxNSFFHdJMVHf2yvctem/?name=image.png)

- Comprobación mediante la API Get version:
 ![](https://vtexhelp.zendesk.com/attachments/token/MRrTRox5E0t91F3OpsDcRmJ9z/?name=image.png)

    "updatedBy_USER": "{\"Id\":\"d6d8269f-e7cc-4e4b-8b89-3b46a1407937\",\"Login\":\"vtex-service::checkout::stable\",\"Name\":null}",

## Workaround

Puede comprobar el autor utilizando nuestras API:

- Listar versiones
- Obtener versión