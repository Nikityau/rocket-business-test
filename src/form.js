export class Form {
    isOpen = false

    root = null
    cancel = null
    submit = null

    fio = null
    direction = null
    email = null

    constructor(root) {
        this.changeVisibility = this.changeVisibility.bind(this)
        this.send = this.send.bind(this)

        this.root = root

        this.cancel = this.root.querySelector('[data-form-cancel-btn]')
        this.cancel.addEventListener('click', this.changeVisibility)

        this.submit = this.root.querySelector('[data-form-submit-btn]')
        this.submit.addEventListener('click', this.send)

        this.fio = this.root.querySelector('#fio')
        this.direction = this.root.querySelector('#direction')
        this.email = this.root.querySelector('#email')
    }

    changeVisibility(e) {
        e?.preventDefault();

        this.isOpen = !this.isOpen

        if (this.isOpen) {
            this.root.style.display = 'flex'

            return
        }

        this.root.style.display = 'none'
        this.clearForm()
    }

    send(e) {
        e?.preventDefault();

        this.changeVisibility();
    }

    clearForm() {
        this.fio.value = ''
        this.direction.value = ''
        this.email.value = ''
    }
}