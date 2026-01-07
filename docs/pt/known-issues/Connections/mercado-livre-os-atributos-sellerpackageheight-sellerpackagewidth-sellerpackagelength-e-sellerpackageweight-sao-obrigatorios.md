---
title: 'Mercado Livre Os atributos seller_package_height, seller_package_width, seller_package_length e seller_package_weight são obrigatórios.'
slug: mercado-livre-os-atributos-sellerpackageheight-sellerpackagewidth-sellerpackagelength-e-sellerpackageweight-sao-obrigatorios
status: PUBLISHED
createdAt: 2026-01-07T14:15:23.109Z
updatedAt: 2026-01-07T14:15:23.109Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-os-atributos-sellerpackageheight-sellerpackagewidth-sellerpackagelength-e-sellerpackageweight-sao-obrigatorios
locale: pt
kiStatus: Backlog
internalReference: 1325344
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O Mercado Livre tornou os atributos de dimensão obrigatórios para itens ME2 em algumas categorias. No entanto, essa exigência pode ser estendida a novas categorias sem aviso prévio. Portanto, é importante considerar as dimensões como obrigatórias para qualquer categoria de produto que tenha entrega ME2.

Para que o recurso funcione corretamente, o comerciante deve configurar a especificação ME2 no nível do produto e fornecer as dimensões no nível da SKU.
As dimensões devem refletir valores reais (por exemplo, C 20, A 30, L 10, P 5) e somente valores em centímetros e gramas são aceitos. Se não forem aceitas pelo Mercado Livre, o item será moderado e o produto não será publicado.

A integração lê os atributos de dimensão diretamente do catálogo VTEX no nível de SKU.
Qualquer mapeamento desses campos no mapeador será ignorado. Essa regra se aplica a todos os SKUs configurados como ME2.
## Simulação


 ![](https://vtexhelp.zendesk.com/attachments/token/OdzY5BXVY5FvGgfTL4HgAbVqd/?name=image.png
## Workaround


n/a


