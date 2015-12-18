# Git Help

## Init, initialise un dépot git
```git
git init
```

## Connecter le dépot local vers le dépot github
```git
git remote add origin https://github.com/nomutilisateur/MonProjet.git
```

## Donne le nom du ou des dépots distant
```git
git remote
```

## Donne le nom du ou des dépots distant ainsi que l'uri
```git
git remote -v
```

## Clone
```git
git clone https://stevenMouret@github.com/stevenMouret/repo.git
```

## Status
```git
git status
```

## Commiter
Se rendre dans le répertoire

```git
git add <filename>
```

ou pour ajouter tous les fichiers et dossiers

```git
git add .
```
```git
git commit -m "Message du commit"
git push
```

## Supprimer un fichier
```git
git rm file.txt
git commit -m "remove file.txt"
```

## Diff
```git
git diff master origin/master
```

## Changer l'uri du remote Git repository
```git
git remote set-url origin https://github.com/user/repo.git
```

## Checker le remote
```git
git remote -v
```

## Pour arreter un merge en ligne de commande :
```git
git merge --abort
```

## Pour annuler les modifications dans les fichiers existants :
```git
git reset --hard
```

## Pour supprimer tous les fichiers et répértoires,
```git
git clean -fd
```

##Récupérer les références des données du dépot distant
```git
git fetch
```

## Pour commiter les fichiers locales,

checkout version locale de toute les fichiers
```git
git checkout --ours .
```

marquer tous les fichiers comme mergé
```git
git add -u
```

commiter le merge
```git
git commit
```



