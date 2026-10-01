---
title: 'A exportação de CSV para auditoria falha para conjuntos de resultados grandes, embora a interface do usuário relate sucesso.'
slug: a-exportacao-de-csv-para-auditoria-falha-para-conjuntos-de-resultados-grandes-embora-a-interface-do-usuario-relate-sucesso
status: PUBLISHED
createdAt: 2026-10-01T17:27:38.000Z
updatedAt: 2026-10-01T17:27:38.000Z
contentType: knownIssue
productTeam: VTEX Shield
author: 2mXZkbi0oi061KicTExNjo
tag: VTEX Shield
slugEN: audit-csv-export-fails-for-large-result-sets-while-the-ui-reports-success
locale: pt
kiStatus: Backlog
internalReference: 1468936
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A auditoria de exportações em CSV pode falhar para conjuntos de resultados grandes (longos intervalos de datas ou muitos eventos), mesmo que a pesquisa mostre os resultados corretamente na interface do usuário. Em alguns casos, a interface do usuário exibe uma mensagem de sucesso, mas o e-mail nunca chega; em outros, exibe a mensagem "A exportação não pôde ser concluída. Tente novamente." Não há um limite seguro fixo, pois a falha depende do tamanho total dos eventos retornados, e não apenas do número de eventos ou dias.

## Simulação

1. Acesse **Administração > Configurações da conta > Auditoria** (`/admin/audit`).

2. Filtre por um aplicativo com muitos eventos (por exemplo, Editor do Site, Promoções ou Catálogo) ou por uma ação com muitos registros (por exemplo, `Login do Usuário`), sem outros filtros.

3. Selecione um longo intervalo de datas (por exemplo, 30 dias ou mais) que retorne milhares de eventos.

4. Observe que os resultados são exibidos corretamente na interface do usuário.
5. Abra as Ferramentas de Desenvolvedor do navegador (F12 ou Cmd+Option+I), vá para a aba **Rede** e digite `graphql` no campo de filtro.
6. Clique em **Exportar para CSV**.
7. Observe o que a interface do usuário mostra: a mensagem de sucesso (mas o e-mail com o arquivo nunca chega, nem mesmo na pasta de spam) ou o erro "A exportação não pôde ser concluída. Tente novamente."

**Verificando o status real da exportação via Postman**

1. Na aba **Rede**, encontre a requisição `POST` para `https://{accountName}.myvtex.com/_v/private/graphql/v1?...` cujo payload contém a consulta `exportLogStatus`. Para encontrá-la, clique em cada requisição `graphql` e abra a aba **Payload**, ou digite `exportLogStatus` na busca da Rede (`Cmd/Ctrl+F`).
2. Clique com o botão direito na requisição e escolha **Copiar > Copiar como cURL (bash)**.
3. No Postman, clique em **Importar**, cole o comando cURL como texto bruto e confirme. Isso cria uma solicitação com a URL, os parâmetros de consulta, os cabeçalhos (incluindo o cookie de autenticação) e o corpo já preenchidos.
4. Clique em **Enviar** e verifique a resposta:

json

{ "data": { "exportLogStatus": { "status": "failed", "downloadUrls": [], "__typename": "ExportLogsStatus" } }}

Se `status` for `failed` e `downloadUrls` estiver vazio, a tarefa de exportação falhou, mesmo que a interface do usuário tenha exibido a mensagem de sucesso. Quando uma exportação é bem-sucedida, `downloadUrls` contém o(s) link(s) para o arquivo gerado.

> **Observação:** o cURL copiado contém o token de sessão do usuário (`VtexIdclientAutCookie`). Não o cole em tickets, Slack ou comentários do KI. Se você compartilhar a solicitação, remova o cookie primeiro.

## Workaround

- **Tentar novamente a exportação:** Em alguns casos, tentar novamente a mesma exportação após alguns minutos funciona, pois os dados são parcialmente armazenados em cache após a primeira tentativa. Aguarde a conclusão da tentativa anterior (cerca de 20 minutos) antes de tentar novamente, já que apenas uma exportação por conta é processada por vez.

- **Dividar a exportação em períodos menores:** Se tentar novamente não funcionar, divida o intervalo de datas em intervalos menores (por exemplo, semanal ou diário em vez de mensal) e exporte cada um separadamente.

- **Usar filtros mais específicos:** Quando possível, combine filtros de aplicativo e de ação para reduzir o número de eventos por exportação.