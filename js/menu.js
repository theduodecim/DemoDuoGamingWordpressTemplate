$(document).ready(function () {
    let menu1 = document.querySelector("#menu1");
    let menu1open = document.querySelector("#menu1open");
    let menu2 = document.querySelector("#menu2");
    let menu2open = document.querySelector("#menu2open");
    let menu3 = document.querySelector("#menu3");
    let menu3open = document.querySelector("#menu3open");
    let menu4 = document.querySelector("#menu4");
    let menu4open = document.querySelector("#menu4open");
    let menu5 = document.querySelector("#menu5");
    let menu5open = document.querySelector("#menu5open");
    let menu6 = document.querySelector("#menu6");
    let menu6open = document.querySelector("#menu6open");
    let menu7 = document.querySelector("#menu7");
    let menu7open = document.querySelector("#menu7open");
    let menu8 = document.querySelector("#menu8");
    let menu8open = document.querySelector("#menu8open");
    let menu9 = document.querySelector("#menu9");
    let menu9open = document.querySelector("#menu9open");
    let menu10 = document.querySelector("#menu10");
    let menu10open = document.querySelector("#menu10open");







    menu1.addEventListener("click", function () {

        let first = "close";
        let seccond = "open";
        let grey = "grey";
        let orange = "orange";

        if (menu1open.classList.contains(first)) {
            [first, seccond] = [seccond, first]; //ES6 SWITCH
            [grey, orange] = [orange, grey];
        }

        menu1open.classList.toggle(first);
        menu1open.classList.toggle(seccond);

        menu1.style.background = grey;
    });

    menu2.addEventListener("click", function () {
        let first = "close";
        let seccond = "open";
        let grey = "grey";
        let orange = "orange";


        if (menu2open.classList.contains(first)) {
            [first, seccond] = [seccond, first]; //ES6 SWITCH
            [grey, orange] = [orange, grey];
        }
        menu2open.classList.toggle(first);
        menu2open.classList.toggle(seccond);

        menu2.style.background = grey;
    });

    menu3.addEventListener("click", function () {
        let first = "close";
        let seccond = "open";
        let grey = "grey";
        let orange = "orange";

        if (menu3open.classList.contains(first)) {
            [first, seccond] = [seccond, first]; //ES6 SWITCH
            [grey, orange] = [orange, grey];
        }



        menu3open.classList.toggle(first);
        menu3open.classList.toggle(seccond);

        menu3.style.background = grey;
    });


    menu4.addEventListener("click", function () {
        let first = "close";
        let seccond = "open";
        let grey = "grey";
        let orange = "orange";


        if (menu4open.classList.contains(first)) {
            [first, seccond] = [seccond, first]; //ES6 SWITCH
            [grey, orange] = [orange, grey];
        }

        menu4open.classList.toggle(first);
        menu4open.classList.toggle(seccond);

        menu4.style.background = grey;
    });

    menu5.addEventListener("click", function () {
        let first = "close";
        let seccond = "open";
        let grey = "grey";
        let orange = "orange";

        if (menu5open.classList.contains(first)) {
            [first, seccond] = [seccond, first]; //ES6 SWITCH
            [grey, orange] = [orange, grey];
        }

        menu5open.classList.toggle(first);
        menu5open.classList.toggle(seccond);

        menu5.style.background = grey;
    });
    menu6.addEventListener("click", function () {
        let first = "close";
        let seccond = "open";
        let grey = "grey";
        let orange = "orange";


        if (menu6open.classList.contains(first)) {
            [first, seccond] = [seccond, first]; //ES6 SWITCH
            [grey, orange] = [orange, grey];
        }

        menu6open.classList.toggle(first);
        menu6open.classList.toggle(seccond);

        menu6.style.background = grey;
    });
    menu7.addEventListener("click", function () {
        let first = "close";
        let seccond = "open";
        let grey = "grey";
        let orange = "orange";


        if (menu7open.classList.contains(first)) {
            [first, seccond] = [seccond, first]; //ES6 SWITCH
            [grey, orange] = [orange, grey];
        }

        menu7open.classList.toggle(first);
        menu7open.classList.toggle(seccond);

        menu7.style.background = grey;
    });
    menu8.addEventListener("click", function () {
        let first = "close";
        let seccond = "open";
        let grey = "grey";
        let orange = "orange";


        if (menu8open.classList.contains(first)) {
            [first, seccond] = [seccond, first]; //ES6 SWITCH
            [grey, orange] = [orange, grey];
        }

        menu8open.classList.toggle(first);
        menu8open.classList.toggle(seccond);

        menu8.style.background = grey;
    });
    menu9.addEventListener("click", function () {
        let first = "close";
        let seccond = "open";
        let grey = "grey";
        let orange = "orange";


        if (menu9open.classList.contains(first)) {
            [first, seccond] = [seccond, first]; //ES6 SWITCH
            [grey, orange] = [orange, grey];
        }

        menu9open.classList.toggle(first);
        menu9open.classList.toggle(seccond);

        menu9.style.background = grey;
    });
    menu10.addEventListener("click", function () {
        let first = "close";
        let seccond = "open";
        let grey = "grey";
        let orange = "orange";


        if (menu10open.classList.contains(first)) {
            [first, seccond] = [seccond, first]; //ES6 SWITCH
            [grey, orange] = [orange, grey];
        }

        menu10open.classList.toggle(first);
        menu10open.classList.toggle(seccond);

        menu10.style.background = grey;
    });




});