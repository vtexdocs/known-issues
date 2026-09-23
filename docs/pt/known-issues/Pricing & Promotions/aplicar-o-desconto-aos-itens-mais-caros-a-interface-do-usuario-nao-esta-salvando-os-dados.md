---
title: 'Aplicar o desconto aos itens mais caros - a interface do usuário não está salvando os dados.'
slug: aplicar-o-desconto-aos-itens-mais-caros-a-interface-do-usuario-nao-esta-salvando-os-dados
status: PUBLISHED
createdAt: 2024-04-03T20:29:09.000Z
updatedAt: 2026-09-23T16:54:19.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: apply-the-discount-to-the-most-expensive-items-ui-not-saving-data
locale: pt
kiStatus: Backlog
internalReference: 1011071
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao usar a interface de promoções, tentar salvar manualmente a opção "Aplicar aos itens mais caros" não funcionará e o seletor permanecerá na opção mais barata.

![](https://vtexhelp.zendesk.com/attachments/token/ofDGJuHHbNRwvbYDMOSSCznvB/?name=image.png)

## Simulação

1 - Acesse a interface de promoções: https://account_name.myvtex.com/admin/promotions

2 - Na interface de promoções, selecione a opção "Aplicar o desconto aos itens mais caros".

3 - Salve a promoção.

4 - Acesse-a novamente; a opção para aplicar o desconto aos itens mais caros estará selecionada.

## Workaround

Use a API de salvamento de promoções em vez disso: https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration