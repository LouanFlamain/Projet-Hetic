
// partie boutons:
var carre = document.querySelector('.button-carre');
var rond = document.querySelector('.button-rond');
var tri = document.querySelector('.button-triangle');
var texte = document.querySelector('.button-texte');
var section = document.querySelector('.section');
var saveCarre = false;
var saveRond = false;
var saveTri = false;
var saveTxt = false;
var etat = false;

//select taille police
const monselect = document.querySelector('#toto');
monselect.value = 1;
//console.log(monselect.value);
monselect.onchange = tata;
function tata() {
    //console.log(monselect.value);
}

//select style police
const monselectPolice = document.querySelector('#m1');
monselectPolice.value = 'police1';
//console.log(monselectPolice.value);
monselectPolice.onchange = m2;
function m2(){
    console.log(monselectPolice.value);
}

//select style couleurs :
const monselectCouleurs = document.querySelector('#alpha');
monselectCouleurs.value = 'remplissage';
monselectCouleurs.onchange = beta;
function beta(){
    //console.log(monselectCouleurs.value);
}


//bouton suppression :

var supp = document.querySelector('.delete');

//bouton select : 
var select = document.querySelector('.select');
var selectEtat = false;
select.addEventListener('click', function(){
    selectEtat = true;
})
//bouton palette de couleurs
var palette = document.querySelector('.palette');
var sliderCroix = document.querySelector('.slider-croix');
var sliderPalette = document.querySelector('.slider-palette');
palette.addEventListener('click', function(){
    sliderPalette.style.marginRight = 0 + 'px';
})
sliderCroix.addEventListener('click', function(){
    sliderPalette.style.marginRight = -400 + 'px';
})

//boutons couleurs : 
var noir = document.querySelector('.color-noir');
var blanc = document.querySelector('.color-blanc');
var gris = document.querySelector('.color-gris');
var marron = document.querySelector('.color-marron');
var rouge = document.querySelector('.color-rouge');
var rougeOrange = document.querySelector('.color-rouge-orange');
var orange = document.querySelector('.color-orange');
var jaune = document.querySelector('.color-jaune');
var vert = document.querySelector('.color-vert');
var vertC = document.querySelector('.color-vert-c');
var bleuC = document.querySelector('.color-bleu-c');
var bleu = document.querySelector('.color-bleu');
var bleuF = document.querySelector('.color-bleu-f');
var violet = document.querySelector('.color-violet');
var rose = document.querySelector('.color-rose');
var transparent = document.querySelector('.color-transparent');
var color = '';


noir.addEventListener('click',function(){
    color = 'noir';
})
blanc.addEventListener('click',function(){
    color = 'blanc';
})
gris.addEventListener('click',function(){
    color = 'gris';
})
marron.addEventListener('click',function(){
    color = 'marron';
})
rouge.addEventListener('click', function(){
    color = 'rouge';
})
rougeOrange.addEventListener('click',function(){
    color = 'rougeOrange';
})
orange.addEventListener('click',function(){
    color = 'orange';
})
jaune.addEventListener('click',function(){
    color = 'jaune';
})
vert.addEventListener('click',function(){
    color = 'vert';
})
vertC.addEventListener('click',function(){
    color = 'vertC';
})
bleuC.addEventListener('click',function(){
    color = 'bleuC';
})
bleu.addEventListener('click', function(){
    color = 'bleu';
})
bleuF.addEventListener('click',function(){
    color = 'bleuF';
})
violet.addEventListener('click',function(){
    color = 'violet';
})
rose.addEventListener('click',function(){
    color = 'rose';
})
transparent.addEventListener('click',function(){
    color = 'transparent';
})


//var carres = [];



carre.addEventListener('click', function(){
    saveCarre = true;
    saveRond = false;
    saveTri = false;
    saveTxt = false;
});

        section.addEventListener('click', function(pos){
            if(saveCarre === true){
                var xi = pos.clientX;
                var yi = pos.clientY;

                const global = document.createElement("div");
                const div1 = document.createElement("div");
                const div2 = document.createElement("div");
                const div3 = document.createElement("div");
            
                global.appendChild(div1);
                global.appendChild(div2);
                global.appendChild(div3);
                global.classList.add('carre-global');
                global.style.top = yi - 200 + 'px';
                global.style.left = xi - 90 + 'px';
                div1.classList.add('orientation');
                div2.classList.add('carre');
                div3.classList.add('selector');
                
                section.appendChild(global);

                saveCarre = false;
            
                //suppression carré
                suppEtat = false;
                supp.addEventListener('click', function(){
                    suppEtat = true;
                })
            
            
            
                //déplacement cube
                var doNotResize = false;
                global.addEventListener('drag', function(event){
                    if(etat === true){
                    if(!doNotResize) {
                        var x = event.clientX - 20;
                        var y = event.clientY - 20;
                
                        if(x > 0 && x < 1620) global.style.left = x + 'px';
                        if(y > 0 && y < 600) global.style.top = y + 'px';
                    }
                 }
                });
            
                //resize cube
                div3.addEventListener('drag', function(size){
                    doNotResize = true;
                    div2.style.width = `${size.pageX - div2.getBoundingClientRect().right}px` ;
                    div2.style.height = `${size.pageY - div2.getBoundingClientRect().bottom}px` ;
                    div2.style.width = size.pageX - div2.getBoundingClientRect().left + 'px' ;
                    div2.style.height = `${size.pageY - div2.getBoundingClientRect().top}px` ;
                       /* var x = size.clientX - 10;
                        var y = size.clientY - 10;
                
                        div2.style.width = x + 'px';
                        div2.style.height = y + 'px';*/
                });
            
                div3.addEventListener('dragend', function() {
                    doNotResize = false;
                })
            
                //orientation cube
                div1.addEventListener('drag',function(rotate){
                    console.log('test');
                    doNotResize = true;
                        var x = rotate.clientX - 10;
                        //var y = rotate.clientY - 10;
            
                       if(x>0) global.style.transform = 'rotate(' + x + 'deg)';
                })
            
                div1.addEventListener('dragend', function(){
                    doNotResize = false;
                })
                 
                //dblclick sur le cube pour enlever la sélection
                div2.addEventListener('dblclick', function(){
                    etat = false;
                    div2.classList.remove('active');
                    div3.classList.remove('selector-bis');  
                    div1.classList.remove('orientation-bis')
                });
                //activer la sélection si on a appuyé sur le bouton sélection et que l'on clique sur le cube
                div2.addEventListener('click', function(){
                    if(selectEtat == true){
                        div2.classList.add('active');
                        div3.classList.add('selector-bis');
                        div1.classList.add('orientation-bis');
                        etat = true;
                        selectEtat = false;
                    }
                });
            
                div2.addEventListener('mouseup', function(){
                    hasDoneDown = false;
                    //console.log('up');
               });
            
               div2.addEventListener('mousedown', function(){
                    hasDoneDown = true;
                    //console.log('down');
                });
            
                div3.addEventListener('click', function(){
                    //console.log('click');
                })
            
                //réglages couleurs et suppression
            
                div2.addEventListener('click', function(){
                    if(suppEtat === true){
                        global.remove();
                        div1.remove();
                        div2.remove();
                        div3.remove();
                        suppEtat = false;
                    }
                    if(etat = true){
                        if(monselectCouleurs.value == 'remplissage'){
                            if(color === 'noir'){
                                div2.style.backgroundColor = 'black';
                                color = '';
                            }
                
                            else if(color === 'blanc'){
                                div2.style.backgroundColor = 'white';
                                color = '';
                            }
                            else if(color === 'gris'){
                                div2.style.backgroundColor = 'grey';
                                color = '';
                            }
                            else if(color === 'marron'){
                                div2.style.backgroundColor = 'maroon';
                                color = '';
                            }
                            else if(color === 'rouge'){
                                div2.style.backgroundColor = 'red';
                                color = '';
                            }
                            else if(color === 'rougeOrange'){
                                div2.style.backgroundColor = 'rgb(255, 75, 4)';
                                color = '';
                            }
                            else if(color === 'orange'){
                                div2.style.backgroundColor = 'orange';
                                color = '';
                            }
                            else if(color === 'jaune'){
                                div2.style.backgroundColor = 'yellow';
                                color = '';
                            }
                            else if(color === 'vert'){
                                div2.style.backgroundColor = 'green';
                                color = '';
                            }
                            else if(color === 'vertC'){
                                div2.style.backgroundColor = 'greenyellow';
                                color = '';
                            }
                            else if(color === 'bleuC'){
                                div2.style.backgroundColor = 'rgb(9, 223, 252)';
                                color = '';
                            }
                            else if(color === 'bleu'){
                                div2.style.backgroundColor = 'rgb(0, 89, 255)';
                                color = '';
                            }
                            else if(color === 'bleuF'){
                                div2.style.backgroundColor = 'rgb(34, 4, 170)';
                                color = '';
                            }
                            else if(color === 'violet'){
                                div2.style.backgroundColor = 'blueviolet';
                                color = '';
                            }
                            else if(color === 'rose'){
                                div2.style.backgroundColor = 'pink';
                                color = '';
                            }
                            else if(color === 'transparent'){
                                div2.style.backgroundColor = 'transparent';
                                div2.style.border = '1px solid black';
                                color = '';
                            }
                        }
                        else if(monselectCouleurs.value == 'contours'){
                            if(color === 'noir'){
                                div2.style.border = '1px solid black';
                                color = '';
                            }
                
                            else if(color === 'blanc'){
                                div2.style.border = '1px solid white';
                                color = '';
                            }
                            else if(color === 'gris'){
                                div2.style.border = '1px solid grey';
                                color = '';
                            }
                            else if(color === 'marron'){
                                div2.style.border = '1px solid marron';
                                color = '';
                            }
                            else if(color === 'rouge'){
                                div2.style.border = '1px solid red';
                                color = '';
                            }
                            else if(color === 'rougeOrange'){
                                div2.style.border = '1px solid rgb(255, 75, 4)';
                                color = '';
                            }
                            else if(color === 'orange'){
                                div2.style.border = '1px solid orange';
                                color = '';
                            }
                            else if(color === 'jaune'){
                                div2.style.border = '1px solid yellow';
                                color = '';
                            }
                            else if(color === 'vert'){
                                div2.style.border = '1px solid green';
                                color = '';
                            }
                            else if(color === 'vertC'){
                                div2.style.border = '1px solid greenyellow';
                                color = '';
                            }
                            else if(color === 'bleuC'){
                                div2.style.border = '1px solid rgb(9, 223, 252)';
                                color = '';
                            }
                            else if(color === 'bleu'){
                                div2.style.border = '1px solid rgb(0, 89, 255)';
                                color = '';
                            }
                            else if(color === 'bleuF'){
                                div2.style.border = '1px solid rgb(34, 4, 170)';
                                color = '';
                            }
                            else if(color === 'violet'){
                                div2.style.border = '1px solid blueviolet';
                                color = '';
                            }
                            else if(color === 'rose'){
                                div2.style.border = '1px solid pink';
                                color = '';
                            }
                            else if(color === 'transparent'){
                                div2.style.border = '1px solid transparent';
                                color = '';
                            }
                        }
                    }
                })
            
            }
        })

rond.addEventListener('click', function(){
    saveCarre = false;
    saveRond = true;
    saveTri = false;
    saveTxt = false;
});
        section.addEventListener('click', function(pos){
            if(saveRond === true){
                var xi = pos.clientX;
                var yi = pos.clientY;

                const global = document.createElement("div");
                const div1 = document.createElement("div");
                const div2 = document.createElement("div");
                const div3 = document.createElement("div");
            
                global.appendChild(div1);
                global.appendChild(div2);
                global.appendChild(div3);
                global.classList.add('carre-global');
                global.style.top = yi - 50 + 'px';
                global.style.left = xi - 60 + 'px';
                div1.classList.add('orientation');
                div2.classList.add('rond');
                div3.classList.add('selector');
                
                section.appendChild(global);

                saveRond = false;
            
                //suppression cercle
                suppEtat = false;
                supp.addEventListener('click', function(){
                    suppEtat = true;
                })
            
            
            
                //déplacement cercle
                var doNotResize = false;
                global.addEventListener('drag', function(event){
                    if(etat === true){
                    if(!doNotResize) {
                        var x = event.clientX - 20;
                        var y = event.clientY - 20;
                
                        if(x > 90 && x<1720) global.style.left = x + 'px';
                        if(y > 190 && y<790) global.style.top = y + 'px';
                    }
                 }
                });
            
                //resize cercle
                div3.addEventListener('drag', function(size){
                    doNotResize = true;
                    div2.style.width = `${size.pageX - div2.getBoundingClientRect().right}px` ;
                    div2.style.height = `${size.pageY - div2.getBoundingClientRect().bottom}px` ;
                    div2.style.width = size.pageX - div2.getBoundingClientRect().left + 'px' ;
                    div2.style.height = `${size.pageY - div2.getBoundingClientRect().top}px` ;
                        /*var x = size.clientX - 10;
                        var y = size.clientY - 10;
                
                        div2.style.width = x + 'px';
                        div2.style.height = y + 'px';*/
                });
            
                div3.addEventListener('dragend', function() {
                    doNotResize = false;
                })
            
                //orientation cercle
                div1.addEventListener('drag',function(rotate){
                    console.log('test');
                    doNotResize = true;
                        var x = rotate.clientX - 10;
                        //var y = rotate.clientY - 10;
            
                       if(x>0) global.style.transform = 'rotate(' + x + 'deg)';
                })
            
                div1.addEventListener('dragend', function(){
                    doNotResize = false;
                })
                 
                //dblclick sur le cube pour enlever la sélection
                div2.addEventListener('dblclick', function(){
                    etat = false;
                    div2.classList.remove('active');
                    div3.classList.remove('selector-bis');  
                    div1.classList.remove('orientation-bis')
                });
                //activer la sélection si on a appuyé sur le bouton sélection et que l'on clique sur le cercle
                div2.addEventListener('click', function(){
                    if(selectEtat == true){
                        div2.classList.add('active');
                        div3.classList.add('selector-bis');
                        div1.classList.add('orientation-bis');
                        etat = true;
                        selectEtat = false;
                    }
                });
            
                div2.addEventListener('mouseup', function(){
                    hasDoneDown = false;
                    //console.log('up');
               });
            
               div2.addEventListener('mousedown', function(){
                    hasDoneDown = true;
                    //console.log('down');
                });
            
                div3.addEventListener('click', function(){
                    //console.log('click');
                })
            
                //réglages couleurs et suppression
            
                div2.addEventListener('click', function(){
                    if(suppEtat === true){
                        global.remove();
                        div1.remove();
                        div2.remove();
                        div3.remove();
                        suppEtat = false;
                    }
                   // if(etat = true){
                        if(monselectCouleurs.value == 'remplissage'){
                            if(color === 'noir'){
                                div2.style.backgroundColor = 'black';
                                color = '';
                            }
                
                            else if(color === 'blanc'){
                                div2.style.backgroundColor = 'white';
                                color = '';
                            }
                            else if(color === 'gris'){
                                div2.style.backgroundColor = 'grey';
                                color = '';
                            }
                            else if(color === 'marron'){
                                div2.style.backgroundColor = 'maroon';
                                color = '';
                            }
                            else if(color === 'rouge'){
                                div2.style.backgroundColor = 'red';
                                color = '';
                            }
                            else if(color === 'rougeOrange'){
                                div2.style.backgroundColor = 'rgb(255, 75, 4)';
                                color = '';
                            }
                            else if(color === 'orange'){
                                div2.style.backgroundColor = 'orange';
                                color = '';
                            }
                            else if(color === 'jaune'){
                                div2.style.backgroundColor = 'yellow';
                                color = '';
                            }
                            else if(color === 'vert'){
                                div2.style.backgroundColor = 'green';
                                color = '';
                            }
                            else if(color === 'vertC'){
                                div2.style.backgroundColor = 'greenyellow';
                                color = '';
                            }
                            else if(color === 'bleuC'){
                                div2.style.backgroundColor = 'rgb(9, 223, 252)';
                                color = '';
                            }
                            else if(color === 'bleu'){
                                div2.style.backgroundColor = 'rgb(0, 89, 255)';
                                color = '';
                            }
                            else if(color === 'bleuF'){
                                div2.style.backgroundColor = 'rgb(34, 4, 170)';
                                color = '';
                            }
                            else if(color === 'violet'){
                                div2.style.backgroundColor = 'blueviolet';
                                color = '';
                            }
                            else if(color === 'rose'){
                                div2.style.backgroundColor = 'pink';
                                color = '';
                            }
                            else if(color === 'transparent'){
                                div2.style.backgroundColor = 'transparent';
                                div2.style.border = '1px solid black';
                                color = '';
                            }
                        }
                        else if(monselectCouleurs.value == 'contours'){
                            if(color === 'noir'){
                                div2.style.border = '1px solid black';
                                color = '';
                            }
                
                            else if(color === 'blanc'){
                                div2.style.border = '1px solid white';
                                color = '';
                            }
                            else if(color === 'gris'){
                                div2.style.border = '1px solid grey';
                                color = '';
                            }
                            else if(color === 'marron'){
                                div2.style.border = '1px solid marron';
                                color = '';
                            }
                            else if(color === 'rouge'){
                                div2.style.border = '1px solid red';
                                color = '';
                            }
                            else if(color === 'rougeOrange'){
                                div2.style.border = '1px solid rgb(255, 75, 4)';
                                color = '';
                            }
                            else if(color === 'orange'){
                                div2.style.border = '1px solid orange';
                                color = '';
                            }
                            else if(color === 'jaune'){
                                div2.style.border = '1px solid yellow';
                                color = '';
                            }
                            else if(color === 'vert'){
                                div2.style.border = '1px solid green';
                                color = '';
                            }
                            else if(color === 'vertC'){
                                div2.style.border = '1px solid greenyellow';
                                color = '';
                            }
                            else if(color === 'bleuC'){
                                div2.style.border = '1px solid rgb(9, 223, 252)';
                                color = '';
                            }
                            else if(color === 'bleu'){
                                div2.style.border = '1px solid rgb(0, 89, 255)';
                                color = '';
                            }
                            else if(color === 'bleuF'){
                                div2.style.border = '1px solid rgb(34, 4, 170)';
                                color = '';
                            }
                            else if(color === 'violet'){
                                div2.style.border = '1px solid blueviolet';
                                color = '';
                            }
                            else if(color === 'rose'){
                                div2.style.border = '1px solid pink';
                                color = '';
                            }
                            else if(color === 'transparent'){
                                div2.style.border = '1px solid transparent';
                                color = '';
                            }
                        }
                    //}
                })
            }
        })

tri.addEventListener('click', function(){
    saveCarre = false;
    saveRond = false;
    saveTri = true;
    saveTxt = false;
});
        section.addEventListener('click', function(pos){
            if(saveTri === true){
                var xi = pos.clientX;
                var yi = pos.clientY;

                const global = document.createElement("div");
                const div1 = document.createElement("div");
                const div2 = document.createElement("div");
                const div3 = document.createElement("div");
            
                global.appendChild(div1);
                global.appendChild(div2);
                global.appendChild(div3);
                global.classList.add('carre-global');
                global.style.top = yi - 220 + 'px';
                global.style.left = xi - 130 + 'px';
                div1.classList.add('orientation');
                div2.classList.add('triangle');
                div3.classList.add('selector');
                
                section.appendChild(global);

                saveTri = false;
            
                var colorTriSave = '';
            
                //suppression triangle
                suppEtat = false;
                supp.addEventListener('click', function(){
                    suppEtat = true;
                })
            
            
            
                //déplacement triangle
                var doNotResize = false;
                global.addEventListener('drag', function(event){
                    if(etat === true){
                    if(!doNotResize) {
                        var x = event.clientX - 20;
                        var y = event.clientY - 20;
                
                        if(x > 0) global.style.left = x + 'px';
                        if(y > 0) global.style.top = y + 'px';
                    }
                 }
                });
            
                //resize triangle
                div3.addEventListener('drag', function(size){
                    doNotResize = true;
            
                   /* div2.style.borderRight = `${size.pageX - div2.getBoundingClientRect().right}px` + ' solid' ;
                    div2.style.borderBottom = `${size.pageY - div2.getBoundingClientRect().bottom}px` + ' solid';
                    div2.style.borderLeft = size.pageX - div2.getBoundingClientRect().left + 'px solid' ;
                    div2.style.borderBottom = `${size.pageY - div2.getBoundingClientRect().top}px` + ' solid' ; */
            
                        var x = size.clientX - 10;
                        var y = size.clientY - 10;
                        if (y > 0) ysave = y;
                        div2.style.borderRightWidth = x + 'px';
                        div2.style.borderLeftWidth = x + 'px';
                        if (y > 0 )div2.style.borderBottom = y + 'px solid';
                        div2.style.borderBottomColor = colorTriSave;
                        
            
                });
            
                div3.addEventListener('dragend', function() {
                    doNotResize = false;
                })
            
                //orientation triangle
                div1.addEventListener('drag',function(rotate){
                    doNotResize = true;
                        var x = rotate.clientX - 10;
                        //var y = rotate.clientY - 10;
            
                       if(x>0) global.style.transform = 'rotate(' + x + 'deg)';
                })
            
                div1.addEventListener('dragend', function(){
                    doNotResize = false;
                })
                 
                //dblclick sur le triangle pour enlever la sélection
                div2.addEventListener('dblclick', function(){
                    etat = false;
                    div2.classList.remove('active');
                    div3.classList.remove('selector-bis');  
                    div1.classList.remove('orientation-bis')
                });
                //activer la sélection si on a appuyé sur le bouton sélection et que l'on clique sur le triangle
                div2.addEventListener('click', function(){
                    if(selectEtat == true){
                        div2.classList.add('active-tri');
                        div3.classList.add('selector-bis');
                        div1.classList.add('orientation-bis');
                        etat = true;
                        selectEtat = false;
                    }
                });
            
                div2.addEventListener('mouseup', function(){
                    hasDoneDown = false;
                    //console.log('up');
               });
            
               div2.addEventListener('mousedown', function(){
                    hasDoneDown = true;
                    //console.log('down');
                });
            
                div3.addEventListener('click', function(){
                    //console.log('click');
                })
            
                //réglages couleurs et suppression
                div2.addEventListener('click', function(){
                    if(suppEtat === true){
                        global.remove();
                        div1.remove();
                        div2.remove();
                        div3.remove();
                        suppEtat = false;
                    }
                    if(etat = true){
                        if(color === 'noir'){
                            div2.style.borderBottomColor = 'black';
                            colorTriSave = 'black';
                            color = '';
                        }
            
                        else if(color === 'blanc'){
                            div2.style.borderBottomColor = 'white';
                            colorTriSave = 'white';
                            color = '';
                        }
                        else if(color === 'gris'){
                            div2.style.borderBottomColor = 'grey';
                            colorTriSave = 'grey';
                            color = '';
                        }
                        else if(color === 'marron'){
                            div2.style.borderBottomColor = 'maroon';
                            colorTriSave = 'maroon';
                            color = '';
                        }
                        else if(color === 'rouge'){
                            div2.style.borderBottomColor = 'red';
                            colorTriSave = 'red';
                            color = '';
                        }
                        else if(color === 'rougeOrange'){
                            div2.style.borderBottomColor = 'rgb(255, 75, 4)';
                            colorTriSave = 'rgb(255, 75, 4)';
                            color = '';
                        }
                        else if(color === 'orange'){
                            div2.style.borderBottomColor = 'orange';
                            colorTriSave = 'orange';
                            color = '';
                        }
                        else if(color === 'jaune'){
                            div2.style.borderBottomColor = 'yellow';
                            colorTriSave = 'yellow';
                            color = '';
                        }
                        else if(color === 'vert'){
                            div2.style.borderBottomColor = 'green';
                            colorTriSave = 'green';
                            color = '';
                        }
                        else if(color === 'vertC'){
                            div2.style.borderBottomColor = 'greenyellow';
                            colorTriSave = 'greenyellow';
                            color = '';
                        }
                        else if(color === 'bleuC'){
                            div2.style.borderBottomColor = 'rgb(9, 223, 252)';
                            colorTriSave = 'rgb(9, 223, 252)';
                            color = '';
                        }
                        else if(color === 'bleu'){
                            div2.style.borderBottomColor = 'rgb(0, 89, 255)';
                            colorTriSave = 'rgb(0, 89, 255)';
                            color = '';
                        }
                        else if(color === 'bleuF'){
                            div2.style.borderBottomColor = 'rgb(34, 4, 170)';
                            colorTriSave = 'rgb(34, 4, 170)';
                            color = '';
                        }
                        else if(color === 'violet'){
                            div2.style.borderBottomColor = 'blueviolet';
                            colorTriSave = 'blueviolet';
                            color = '';
                        }
                        else if(color === 'rose'){
                            div2.style.borderBottomColor = 'pink';
                            colorTriSave = 'pink';
                            color = '';
                        }
                        else if(color === 'transparent'){
                            div2.style.borderBottomColor = 'black';
                            colorTriSave ='black';
                            color = '';
                        }
                    }
                })
            }
        })

var id = 0;

texte.addEventListener('click', function(){
    saveCarre = false;
    saveRond = false;
    saveTri = false;
    saveTxt = true;
});

        section.addEventListener('click', function(pos){
            if(saveTxt === true){
                var xi = pos.clientX;
                var yi =  pos.clientY;
    
                id++;
                const global = document.createElement("div");
                const div1 = document.createElement("div");
                const div2 = document.createElement("input");
                const div3 = document.createElement("div");
            
                global.appendChild(div1);
                global.appendChild(div2);
                global.appendChild(div3);
                global.classList.add('carre-global-text');
                global.style.top = yi - 200 + 'px';
                global.style.left = xi - 70 + 'px';
                div1.classList.add('orientation');
                div2.classList.add('text-init');
                div2.setAttribute("type", "text");
                div2.setAttribute("id", id);
                div3.classList.add('selector-text')
                // div2.setAttribute("autofocus", "true")
              
                //div2.setAttribute("placeholder", "Input id numéro " + id);
                
                section.appendChild(global);
    
                saveTxt = false;
                
                // Donne le focus à
                div2.focus()
            
                //suppression carré
                suppEtat = false;
                supp.addEventListener('click', function(){
                    suppEtat = true;
                })
            
            
            
                //déplacement text
                var doNotResize = false;
                div3.addEventListener('drag', function(event){
                    if(etat === true){
                    if(!doNotResize) {
                        var x = event.clientX - 20;
                        var y = event.clientY - 20;
                
                        if(x > 0) global.style.left = x + 'px';
                        if(y > 0) global.style.top = y + 'px';
                    }
                 }
                });
            
                //resize text
            
                div2.addEventListener('click', function(){
                    if(monselect.value === '1'){
                        div2.style.fontSize = 20 + 'px';
                    }
                    else if(monselect.value === '2'){
                        div2.style.fontSize = 30 + 'px';
                    }
                    else if(monselect.value === '3'){
                        console.log(monselect.value);
                        div2.style.fontSize = 40 + 'px';
                    }
                    else if(monselect.value === '4'){
                        div2.style.fontSize = 50 + 'px';
                    }
                    else if(monselect.value === '5'){
                        div2.style.fontSize = 60 + 'px';
                    }
                    else if(monselect.value === '6'){
                        div2.style.fontSize = 70 + 'px';
                    }
                })

                div2.addEventListener('click', function(){
                    if(monselectPolice.value === 'police1'){
                         div2.style.fontFamily = 'none';
                     }
                    else if(monselectPolice.value === 'police2'){
                         div2.style.fontFamily = 'Segoe Print';
                     }
                    else if(monselectPolice.value === 'police3'){
                        div2.style.fontFamily = 'Impact' ;
                     }
                })
            
            
                div3.addEventListener('dragend', function() {
                    doNotResize = false;
                })
            
                //orientation text
                div1.addEventListener('drag',function(rotate){
                    console.log('test');
                    doNotResize = true;
                        var x = rotate.clientX - 10;
                        //var y = rotate.clientY - 10;
            
                       if(x>0) global.style.transform = 'rotate(' + x + 'deg)';
                })
            
                div1.addEventListener('dragend', function(){
                    doNotResize = false;
                })
                 
                //dblclick sur le cube pour enlever la sélection
                div2.addEventListener('dblclick', function(){
                    etat = false;
                    div2.classList.remove('active');
                    div3.classList.remove('selector-bis-text'); 
                    div1.classList.remove('orientation-bis')
                });
                //activer la sélection si on a appuyé sur le bouton sélection et que l'on clique sur le cube
                div2.addEventListener('click', function(){
                    if(selectEtat == true){
                        div2.classList.add('active');
                        div1.classList.add('orientation-bis');
                        div3.classList.add('selector-bis-text');
                        div2.classList.add('text');
                        div2.classList.remove('text-init');
                        etat = true;
                        selectEtat = false;
                    }
                });
            
                div2.addEventListener('mouseup', function(){
                    hasDoneDown = false;
                    //console.log('up');
               });
            
               div2.addEventListener('mousedown', function(){
                    hasDoneDown = true;
                    //console.log('down');
                });
            
                div3.addEventListener('click', function(){
                    //console.log('click');
                })
            
                //réglages couleurs et suppression
            
                div2.addEventListener('click', function(){
                    if(suppEtat === true){
                        global.remove();
                        div1.remove();
                        div2.remove();
                        div3.remove();
                        suppEtat = false;
                    }
                    if(etat = true){
                        if(color === 'noir'){
                            div2.style.color = 'black';
                            div2.style.border = 'none';
                            color = '';
                        }
            
                        else if(color === 'blanc'){
                            div2.style.color = 'white';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'gris'){
                            div2.style.color = 'grey';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'marron'){
                            div2.style.color = 'maroon';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'rouge'){
                            div2.style.color = 'red';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'rougeOrange'){
                            div2.style.color = 'rgb(255, 75, 4)';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'orange'){
                            div2.style.color = 'orange';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'jaune'){
                            div2.style.color = 'yellow';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'vert'){
                            div2.style.color = 'green';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'vertC'){
                            div2.style.color = 'greenyellow';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'bleuC'){
                            div2.style.color = 'rgb(9, 223, 252)';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'bleu'){
                            div2.style.color = 'rgb(0, 89, 255)';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'bleuF'){
                            div2.style.color = 'rgb(34, 4, 170)';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'violet'){
                            div2.style.color = 'blueviolet';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'rose'){
                            div2.style.color = 'pink';
                            div2.style.border = 'none';
                            color = '';
                        }
                        else if(color === 'transparent'){
                            div2.style.color = 'transparent';
                            div2.style.border = '1px solid black';
                            color = '';
                        }
            
                    }
                })
            }
        })

