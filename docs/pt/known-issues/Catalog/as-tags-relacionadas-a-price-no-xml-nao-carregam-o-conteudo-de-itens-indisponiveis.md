---
title: 'As tags relacionadas a <price> no XML não carregam o conteúdo de itens indisponíveis'
slug: as-tags-relacionadas-a-price-no-xml-nao-carregam-o-conteudo-de-itens-indisponiveis
status: PUBLISHED
createdAt: 2024-01-31T19:11:06.000Z
updatedAt: 2024-01-31T19:11:06.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-price-related-tags-do-not-load-contents-for-unavailable-items
locale: pt
kiStatus: Backlog
internalReference: 974722
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A integração XML carrega todas as tags relacionadas ao preço, como minPrice, maxPrice e currentPrice, como tags com valor nulo (<![CDATA[]]>) quando o item não está disponível, e também as configura para exibir mesmo quando indisponível.

## Simulação

1 - Configure um SKU indisponível em sua loja para “exibir mesmo se indisponível”.
2 - Para uma configuração válida de integração XML https://myaccountname.myvtex.com/admin/Site/XmlForm.aspx, configure a tag "Availability" e qualquer tag de disponibilidade a ser exibida.
3 - Use uma solicitação GET ou carregue a URL XML criada no seu navegador.

O resultado será um item indisponível, ainda exibido no XML, mas sem nenhuma tag de preço:

 ![](https://vtexhelp.zendesk.com/attachments/token/1CzUarsM3O05aG9z5otDZZ1Yg/?name=image.png)

## Workaround

Não há solução alternativa. A única opção para não integrar itens sem preço é desativar a opção “showIfNotAvailable”.