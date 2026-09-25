---
title: 'Organizações B2B sempre excluem o último endereço cadastrado ao remover endereços da loja virtual.'
slug: organizacoes-b2b-sempre-excluem-o-ultimo-endereco-cadastrado-ao-remover-enderecos-da-loja-virtual
status: PUBLISHED
createdAt: 2026-09-25T22:46:37.000Z
updatedAt: 2026-09-25T22:46:37.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-always-deletes-last-registered-address-when-deleting-addresses-in-the-storefront
locale: pt
kiStatus: Scheduled
internalReference: 1466734
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao acessar a página de um centro de custos na loja virtual e tentar excluir um endereço, o endereço excluído é sempre o último registrado.

O endereço selecionado não importa, o último endereço registrado será sempre excluído.

## Simulação

- Acesse a página do Centro de Custos usando este padrão de URL: `/conta#/centro-de-custos/{idCentroDeCustos}`
- Em "Endereços", tente excluir qualquer endereço que não seja o último possível.
- Somente o último endereço registrado será excluído.

## Workaround

Não há solução alternativa para exclusões na loja virtual.

Os endereços ainda podem ser excluídos usando o painel de administração do VTEX ou por meio de mutação GraphQL.