---
title: 'Afiliação criada na subconta não listada no Admin'
slug: afiliacao-criada-na-subconta-nao-listada-no-admin
status: PUBLISHED
createdAt: 2025-11-14T19:26:28.792Z
updatedAt: 2025-11-14T19:26:28.792Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: affiliation-created-in-subaccount-not-listed-in-admin-affiliation-name-is-already-used-on-retry
locale: pt
kiStatus: Backlog
internalReference: 1300974
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao criar uma nova afiliação de provedor de pagamento em uma **subconta**, o administrador pode confirmar o salvamento, mas a afiliação não aparece na lista de afiliações. Ao tentar novamente com o mesmo nome, a interface do usuário retorna "O nome da afiliação já está sendo usado".
A afiliação existe e pode ser acessada diretamente por meio de seu ID no URL, confirmando a persistência no backend, mas uma inconsistência de listagem/exibição no contexto da subconta.
Esse comportamento impede a reutilização do nome de afiliação pretendido e oculta o registro da grade, causando confusão e bloqueando os cronogramas de teste.
## Simulação


1- Acesse Admin > Afiliações em uma subconta.
2- Crie uma nova afiliação de provedor de pagamento e salve.
3- O administrador confirma a criação, mas a nova afiliação não aparece na lista em /admin/affiliations.
4- Tente criá-la novamente com o mesmo nome; a interface do usuário retorna "O nome da afiliação já está sendo usado".
5- Navegue diretamente usando o ID exato da afiliação no URL; a afiliação é carregada, confirmando que ela existe no backend, mas não é exibida na lista de subcontas
## Workaround



- Use um nome de afiliação diferente na conta principal ou em uma conta diferente em que a listagem funcione normalmente.
- Se o ID exato da afiliação for conhecido, acesse a configuração diretamente por meio do URL para visualizá-la/editá-la, apesar de ela não aparecer na lista. Observação: Isso confirma a existência, mas não corrige o comportamento da listagem.



