---
title: 'A API REST do Catálogo de Marcas permite que o cliente interrompa o envio de informações caso a solicitação seja enviada com valores incorretos'
slug: a-api-rest-do-catalogo-de-marcas-permite-que-o-cliente-interrompa-o-envio-de-informacoes-caso-a-solicitacao-seja-enviada-com-valores-incorretos
status: PUBLISHED
createdAt: 2020-07-29T15:32:38.000Z
updatedAt: 2023-05-11T18:00:29.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-brand-api-rest-allows-the-client-to-break-the-information-if-sending-request-with-wrong-values
locale: pt
kiStatus: Fixed
internalReference: 269109
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Existem muitas rotas que suportam um determinado tipo de valor, mas se o cliente utilizar outro tipo de valor (por exemplo, inserir `null` em vez de um valor booleano), isso pode comprometer a interface do produto/SKU/categoria/marca. Impedindo o cliente de atualizar as informações através do painel de administração.

## Simulação

Para as rotas `api/catalog/pvt/brand?an=` ou `/api/catalog/pvt/brand/?an=`, a documentação indica que o campo `MenuHome` aceita apenas valores booleanos. No entanto, se enviarmos uma solicitação com “null”, por exemplo, a rota retornará um 200 e seremos capazes de inserir esse valor. Depois disso, se tentarmos editar a marca na interface de administração, não conseguiremos. Será retornado um erro “Something Went Wrong” com a mensagem `exception_message="Object cannot be cast from DBNull to other types."`

## Workaround

Atualize as informações novamente, por meio da API.