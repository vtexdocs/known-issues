---
title: 'Não é possível fazer upload de novos arquivos de mídia/documentos em um espaço de trabalho de desenvolvimento quando a entidade possui mais de 10 mil documentos'
slug: nao-e-possivel-fazer-upload-de-novos-arquivos-de-midiadocumentos-em-um-espaco-de-trabalho-de-desenvolvimento-quando-a-entidade-possui-mais-de-10-mil-documentos
status: PUBLISHED
createdAt: 2023-04-24T20:00:41.000Z
updatedAt: 2024-06-28T16:07:11.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: not-possible-to-upload-new-mediadocument-in-a-development-workspace-when-entity-has-more-than-10k-documents
locale: pt
kiStatus: Fixed
internalReference: 795940
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Não é possível fazer upload de uma nova mídia/documento em alguma entidade por meio da galeria de mídia (admin/new-cms/media-gallery) ou do editor do site (admin/cms/site-editor) em um ambiente de desenvolvimento quando uma entidade possui mais de 10 mil documentos, pois não utilizamos a funcionalidade de rolagem do Master Data nesses cenários

## Simulação

- Você deve ter pelo menos 10 mil documentos no gerenciador de arquivos (estas duas entidades: `vtex_admin_cms_graphql_content`
`vtex_admin_cms_graphql_contentVariant`


- Crie um espaço de trabalho de desenvolvimento (`vtex use devWorkspace`)
- Acesse: admin/new-cms/media-gallery, neste novo espaço de trabalho de desenvolvimento
- Tente fazer upload de uma nova imagem
- A imagem não será carregada, acionando o erro de rolagem no Master Data

*O mesmo ocorre quando você usa a galeria de mídia através do editor do site

## Workaround

- Carregue as imagens em um espaço de trabalho de produção ou no master e, em seguida, você poderá selecioná-las em um espaço de trabalho de desenvolvimento assim que estiverem criadas
- Realize todos os processos em um ambiente/espaço de trabalho de produção em vez de um ambiente de desenvolvimento (`vtex use prodWorkspace --production`)