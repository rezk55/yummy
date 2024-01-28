
$(document).ready(function(){

    startMeals('');

    //show & hide nav
    $(".hide").on("click", function(){

        $(this).css({
            "opacity":"0",
            "z-index":"-1"
        });

        $(".show").css({
            "opacity":"1",
        });

        $("nav").css({
            "transform": "translateX(-80%)",
        });

        $("nav .menu li").css({
            "transform": "translateY(500%)",
        })
    });

    $(".show").on("click", function(){

        $(".show").css({
            "opacity":"0",
        });

        $(".hide").css({
            "opacity":"1",
            "z-index":"0"
        });

        $("nav").css({
            "transform": "translateX(0%)",
        });

        let lists =  $("nav .menu li");
        let delay = 0.4;
        for(let i=0;i<lists.length;i++){

            $(lists[i]).css({
                "transform": "translateY(0%)",
                "transition": `transform ${delay + 0.2}s`,
            });
            delay +=0.2;
        }
    });

    //search
    $("#showSearch").on("click",function(){
        $("nav li a").css({
            "color":"#fff",
        });

        $(this).css({
            "color":"#FBC911",
        });

        $("#search").css({
            "display":"block",
        })

        $("#showData").css({
           "display":"flex"
        }).html("");
    });

    $("#name").on("keyup", function(){
        let name = $(this).val();
        searchByName(name);
    });

    $("#fLetter").on("keyup", function(){
        let letter = $(this).val();
        searchByFLetter(letter);
    });

    //Categories
    $("#showCategories").on("click", function(){
        $("nav li a").css({
            "color":"#fff",
        });
        $(this).css({
            "color":"#FBC911",
        });
        $("#search").css({
            "display":"none",
        });
        $("#showData").css({
            "display":"flex"
         });
        categories();
    });

    // Area
    $("#showArea").on("click", function(){
        $("nav li a").css({
            "color":"#fff",
        });
        $(this).css({
            "color":"#FBC911",
        });
        $("#search").css({
            "display":"none",
        });
        $("#showData").css({
            "display":"flex"
         });
        area();
    });

    // Ingredients 
    $("#showIngredients").on("click", function(){
        $("nav li a").css({
            "color":"#fff",
        });
        $(this).css({
            "color":"#FBC911",
        });
        $("#search").css({
            "display":"none",
        });
        $("#showData").css({
            "display":"flex"
         });
         ingredients();
    });

     // Ingredients 
    $("#showContact").on("click", function(){
        $("nav li a").css({
            "color":"#fff",
        });
        $(this).css({
            "color":"#FBC911",
        });
        $("#search").css({
            "display":"none",
        });
        $("#showData").css({
            "display":"flex"
         });
         contactUs();

        //validation
        let allValid = [0,0,0,0,0,0];
        $("#yourName").on("keyup", function(){
            validName($(this));
            activeBtnSubmit();
        });

        $("#yourEmail").on("keyup", function(){
            validEmail($(this));
            activeBtnSubmit();
        });

        $("#yourPhone").on("keyup", function(){
            validPhone($(this));
            activeBtnSubmit();
        });

        $("#yourAge").on("keyup", function(){
            validAge($(this));
            activeBtnSubmit();
        });

        $("#yourPass").on("keyup", function(){
            validPass($(this));
            activeBtnSubmit();

        });

        $("#yourRePass").on("keyup", function(){
            validRePass($(this));
            activeBtnSubmit();
            $("#yourPass").on("keyup", function(){
                validRePass($("#yourRePass"));
                activeBtnSubmit();
            });
        });


         //contact
        function contactUs(){
            const contact = `
            
            <div class="contact">
            <form action="">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="group">
                            <div class="mb-3">
                                <input type="text" class="form-control" id="yourName" placeholder="Enter Your Name">
                                <div class="d-none invalid mt-2 rounded-2 h-25 d-flex justify-content-center my-bg-danger">
                                    <p class="my-auto m-0">Special characters and numbers not allowed</p>
                                </div>
                            </div>
                            <div class="mb-3">
                                <input type="tel" class="form-control" id="yourPhone" placeholder="Enter Your Phone">
                                <div class="d-none invalid mt-2 rounded-2 h-25 d-flex justify-content-center my-bg-danger">
                                    <p class="my-auto m-0">Enter valid Phone Number</p>
                                </div>
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" id="yourPass" placeholder="Enter Your Password">
                                <div class="d-none invalid mt-2 rounded-2 h-25 d-flex justify-content-center my-bg-danger">
                                    <p class="my-auto m-0 w-75">Enter valid password *Minimum eight characters,
                                            at least one letter and one number:*</p>
                                </div>
                            </div>     
                        </div>               
                    </div>
                    <div class="col-lg-6">
                        <div class="group">
                        <div class="mb-3">
                            <input type="email" class="form-control" id="yourEmail" placeholder="Enter Your Email">
                            <div class="d-none invalid mt-2 rounded-2 h-25 d-flex justify-content-center my-bg-danger">
                                <p class="my-auto m-0">Email not valid *exemple@yyy.zzz</p>
                            </div>
                        </div>
                        <div class="mb-3">
                            <input type="number" class="form-control" id="yourAge" placeholder="Enter Your Age">
                            <div class="d-none invalid mt-2 rounded-2 h-25 d-flex justify-content-center my-bg-danger">
                                <p class="my-auto m-0">Enter valid age</p>
                            </div>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="yourRePass" placeholder="RePassword">
                            <div class="d-none invalid mt-2 rounded-2 h-25 d-flex justify-content-center my-bg-danger">
                                <p class="my-auto m-0">Enter valid repassword</p>
                            </div>
                        </div>       
                        </div>             
                    </div>
                </div>
                <div class="submit mt-3">
                    <button id="btnSubmit" type="submit" class="my-btn btn-submit" disabled>Submit</button>
                </div>
                
            </form>
            
        </div>
            
            
            `
            $("#showData").html(contact);
        }

        // validation
        function validName(el){
            let name = el.val();
            let regex = /(^[a-zA-Z]{0,20}[a-zA-Z]$)/ ;
            if(regex.test(name)){ 
                allValid[0] = 1;
            valid(el);
            } else {
                allValid[0] = 0;
                inValid(el);
            }
        }

        function validEmail(el){
            let email = el.val();
            let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;
            if(regex.test(email)){ 
                allValid[1] = 1;
            valid(el);
            } else {
                allValid[1] = 0;
                inValid(el);
            }
        }

        function validPhone(el){
            let phone = el.val();
            let regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/ ;
            if(regex.test(phone)){ 
                allValid[2] = 1;
            valid(el);
            } else {
                allValid[2] = 0;
                inValid(el);
            }
        }

        function validAge(el){
            let age = el.val();
            if(age>0&&age<100){ 
                allValid[3] = 1;
            valid(el);
            } else {
                allValid[3] = 0;
                inValid(el);
            }
        }

        function validPass(el){
            let pass = el.val();
            let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ ;
            if(regex.test(pass)){ 
                allValid[4] = 1; 
                valid(el);
            } else {
                allValid[4] = 0;
                inValid(el);
            }
        }

        function validRePass(el){
            let rePass = el.val();
            let yourPass = $("#yourPass").val();
            if(rePass===yourPass){ 
                allValid[5] = 1;
                valid(el);
            } else {
                allValid[5] = 0;
                inValid(el);
            }
        }

        function activeBtnSubmit(){
            if(allValid.indexOf(0)<0){
                $("#btnSubmit").removeAttr("disabled");
            }
            else {
                $("#btnSubmit").attr("disabled","disabled");
            }
        }

        function valid(el){
            $(el).siblings().addClass('d-none');
            $(el).removeClass('is-invalid');
            $(el).addClass('is-valid');
        }
        
        function inValid(el){
            $(el).siblings().removeClass('d-none');
            $(el).removeClass('is-valid');
            $(el).addClass('is-invalid');
        }
    });
    

    function startMeals(name){
        searchByName(name);
        $("nav").css({
            "display":"none"
        })
    }

    function loadingData(){
        const loading = ` <div class="d-flex loading-data">
                            <i class="fa-solid fa-spinner fas fa-spin fa-4x m-auto text-light "></i>
                        </div>`

        $("#showData").html(loading);
    }

    async function searchByName(name){
        loadingData();
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        let response = await data.json();
        let meals = response.meals;
        displayMeals(meals);
        $(".box").on("click",async function(){
            $("#search").css({
                "display":"none",
            });
            let title = $(this).children('.overlay').children('h6').text();
            detialsDetials(title);
        })
        $("nav").css({
            "display":"flex"
        })
    }

    async function searchByFLetter(letter){
        loadingData();
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        let response = await data.json();
        let meals = response.meals;
        displayMeals(meals);
        $(".box").on("click",async function(){
            $("#search").css({
                "display":"none",
            });
            let title = $(this).children('.overlay').children('h6').text();
            detialsDetials(title);
        });
    }

    function displayMeals(list){
        let row = '';
        for(let i=0;i<list.length;i++){
           row += ` <div class="col-lg-3">
                       <div class="box">
                            <img class="img" src="${list[i].strMealThumb}" alt="" srcset="">
                            <div class="overlay">
                                    <h6 >${list[i].strMeal}</h6>
                            </div>
                       </div>
                    </div>
            
            `
        }

        $("#showData").html(row);
    }

    async function categories(){
        loadingData();
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let response = await data.json();
        let categories = response.categories;
        displayCategories(categories);
        $(".box").on("click",async function(){
            let categorie = $(this).children('.overlay').children('h6').text();
            filterBycategorie(categorie);
        })
    }

    function displayCategories(list){
        let row = '';
        for(let i=0;i<list.length;i++){
           row += ` <div class="col-lg-3">
                       <div class="box">
                            <img class="img" src="${list[i].strCategoryThumb}" alt="" srcset="">
                            <div class="overlay">
                                    <h6 >${list[i].strCategory}</h6>
                                    <p >${list[i].strCategoryDescription}</p>
                            </div>
                       </div>
                    </div>
            
            `
        }

        $("#showData").html(row);
    }

    async function filterBycategorie(categorie){
        loadingData();
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`);
        let response = await data.json();
        let meals = response.meals;
        displayMeals(meals);
        $(".box").on("click",async function(){
            let title = $(this).children('.overlay').children('h6').text();
            detialsDetials(title);
        })

    }

    async function area(){
        loadingData();
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        let response = await data.json();
        let areasList = response.meals;
        displayArea(areasList);
        $(".area").on("click",async function(){
            let nameArea = $(this).parent().children('h5').text();
            await areaDetials(nameArea);
            $(".box").on("click",async function(){
                let title = $(this).children('.overlay').children('h6').text();
                detialsDetials(title);
            })
    
        })

       
    }

    function displayArea(list){
        let row = '';
        for(let i=0;i<list.length;i++){
            row += ` <div class="col-md-6 col-lg-3">
                        <button id="btnArea" class="m-auto text-light d-flex flex-column align-items-center">
                            <i class="fa-solid fa-house-laptop area"></i>
                            <h5 class="fs-3 area">${list[i].strArea}</h5>
                        </button>
                    </div>
            
            `
        }

        $("#showData").html(row);
    }

   async function areaDetials(name){
        loadingData();
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
        let response = await data.json();
        let list = response.meals;
        displayMeals(list);
    }

    async function ingredients(){
        loadingData();
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        let response = await data.json();
        let ingredientsList = response.meals;
        displayIngredients(ingredientsList);
        $(".ingredient").on("click",async function(){
            let ingredient = $(this).parent().children('h5').text();
            await ingredientDetials(ingredient);
            $(".box").on("click",async function(){
                let title = $(this).children('.overlay').children('h6').text();
                detialsDetials(title);
            })
    
        })
       
    }

    async function ingredientDetials(name){
        loadingData();
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);
        let response = await data.json();
        let list = response.meals;
        displayMeals(list);
    }

    function displayIngredients(list){
        let row = '';
        for(let i=0;i < 20;i++){
            row += ` <div class="col-lg-3">
                        <button class="mt-5 text-light d-flex flex-column align-items-center">
                            <i class="ingredient fa-solid fa-drumstick-bite fa-4x"></i>
                            <h5 class="ingredient fs-3">${list[i].strIngredient}</h5>
                            <p class="ingredient" >${list[i].strDescription}</p>
                        </button>
                    </div>
            
            `
        }
        $("#showData").html(row);
    }

    async function detialsDetials(name){
        loadingData();
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        let response = await data.json();
        let list = response.meals;
        displayItemDetials(list);
    }

    function displayItemDetials(list){
        let row = '';
        for(let i=0;i<list.length;i++){
            let tags = [];
            list[i].strTags!=null? tags = list[i].strTags.split(','): tags.push(' ',' ',' ') ;
            row += ` 
                <div class="col-lg-4">
                    <img class="w-100 rounded-2" src="${list[i].strMealThumb}" alt="" srcset="">
                    <h3 class="text-light fs-2">${list[i].strMeal}</h3>
                </div>
                <div class="col-lg-8">
                    <h5 class="text-light fs-3">Instructions</h5>
                    <p class="text-light">${list[i].strInstructions}</p>
                    <p class="text-light fs-3 lh-1"> <span class="fw-bold">Area:</span> ${list[i].strArea}</p>
                    <p class="text-light fs-3 lh-1"> <span class="fw-bold">Category:</span> ${list[i].strCategory}</p>
                    <div class="recipes d-flex">
                        <h6 class="w-100 text-light fs-3">Rescipes:</h6>
                        <div class="recipe">${list[i].strMeasure1} ${list[i].strIngredient1}</div>
                        <div class="recipe">${list[i].strMeasure2} ${list[i].strIngredient2}</div>
                        <div class="recipe">${list[i].strMeasure3} ${list[i].strIngredient3}</div>
                        <div class="recipe">${list[i].strMeasure4} ${list[i].strIngredient4}</div>
                        <div class="recipe">${list[i].strMeasure5} ${list[i].strIngredient5}</div>
                        <div class="recipe">${list[i].strMeasure6} ${list[i].strIngredient6}</div>
                        <div class="recipe">${list[i].strMeasure7} ${list[i].strIngredient17}</div>
                    </div>
                    <div class="tags mt-3 mb-4">
                        <h6 class="w-100 text-light fs-3">Tags:</h6>
                        <div class="tag">${tags.length>0?tags[0]:{}}</div>
                        <div class="tag">${tags.length>0?tags[1]:{}}</div>
                        <div class="tag">${tags.length>1?tags[2]:{}}</div>
                    </div>
                    <a href=${list[i].strSource} target="_blanck" class="my-btn btn-source">Source</a>
                    <a href=${list[i].strYoutube}  target="_blanck" class="my-btn btn-youtube">Youtube</a>
                </div>
            
            `
        }

        $("#showData").html(row);
    }

});