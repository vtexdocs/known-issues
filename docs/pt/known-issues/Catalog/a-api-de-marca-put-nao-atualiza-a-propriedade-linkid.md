---
title: 'A API de marca PUT não atualiza a propriedade "LinkID"'
slug: a-api-de-marca-put-nao-atualiza-a-propriedade-linkid
status: PUBLISHED
createdAt: 2025-10-16T20:51:49.847Z
updatedAt: 2025-10-16T20:51:49.847Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: put-brand-api-does-not-update-linkid-property
locale: pt
kiStatus: Backlog
internalReference: 1222015
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, a API disponível para atualizar os dados da marca não está recebendo as informações para atualizar corretamente a propriedade "LinkId".

Se os dados forem enviados modificando essas informações no corpo da solicitação, a resposta da API será exibida como se tivesse sido atualizada, mas, na realidade, nada foi alterado.
## Simulação


1 - Para uma marca existente, atualize seus dados de linkId usando a API mencionada anteriormente.

2 - Verifique o corpo da resposta, que mostrará falsamente que os dados foram atualizados.

3 - Use a API GET Brand and Context para buscar os dados e eles não terão sido atualizados https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/brand/-brandId-


## Workaround


A única solução alternativa é criar uma nova marca com o linkId já correto



