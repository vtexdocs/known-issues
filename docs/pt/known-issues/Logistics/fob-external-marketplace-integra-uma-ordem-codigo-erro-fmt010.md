---
title: "FOB External Marketplace integra uma ordem (código Erro: 'FMT010')"
id: 3qzV4zJRkPIwQnAZuK5dWu
status: PUBLISHED
createdAt: 2022-02-25T16:33:49.641Z
updatedAt: 2024-02-16T20:26:31.795Z
publishedAt: 2024-02-16T20:26:31.795Z
firstPublishedAt: 2022-02-25T16:33:50.398Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: fob-external-marketplace-integrate-an-order-erro-code-fmt010
locale: pt
kiStatus: No Fix
internalReference: 532377
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O mercado externo (parceiro) ao tentar integrar as ordens FOB está recebendo o erro:
"código": "FMT010",`
"mensagem": "O SLA selecionado para o item <Description_SKU_Id> não está disponível"

O que é FOB, siga a documentação com a descrição:
https://help.vtex.com/en/tutorial/como-funciona-o-frete-when-o-marketplace-faz-a-entrega--EY1l6tYW3IUquwwwcQqwQ?&utm_source=autocomplete




## Simulação


É possível realizar a simulação ao tentar integrar-se com um parceiro (externo), com uma Política de Entrega "Delivery" habilitada, teremos sucesso, mas ao desabilitar esta Política de Entrega teremos o erro: "código": "FMT010".




## Workaround


Para este caso temos uma solução que é a necessidade de configurar uma Política de Embarque "Delivery".

