---
title: 'Exportação do catálogo para nomes de anexos com mais de 50 caracteres'
slug: exportacao-do-catalogo-para-nomes-de-anexos-com-mais-de-50-caracteres
status: PUBLISHED
createdAt: 2023-12-14T16:46:42.000Z
updatedAt: 2023-12-14T16:46:42.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-export-for-attachment-cuts-50-characters
locale: pt
kiStatus: Backlog
internalReference: 953161
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao importar dados de anexos no módulo de catálogo, se o nome do anexo tiver mais de 50 caracteres, a sequência de caracteres é truncada, o que faz com que esses dados não sejam atualizados.

## Simulação

1 - crie um anexo com um nome com mais de 50 caracteres, por exemplo, “Este é um nome de anexo muito longo criado para testar um problema”.

2 - associe-o a um produto

3 - exporte esses dados usando a interface do usuário /admin/Site/Relatorio_Skus.aspx

4 - Verifique a coluna relacionada a isso e ela será exibida como "`Este é um nome de anexo muito longo que foi criado`" (exatamente 50 caracteres).

5 - você precisará ajustar manualmente essas informações se quiser importá-las corretamente

## Workaround

Atualize os anexos via API, interface do usuário ou altere manualmente a string incorreta na planilha.