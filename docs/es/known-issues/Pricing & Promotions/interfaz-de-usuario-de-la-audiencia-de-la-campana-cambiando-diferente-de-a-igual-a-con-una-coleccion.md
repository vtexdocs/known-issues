---
title: "Interfaz de usuario de la audiencia de la campaña cambiando 'Diferente de' a 'Igual a' con una colección"
id: 6IkWioZ9WRgg1DFEMdnthB
status: PUBLISHED
createdAt: 2023-08-15T15:12:54.580Z
updatedAt: 2023-08-15T15:18:11.108Z
publishedAt: 2023-08-15T15:18:11.108Z
firstPublishedAt: 2023-08-15T15:12:55.461Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: campaign-audience-ui-changing-different-from-to-equal-to-with-a-collection
locale: es
kiStatus: Backlog
internalReference: 881131
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Al crear un público objetivo y establecer Colecciones **Diferente a** esta opción se guarda en la interfaz de usuario, después de volver al público objetivo se mostrará como Igual a en la interfaz de usuario, pero mantiene su primera opción en la API.



## Simulación



** **
Cree un público de Campaña con un público objetivo, en Colecciones, seleccione Diferente de y guarde.
Vuelve al público objetivo y comprueba que la opción Diferente de ha cambiado a Igual a

Antes de guardar:
 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Pricing%20&%20Promotions/interfaz-de-usuario-de-la-audiencia-de-la-campana-cambiando-diferente-de-a-igual-a-con-una-coleccion_1.png)

Después de guardar:

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Pricing%20&%20Promotions/interfaz-de-usuario-de-la-audiencia-de-la-campana-cambiando-diferente-de-a-igual-a-con-una-coleccion_2.png)



## Workaround


Dado que se trata de un error visual, no hay ninguna solución disponible. Simplemente comprueba en la API si tu opción se guardó correctamente y el objetivo se aplicará en consecuencia.





