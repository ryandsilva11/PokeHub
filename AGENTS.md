# Instruções para o Agent (Cursor AI)

## Contexto

PokeHub é um launcher desktop para jogos Pokémon da série principal. Ver `docs/VISION.md` e `docs/ROADMAP.md` para escopo completo.

## Stack escolhida

| Camada | Tecnologia | Motivo |
|--------|------------|--------|
| API | **Java 21 + Spring Boot 3** | Refrescar Java/OO; comum em vagas de estágio no Brasil |
| Banco | **PostgreSQL** | Relacional, JWT + usuários + metadados de saves |
| Desktop | **Electron + React + TypeScript** | UI moderna; separação clara client/API |
| ORM | Spring Data JPA | Prática de DB relacional |

> Se o desenvolvedor preferir Python, FastAPI é alternativa aceitável — mas a decisão atual é Spring Boot.

## Estrutura do monorepo

```
PokeHub/
├── api/          # Spring Boot REST API
├── client/       # Electron + React desktop app
├── docs/         # VISION.md, ROADMAP.md
├── AGENTS.md
└── README.md
```

## Regras de desenvolvimento

### Geral

- Desenvolver **por fases** conforme `docs/ROADMAP.md`. Não implementar fases futuras sem pedido explícito.
- Commits pequenos e descritivos em português ou inglês (escolher um e manter consistente).
- Nunca incluir ROMs, emuladores ou saves reais no repositório.
- Nunca commitar `.env`, credenciais ou secrets.

### API (`api/`)

- REST JSON, versionada em `/api/v1/`
- Autenticação JWT (Bearer token)
- DTOs separados de entidades JPA
- Swagger/OpenAPI habilitado
- Migrations com Flyway ou Liquibase

### Client (`client/`)

- React com TypeScript
- Estado global simples (Context ou Zustand — evitar Redux no MVP)
- Comunicação com API via fetch/axios
- Configuração local (emulador, ROM, paths) em arquivo JSON em `%APPDATA%/PokeHub/` (Windows)

### Saves

- **Não** alterar configuração interna do emulador.
- Copiar saves: emulador → pasta gerenciada `saves/{gameId}/`
- Parser de save: começar só com **Gen 3 (FireRed/LeafGreen)** no MVP.

### Git

- Branch `main` protegida (idealmente)
- Feature branches: `feat/nome`, `fix/nome`
- PRs mesmo trabalhando solo (prática para estágio)

## Comandos (atualizar conforme projetos forem criados)

```bash
# API
cd api && ./mvnw spring-boot:run

# Client
cd client && npm run dev
```

## Ao pedir ajuda ao Agent

Incluir sempre:
1. **Fase atual** do roadmap
2. **Arquivo/pasta** relevante (`@api/...` ou `@client/...`)
3. **O que testar** após a mudança

## O que NÃO fazer

- Não gerar código para todos os jogos/generações de uma vez
- Não adicionar dependências pesadas sem necessidade
- Não pular testes manuais descritos no roadmap
- Não fazer refatorações grandes fora do escopo pedido
