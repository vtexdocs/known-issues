---
title: 'A limpeza completa do catálogo não aciona uma nova indexação da Pesquisa Inteligente'
slug: a-limpeza-completa-do-catalogo-nao-aciona-uma-nova-indexacao-da-pesquisa-inteligente
status: PUBLISHED
createdAt: 2021-10-14T15:22:47.000Z
updatedAt: 2023-03-13T12:34:54.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-fullcleanup-does-not-trigger-a-new-intelligent-search-indexation
locale: pt
kiStatus: Fixed
internalReference: 449763
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao executar uma limpeza completa (https://{AccountName}.myvtex.com/admin/Site/fullcleanup.aspx) no catálogo, o broadcaster não envia a notificação de atualização ao indexador da Pesquisa Inteligente, e os dados dos produtos podem ficar desatualizados, causando discrepâncias entre o conteúdo da PDP e da PLP.

## Simulação

Execute uma limpeza completa no Catálogo, e os produtos excluídos continuarão ativos na Pesquisa Inteligente.

## Workaround

A VTEX não recomenda excluir produtos do Catálogo; uma maneira melhor de lidar com esse cenário é marcar os produtos como Inativos.

Se for necessária uma limpeza completa, entre em contato com o Suporte da VTEX e solicite uma indexação forçada na Pesquisa Inteligente.