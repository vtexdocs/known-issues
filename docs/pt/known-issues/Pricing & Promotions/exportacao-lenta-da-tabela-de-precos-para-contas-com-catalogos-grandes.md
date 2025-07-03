---
title: Exportação lenta da tabela de preços para contas com catálogos grandes
slug: exportacao-lenta-da-tabela-de-precos-para-contas-com-catalogos-grandes
status: PUBLISHED
createdAt: 2025-07-03T14:09:58.499Z
updatedAt: 2025-07-03T14:09:58.499Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: slow-price-table-export-for-accounts-with-large-catalogs
locale: pt
kiStatus: Scheduled
internalReference: 674353
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As exportações de tabelas de preços em contas com um grande número de SKUs podem levar várias horas para serem concluídas. O principal gargalo ocorre durante a etapa inicial, em que os produtos são recuperados do catálogo antes que os dados de preços possam ser obtidos. Durante essa fase, a exportação permanece no status `Starting` no VTEX Admin, sem exibir nenhuma porcentagem de progresso. Isso pode persistir por muito tempo, causando confusão e dando a impressão de que o processo está parado, quando na verdade ainda está enumerando as SKUs. Em alguns casos, a exportação pode falhar silenciosamente devido a um tempo limite do Catalog. Quando isso acontece, nenhum erro é mostrado e o e-mail do relatório não é enviado.
## Simulação


Observação:_ Como o processo depende do tempo de resposta do Catalog, o problema pode não ocorrer de forma consistente. Às vezes, a exportação pode ser concluída mais rapidamente se a consulta do Catalog retornar rapidamente. Para uma reprodução mais confiável, evite aplicar filtros e escolha uma conta com um grande número de itens (por exemplo, contas com mais de 400.000 SKUs).

- Acesse VTEX Admin > Precificação > Exportar > Tabela de preços base.
- Acione uma exportação de preço
- Observe que o status da exportação permanece como "Iniciando" por longos períodos

##
## Workaround


Aplique filtros (por exemplo, por marca, categoria, coleção) ao exportar para reduzir o número de itens e diminuir o tempo de exportação.



