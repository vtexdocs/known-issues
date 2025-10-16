---
title: Shopee Erro ao atualizar a política comercial na configuração do cartão de integração
slug: shopee-erro-ao-atualizar-a-politica-comercial-na-configuracao-do-cartao-de-integracao
status: PUBLISHED
createdAt: 2025-10-16T20:59:20.415Z
updatedAt: 2025-10-16T20:59:20.415Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-error-when-updating-commercial-policy-in-the-integration-card-setup
locale: pt
kiStatus: Backlog
internalReference: 1238883
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao alterar a política comercial de uma conta Shopee já configurada, os itens anteriormente vinculados à política antiga permanecem ativos. Não há um processo automático para desativar esses itens ou publicá-los novamente sob a nova política comercial, o que leva a problemas de catálogo e falhas nos pedidos.
## Simulação



- Configure uma conta Shopee na VTEX usando uma política comercial (por exemplo, Política A).
- Publique SKUs como de costume.
- Altere a política comercial para uma nova (por exemplo, Política B).
- Os itens anteriormente vinculados à Política A permanecem ativos e acionam erros no Bridge, como:
["fields":0, "error":{"code": "ORDoo2", "message": "The item {item description} is no longer available", "exception":null}, "operationId": {operationId number}"
## Workaround


Defina o estoque como zero para todos os itens vinculados à política comercial antiga.
Aguarde até que essa atualização seja processada com êxito pelo marketplace.
Em seguida, atualize a conta com a nova política comercial e publique novamente os itens



