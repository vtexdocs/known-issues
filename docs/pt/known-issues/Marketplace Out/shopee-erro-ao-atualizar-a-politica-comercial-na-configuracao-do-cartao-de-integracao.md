---
title: 'Shopee Erro ao atualizar a política comercial na configuração do cartão de integração'
slug: shopee-erro-ao-atualizar-a-politica-comercial-na-configuracao-do-cartao-de-integracao
status: PUBLISHED
createdAt: 2025-05-30T18:40:46.000Z
updatedAt: 2026-08-12T23:57:44.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-error-when-updating-commercial-policy-in-the-integration-card-setup
locale: pt
kiStatus: Backlog
internalReference: 1236034
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao alterar a política comercial de uma conta Shopee já configurada, os itens anteriormente vinculados à política antiga permanecem ativos. Não há um processo automático para desativar esses itens ou republicá-los sob a nova política comercial, o que leva a problemas no catálogo e falhas nos pedidos.

## Simulação

- Configure uma conta Shopee no VTEX usando uma política comercial (por exemplo, Política A).

- Publique os SKUs normalmente.

- Altere a política comercial para uma nova (por exemplo, Política B).

- Os itens anteriormente vinculados à Política A permanecem ativos e geram erros no Bridge, como:
["fields":0,"error":{"code":"ORDoo2","message":"O item {descrição do item} não está mais disponível","exception":null},"operationId": {número do operationId}"]

## Workaround

Defina o estoque como zero para todos os itens vinculados à antiga política comercial.
Aguarde até que essa atualização seja processada com sucesso pelo marketplace.
Em seguida, atualize a conta com a nova política comercial e republique os itens.