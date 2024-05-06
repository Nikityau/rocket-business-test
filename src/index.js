import '../style/index.scss'

import '../assets/logo-w.png'
import '../assets/logo-g.png'
import '../assets/instagram.png'
import '../assets/telegram.png'
import '../assets/whatsapp-header.png'
import '../assets/whatsapp.png'
import '../assets/doctor-working-table.png'
import '../assets/trapezoid.png'

import {Slider} from './slider'
import {MobileBurger} from './mobile-burger'
import {Form} from './form'

new Slider(document.querySelector('.slider')).start()
new MobileBurger(
    document.querySelector('.header__burger'),
    document.querySelector('.mobile-navigation'),
    'header__burger_open',
    'mobile-navigation_open'
)
const form = new Form(
    document.querySelector('.form')
)
function setBtnsFormActivateEvent() {
    document.querySelectorAll('[data-form-btn-a]').forEach(el => {
        el.addEventListener('click', form.changeVisibility)
    })
}
setBtnsFormActivateEvent()