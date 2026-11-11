---
title: 'A opção ActivateIfPossible deve ser definida como "False" se as especificações obrigatórias não estiverem totalmente salvas no painel de administração do catálogo.'
slug: a-opcao-activateifpossible-deve-ser-definida-como-false-se-as-especificacoes-obrigatorias-nao-estiverem-totalmente-salvas-no-painel-de-administracao-do-catalogo
status: PUBLISHED
createdAt: 2026-11-12T01:23:15.000Z
updatedAt: 2026-11-12T01:23:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: activateifpossible-set-to-false-if-mandatory-specifications-are-not-fully-saved-on-catalog-admin
locale: pt
kiStatus: Backlog
internalReference: 1484224
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, o campo "Ativar se possível" (ActivateIfPossible) no painel de administração do catálogo de um produto está incorretamente definido como "falso" quando um usuário tenta salvar as especificações do produto e ainda há uma especificação obrigatória não preenchida após o salvamento.

## Simulação

1 - Crie um produto inativo com pelo menos um SKU e especificações obrigatórias (2 ou mais) ainda não preenchidas.

2 - Crie também este produto com o campo "Ativar se possível" (ActivateIfPossible) definido como "Verdadeiro" (True).

3 - Após a criação, no painel de administração do catálogo, edite o produto e tente salvá-lo com algumas, mas não todas, as especificações obrigatórias preenchidas.

4 - O campo "Ativar se possível" (ActivateIfPossible) será definido incorretamente como "falso" e, consequentemente, o produto não será ativado automaticamente após todos os campos e outros critérios serem atendidos.

## Workaround

Use APIs para salvar as especificações ou salve todas as especificações obrigatórias de uma só vez no painel de administração.