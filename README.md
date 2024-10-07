# Sistema de Controle de Estoque - ERP em Nuvem

**Descrição do Projeto**

O Sistema de Controle de Estoque é uma aplicação ERP em nuvem desenvolvida para gerenciar o estoque de produtos de uma empresa de forma eficiente e integrada. O sistema é capaz de realizar o cadastro de produtos, fornecedores, registrar compras, vendas e perdas, além de manter um histórico detalhado das movimentações de estoque. Este projeto visa otimizar a gestão de estoques e evitar problemas como rupturas, excesso de produtos e inconsistências no inventário.

## Funcionalidades Principais

* **Cadastro de Produtos:** Inclui nome, código, categoria, nível de estoque, quantidade mínima e máxima, localização e observações.
* **Gestão de Fornecedores:** Gerenciamento de fornecedores com informações detalhadas como CNPJ, contato e endereço.
* **Registro de Compras e Vendas:** Automação de entradas e saídas de produtos, com geração de movimentações de estoque e controle de NF-e.
* **Controle de Perdas:** Registro de perdas com motivo e quantidade, ajudando a rastrear problemas como quebras e furtos.
* **Movimentações de Estoque:** Manutenção de um histórico detalhado de todas as entradas e saídas, com consultas e relatórios.
* **Sistema de Login e Usuários:** Autenticação com permissões específicas para cada tipo de usuário (admin, estoquista, financeiro).


## Tecnologias Utilizadas

* **Backend:** MySQL para banco de dados relacional, Python (Django/Flask) para API RESTful.
* **Frontend:** React.js para interfaces interativas e responsivas.
* **Infraestrutura:** Hospedado em serviços de nuvem como AWS, Google Cloud ou Azure.



# API para "MICRO" MVP de Agendamentos

## Users Table Schema

| Campo      | Tipo     |
|------------|----------|
| `id`       | Int      |
| `name`     | String   |
| `email`    | String   |
| `password` | String   |
| `phone`    | String   |
| `city`     | String   |
| `isActive` | Boolean  |
| `role`     | Int      |
| `createdAt`| DateTime |
| `updateAt` | DateTime |

O campo `role` na tabela `Users` indica o papel ou função do usuário no sistema. Os valores possíveis são:

* **1 (Client):** Cliente comum.
* **2 (Employee):** Funcionário ou colaborador.
* **3 (Admin):** Administrador com permissões ampliadas no sistema.
