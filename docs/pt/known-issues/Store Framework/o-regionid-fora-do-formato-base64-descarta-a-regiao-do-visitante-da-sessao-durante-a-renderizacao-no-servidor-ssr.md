---
title: 'O `region_id` fora do formato Base64 descarta a região do visitante da sessão durante a renderização no servidor (SSR).'
slug: o-regionid-fora-do-formato-base64-descarta-a-regiao-do-visitante-da-sessao-durante-a-renderizacao-no-servidor-ssr
status: PUBLISHED
createdAt: 2026-11-18T00:45:14.000Z
updatedAt: 2026-11-18T00:45:14.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: regionid-outside-the-base64-format-discards-the-visitors-region-from-the-session-during-ssr
locale: pt
kiStatus: Backlog
internalReference: 1486293
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a URL da página de detalhes do produto (PDP) inclui o parâmetro `region_id` e seu valor não segue o formato esperado (Base64 de `vtex:{país ISO-3}:{código postal}`), o visitante perde a regionalização que já possuía na sessão. O servidor de renderização substitui o segmento do visitante por um de uma nova sessão vazia, e o `segmentToken` é retornado sem o `regionId`. A PDP é renderizada sem regionalização (o preço e a disponibilidade diferem do que o visitante veria sem o parâmetro).

Isso ocorre principalmente em lojas que exibem anúncios regionais do Google, onde as regiões foram criadas manualmente no Merchant Center: o Google anexa o ID registrado à URL (por exemplo, `?region_id=007979`), o que não está de acordo com o contrato da plataforma.

## Simulação

1. Abra uma PDP com uma sessão regionalizada (por exemplo, inserindo um código postal ou usando a regionalização do vendedor) e observe o preço e a disponibilidade.
2. Na mesma sessão, abra o mesmo PDP adicionando `?region_id=<valor fora do formato>`, por exemplo, `?region_id=007979`.
3. Observe que o PDP é renderizado sem regionalização e que o `segmentToken` tem regionId nulo.
4. Para comparação, abra-o com um region_id no formato correto (Base64 de `vtex:BRA:<código postal>`) ou sem o parâmetro: a região é mantida.

## Workaround

N/A