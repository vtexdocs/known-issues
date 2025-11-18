---
title: 'El contador de uso de promociones no funciona como se esperaba'
slug: el-contador-de-uso-de-promociones-no-funciona-como-se-esperaba
status: PUBLISHED
createdAt: 2025-11-18T22:18:59.566Z
updatedAt: 2025-11-18T22:18:59.566Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-usage-counter-not-working-as-expected
locale: es
kiStatus: Fixed
internalReference: 1090367
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El contador de uso de promociones no está funcionando como se esperaba debido a un problema de validación en las notificaciones de uso. El Checkout es responsable de notificar el uso de una promoción, mientras que OMS es responsable de notificar las cancelaciones (que deberían disminuir el contador de uso). En cualquiera de los dos casos pueden producirse notificaciones duplicadas y, dado que estas notificaciones no se validan correctamente, surgen discrepancias y los contadores pueden resultar incoherentes.
Este problema afecta a tres contadores diferentes que deben corregirse: (1) recuento total de uso de promociones, (2) recuento de uso de promociones por perfil y (3) recuento total de uso de cupones. El equipo ya ha publicado una solución para el primer caso (recuento total de uso de promociones), pero los otros dos aún requieren una solución.

## Simulación



1. Crear una promoción con un límite de uso específico.
2. Aplicar la promoción a múltiples pedidos a través del sistema de Checkout.
3. Cancelar algunos de estos pedidos a través del OMS.
4.

Observe que el contador de uso de la promoción puede permitir que se creen más pedidos de los previstos.



Actualmente, puede que no siempre sea posible reproducir este problema de forma coherente, ya que no se ha determinado la causa raíz exacta de las notificaciones duplicadas.

## Workaround


N/A


