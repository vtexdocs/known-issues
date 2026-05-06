---
title: 'A mensagem de erro na gestão de ofertas não é atualizada após a vinculação do SKU nas integrações VTEX<>VTEX'
slug: a-mensagem-de-erro-na-gestao-de-ofertas-nao-e-atualizada-apos-a-vinculacao-do-sku-nas-integracoes-vtexvtex
status: PUBLISHED
createdAt: 2022-12-08T14:01:41.000Z
updatedAt: 2022-12-08T14:03:13.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: error-message-on-offers-management-does-not-update-after-sku-is-binded-on-vtexvtex-integrations
locale: pt
kiStatus: Backlog
internalReference: 712956
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o SKU é enviado ao marketplace e ocorre um erro no processo, é aberta uma notificação de erro na interface de gerenciamento de ofertas. Dessa forma, a oferta passa a ter o status de erro.

No entanto, se o erro for corrigido pelo vendedor e o SKU for enviado novamente para o marketplace, desta vez com sucesso, a mensagem de erro não é atualizada para “sucesso”, dando a impressão errada ao vendedor de que o SKU ainda apresenta problemas.

Esse comportamento ocorre nas integrações VTEX<>VTEX (vendedor e marketplace são contas VTEX).

## Simulação

1. Em uma conta do portal do vendedor (ou qualquer conta com interface de gerenciamento de ofertas), envie um SKU com erro para o marketplace;
2. Verifique no gerenciamento de ofertas se há uma mensagem de erro nesse SKU;
3. Corrija o SKU e envie novamente para o marketplace;
4. Verifique no marketplace se o SKU está corretamente vinculado;
5. Verifique se a mensagem de erro não desapareceu na interface de gerenciamento de ofertas do SKU do vendedor.

## Workaround

Não há solução alternativa, mas isso não afeta as vendas, pois o SKU já está corretamente vinculado ao marketplace;