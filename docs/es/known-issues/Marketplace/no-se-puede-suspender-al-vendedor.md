---
title: 'No se puede suspender al vendedor'
slug: no-se-puede-suspender-al-vendedor
status: PUBLISHED
createdAt: 2022-10-20T18:31:04.000Z
updatedAt: 2023-05-11T14:08:26.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: unable-to-pause-seller
locale: es
kiStatus: Fixed
internalReference: 682151
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En ocasiones, el marketplace no puede suspender la cuenta de un vendedor a través del panel de administración o de la API.

El mensaje de error que aparece en la interfaz de usuario es genérico. Sin embargo, si el error que se produce a través de la API es:
{
"error": "Canal no válido",
"data": {
   "code": "SRAPI-408"
}
}

Entonces, el error se produce porque falla la validación del afiliado (validación del canal).

Si el vendedor elimina el afiliado (o cambia el ID del afiliado) por su parte, el mercado no podrá suspender al vendedor.

## Simulación

1. En la cuenta del vendedor, elimina el afiliado del mercado;
2. En la cuenta del marketplace, intenta suspender al vendedor en el panel de administración;
3. Comprueba que se ha enviado un mensaje de error genérico.
4. Intenta suspender al mismo vendedor utilizando la API de actualización de vendedores;
5. Verifica si el mensaje de error es similar o igual al error anterior;

## Workaround

Para poder suspender al vendedor, hay tres soluciones alternativas:

- Elimina la información del `ID de afiliado` y la `Política comercial` en la sección del vendedor denominada «Integración» en la interfaz de usuario
- ![](https://vtexhelp.zendesk.com/attachments/token/Pp9HF1oSjoUYYJdnmKBUSnYVO/?name=image.png)
- Pedir al vendedor que vuelva a crear el afiliado tal y como estaba antes y, a continuación, suspender al vendedor. (Después, el vendedor podrá eliminar el afiliado de nuevo);
- Utilizar la antigua interfaz de usuario de gestión de vendedores para llevar a cabo esta acción: www.myaccount.myvtex.com/admin/site/seller.aspx