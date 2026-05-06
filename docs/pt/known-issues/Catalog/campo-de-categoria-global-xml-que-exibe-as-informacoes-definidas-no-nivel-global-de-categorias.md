---
title: 'Campo de categoria global XML que exibe as informações definidas no nível global de categorias.'
slug: campo-de-categoria-global-xml-que-exibe-as-informacoes-definidas-no-nivel-global-de-categorias
status: PUBLISHED
createdAt: 2020-08-26T19:55:27.000Z
updatedAt: 2024-01-23T15:31:56.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-global-category-field-showing-the-information-defined-on-category-global-level
locale: pt
kiStatus: No Fix
internalReference: 282231
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Nos arquivos XML, o campo “Categoria Global” está apresentando as informações da Categoria Global definida no nível de categoria e não no nível do produto (o nível do produto deve ter prioridade).

## Simulação

- Use um produto com uma Categoria Global definida no próprio produto e uma Categoria Global diferente definida no Nível de Categoria;
- Crie um arquivo XML e use o campo Categoria Global;
- Verifique se o produto no XML exibe a Categoria Global definida no Nível de Categoria.

## Workaround

Não há solução alternativa.