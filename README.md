# PokeHub
Launcher desktop para jogos da **série principal de Pokémon**. Organize emuladores e ROMs, jogue com um clique, visualize informações do save em um dashboard e sincronize saves na nuvem.

> Projeto de portfólio para exercitar API REST, Git/GitHub e desenvolvimento assistido por IA (Cursor).

## Status

🚧 **Em planejamento** — Fase 0 (fundação)

## Funcionalidades (visão)

- Uma tela/dashboard por jogo da série principal
- Lançar emulador configurado pelo usuário (ROMs e emuladores **não** inclusos)
- Dashboard do save: horas, nome do treinador, party, dinheiro
- Sync de saves na nuvem com login
- Cópia de saves do emulador para pasta gerenciada (sem alterar config do emulador)

## Stack

| Parte | Tecnologia |
|-------|------------|
| API | Java 21, Spring Boot 3, PostgreSQL |
| Desktop | Electron, React, TypeScript |
| Ferramentas | Git, GitHub, Cursor AI |

## Documentação

- [Visão do produto](docs/VISION.md)
- [Roadmap por fases](docs/ROADMAP.md)
- [Instruções para o Agent](AGENTS.md)

## Estrutura (planejada)

```
PokeHub/
├── api/      # Backend REST
├── client/   # App desktop
└── docs/
```

## Como começar

> Setup será documentado na Fase 0, após criação dos projetos `api/` e `client/`.

## Licença

Projeto pessoal / portfólio. Pokémon © Nintendo/Game Freak/The Pokémon Company — este projeto não é afiliado.
