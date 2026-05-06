---
title: 'Amazon Código de erro 13013 ao enviar o produto para o marketplace da Amazon'
slug: amazon-codigo-de-erro-13013-ao-enviar-o-produto-para-o-marketplace-da-amazon
status: PUBLISHED
createdAt: 2023-10-27T11:24:29.000Z
updatedAt: 2023-12-18T17:35:04.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-error-code-13013-while-sending-product-to-amazon-marketplace
locale: pt
kiStatus: Fixed
internalReference: 926656
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, estamos enfrentando um problema ao tentar exportar produtos para a Amazon. Em alguns casos, a própria Amazon retorna o erro 13013. No entanto, às vezes esse erro não é registrado no menu do Bridge, e alguns produtos permanecem com o status de sucesso, embora na verdade apresentem o erro abaixo


    "code": "13013", "message": "Não há registro do código SKU correspondente a esta atualização em sua conta. Isso geralmente ocorre quando há outros problemas com o código SKU.", "severity": "ERROR",

## Simulação

No menu de produtos do Bridge, você pode ver um erro, exibindo o código de erro 13013 ou qualquer outra mensagem, mas ao verificar o Portal da Amazon, esse SKU pode não ter sido exportado para a Amazon.

## Workaround

Existe uma solução alternativa para esse bug? Se sim, descreva-a aqui. Se não, escreva "N/A" ou "Não há solução alternativa disponível.". Não remova esta seção se não houver solução alternativa, por favor.