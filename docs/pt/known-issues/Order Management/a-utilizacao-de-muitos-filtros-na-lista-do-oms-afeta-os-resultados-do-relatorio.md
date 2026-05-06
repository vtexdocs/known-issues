---
title: 'A utilização de muitos filtros na lista do OMS afeta os resultados do relatório'
slug: a-utilizacao-de-muitos-filtros-na-lista-do-oms-afeta-os-resultados-do-relatorio
status: PUBLISHED
createdAt: 2023-02-17T12:33:47.000Z
updatedAt: 2024-06-28T19:27:18.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: using-many-filters-in-the-oms-list-affects-the-results-in-the-report
locale: pt
kiStatus: Fixed
internalReference: 756198
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O uso de filtros na Lista de Gerenciamento de Pedidos gera um parâmetro na URL que ajuda a definir o que é exibido quando a página é carregada e a gerar o relatório de pedidos exportado. Nesse sentido, à medida que usamos cada vez mais filtros, os parâmetros incluídos na URL aumentam proporcionalmente, e a sequência de consulta cresce, atingindo tamanhos que podem gerar vários tipos de comportamentos indesejados.

Nesse caso, o problema causado pelo uso de muitos filtros ao mesmo tempo (tamanho da **String de Consulta** na URL) afeta os resultados do relatório exportado, exibindo menos pedidos do que o esperado.

É importante observar que aqui estamos falando sobre o **tamanho da String de Consulta gerada na URL**; isso significa que não se trata diretamente do número de filtros utilizados, mas do tamanho de cada parâmetro. Nomes de filtros muito longos podem  limitar o número de filtros que você pode usar para gerar um relatório consistente.

## Simulação

Esse cenário pode ser simulado usando vários filtros “longos” na lista do OMS e exportando os pedidos. Você pode ver que a exportação mostra menos pedidos do que a lista do OMS.

## Workaround

É possível pensar em maneiras alternativas de evitar esse tipo de problema no relatório. Aqui estão alguns pontos que podem ser úteis:

- Otimizar o nome dos parâmetros pode ser uma boa prática.
- Exporte o relatório com poucos filtros e, em seguida, no documento exportado, aplique os filtros adicionais ou necessários para obter as informações desejadas.
- Considere dividir o relatório em mais de um, ou seja, use alguns filtros para gerar uma parte das informações e, em seguida, outros para o restante, unificando-os após o download.

Essas são apenas ideias para evitar o acúmulo de filtros e a geração dessa inconsistência nas informações exportadas. Outras soluções podem ser utilizadas.



%0A