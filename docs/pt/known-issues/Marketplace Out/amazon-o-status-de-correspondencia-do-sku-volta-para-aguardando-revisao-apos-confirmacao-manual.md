---
title: 'Amazon O status de correspondência do SKU volta para "Aguardando revisão" após confirmação manual.'
slug: amazon-o-status-de-correspondencia-do-sku-volta-para-aguardando-revisao-apos-confirmacao-manual
status: PUBLISHED
createdAt: 2026-08-10T22:33:52.000Z
updatedAt: 2026-08-10T22:33:52.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-sku-matching-status-reverts-to-pending-review-after-manual-confirmation
locale: pt
kiStatus: Backlog
internalReference: 1446100
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em algumas contas com integração com a Amazon, os SKUs cuja correspondência já havia sido confirmada manualmente pelo vendedor voltam a aparecer como "Em análise" no Painel de Publicação dias ou semanas depois, sem que o vendedor tome qualquer providência. A tela de correspondência não indica o motivo pelo qual isso aconteceu nos bastidores; um erro relatado pela Amazon sobre o anúncio faz com que o status exibido no VTEX regrida, embora a conexão com a Amazon permaneça ativa. Em outras palavras, o produto não perdeu a correspondência, apenas parou de ser vendido devido a esse erro, que não é visível na tela.

## Simulação

- O vendedor confirma manualmente a correspondência de um SKU na tela "Confirmar e publicar" do Painel de Publicação.

- Dias ou semanas depois, a Amazon relata um erro relacionado ao anúncio desse mesmo produto (por exemplo, aprovação de marca pendente ou problemas pendentes na conta do vendedor na Amazon). Esse erro não é exibido na tela de correspondência.
Ao receber esta notificação de erro, o status do SKU no VTEX retorna automaticamente para "Revisão pendente" ("Revisão pendente"), mesmo que a correspondência ainda esteja ativa e válida no sistema da Amazon. Na maioria dos casos, trata-se de uma discrepância na exibição do status (o SKU está correspondente, mas não está sendo vendido devido ao erro), e não de uma perda real da correspondência.

![](https://vtexhelp.zendesk.com/attachments/token/2OByFRa6E3rhMwqafpYoKvGsY/?name=image.png)

## Workaround

Como o erro não é exibido na tela de correspondência, é necessário verificar a ferramenta Bridge para identificar o que a Amazon relatou. Instrua o vendedor a corrigir o erro diretamente na Amazon e, em seguida, refaça a confirmação da correspondência na tela de publicação. Atualmente, não há uma solução permanente para impedir que o status regrida novamente.