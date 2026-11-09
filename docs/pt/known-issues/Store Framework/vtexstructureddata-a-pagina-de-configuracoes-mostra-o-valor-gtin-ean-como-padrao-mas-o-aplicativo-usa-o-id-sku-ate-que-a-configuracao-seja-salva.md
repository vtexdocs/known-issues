---
title: 'vtex.structured-data A página de configurações mostra o valor GTIN “EAN” como padrão, mas o aplicativo usa o ID SKU até que a configuração seja salva.'
slug: vtexstructureddata-a-pagina-de-configuracoes-mostra-o-valor-gtin-ean-como-padrao-mas-o-aplicativo-usa-o-id-sku-ate-que-a-configuracao-seja-salva
status: PUBLISHED
createdAt: 2026-11-09T21:15:34.000Z
updatedAt: 2026-11-09T21:15:34.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: vtexstructureddata-settings-page-shows-gtin-value-ean-as-default-but-the-app-uses-the-sku-id-until-the-setting-is-saved
locale: pt
kiStatus: Backlog
internalReference: 1482707
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A página de configurações do `vtex.structured-data` mostra o **EAN** como o valor GTIN padrão selecionado. No entanto, se ninguém tiver salvo as configurações do aplicativo, o aplicativo usará um valor padrão diferente (`itemId`, ou seja, o ID SKU da VTEX). O valor padrão em `manifest.json` (`"ean"`) e o valor padrão no código (`DEFAULT_GTIN_VALUE = 'itemId'`) não são os mesmos.

Como resultado, as lojas que nunca salvaram a configuração enviam o ID SKU no campo `gtin` do JSON-LD, preenchido com zeros à esquerda (por exemplo, o ID SKU 512839 torna-se `00512839`), e o campo `sku` mostra o mesmo valor. O EAN registrado no catálogo não é usado.

## Simulação

1. Use uma conta onde o `vtex.structured-data` esteja instalado e as configurações do aplicativo nunca tenham sido salvas.

2. No painel de administração, abra as configurações do aplicativo (`/admin/apps/vtex.structured-data@<versão>/setup`). O valor do GTIN mostra **EAN** como selecionado.
3. Sem salvar, abra a página de detalhes do produto (PDP) de um produto que tenha um EAN registrado no catálogo.
4. Inspecione o script `application/ld+json`.
5. Resultado: `gtin` e `sku` (em `Produto` e `Oferta`) mostram o ID do SKU preenchido com zeros, e não o EAN.

## Workaround

1. Certifique-se de que o aplicativo esteja instalado na conta (`vtex install vtex.structured-data`). Se for apenas uma dependência, as configurações não poderão ser alteradas.

2. No painel de administração, abra as configurações do aplicativo, selecione **EAN** como o valor do GTIN e clique em **Salvar**.

Após salvar, `gtin` mostra o EAN. Se o produto não tiver um EAN válido, o campo `gtin` ficará vazio e o campo `sku` exibirá o ID do SKU.