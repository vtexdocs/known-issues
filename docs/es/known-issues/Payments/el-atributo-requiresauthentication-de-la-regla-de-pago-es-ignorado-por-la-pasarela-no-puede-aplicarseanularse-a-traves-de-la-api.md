---
title: 'El atributo requiresAuthentication de la regla de pago es ignorado por la pasarela (no puede aplicarse/anularse a través de la API).'
slug: el-atributo-requiresauthentication-de-la-regla-de-pago-es-ignorado-por-la-pasarela-no-puede-aplicarseanularse-a-traves-de-la-api
status: PUBLISHED
createdAt: 2025-10-02T16:23:44.162Z
updatedAt: 2025-10-02T16:23:44.162Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-rule-requiresauthentication-attribute-is-ignored-by-gateway-cannot-be-enforcedoverridden-via-api
locale: es
kiStatus: Unknown
internalReference: 1301482
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

## Simulación



- Condiciones previas: Tener configurada una regla de pago (por ejemplo, para un método de recibo bancario).


- Pasos:
1) Utilice la API "Actualizar regla de pago por ID" para establecer requiresAuthentication en true o false para una regla determinada.
2) Obtenga inmediatamente la misma regla de pago y observe que requiresAuthentication permanece nulo o sin cambios.
3) Realice un pedido de prueba utilizando ese método de pago y observe que el comportamiento de autenticación no se ve afectado por el cambio intentado.


- Previsto frente a real:
- Esperado: Cambiar requiresAuthentication en la regla afecta a si el método requiere autenticación.
- Real: La lógica de la pasarela ignora los cambios de campo; el comportamiento no cambia.

## Workaround


N/A


