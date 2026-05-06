---
title: 'Os compradores não conseguem fazer login se houver uma configuração incorreta nas organizações/centros de custo'
slug: os-compradores-nao-conseguem-fazer-login-se-houver-uma-configuracao-incorreta-nas-organizacoescentros-de-custo
status: PUBLISHED
createdAt: 2023-11-30T22:21:25.000Z
updatedAt: 2024-10-29T21:07:42.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: buyers-cant-login-if-there-is-misconfiguration-in-organizationscost-centers
locale: pt
kiStatus: Fixed
internalReference: 945609
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a primeira organização atribuída a um usuário é inválida (com um ID de centro de custo incorreto), o login falha sem exibir nenhuma mensagem.

A mensagem `"Falha nas permissões da loja de aplicativos, resultando em um erro ao criar a sessão"` será exibida na resposta da sessão.

## Simulação

- Crie uma organização com o ID de centro de custo incorreto;
- Faça login no site.

## Workaround

Corrija o ID de centro de custo associado à organização ou exclua a organização.