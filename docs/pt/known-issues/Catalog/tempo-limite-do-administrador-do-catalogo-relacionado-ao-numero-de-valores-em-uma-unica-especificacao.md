---
title: Tempo limite do administrador do catálogo relacionado ao número de valores em uma única especificação
slug: tempo-limite-do-administrador-do-catalogo-relacionado-ao-numero-de-valores-em-uma-unica-especificacao
status: PUBLISHED
createdAt: 2025-10-02T20:01:06.953Z
updatedAt: 2025-10-02T20:01:06.953Z
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


Não há limite para o registro de campos de especificação, o que pode gerar timeouts no administrador do catálogo.
## Simulação



- Registre um grande número de campos (ou seja, mais de 1.000) em uma única especificação.
- Abra o administrador dessa especificação ou tente alterar um produto que contenha essa especificação.
- Receba uma resposta de solicitação 404 ou 504
## Workaround


Evite: Não registre muitos valores em uma única especificação.
Corrigir: Desative a especificação e registre os valores em várias especificações, de preferência distribuídas em categorias diferentes.
Dica: Não concatene especificações, especialmente na categoria raiz