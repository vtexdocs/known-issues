---
title: 'Os produtos podem entrar em estado inativo mesmo que todos os SKUs estejam inativos.'
slug: os-produtos-podem-entrar-em-estado-inativo-mesmo-que-todos-os-skus-estejam-inativos
status: PUBLISHED
createdAt: 2026-11-04T00:25:13.000Z
updatedAt: 2026-11-04T00:25:13.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-can-enter-inactive-state-despite-all-skus-being-inactive
locale: pt
kiStatus: Backlog
internalReference: 1480822
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, existe um estado de inconsistência, de origem desconhecida, em que o catálogo pode ter um produto inativo com um ou mais SKUs ativos. Isso não deveria ser possível, de acordo com as regras do catálogo.

A origem de como os produtos podem entrar nesse estado ainda não foi identificada e parece ser uma ocorrência rara.

## Simulação

N/A (as etapas de simulação ainda não foram identificadas; esta KI é uma declaração de que algumas inconsistências no banco de dados foram observadas e um marcador de

## Workaround

)

## **Solução alternativa**
Editar quaisquer dados do produto (ou seja, atualizar sua descrição) o altera automaticamente para o estado correto e esperado (ativo).