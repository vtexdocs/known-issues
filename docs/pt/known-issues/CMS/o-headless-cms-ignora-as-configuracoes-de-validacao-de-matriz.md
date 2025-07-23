---
title: 'O Headless CMS ignora as configurações de validação de matriz'
id: 1szfagZFJHmevSWDTyd45e
status: PUBLISHED
createdAt: 2024-06-07T14:22:41.366Z
updatedAt: 2024-06-07T14:22:41.992Z
publishedAt: 2024-06-07T14:22:41.992Z
firstPublishedAt: 2024-06-07T14:22:41.992Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: headless-cms-ignores-array-validation-settings
locale: pt
kiStatus: Backlog
internalReference: 1046372
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao tentar configurar regras de validação de matriz no CMS Headless, como itens de matriz mínimos e máximos, os erros de validação não são mostrados ao usuário e é possível salvar o esquema sem passar pela validação.

O cenário esperado seria bloquear a tela e mostrar uma mensagem como:

    "keyword": "minItems", "message": "NÃO deve ter menos de 3 itens",


## Simulação


Tente adicionar uma seção que tenha uma regra de validação. Se você não respeitar a validação, o hCMS permitirá que você publique o conteúdo normalmente.



## Workaround


N/A





