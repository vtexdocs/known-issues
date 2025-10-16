---
title: Problema com a compatibilidade de versão do Node
slug: problema-com-a-compatibilidade-de-versao-do-node
status: PUBLISHED
createdAt: 2025-10-16T19:23:21.608Z
updatedAt: 2025-10-16T19:23:21.608Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: issue-with-node-version-compatibility
locale: pt
kiStatus: Backlog
internalReference: 1256617
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, nosso hub do construtor é executado na imagem 16.X, o que significa que só é possível criar bibliotecas compatíveis com essa versão. Os aplicativos que usam o builder 7 são executados no nó 20, mas o problema surge durante a criação, pois o hub do builder está sendo executado na versão 16, causando um problema de incompatibilidade.
## Simulação


Ao tentar criar um aplicativo na VTEX. Por exemplo, o erro é o seguinte:

    @vendor/app@1.X.X: O mecanismo "node" é incompatível com este módulo. Versão esperada ">=18.0.0". Obteve "16.X.X "Módulo incompatível encontrado.


O módulo requer a versão 18.0.0 ou superior do Node, mas a versão atual que está sendo usada pelo construtor é a 16.X.X
## Workaround


Como o builder-hub está limitado ao Node 16.X, você precisa usar pacotes que tenham o mecanismo como node >= 16.X. Se estiver usando uma biblioteca específica, será necessário fazer o downgrade da versão da biblioteca para uma compatível.



