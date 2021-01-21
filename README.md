# Creador de ficheros mediante CLI
En este proyecto vamos a poder crear un fichero introduciendo un nombre y extensión que deseamos.

# Instalación

* GLOBAL
```
npm install -g efifile-cli
```

*LOCAL
```
npm install efifile-cli
```

### Para usarlo
*GLOBAL
Ejecutamos **efifile-cli**

*LOCAL
Añadir en el package.json
```
  "scripts": {
    "efifile-cli": "./node_modules/.bin/efifile-cli"
  },
```



## Información solo Para Desarrollo 

Probar letras con figlet online

http://patorjk.com/software/taag/#p=display&v=3&f=Alpha&t=Type%20Something%20


## Crear un ejecutable a nivel global
poner en package.json

```
{
  ...,

  "bin": "./index.js" //donde empieza el modulo
}
```

y poner npm link y ejecutar efifile-cli desde el prompt


