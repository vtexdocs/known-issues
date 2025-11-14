---
title: 'Tradução incorreta para campos diferentes com o mesmo valor original'
slug: traducao-incorreta-para-campos-diferentes-com-o-mesmo-valor-original
status: PUBLISHED
createdAt: 2025-11-14T19:22:57.122Z
updatedAt: 2025-11-14T19:22:57.122Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: wrong-translation-for-different-fields-under-the-same-original-value
locale: pt
kiStatus: Fixed
internalReference: 982848
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O Intelligent Search pode usar a tradução errada para um campo cujo valor no idioma principal é o mesmo entre campos diferentes.

## Simulação


Considerando dois campos (categoria e especificação) de um produto em uma loja com "nl-BE" como idioma padrão e "fr-BE" como um idioma adicional com os seguintes valores:


- categoria
  - nl-BE = médio
  - fr-BE = moyens
- especificação
  - nl-BE = médio
  - fr-BE = midi

Em uma incompatibilidade, a tradução "fr-BE" para o campo de especificação pode ser indexada erroneamente como "moyens" em vez de "midi"
## Workaround


N/A


