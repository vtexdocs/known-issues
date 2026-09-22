---
title: 'A seleção de vendedores disponível na política comercial não está funcionando corretamente.'
slug: a-selecao-de-vendedores-disponivel-na-politica-comercial-nao-esta-funcionando-corretamente
status: PUBLISHED
createdAt: 2022-02-01T23:55:11.000Z
updatedAt: 2026-09-22T21:42:12.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: selection-of-sellers-available-in-the-commercial-policy-is-not-working-properly
locale: pt
kiStatus: Fixed
internalReference: 515480
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A alteração na disponibilidade de um vendedor em uma política comercial não está sendo reconhecida corretamente no catálogo. Isso pode causar dois cenários: um produto de um vendedor não selecionado fica disponível ou um produto de um vendedor selecionado fica indisponível.

## Simulação

Cenário 1
- Remover um vendedor de uma política comercial pela interface do usuário `/admin/Site/StoreForm.aspx?Id={{SC}}`
- Verificar pela rota `http://portal.vtexcommercestable.com.br/api/seller-register/pvt/sellers/?an=` se a política comercial foi removida do campo _availableSalesChannel_

Cenário 2
- Adicionar um vendedor a uma política comercial pela interface do usuário
- Verificar pela rota `http://portal.vtexcommercestable.com.br/api/seller-register/pvt/sellers/?an=` se a política comercial está disponível no campo _availableSalesChannel_

## Workaround

Salvar as configurações da política comercial novamente pela interface do usuário