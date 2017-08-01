import './home';
import $ from 'jquery';

export default class Home{
    show() {
        $('#box').append('<p>这是home组件</p>');
    }
}
