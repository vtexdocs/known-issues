---
title: 'MELI O atributo está sendo enviado para o MELI sem ter sido mapeado pelo vendedor'
slug: meli-o-atributo-esta-sendo-enviado-para-o-meli-sem-ter-sido-mapeado-pelo-vendedor
status: PUBLISHED
createdAt: 2023-04-17T12:57:31.000Z
updatedAt: 2023-11-30T11:04:48.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-attribute-is-being-sent-to-meli-without-being-mapped-from-seller
locale: pt
kiStatus: Fixed
internalReference: 791380
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No momento, temos um problema que ainda precisa de mais investigação e detalhes. No entanto, existem algumas categorias mapeadas no recurso Mapper, e alguns atributos que não foram mapeados estão sendo enviados para o MELI.

Isso fará com que algumas SKUs sejam exportadas e outras não, pois a primeira SKU inclui um atributo indesejado, e a segunda SKU não será exportada, já que o MELI possui regras que exigem que todas as variações dentro do mesmo produto tenham as mesmas combinações de atributos.

## Simulação

No menu do produto Bridge, você verá um erro para alguns SKUs, conforme mostrado abaixo:
**Não são permitidas variações com combinações de atributos diferentes.**

Isso ocorre porque o primeiro SKU foi exportado com um atributo indesejado, e os demais SKUs não estão sendo enviados com esse atributo.

## Workaround

Existe uma solução alternativa para esse bug? Se sim, descreva-a aqui. Se não, escreva “N/A” ou “Não há solução alternativa disponível”. Não remova esta seção se não houver solução alternativa, por favor.