let $form = document.querySelector('.search-form');
let $searchInput = $form.querySelector('#search');
let $animes = document.querySelector('.animes');
let $main = document.querySelector('.p-4');
let $Div1 = document.querySelector('.row');
let $imgTest = document.querySelector('.card-img-top');
let $loader = document.querySelector('.loader');
let $prevBtn = document.querySelector('.btnprev');
let $skipBtn = document.querySelector('.btnskip');
let $myAnime = document.querySelector('.navbar-brand');

let $currentPage = 1;
let start = 1;
let $lastPage;


// à vous de jouer
// remplcer le XXX par la valeur du input
// afficher les animes dans la page
// voici l'API : https://api.jikan.moe/v4/anime?limit=10&q=XXXX

let showError = function (message) {
    $error.classList.add('is-active');
    $errorText.textContent = message;
  };

let search;
let first = function(newPage, oldPage){
    fetch('https://api.jikan.moe/v4/anime?limit=12&q=' + search + '&page=' + $currentPage)
    .then(function(response){
        if(response.status === 404){
            showError('cette page n\'existe pas');

            $currentPage = oldPage;
            return;
        }
        return response.json();
     })
    .then(function(animes){

        console.log('https://api.jikan.moe/v4/anime?limit=12&q=' + search + '&page=' + $currentPage);
        
        while($Div1.children.length > 0){
            $Div1.children[0].remove();
        }
        $loader.classList.remove('is-active');
        if (animes == undefined) {
            return;
        }
        if (animes.data.length === 0) {
            showError('Il n\'y a plus d\'animes pour cette recherche');
            $currentPage = oldPage;
            return;
          }

        for(let i = 0; i < animes.pagination.items.count; i++){
            let AllAnimes = animes.data[i];

                let $Div2 = document.createElement('div');
                let $Div3 = document.createElement('div');
                let $Div4 = document.createElement('div');
                let $P = document.createElement('p');
                let $img = document.createElement('img');
                let $h5 = document.createElement('h5');
                let $a = document.createElement('a');
    
                $img.setAttribute('src', AllAnimes.images.jpg.image_url);
                $h5.textContent = AllAnimes.title;
                $P.textContent = AllAnimes.synopsis;
                $a.setAttribute('href', AllAnimes.url);
                $a.textContent = 'More informations';

    
                $Div2.classList.add('col-3','mb-4');
                $Div3.classList.add('anime','card');
                $Div4.classList.add('card-body');
                $img.classList.add('card-img-top');
                $P.classList.add('card-text','scroll_page');
                $h5.classList.add('card-title');
                $a.classList.add('btn','btn-primary');
    
    
                $Div1.appendChild($Div2);
                $Div2.appendChild($Div3);
                $Div3.appendChild($img);
                $Div3.appendChild($Div4);
                $Div4.appendChild($img);
                $Div4.appendChild($P);
                $Div4.appendChild($h5);
                $Div4.appendChild($a);

            

            
        }
        $lastPage = animes.pagination.last_visible_page;
    })
}

$loader.classList.add('is-active');
search = '';
first();

$myAnime.addEventListener('click', function(){
    $loader.classList.add('is-active');
    search = '';
    first();
})

$form.addEventListener('submit', function(event){
    $currentPage = 1;
    $loader.classList.add('is-active');
    event.preventDefault();
    search = $searchInput.value;
    $searchInput.value = '';
    first();
})


$prevBtn.addEventListener('click',function(){

    if($currentPage <=1){
        $currentPage = 1;
    }
    else{
        $currentPage = $currentPage - 1;
    }
    $loader.classList.add('is-active');
    first();
})

$skipBtn.addEventListener('click',function(){
    $loader.classList.add('is-active');
    if($currentPage < $lastPage){
        $currentPage++ ;
    }
    else{
        $currentPage = $lastPage;
    }
    first();
})
