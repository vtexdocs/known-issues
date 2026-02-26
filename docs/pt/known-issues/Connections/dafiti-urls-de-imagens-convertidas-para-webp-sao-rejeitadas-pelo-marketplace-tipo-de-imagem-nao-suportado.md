---
title: 'Dafiti URLs de imagens convertidas para WebP são rejeitadas pelo marketplace (tipo de imagem não suportado)'
slug: dafiti-urls-de-imagens-convertidas-para-webp-sao-rejeitadas-pelo-marketplace-tipo-de-imagem-nao-suportado
status: PUBLISHED
createdAt: 2026-02-26T20:57:36.175Z
updatedAt: 2026-02-26T20:57:36.175Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: dafiti-image-urls-converted-to-webp-cause-rejection-by-markeplace-image-type-unsupported
locale: pt
kiStatus: Backlog
internalReference: 1370670
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os vendedores que sincronizam produtos com o marketplace Dafiti podem enfrentar erros ao carregar imagens, mesmo quando o formato original é compatível com o Dafiti, gerando erros do tipo “Extensão de imagem desconhecida/não compatível” no Bridge. Isso ocorre especialmente quando as imagens têm resolução muito alta e são convertidas automaticamente durante o download para um formato não compatível (WebP).

## Simulação

1. Certifique-se de que as dimensões e o formato da imagem sejam compatíveis com o marketplace. 2. Envie ou reprocesse o SKU através do Bridge para que a URL da imagem seja fornecida ao marketplace. 3. Verifique o log/erro de processamento do Bridge: 4. “Erro ao baixar a seguinte URL: {image_url}. Erro: Extensão de tipo de imagem desconhecida/não suportada.” ###

## Workaround

Reduza a resolução da imagem e faça o upload novamente, depois reprocesse o item para o Dafiti. Testes indicam que imagens com resolução muito alta são mais propensas a serem convertidas para WebP pelo serviço de download de imagens. Reduzir a resolução **pode ajudar a evitar** a resposta WebP e **pode impedir** a rejeição do marketplace, mas não é garantido que resolva o problema em todos os casos.