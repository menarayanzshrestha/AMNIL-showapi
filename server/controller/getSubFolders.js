exports.getSubFolders = async(req, res) => {
    
    try {

        //https://gist.github.com/VinGarcia/ba278b9460500dad1f50

        //getting "EPERM: operation not permitted" for root drive.
        var walkSync = function(dir, filelist) {

            if ( dir[dir.length-1] != '/') {
                dir = dir.concat('/');
            }
        
            var fs = fs || require('fs');

            var files = fs.readdirSync(dir);

            var filelist = filelist || [];
        
            files.forEach(function(file) {
        
                if( !(/^\$/).test(file) ) {
        
                    if (  fs.statSync(dir + file).isDirectory()) {
                        filelist = walkSync(dir + file + '/', filelist); 
                        filelist.push(dir + file);
                    }
                    else {
                        filelist.push(dir + file);
                    } 
                }
                    
            });

            return filelist;
        };

        const dir = req.body.dirToSearch;
        
        let result = await walkSync(dir, [] );

        res.status(200).json({
            result
        });
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            message : error.message
        })

    }
}