---
title: 'A mensagem de erro no gerenciamento de ofertas não é atualizada depois que o sku é vinculado nas integrações VTEX<>VTEX'
slug: a-mensagem-de-erro-no-gerenciamento-de-ofertas-nao-e-atualizada-depois-que-o-sku-e-vinculado-nas-integracoes-vtexvtex
status: PUBLISHED
createdAt: 2025-11-14T18:10:53.482Z
updatedAt: 2025-11-14T18:10:53.482Z
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



Quando o sku for enviado ao marketplace e houver um erro no processo, uma interação será aberta como um erro na UI de gerenciamento de ofertas. Dessa forma, a oferta será definida como status de erro.

No entanto, se o erro for corrigido no lado do vendedor e o sku for enviado novamente ao marketplace, dessa vez com êxito, a mensagem de erro não será atualizada para êxito, dando a impressão errada ao vendedor de que o sku ainda tem problemas.

Esse comportamento está ocorrendo nas integrações VTEX<>VTEX (o vendedor e o marketplace são contas VTEX).
## Simulação




1. Em uma conta do portal do vendedor (ou qualquer conta com interface de gerenciamento de ofertas), envie um sku com um erro para o marketplace;
2. Verifique no gerenciamento de ofertas se há uma mensagem de erro nesse sku;
3. Corrija o sku e envie-o novamente para o marketplace;
4. Verifique no marketplace se o sku está vinculado corretamente;
5. Verifique se a mensagem de erro não desapareceu na UI de gerenciamento da oferta de sku do vendedor.


## Workaround


Não há solução alternativa, mas isso não afeta as vendas, pois o sku já está vinculado corretamente ao marketplace;