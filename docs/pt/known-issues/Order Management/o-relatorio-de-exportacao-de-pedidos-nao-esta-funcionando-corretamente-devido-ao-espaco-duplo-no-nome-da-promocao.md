---
title: 'O relatório de exportação de pedidos não está funcionando corretamente devido ao espaço duplo no nome da promoção'
slug: o-relatorio-de-exportacao-de-pedidos-nao-esta-funcionando-corretamente-devido-ao-espaco-duplo-no-nome-da-promocao
status: PUBLISHED
createdAt: 2023-04-06T20:22:31.000Z
updatedAt: 2024-06-28T17:43:59.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-export-report-is-not-working-properly-due-double-space-on-promotion-name
locale: pt
kiStatus: Fixed
internalReference: 786216
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, o sistema de relatórios de pedidos não consegue gerar um arquivo a partir de filtros de promoção cujos nomes contenham espaços duplos; ao tentar gerar o relatório, o sistema gera um erro e a exportação não é realizada, resultando na mensagem "_Exportação concluída. 0 pedidos foram enviados para seu e-mail_".

## Simulação

Crie um pedido utilizando uma promoção cujo nome contenha espaços duplos;

Em seguida, acesse o gerenciamento de pedidos e execute um filtro com essa promoção como condição.

Nesse momento, a interface do OMS normalmente exibirá uma lista de pedidos com a condição selecionada, mas ao selecionar “Exportar pedidos”, a interface exibirá a seguinte mensagem: “_Exportação concluída. 0 pedidos foram enviados para seu e-mail_”.

## Workaround

Filtre os pedidos na interface do usuário por outro parâmetro, por exemplo, data, forma de pagamento etc., depois exporte os pedidos e filtre-os por promoção diretamente no arquivo Excel gerado pelo sistema.