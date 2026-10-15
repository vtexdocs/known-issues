---
title: 'Divergência no número de permissões utilizadas no Monitor de Segurança'
slug: divergencia-no-numero-de-permissoes-utilizadas-no-monitor-de-seguranca
status: PUBLISHED
createdAt: 2025-05-07T23:01:42.000Z
updatedAt: 2026-10-15T22:55:39.000Z
contentType: knownIssue
productTeam: VTEX Shield
author: 2mXZkbi0oi061KicTExNjo
tag: VTEX Shield
slugEN: divergence-in-the-number-of-used-permissions-in-the-security-monitor
locale: pt
kiStatus: Backlog
internalReference: 1222306
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O Monitor de Segurança mostra uma divergência no número de permissões utilizadas na _descoberta de Permissões Excessivas_ para Chaves de Aplicativo compartilhadas entre contas e subcontas (arquitetura multiconta).

## Simulação

Condições para reproduzir o problema:

- Conta com arquitetura multiconta;

- Existe uma Chave de Aplicativo compartilhada entre a conta e suas subcontas;

- Conta que utiliza o VTEX Shield e possui o Monitor de Segurança;

- Essa Chave de Aplicativo compartilhada está sendo relatada como uma descoberta do tipo Permissões Excessivas no Monitor de Segurança.

Passos:
Nas contas com a Chave de Aplicativo compartilhada:

- Abra o Monitor de Segurança;

- Em qualquer uma das abas (Abertas, Adiadas e Fechadas), insira a Chave de Aplicativo na barra de pesquisa;

- Clique no resultado do tipo _Permissões Excessivas_;

- Você verá na janela modal que se abre que o número de _permissões utilizadas_ diverge entre as contas.

Como estamos lidando com uma chave de aplicativo compartilhada, ela deve exibir o número de permissões _utilizadas_ em todas as contas/subcontas, e não apenas o número referente à conta em questão.

## Workaround

Não há solução alternativa disponível.