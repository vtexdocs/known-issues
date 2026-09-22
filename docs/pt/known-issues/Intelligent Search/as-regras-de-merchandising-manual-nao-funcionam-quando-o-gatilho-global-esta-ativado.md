---
title: 'As regras de merchandising manual não funcionam quando o gatilho global está ativado.'
slug: as-regras-de-merchandising-manual-nao-funcionam-quando-o-gatilho-global-esta-ativado
status: PUBLISHED
createdAt: 2024-12-06T23:20:32.000Z
updatedAt: 2026-09-22T16:54:18.000Z
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

As regras de merchandising manuais não funcionam quando o gatilho global está ativado.

Este cenário pode ocorrer ao atualizar uma regra de merchandising ativando o gatilho global sem excluir previamente as regras de gatilho existentes.

## Simulação

Siga os passos abaixo para simular o cenário:

1. Clique em **Editar** para editar uma regra de merchandising específica.

2. Ative o **Gatilho Global**.

3. Clique em **Salvar** para salvar as alterações.

Após atualizar as regras de merchandising, ao pesquisar qualquer termo, a regra de merchandising não será ativada. No entanto, ao pesquisar qualquer termo que corresponda às regras de gatilho anteriores, a regra de merchandising poderá ser ativada.

## Workaround

Como solução alternativa, siga os passos abaixo:

1. Edite uma regra de merchandising.

2. Desative o **Gatilho Global**.

3. Clique em **Salvar** para aplicar as alterações. Ao salvar as alterações, as regras de gatilho existentes serão exibidas. 4. No bloco **Regras de Disparo** do formulário de edição, clique em **Limpar Regras** para excluir as regras de disparo existentes.

5. Em seguida, ative **Disparo Global**.

6. Clique em **Salvar** para aplicar as alterações.