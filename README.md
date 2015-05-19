# Git Help

## Init, initialise un dépot git
```git
git init
```

## Connecter le dépot local vers le dépot github
```git
git remote add origin https://github.com/nomutilisateur/MonProjet.git
```

## Déposer sur le dépot distant
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

## Changer l'uri du remote Git repository
```git
git remote set-url origin https://github.com/user/repo.git
```

## Checker le remote
```git
git remote -v
```


