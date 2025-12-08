---
title: 'Preços do Marketplace externo não atualizados após o início ou término da promoção'
slug: precos-do-marketplace-externo-nao-atualizados-apos-o-inicio-ou-termino-da-promocao
status: PUBLISHED
createdAt: 2025-12-08T20:03:22.129Z
updatedAt: 2025-12-08T20:03:22.129Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: external-marketplace-prices-not-updated-after-promotion-start-or-end
locale: pt
kiStatus: Backlog
internalReference: 1322691
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando uma promoção começa ou termina, os preços no marketplace externo podem não ser atualizados corretamente. Isso ocorre porque o módulo Promoções ou Preços não notifica automaticamente o transmissor dos produtos afetados; portanto, não há nenhum evento para o marketplace consumir. Como resultado, o marketplace pode exibir preços desatualizados, especialmente em grandes catálogos ou contas com muitas promoções ativas.
## Simulação



- Crie uma promoção que altere o preço do produto.
- Ative e depois desative a promoção.
- Verifique os produtos afetados no marketplace - os preços podem permanecer desatualizados mesmo após o término da promoção.


## Workaround


A solução atual é executar um carregamento de preço no conector do marketplace afetado, para que seus preços sejam atualizados no marketplace.


