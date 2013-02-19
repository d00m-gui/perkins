##Introduction

**Perkins 3** has been refurbished from the ground up, and is way more finished than the previous version, ready for use on your LESS projects and the CLI utility will have its own repo.

##Let me introduce Myself

I am a Framework thought to make the life of designers and developers a bit easier

In the beginning I was just an other LESS framework but I evolve as my routemap says I would. Now I'm much more than that I have Command-line powers given to me by the mighty NodeJS.

In order to use this holy powers first you must have node.js installed. It's a painless process so you have nothing to fear ;).

Installing me

Once you have that ready just open a Terminal an type the following: sudo npm install -g perkins
NPM Perkins Installation

~ $ sudo npm install -g perkins
[...]
/usr/bin/perkins -> /usr/lib/node_modules/perkins/perkins
perkins@2.0.3 /usr/lib/node_modules/perkins 
├── wrench@1.3.7
├── colors@0.6.0-1
├── commander@0.5.2
├── paperboy@0.0.3
└── less@1.3.0
      
How I can help?

To see all my available commands in the current version just type: perkins --help
Basic Perkins Commands

~ $ perkins --help
Usage: perkins [command] --options <dir>

Commands:
  preview [path]
  This option create a Perkins Preview HTTP Server

  setup <path>
  Just relax let me take care of building a version of ... well me.

  watch <path>
  Watch changes on app.less and output them to 
    out/stylesheets/style.css

Options:
  -h, --help         output usage information
  -V, --version      output the version number
  -p, --port <port>  specify the port [8000]
  -m, --min          minifies every less into out/style.css
  -v, --verbose      output incoming requests.
      
This is how you start a new Project, Sir


Basic Usage

This is how you build a new instance of me: perkins setup siteName
Setup a New Perkins

~ $ perkins setup siteName
Perkins: Default Perkins structure in newSite created for you, Sir.
Did you want to execute the a Preview HTTP Server (yes/no)? yes 

Perkins: Perkins (v2.0.3): Starting Server, Sir...
Perkins: Your preview server for newSite is ready, Sir. on http://localhost:8000
Perkins: You want to stop the preview? press Ctrl+C
      
As you can see it only took me a secound to build and starting a preview of your new site, in order to edit just open the recently created directory in your favorite code editor. Now go and make the web a better place for all of us :)

Have fun creating theNext Web


The site is under heavy development, stay tune. ;)
