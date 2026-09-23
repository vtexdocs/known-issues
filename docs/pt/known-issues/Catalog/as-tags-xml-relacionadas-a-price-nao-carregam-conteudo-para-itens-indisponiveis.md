---
title: 'As tags XML relacionadas a <price> não carregam conteúdo para itens indisponíveis.'
slug: as-tags-xml-relacionadas-a-price-nao-carregam-conteudo-para-itens-indisponiveis
status: PUBLISHED
createdAt: 2024-01-31T22:11:06.000Z
updatedAt: 2026-09-23T16:55:18.000Z
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

A integração XML carrega quaisquer tags relacionadas a preço, como minPrice, maxPrice e currentPrice, que são carregadas como tags de valor nulo (<![CDATA[]]>) quando o item não está disponível e também configuradas para serem exibidas mesmo se indisponíveis.

## Simulação

1 - Configure um SKU indisponível em sua loja para "exibir mesmo se indisponível".

2 - Para uma configuração de integração XML válida em https://myaccountname.myvtex.com/admin/Site/XmlForm.aspx, configure a tag "Disponibilidade" e quaisquer tags de disponibilidade para serem exibidas.

3 - Use uma solicitação GET ou carregue a URL XML criada em seu navegador.

O resultado será um item indisponível, ainda visível no XML, mas sem nenhuma etiqueta de preço:

![](https://vtexhelp.zendesk.com/attachments/token/1CzUarsM3O05aG9z5otDZZ1Yg/?name=image.png)

## Workaround

Não há solução alternativa. A única opção para não integrar itens sem preço é desativar a opção "showIfNotAvailable".