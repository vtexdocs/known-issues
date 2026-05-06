---
title: 'Limites de tempo de administração do catálogo relacionados ao número de valores em uma única especificação'
slug: limites-de-tempo-de-administracao-do-catalogo-relacionados-ao-numero-de-valores-em-uma-unica-especificacao
status: PUBLISHED
createdAt: 2021-09-20T23:01:28.000Z
updatedAt: 2025-10-02T23:00:36.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-admin-timeouts-related-to-the-number-of-values-in-a-single-specification
locale: pt
kiStatus: Backlog
internalReference: 433664
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Não há limite para o registro de campos de especificação, o que pode causar erros de tempo limite no painel de administração do catálogo.

## Simulação

- Registre um grande número de campos (por exemplo, mais de 1.000) em uma única especificação.
- Abra o painel de administração dessa especificação ou tente alterar um produto que contenha essa especificação.
- Receba uma resposta de solicitação 404 ou 504.

## Workaround

Prevenção: Não registre muitos valores em uma única especificação.
Correção: Desative a especificação e registre os valores em várias especificações, de preferência distribuídas em diferentes categorias.
Dica: Não concatene especificações, especialmente na categoria raiz