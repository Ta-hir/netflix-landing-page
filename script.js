document.addEventListener('DOMContentLoaded', () => {

    const tabItems = document.querySelectorAll('.tab-item')
    const tabcontent = document.querySelectorAll('.tab-content-item')

    // select tab content item
    function selectitem(e) {
        removeBorder()
        removeshow()
        // add border
        this.classList.add('tab-border')

        // Grabcontentfrom Dom
        const tabContentItem = document.querySelector(`#${this.id}-content`)
        // add show class list
        tabContentItem.classList.add('show')
    }
    // remove border from any other
    function removeBorder() {
        tabItems.forEach(item => item.classList.remove('tab-border'))
    }

    // remove show
    function removeshow() {
        tabcontent.forEach(item => item.classList.remove('show'))
    }


    // listen for tab click
    tabItems.forEach((item) => item.addEventListener('click', selectitem))

})