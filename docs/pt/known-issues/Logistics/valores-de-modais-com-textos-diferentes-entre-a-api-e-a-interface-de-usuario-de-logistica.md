---
title: 'Valores de modais com textos diferentes entre a API e a interface de usuário de logística'
slug: valores-de-modais-com-textos-diferentes-entre-a-api-e-a-interface-de-usuario-de-logistica
status: PUBLISHED
createdAt: 2023-03-22T14:06:34.000Z
updatedAt: 2023-03-22T14:11:57.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: modal-values-with-different-texts-between-api-and-logistics-ui
locale: pt
kiStatus: Backlog
internalReference: 775800
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Na tela Configurações Gerais do módulo de logística, ao configurar os modos disponíveis para uso no catálogo, o usuário verá uma lista de valores disponíveis; esses valores, quando selecionados, ativam uma opção de seleção na tela Configurações Avançadas do SKU, mas não são traduzidos para a API e, portanto, os valores da interface do usuário do catálogo podem não ter strings iguais aos valores da interface do usuário de logística, pois o valor exibido na interface do usuário do catálogo é exatamente o valor da API.

## Simulação

Acesse a área da tela Configurações Gerais de Logística

Use um idioma diferente do EN

Habilite uma opção modal

Vá para o módulo Catálogo - Configurações Avançadas do SKU

Observe que o valor disponível na lista modal não tem o mesmo texto selecionado na tela Configurações Gerais de Logística.

## Workaround

Ao habilitar cada valor modal em logística, é necessário validar sua equivalência com a interface do usuário do Catálogo.