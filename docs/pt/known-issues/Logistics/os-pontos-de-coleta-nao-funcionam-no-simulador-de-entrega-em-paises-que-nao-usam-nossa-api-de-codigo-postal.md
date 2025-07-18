---
title: Os pontos de coleta não funcionam no simulador de entrega em países que não usam nossa API de código postal
slug: os-pontos-de-coleta-nao-funcionam-no-simulador-de-entrega-em-paises-que-nao-usam-nossa-api-de-codigo-postal
status: PUBLISHED
createdAt: 2025-07-18T19:46:57.264Z
updatedAt: 2025-07-18T19:46:57.264Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: pickup-points-do-not-work-in-the-delivery-simulator-in-countries-that-do-not-use-our-postal-code-api
locale: pt
kiStatus: -
internalReference: 1262007
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O simulador de entrega não funciona com pontos de coleta em países que não usam nossa API de código postal.

Você pode verificar se um país usa nossa base de códigos postais aqui:

https://github.com/vtex/address-form/tree/main/react/country

Selecione o país e procure por "PostalcodeAPI"; se esse campo estiver definido como "false", o país não usa nossa base de códigos postais.
## Simulação



Faça uma simulação de remessa (/admin/logistics#/freight-simulation), e o ponto de coleta não aparecerá como uma opção
## Workaround


Isso não afetará a operação do ponto de coleta na loja, e o ponto de coleta deverá funcionar corretamente no checkout.


