---
title: 'O FetchMore traz valores repetidos entre os campos "de" e "para"'
slug: o-fetchmore-traz-valores-repetidos-entre-os-campos-de-e-para
status: PUBLISHED
createdAt: 2023-05-31T16:38:04.000Z
updatedAt: 2023-05-31T16:38:33.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: fetchmore-bringing-repeated-values-between-the-to-and-from
locale: pt
kiStatus: Scheduled
internalReference: 835396
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A função `fetchMore` está retornando alguns valores duplicados entre a primeira e a segunda página, o que faz com que a página exiba repetidamente alguns dos produtos.

## Simulação

Em algumas contas, o botão que busca mais produtos está exibindo valores repetidos. Isso ocorre porque o componente passa 12 itens (0 a 11) e a consulta feita no GraphQL considera 18 produtos, de modo que 6 produtos podem ser exibidos repetidamente.

A função “Mostrar mais” está usando informações diferentes para trazer o número de produtos para a tela.

## Workaround

Existe uma solução alternativa para esse bug? Se sim, descreva-a aqui. Se não, escreva “N/A” ou “Não há solução alternativa disponível”. Não remova esta seção se não houver solução alternativa, por favor.