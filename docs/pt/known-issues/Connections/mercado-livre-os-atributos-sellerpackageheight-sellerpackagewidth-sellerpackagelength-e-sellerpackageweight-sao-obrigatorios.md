---
title: 'Mercado Livre Os atributos seller_package_height, seller_package_width, seller_package_length e seller_package_weight são obrigatórios.'
slug: mercado-livre-os-atributos-sellerpackageheight-sellerpackagewidth-sellerpackagelength-e-sellerpackageweight-sao-obrigatorios
status: PUBLISHED
createdAt: 2026-01-06T18:33:14.903Z
updatedAt: 2026-01-06T18:33:14.903Z
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



1. O Mercado Livre tornou os atributos da dimensão ME2 obrigatórios para as categorias relacionadas ao item.
2. Para habilitar o recurso, o comerciante deve configurar a especificação ME2 no nível do produto, além de fornecer as especificações de dimensão no nível do SKU.
3. Os valores das dimensões devem ser reais e válidos; itens com dimensões incorretas ou inconsistentes podem ser moderados pelo Mercado Livre.
4. A integração só reconhecerá valores fornecidos em **cm** e **g**.
5. Somente números inteiros são aceitos.
6. A integração lerá os atributos de dimensão diretamente do catálogo VTEX; o mapeamento desses campos no mapper será ignorado.
Essas regras se aplicam a todas as SKUs configuradas com ME2.
## Simulação


 ![](https://vtexhelp.zendesk.com/attachments/token/OdzY5BXVY5FvGgfTL4HgAbVqd/?name=image.png
## Workaround


Ajuste o mapeamento da categoria MELI para uma categoria que não exija esses atributos do sellerpackage*, se for aceitável para os negócios.


