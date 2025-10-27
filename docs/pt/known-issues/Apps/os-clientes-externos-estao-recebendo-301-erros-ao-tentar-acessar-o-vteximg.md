---
title: 'Os clientes externos estão recebendo 301 erros ao tentar acessar o vteximg'
slug: os-clientes-externos-estao-recebendo-301-erros-ao-tentar-acessar-o-vteximg
status: PUBLISHED
createdAt: 2025-10-16T20:00:00.121Z
updatedAt: 2025-10-16T20:00:00.121Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: external-clients-are-receiving-301-erros-when-trying-to-access-vteximg
locale: pt
kiStatus: Backlog
internalReference: 1150100
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao fazer uma solicitação por meio de um aplicativo para acessar um ponto de extremidade `vteximg` em um cliente externo, a resposta pode ser um 301 (redirecionamento). Isso ocorre porque o `colossus-legacy-proxy` está manipulando a solicitação.

O Kube-Router recebe a solicitação e a envia ao `colossus-legacy-proxy` para ser resolvida. Mas o proxy altera a solicitação de `https://.vteximg.com.br` para `http://.vtexcommercestable.com.br,` e essa solicitação volta para o Kube-Router. Ele pesquisa essa solicitação fora de nossos clusters, mas o recurso original está em `vteximg`, não em `vtexcommercestable`, o que nos leva à resposta de redirecionamento (301). A solicitação segue o caminho inverso e retorna a resposta 301 dizendo que a solicitação não está no `vtexcommercestable`, mas no `vteximg`.
## Simulação


Tente chamar o ponto de extremidade `vteximg` em um ExternalClient.


## Workaround


N/A



