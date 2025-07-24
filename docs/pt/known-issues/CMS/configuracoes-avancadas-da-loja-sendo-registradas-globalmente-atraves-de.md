---
title: 'Configurações avançadas da loja sendo registradas globalmente através de'
id: 6RQtg8QEaaY25hdEh9KvBD
status: PUBLISHED
createdAt: 2023-04-04T03:15:55.537Z
updatedAt: 2023-04-04T03:15:56.015Z
publishedAt: 2023-04-04T03:15:56.015Z
firstPublishedAt: 2023-04-04T03:15:56.015Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: advanced-store-settings-being-registered-globally-insted-of-by-binding
locale: pt
kiStatus: Backlog
internalReference: 783835
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Ao salvar as configurações avançadas divididas por encadernação, o sistema está registrando para todas elas, mas, ao solicitar estes valores por tempo de execução, obtemos os valores a partir da encadernação e não do contexto global:

https://github.com/vtex-apps/store/blob/46e3df3ecba20170fc3a6eebf12370969e3b5abf/react/components/ProductTitleAndPixel.tsx#L186


##

## Simulação



Você precisará de uma loja com encadernação múltipla e habilitar a encadernação para as configurações da loja em admin/cms/store:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/CMS/configuracoes-avancadas-da-loja-sendo-registradas-globalmente-atraves-de_1.png)

Salve suas configurações avançadas e verifique as configurações de sua loja vtex:

https://infra.io.vtex.com/apps/v0///apps/vtex.store/settings

Você notará que as configurações avançadas estarão fora dos contextos de vinculação



##

## Workaround



Adicione as configurações que você deseja através de um PUT na chave de configurações dentro de um dos objetos da encadernação:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/CMS/configuracoes-avancadas-da-loja-sendo-registradas-globalmente-atraves-de_2.png)




