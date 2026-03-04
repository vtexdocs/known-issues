---
title: 'A página do cartão-presente do administrador do catálogo antigo exibe a mensagem “Ocorreu um problema” para usuários específicos.'
slug: a-pagina-do-cartaopresente-do-administrador-do-catalogo-antigo-exibe-a-mensagem-ocorreu-um-problema-para-usuarios-especificos
status: PUBLISHED
createdAt: 2026-03-04T20:07:24.871Z
updatedAt: 2026-03-04T20:07:24.871Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: legacy-catalog-admin-gift-card-page-shows-something-went-wrong-for-specific-users
locale: pt
kiStatus: Backlog
internalReference: 1373636
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Alguns usuários não conseguem acessar a página do Cartão Presente no Catálogo Admin legado (por exemplo, /admin/Site/Vale.aspx). A tela exibe um erro genérico “Algo deu errado”. O problema é específico do usuário e ocorre quando um filtro inválido permanece no lado do servidor para essa página e usuário, fazendo com que as chamadas internas para o Sistema de Cartão Presente retornem HTTP 400.

## Simulação

1) Acesse a página antiga do Cartão Presente: _/admin/Site/Vale.aspx. _ 2) Aplique um valor de filtro malformado (por exemplo, colando uma string de rótulo + código como `“Código: AAAA-XXXX-BBBB-YYYY”` em vez de um código de resgate puro). A página mantém o filtro por usuário + página no banco de dados.
3) A interface do usuário é recarregada com um erro “Algo deu errado”.

## Workaround

N/A