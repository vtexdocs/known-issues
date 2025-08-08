---
title: "O modelo 'relatorio-de-importacao-de-estoque' não suporta multi-linguagem"
id: 5R8b0jnibOQdXupo0hIyts
status: PUBLISHED
createdAt: 2022-05-25T18:25:43.394Z
updatedAt: 2024-02-16T20:24:28.851Z
publishedAt: 2024-02-16T20:24:28.851Z
firstPublishedAt: 2022-05-25T18:25:43.976Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: the-template-relatoriodeimportacaodeestoque-does-not-support-multilanguage
locale: pt
kiStatus: No Fix
internalReference: 585906
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, a mensagem de retorno do relatório de importação do inventário está em _pt-BR_. Assim, quando a importação é concluída, o e-mail acionado através do modelo "relatorio-de-importacao-de-estoque" tem as informações em _pt-BR_, não considerando o local da loja.



## Simulação



1. Acessar o inventário de importação (Pedidos > Inventário e Expedição > Estratégia de Expedição > Armazéns > Itens de importação);
2. Anexe o arquivo a ser importado;
3. Ao final do processo de importação, o e-mail será enviado com o resultado da importação. Podemos ver que a mensagem não está respeitando o idioma da conta:

![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/pt/known-issues/Logistics/o-modelo-relatoriodeimportacaodeestoque-nao-suporta-multilinguagem_1.png)

"Importação concluída! Total de itens importados: 6. Total de itens não importados: 0,`"




## Workaround


Não há solução.

