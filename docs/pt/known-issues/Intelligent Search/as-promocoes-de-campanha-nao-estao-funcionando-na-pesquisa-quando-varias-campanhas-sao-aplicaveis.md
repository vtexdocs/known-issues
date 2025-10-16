---
title: As promoções de campanha não estão funcionando na Pesquisa quando várias campanhas são aplicáveis
slug: as-promocoes-de-campanha-nao-estao-funcionando-na-pesquisa-quando-varias-campanhas-sao-aplicaveis
status: PUBLISHED
createdAt: 2025-10-16T20:46:08.386Z
updatedAt: 2025-10-16T20:46:08.386Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: campaign-promotions-not-working-at-the-search-when-multiple-campaigns-are-applicable
locale: pt
kiStatus: Backlog
internalReference: 1207746
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando mais de um valor de campanha está presente na sessão/segmento, as promoções não são acionadas corretamente. Nenhuma das campanhas será considerada.
## Simulação



- Crie duas campanhas para um determinado contexto;
- Crie uma promoção com um desconto percentual para qualquer uma dessas campanhas;
- Faça login com um cliente que possa receber as duas campanhas;
- Observe o cookie Segment com duas campanhas, seguindo o padrão `"aaaaaaaaa-aaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaaa,bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbb"` para sua string;
- Observe que a promoção não será aplicada aos produtos esperados.


## Workaround


Não há nenhuma solução alternativa disponível, mas a promoção funcionará corretamente se apenas uma única campanha for aplicada ao contexto.



