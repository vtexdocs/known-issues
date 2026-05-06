---
title: 'No se pueden utilizar caracteres especiales en la búsqueda de CNPJ en MasterData'
slug: no-se-pueden-utilizar-caracteres-especiales-en-la-busqueda-de-cnpj-en-masterdata
status: PUBLISHED
createdAt: 2022-06-21T15:34:44.000Z
updatedAt: 2024-12-12T19:59:29.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: special-characters-cannot-be-used-for-cnpj-search-on-masterdata
locale: es
kiStatus: Backlog
internalReference: 602054
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los tipos de campo CNPJ y CPF se utilizan en diversas partes de VTEX y son campos esenciales que también están presentes en la entidad MasterData CL.

Estos campos deben tener un formato muy específico y, actualmente, sus caracteres especiales (como «.» y «/») no son compatibles con la función de búsqueda presente tanto en la API ( ) como en la interfaz de usuario.

## Simulación

Acceda a los datos maestros de su cuenta en myaccount.vtexcrm.com.br
En la lista de aplicaciones, acceda al formulario de «Clientes»
En los filtros, busque «CNPJ»
Escriba un carácter especial en la búsqueda, como «/»
Aparecerá una ventana con el mensaje «Erro Inesperado»

## Workaround

Realice la búsqueda utilizando el campo «All» o utilizando comillas dobles («00.000.000/0000-00») para que el sistema interprete la cadena, o utilice campos alternativos para la búsqueda, o utilice únicamente caracteres alfanuméricos al buscar con cpf y cnpf.