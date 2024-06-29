
var productScore = document.querySelectorAll('.product-score');
    productScore.forEach(product =>{
        product.innerHTML = 10;
    });

    // program for nav height;
    var nav = document.querySelector('nav');
    var main = document.querySelector('main');

    var mainHeight = (main.style.height) + "px";
    nav.style.height = mainHeight;


   


    // program for side nav 
    var navHamMenu = document.getElementById('nav-ham-menu')
    var headerHamMenu = document.getElementById('header-ham-menu') ;

    var cardsContainer = document.querySelector('.products-cards-container');
    var mainContainer = document.querySelector('.main-content');

    var navIsOpen = Boolean(navIsOpen);



        if(document.documentElement.clientWidth > 655){

            headerHamMenu.addEventListener('click', () =>{
                nav.classList.remove('nav-closed');
                    
                
                headerHamMenu.classList.remove('nav-closed');
                mainContainer.classList.remove('nav-closed');
            // cardsContainer.classList.add('nav-open');
    
                   
                    
                
            });
    
    
            navHamMenu.addEventListener('click', () =>{
                nav.classList.add('nav-closed');
    
                        headerHamMenu.classList.add('nav-closed');
                    // cardsContainer.classList.add('nav-open');
                mainContainer.classList.add('nav-closed');
    
    
            })
        }

        if(document.documentElement.clientWidth <= 655){
            headerHamMenu.addEventListener('click', () =>{
                nav.classList.add('open');
                    
                
                headerHamMenu.classList.add('nav-closed');
                // mainContainer.classList.remove('nav-closed');
            })


        navHamMenu.addEventListener('click', () =>{
            nav.classList.remove('open');

                    headerHamMenu.classList.remove('nav-closed');
                // cardsContainer.classList.add('nav-open');
            // mainContainer.classList.add('nav-closed');


        })
    }


    if(document.documentElement.clientWidth )


            // program for nav buttons

            var button = document.getElementById('products');
            var otherContent = document.querySelector('.other');
                button.addEventListener('click', () =>{
                   otherContent.classList.toggle('open');
                    button.classList.toggle('open');
                   

                })

            // program for nav menu / account menu

            var profileMenuIcon = document.querySelector('.nav-menu-icon');
            var header = document.querySelector('header');
            var profileMenu = document.querySelector('.profile-options');
                profileMenuIcon.addEventListener('click', () =>{
                    profileMenu.classList.toggle('open');

                })



// program for sales demo

            const Bars = document.querySelectorAll('.bar-value');
            Bars.forEach(bar =>{
                var value = bar.getAttribute('data-val');
                bar.style.height = (value/100) * 15 + "rem";
            })
        

