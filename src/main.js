import a from './components/a';
import './assets/css/site.css';

(function() {
    var h = document.createElement('h1');
    h.innerText = '入口文件';
    document.getElementById('container').appendChild(h);
    a();
})();