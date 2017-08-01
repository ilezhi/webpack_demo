import $ from 'jquery';

var p = document.createElement('p');
p.innerText = '这是app.js入口文件';
document.getElementById('box').appendChild(p);

$('#btn').on('click', function() {
    require.ensure([], function(require) {
        var login = require('./components/login').default;
        login();
    });
});
