#!/usr/bin/env node
import fs from 'node:fs'
import yargs from 'yargs'
import chalk from 'chalk'

const argv = yargs(process.argv.slice(2)).argv
const jsonList = fs.readFileSync('./filmer.json', 'utf8')
let list = JSON.parse(jsonList)

if (argv.list) {
  list.forEach(element => {
    console.log(
      `Film: ${chalk.green.bold(element.name)}, Utgiver: ${chalk.green.bold(
        element.source
      )}`
    )
  })
  process.exit(1)
}

if (argv.random) {
  if(argv.type) {
    list = list.filter(e => e.type === argv.type)
  }
  if(argv.utgiver) {
    list = list.filter(e => e.source.toLowerCase() === argv.utgiver.toLowerCase())
  }
  const film = list[Math.floor(Math.random(new Date().toString()) * list.length)]

  console.log(
    `Fant ${film.type}: ${chalk.green.bold(film.name)}, Finnes: ${chalk.green.bold(
      film.source
    )}`
  )
  process.exit(1)
}

if (argv.add) {
  const { navn, kilde, type } = argv
  list.push({ name: navn, source: kilde, type })
  fs.writeFileSync('./filmer.json', JSON.stringify(list, null, 4), 'utf8')
  process.exit(1)
}
if (argv.names) {
  list.forEach(element => {
    console.log(element.name)
  })
  process.exit(1)
}
