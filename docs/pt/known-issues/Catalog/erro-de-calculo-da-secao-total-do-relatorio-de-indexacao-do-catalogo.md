---
title: "Erro de Cálculo da Seção 'Total' do Relatório de Indexação do Catálogo "
id: 6TJXux104P2c0mruo5vlEn
status: PUBLISHED
createdAt: 2022-02-25T11:39:42.098Z
updatedAt: 2024-02-16T20:26:35.750Z
publishedAt: 2024-02-16T20:26:35.750Z
firstPublishedAt: 2022-02-25T11:39:42.485Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-indexing-report-total-section-calculation-error
locale: pt
kiStatus: No Fix
internalReference: 499450
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, no relatório de indexação do catálogo (RelatorioIndexação.aspx), a seção "Total Indexado" está considerando todos os produtos do catálogo ao atingir 100% da métrica, não subtraindo produtos não indexados se necessário.







## Simulação


1) Verifique o total de produtos indexados na seção "Total" desta IU

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/pt/known-issues/Catalog/erro-de-calculo-da-secao-total-do-relatorio-de-indexacao-do-catalogo_1.png)

2) Em seguida, verifique os "Produtos que não foram indexados".

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/pt/known-issues/Catalog/erro-de-calculo-da-secao-total-do-relatorio-de-indexacao-do-catalogo_2.png)

3) Em seguida, vá para a seção "Produtos" do catálogo, na qual você verá quantos produtos sua loja tem no total:

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/pt/known-issues/Catalog/erro-de-calculo-da-secao-total-do-relatorio-de-indexacao-do-catalogo_3.png)

A matemática não se soma, a seção "Total" deve ser 71 no exemplo acima, já que há 2 produtos que também não são indexados.








## Workaround


n/d

