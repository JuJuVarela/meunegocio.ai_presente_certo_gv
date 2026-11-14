# Passo a Passo do Funcionamento do MVP

## Fluxo do Cliente

1. O usuário abre a página inicial do site.  
2. Preenche o formulário descrevendo a pessoa que vai presentear.  
3. Recebe até 6 sugestões de presentes, com preço aproximado e indicação da loja localizada em Governador Valadares.  
4. Ao clicar no botão do WhatsApp, abre uma conversa com o número **(33) 99964-4414**, já com uma mensagem automática contendo o pedido.

---

## Testes Realizados

- Preenchi o formulário no navegador duas vezes.  
- As sugestões apareceram corretamente.  
- O link do WhatsApp abriu com o número e mensagem corretos.  
- Após os testes, apaguei os pedidos de teste do sistema.

---

## Painel do Administrador

- A primeira conta criada torna-se a dona do painel.  
- Criei minha própria conta para ser a administradora do sistema.  
- Usuários não autenticados são redirecionados para a tela de login.

### Como acessar o painel:

1. Clique em **"Área do administrador"** no rodapé do site.  
2. Clique em **"Primeiro acesso? Criar conta"**.  
3. Confirme o cadastro através do link enviado por e-mail.

### Funcionalidades do painel:

- Visualizar pedidos realizados.  
- Registrar contatos feitos pelo WhatsApp.  
- Marcar quais pedidos viraram clientes reais.  
- Acompanhar status de entrega.  
- Criar lembretes para follow-up.  
- Gerenciar lojas e catálogo de produtos.

---

## Otimizações para manter o site leve e economizar créditos

- Tudo roda no Lovable Cloud, incluindo dados, login e pedidos, sem usar serviços externos.  
- As sugestões são feitas por um filtro simples do catálogo, sem uso de inteligência artificial.  
- O sistema não executa processos automáticos regulares.  
- Reduzi o tamanho da foto principal e o número de fontes carregadas.  
- Removi partes do site que não eram utilizadas.  
- O painel busca dados com menor frequência para economizar recursos.

