---
title: 'Los caracteres especiales no pueden utilizarse para la búsqueda de CNPJ en MasterData'
id: 4sgob00QXkGYPC3TjSpQeN
status: PUBLISHED
createdAt: 2022-06-21T15:35:26.675Z
updatedAt: 2023-08-07T13:52:30.392Z
publishedAt: 2023-08-07T13:52:30.392Z
firstPublishedAt: 2022-06-21T15:35:27.341Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: special-characters-cannot-be-used-for-cnpj-search-on-masterdata
locale: es
kiStatus: Backlog
internalReference: 602054
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los tipos de campo CNPJ y CPF se utilizan entre varias partes de VTEX y son campos esenciales presentes también en la entidad MasterData CL.

Estos campos deben tener un formato muy específico y sus caracteres especiales (como "." y "/") no son actualmente compatibles con la búsqueda presente tanto en la API ( ) como en la UI.





## Simulación



1. Vaya a los datos maestros de su cuenta myaccount.vtexcrm.com.br
2. En el listado de aplicaciones accede a tu formulario de "Cleintes"
3. En los filtros, busque "CNPJ"
4. Escribe un carácter especial en tu búsqueda, como por ejemplo "/"
5. Aparecerá una ventana de "Erro Inesperado".




## Workaround


Utilizar campos alternativos para la búsqueda o sólo caracteres aplanuméricos al buscar con cpf y cnpf

