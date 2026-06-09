---
title: 'Mercado Livre Erro ao aceitar a sugestão da Buybox/ME2: atributo BRAND obrigatório'
slug: mercado-livre-erro-ao-aceitar-a-sugestao-da-buyboxme2-atributo-brand-obrigatorio
status: PUBLISHED
createdAt: 2026-04-30T19:15:21.000Z
updatedAt: 2026-06-09T19:17:51.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-error-when-accepting-buyboxme2-suggestion-brand-attribute-required
locale: pt
kiStatus: Backlog
internalReference: 1399947
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar aceitar uma sugestão de Buybox/ME2, a operação pode falhar com um erro indicando que o atributo `BRAND` deve ser criado. Como resultado, o produto não pode ser configurado para ME2, impedindo o processo de adesão para os SKUs afetados, mesmo quando o mapeamento de categorias e outras configurações necessárias já tiverem sido concluídas.

## Simulação

1. Acesse um produto elegível para Buybox/ME2.
2. Tente aceitar a sugestão de Buybox/ME2.
3. Observe a validação retornada pela integração. A operação é bloqueada e a seguinte mensagem é exibida: “Os seguintes atributos devem ser criados para configurar o ME2: BRAND.”

## Workaround

Abra uma solicitação de suporte para que o SKU possa ser publicado manualmente pela equipe de suporte.