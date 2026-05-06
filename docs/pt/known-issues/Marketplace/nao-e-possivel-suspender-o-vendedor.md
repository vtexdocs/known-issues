---
title: 'Não é possível suspender o vendedor'
slug: nao-e-possivel-suspender-o-vendedor
status: PUBLISHED
createdAt: 2022-10-20T18:31:04.000Z
updatedAt: 2023-05-11T14:08:26.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: unable-to-pause-seller
locale: pt
kiStatus: Fixed
internalReference: 682151
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Às vezes, a plataforma não consegue suspender o vendedor pela interface de administração ou pela API.

A mensagem de erro exibida na interface do usuário é genérica. No entanto, se o erro pela API for:
{
"error": "Canal inválido",
"data": {
   "code": "SRAPI-408"
}
}

Então, o erro está ocorrendo porque a validação do afiliado (validação do canal) está falhando.

Se o vendedor excluir o afiliado (ou alterar o ID do afiliado) por conta própria, o marketplace não conseguirá suspender o vendedor.

## Simulação

1. Na conta do vendedor, exclua o afiliado do marketplace;
2. Na conta do marketplace, tente suspender o vendedor no Admin;
3. Verifique se uma mensagem de erro genérica foi enviada.
4. Tente suspender o mesmo vendedor usando a API de atualização de vendedor;
5. Verifique se a mensagem de erro é semelhante/igual à do erro acima;

## Workaround

Para poder suspender o vendedor, existem 3 soluções alternativas:

- Exclua as informações de `ID de afiliado` e `Política Comercial` na seção do vendedor chamada "Integração" na interface do usuário
- ![](https://vtexhelp.zendesk.com/attachments/token/Pp9HF1oSjoUYYJdnmKBUSnYVO/?name=image.png)
- Peça ao vendedor para recriar o afiliado como estava antes e, em seguida, suspenda o vendedor. (depois, o vendedor poderá excluir o afiliado novamente);
- Use a interface de gerenciamento de vendedores antiga para realizar essa ação: www.myaccount.myvtex.com/admin/site/seller.aspx