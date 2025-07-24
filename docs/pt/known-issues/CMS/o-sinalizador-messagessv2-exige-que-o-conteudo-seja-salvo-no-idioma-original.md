---
title: O sinalizador MessagessV2 exige que o conteúdo seja salvo no idioma original
slug: o-sinalizador-messagessv2-exige-que-o-conteudo-seja-salvo-no-idioma-original
status: PUBLISHED
createdAt: 2025-07-24T18:19:29.407Z
updatedAt: 2025-07-24T18:19:29.407Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: messagessv2-flag-requires-content-to-be-saved-on-the-original-language
locale: pt
kiStatus: -
internalReference: 1260018
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Quando uma loja multilíngue tem o sinalizador MessagesV2 Enable New Page Translation Configuration, ocorre um problema no editor do site. Se o cliente tentar salvar o conteúdo em uma das localidades que não seja a principal, ele poderá receber um erro de: Something Went Wrong.
 ![](https://vtexhelp.zendesk.com/attachments/token/QOndCdSMiZtiGHYTBf0sYstQd/?name=image.png)
Esse erro está relacionado à mensagem: "Original content not found" (Conteúdo original não encontrado).

Mas com esse sinalizador ativo, esse conteúdo não precisa ser salvo na localidade original para ser usado. Portanto, não deve ser necessário salvar o conteúdo.
## Simulação



- Ter uma loja com várias localidades sob a mesma vinculação
- Tente salvar um conteúdo em uma localidade que não seja a principal.
- Se você abrir a guia Rede nas Ferramentas de desenvolvimento, ela mostrará a mensagem "Conteúdo original não encontrado" em uma solicitação
## Workaround


Temos uma versão beta do pages-graphQL, abra um tíquete para solicitar sua instalação.



