# 💳 pagamento-api

CRUD de Meios de Pagamento desenvolvido em **Spring Boot** com integração ao **PostgreSQL**.

## 📌 Funcionalidades

- 🔍 Listar todos os meios de pagamento
- 👁️ Visualizar detalhes de um meio de pagamento
- ✏️ Editar registros existentes
- 🗑️ Excluir registros
- ➕ Incluir novos meios de pagamento

Cada registro contém:
- Nome
- Valor Máximo
- Tipo (Físico ou Eletrônico)

---

## 🚀 Tecnologias Utilizadas

- Java 17
- Spring Boot 3.x
- Spring Web
- Spring Data JPA
- PostgreSQL
- Maven

---

## ⚙️ Como executar o projeto localmente

### Pré-requisitos

- Java JDK 17+
- Maven
- PostgreSQL instalado e rodando

### Configuração do Banco de Dados

Crie o banco no PostgreSQL:

```sql
CREATE DATABASE pagamento;
