---
title: 'O Shopee Mapper não suporta categorias dinâmicas — atributos que desbloqueiam subcategorias adicionais obrigatórias.'
slug: o-shopee-mapper-nao-suporta-categorias-dinamicas-atributos-que-desbloqueiam-subcategorias-adicionais-obrigatorias
status: PUBLISHED
createdAt: 2026-06-29T18:16:36.000Z
updatedAt: 2026-06-29T18:16:36.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-mapper-does-not-support-dynamic-categories-attributes-that-unlock-additional-required-subcategories
locale: pt
kiStatus: Backlog
internalReference: 1427436
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A integração com a Shopee não suporta o comportamento de categorias dinâmicas da plataforma. Quando um atributo de produto desbloqueia uma subcategoria adicional na árvore de categorias da Shopee, os atributos obrigatórios dessa subcategoria não são refletidos no mapeador, causando erros de mapeamento persistentes na Ponte, mesmo após o reprocessamento e a limpeza do cache.

## Simulação

- Registre um SKU em uma categoria da Shopee que contenha atributos capazes de desbloquear subcategorias dinâmicas (por exemplo, a categoria "Ferragens e Fechaduras para Portas").
- Preencha o atributo que aciona a subcategoria (por exemplo, o atributo `Sem Fio` = verdadeiro para fechaduras sem fio). Esse atributo desbloqueia novos atributos obrigatórios (por exemplo, `Fabricante`, `Marca`, `Número de Homologação`, `Modelo do Produto`).
- Ao processar o SKU, a Ponte retornará erros de mapeamento para os atributos obrigatórios da subcategoria dinâmica, pois eles não podem ser preenchidos pelo mapeador.

## Workaround

N/A

-