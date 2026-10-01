---
title: 'La exportación de auditoría CSV falla para conjuntos de resultados grandes, aunque la interfaz de usuario informa que se realizó correctamente.'
slug: la-exportacion-de-auditoria-csv-falla-para-conjuntos-de-resultados-grandes-aunque-la-interfaz-de-usuario-informa-que-se-realizo-correctamente
status: PUBLISHED
createdAt: 2026-10-01T17:27:38.000Z
updatedAt: 2026-10-01T17:27:38.000Z
contentType: knownIssue
productTeam: VTEX Shield
author: 2mXZkbi0oi061KicTExNjo
tag: VTEX Shield
slugEN: audit-csv-export-fails-for-large-result-sets-while-the-ui-reports-success
locale: es
kiStatus: Backlog
internalReference: 1468936
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las exportaciones CSV de auditoría pueden fallar con conjuntos de resultados grandes (rangos de fechas extensos o muchos eventos), aunque la búsqueda muestre los resultados correctamente en la interfaz de usuario. En algunos casos, la interfaz muestra un mensaje de éxito, pero el correo electrónico nunca llega; en otros, muestra el mensaje "No se pudo completar la exportación. Inténtelo de nuevo". No existe un límite seguro fijo, ya que el fallo depende del tamaño total de los eventos devueltos, no solo del número de eventos o días.

## Simulación

1. Vaya a **Administración > Configuración de la cuenta > Auditoría** (`/admin/audit`).

2. Filtre por una aplicación con muchos eventos (por ejemplo, Editor del sitio, Promociones o Catálogo) o por una acción con muchos registros (por ejemplo, `Inicio de sesión de usuario`), sin otros filtros.

3. Seleccione un rango de fechas extenso (por ejemplo, 30 días o más) que devuelva miles de eventos.

4. Compruebe que los resultados se muestran correctamente en la interfaz de usuario. 5. Abre las herramientas para desarrolladores del navegador (F12 o Cmd+Opción+I), ve a la pestaña **Red** y escribe «graphql» en el filtro.

6. Haz clic en **Exportar a CSV**.

7. Observa lo que muestra la interfaz: el mensaje de éxito (pero el correo electrónico con el archivo nunca llega, ni siquiera a la carpeta de spam) o el error «No se pudo completar la exportación. Inténtalo de nuevo».

**Comprobación del estado de la exportación mediante Postman**

1. En la pestaña **Red**, busque la solicitud POST a `https://{accountName}.myvtex.com/_v/private/graphql/v1?...` cuyo payload contenga la consulta `exportLogStatus`. Para encontrarla, haga clic en cada solicitud `graphql` y abra la pestaña **Payload**, o escriba `exportLogStatus` en la búsqueda de Red (`Cmd/Ctrl+F`).

2. Haga clic con el botón derecho en la solicitud y seleccione **Copiar > Copiar como cURL (bash)**.

3. En Postman, haga clic en **Importar**, pegue el comando cURL como texto sin formato y confirme. Esto crea una solicitud con la URL, los parámetros de consulta, los encabezados (incluida la cookie de autenticación) y el cuerpo ya completados.
4. Haz clic en **Enviar** y verifica la respuesta:

json

{ "data": { "exportLogStatus": { "status": "failed", "downloadUrls": [], "__typename": "ExportLogsStatus" } }}

Si `status` es `failed` y `downloadUrls` está vacío, la exportación falló, incluso si la interfaz de usuario mostró el mensaje de éxito. Cuando la exportación se realiza correctamente, `downloadUrls` contiene el/los enlace(s) al archivo generado.

> **Nota:** La URL copiada contiene el token de sesión del usuario (`VtexIdclientAutCookie`). No la pegues en tickets, Slack ni comentarios de KI. Si compartes la solicitud, primero elimina la cookie.

## Workaround

- **Reintentar la exportación:** En algunos casos, volver a intentar la misma exportación después de unos minutos funciona, ya que los datos se almacenan parcialmente en caché tras el primer intento. Espera a que finalice el intento anterior (unos 20 minutos) antes de volver a intentarlo, puesto que solo se procesa una exportación por cuenta a la vez.

- **Dividir la exportación en periodos más pequeños:** Si volver a intentarlo no funciona, divide el rango de fechas en intervalos más pequeños (por ejemplo, semanales o diarios en lugar de mensuales) y exporta cada uno por separado.

- **Usar filtros más específicos:** Siempre que sea posible, combina filtros de aplicación y de acción para reducir el número de eventos por exportación.