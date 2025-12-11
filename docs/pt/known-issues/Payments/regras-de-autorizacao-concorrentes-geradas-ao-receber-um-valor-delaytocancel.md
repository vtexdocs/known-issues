---
title: 'Regras de autorização concorrentes geradas ao receber um valor delayToCancel'
slug: regras-de-autorizacao-concorrentes-geradas-ao-receber-um-valor-delaytocancel
status: PUBLISHED
createdAt: 2025-12-11T16:09:11.703Z
updatedAt: 2025-12-11T16:09:11.703Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: competing-authorization-rules-generated-when-receiving-a-delaytocancel-value
locale: pt
kiStatus: Backlog
internalReference: 1338614
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando o conector atualiza o campo delayToCancel após a primeira resposta de autorização, o gateway VTEX enfileira um novo fluxo de autorização, mas mantém o original ativo. O sintoma visível é que dois planos de repetição são executados em paralelo, o que pode cancelar a ordem VTEX pelo menor tempo de atraso.
## Simulação



-

Iniciar uma transação com um delayToCancel inicial de 3 horas (10800s) na resposta da autorização.



-

Retorna um novo delayToCancel de 4 dias (345600s) em uma resposta subsequente.



-

Observe que ambos os "planos" de autorização continuam: as novas tentativas do primeiro plano continuam ocorrendo (por exemplo, a cada hora até 3 tentativas), enquanto o segundo plano também agenda novas tentativas (por exemplo, a cada 4 horas até 24 tentativas). O pedido pode ser cancelado pelo primeiro plano antes que as novas tentativas do segundo plano sejam concluídas


## Workaround


Prefira enviar o delayToCancel mais longo/mais conservador na primeira resposta de autorização para evitar enfileirar um plano curto que será cancelado antecipadamente.



