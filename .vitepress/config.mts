import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UHC NLD',
  description: 'Documentation du serveur UHC NLD — règles, races, objets, marchands, donjons',
  lang: 'fr-FR',
  cleanUrls: true,
  ignoreDeadLinks: true,
  // Si le site est publié sur github.io/<nom-du-repo>/ (pages de projet, pas de domaine personnalisé),
  // change ceci en '/<nom-du-repo>/'. Laisse '/' si tu utilises un domaine personnalisé (CNAME).
  base: '/UHCNLD-REGLES/',

  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Règles', link: '/regles' },
      { text: 'Races', link: '/races' },
      { text: 'Objets', link: '/objets' },
    ],

    sidebar: [
      {
        text: 'Général',
        items: [
          { text: 'Accueil', link: '/' },
          { text: 'Règles de la partie', link: '/regles' },
          { text: 'Déroulement d\'une partie', link: '/deroulement' },
        ]
      },
      {
        text: 'Personnages',
        items: [
          { text: 'Races', link: '/races' },
        ]
      },
      {
        text: 'Objets',
        items: [
          { text: 'Objets de base', link: '/objets' },
          { text: 'Objets légendaires', link: '/legendaires' },
          { text: 'Recettes de craft', link: '/craft' },
        ]
      },
      {
        text: 'Monde',
        items: [
          { text: 'Marchands', link: '/marchands' },
          { text: 'Donjons', link: '/donjons' },
          { text: 'Temple du Temps & Rituel', link: '/temple' },
        ]
      },
      {
        text: 'Spectateur',
        items: [
          { text: 'Système spectateur', link: '/spectateur' },
        ]
      },
      {
        text: 'Référence',
        items: [
          { text: 'Commandes', link: '/commandes' },
        ]
      },
    ],

    socialLinks: [],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Documentation du serveur UHC NLD.',
    }
  }
})
