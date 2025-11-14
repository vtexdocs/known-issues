---
title: 'Os PDPs Faststore não são regionalizados'
slug: os-pdps-faststore-nao-sao-regionalizados
status: PUBLISHED
createdAt: 2025-11-14T19:21:18.674Z
updatedAt: 2025-11-14T19:21:18.674Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-pdps-are-not-regionalized
locale: pt
kiStatus: Fixed
internalReference: 1088656
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A Fastsore usa a busca inteligente para carregar o PDP, mas não usa o regionID para carregá-lo em lojas regionalizadas. Isso leva a problemas com a disponibilidade dos itens. Além disso, usamos a propriedade `hideUnavailableItems=true` na consulta para carregar o PDP. Isso pode levar a inconsistências entre o PLP (que é regionalizado) e o PDP.
## Simulação


Tente procurar um produto que tenha estoque no regionID em que você está regionalizado. Se esse produto não tiver estoque no vendedor abrangente e somente em vendedores específicos não relacionados a esse regionID, o PLP e o PDP poderão ter informações diferentes
## Workaround


Ative a opção "ShowIfNotAvailable" nos produtos via Catalog para minimizar os efeitos desse problema.
Adicione o vendedor como abrangente para que o produto seja devolvido


