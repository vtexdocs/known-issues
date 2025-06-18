---
title: A inserção de vários valores de especificação não está funcionando no catálogo legado
slug: a-insercao-de-varios-valores-de-especificacao-nao-esta-funcionando-no-catalogo-legado
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inserting-multiple-specification-values-not-working-on-legacy-catalog
locale: pt
kiStatus: Backlog
internalReference: 1246453
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, há uma função na experiência do catálogo legado na qual você pode adicionar vários valores a um campo usando uma quebra de linha (Exemplo de caminho de URL: https://mystore.vtexcommercestable.com.br/admin/site/CampoValorForm.aspx?idCategoria=123&idCampo=456&flagSku=0#).

A interface do usuário diz que você pode adicionar vários valores usando uma quebra de linha, como

"Valor A
Valor B
Valores C"

E isso adicionaria 3 valores distintos. No entanto, essa usabilidade não está funcionando no momento e, ao tentar fazer isso, a interface do usuário é atualizada e, em vez disso, é exibida uma mensagem "Try this Tip!" (que não fornece nenhuma informação útil).

Os dados, em si, não são salvos.
## Simulação


1 - Acesse a interface do usuário do valor do campo para o catálogo legado (Categorias --> Campos (produto ou SKU) --> Valores --> Adicionar valores)

2 - Tente adicionar vários valores por meio de uma quebra de linha, como no exemplo abaixo:

 ![](https://vtexhelp.zendesk.com/attachments/token/6pVnoX8kHuMUq0fXp571JIBtZ/?name=image.png)

3 - Você não conseguirá e uma mensagem "Try this tip" será exibida.


## Workaround


Há várias soluções alternativas:

1 - Adicione esses campos um a um usando a mesma interface do usuário
2 - Adicione-os por meio da API
3 - Adicione-os por meio da importação de planilhas



