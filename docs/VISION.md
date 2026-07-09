# PokeHub — Visão do produto

## O que é

Launcher desktop focado exclusivamente nos jogos da **série principal de Pokémon** (Gen 1–9). Inspirado em launchers como RetroArch, porém especializado: uma tela/dashboard por jogo, com atalho para jogar, informações do save e sincronização na nuvem.

## O que o PokeHub **não** é

- Não distribui ROMs nem emuladores.
- Não substitui o emulador — apenas o orquestra.
- Não altera a configuração interna de pastas de save do emulador (ver estratégia de saves abaixo).

## Funcionalidades principais

### Por jogo (dashboard)

Cada jogo da série principal terá sua própria aba/página com:

- **Jogar** — abrir o emulador configurado com a ROM configurada.
- **Dashboard do save** — horas jogadas, nome do treinador, preview da party atual, dinheiro e outros dados parseados do arquivo de save.
- **Sync na nuvem** — enviar o save atual para a nuvem e baixar/sincronizar de outro dispositivo.

### Configuração inicial (obrigatória)

Antes de usar, o usuário deve:

1. Criar conta (usuário e senha).
2. Para cada jogo/console desejado, informar:
   - Caminho do executável do emulador.
   - Caminho da ROM.
   - Pasta onde o emulador grava saves (para monitorar/copiar).

### Estratégia de saves

Em vez de reconfigurar onde o emulador salva:

1. O emulador continua salvando no local padrão dele.
2. O PokeHub **copia** o arquivo de save do local do emulador para uma pasta gerenciada pelo launcher (`~/.pokehub/saves/{jogo}/` ou similar).
3. O dashboard lê o save da cópia gerenciada.
4. Na sync na nuvem, envia/recebe essa cópia gerenciada.

> Ao restaurar um save da nuvem, o fluxo inverso copia de volta para a pasta do emulador (com confirmação do usuário).

## Autenticação e nuvem

- Login com usuário e senha.
- API REST no backend.
- Saves armazenados por usuário + jogo + timestamp/versão.
- Sync: upload manual ou automático após detectar mudança no save copiado.

## Jogos alvo (série principal)

| Gen | Jogos |
|-----|-------|
| 1 | Red, Blue, Yellow |
| 2 | Gold, Silver, Crystal |
| 3 | Ruby, Sapphire, Emerald, FireRed, LeafGreen |
| 4 | Diamond, Pearl, Platinum, HeartGold, SoulSilver |
| 5 | Black, White, Black 2, White 2 |
| 6 | X, Y, Omega Ruby, Alpha Sapphire |
| 7 | Sun, Moon, Ultra Sun, Ultra Moon |
| 8 | Sword, Shield, Brilliant Diamond, Shining Pearl, Legends Arceus* |
| 9 | Scarlet, Violet |

\* Legends Arceus é spin-off; incluir ou não é decisão de escopo — por padrão, focar nos RPGs principais de cada geração.

## Objetivo de aprendizado

Este projeto existe para exercitar:

- Desenvolvimento de **API REST** com autenticação e banco de dados.
- **Git/GitHub** com histórico limpo, branches e PRs.
- Uso produtivo do **Cursor AI** como ferramenta de desenvolvimento.
- Construção de um **portfólio** para candidatura a estágio.

## Riscos e complexidade (ser honesto)

1. **Parse de saves** — cada geração usa formato diferente. Não dá para suportar todos os jogos de uma vez.
2. **Emuladores variados** — mGBA, DeSmuME, Citra, Ryujinx, etc. cada um com caminhos e comportamentos distintos.
3. **Escopo grande** — o MVP deve ser pequeno e funcional; o resto vem incrementalmente.
