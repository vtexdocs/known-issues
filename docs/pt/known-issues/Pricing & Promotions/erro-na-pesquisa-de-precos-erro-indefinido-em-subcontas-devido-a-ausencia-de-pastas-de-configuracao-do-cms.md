---
title: 'Erro na pesquisa de preços ("Erro - indefinido") em subcontas devido à ausência de pastas de configuração do CMS.'
slug: erro-na-pesquisa-de-precos-erro-indefinido-em-subcontas-devido-a-ausencia-de-pastas-de-configuracao-do-cms
status: PUBLISHED
createdAt: 2026-07-31T16:52:22.000Z
updatedAt: 2026-07-31T16:52:22.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: pricing-search-error-error-undefined-on-subaccounts-due-to-missing-cms-configuration-folders
locale: pt
kiStatus: Backlog
internalReference: 1441865
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao pesquisar uma lista de preços de produtos no aplicativo Admin Pricing (`/admin/pricing#/prices`) em uma subconta (por exemplo, uma conta filha/política comercial como `{account}b2b`), a página exibe o erro "Erro - indefinido (Código de erro = indefinido)" e a pesquisa falha. Isso ocorre porque essas subcontas não possuem as pastas de configuração do CMS das quais a página de administração de preços depende. A conta principal/pai (por exemplo, `{account}`) possui essas pastas configuradas corretamente, portanto, a mesma pesquisa funciona normalmente nela.

## Simulação

1. Acesse o painel de administração da subconta, por exemplo, `https://{subaccount}.``myvtex.com/admin/pricing#/prices/?tradePolicy=1&page=1&qtd=10`.

2. Pesquise uma lista de preços.

3. Observe "Erro - indefinido (Código de erro = indefinido)".

4. Repita a mesma pesquisa usando a conta principal relacionada — ela funciona corretamente, confirmando que as pastas existem lá, mas não na subconta.

## Workaround

Use a conta principal para pesquisar/editar preços em vez da subconta. Se for necessário gerenciar preços a partir da subconta, as pastas de configuração do CMS ausentes precisam ser recriadas nessa subconta.

OU

Altere a estrutura de pastas do CMS para a estrutura correta na subconta (https://help.vtex.com/docs/tutorials/cms-folder-structure).