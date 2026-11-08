---
title: 'Mercado Livre Erro ao aceitar a sugestão Buybox/ME2: Atributo BRAND obrigatório'
slug: mercado-livre-erro-ao-aceitar-a-sugestao-buyboxme2-atributo-brand-obrigatorio
status: PUBLISHED
createdAt: 2026-04-30T19:15:21.000Z
updatedAt: 2026-11-08T16:04:33.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-error-when-accepting-buyboxme2-suggestion-brand-attribute-required
locale: pt
kiStatus: Fixed
internalReference: 1399947
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar aceitar uma sugestão do Buybox/ME2, a operação pode falhar com um erro indicando que o atributo `MARCA` deve ser criado. Como resultado, o produto não pode ser configurado para o ME2, impedindo o processo de adesão para os SKUs afetados, mesmo quando o mapeamento de categoria e outras configurações necessárias já foram concluídas.

## Simulação

1. Acesse um produto elegível para o Buybox/ME2.

2. Tente aceitar a sugestão do Buybox/ME2.

3. Observe a validação retornada pela integração. A operação é bloqueada e a seguinte mensagem é exibida: "Os seguintes atributos devem ser criados para configurar o ME2: MARCA."

## Workaround

Abra uma solicitação de suporte para que o SKU possa ser publicado manualmente pela equipe de suporte.