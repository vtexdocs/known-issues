---
title: 'Produto retornando como indisponível mesmo com estoque em um vendedor whitelabel'
slug: produto-retornando-como-indisponivel-mesmo-com-estoque-em-um-vendedor-whitelabel
status: PUBLISHED
createdAt: 2025-11-26T20:42:40.462Z
updatedAt: 2025-11-26T20:42:40.462Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-returning-as-unavailable-even-with-stock-in-a-whitelabel-seller
locale: pt
kiStatus: No Fix
internalReference: 404499
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Para lojas que usam o CMS legado (Portal) ou ao usar a API de pesquisa de catálogo, se um produto estiver fora de estoque no marketplace e disponível somente em um vendedor de marca branca, e se o produto não estiver definido como "mostrar fora de estoque", ele será considerado indisponível. O PDP se comportará como uma página 404; além disso, ele não será retornado na API.

Esse cenário também afeta o PDP de lojas que usam o VTEX IO Store Framework, que se baseia na API Catalog Search.

Isso não acontece com o Intelligent Search, que oferece suporte total a esse cenário ao usar a regionalização de pesquisa.
## Simulação



- Registre o estoque somente em uma conta de franquia.
- Desative o sinalizador "Mostrar fora de estoque".
- O PDP deve se comportar como se o produto não estivesse disponível
## Workaround


Ative a opção "Show out of stock" na conta do marketplace.


