---
title: 'Alteração da interface do usuário do público-alvo da campanha de “Diferente de” para “Igual a” com uma coleção'
slug: alteracao-da-interface-do-usuario-do-publicoalvo-da-campanha-de-diferente-de-para-igual-a-com-uma-colecao
status: PUBLISHED
createdAt: 2023-08-15T15:12:38.000Z
updatedAt: 2023-08-15T15:17:55.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: campaign-audience-ui-changing-different-from-to-equal-to-with-a-collection
locale: pt
kiStatus: Backlog
internalReference: 881131
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao criar um público-alvo e definir as Coleções como **Diferente de**, essa opção é salva na interface do usuário; no entanto, ao retornar ao público-alvo, ela será exibida como **Igual a** na interface, mas a primeira opção selecionada é mantida na API.

## Simulação

** **
Crie um público de campanha com um público-alvo; em Coleções, selecione **Diferente de** e salve.
Volte ao público-alvo e verifique se a opção “Diferente de” mudou para “Igual a”

Antes de salvar:
 ![](https://vtexhelp.zendesk.com/attachments/token/kHN5aLHsNDPz5pblzihtgsw28/?name=Captura+de+Tela+2023-08-15+a%CC%80s+12.09.12.png)

Após salvar:

 ![](https://vtexhelp.zendesk.com/attachments/token/hLAnRYl94mE99yyyRWVo461j5/?name=Captura+de+Tela+2023-08-15+a%CC%80s+12.09.24.png)

## Workaround

Como se trata de um bug visual, não há solução alternativa disponível. Basta verificar na API se sua opção foi salva corretamente e o destino será aplicado de acordo.