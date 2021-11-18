let element0 = document.getElementById('flex1')
let element1 = document.getElementById('flex2')
let element2 = document.getElementById('flex3')
let element3 = document.getElementById('flex4')
let element4 = document.getElementById('flex5')
let element5 = document.getElementById('flex6')
let element6 = document.getElementById('flex7')
let element7 = document.getElementById('flex8')
let element8 = document.getElementById('flex9')



// for x event
function clickevent0() {
    
    element0.innerHTML = 'X'
    if (element0.innerHTML == 'X' && element1.innerHTML == 'X' && element2.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test1').style.display='block'
        
    }
    if (element0.innerHTML == 'X' && element3.innerHTML == 'X' && element6.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test2').style.display='block'

    }
    if (element0.innerHTML == 'X' && element4.innerHTML == 'X' && element8.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test7').style.display='block'
    }


}

function clickevent1() {
   
    element1.innerHTML = 'X'
    if (element1.innerHTML == 'X' && element2.innerHTML == 'X' && element0.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test1').style.display='block'
    }
    if (element1.innerHTML == 'X' && element4.innerHTML == 'X' && element7.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test3').style.display='block'
    }
    if (element1.innerHTML == 'X' && element0.innerHTML == 'X' && element2.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test1').style.display='block'
    }



}
function clickevent2() {
    
    element2.innerHTML = 'X'
    if (element2.innerHTML == 'X' && element1.innerHTML == 'X' && element0.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test1').style.display='block'
    }
    if (element2.innerHTML == 'X' && element5.innerHTML == 'X' && element8.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test4').style.display='block'
    }
    if (element2.innerHTML == 'X' && element4.innerHTML == 'X' && element6.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test8').style.display='block'

    }

}
function clickevent3() {
    
    element3.innerHTML = 'X'
    if (element3.innerHTML == 'X' && element4.innerHTML == 'X' && element5.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test6').style.display='block'
    }
    if (element3.innerHTML == 'X' && element0.innerHTML == 'X' && element6.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test2').style.display='block'

    }
    if (element3.innerHTML == 'X' && element6.innerHTML == 'X' && element0.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test2').style.display='block'

    }

}
function clickevent4() {
    element4.innerHTML = 'X'
    if (element4.innerHTML == 'X' && element1.innerHTML == 'X' && element7.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test3').style.display='block'
    }
    if (element4.innerHTML == 'X' && element7.innerHTML == 'X' && element1.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test3').style.display='block'
    }
    if (element4.innerHTML == 'X' && element5.innerHTML == 'X' && element3.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test6').style.display='block'
    }
    if (element4.innerHTML == 'X' && element3.innerHTML == 'X' && element5.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test6').style.display='block'
    }

}
function clickevent5() {
    element5.innerHTML = 'X'
    if (element5.innerHTML == 'X' && element2.innerHTML == 'X' && element8.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test4').style.display='block'
    }
    if (element5.innerHTML == 'X' && element8.innerHTML == 'X' && element2.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test4').style.display='block'
    }
    if (element5.innerHTML == 'X' && element4.innerHTML == 'X' && element3.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test6').style.display='block'
    }

}
function clickevent6() {
    element6.innerHTML = 'X'
    if (element6.innerHTML == 'X' && element7.innerHTML == 'X' && element8.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test5').style.display='block'

    }
    if (element6.innerHTML == 'X' && element3.innerHTML == 'X' && element0.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test2').style.display='block'

    }
    if (element6.innerHTML == 'X' && element4.innerHTML == 'X' && element2.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test8').style.display='block'

    }

}
function clickevent7() {
    element7.innerHTML = 'X'
    if (element7.innerHTML == 'X' && element4.innerHTML == 'X' && element1.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test3').style.display='block'
    }
    if (element7.innerHTML == 'X' && element6.innerHTML == 'X' && element8.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test5').style.display='block'

    }
    if (element7.innerHTML == 'X' && element8.innerHTML == 'X' && element6.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test5').style.display='block'

    }

}
function clickevent8() {
    element8.innerHTML = 'X'
    if (element8.innerHTML == 'X' && element5.innerHTML == 'X' && element2.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test4').style.display='block'
    }
    if (element8.innerHTML == 'X' && element7.innerHTML == 'X' && element6.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test5').style.display='block'

    }
    if (element8.innerHTML == 'X' && element4.innerHTML == 'X' && element0.innerHTML == 'X') {
        document.getElementById('end').innerHTML = 'x won'
        document.getElementById('test7').style.display='block'
    }

}

// For o event
element0.onmousedown = function (event) {
    if (event.which == 2) {
        element0.innerHTML = 'O'
        if (element0.innerHTML == 'O' && element1.innerHTML == 'O' && element2.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test1').style.display='block'
        }
        if (element0.innerHTML == 'O' && element3.innerHTML == 'O' && element6.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test2').style.display='block'
        }
        if (element0.innerHTML == 'O' && element4.innerHTML == 'O' && element8.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test7').style.display='block'
        }
    }
}

element1.onmousedown = function (event) {
    if (event.which == 2) {
        element1.innerHTML = 'O'
        if (element1.innerHTML == 'O' && element2.innerHTML == 'O' && element0.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test1').style.display='block'
        }
        if (element1.innerHTML == 'O' && element4.innerHTML == 'O' && element7.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test3').style.display='block'
        }
        if (element1.innerHTML == 'O' && element0.innerHTML == 'O' && element2.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test1').style.display='block'
        }
    }
}
element2.onmousedown = function (event) {
    if (event.which == 2) {
        element2.innerHTML = 'O'
        if (element2.innerHTML == 'O' && element1.innerHTML == 'O' && element0.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test1').style.display='block'
        }
        if (element2.innerHTML == 'O' && element5.innerHTML == 'O' && element8.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test4').style.display='block'
        }
        if (element2.innerHTML == 'O' && element4.innerHTML == 'O' && element6.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test8').style.display='block'

        }
    }
}
element3.onmousedown = function (event) {
    if (event.which == 2) {
        element3.innerHTML = 'O'
        if (element3.innerHTML == 'O' && element4.innerHTML == 'O' && element5.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test6').style.display='block'
        }
        if (element3.innerHTML == 'O' && element0.innerHTML == 'O' && element6.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test2').style.display='block'
        }
        if (element3.innerHTML == 'O' && element6.innerHTML == 'O' && element0.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test2').style.display='block'
        }
    }
}
element4.onmousedown = function (event) {
    if (event.which == 2) {
        element4.innerHTML = 'O'
        if (element4.innerHTML == 'O' && element1.innerHTML == 'O' && element7.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test3').style.display='block'
        }
        if (element4.innerHTML == 'O' && element7.innerHTML == 'O' && element1.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test3').style.display='block'
        }
        if (element4.innerHTML == 'O' && element5.innerHTML == 'O' && element3.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test6').style.display='block'
        }
        if (element4.innerHTML == 'O' && element3.innerHTML == 'O' && element5.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test6').style.display='block'
        }
    }
}
// element2.onmousedown = function (event) {
//     if (event.which == 2) {
//         element2.innerHTML = 'O'
//     }
// }
element5.onmousedown = function (event) {
    if (event.which == 2) {
        element5.innerHTML = 'O'
        if (element5.innerHTML == 'O' && element2.innerHTML == 'O' && element8.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test4').style.display='block'
        }
        if (element5.innerHTML == 'O' && element8.innerHTML == 'O' && element2.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test4').style.display='block'
        }
        if (element5.innerHTML == 'O' && element4.innerHTML == 'O' && element3.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test6').style.display='block'
        }
    }
}
element6.onmousedown = function (event) {
    if (event.which == 2) {
        element6.innerHTML = 'O'
        if (element6.innerHTML == 'O' && element7.innerHTML == 'O' && element8.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test5').style.display='block'

        }
        if (element6.innerHTML == 'O' && element3.innerHTML == 'O' && element0.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test2').style.display='block'
        }
        if (element6.innerHTML == 'O' && element4.innerHTML == 'O' && element2.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test8').style.display='block'

        }
    }
}
element7.onmousedown = function (event) {
    if (event.which == 2) {
        element7.innerHTML = 'O'
        if (element7.innerHTML == 'O' && element4.innerHTML == 'O' && element1.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test3').style.display='block'
        }
        if (element7.innerHTML == 'O' && element6.innerHTML == 'O' && element8.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test5').style.display='block'

        }
        if (element7.innerHTML == 'O' && element8.innerHTML == 'O' && element6.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test5').style.display='block'

        }

    }
}
element8.onmousedown = function (event) {
    if (event.which == 2) {
        element8.innerHTML = 'O'
        if (element8.innerHTML == 'O' && element5.innerHTML == 'O' && element2.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test4').style.display='block'
        }
        if (element8.innerHTML == 'O' && element7.innerHTML == 'O' && element6.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test5').style.display='block'

        }
        if (element8.innerHTML == 'O' && element4.innerHTML == 'O' && element0.innerHTML == 'O') {
            document.getElementById('end').innerHTML = 'O won'
            document.getElementById('test7').style.display='block'
        }
    }
}




    // document.getElementById('test1').style.display='block'
    // document.getElementById('test8').style.display='block'
