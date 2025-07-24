---
title: 'O comissionamento da categoria na configuração do seller gera um Time Out'
id: 5NsiGAjTIK1ygBvJo1ks2k
status: PUBLISHED
createdAt: 2022-09-05T14:18:53.669Z
updatedAt: 2022-11-25T21:42:57.979Z
publishedAt: 2022-11-25T21:42:57.979Z
firstPublishedAt: 2022-09-05T14:18:54.161Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: category-commissioning-on-the-seller-config-generates-time-out
locale: pt
kiStatus: Fixed
internalReference: 310527
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Se uma conta tem muitas categorias, na tela de configuração do vendedor ela pode não estar carregando o Comissionamento de Categoria devido a um intervalo de tempo.




## Simulação



- Ir para uma conta com muitas categorias na lista de vendedores https://myaccount.myvtex.com/admin/Site/SellerAlterar.aspx?Id=seller_id
- Tente mudar o Comissionamento da Categoria.



## Workaround


Utilize a atualização via API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-put-seller

