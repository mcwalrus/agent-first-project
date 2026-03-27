# Getting Started

_New to this material? [New to Software](./NEW_TO_SOFTWARE.md) · [Glossary](./GLOSSARY.md)._

## Prerequisites

- MacOS
- Git
- Node.js 24+ ([nvm](https://github.com/nvm-sh/nvm) recommended)
- Yarn
- Docker and Docker Compose
- [just](https://github.com/casey/just) (`brew install just`)

## Quick start

Local environment setup:

```sh
cp .env.example .env
yarn install
yarn playwright:install
just do-it
```

## Commands

I prefer `just` over `make` when it comes to repo commands.

| Goal                            | Command                |
| ------------------------------- | ---------------------- |
| List all commands               | `just`                 |
| Run all services                | `just do-it`           |
| Run dev server                  | `just dev`             |
| Run docker compose              | `just db-up / db-down` |
| Unit tests                      | `just test`            |
| E2E (needs dev server on :3000) | `just e2e`             |

**\*Note**: Always run the dev server locally when agents are running.\*

## App Navigation

### Key Routes

- App: [http://localhost:3000](http://localhost:3000)
- Mailpit: [http://localhost:8025/](http://localhost:8025/) (mock smtp server)
- Keycloak: [http://localhost:8080](http://localhost:8080) (user-based identity + auth service)

### Login Flows

**After running `just do-it`:**

1. Open [http://localhost:3000](http://localhost:3000)
2. Press button 'Sign In With Keycloak'
3. Sign in with test auth:
   - Username: `testuser`
   - Password: `password`

**For Keycloak admin access:**

1. Open [http://localhost:8080/admin](http://localhost:8080/admin)
2. Sign in with admin auth:
   - Username: `admin`
   - Password: `admin`

Sign-in credentials are entered on the hosted Keycloak login page.

---

_Next (Practical): [Setup Claude Code](./CLAUDE_SETUP.md)_

_Next (Technical): [Understanding Your Backpressure](./BACKPRESSURE.md)_

_See also: [New to Software](./NEW_TO_SOFTWARE.md) · [Glossary](./GLOSSARY.md) · [Introduction](./INTRO.md)_

[← Back to README](../README.md)
