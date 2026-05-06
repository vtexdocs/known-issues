---
title: 'A API para criar/atualizar fornecedores de cartões-presente está sempre atualizando o fornecedor atual, mesmo quando nunca foi adicionado um novo fornecedor anteriormente.'
slug: a-api-para-criaratualizar-fornecedores-de-cartoespresente-esta-sempre-atualizando-o-fornecedor-atual-mesmo-quando-nunca-foi-adicionado-um-novo-fornecedor-anteriormente
status: PUBLISHED
createdAt: 2023-03-10T19:04:48.000Z
updatedAt: 2023-03-10T19:04:48.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-api-to-createupdate-gift-card-providers-is-always-updating-the-current-provider-when-it-has-never-added-a-new-provider-before
locale: pt
kiStatus: Backlog
internalReference: 768954
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar adicionar um novo ID de provedor pela primeira vez em uma conta, em vez de adicionar um novo provedor, o provedor nativo atual (VtexGiftCard) é atualizado.

## Simulação

Use nossa API para atualizar um provedor quando a conta nunca tiver adicionado um novo provedor.

## Workaround

Para adicionar um novo provedor, você deve primeiro salvar as informações do nosso provedor de cartão-presente nativo. Depois de salvar as informações, você poderá adicionar o novo provedor com sucesso.