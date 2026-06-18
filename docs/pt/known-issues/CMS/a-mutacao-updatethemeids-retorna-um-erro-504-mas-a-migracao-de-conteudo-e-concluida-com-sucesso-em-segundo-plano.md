---
title: 'A mutação `updateThemeIds` retorna um erro 504, mas a migração de conteúdo é concluída com sucesso em segundo plano'
slug: a-mutacao-updatethemeids-retorna-um-erro-504-mas-a-migracao-de-conteudo-e-concluida-com-sucesso-em-segundo-plano
status: PUBLISHED
createdAt: 2026-06-18T16:36:11.000Z
updatedAt: 2026-06-18T16:36:11.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: updatethemeids-mutation-returns-504-but-content-migration-completes-successfully-in-background
locale: pt
kiStatus: Backlog
internalReference: 1423324
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao executar a mutação `updateThemeIds` no `vtex.pages-graphql`, a solicitação pode retornar o código de erro `504 Gateway Timeout`, acompanhado de uma mensagem como `A solicitação para vtex.pages-graphql@2.125.2 expirou após 11,0003652`. Em alguns casos, especialmente para lojas com grande volume de conteúdo do CMS, esse tempo limite afeta apenas a resposta HTTP e não a migração em si. A migração de conteúdo pode continuar em segundo plano e ser concluída com sucesso.

## Simulação

- Use uma loja com grande volume de conteúdo do CMS/Editor do Site.
- Instale a nova versão principal do mesmo aplicativo de tema em um espaço de trabalho de produção.
- No GraphQL IDE, selecione `vtex.pages-graphql@2.x`.
- Execute a mutação `updateThemeIds`, por exemplo:

- Observe que a resposta pode retornar `504 Gateway Timeout` / `ProxyTimeout`, com uma mensagem informando que a solicitação para `vtex.pages-graphql` atingiu o tempo limite após cerca de 11 segundos.
- Após o tempo limite, valide o espaço de trabalho no Admin e na loja virtual. Em casos afetados, o conteúdo migrado pode começar a aparecer corretamente, mesmo que a resposta da mutação tenha retornado um erro.

## Workaround

Após receber o `504`, aguarde alguns instantes e verifique se a migração foi concluída antes de tentar a mutação novamente. Verifique `CMS > Páginas`, o conteúdo do Editor do Site e a renderização da loja virtual no espaço de trabalho de destino. Se o conteúdo tiver sido migrado com sucesso, nenhuma ação adicional é necessária. Evite acionar a mesma mutação várias vezes seguidas, pois o processo em segundo plano pode já estar em execução ou ter sido concluído.