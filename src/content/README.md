# Catálogo do portfólio

Cada arquivo Markdown em `portfolio/` representa um projeto real ou modelo
conceitual. O nome do arquivo define a URL do item.

```yaml
---
title: "Título do item"
summary: "Resumo com até 180 caracteres."
category: "site" # site | system
entryType: "concept" # project | concept
cover:
  image: "./imagens/capa.webp"
  alt: "Descrição objetiva da imagem"
gallery: []
features: []
technologies: []
featured: false
order: 0
draft: true
---
```

O conteúdo abaixo do frontmatter será usado na página individual. Itens com
`draft: true` não aparecem no site público.
