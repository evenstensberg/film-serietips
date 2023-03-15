#!/usr/bin/env node
import fs from 'node:fs'
import yargs from 'yargs'
import chalk from 'chalk'

const argv = yargs(process.argv.slice(2)).argv
const jsonList = fs.readFileSync('./filmer.json', 'utf8')
const list = JSON.parse(jsonList)

if (argv.list) {
  list.forEach((element) => {
    console.log(
      `Film: ${chalk.green.bold(element.name)}, Utgiver: ${chalk.green.bold(
        element.source,
      )}`,
    )
  })
  process.exit(1)
}

if (argv.random) {
  const film = list[Math.floor(Math.random() * list.length)]
  console.log(
    `Fant film: ${chalk.green.bold(film.name)}, Finnes: ${chalk.green.bold(
      film.source,
    )}`,
  )
  process.exit(1)
}

if (argv.add) {
  const navn = argv.navn
  const kilde = argv.kilde
  list.push({ name: navn, source: kilde })
  fs.writeFileSync('./filmer.json', JSON.stringify(list, null, 4), 'utf8')
  process.exit(1)
}
if (argv.names) {
  list.forEach((element) => {
    console.log(element.name)
  })
  process.exit(1)
}
