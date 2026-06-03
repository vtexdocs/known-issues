---
title: 'O B2B Organizations não limita o número de coleções definidas para uma organização, o que pode fazer com que o filtro não funcione'
slug: o-b2b-organizations-nao-limita-o-numero-de-colecoes-definidas-para-uma-organizacao-o-que-pode-fazer-com-que-o-filtro-nao-funcione
status: PUBLISHED
createdAt: 2026-06-03T20:26:23.000Z
updatedAt: 2026-06-03T20:26:23.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-does-not-limit-the-number-of-collections-set-for-an-organization-which-may-lead-to-the-filter-not-working
locale: pt
kiStatus: Backlog
internalReference: 1416519
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em lojas que utilizam o B2B Suite, se forem adicionadas muitas coleções à configuração da Organização, a filtragem na página de pesquisa pode não funcionar, o que faz com que todos os produtos sejam exibidos, incluindo aqueles que não estão definidos em nenhuma coleção configurada para a organização do usuário.

Isso ocorre porque muitos `productClusterIds` são adicionados ao segmento, fazendo com que o cookie `vtex_segment` exceda os limites de tamanho e as facetas sejam descartadas; qualquer fluxo que dependa do cookie do segmento pode ser afetado, não apenas a pesquisa.

O aplicativo B2B Organizations deve limitar o número de coleções adicionadas a uma Organização durante a criação/atualização para evitar esse cenário, o que atualmente não acontece.

## Simulação

- Pré-requisitos:
  - B2B Suite instalado e configurado com muitos clusters de produtos atribuídos à organização do comprador.
  - Espaço de trabalho limpo usando o tema nativo do B2B, sem aplicativos personalizados.

- Etapas:
  - Faça login como um usuário que tenha acesso à organização configurada com várias coleções atribuídas.
  - Carregue a loja virtual e execute uma pesquisa de texto completo que deve retornar apenas produtos das coleções atribuídas.
  - Verifique se produtos de outras coleções também são retornados.
  - Inspecione:
    - `GET /api/sessions?items=*` e confirme se `public.facets` e `search.facets` contêm os `porductClusterIds` da coleção.
    - `GET /api/segments` e observe que o segmento é retornado sem facetas, indicando que o cookie não as transportou devido a limites de tamanho. No console, você também pode ver um erro de limite de tamanho do Set-Cookie.
    - A solicitação `productSearch` é enviada com um segmento sem facetas, e a pesquisa retorna produtos que não estão nas coleções permitidas da organização.

## Workaround

Reduza o número de coleções atribuídas à organização (consolide ou agrupe coleções)