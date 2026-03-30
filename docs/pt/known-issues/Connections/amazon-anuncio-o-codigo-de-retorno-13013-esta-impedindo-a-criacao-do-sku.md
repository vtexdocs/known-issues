---
title: 'Amazon Anúncio O código de retorno #13013 está impedindo a criação do SKU'
slug: amazon-anuncio-o-codigo-de-retorno-13013-esta-impedindo-a-criacao-do-sku
status: PUBLISHED
createdAt: 2026-03-30T14:32:20.011Z
updatedAt: 2026-03-30T14:32:20.011Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-returns-code-13013-preventing-sku-creation
locale: pt
kiStatus: Fixed
internalReference: 1309398
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Alguns comerciantes estão enfrentando o código de erro #13013 da Amazon ao tentar listar produtos por meio do conector VTEX para a Amazon. O sintoma visível é que os SKUs afetados não são criados/associados na Amazon, e as listagens permanecem com erro no Bridge/Listing. Os relatos abrangem várias contas e SKUs.

## Simulação

Conta VTEX conectada ao marketplace da Amazon e tentando listar produtos via Amazon Listing/Bridge.

- Passos:
  - Enviar a listagem de produto de um dos SKUs afetados para a Amazon através do conector VTEX Amazon.
  - Observar a resposta no Bridge/Listing: a Amazon rejeita com a mensagem do Código #13013 indicando que o SKU não pode ser adicionado porque o produto não está no catálogo ou foi removido, instruindo a reenviar com o UPC/GTIN original em vez de um ASIN sugerido e a verificar o andamento ou problemas no Seller Central.


    [Código #13013] Seu SKU não pode ser adicionado porque o produto não está no catálogo ou foi excluído. Verifique os dados do produto, corrija os erros e reenvie com o UPC/GTIN original em vez de um ASIN sugerido. Se você estiver publicando um produto em outro site da Amazon, talvez sejam necessárias algumas horas para que o anúncio esteja disponível. Verifique se há progresso ou problemas em sua conta de vendedor.

## Workaround

Existe uma solução alternativa para este bug? Se sim, descreva-a aqui. Se não, escreva “N/A” ou “Não há solução alternativa disponível”. Não remova esta seção se não houver solução alternativa, por favor.