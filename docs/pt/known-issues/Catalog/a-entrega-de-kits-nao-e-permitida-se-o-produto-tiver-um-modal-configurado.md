---
title: A entrega de kits não é permitida se o produto tiver um modal configurado
slug: a-entrega-de-kits-nao-e-permitida-se-o-produto-tiver-um-modal-configurado
status: PUBLISHED
createdAt: 2025-10-16T20:45:22.942Z
updatedAt: 2025-10-16T20:45:22.942Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: delivery-of-kits-is-not-allowed-if-the-product-has-a-configured-modal
locale: pt
kiStatus: Backlog
internalReference: 296045
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Atualmente, a entrega de um kit não é permitida se o produto tiver um modal configurado.
## Simulação



1-Configure uma transportadora para aceitar apenas entregas de um modal específico.

2-Configure esse modal em um SKU de kit e também nos SKUs de seus componentes.

3-Tente fazer uma compra desse kit para ser entregue pela transportadora que possui o modal
## Workaround


Configure a política de envio para que ela também entregue modais indefinidos.

 ![](https://vtexhelp.zendesk.com/attachments/token/deeIRFGCxJEMdfXegOHTI8nuP/?name=inline923958570.png)
Obs: Essa solução alternativa só estará disponível se TODOS os componentes dentro do KIT tiverem o modal configurado,



