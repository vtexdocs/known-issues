---
title: 'Las PDP Faststore no están regionalizadas'
slug: las-pdp-faststore-no-estan-regionalizadas
status: PUBLISHED
createdAt: 2025-11-14T19:21:24.228Z
updatedAt: 2025-11-14T19:21:24.228Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-pdps-are-not-regionalized
locale: es
kiStatus: Fixed
internalReference: 1088656
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Fastsore utiliza la búsqueda inteligente para cargar el PDP, pero no utiliza el regionID para cargarlo en tiendas regionalizadas. Esto lleva a problemas con la disponibilidad de los artículos. Además, utilizamos la propiedad `hideUnavailableItems=true` en la consulta para cargar el PDP. Esto puede provocar incoherencias entre el PLP (que está regionalizado) y el PDP.


#### Simulación


Intente buscar un producto que tenga existencias en el regionID en el que está regionalizado. Si este producto no tiene stock en el vendedor global y sólo en vendedores específicos no relacionados con este regionID, el PLP y el PDP pueden tener información diferente.

## Workaround


Habilite "ShowIfNotAvailable" en los productos a través del Catálogo para minimizar los efectos de este problema.
Añada el vendedor como completo para que el producto sea devuelto


