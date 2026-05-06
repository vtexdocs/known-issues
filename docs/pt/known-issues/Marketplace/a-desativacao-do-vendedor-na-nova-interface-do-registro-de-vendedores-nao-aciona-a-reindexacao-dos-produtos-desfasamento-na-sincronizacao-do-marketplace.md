---
title: 'A desativação do vendedor na nova interface do Registro de Vendedores não aciona a reindexação dos produtos (desfasamento na sincronização do Marketplace)'
slug: a-desativacao-do-vendedor-na-nova-interface-do-registro-de-vendedores-nao-aciona-a-reindexacao-dos-produtos-desfasamento-na-sincronizacao-do-marketplace
status: PUBLISHED
createdAt: 2023-10-06T22:44:56.000Z
updatedAt: 2025-10-08T19:21:56.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: seller-inactivation-in-new-seller-register-ui-does-not-trigger-product-reindexing-marketplace-sync-gap
locale: pt
kiStatus: Fixed
internalReference: 915970
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Na nova experiência do vendedor (/admin/sellers), a desativação de um vendedor não está acionando a reindexação esperada dos produtos. O sintoma visível é que os produtos do vendedor desativado permanecem listados/disponíveis nos marketplaces conectados e não são removidos nem atualizados. Isso afeta as lojas que se integram a marketplaces por meio de endpoints de afiliados para a política comercial do vendedor, utilizando a nova interface de usuário do Registro de Vendedores.

## Simulação

- Pré-requisitos: Loja integrada a um marketplace por meio de um endpoint de afiliado para a política comercial do vendedor.
- Etapas:
  - Acesse a nova interface do usuário do Registro de Vendedores: /admin/sellers.
  - Desative um vendedor que esteja disponível para a mesma política comercial integrada ao marketplace.
  - Observe no marketplace que os itens do vendedor não são atualizados/removidos conforme o esperado (nenhuma reindexação é acionada).

## Workaround

n/a