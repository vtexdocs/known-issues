---
title: 'O componente “Marcador no mapa” do formulário de endereço não atualiza o endereço completo'
slug: o-componente-marcador-no-mapa-do-formulario-de-endereco-nao-atualiza-o-endereco-completo
status: PUBLISHED
createdAt: 2026-05-15T19:44:34.000Z
updatedAt: 2026-05-15T19:44:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: address-forms-map-marker-component-does-not-update-the-complete-address
locale: pt
kiStatus: Backlog
internalReference: 1407777
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar editar um endereço na página “Minha conta” por meio do componente de marcador de mapa do `vtex.address-form`, apenas o Código Postal e as Coordenadas Geográficas são atualizados.

## Simulação

- Em uma loja que utilize Geolocalização e com o tema nativo do VTEX, acesse a página “Minha conta”
- Acesse a página Endereços, que utiliza componentes `vtex.address-form`
- Tente editar um endereço registrado anteriormente usando o componente de marcador de mapa


Ao mover o componente, apenas as variáveis Código Postal e Geolocalização do endereço serão alteradas, apesar de mais campos serem retornados pela API do Google.

## Workaround

Edite os outros campos de endereço manualmente.