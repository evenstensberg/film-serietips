# Film/Serietips

Bare CLI til filmer/serier jeg liker

## Kjøre lokalt
```sh
$ nvm i && npm i
```

## Installere
```sh
$ npm i -g film-serie-tips
```

## Kommanoder
## Symlink

```console
$ tips <flags>
```
### Tilfeldig film/serie


```sh
$ node ./main.mjs --random
```
```sh
# Med type
$ node ./main.mjs --random --type=serie
```
```sh
# Med utgiver
# Hbo Max, Netflix, Amazon Prime, Disney Plus, Viaplay, TV2 Play
$ node ./main.mjs --random --type=serie --utgiver=Netflix
```

### Liste over filmer/serier
```sh
$ node ./main.mjs --list
```
### Liste over filmer/serier's navn
```sh
$ node ./main.mjs --names
```

## Legge til filmer

Legg til JSON objekt i `filmer.json` eller

```sh
node ./main.mjs --add --navn="forest gump" --kilde="HBO Max" --type="film"
```