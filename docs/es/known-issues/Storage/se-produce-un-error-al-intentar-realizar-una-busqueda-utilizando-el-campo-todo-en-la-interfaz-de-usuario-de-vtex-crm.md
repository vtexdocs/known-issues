---
title: 'Se produce un error al intentar realizar una búsqueda utilizando el campo «Todo» en la interfaz de usuario de VTEX CRM'
slug: se-produce-un-error-al-intentar-realizar-una-busqueda-utilizando-el-campo-todo-en-la-interfaz-de-usuario-de-vtex-crm
status: PUBLISHED
createdAt: 2023-10-25T18:46:33.000Z
updatedAt: 2024-11-13T11:59:49.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-occurs-when-attempting-to-perform-a-search-using-the-all-field-in-vtex-crm-ui
locale: es
kiStatus: Backlog
internalReference: 925679
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El filtro «Todos» de la interfaz de usuario del CRM devuelve un error cuando se utiliza en entidades con muchos documentos. Esto ocurre porque el filtro «Todos» realiza una búsqueda con comodines en todos los campos en los que se puede buscar, lo que puede provocar un error debido al gran volumen de datos que se consulta.

 ![](https://vtexhelp.zendesk.com/attachments/token/Lg1SGLizHjIXrJNiBSaBpJXqk/?name=Captura+de+Tela+2024-11-12+a%CC%80s+18.40.15.png)

## Simulación

- Acceda a la interfaz de usuario del CRM `https://.vtexcrm.com.br/` y navegue hasta una vista que represente una entidad con muchos registros.
- Inicie una búsqueda utilizando el campo «Todos». ![](https://vtexhelp.zendesk.com/attachments/token/H2fobh96F4aBJ8gYJweT5YaP8/?name=Captura+de+Tela+2023-10-25+a%CC%80s+15.42.35.png)
- Busque cualquier término en el campo de búsqueda.
- Tenga en cuenta que el sistema intenta realizar una búsqueda con comodines en todos los campos de búsqueda, lo que puede provocar un error debido al gran volumen de datos.
«**Se ha producido un error inesperado. Inténtelo de nuevo. Si el problema persiste, póngase en contacto con el servicio de asistencia.»**![](https://vtexhelp.zendesk.com/attachments/token/wq7uWjOgY9S2I1M8CgyReJANR/?name=Captura+de+Tela+2023-10-25+a%CC%80s+15.40.50.png)

## Workaround

Utilice filtros para campos específicos.