import $ from 'jquery';
import './assets/css/site.css';
import icon from './assets/images/circle.png';

var box = document.getElementById('box');
var h = document.createElement('h4');
h.innerText = '这是main入口文件';
box.appendChild(h);

var img = new Image();
img.src = icon;
box.appendChild(img);

var i = document.createElement('i');
i.innerText = 'autorenew';
box.appendChild(i);