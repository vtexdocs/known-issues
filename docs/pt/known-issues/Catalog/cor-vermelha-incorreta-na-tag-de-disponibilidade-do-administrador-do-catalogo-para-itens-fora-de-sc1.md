---
title: 'Cor vermelha incorreta na tag de disponibilidade do administrador do catálogo para itens fora de sc=1'
slug: cor-vermelha-incorreta-na-tag-de-disponibilidade-do-administrador-do-catalogo-para-itens-fora-de-sc1
status: PUBLISHED
createdAt: 2025-10-16T20:48:41.304Z
updatedAt: 2025-10-16T20:48:41.304Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrect-red-color-in-catalog-admin-availability-tag-for-items-out-of-sc1
locale: pt
kiStatus: Backlog
internalReference: 1212652
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, a exibição da verificação de disponibilidade no administrador do catálogo tem 3 tipos diferentes de cores para sinalizar a disponibilidade de um item:

Verde = ativo e disponível para compra
Vermelho = ativo, mas indisponível para compra
Em branco = inativo

No entanto, o status Vermelho considera apenas a disponibilidade para o canal de vendas padrão da loja (geralmente sc=1). Portanto, se um item estiver disponível para outros canais de vendas, mas não para o padrão, ele ainda deverá exibir uma tag verde, mas será exibido como vermelho.
## Simulação


1 - Em uma loja com vários canais de vendas, crie um produto com disponibilidade para um canal de vendas diferente de sc=1
2 - Verifique sua tag visual de disponibilidade no catálogo, aquela que pode ser vista na listagem do catálogo

 ![](https://vtexhelp.zendesk.com/attachments/token/OpqtMAd4kvj5EW4HUxlAdrBo0/?name=image.png)

3 - Mesmo com o item disponível para outros canais de vendas, como sc=2, a tag só ficará verde se estiver ativa e disponível para sc=1
## Workaround


-



