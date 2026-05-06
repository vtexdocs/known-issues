---
title: 'La importación/exportación de hojas de cálculo de MasterData devuelve un error de tiempo de espera'
slug: la-importacionexportacion-de-hojas-de-calculo-de-masterdata-devuelve-un-error-de-tiempo-de-espera
status: PUBLISHED
createdAt: 2021-07-22T21:16:43.000Z
updatedAt: 2025-12-01T22:05:09.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: masterdata-worksheet-importexport-returning-timeout
locale: es
kiStatus: Backlog
internalReference: 400265
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al exportar o importar una entidad, puede producirse un tiempo de espera agotado en los siguientes casos:

- Entidad con muchos campos;
- Un campo concreto con demasiada información;
- Muchos documentos en la entidad.
Estas situaciones pueden dar lugar a un archivo de gran tamaño, lo que supone una carga para el usuario que exporta o importa los documentos al archivo o a la base de datos, lo que provoca una respuesta de tiempo de espera agotado con una solicitud abortada.

## Simulación

Para el caso de **exportación**:

- Acceda a Master Data CRM (por ejemplo, https://my-account-here.vtexcrm.com.br);
- Acceda a una aplicación de formulario con campos que contengan una gran cantidad de datos por campo (por ejemplo, imágenes, vídeos...);
- Haga clic en el botón «**Exportar XLS**»:
 ![](https://vtexhelp.zendesk.com/attachments/token/p7ycuur8ck3Qtw2zmSUBNDmxE/?name=image.png)

- En la ventana emergente «**Exportación de datos**», haz clic en «**Seleccionar todos los campos**» para marcarla:
 ![](https://vtexhelp.zendesk.com/attachments/token/IIc8z6df21Cl6djTt5Toz4udk/?name=image.png)

- Vuelve a la página de Aplicaciones;
- Haz clic en el botón «**Exportaciones**»:
 ![](https://vtexhelp.zendesk.com/attachments/token/NsI7JG4oWcuHAhDewa7PoEx1M/?name=image.png)

- Puede seguir el estado de la solicitud en «**Estado de la exportación**» (por ejemplo: https://my-account-here.vtexcrm.com.br/ExportStatus/Index);
- No se enviará ningún correo electrónico al usuario.

En el caso de la **importación**:

- Acceda a Master Data CRM (por ejemplo, https://my-account-here.vtexcrm.com.br);
- Haga clic en el botón «**Importar**»:
 ![](https://vtexhelp.zendesk.com/attachments/token/3HUzAWSplEKGFAap3yU0jjmdf/?name=image.png)

- Seleccione la entidad de datos y el archivo .xls:
 ![](https://vtexhelp.zendesk.com/attachments/token/KFolvCXhUiqAhZV23iKDhTws0/?name=image.png)

- Haga clic en el botón «**Importar**»;
- Se iniciará la importación, se procesará y, a continuación, se le redirigirá a `Import/ExecuteImport` (por ejemplo, https://my-account-here.vtexcrm.com.br/Import/ExecuteImport), y se mostrará el siguiente error:

 Esta página no funciona. my-account-here.vtexcrm.com.br tardó demasiado en responder.ERROR HTTP 504 ![](https://vtexhelp.zendesk.com/attachments/token/3brNPf70M3FBLGPiVwWsSHx94/?name=image.png)

## Workaround

Existen algunas formas sencillas de aplicar soluciones alternativas en este caso.

**Exportación:**
**Opción 1:** Filtra solo los documentos que necesites, si no necesitas toda la entidad:
 ![](https://vtexhelp.zendesk.com/attachments/token/CojS7MzbOiDkaQ9HgdbrxlzHD/?name=image.png)

**Opción 2:** Selecciona solo los campos que realmente necesites, si no necesitas toda la entidad:
 ![](https://vtexhelp.zendesk.com/attachments/token/pTOU7TEWidoOrtstbDALphW6k/?name=image.png)

**Opción 3:** Es posible exportar a través de la API. Puede seguir esta documentación: Extracción de datos de Master Data con búsqueda y desplazamiento.

**Importación:** Divida la hoja de cálculo que desea importar. Por ejemplo, si tiene una hoja de cálculo con 60 000 documentos, divídala en 6 hojas de cálculo de 10 000 documentos cada una e intente importarla de nuevo.
Recuerde que no disponemos de una cifra exacta. Dividir el archivo en bloques de hasta 10 000 documentos era un ejemplo sugerido. Dependerá del número de campos/columnas, el tamaño de cada dato en el campo/columna, el tamaño del archivo, el trabajador, etc. Hay algunos factores que pueden afectar a la importación prevista.



%0A