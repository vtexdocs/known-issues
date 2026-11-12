---
title: 'vtex.structured-data As configurações do aplicativo não são aplicadas no PDP SSR HTML'
slug: vtexstructureddata-as-configuracoes-do-aplicativo-nao-sao-aplicadas-no-pdp-ssr-html
status: PUBLISHED
createdAt: 2026-11-12T22:45:53.000Z
updatedAt: 2026-11-12T22:45:53.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: vtexstructureddata-app-settings-are-not-applied-in-pdp-ssr-html
locale: pt
kiStatus: Backlog
internalReference: 1484644
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O aplicativo `vtex.structured-data` gera o JSON-LD (schema.org) para as páginas da loja, consumido por mecanismos de busca, Google Merchant Center e agentes de IA. O aplicativo lê suas próprias configurações (`gtinValue`, `disableProductStructuredData`, etc.) por meio de uma consulta GraphQL em nível de componente (`useAppSettings`). O servidor de renderização não executa essas consultas durante a renderização no servidor.

Como resultado, o HTML do servidor de renderização sempre usa os valores padrão do código, e as configurações da loja só são aplicadas no navegador após a hidratação. A maioria dos consumidores desses dados lê apenas o HTML do servidor, portanto, na prática, **as configurações não têm efeito**. Por exemplo, o GTIN é exibido como o ID do SKU com zeros à esquerda, mesmo quando o EAN está configurado nas configurações do aplicativo.

O problema afeta todas as contas que usam o Store Framework, já que `vtex.structured-data` é uma dependência do framework.

## Simulação

1. Em uma conta do Store Framework, abra o Admin e acesse as configurações do aplicativo `vtex.structured-data`.

2. Configure `gtinValue` para usar o EAN (ou habilite `disableProductStructuredData`).

3. Certifique-se de que a flag `vtex.store` **“Habilitar a execução de todas as consultas GraphQL na página do produto”** (`enableFullSSROnProduct`) **não** esteja habilitada.

4. Abra uma página de produto (PDP) e inspecione a resposta bruta do servidor (`curl` ou “Exibir código-fonte”, não o DOM renderizado) para o script `application/ld+json`.

5. Observe que o JSON-LD usa os valores padrão: `gtin` é o ID do SKU com zeros à esquerda e o JSON-LD da PDP ainda está presente.

6. Inspecione o DOM após a hidratação. As configurações são aplicadas apenas no lado do cliente.

## Workaround

Ative a opção **“Habilitar a execução de todas as consultas GraphQL na página do produto”** (`enableFullSSROnProduct`) nas configurações do `vtex.store`. Com essa opção ativada, o servidor executa todas as consultas GraphQL da página de detalhes do produto (PDP) antes de responder, aplicando as configurações de dados estruturados no HTML do servidor de renderização no servidor (SSR).

Limitações:

- Pode aumentar o tempo de renderização e o TTFB (tempo até o primeiro byte) na PDP, proporcionalmente ao número de blocos que executam uma consulta.