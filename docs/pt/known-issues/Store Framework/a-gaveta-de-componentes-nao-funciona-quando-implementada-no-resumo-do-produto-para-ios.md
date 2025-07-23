---
title: 'A gaveta de componentes não funciona quando implementada no resumo do produto para iOS'
id: 75145kfQE8swAef57Yr4Aj
status: PUBLISHED
createdAt: 2023-05-29T13:22:57.856Z
updatedAt: 2024-02-19T18:51:53.024Z
publishedAt: 2024-02-19T18:51:53.024Z
firstPublishedAt: 2023-05-29T13:22:58.422Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: component-drawer-doesnt-work-when-implemented-in-productsummary-for-ios
locale: pt
kiStatus: Backlog
internalReference: 833338
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o componente "drawer" (gaveta) é implementado em "product-summary" (resumo do produto), ele faz com que a página seja recarregada após a página 3 no iOS, e uma mensagem de erro pode ser exibida.

## Simulação



- Implemente o "drawer" em "product-summary";
- Acesse a página de pesquisa e vá até a página 3;
- A página será recarregada e, às vezes, uma mensagem de erro será exibida

## Workaround


Implemente o Layout Modal para ter uma visualização rápida.




