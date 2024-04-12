export class MobileBurger {
    _burgerButton = null
    _mobileOpenEl = null
    _toggleBtnClass = null
    _toggleElClass = null

    constructor(burgerBtn, el, classNameBtn, classNameEl) {
        this._burgerButton = burgerBtn
        this._mobileOpenEl = el
        this._toggleBtnClass = classNameBtn
        this._toggleElClass = classNameEl

        this.initEvents()
    }

    initEvents() {
        this._burgerButton.addEventListener('click', () => {
            this._mobileOpenEl.classList.toggle(this._toggleElClass)
            this._burgerButton.classList.toggle(this._toggleBtnClass)
        })
    }
}