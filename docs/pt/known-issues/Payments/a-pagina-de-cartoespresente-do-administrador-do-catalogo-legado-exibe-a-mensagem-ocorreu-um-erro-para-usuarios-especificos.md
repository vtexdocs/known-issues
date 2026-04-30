---
title: 'A página de cartões-presente do Administrador do Catálogo Legado exibe a mensagem “Ocorreu um erro” para usuários específicos'
slug: a-pagina-de-cartoespresente-do-administrador-do-catalogo-legado-exibe-a-mensagem-ocorreu-um-erro-para-usuarios-especificos
status: PUBLISHED
createdAt: 2026-04-30T16:24:11.010Z
updatedAt: 2026-04-30T16:24:11.010Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: legacy-catalog-admin-gift-card-page-shows-something-went-wrong-for-specific-users
locale: pt
kiStatus: Backlog
internalReference: 1373636
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Alguns usuários não conseguem acessar a página do Vale-presente no Catálogo de Administração antigo (por exemplo, /admin/Site/Vale.aspx). A tela exibe uma mensagem genérica de erro: “Algo deu errado”. O problema é específico do usuário e ocorre quando um filtro inválido é armazenado no servidor para essa página e esse usuário, fazendo com que as chamadas internas ao Sistema de Vale-presente retornem um código HTTP 400.

## Simulação

1. Acesse a página de Vale-Presente do sistema antigo: _/admin/Site/Vale.aspx._
2. Aplique um valor de filtro malformado (por exemplo, colando uma sequência de rótulo+código como `“Código: AAAA-XXXX-BBBB-YYYY”` em vez de um código de resgate puro). A página mantém o filtro por usuário+página no banco de dados.
3. A interface do usuário é recarregada com um erro “Algo deu errado”.

## Workaround

Esta solução alternativa requer outro usuário capaz de acessar a página de Vale-Presente sem encontrar o erro.


1. Na página com falha, obtenha o _VtexIdclientAutCookie_ **do usuário que está enfrentando o problema** e salve-o (ele será usado na etapa 8).
2. Acesse com sucesso a página de Vale-Presente **com outro usuário** e abra as ferramentas de desenvolvedor do navegador (F12).
3. Abra a guia “Rede” nas ferramentas de desenvolvedor. No VTEX Admin, abra o menu de filtros e clique no botão “_Limpar Filtros de Pesquisa_”.
4. Procure a solicitação **método POST** na guia "Rede" chamada "_Vale.aspx_". No _Payload_ dessa solicitação, você deve ver um campo definido como: `ctl00$Conteudo$ctlFiltro$btnLimpar  Limpar Filtros de Pesquisa`
5. Com o botão direito, clique no nome da solicitação (_Vale.aspx_) e selecione a opção "_Copiar como cURL (bash)_".
6. Abra o Postman ou uma ferramenta de API semelhante.
7. Importe/cole a solicitação copiada.
8. Na guia **Headers**, altere o "_Cookie_" para "_VtexIdclientAutCookie_" e defina o **valor do usuário que está enfrentando o problema**.
9. Envie a solicitação.
10. Atualize a página **que estava exibindo o erro**. Espera-se que ela carregue corretamente agora.


%0A