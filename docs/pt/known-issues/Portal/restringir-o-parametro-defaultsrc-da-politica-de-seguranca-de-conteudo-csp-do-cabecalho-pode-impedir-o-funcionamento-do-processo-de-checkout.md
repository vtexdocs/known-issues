---
title: 'Restringir o parâmetro `default-src` da Política de Segurança de Conteúdo (CSP) do cabeçalho pode impedir o funcionamento do processo de checkout'
slug: restringir-o-parametro-defaultsrc-da-politica-de-seguranca-de-conteudo-csp-do-cabecalho-pode-impedir-o-funcionamento-do-processo-de-checkout
status: PUBLISHED
createdAt: 2023-03-02T17:29:18.000Z
updatedAt: 2023-03-02T17:29:18.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: restrict-the-defaultsrc-of-the-header-content-security-policy-could-break-the-checkout
locale: pt
kiStatus: Backlog
internalReference: 763359
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Restringir o cabeçalho da Política de Segurança de Conteúdo (CSP) pode impedir que os arquivos do checkout sejam carregados. Por exemplo, a configuração `default-src 'self'` pode impedir que arquivos provenientes do vtex.com sejam carregados

## Simulação

1. Defina **default-src** da Política de Segurança de Conteúdo
2. Tente comprar algo pelo checkout
3. Veja o erro no console

 Política de Segurança de Conteúdo: as configurações da página bloquearam o carregamento de um recurso em

## Workaround

Remova o cabeçalho