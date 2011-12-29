##Introduction

**Perkins 2** aims to help those who do not fear using some commands and in feel like a pro in the process by generating a [Perkins Framework](http://p.erkins.com/) structure.

In other words, **Perkins 2** is a **CLI** utility made with **NodeJS** to make your life a little bit easier.

###Perkins v2.0.1
  - Setup a new folder with the Framework in it
  - Serve any folder with the integrated Preview HTTP Server

**Note: the server plays nice with LESS.js so the function less.watch(); works just fine (this means automatic page changes on save ;)**

**BTW** If you aren't a command-line type of guy/girl you definitely have to use [Crunch App](http://crunchapp.net/) made by Matt and Matt

##Dependencies

First step you need to install [NodeJS](http://nodejs.org/) then install [npm](http://npmjs.org/) and also you need to do:

    $ npm install -g paperboy
    $ npm install -g commander

##Usage

    $ perkins [command] --options <dir>

      Commands:

        preview [path]
        This option create a Perkins Preview HTTP Server

        setup <path>
        Just relax let me take care of building a version of ... well me.

      Options:

        -h, --help         output usage information
        -V, --version      output the version number
        -p, --port <port>  specify the port [8000]

##TODO
  - Publish in npm :)
  - Be more helpful in the browser and command-line
  - Integrate some examples and UI Kits
  - Update the framework with the lastest version by @hagarelvikingo
  
##Special thanks to:
  - Rodrigo Fuentealba
  - Roderick Lagunas
  - Alvaro Veliz