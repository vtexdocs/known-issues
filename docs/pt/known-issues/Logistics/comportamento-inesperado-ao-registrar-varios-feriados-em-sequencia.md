---
title: 'Comportamento inesperado ao registrar vários feriados em sequência'
slug: comportamento-inesperado-ao-registrar-varios-feriados-em-sequencia
status: PUBLISHED
createdAt: 2025-10-16T20:44:10.403Z
updatedAt: 2025-10-16T20:44:10.403Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: unexpected-behavior-when-registering-multiple-holidays-in-sequence
locale: pt
kiStatus: Backlog
internalReference: 1202478
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao registrar vários feriados em sequência, ocorrerão alguns comportamentos inesperados, pois alguns feriados registrados anteriormente podem ser excluídos e alguns novos feriados podem não ser registrados.
## Simulação


Isso pode ser facilmente reproduzido, basta registrar alguns feriados múltiplos em sequência, equivalentes a 10.


## Workaround


Será necessário espaçar a criação de feriados, definindo um intervalo de pelo menos 1 minuto entre os registros.



