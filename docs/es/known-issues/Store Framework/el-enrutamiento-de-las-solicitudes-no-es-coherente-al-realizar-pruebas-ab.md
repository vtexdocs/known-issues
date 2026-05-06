---
title: 'El enrutamiento de las solicitudes no es coherente al realizar pruebas A/B'
slug: el-enrutamiento-de-las-solicitudes-no-es-coherente-al-realizar-pruebas-ab
status: PUBLISHED
createdAt: 2023-11-07T01:31:07.000Z
updatedAt: 2025-03-13T20:47:51.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: request-routing-is-inconsistent-when-running-ab-tests
locale: es
kiStatus: Backlog
internalReference: 931246
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las solicitudes HTTP de navegación de la tienda no respetan la cookie de selección del espacio de trabajo durante la sesión. De hecho, durante una misma sesión, un usuario puede recibir respuestas de todos los espacios de trabajo que se estén probando.

El problema se produce cuando la cookie `VtexWorkspace` caduca o se elimina mientras el usuario navega. Cuando esto ocurre, se genera una nueva cookie de espacio de trabajo, que puede ser la misma que antes o una diferente. Si cambia y el usuario no actualiza la página, puede producirse el problema. Si el usuario sigue navegando en el momento de la caducidad, las interacciones posteriores pueden seguir asociadas al espacio de trabajo anterior, lo que provoca el problema. Sin embargo, este escenario es relativamente poco frecuente, ya que depende de sesiones largas y de que la cookie caduque sin que se actualice la página.

## Simulación

1. Crea una prueba A/B en tu tienda utilizando la CLI de VTEX IO
2. Abre la pestaña «Aplicación» en Chrome DevTools (o su equivalente en tu navegador)
  1. Navega por la tienda y borra tu cookie `VtexWorkspace` o espera a que caduque
  2. Deberías ver que los valores cambian con el tiempo, aunque la cookie de sesión no haya cambiado
3. Abre la pestaña «Red» en Chrome DevTools (o su equivalente en tu navegador).
  1. Navega por la tienda y observa las solicitudes HTTP que se realizan.
  2. Deberías ver que la cadena de consulta `workspace` se establece en diferentes valores a lo largo de la sesión.

## Workaround

No hay ninguna solución alternativa disponible.