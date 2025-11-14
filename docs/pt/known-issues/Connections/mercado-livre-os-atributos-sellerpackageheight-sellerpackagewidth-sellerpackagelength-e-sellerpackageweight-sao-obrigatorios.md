---
title: 'Mercado Livre Os atributos seller_package_height, seller_package_width, seller_package_length e seller_package_weight são obrigatórios.'
slug: mercado-livre-os-atributos-sellerpackageheight-sellerpackagewidth-sellerpackagelength-e-sellerpackageweight-sao-obrigatorios
status: PUBLISHED
createdAt: 2025-11-14T14:19:17.073Z
updatedAt: 2025-11-14T14:19:17.073Z
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


Os produtos não conseguem publicar no Mercado Livre porque a categoria agora exige dimensões e peso da embalagem, mas a integração nativa do MELI da VTEX ainda não está enviando esses atributos. O sintoma visível no Bridge é uma mensagem de erro informando que seller_package_height, seller_package_width, seller_package_length e seller_package_weight são todos necessários. Isso afeta os vendedores que exportam itens para categorias MELI em que esses atributos se tornaram obrigatórios, mesmo quando os mapeamentos de categoria e atributo parecem corretos.
## Simulação



-

Pré-requisitos: Uma conta integrada ao Mercado Livre usando o conector nativo da VTEX e um produto mapeado para uma categoria MELI que agora exige dimensões/peso do pacote.



-

Etapas:
1) No Admin, verifique se o produto está mapeado para a categoria MELI pretendida por meio do Category Mapper e se os mapeamentos de atributos estão definidos como de costume.

2) Tente exportar/publicar o produto para o MELI (Classic ou Premium) via Bridge.

3) No Bridge, abra o cartão de erro do produto em Marketplace > Conexões > Produtos e verifique a mensagem retornada do MELI. Você deve ver um erro indicando os atributos necessários: seller_package_height, seller_package_width, seller_package_length, seller_package_weight.


 ![](https://vtexhelp.zendesk.com/attachments/token/OdzY5BXVY5FvGgfTL4HgAbVqd/?name=image.png
## Workaround


Ajuste o mapeamento da categoria MELI para uma categoria que não exija esses atributos do sellerpackage*, se for aceitável para os negócios.



