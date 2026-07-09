# PokeHub — Roadmap

Ordem sugerida de desenvolvimento. Cada fase deve resultar em algo **funcionando e commitado** no GitHub.

---

## Fase 0 — Fundação (1–2 semanas)

**Objetivo:** projeto organizado, Git fluindo, nada de feature ainda.

- [ ] Estrutura de pastas (`client/`, `api/`, `docs/`)
- [ ] `.gitignore` adequado
- [ ] README com instruções de setup
- [ ] Primeiro commit + push para GitHub
- [ ] Aprender fluxo: `branch` → commit → push → PR (mesmo solo, simule review)
- [ ] Configurar `AGENTS.md` e usar Cursor para gerar boilerplate

**Entregável:** repositório no GitHub com documentação e projetos vazios compilando.

---

## Fase 1 — Launcher local mínimo (2–3 semanas)

**Objetivo:** abrir um emulador com uma ROM, sem nuvem, sem parse.

- [ ] Tela de configuração: emulador + ROM + pasta de saves (para **1 jogo**)
- [ ] Lista/grid com cards dos jogos (começar com 1–3 jogos placeholder)
- [ ] Botão "Jogar" que executa o emulador com a ROM
- [ ] Persistir configuração localmente (JSON ou SQLite)

**Jogo piloto sugerido:** Pokémon FireRed/LeafGreen (Gen 3, mGBA, formato de save bem documentado).

**Entregável:** app desktop que lança o emulador. Demo gravável para portfólio.

---

## Fase 2 — Cópia e monitoramento de saves (1–2 semanas)

**Objetivo:** estratégia de saves funcionando.

- [ ] Copiar save da pasta do emulador → pasta gerenciada pelo PokeHub
- [ ] Detectar alteração (polling ou file watcher)
- [ ] Histórico local de versões do save (backup antes de sobrescrever)
- [ ] Botão "Restaurar save no emulador" (cópia reversa)

**Entregável:** saves centralizados no launcher, independente do emulador.

---

## Fase 3 — Dashboard do save (2–4 semanas)

**Objetivo:** ler e exibir dados do save de **um** jogo.

- [ ] Parser de save Gen 3 (nome, horas, dinheiro, party de 6)
- [ ] UI do dashboard com os dados parseados
- [ ] Sprites dos Pokémon (recursos públicos / PokeAPI)

**Entregável:** dashboard funcional para FireRed/LeafGreen.

---

## Fase 4 — API e autenticação (2–3 semanas)

**Objetivo:** backend com login e CRUD básico.

- [ ] API REST: registro, login (JWT), perfil
- [ ] PostgreSQL: usuários, configurações de jogos (sync futura)
- [ ] Desktop autentica na API ao iniciar
- [ ] Documentação da API (Swagger/OpenAPI)

**Entregável:** login funcionando; API deployável (Railway, Render, Fly.io).

---

## Fase 5 — Sync na nuvem (2–3 semanas)

**Objetivo:** upload/download de saves.

- [ ] Endpoint: upload save (por jogo)
- [ ] Endpoint: listar versões / download última versão
- [ ] UI: "Enviar para nuvem" / "Baixar da nuvem"
- [ ] Conflito: avisar se save local é mais recente que nuvem

**Entregável:** sync manual entre duas instalações do launcher (mesmo usuário).

---

## Fase 6 — Expansão (contínuo)

- [ ] Mais jogos Gen 3 → Gen 4 → …
- [ ] Parsers adicionais (um por geração)
- [ ] Sync automática
- [ ] Polimento de UI
- [ ] Testes automatizados

---

## Métricas de sucesso para portfólio

| Critério | Como demonstrar |
|----------|-----------------|
| API | Swagger + README com endpoints |
| Git | Histórico com commits pequenos e mensagens claras |
| GitHub | README bonito, tags de release, Issues para backlog |
| Cursor | Mencionar no README como ferramenta usada |
| Demo | GIF ou vídeo do fluxo completo (config → jogar → dashboard → sync) |
