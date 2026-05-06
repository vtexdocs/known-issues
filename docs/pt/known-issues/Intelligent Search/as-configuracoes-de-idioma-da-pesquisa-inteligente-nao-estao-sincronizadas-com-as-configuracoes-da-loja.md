---
title: 'As configurações de idioma da Pesquisa Inteligente não estão sincronizadas com as configurações da loja'
slug: as-configuracoes-de-idioma-da-pesquisa-inteligente-nao-estao-sincronizadas-com-as-configuracoes-da-loja
status: PUBLISHED
createdAt: 2024-02-27T21:30:23.000Z
updatedAt: 2024-03-06T15:38:05.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-language-settings-not-in-sync-with-store-configurations
locale: pt
kiStatus: Backlog
internalReference: 990343
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O idioma principal da Pesquisa Inteligente não é atualizado automaticamente de acordo com a política comercial e as configurações de vinculação, o que faz com que fique desatualizado.

Para lojas com um único idioma, os conteúdos da Pesquisa Inteligente, como sinônimos, regras de merchandising, banners de pesquisa e redirecionamentos de pesquisa, são criados com base nas configurações de idioma registradas na vinculação. A vitrine é renderizada com base também na política comercial, que pode substituir a vinculação e não corresponder ao conteúdo registrado.

Para lojas multilíngues, isso também pode afetar as traduções fornecidas na vitrine e nas APIs.

## Simulação

- Crie uma loja em "pt-BR";
- Habilite/configure o módulo de Pesquisa Inteligente;
- Altere a política comercial de "pt-BR" para "en-US";
- Idioma único:
  - Mantenha a ligação como "pt-BR";
  - Crie conteúdo de Pesquisa Inteligente;
  - Acesse a página da loja que deveria apresentar o conteúdo registrado;
  - O conteúdo/comportamento não será visível.
- Multilíngue:
  - Registre os produtos em inglês;
  - Adicione o português como segundo idioma/idioma alternativo nas ligações;
  - Registre traduções do catálogo para o português;
  - Nesse cenário, a navegação entre os dois idiomas pode apresentar problemas.

## Workaround

Certifique-se de que as ligações e as políticas comerciais correspondam; caso contrário, o conteúdo da pesquisa será inválido.

O conteúdo registrado anteriormente não seguirá o novo idioma principal se ele for alterado; ele permanecerá vinculado ao idioma de criação. É necessário registrar pelo menos duas configurações regionais na configuração de ligações (o idioma antigo/inesperado e o novo/esperado) para que o seletor de idioma apareça no editor de conteúdo, permitindo que você os corrija manualmente para usar o idioma esperado. Outro método é recriar o conteúdo.

Em alguns cenários, como traduções multilíngues e de catálogos, você também pode precisar entrar em contato com nosso suporte para revisar as configurações internas de idioma da Pesquisa Inteligente.


%0A