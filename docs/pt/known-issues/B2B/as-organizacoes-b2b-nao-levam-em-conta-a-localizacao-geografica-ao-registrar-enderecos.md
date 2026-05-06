---
title: 'As organizações B2B não levam em conta a localização geográfica ao registrar endereços'
slug: as-organizacoes-b2b-nao-levam-em-conta-a-localizacao-geografica-ao-registrar-enderecos
status: PUBLISHED
createdAt: 2023-09-21T16:10:15.000Z
updatedAt: 2023-09-21T16:10:15.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organization-dont-consider-accounts-using-geolocation-when-registering-address
locale: pt
kiStatus: Backlog
internalReference: 904907
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A organização B2B não possui nenhuma configuração para definir um endereço quando as contas utilizam geolocalização, o que faz com que os itens fiquem indisponíveis.

## Simulação

- Configure uma conta para usar geolocalização no checkout;
- Certifique-se de que seja uma conta de países que utilizam opções predefinidas, por exemplo, Argentina, Chile, Colômbia, etc.;
- Crie uma organização;
- Tente comprar qualquer produto; ele estará sempre indisponível.

## Workaround

Altere a configuração para usar apenas o código postal.