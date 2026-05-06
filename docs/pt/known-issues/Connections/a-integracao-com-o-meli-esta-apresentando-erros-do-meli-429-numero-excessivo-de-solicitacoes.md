---
title: 'A integração com o MELI está apresentando erros do MELI: "429: número excessivo de solicitações"'
slug: a-integracao-com-o-meli-esta-apresentando-erros-do-meli-429-numero-excessivo-de-solicitacoes
status: PUBLISHED
createdAt: 2023-08-03T10:47:27.000Z
updatedAt: 2023-08-14T14:08:00.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-integration-is-receiving-errors-from-meli-429-too-many-requests
locale: pt
kiStatus: Fixed
internalReference: 873998
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No momento, estamos enfrentando um problema com algumas contas no MELi, que estão recebendo uma mensagem de erro ao tentar atualizar produtos, estoque ou preço no MELi.

Isso não está afetando todas as contas nem todos os SKUs, mas apenas uma parte deles, e é causado pelo envio de mais solicitações do que o MELi está preparado para receber no momento.

## Simulação

No menu de integração de estoque/preço/produto, algumas contas podem exibir um erro:

**Desculpe, não foi possível processar esta solicitação. Aguarde alguns minutos e tente novamente**

Estamos trabalhando para melhorar o processamento das solicitações e evitar que esse erro ocorra no MELI.

## Workaround

A única solução alternativa disponível no momento é reprocessar a solicitação diretamente no menu da ponte.