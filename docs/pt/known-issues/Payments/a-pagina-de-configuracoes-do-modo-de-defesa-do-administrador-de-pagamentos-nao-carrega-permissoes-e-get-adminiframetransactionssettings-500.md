---
title: 'A página de configurações do Modo de Defesa do Administrador de Pagamentos não carrega (permissões e GET /admin/iframe/transactions/settings 500)'
slug: a-pagina-de-configuracoes-do-modo-de-defesa-do-administrador-de-pagamentos-nao-carrega-permissoes-e-get-adminiframetransactionssettings-500
status: PUBLISHED
createdAt: 2026-01-09T15:30:03.086Z
updatedAt: 2026-01-09T15:30:03.086Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payments-admin-defense-mode-settings-page-fails-to-load-permissions-and-get-adminiframetransactionssettings-500
locale: pt
kiStatus: Backlog
internalReference: 1348945
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

 Os usuários com uma função personalizada de Gerenciador de Licenças não conseguem acessar a página de configurações do Modo de Defesa de Pagamentos no Admin, mesmo quando parecem ter a permissão esperada. O sintoma visível é uma falha ao carregar a página com um erro 500 no GET para /admin/iframe/transactions/settings (ferramentas de desenvolvimento). Isso afeta os usuários que acessam Admin > Transações > Configurações (Modo de Defesa) usando funções que não são de proprietário/administrador em Pagamentos. O sintoma visual é um erro ao tentar acessar a página: `{"name": "HttpError", "statusCode": 404, "message": "Nenhuma página de administração encontrada para o URL atual"'}`
## Simulação


## Workaround

