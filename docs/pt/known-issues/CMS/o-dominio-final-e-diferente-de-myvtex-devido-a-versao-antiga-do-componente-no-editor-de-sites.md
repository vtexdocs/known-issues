---
title: 'O domínio final é diferente de myvtex devido à versão antiga do componente no Editor de Sites.'
slug: o-dominio-final-e-diferente-de-myvtex-devido-a-versao-antiga-do-componente-no-editor-de-sites
status: PUBLISHED
createdAt: 2023-12-05T21:07:31.000Z
updatedAt: 2026-10-03T01:25:52.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: final-domain-different-from-myvtex-due-to-old-component-version-on-site-editor
locale: pt
kiStatus: Backlog
internalReference: 948071
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Às vezes, você pode fazer alterações no Editor de Sites e essas alterações são refletidas no ambiente myvtex, mas quando tenta atualizar o domínio final, essas alterações não são refletidas. Isso normalmente acontece quando o componente que você está tentando alterar possui mais de uma versão. O front-end continua usando a versão inativa do componente, enquanto o myvtex usa a versão ativa. A única maneira de resolver isso é excluindo a versão inativa do componente.

## Simulação

- Tente alterar algo no editor de sites em uma nova versão de um componente.
- Verifique se suas alterações estão sendo refletidas no domínio final e no ambiente myvtex.

## Workaround

Exclua a versão antiga. Isso fará com que o domínio final use a versão correta do componente.