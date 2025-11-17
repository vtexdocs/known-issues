---
title: 'O seletor de quantidade no modo stepper não é atualizado após atingir a quantidade máxima disponível'
slug: o-seletor-de-quantidade-no-modo-stepper-nao-e-atualizado-apos-atingir-a-quantidade-maxima-disponivel
status: PUBLISHED
createdAt: 2025-11-17T17:43:19.420Z
updatedAt: 2025-11-17T17:43:19.420Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: quantityselector-on-stepper-mode-doesnt-refresh-after-reaching-max-available-qunatity
locale: pt
kiStatus: Backlog
internalReference: 704458
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Se você atingir a quantidade disponível do produto clicando mais de uma vez, o componente demorará muito para avisá-lo e nem mesmo atualizará o seletor de quantidade com a quantidade máxima disponível.
## Simulação


Se você tentar ultrapassar a quantidade disponível de um produto clicando nas setas de quantidade, receberá uma mensagem informando que essa quantidade não está disponível, mas o número da quantidade não é atualizado. Se você alterar a quantidade manualmente, ela funcionará como esperado
## Workaround



N/A