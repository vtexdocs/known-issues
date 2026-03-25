---
title: 'O botão “Publicar” não responde ocasionalmente durante a criação/atualização de produtos no Portal do Vendedor'
slug: o-botao-publicar-nao-responde-ocasionalmente-durante-a-criacaoatualizacao-de-produtos-no-portal-do-vendedor
status: PUBLISHED
createdAt: 2026-03-25T17:03:28.501Z
updatedAt: 2026-03-25T17:03:28.501Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: publish-button-intermittently-unresponsive-in-seller-portal-product-creationupdate
locale: pt
kiStatus: Backlog
internalReference: 1383511
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em algumas contas do Portal do Vendedor, clicar no botão “Publicar” durante a criação ou atualização de um produto, ocasionalmente, não produz nenhum efeito, e a janela modal de confirmação não aparece. Às vezes, a janela modal aparece, mas o botão “Atualizar” seguinte não executa nenhuma ação. O problema se reproduz em vários vendedores e navegadores, mas não de forma determinística, e parece estar relacionado a um fluxo do front-end em que a alteração é enviada, mas a interface do usuário fica travada. Os cenários afetados incluem a criação de novos produtos e a atualização de produtos existentes por meio do Portal do Vendedor.

## Simulação

1) Abra o Portal do Vendedor e comece a criar um novo produto ou abra um produto existente para editar. Use dados típicos de produto;
2) Clique no botão “Publicar”. Observe que, ocasionalmente, a janela modal de confirmação não abre e nenhum erro de interface do usuário é exibido;
3) Verifique a guia “Rede” das Ferramentas do Desenvolvedor do navegador (F12); nenhuma função `createProduct` ou `updateProduct` foi executada nos logs.

## Workaround

Registre o produto por meio da API do Portal do Vendedor.