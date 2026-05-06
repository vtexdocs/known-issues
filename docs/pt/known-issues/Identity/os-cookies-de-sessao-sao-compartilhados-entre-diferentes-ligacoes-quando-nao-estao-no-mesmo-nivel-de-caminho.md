---
title: 'Os cookies de sessão são compartilhados entre diferentes ligações quando não estão no mesmo nível de caminho'
slug: os-cookies-de-sessao-sao-compartilhados-entre-diferentes-ligacoes-quando-nao-estao-no-mesmo-nivel-de-caminho
status: PUBLISHED
createdAt: 2023-10-25T01:05:47.000Z
updatedAt: 2023-10-25T01:05:47.000Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: session-cookies-are-shared-between-different-bindings-when-they-are-not-in-the-same-path-level
locale: pt
kiStatus: No Fix
internalReference: 925071
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os cookies de informações de sessão são exclusivos da vinculação de conta específica, mas as vinculações que não estão no mesmo nível de caminho podem receber cookies de níveis inferiores, o que pode causar problemas.

Se forem da mesma conta, as informações de sessão serão misturadas e substituirão parâmetros críticos. Se forem de contas diferentes, isso pode bloquear solicitações, gerando erros como “solicitações entre contas não são permitidas”.

## Simulação

Um exemplo de cenário é uma loja que usa o caminho raiz `/` para seu idioma padrão (inglês) e `/fr` para um segundo idioma (francês). As informações da loja em inglês podem afetar a loja em francês e vice-versa.

Outro exemplo é uma loja B2C sob `/us` para o país específico e a loja B2B sob `/us/corporate`.

## Workaround

Lojas que compartilham o mesmo host/domínio podem manter o mesmo padrão para seus caminhos sem misturar níveis diferentes. Ideias de alternativas para os exemplos apresentados seriam `/en` versus `/fr` (ambos usando um caminho de nível único) e `/us/personal` versus `/us/corporate` (caminho de dois níveis).