# Test acquisition Solisport - vendeurs Vinted sport

Objectif : valider si les vendeurs de seconde main, en particulier les vendeurs d'articles de sport sur Vinted, comprennent la proposition Solisport et acceptent de laisser un email pour participer au test.

Le test doit rester hors automatisation abusive : pas de scraping Vinted, pas de DM massif, pas d'utilisation de bots sur la plateforme. L'automatisation porte sur le tracking, la veille de contenus publics, la préparation de messages, la collecte opt-in et le reporting.

## 1. Landing page

URL recommandee :

- `https://ld.solisport.fr/?utm_source=direct&utm_medium=landing&utm_campaign=vinted_sellers_test&utm_content=main`

Promesse principale :

- `Vendez mieux vos articles de sport de seconde main`

Sous-promesse :

- Solisport aide les vendeurs presents sur Vinted et les plateformes de seconde main a mieux valoriser leurs equipements sportifs, tout en soutenant des sportifs de haut niveau peu mediatises.

CTA principal :

- `Rejoindre le test`

Micro-conversion :

- email collecte
- statut vendeur : vend deja / ne vend pas encore
- source UTM capturee dans le champ `source`

Message de prudence :

- Solisport est un projet independant et n'est pas affilie a Vinted.

## 2. Angles de test

Angle A - Vendre mieux

- Promesse : mieux presenter ses articles de sport pour vendre plus vite.
- Hypothese : la cible reagit a un benefice direct et concret.
- CTA : `Rejoindre le test vendeur`
- Contenu type : avant/apres d'une annonce de chaussures, raquette, textile technique ou materiel fitness.

Angle B - Estimer le bon prix

- Promesse : eviter de sous-vendre un article sportif encore en bon etat.
- Hypothese : la cible a du mal a fixer un prix juste.
- CTA : `Estimer mon potentiel de revente`
- Contenu type : mini grille de prix selon etat, marque, usage, saison, rarete.

Angle C - Vendre utile

- Promesse : transformer une vente de seconde main en soutien a un sportif.
- Hypothese : l'impact social renforce l'inscription quand le benefice vendeur est deja clair.
- CTA : `Vendre utile avec Solisport`
- Contenu type : "Votre ancien equipement peut financer une partie d'une saison sportive."

Priorite de test :

1. Angle A pour le volume de clics.
2. Angle B pour tester l'intention forte.
3. Angle C pour tester la resonance Solisport.

## 3. Canaux organiques

Canal 1 - TikTok / Reels

- Format : videos courtes de 20 a 35 secondes.
- Objectif : capter les vendeurs Vinted qui cherchent des conseils pratiques.
- Cadence : 1 publication par jour pendant 7 jours.
- Exemple d'accroche : `3 erreurs qui font perdre de l'argent quand tu vends ton materiel de sport sur Vinted`.

Canal 2 - Groupes Facebook autorises

- Format : post conseil, sans lien direct si le groupe interdit la promotion.
- Objectif : obtenir des commentaires et envoyer le lien uniquement aux personnes interessees.
- Cadence : 3 posts sur 7 jours dans des groupes differents.
- Regle : demander l'accord admin si le post contient un lien.

Canal 3 - Micro-createurs

- Format : message manuel a 10 createurs seconde main / Vinted tips / sport.
- Objectif : obtenir 2 publications ou stories test.
- Proposition : acces prioritaire au test + angle impact sportif.

Canal 4 - Commentaires utiles

- Format : reponses publiques a des posts ou videos ou des personnes parlent de vente Vinted.
- Objectif : apporter une aide reelle, sans message massif.
- Regle : pas de copier-coller industriel, pas de DM non sollicite.

## 4. Tracking UTM

Structure :

```text
utm_campaign=vinted_sellers_test
utm_medium=organic | community | creator | comment | direct
utm_source=tiktok | instagram | facebook_group | creator_name | direct
utm_content=angle_a | angle_b | angle_c | post_01 | story_01
```

Liens prioritaires :

- TikTok angle A : `/?utm_source=tiktok&utm_medium=organic&utm_campaign=vinted_sellers_test&utm_content=angle_a_post_01`
- Instagram angle B : `/?utm_source=instagram&utm_medium=organic&utm_campaign=vinted_sellers_test&utm_content=angle_b_reel_01`
- Facebook groupe angle A : `/?utm_source=facebook_group&utm_medium=community&utm_campaign=vinted_sellers_test&utm_content=angle_a_post_01`
- Createur angle C : `/?utm_source=creator_slug&utm_medium=creator&utm_campaign=vinted_sellers_test&utm_content=angle_c_story_01`

## 5. KPI

KPI minimum :

- visites landing
- clic CTA ou scroll jusqu'au formulaire
- emails collectes
- taux de conversion visite -> email
- part des vendeurs deja actifs
- source UTM des emails
- commentaires qualitatifs collectes

Seuils de lecture :

- Signal faible : moins de 2 % visite -> email.
- Signal interessant : 3 % a 6 % visite -> email.
- Signal fort : plus de 8 % visite -> email avec au moins 50 visites qualifiees.
- Signal tres fort : reponses qualitatives spontanees du type "j'en ai besoin", "je veux tester", "je vends deja ce type d'article".

Tableau de suivi quotidien :

| Jour | Canal | Angle | Vues estimees | Clics | Leads | Taux lead | Commentaires utiles |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| J1 | TikTok | A | | | | | |
| J2 | Instagram | B | | | | | |
| J3 | Facebook | A | | | | | |
| J4 | Commentaires | A | | | | | |
| J5 | TikTok | C | | | | | |
| J6 | Createur | C | | | | | |
| J7 | Relance opt-in | B | | | | | |

## 6. Relance opt-in

Email 1 - confirmation immediate

Objet : `Bienvenue dans le test vendeur Solisport`

Message :

```text
Bonjour,

Merci pour ton interet pour Solisport.

Le test vise a comprendre comment aider les vendeurs d'articles de sport de seconde main a mieux valoriser leurs objets, tout en soutenant des sportifs de haut niveau peu mediatises.

Je te recontacterai avec une premiere version simple du parcours.

Loic
Solisport
```

Email 2 - qualification, J+2

Objet : `Petite question sur tes ventes d'articles de sport`

Message :

```text
Bonjour,

Pour construire le test Solisport, j'aimerais comprendre ce qui bloque le plus quand tu vends un article de sport en seconde main.

Tu peux simplement repondre avec le chiffre qui correspond le mieux :

1. Je ne sais pas toujours fixer le bon prix
2. Mes annonces n'attirent pas assez
3. Les acheteurs posent trop de questions sur l'etat
4. Je manque de temps pour vendre
5. Je veux surtout vendre utile

Merci,
Loic
```

Email 3 - invitation MVP, J+5 ou J+7

Objet : `Acces au premier test Solisport`

Message :

```text
Bonjour,

Le premier test Solisport est pret : il permet de decouvrir comment un vendeur d'articles de sport de seconde main pourrait mieux presenter ses objets et contribuer au soutien d'athletes.

Voici le lien :
https://www.solisport.fr/?utm_source=email&utm_medium=optin&utm_campaign=vinted_sellers_test&utm_content=mvp_invite

Merci pour ton retour, meme court.

Loic
```

## 7. Plan d'execution sur 14 jours

J0 - Preparation

- verifier la landing
- verifier la collecte Google Sheets
- creer les liens UTM
- preparer 7 contenus courts
- preparer une liste de 10 micro-createurs

J1 a J3 - Lancement doux

- publier 2 contenus angle A
- publier 1 contenu angle B
- poster dans 1 groupe Facebook avec autorisation
- relever les premiers commentaires

J4 a J7 - Acceleration

- publier 3 nouveaux contenus
- tester un post angle C
- contacter 10 micro-createurs manuellement
- commenter 10 contenus publics pertinents avec une reponse utile

J8 - Lecture intermediaire

- calculer le taux visite -> email
- identifier le meilleur angle
- garder uniquement les sources qui generent des clics ou leads

J9 a J13 - Iteration

- doubler le meilleur angle
- tester une variation de CTA
- envoyer l'email de qualification aux inscrits opt-in
- collecter les objections dans un document

J14 - Decision

- continuer organique si le signal est fort
- lancer Ads uniquement sur l'angle gagnant si le signal est moyen ou fort
- pivoter le message si le taux de conversion est faible mais les commentaires sont riches
- arreter le segment si clics faibles, leads faibles et aucun retour qualitatif
