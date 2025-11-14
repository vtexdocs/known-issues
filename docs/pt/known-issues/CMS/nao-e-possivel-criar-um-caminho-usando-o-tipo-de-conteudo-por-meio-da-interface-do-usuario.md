---
title: 'Não é possível criar um caminho usando o tipo de conteúdo por meio da interface do usuário'
slug: nao-e-possivel-criar-um-caminho-usando-o-tipo-de-conteudo-por-meio-da-interface-do-usuario
status: PUBLISHED
createdAt: 2025-11-14T17:13:06.059Z
updatedAt: 2025-11-14T17:13:06.059Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: it-is-not-possible-to-create-a-path-using-content-type-via-ui
locale: pt
kiStatus: Backlog
internalReference: 923619
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Se tentarmos criar um caminho usando tipos de conteúdo por meio da interface do usuário, a página não funcionará. Ela só funcionará se for criada por meio do tema.
## Simulação



- Crie um caminho usando um tipo de conteúdo no módulo Pages, por exemplo, `storeTest/:test_id`
- Salve-o
- Tente acessá-lo no front
- Não funcionará


## Workaround


Se adicionarmos o caminho usando o tipo de conteúdo por meio do tema, a página aparecerá na interface do usuário e funcionará



