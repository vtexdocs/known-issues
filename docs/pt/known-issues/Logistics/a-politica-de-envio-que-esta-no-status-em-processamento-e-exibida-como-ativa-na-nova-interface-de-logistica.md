---
title: 'A política de envio que está no status "em processamento" é exibida como ativa na nova interface de logística'
slug: a-politica-de-envio-que-esta-no-status-em-processamento-e-exibida-como-ativa-na-nova-interface-de-logistica
status: PUBLISHED
createdAt: 2023-10-25T23:48:31.000Z
updatedAt: 2023-11-27T21:17:48.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-policy-stuck-in-processing-status-is-displayed-as-active-in-the-new-logistics-ui
locale: pt
kiStatus: Fixed
internalReference: 925914
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Às vezes, a política de envio pode ficar presa no status de processamento, mas na nova interface de logística não é possível perceber isso, pois ela informa que o status está ativo.
Esse comportamento pode atrapalhar ao enviar uma nova planilha de frete, pois o usuário presumirá que o processo foi concluído ao ver o status ativo, mas os novos dados não serão refletidos.

## Simulação

Tenha uma política de envio no status ativo na nova interface, em que, ao tentar enviar uma nova planilha, os dados não são refletidos.

## Workaround

Para que a política de envio saia do status de processamento em que está travada, é necessária uma ação da equipe; após isso, a planilha poderá ser enviada e o processo continuará normalmente.