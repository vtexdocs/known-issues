---
title: 'Selecionar e embalar | Pedido único gerando várias planilhas devido a um problema de simultaneidade'
slug: selecionar-e-embalar-pedido-unico-gerando-varias-planilhas-devido-a-um-problema-de-simultaneidade
status: PUBLISHED
createdAt: 2026-02-26T19:19:04.278Z
updatedAt: 2026-02-26T19:19:04.278Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: pick-and-pack-single-order-generating-multiple-worksheets-due-to-concurrency-issue
locale: pt
kiStatus: Backlog
internalReference: 1370559
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em cenários específicos de concorrência no Pick and Pack, um único pedido pode gerar várias planilhas, mesmo que exista apenas um pacote no OMS.
Isso ocorre devido a uma condição de corrida durante a criação da planilha, em que processos internos simultâneos tentam criar uma planilha para o mesmo pedido quase ao mesmo tempo. Como resultado, planilhas duplicadas ou órfãs podem ser criadas.

## Simulação

Esse comportamento não é facilmente reproduzível em um ambiente controlado, pois depende de eventos internos simultâneos. Padrão de cenário observado: 1. Um pedido é criado e enviado para o Pick and Pack.
2. Dois ou mais processos internos (por exemplo, fluxos de automação, novas tentativas ou manipuladores de eventos paralelos) tentam criar uma planilha para o mesmo pedido simultaneamente. 3. O primeiro processo cria a planilha com sucesso e vincula os itens. 4. O segundo processo também cria um registro de planilha, mas falha durante a etapa de vinculação de itens devido a um conflito de versão ou atualização simultânea. 5.

A planilha adicional permanece criada no sistema, potencialmente sem itens associados. Este é um problema de simultaneidade de back-end e não depende da interação do usuário ou da configuração operacional.

## Workaround

Não há solução alternativa disponível. Operacionalmente, os usuários podem ignorar a planilha órfã se ela não contiver itens, mas não há nenhuma ação preventiva que possa ser tomada no nível da conta para evitar a recorrência.