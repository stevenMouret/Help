# Git Help

## Pour commencer

### Init, initialise un dépot git
```git
git init
```

### Connecter le dépot local vers le dépot github
```git
git remote add origin https://github.com/nomutilisateur/MonProjet.git
```

### Donne le nom du ou des dépots distant
```git
git remote
```

### Donne le nom du ou des dépots distant ainsi que l'uri
```git
git remote -v
```

### Clone
```git
git clone https://stevenMouret@github.com/stevenMouret/repo.git
```

### Clone à partie de la racine
```git
git clone https://stevenMouret@github.com/stevenMouret/repo.git .
```

### Status
```git
git status
```

### Committer
Se rendre dans le répertoire

```git
git add <filename>
```

ou pour ajouter tous les fichiers et dossiers

```git
git add -A .
```
```git
git commit -m "Message du commit"
git push
```

### Supprimer un fichier
```git
git rm file.txt
git commit -m "remove file.txt"
```

### Diff
```git
git diff master origin/master
```

### Diff (seulement les fichiers)
```git
git diff -–name-only master origin/master
```

### Diff du master et du HEAD
```git
git diff origin/master..HEAD
```

### Changer l'uri du remote Git repository
```git
git remote set-url origin https://github.com/user/repo.git
```

### Checker le remote
```git
git remote -v
```

### Pour arreter un merge en ligne de commande :
```git
git merge --abort
```

### Pour annuler les modifications quand on vient de committer
```git
git reset --hard
```

### Pour annuler les modifications quand on a pas encore committé
```git
git reset --hard HEAD
```

### Pour supprimer les fichiers après un ADD avant de committer
```git
git reset HEAD file
```

### Pour supprimer un dossier après un ADD avant de committer
```git
git rm --cached -r directory-name
```

### Pour supprimer tous les fichiers et répértoires qui ne sont pas versionnés
```git
git clean -fd
```

###Récupérer les références des données du dépot distant
```git
git fetch
git fetch origin master
```

### Pour committer les fichiers locales,

checkout version locale de toute les fichiers
```git
git checkout --ours .
```

marquer tous les fichiers comme mergé
```git
git add -u
```

committer le merge
```git
git commit
```

## Historique

### Voir l'historique
```git
git log --stat
```

### Voir l'historique avec la branche affiché en ASCII
```git
git log --pretty=format:"%h %s" --graph
```


## Configuration de Git
Configurer les chemins vers les fichiers en long
```git
git config core.longpaths true
```
git@github.com:stevenMouret/gulp-compass-nunjucks.git

## Branches
Créer une branche
```git
git checkout -b [nom_de_la_branche]
```

Pusher la branche
```git
git push origin [nom_de_la_branche]
```

Voir toutes les branches locales (* donne la branche actuelle) 
```git
git branch
```

Voir toutes les branches locales et distantes (* donne la branche actuelle) 
```git
git branch -a
```

Changer de branche (vérifier d'avoit tout commité avant de changer de branche) 
```git
git checkout [nom_de_la_branche]
```

Merger la branche [nom_de_la_branche] dans master
```git
git checkout master
git pull origin master
git merge [nom_de_la_branche]
git push origin master
```

Supprimer une branche
```git
git branch -d [nom_de_la_branche]
git push origin --delete [nom_de_la_branche]
```

#Ajouter une clé pour github

Vérifier qu'on à pas déjà une clé existante.
```
ls -al ~/.ssh
```

Dans le cas ou elle n'existe pas créons là.

## Génération de la clé
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
presser enter pour garder le nom par défaut du fichier de la clé : id_rsa

Ajouter la pass phrase

##Ajouter la clé à l'agent SSH

S'assurer que l'agent est actif
```
eval "$(ssh-agent -s)"
```

Ajout de la clé à l'agent SSH
```
ssh-add ~/.ssh/id_rsa
```

## Ajout de la clé sur le compte Github

Dans Settings > SSH and GPG keys
Click sur 'New SSH key'
Donner un titre 'Personnal key for windows'
Ajouter la clé publique qui commence par ssh-rsa
Par défaut elle doit être dans le dossier c:/user/name/.ssh/id_rsa.pub

