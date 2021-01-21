#!/usr/bin/env node

const shelljs = require('shelljs')
const chalk = require('chalk')
const figlet = require('figlet')
const inquirer = require('inquirer')

ficheroOk = (filepath) => {
  console.log(
    chalk.white.bgBlue.bold(
      `¡Muy bien! Fichero correctamente creado en el directorio ${filepath}`
    )
  )
}
const crearFichero = (nombreFichero, extension) => {
  const pathFichero = `${process.cwd()}/${nombreFichero}.${extension}`
  shelljs.touch(pathFichero)
  return pathFichero
}
const hacerPreguntas = () => {
  const preguntas = [
    {
      name: 'FICHERO',
      type: 'input',
      message: '¿Cómo se va a llamar tu ficjero? (sin la extensión)'
    },
    {
      name: 'EXTENSION',
      type: 'list',
      message: '¿Qué extensión tiene tu fichero?',
      choices: ['.rb', '.js', '.kt', '.java', '.ts', '.php'],
      filter: function (val) {
        return val.split('.')[1]
      }
    }
  ]
  return inquirer.prompt(preguntas)
}
const iniciar = () => {
  console.log(
    chalk.green(
      figlet.textSync('Creador de ficheros', {
        font: 'Bubble',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  )
}
const ejecutar = async () => {
  // Mostrar la información de la libreria en la cabecera
  iniciar()
  // Preguntas necesarias para crear el fichero, es decir, el nombre y la extensión
  const respuestas = await hacerPreguntas()
  const { FICHERO, EXTENSION } = respuestas
  // console.log(respuestas)
  // Creamos el fichero
  if (!FICHERO || !EXTENSION) {
    console.log(
      chalk.white.bgRed.bold(
        `Debe completar todos los pasos, intente nuevamente`
      )
    )
    process.exit(0)
  }
  const pathFichero = crearFichero(FICHERO, EXTENSION)
  // Añadimos mensaje que el fichero se ha creado correctamente
  ficheroOk(pathFichero)
}

ejecutar()
