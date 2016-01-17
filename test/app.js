/**
 * Created by barney on 1/16/16.
 */

var app, text, dialogue, response, start, stop;
var SERVER_PROTO, SERVER_DOMAIN, SERVER_PORT, ACCESS_TOKEN;

SERVER_PROTO = 'wss';
SERVER_DOMAIN = 'api.api.ai';
SERVER_PORT = '4435';
ACCESS_TOKEN = '6ee2ac0cdbef4f7cb56b246949f2d809';

window.onload = function () {
    text = ('text');
    dialogue = $('dialogue');
    response = $('response');
    start = $('start');
    stop = $('stop');
    $('server').innerHTML = SERVER_DOMAIN;
    $('token').innerHTML = ACCESS_TOKEN;

    app = new App();
}

function App() {
    var apiAi, apiAiTts;
    var isListening = false;
    var sessionId = _generateId(32);

    this.start = function () {
        start.className += ' hidden';
        stop.className = stop.className.replace('hidden', '');

        _start();
    };

    this.stop = function () {
        _stop();

        stop.className += ' hidden';
        start.className = start.className.replace('hidden', '');
    };

    this.sendJson = function () {
        var query = text.value,
            queryJson = {
                "v": "20150910",
                "query": query,
                "timezone": "GMT+6",
                "lang": "en",
                //"contexts" : ["weather", "local"],
                "sessionId": sessionId
            };

        console.log('sendJson', queryJson);

        apiAi.sendJson(queryJson);
    };


    function _generateId(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}

function $(id) {
    return document.getElementById(id);
}