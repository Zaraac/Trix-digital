# Trix Digital

Portfólio pessoal de sites e sistemas, construído com Astro e TypeScript.

## Rodar localmente

```sh
npm install
npm run dev
```

Use `npm run check` para verificar os tipos e `npm run build` para gerar o site
estático em `dist/`.

## Conteúdo

Os trabalhos ficam em `src/content/portfolio`. Consulte
`src/content/README.md` para adicionar projetos e modelos sem alterar os
componentes.

## Configuração

Copie `.env.example` para `.env` e informe:

- `PUBLIC_SITE_URL`: domínio público usado nos metadados;
- `PUBLIC_CONTACT_ENDPOINT`: endpoint de formulário, se houver;
- `PUBLIC_CONTACT_EMAIL` ou `PUBLIC_CONTACT_WHATSAPP`: canais alternativos.

Sem um canal configurado, a área de contato informa que ainda está em
configuração e não envia dados.

O resultado de `npm run build` é um site estático. A pasta `dist/` pode ser
publicada em Cloudflare Pages, Netlify, Vercel ou outro serviço de arquivos
estáticos. Defina o domínio em `PUBLIC_SITE_URL` no ambiente de produção.

O workflow `deploy-pages.yml` publica automaticamente o branch `main` em
`https://zaraac.github.io/Trix-digital/` quando o GitHub Pages está configurado
para usar GitHub Actions.

## Estrutura

```text
src/components   componentes visuais e seções
src/content      catálogo versionado
src/domain       tipos e regras do portfólio
src/layouts      layouts compartilhados
src/pages        home, trabalhos e página 404
src/styles       tokens e estilos globais
```
