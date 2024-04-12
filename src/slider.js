export class Slider {
    _sliderRoot = null
    _itemsList = null

    _sliderPages = null

    _leftArrow = null
    _rightArrow = null

    _INDEX_ATTR = 'data-slider-item-index'
    _ACTIVE_ATTR = 'data-slider-item-active'

    constructor(root) {
        this._sliderRoot = root

        this._itemsList = this._sliderRoot.querySelector('.slider__items')
        this._sliderPages = this._sliderRoot.querySelector('.slider__pages')
        this._leftArrow = this._sliderRoot.querySelector('.slider__arrow_left')
        this._rightArrow = this._sliderRoot.querySelector('.slider__arrow_right')
    }

    getActiveElement() {
        const el = this._itemsList.querySelector(`[${this._ACTIVE_ATTR}]`)

        return {
            element: el,
            index: Number(el.getAttribute(this._INDEX_ATTR))
        }
    }


    setNextEl(oldIndex, nextIndex) {
        const nextEl = this._itemsList.querySelector(`[${this._INDEX_ATTR}="${nextIndex}"]`)
        const old = this._itemsList.querySelector(`[${this._INDEX_ATTR}="${oldIndex}"]`)

        old.removeAttribute(this._ACTIVE_ATTR)
        nextEl.setAttribute(this._ACTIVE_ATTR, true)
    }

    onLeft() {
        const {element, index} = this.getActiveElement()

        let nextI = index

        if (index === 0) {
            nextI = this._itemsList.children.length - 1
        } else {
            nextI -= 1
        }

        this.setNextEl(index, nextI)
    }

    onRight() {
        const {element, index} = this.getActiveElement()

        let nextI = index

        if (index === this._itemsList.children.length - 1) {
            nextI = 0
        } else {
            nextI += 1
        }

        this.setNextEl(index, nextI)
    }

    initItems() {
        const items = this._itemsList.children
        for (let i = 0; i < items.length; ++i) {
            items[i].setAttribute(this._INDEX_ATTR, i)

            if (i === 0) {
                items[i].setAttribute(this._ACTIVE_ATTR, true)
            }
        }
    }

    initPagination() {
        const currentNumEl = this._sliderPages.querySelector('[data-slider-current-page]')
        const totalPagesEl = this._sliderPages.querySelector('[data-slider-total-pages]')

        currentNumEl.innerHTML = this.getActiveElement().index + 1;
        totalPagesEl.innerHTML = `/${this._itemsList.children.length}`
    }

    updPage() {
        const currentNumEl = this._sliderPages.querySelector('[data-slider-current-page]')

        currentNumEl.innerHTML = this.getActiveElement().index + 1
    }

    initEvents() {
        this._leftArrow.addEventListener('click', () => {
            this.onLeft()
            this.updPage()
        })
        this._rightArrow.addEventListener('click', () => {
            this.onRight()
            this.updPage()
        })
    }

    start() {
        this.initItems()
        this.initPagination()
        this.initEvents()
    }
}
