---
title: 'Error al aprobar referencias que han sido rechazadas o revisadas por el equipo de calidad de las ofertas'
slug: error-al-aprobar-referencias-que-han-sido-rechazadas-o-revisadas-por-el-equipo-de-calidad-de-las-ofertas
status: PUBLISHED
createdAt: 2023-11-23T13:46:17.000Z
updatedAt: 2024-03-25T12:22:28.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: error-approving-skus-that-were-rejected-or-reviewed-by-offer-quality
locale: es
kiStatus: Fixed
internalReference: 940998
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un SKU incumple las normas de calidad de las ofertas establecidas por el Marketplace, pasa directamente a la «pestaña de revisión» o a la «pestaña de rechazados» de los SKU recibidos.

Sin embargo, al intentar aprobar el SKU, aparece el siguiente mensaje de error: «Lo sentimos, se ha producido un error en el catálogo. Inténtalo de nuevo o ponte en contacto con VTEX si el problema persiste».

Esto ocurre porque el módulo Matcher no ha podido completar la información del producto y del SKU tras enviar el SKU a estas pestañas (puedes comprobarlo mediante las API):
 ![](https://vtexhelp.zendesk.com/attachments/token/0Dti3ak7twOpuVzvzntmPCGit/?name=image.png)

## Simulación

1. Crea una regla opcional u obligatoria en «Calidad de la oferta»;
2. Espera a que un SKU incumpla la regla y pase a la pestaña «Revisar/Rechazados»;
3. Intenta aprobar el SKU y obtén un mensaje de error;
4. Comprueba a través de la API si el objeto «matches» está rellenado como en la imagen anterior.

## Workaround

Apruebe el SKU a través de la API introduciendo manualmente la información correcta del producto y del SKU.