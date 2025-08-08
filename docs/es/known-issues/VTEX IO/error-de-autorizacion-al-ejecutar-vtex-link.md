---
title: 'Error de autorización al ejecutar VTEX link'
id: 6KZPAY3hwAowc2MKEYiCwc
status: ARCHIVED
createdAt: 2018-12-05T13:06:52.031Z
updatedAt: 2020-03-13T21:25:23.945Z
publishedAt: 
firstPublishedAt: 2018-12-05T14:01:50.813Z
contentType: knownIssue
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
tag: VTEX IO
slugEN: error-when-running-vtex-link-for-the-first-time
locale: es
kiStatus: Open
internalReference: 
---

## Sumario

Al ejecutar `vtex-link` por la primera vez, el usuario recibe el siguiente mensaje de error: `El usuario xxxx@xxxx.com no está autorizado para el builder "node"`.

Aunque todos los desarrolladores puedan crear tiendas usando el Store-Framework, los aplicativos Node + GraphQL y Extensibilty requieren permisos especiales. Ahora, las cuentas que deseen entrar en la whitelist para extender sus aplicativos con la funcionalidad Node + GraphQL y Extensibilidad deben ser _enterprise_.

El mensaje de autorización de error puede cambiar de `node` a `react` de acuerdo con la opción elegida.

## Simulación

1. Instalar el VTEX CLI (ToolBelt);
2. Navegar hasta el directorio de la app;
3. Ejecutar el comando "vtex-link" en el terminal.
4. ![image (8)](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/VTEX%20IO/error-de-autorizacion-al-ejecutar-vtex-link_1.png)

## Workaround

1. Rellene el [formulario](https://suportevtex1.typeform.com/to/SxXknn)
2. Acceda al módulo de Gestión de la cuenta y asegúrese de que su perfil tiene los permisos de "VTEX IO Admin"

>ℹ️ Rellenar el formulario no garantiza el acceso a la Whitelist de Node + GraphQL y Extensibilty.

