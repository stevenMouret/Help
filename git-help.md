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

### Pour supprimer tous les fichiers et répértoires,
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



