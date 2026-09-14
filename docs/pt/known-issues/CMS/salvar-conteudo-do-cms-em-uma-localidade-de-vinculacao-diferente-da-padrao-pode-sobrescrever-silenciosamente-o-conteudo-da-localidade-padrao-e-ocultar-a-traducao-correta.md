---
title: 'Salvar conteúdo do CMS em uma localidade de vinculação diferente da padrão pode sobrescrever silenciosamente o conteúdo da localidade padrão e ocultar a tradução correta.'
slug: salvar-conteudo-do-cms-em-uma-localidade-de-vinculacao-diferente-da-padrao-pode-sobrescrever-silenciosamente-o-conteudo-da-localidade-padrao-e-ocultar-a-traducao-correta
status: PUBLISHED
createdAt: 2026-09-14T22:05:22.000Z
updatedAt: 2026-09-14T22:05:22.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: saving-cms-content-in-a-nondefault-binding-locale-can-silently-overwrite-the-defaultlocale-content-and-hide-the-correct-translation
locale: pt
kiStatus: Backlog
internalReference: 1460967
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao editar o conteúdo de uma página/bloco no Editor de Site em uma loja com suporte a vários idiomas, salvar uma tradução para um idioma diferente do padrão da loja pode, em alguns casos, sobrescrever o conteúdo original do idioma padrão em vez de criar uma tradução separada. Essa corrupção geralmente não é visível por si só, mas se o texto afetado também tiver um espaço extra no início ou no fim, a loja virtual poderá exibir o texto no idioma errado para esse conteúdo, mesmo que a tradução correta exista.

## Simulação

1. Em uma loja com 2 ou mais idiomas suportados, salve um bloco de texto no Editor de Site com o seletor de idioma no idioma **padrão** da loja.

2. Recarregue a página e edite e salve o **mesmo** bloco novamente com o seletor de idioma em um idioma **diferente** (não padrão).

3. Se o texto afetado tiver um espaço em branco no início ou no final, a visualização da página no idioma que deveria exibir o conteúdo original poderá mostrar o texto salvo no outro idioma — mesmo que a tradução correta ainda exista.

## Workaround

Remova manualmente os espaços em branco no início e no final do texto antes de salvar no Editor de Sites.