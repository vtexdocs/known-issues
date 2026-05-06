---
title: 'Erros no ID do espaço no armazém causam falhas nas solicitações de logística interna'
slug: erros-no-id-do-espaco-no-armazem-causam-falhas-nas-solicitacoes-de-logistica-interna
status: PUBLISHED
createdAt: 2022-09-08T14:20:46.000Z
updatedAt: 2023-01-05T19:33:51.000Z
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

A interface de logística permite que o usuário crie um armazém registrando um ID com espaço, o que afeta diretamente as solicitações feitas a esse armazém e pode causar falhas na atualização do estoque.

## Simulação

1- Acesse Estoque e Envio - Estratégia de Envio - Armazéns

2- Clique em “Criar um armazém”

3- Insira um ID com espaço entre os caracteres e salve.

4- Faça uma consulta com a API Listar todos os armazéns e verifique se o ID foi salvo com espaço;

## Workaround

** **
Para evitar ou ajustar esses cenários, ao criar um armazém, use sublinhados para separar os caracteres, caso seja necessário ter espaços entre caracteres ou palavras.