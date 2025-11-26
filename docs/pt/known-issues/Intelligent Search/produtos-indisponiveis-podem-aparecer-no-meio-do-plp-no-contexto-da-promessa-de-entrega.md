---
title: 'Produtos indisponíveis podem aparecer no meio do PLP no contexto da promessa de entrega'
slug: produtos-indisponiveis-podem-aparecer-no-meio-do-plp-no-contexto-da-promessa-de-entrega
status: PUBLISHED
createdAt: 2025-11-26T14:27:32.401Z
updatedAt: 2025-11-26T14:27:32.401Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: unavailable-products-may-appear-in-the-middle-of-plp-in-delivery-promise-context
locale: pt
kiStatus: Backlog
internalReference: 1330836
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando `hideUnavailableItems` é `false`, espera-se que os produtos indisponíveis apareçam no final do PLP. Entretanto, no contexto da promessa de entrega, os produtos indisponíveis podem aparecer no meio do PLP.

Isso ocorre porque o Intelligent Search avalia a disponibilidade do vendedor de melhor escopo além das Promessas de Entrega. Isso afeta a posição do produto no PLP, mas não afeta a disponibilidade das Promessas de Entrega, mantendo a exibição do produto como indisponível se ele não tiver estoque nas Promessas de Entrega.
## Simulação



- Loja:
Em uma loja que usa **Promessas de entrega** e tem um conjunto de códigos postais, os produtos indisponíveis aparecem no meio dos resultados da **Página de listagem de produtos (PLP)**.


- API de pesquisa inteligente:
Ao executar a rota Product Search com `hideUnavailableItems = false`, você encontra produtos indisponíveis no meio dos produtos disponíveis nos resultados da pesquisa.
## Workaround


N/A



