---
title: 'Problema de compatibilidade de versão do Node.js'
slug: problema-de-compatibilidade-de-versao-do-nodejs
status: PUBLISHED
createdAt: 2025-07-08T17:31:55.000Z
updatedAt: 2026-06-26T17:13:56.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: issue-with-node-version-compatibility
locale: pt
kiStatus: Fixed
internalReference: 1256617
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, nosso hub de compilação roda na imagem 16.X, o que significa que só é possível compilar bibliotecas compatíveis até essa versão. Aplicativos que usam o builder 7 rodam no Node 20, porém o problema surge durante a compilação, pois o hub de compilação está rodando na versão 16, causando um problema de incompatibilidade.

## Simulação

Ao tentar compilar um aplicativo no VTEX, por exemplo, o erro é o seguinte:

@vendor/app@1.X.X: O mecanismo "node" é incompatível com este módulo. Versão esperada ">=18.0.0". Obtida "16.X.X". Módulo incompatível encontrado.

O módulo requer a versão 18.0.0 ou superior do Node, mas a versão atual em uso pelo builder é a 16.X.X.

## Workaround

Como o builder-hub é limitado ao Node 16.X, você precisa usar pacotes que tenham o mecanismo como Node >= 16.X. Se você estiver usando uma biblioteca específica, precisará fazer o downgrade da versão da biblioteca para uma versão compatível.