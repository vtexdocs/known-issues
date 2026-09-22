---
title: 'Dafiti URLs de imagens convertidas para WebP causam rejeição pelo marketplace (tipo de imagem não suportado)'
slug: dafiti-urls-de-imagens-convertidas-para-webp-causam-rejeicao-pelo-marketplace-tipo-de-imagem-nao-suportado
status: PUBLISHED
createdAt: 2026-02-26T23:56:52.000Z
updatedAt: 2026-09-22T19:16:26.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: dafiti-image-urls-converted-to-webp-cause-rejection-by-markeplace-image-type-unsupported
locale: pt
kiStatus: Backlog
internalReference: 1370670
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os vendedores que sincronizam produtos com o marketplace Dafiti podem enfrentar erros no upload de imagens, mesmo quando o formato original é compatível com o Dafiti, gerando erros de “Extensão de tipo de imagem desconhecida/não compatível” no Bridge.

Isso ocorre principalmente quando as imagens têm resolução muito alta e são convertidas automaticamente durante o download para um formato não compatível (WebP).

## Simulação

1. Certifique-se de que as dimensões e o formato da imagem sejam compatíveis com o marketplace.

2. Envie ou processe novamente o SKU via Bridge para que a URL da imagem seja fornecida ao marketplace.

3. Verifique o log/erro de processamento do Bridge:
4. “Erro ao baixar a seguinte URL: {image_url}. Erro: Extensão de tipo de imagem desconhecida/não compatível.”

###

## Workaround

Reduza a resolução da imagem e faça o upload novamente, depois processe o item novamente no Dafiti.

Testes indicam que imagens de resolução muito alta têm maior probabilidade de serem convertidas para WebP pelo serviço de download de imagens. Diminuir a resolução **pode ajudar a evitar** a resposta WebP e **pode impedir** a rejeição na loja de aplicativos, mas não há garantia de que resolverá o problema em todos os casos.