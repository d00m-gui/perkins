var path     = require('path'),
    http     = require('http'),
    fs       = require('fs'),
    less     = require('less'),
    perkins  = require('commander'),
    cli      = require('./cli.js')(),
    server   = require('./preview.js'),
    cp       = require('/usr/lib/node_modules/wrench'),
    rootDir  = path.dirname(process.argv[1]);

module.exports = (function() {

    var meta = {
        name: 'Perkins',
        author: 'Carlos Elias <hola@carloselias.cl>',
        version: '2.0.3'
        };
    return {
      version: meta.version,
      //TODO que resuelva correctamente el directorio cuando pones watch .
      watch : function(dir){
          if(!dir || dir == '.') {
            dir = path.resolve('.');
          }
          cli.msg(meta.name + ' (v' + meta.version + '): ' + 'I am Starting the server and watching '+dir+', Sir');
          if (path.existsSync(dir)) {
            server.preview(dir);
            filename = './' + dir + '/stylesheets/app.less';
            cli.msg('Server at http://localhost:'+perkins.port);
            cli.info('Watching... to stop press Ctrl+C');
            fs.watchFile(filename,
              function(curr, prev) {
                originalFile = prev.mtime.getTime();
                currentFile = curr.ctime.getTime();
                cli.info('Reading the file: '+filename);
                if (originalFile != currentFile) {
                  fs.readFile(filename, 'utf-8', function(err, data){
                    cli.info('Exporting to CSS');
                    parser = new(less.Parser)({
                      paths : [ './'+dir , './'+dir+'/stylesheets'],
                      filename: './'+dir+'/'+ filename
                    });
                    parser.parse(data, function(err, tree){
                      if (err) { return cli.error(err) }
                      css = tree.toCSS({compress: perkins.min});
                      fs.writeFile('./'+dir+'/out/stylesheets/style.css', css, 'utf8', function(err) {
                        if (err) throw err;
                        cli.info('Sir '+dir+'/out/style.css has been updateded');
                      });
                    });
                  });
                } else {
                  cli.info('Watching '+dir+' to stop press Ctrl+C');
                }
              });
          } else {
            cli.error('Sorry, Sir but '+ dir + 'does not exists');
          }
      },
      setup : function(dir){
        if (path.existsSync(dir)) {
          cli.error('Sorry, Sir but '+dir+' already exists...');
        } 
        else {
          if (path.existsSync(rootDir +'/src')) {
            copypath = rootDir;
          }else{
            copypath = path.normalize(rootDir+'/../lib/node_modules/perkins');
          }
          cp.copyDirSyncRecursive(copypath +'/src', dir);
          cli.info('Default Perkins structure in '+dir+' created for you, Sir.');
          perkins.confirm('Did you want to execute the a Preview HTTP Server? ', function(ok){
            if(ok){
              server.preview(dir);
              cli.msg('Your preview server for '+dir+' is ready, Sir. on http://localhost:'+perkins.port);
              cli.info('You want to stop the preview? press Ctrl+C');
            }
            else {
              cli.msg('As you wish, Sir.');
              cli.info('If I may... You probably want to edit app.less');
              process.stdin.destroy();
            }
          })
        }
      }
    };
}());