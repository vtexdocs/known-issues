---
title: 'A geração do sitemap não considera produtos da Conta e da Subconta.'
slug: a-geracao-do-sitemap-nao-considera-produtos-da-conta-e-da-subconta
status: PUBLISHED
createdAt: 2021-11-19T14:51:35.000Z
updatedAt: 2026-08-14T23:23:54.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: sitemap-generation-does-not-consider-products-from-account-and-subaccount
locale: pt
kiStatus: Fixed
internalReference: 471748
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, na VTEX, podemos ter uma conta exibindo produtos de uma loja específica e outra conta (subconta) exibindo produtos de outra loja. O sitemap será gerado considerando apenas os produtos da loja específica (conta principal ou subconta, a primeira gerada) e, ao tentarmos acessar o sitemap a partir da outra loja, ele exibirá os produtos da primeira loja gerada.

## Simulação

- Defina uma loja para a Conta Principal e outra loja para a Subconta, cada uma utilizando um Canal de Vendas específico.

- Verifique se os produtos da outra loja (subconta) estão sendo exibidos na Conta Principal.

## Workaround

Não há solução alternativa.