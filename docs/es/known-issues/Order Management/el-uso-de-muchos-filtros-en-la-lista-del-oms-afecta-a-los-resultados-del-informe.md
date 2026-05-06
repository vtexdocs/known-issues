---
title: 'El uso de muchos filtros en la lista del OMS afecta a los resultados del informe'
slug: el-uso-de-muchos-filtros-en-la-lista-del-oms-afecta-a-los-resultados-del-informe
status: PUBLISHED
createdAt: 2023-02-17T12:33:47.000Z
updatedAt: 2024-06-28T19:27:18.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: using-many-filters-in-the-oms-list-affects-the-results-in-the-report
locale: es
kiStatus: Fixed
internalReference: 756198
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El uso de filtros en la Lista de gestión de pedidos genera un parámetro en la URL que ayuda a definir lo que se muestra al cargar la página y a generar el informe de pedidos exportado. En este sentido, a medida que utilizamos más y más filtros, los parámetros incluidos en la URL aumentan proporcionalmente y la cadena de consulta se alarga, alcanzando un tamaño que puede provocar diversos tipos de comportamientos indeseados.

En este caso, el problema causado por el uso de muchos filtros al mismo tiempo (tamaño de la **cadena de consulta** en la URL) afecta a los resultados del informe exportado, mostrando menos pedidos de los esperados.

Es importante señalar que aquí estamos hablando del **tamaño de la cadena de consulta generada en la URL**, lo que significa que no se trata directamente del número de filtros utilizados, sino del tamaño de cada parámetro. Los nombres de filtro muy largos pueden  limitar el número de filtros que se pueden utilizar para generar un informe coherente.

## Simulación

Este escenario se puede simular utilizando varios filtros «largos» en la lista de OMS y exportando los pedidos. Se puede observar que la exportación muestra menos pedidos que la lista de OMS.

## Workaround

Es posible plantearse formas alternativas de evitar este tipo de problema en el informe. A continuación se indican algunos puntos que pueden resultar útiles:

- Optimizar el nombre de los parámetros podría ser una buena práctica.
- Exportar el informe con pocos filtros y, a continuación, en el documento exportado, aplicar los filtros adicionales o necesarios para obtener la información deseada.
- Considere dividir el informe en varios, es decir, utilice algunos filtros para generar una parte de la información y luego otros con el resto, y unifíquelos tras la descarga.

Estas son solo ideas para evitar la acumulación de filtros y la generación de esta inconsistencia en la información exportada. Se pueden utilizar otras soluciones.



%0A