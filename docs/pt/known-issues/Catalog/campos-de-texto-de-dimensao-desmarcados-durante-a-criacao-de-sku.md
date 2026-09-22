---
title: 'Campos de texto de dimensão desmarcados durante a criação de SKU'
slug: campos-de-texto-de-dimensao-desmarcados-durante-a-criacao-de-sku
status: PUBLISHED
createdAt: 2023-04-06T20:29:15.000Z
updatedAt: 2026-09-22T22:23:01.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: dimension-text-fields-being-unselected-during-sku-creation
locale: pt
kiStatus: Fixed
internalReference: 786048
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao criar um SKU no painel de administração, é necessário registrar as dimensões de envio e as dimensões reais. No entanto, ao preencher um dos campos de texto e clicar (ou usar a tecla Tab) para preencher outro, esse campo é desmarcado, sendo necessário clicar novamente no campo de texto para poder inserir/editar o valor.

## Simulação

- Acesse o Catálogo e crie um novo SKU para um produto.
- Preencha o primeiro campo, "Peso de envio".

- Clique no próximo campo ou use a tecla Tab.
- Observe que, após alguns instantes, o campo é desmarcado, impossibilitando a edição.

## Workaround

Clique novamente no campo de texto.