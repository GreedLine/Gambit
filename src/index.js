import $ from 'jquery';
import './js/js_1.js';
import './js/js_2.js';

import img from '../src/assets/img/favicon.png';
import './scss/main.scss';
import logotype from '../src/assets/logotype.png';

const saes = document.getElementById('sa-es');

function checkWidth() {
    if (document.documentElement.clientWidth < 1300) {
        document.getElementById('sa-es').innerHTML = 'SA ES';
    }
    if (document.documentElement.clientWidth > 1300) {
        document.getElementById('sa-es').innerHTML = 'San Andreas Emergency Services';
    }
};

function scrollSidebar() {
    let y = getBodyScrollTop();
    let res = 190 - y;
    if (y >= 150) {
        $('#sidebar').css({top: '40px',})
    }
    else{
        $('#sidebar').css({top: res})
    }


}

function getBodyScrollTop() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

$(window).scroll(() => scrollSidebar());
$(window).resize(() => checkWidth());
$(document).ready(() => {
    scrollSidebar();
    checkWidth();
    $('.waves').css({height: $(document).height()});
});


