---
title: 'O FastStore não retorna informações de SEO do produto (título e meta descrição) em consultas GraphQL.'
slug: o-faststore-nao-retorna-informacoes-de-seo-do-produto-titulo-e-meta-descricao-em-consultas-graphql
status: PUBLISHED
createdAt: 2023-11-01T20:08:19.000Z
updatedAt: 2026-10-02T15:53:47.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-does-not-return-product-seo-information-title-and-meta-description-on-graphql-query
locale: pt
kiStatus: Fixed
internalReference: 929029
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao executar a consulta de produto na API GraphQL do FastStore, o campo `seo` deveria retornar as informações de SEO registradas para o produto no Catálogo ("Título SEO" e "Descrição da Meta Tag"). Em vez disso, ele retorna o nome e a descrição do produto. Como resultado, as tags `<title>` e `<meta name="description">` da página de detalhes do produto (PDP) também exibem o nome e a descrição do produto em vez dos valores de SEO.

Esse comportamento afeta todas as versões do FastStore anteriores à 4.4.0. A partir da versão 4.4.0, as informações de SEO são retornadas corretamente, desde que a loja tenha sido criada e implantada após 14 de agosto de 2026.

## Simulação

- No painel de administração, preencha os campos "Título SEO" e "Descrição da Meta Tag" do produto com valores diferentes do nome e da descrição do produto;

- Acesse o ambiente de testes GraphQL da loja e execute a consulta de produto com os campos de SEO ou abra a PDP e visualize seu código-fonte;
- Compare o `title` e a `description` retornados (ou as tags `<title>` e `<meta name="description">`) com os campos de SEO registrados no Catálogo. Nas versões afetadas, os valores retornados são o nome e a descrição do produto, e não os campos de SEO.

Simulação com a versão 1 (sem correção):

![](https://vtexhelp.zendesk.com/attachments/token/dEgo1w6gMc0YT4mOOErfo9WiU/?name=image.png)

![](https://vtexhelp.zendesk.com/attachments/token/r85OfGmL9GxB5vJ42LRdWhGao/?name=image.png)

Simulação com a versão 4 (após atualização):

![](https://vtexhelp.zendesk.com/attachments/token/yVJbuEPpNRV7g1aGf6ihRxYUl/?name=image.png)

Ver código-fonte:

![](https://vtexhelp.zendesk.com/attachments/token/efGeO2PZDpwSEcXQb2Ul2mjBo/?name=image.png)

## Workaround

Atualize a loja para a versão 4.4.0 ou posterior do FastStore e execute uma nova compilação/implantação (isso deve ser feito após 14 de agosto de 2026). Com os campos de SEO preenchidos corretamente no Catálogo, as informações serão retornadas conforme o esperado.

Para lojas que ainda não podem ser atualizadas, os outros campos StoreSEO podem ser recuperados estendendo o esquema GraphQL, conforme descrito na documentação: https://v1.faststore.dev/reference/api/objects/#storeseo

No entanto, os campos `title` e `description` ainda apresentarão o problema nesse caso.

Apenas um lembrete de que o FastStore 1.0 e 2.0 não recebem mais atualizações:

![](https://vtexhelp.zendesk.com/attachments/token/rKD45Q5kLSCzy3mIsz5TmAANU/?name=image.png)

Você pode verificar nossas versões aqui: https://developers.vtex.com/docs/guides/faststore/getting-started-faststore-versions-and-support-levels