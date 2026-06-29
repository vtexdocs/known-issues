---
title: 'Shopee Mapper no admite categorías dinámicas: atributos que desbloquean subcategorías adicionales requeridas.'
slug: shopee-mapper-no-admite-categorias-dinamicas-atributos-que-desbloquean-subcategorias-adicionales-requeridas
status: PUBLISHED
createdAt: 2026-06-29T18:16:36.000Z
updatedAt: 2026-06-29T18:16:36.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-mapper-does-not-support-dynamic-categories-attributes-that-unlock-additional-required-subcategories
locale: es
kiStatus: Backlog
internalReference: 1427436
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La integración con Shopee no admite el comportamiento dinámico de las categorías de la plataforma. Cuando un atributo de producto desbloquea una subcategoría adicional en el árbol de categorías de Shopee, los atributos necesarios de dicha subcategoría no se reflejan en el mapeador, lo que provoca errores de mapeo persistentes en Bridge incluso después de reprocesar y borrar la caché.

## Simulación

- Registre un SKU en una categoría de Shopee que contenga atributos capaces de desbloquear subcategorías dinámicas (por ejemplo, la categoría "Herrajes y cerraduras para puertas").
- Complete el atributo que activa la subcategoría (por ejemplo, atributo `Wireless` = true para cerraduras inalámbricas). Este atributo desbloquea nuevos atributos obligatorios (p. ej., «Fabricante», «Marca», «Número de homologación», «Modelo de producto»).
Al procesar el SKU, Bridge devolverá errores de mapeo para los atributos obligatorios de la subcategoría dinámica, ya que el mapeador no puede completarlos.

## Workaround

No aplica