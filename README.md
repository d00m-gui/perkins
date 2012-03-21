##Introduction

**Perkins 2** aims to help those who do not fear using some commands and feel like a pro in the process by generating a [Perkins Framework](http://p.erkins.com/) structure.

In other words, **Perkins 2** is a **CLI** utility made with **NodeJS** to make your life a little bit easier. Also you could say it's the Compass of LESS or at least it wants to be :P

###Perkins v2.0.3
  - Setup a new folder with the Framework in it
  - Serve any folder with the integrated Preview HTTP Server
  - Watch changes on app.less and output them to out/stylesheets/style.css

**Note: the server plays nice with LESS.js so the function less.watch(); works just fine (this means automatic page changes on save ;)**

**BTW** If you aren't a command-line type of guy/girl you definitely have to use [Crunch App](http://crunchapp.net/) made by Matt and Matt.

##Installation

First step you need to install [NodeJS](http://nodejs.org/) then [npm](http://npmjs.org/) finally just run:

    $ sudo npm install -g perkins

##Usage

    Usage: perkins [command] --options <dir>

  Commands:

    preview [path]
    This option create a Perkins Preview HTTP Server
    
    setup <path>
    Just relax let me take care of building a version of ... well me.
    
    watch <path>
    Watch changes on app.less and output them to out/stylesheets/style.css

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -p, --port <port>  specify the port [8000]
    -m, --min          minifies Perkins into a css file.
    -v, --verbose      output incoming requests.

##TODO
  - Update the p.erkins.com website ;)
  - Finishing the watch feature
  
##Special Thanks:
  - Rodrigo Fuentealba
  - Roderick Lagunas
  - Alvaro Veliz