---
title: A Faststore está enviando eventos de pesquisa em páginas de coleções com o ID da coleção para relatórios IS
slug: a-faststore-esta-enviando-eventos-de-pesquisa-em-paginas-de-colecoes-com-o-id-da-colecao-para-relatorios-is
status: PUBLISHED
createdAt: 2025-10-16T20:28:30.574Z
updatedAt: 2025-10-16T20:28:30.574Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-is-sending-search-events-on-collection-pages-with-the-collection-id-to-is-reports
locale: pt
kiStatus: Fixed
internalReference: 1159040
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando um evento de pesquisa é feito em uma página de coleção nas lojas Faststore, a resposta do módulo de análise IS também contém o ID da coleção. Isso também pode ter efeitos ruins no preenchimento automático.
## Simulação



- Tente entrar em uma página de coleção
- Aguarde até que o módulo IS Analytics seja atualizado com essas informações
- O ID da coleção aparecerá onde deveria estar apenas o nome da coleção


## Workaround


N/A



