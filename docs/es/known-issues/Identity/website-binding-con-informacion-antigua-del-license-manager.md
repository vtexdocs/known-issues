---
title: 'Website Binding con información antigua del License Manager'
id: 1F8B0AD7IEGgmqWswAAkYe
status: PUBLISHED
createdAt: 2017-04-10T13:26:43.145Z
updatedAt: 2022-12-22T20:46:11.599Z
publishedAt: 2022-12-22T20:46:11.599Z
firstPublishedAt: 2017-04-10T13:43:26.648Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: License Manager
slugEN: website-binding-with-old-license-manager-details
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

La herramienta __Website Binding__ es responsable de hacer el puente entre el CMS (Portal) y las informaciones definidas en el License Manager de un __nombre de la tienda__ específico. 

Si, en algún momento, el propietario de la tienda cambia la información de una __nombre de la tienda__ con nueva información, el Portal adicionará esa información al Website Binding existente, en lugar de sobrescribir.

Posibles problemas con ese bug involucran XML, que al generarse usa el primer dominio encontrado en Binding. 

El ejemplo de la tienda __Delacasa__ ilustra el bug:

Antes de llamarse __delacasa__ habían creado el dominio __decoramovel__, el Portal creó el Binding y posteriormente adicionó las nuevas informaciones del nuevo dominio en el mismo Binding.

Las nuevas informaciones insertadas en el LM:
![license-manager-delacasa](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Identity/website-binding-con-informacion-antigua-del-license-manager_1.JPG) 

El diccionario del Website (mundinho) [mundito] como quedó, dejando el comportamiento en evidencia:
![dicionario-delacasa](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Identity/website-binding-con-informacion-antigua-del-license-manager_2.JPG) 

La parte de Webiste Binding que muestra el resultado:
![binding-delacasa](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Identity/website-binding-con-informacion-antigua-del-license-manager_3.JPG)

## Simulación

Crear un __nombre de la tienda__ en el License Manager y más tarde editar la información de ese mismo storename en el License Manager.

## Workaround

El License Manager está guardando la información en la Base de Datos de modo correcto, o sea, sobrescribe la información. El Portal que saca esa información está actualizando en forma equivocada.

El mejor camino sería crear un nuevo Website Binding para ese mismo Website (mundinho).

El nuevo Binding cargará las informaciones nuevas.

Luego de crear el nuevo, hacer el cambio y luego, de ser necesario, excluir el antiguo.

Es importante mantener este orden, para evitar que el sitio salga del aire.
![2017-04-10 10 40 41-Index](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Identity/website-binding-con-informacion-antigua-del-license-manager_4.png)

