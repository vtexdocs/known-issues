---
title: 'A exportação das especificações do SKU do catálogo nem sempre exporta todos os dados se a categoria selecionada for um departamento'
slug: a-exportacao-das-especificacoes-do-sku-do-catalogo-nem-sempre-exporta-todos-os-dados-se-a-categoria-selecionada-for-um-departamento
status: PUBLISHED
createdAt: 2021-11-09T18:18:57.000Z
updatedAt: 2026-02-10T14:17:39.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-sku-specification-export-will-not-always-export-all-the-data-if-the-selected-category-is-a-department
locale: pt
kiStatus: Fixed
internalReference: 465445
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A exportação das especificações de SKU do catálogo nem sempre exporta todos os dados se for selecionado o departamento e não a subcategoria mais específica.

## Simulação

- Acesse `admin/Site/ProdutoExportacaoImportacaoEspecificacaoSKUV2.aspx`
- Tente exportar as especificações de um departamento com muitos dados;
- Exporte os mesmos dados, mas de todas as categorias mais específicas;
- Verifique os dados exportados; o departamento pode não incluir todas as informações.

## Workaround

- Sempre selecione a categoria mais específica do departamento desejado, conforme descrito em nossa interface de usuário.