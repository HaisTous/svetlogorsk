document.addEventListener('DOMContentLoaded', function () {

    const navInit = () => {
        const nav = document.querySelector('.sidebar-nav');
        const links = document.querySelectorAll('.sidebar-nav__li');
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            if (window.pageYOffset + 50 >= section.offsetTop) {
                console.log(window.pageYOffset, section.offsetTop)
                links.forEach(link => {
                    link.classList.remove('sidebar-nav__active');
                    if (link.dataset.section === section.dataset.section) {
                        link.classList.add('sidebar-nav__active')
                    }

                })
            }

        })
    }
    navInit()
    window.addEventListener('scroll', () => {
        navInit();
    })
    window.addEventListener('resize', () => {
        navInit();
    })

})
