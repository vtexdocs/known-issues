---
title: 'A falsificação de identidade em vendas por telefone falha para clientes específicos em lojas do Sistema de Perfil Unificado'
slug: a-falsificacao-de-identidade-em-vendas-por-telefone-falha-para-clientes-especificos-em-lojas-do-sistema-de-perfil-unificado
status: PUBLISHED
createdAt: 2026-02-25T20:05:18.284Z
updatedAt: 2026-02-25T20:05:18.284Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: telesales-impersonation-fails-for-specific-customers-in-unified-profile-system-stores
locale: pt
kiStatus: Backlog
internalReference: 1369897
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Nos fluxos de televendas B2B, a

## Simulação

de identidade por meio da barra de televendas falha intermitentemente para alguns e-mails de compradores: a sessão nunca assume o contexto do cliente e profile.isAuthenticated permanece falso na API de sessão. Os operadores podem simular a identidade de certos clientes com sucesso (geralmente aqueles com pedidos anteriores), enquanto outros falham consistentemente. ## **Simulação** - Loja com operadores de televendas habilitados.
- Conta que passou pela unificação do Sistema de Perfil. - Usando a barra de televendas, tente a representação com um e-mail do cliente e observe a sessão. Verifique a resposta da API de sessões, se o cliente estiver configurado corretamente: profile.isAuthenticated:true e um profile.id são retornados.
- Se falhar, verifique o e-mail do cliente e verifique a resposta da API de sessões. Observe que profile.isAuthenticated:false e nenhum profile.id do cliente são retornados.

## Workaround

Certifique-se sempre de que o usuário está nos dados mestres da conta principal e tem um perfil ativo.