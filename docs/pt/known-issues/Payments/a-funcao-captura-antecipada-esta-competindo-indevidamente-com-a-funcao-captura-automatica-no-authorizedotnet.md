---
title: 'A função "Captura antecipada" está competindo indevidamente com a função "Captura automática" no AuthorizeDotNet'
slug: a-funcao-captura-antecipada-esta-competindo-indevidamente-com-a-funcao-captura-automatica-no-authorizedotnet
status: PUBLISHED
createdAt: 2023-07-20T18:08:14.000Z
updatedAt: 2023-07-20T18:08:14.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: early-capture-wrongfully-competing-with-automatic-capture-on-authorizedotnet
locale: pt
kiStatus: Backlog
internalReference: 866068
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para entendermos esse comportamento, primeiro precisamos compreender a diferença entre captura automática e captura antecipada:

**Captura automática:** A solicitação de liquidação será acionada automaticamente assim que a data for atingida, independentemente de a transação ter sido ou não aprovada pela operadora de cartão e pelo sistema antifraude.

**Captura antecipada:** Ela aciona a solicitação de liquidação após a aprovação da transação pelo sistema antifraude, assim que o número de dias configurado for atingido.

Neste conector, a captura automática está programada para ocorrer após 4 dias, enquanto a captura antecipada pode ser configurada para um máximo de 10 dias após a aprovação do sistema antifraude. Elas acabam competindo entre si, e se a captura antecipada for configurada para um valor superior a 4 dias, a captura automática sempre ocorrerá antes, portanto será sempre acionada primeiro.

Isso torna os valores permitidos na captura antecipada inúteis se forem superiores a 4 dias.

## Simulação

1. Configure o conector AuthorizeDotNet em sua loja;
2. Defina o campo “Captura Antecipada” para um valor superior a 4 dias;
3. Faça uma transação de teste;
4. Acesse a interface de transações e observe que o valor programado para a captura automática é chamado primeiro.

## Workaround

N/A