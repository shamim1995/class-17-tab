const tab_menu = document.querySelectorAll('.tab_menu ul li a')
const tab_pane_all = document.querySelectorAll('.tab_pane')


tab_menu.forEach(data =>{
    
    data.addEventListener('click',function(){
       tab_menu.forEach(item =>{
        item.classList.remove('active')
       });
       data.classList.add('active')

       const tab_pane = document.querySelector(this.getAttribute('href'))

       tab_pane_all.forEach(data=>{
           data.classList.remove('active')
       })
       tab_pane.classList.add('active')

    });

});