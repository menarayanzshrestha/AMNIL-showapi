var fetch = require('node-fetch');

exports.getApiShows = async(req, res) => {
    try {

        let apiCall = await fetch('http://124.41.240.154:9803/api/nowshowinginfo')
            .then(result => {
                return result.json() 
            })
            .catch(err => {
                console.log(err);
            })
        
        res.status(200).json({
            result : apiCall
        });  

    } catch (error) {

        console.log(error);
        res.status(500).json({
            message : error.message
        })

    }
}