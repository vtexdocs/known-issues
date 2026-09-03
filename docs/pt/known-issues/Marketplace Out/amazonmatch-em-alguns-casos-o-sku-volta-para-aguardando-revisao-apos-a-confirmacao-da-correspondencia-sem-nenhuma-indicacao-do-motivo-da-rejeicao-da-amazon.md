---
title: 'AmazonMatch Em alguns casos, o SKU volta para "Aguardando revisão" após a confirmação da correspondência, sem nenhuma indicação do motivo da rejeição da Amazon.'
slug: amazonmatch-em-alguns-casos-o-sku-volta-para-aguardando-revisao-apos-a-confirmacao-da-correspondencia-sem-nenhuma-indicacao-do-motivo-da-rejeicao-da-amazon
status: PUBLISHED
createdAt: 2026-09-04T00:37:34.000Z
updatedAt: 2026-09-04T00:37:34.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazonmatch-in-some-cases-sku-reverts-to-pending-review-after-match-confirmation-with-no-indication-of-amazons-rejection-reason
locale: pt
kiStatus: Backlog
internalReference: 1456640
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No fluxo de correspondência de anúncios, alguns SKUs voltam a exibir "Aguardando Análise" logo após serem aprovados, sem nenhuma mensagem explicando o motivo na tela. A tela não indica quando a Amazon rejeita a correspondência por um motivo que exige ação do vendedor (por exemplo, quando a marca do produto exige autorização prévia para ser vendida por esse vendedor).

1. No Bridge, essa mensagem de erro pode aparecer, mas pode ser substituída se o SKU receber qualquer outra atualização, e o motivo real acaba se perdendo.

2. Na correspondência, o status "Aguardando Análise" parece idêntico a um SKU que simplesmente ainda não foi processado, então o usuário acaba confirmando a mesma correspondência repetidamente sem entender por que ela nunca é concluída.

**Importante:** esse cenário não ocorre com todos os SKUs, apenas em casos específicos.

## Simulação

- Acesse Marketplace > Amazon > Publicação de Produto.
- Encontre um SKU com uma sugestão de produto cuja marca exija autorização direta do proprietário (não recuperável por meio de uma simples solicitação na própria Amazon).
- Abra os detalhes da sugestão e clique em "Confirmar e publicar".
- Aguarde alguns instantes após a publicação (o processamento é assíncrono).

- Nenhum aviso é exibido na tela antes da confirmação e o botão permanece habilitado normalmente.

- O SKU volta a exibir "Em análise" no anúncio, sem nenhuma indicação de que a Amazon o rejeitou.

- Verifique se a mensagem de erro foi registrada no Bridge; em alguns casos, ela pode não aparecer, tendo sido substituída por outra atualização de SKU.

## Workaround

Verifique se a mensagem de erro foi registrada no Bridge; em alguns casos, ela pode não aparecer, tendo sido substituída por outra atualização de SKU.