---
title: A inativação do vendedor na nova UI de registro do vendedor não aciona a reindexação do produto (lacuna de sincronização do Marketplace)
slug: a-inativacao-do-vendedor-na-nova-ui-de-registro-do-vendedor-nao-aciona-a-reindexacao-do-produto-lacuna-de-sincronizacao-do-marketplace
status: PUBLISHED
createdAt: 2025-10-08T16:22:19.695Z
updatedAt: 2025-10-08T16:22:19.695Z
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


Na nova experiência do vendedor (/admin/sellers), a inativação de um vendedor não está acionando a reindexação esperada do produto. O sintoma visível é que os produtos do vendedor inativado permanecem listados/disponíveis nos marketplaces conectados e não são removidos ou atualizados. Isso afeta as lojas que se integram aos marketplaces por meio de pontos de extremidade afiliados para a política comercial do vendedor, usando a nova interface do usuário de registro do vendedor.
## Simulação



- Pré-requisitos: loja integrada a um marketplace por meio de um ponto de extremidade de afiliado para a política comercial do vendedor.
- Etapas:
  - Acesse a nova UI de registro do vendedor: /admin/sellers.
  - Desative um vendedor que esteja disponível para a mesma política comercial integrada ao marketplace.
  - Observe no marketplace que os itens do vendedor não são atualizados/removidos como esperado (nenhuma reindexação é acionada)
## Workaround


n/a


