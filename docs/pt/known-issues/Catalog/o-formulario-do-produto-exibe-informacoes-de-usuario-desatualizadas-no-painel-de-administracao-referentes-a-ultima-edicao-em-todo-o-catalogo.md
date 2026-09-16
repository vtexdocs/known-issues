---
title: 'O formulário do produto exibe informações de usuário desatualizadas no painel de administração, referentes à última edição em todo o catálogo.'
slug: o-formulario-do-produto-exibe-informacoes-de-usuario-desatualizadas-no-painel-de-administracao-referentes-a-ultima-edicao-em-todo-o-catalogo
status: PUBLISHED
createdAt: 2026-09-16T19:35:35.000Z
updatedAt: 2026-09-16T19:35:35.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-form-displays-outdated-user-information-in-the-admin-for-last-edit-across-catalog
locale: pt
kiStatus: Backlog
internalReference: 1462086
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O formulário de administração do produto exibe uma atribuição de usuário desatualizada ou excluída no campo **Última atualização por**. Isso ocorre quando os produtos são modificados por meio dos serviços legados de administração ou planilhas, que não atualizam o campo **Última atualização por**.

## Simulação

1. Abra **Administração > Catálogo > Produtos**.

2. Selecione um produto que foi editado recentemente por meio da administração legada ou importação em massa.

3. Visualize o formulário de edição do produto.

4. Verifique o campo **Última atualização por**.

**Comportamento esperado:** O campo mostra o usuário ou a chave de API que modificou o produto mais recentemente.

**Comportamento real:** O campo mostra um usuário desatualizado, um usuário excluído ou uma chave de API revogada. A data pode ser posterior à última ação do usuário atribuído.

## Workaround

N/A. Observe que as telas de administração legadas são consideradas descontinuadas e não devem mais ser usadas. Use a interface de administração atual para garantir a atualização correta dos campos.