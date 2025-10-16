---
title: Divergência no número de permissões usadas no Security Monitor
slug: divergencia-no-numero-de-permissoes-usadas-no-security-monitor
status: PUBLISHED
createdAt: 2025-10-16T20:52:15.773Z
updatedAt: 2025-10-16T20:52:15.773Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: divergence-in-the-number-of-used-permissions-in-the-security-monitor
locale: pt
kiStatus: Backlog
internalReference: 1222306
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O Security Monitor mostra um número divergente de permissões usadas na _encontro de permissões excessivas_ para chaves de aplicativos compartilhadas entre contas e subcontas (arquitetura de várias contas).
## Simulação


Condições para reproduzir o problema:

- Conta com arquitetura de várias contas;
- Existe uma chave de aplicativo compartilhada entre a conta e sua(s) subconta(s);
- Conta que usa o VTEX Shield e tem o Security Monitor;
- Essa chave de aplicativo compartilhada está sendo relatada como uma descoberta do tipo Permissão excessiva no Security Monitor.

Etapas:
Nas contas com a chave de aplicativo compartilhada

- Abra o Security Monitor;
- Em qualquer uma das guias (Open, Snoozed e Closed), insira a App Key na barra de pesquisa;
- Clique no resultado com o tipo _Excessive Permissions_;
- Você verá no modal aberto que o número de _permissões usadas_ é divergente entre as contas.

Como estamos lidando com uma chave de aplicativo compartilhada, ela deve exibir o número de _permissões usadas_ em todas as contas/subcontas, não apenas o número referente à conta que estamos examinando.


## Workaround


Não há nenhuma solução alternativa disponível.



