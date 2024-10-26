const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navTabs = $$('.nav-tab')
const myBadge3 = $('.my-badge3')




navTabs.forEach((tab, index)=>
{
    tab.addEventListener('click', function() 
    {
        $('.nav-tab.active').classList.remove('active')
        this.classList.add('active')    
    })
})