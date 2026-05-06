---
title: 'Divergência de arredondamento de micro-nível nas promoções'
slug: divergencia-de-arredondamento-de-micronivel-nas-promocoes
status: PUBLISHED
createdAt: 2023-12-22T18:48:14.000Z
updatedAt: 2023-12-22T18:48:14.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: promotions-microrounding-divergence
locale: pt
kiStatus: Backlog
internalReference: 957369
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O módulo de promoções arredonda os descontos com até 3 dígitos significativos, o que pode, em casos muito específicos, resultar em pequenas diferenças no preço final do carrinho.

Por exemplo, digamos que tenhamos o seguinte cenário:

Item 1 - $10
Item 2 - $20
Item 3 - $32
____________
Total - $62

E duas promoções aplicáveis a todos eles:

Promoção A - $15 de desconto
Promoção B - 10% de desconto.


Normalmente, o desconto a ser calculado é sequencial, com o valor nominal sendo aplicado primeiro:

$62 - $15 = $47
Então
$47 * 0,9 = $42,3


No entanto, os descontos são distribuídos, mesmo no caso do desconto nominal, proporcionalmente no carrinho, então o que realmente acontece é:

`item 1`:
Valor original = $10
Desconto nominal (15 * 10/62 do carrinho) = -$2,41935484
Desconto percentual esperado (12,5806452 * 0,9) = -$1,25806452
Desconto real percentual = -$1,258

`item 2`:
Valor original = $20
Desconto nominal (15 * 20/62 do carrinho) = -$4,83870968
Desconto percentual esperado (15,1612903 * 0,9) = -$1,51612903
Desconto real em porcentagem = -$1,516

`item 3`:
Valor original = $32
Desconto nominal (15 * 32/62 do carrinho) = -$7,74193548
Desconto esperado em porcentagem (24,2580645 * 0,9) = -$2,42580645
Desconto real percentual = -$2,426


🔎 diferença total: 0,00006452 + 0,000012903 + 0,000019355 = 0,0000270973

Podemos ver, acima, que uma “micro” diferença foi criada.

Se vários itens fossem adicionados, com preços distintos, a este carrinho de exemplo, essa diferença poderia chegar a 1 centavo (0,01) ou mais.

## Simulação

Existem inúmeras maneiras de eventualmente recriar o caso. Felizmente, todas elas são extremamente específicas.

Diante disso, é difícil replicar o problema, mas, na maioria das vezes, é necessário criar um carrinho com vários (~10+) itens diferentes e todos eles com 2 ou mais promoções; idealmente, uma delas sendo um desconto nominal e a outra, um desconto percentual.

## Workaround

n/a



%0A