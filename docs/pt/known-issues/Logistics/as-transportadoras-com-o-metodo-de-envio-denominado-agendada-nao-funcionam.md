---
title: 'As transportadoras com o método de envio denominado "Agendada" não funcionam'
slug: as-transportadoras-com-o-metodo-de-envio-denominado-agendada-nao-funcionam
status: PUBLISHED
createdAt: 2025-10-16T20:45:52.175Z
updatedAt: 2025-10-16T20:45:52.175Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: carriers-with-shipping-method-named-agendada-does-not-work
locale: pt
kiStatus: Backlog
internalReference: 1207733
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



**Este KI ocorre apenas para lojas que usam o "idioma português". **

Se o "Shipping Method" da transportadora for nomeado com algo que tenha "Agendada", e essa transportadora não utilizar a função "Schedule delivery", a Logística entende que essa transportadora deve ter janelas disponíveis, e se essas janelas não forem encontradas, o sistema não consegue calcular o SLA, e o retorno da simulação fica vazio. Portanto, a transportadora não funcionará!
## Simulação


Você só precisa nomear o "Shipping Method" com algo que tenha "Agendada"
## Workaround


Basta remover a palavra "Agendada" para que funcione corretamente.



