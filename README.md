<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Solisport Landing Page

Landing page React/Vite pour valider l'interet des vendeurs de seconde main, en priorite les vendeurs d'articles de sport presents sur Vinted ou plateformes similaires, pour la proposition de valeur Solisport.

## Run Locally

**Prerequisites:** Node.js

1. Installe les dependances : `npm install`
2. Cree un fichier `.env.local` a partir de `.env.example`
3. Renseigne `VITE_GOOGLE_SHEET_WEBHOOK_URL`
4. Lance l'app : `npm run dev`

## Collecte Google Sheets

Le formulaire n'utilise plus Firebase pour les leads. Il envoie maintenant les donnees vers un `Google Apps Script` relie a ton Google Sheet :

- Google Sheet : `1kk-plwPKxiWrUkWjxfByydn-OfCsQybllpJQ4FC1DCU`
- champs collectes :
  - `email`
  - `uses_second_hand_platform`
  - `source`
  - `submitted_at`
  - `interest_goal`

## Mise en place du Google Apps Script

1. Ouvre le Google Sheet.
2. Va dans `Extensions` > `Apps Script`.
3. Colle ce script :

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads') || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Leads');

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'email',
      'uses_second_hand_platform',
      'source',
      'submitted_at',
      'interest_goal'
    ]);
  }

  sheet.appendRow([
    e.parameter.email || '',
    e.parameter.uses_second_hand_platform || '',
    e.parameter.source || '',
    e.parameter.submitted_at || '',
    e.parameter.interest_goal || ''
  ]);

  return ContentService.createTextOutput('ok');
}
```

4. Clique sur `Deploy` > `New deployment`
5. Choisis `Web app`
6. Regle :
   - `Execute as` : `Me`
   - `Who has access` : `Anyone`
7. Copie l'URL `/exec`
8. Mets-la dans `.env.local` :

```bash
VITE_GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbzqetTPKbmVLac8MwNwjBFJVW6d2UFq05DEabVM-vwqUP6QvxbkAYLD0IHpCAvmI5gL/exec
```

## Objectif produit

La landing page sert a valider cette hypothese :

`Les vendeurs d'articles de sport de seconde main sont interesses par une proposition Solisport qui les aide a mieux valoriser leurs objets et laissent leur email pour rejoindre le test.`

## Test acquisition Vinted

Les livrables du test hors Ads sont disponibles dans `docs/` :

- `docs/acquisition-vinted.md` : plan complet en 7 blocs, angles, canaux, KPI et relance opt-in.
- `docs/contenus-organiques-vinted.md` : scripts TikTok/Reels, posts communautaires, message createur et reponses publiques.
- `docs/utm-plan-vinted.csv` : liens UTM prets a decliner par canal.

Principe important : le test n'automatise pas les messages sur Vinted. L'automatisation porte sur le tracking, la preparation des contenus, la collecte opt-in et le reporting.

## Deploiement Vercel

Cette landing page peut etre deployee sur un projet Vercel dedie puis reliee au sous-domaine :

`ld.solisport.fr`

Configuration recommandee :

- un projet Vercel separe de l'app principale Lovable
- dossier racine : `solisport-landing-page`
- commande de build : `npm run build`
- dossier de sortie : `dist`
- variable d'environnement :
  - `VITE_GOOGLE_SHEET_WEBHOOK_URL`

Comme il s'agit d'un sous-domaine dedie, aucune configuration speciale de `base` Vite n'est necessaire.
