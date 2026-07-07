---
title: 'Amazon Em alguns casos, um SKU pode ser publicado com sucesso na Amazon, mas o estoque não é atualizado e permanece zerado.'
slug: amazon-em-alguns-casos-um-sku-pode-ser-publicado-com-sucesso-na-amazon-mas-o-estoque-nao-e-atualizado-e-permanece-zerado
status: PUBLISHED
createdAt: 2026-07-07T19:09:18.000Z
updatedAt: 2026-07-07T19:09:18.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-in-some-cases-a-sku-may-be-published-successfully-on-amazon-but-the-stock-is-not-updated-and-remains-at-zero
locale: pt
kiStatus: Backlog
internalReference: 1431243
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Um ou mais SKUs da Amazon podem aparecer como publicados/ativos com sucesso, com estoque disponível na loja, mas o estoque enviado para a Amazon permanece zerado (ou desatualizado) e não reflete o valor real, mesmo após dias ou semanas. Não há nenhum erro visível no painel de administração ou no histórico de integração que indique a causa.

Isso ocorre com SKUs que, em algum momento no passado, apresentaram um erro relatado pela Amazon no próprio anúncio e foram posteriormente corrigidos/republicados. Mesmo que o anúncio volte a ficar ativo normalmente, o sistema não retoma automaticamente o envio de atualizações de estoque para esse SKU.

## Simulação

- Identificar o(s) SKU(s) relatado(s) com discrepância entre o estoque real (Catálogo VTEX) e o estoque publicado na Amazon.

- Confirmar no painel de administração da VTEX (Marketplace → Amazon) que o SKU está marcado como publicado/ativo, sem erros aparentes na tela.
- Confirme se o estoque do SKU no Catálogo VTEX (Produtos e SKUs → Preço e estoque) é **maior que zero**.
- Verifique o histórico de integração para esse SKU (Marketplace → histórico/Bridge). Normalmente, o último registro de atualização de estoque bem-sucedido está desatualizado (com dias/semanas), enquanto existem registros mais recentes de outros tipos (por exemplo, republicação de anúncio) após essa data.
- Esse padrão — anúncio ativo sem erros, estoque real disponível, mas sem atualização de estoque recente no histórico — é a assinatura desse problema.

## Workaround

Sim. O suporte pode encaminhar o problema para a equipe técnica para que seja executada uma atualização forçada de estoque para o(s) SKU(s) específico(s), por meio de uma chamada direta à API de disponibilidade da integração (fora do fluxo automático padrão, que é o que está bloqueado). Essa chamada recalcula o estoque real da VTEX e o envia diretamente para a Amazon, resolvendo o problema para esse SKU individualmente.

Se o cliente reportar vários SKUs com o mesmo sintoma, é recomendável compilar a lista completa e encaminhá-la à equipe técnica de uma só vez, em vez de tratá-los individualmente em chamados separados.