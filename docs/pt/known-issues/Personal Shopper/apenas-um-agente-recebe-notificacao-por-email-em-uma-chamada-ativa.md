---
title: 'Apenas um agente recebe notificação por e-mail em uma chamada ativa.'
slug: apenas-um-agente-recebe-notificacao-por-email-em-uma-chamada-ativa
status: PUBLISHED
createdAt: 2025-04-30T16:10:04.000Z
updatedAt: 2026-10-08T17:32:51.000Z
contentType: knownIssue
productTeam: Personal Shopper
author: 2mXZkbi0oi061KicTExNjo
tag: Personal Shopper
slugEN: only-one-agent-receives-email-notification-in-active-call
locale: pt
kiStatus: No Fix
internalReference: 1218130
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

> **Observação: Após uma recente revisão interna, decidimos descontinuar o Personal Shopper. Por esse motivo, este Problema Conhecido não será corrigido. Para saber mais sobre nossa solução de compras personalizadas, confira a **Plataforma CX** **(****https://www.vtex.com/en-us/solutions/business-needs/agentic-customer-service****), que oferece suporte às jornadas de compra e pós-compra, trazendo mais agilidade ao processo e potencialmente aumentando a conversão de vendas.**

Quando a atribuição manual de agentes está habilitada no Personal Shopper, apenas um dos agentes atribuídos a uma chamada recebe a notificação por e-mail. Os outros agentes atribuídos não são notificados, podendo perder chamadas de clientes. Esse comportamento não se limita a uma conta específica.

## Simulação

1. No painel de administração, habilite a atribuição manual de agentes para o Personal Shopper.

2. Cadastre pelo menos dois agentes e atribua-os à mesma [loja / fila / sessão].

3. Como cliente, solicite uma chamada do Personal Shopper na loja.
4. Verifique a caixa de entrada de cada agente atribuído:

## Workaround

1. No painel de administração, acesse [caminho exato do menu, por exemplo, Personal Shopper > Configurações > Agentes].

2. Identifique o agente que não está recebendo notificações por e-mail.

3. Exclua este agente.

4. Cadastre o agente novamente, usando o mesmo endereço de e-mail e as mesmas configurações de antes.

5. Salve as alterações.

6. Solicite uma nova chamada para confirmar se todos os agentes atribuídos estão recebendo a notificação por e-mail.