---
title: 'As regras de merchandising manual não funcionam quando o acionador global está ativado'
slug: as-regras-de-merchandising-manual-nao-funcionam-quando-o-acionador-global-esta-ativado
status: PUBLISHED
createdAt: 2025-10-16T19:57:58.667Z
updatedAt: 2025-10-16T19:57:58.667Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: manual-merchandising-rules-do-not-work-when-global-trigger-is-enabled
locale: pt
kiStatus: Backlog
internalReference: 1147282
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As regras de merchandising manual não funcionam quando o acionador global está ativado.

Esse cenário pode ocorrer ao atualizar uma regra de merchandising ativando o acionador global sem excluir as regras de acionamento existentes anteriormente.
## Simulação


Siga as etapas a seguir para simular o cenário:

1. Clique em **Edit** para editar uma regra de merchandising específica.
2. Ative o **Global Trigger**.
3. Clique em **Save** para salvar as atualizações.

Após atualizar as Regras de merchandising, pesquise qualquer termo e a Regra de merchandising não será ativada. Entretanto, ao pesquisar qualquer termo que se encaixe nas regras de acionamento anteriores, a regra de merchandising poderá ser ativada
## Workaround


Como solução alternativa, siga as etapas a seguir:

1. Edite uma regra de merchandising.
2. Desative o **Global Trigger**.
3. Clique em **Salvar** para aplicar as alterações. Ao salvar as alterações, as regras de acionamento existentes serão exibidas.
4. No bloco **Trigger Rules** do formulário de edição, clique em **Clear Rules** para excluir as regras de acionamento existentes.
5. Em seguida, ative o **Global Trigger**.
6. Clique em **Salvar** para aplicar as alterações.

