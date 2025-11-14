---
title: 'O espaço na identificação do depósito causa falhas nas solicitações de logística interna'
slug: o-espaco-na-identificacao-do-deposito-causa-falhas-nas-solicitacoes-de-logistica-interna
status: PUBLISHED
createdAt: 2025-11-14T19:23:55.709Z
updatedAt: 2025-11-14T19:23:55.709Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: space-in-warehouse-id-causes-internal-logistics-requests-to-fail
locale: pt
kiStatus: Fixed
internalReference: 654370
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A interface de usuário de logística permite que um usuário crie um armazém registrando um ID com espaço, o que afeta diretamente as solicitações feitas a esse armazém e pode causar falhas na atualização do inventário.
## Simulação



1- Entre no inventário e na expedição - Estratégia de expedição - Armazéns

2- Clique em create a Warehouse (criar um armazém)

3- Digite um Id com espaço entre os caracteres e salve.

4- Faça um get com a API List all Warehouse e veja se o ID foi salvo com espaço;
## Workaround


** **
Para evitar ou ajustar esses cenários, ao criar um depósito, use sublinhados para separar caracteres, caso seja necessário ter espaços entre caracteres ou palavras.



