/**
 * Created by mohammedamine on 03/01/2017.
 *
*/

/**
 * Load request module
 * @type {request|exports|module.exports}
 */
var request = require('request');

/**
 * Load cheerio
 * @type {*|exports|module.exports}
 */
var cheerio = require('cheerio');

/**
 * site url
 * @type {string}
 */
var url = 'http://moulinex.fr';

// send request
request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
        /**
         * jQueryfy html
         */
        var $ = cheerio.load(html);

        // select all images in the page and print src and alt attributes to console
        $('img').each(function(i, element){
            console.log('Image [' + i + ']');
            console.log('src :', element.attribs.src);
            console.log('alt :', element.attribs.alt);
        });
    }
});