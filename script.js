var array = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
];
var array_check = [0,0,0,0,0,0,0,0,0];
var i = 0;

function updateI() {
    i = i + 1;
}

function updateValue(clicked_id) {
    if (clicked_id == "one") {
        if (i % 2 == 0) {
            array[0][0] = 1;
        }
        else {
            array[0][0] = 0;
        }
    }
    else if (clicked_id == "two") {
        if (i % 2 == 0) {
            array[0][1] = 1;
        }
        else {
            array[0][1] = 0;
        }
    }
    else if (clicked_id == "three") {
        if (i % 2 == 0) {
            array[0][2] = 1;
        }
        else {
            array[0][2] = 0;
        }
    }
    else if (clicked_id == "four") {
        if (i % 2 == 0) {
            array[1][0] = 1;
        }
        else {
            array[1][0] = 0;
        }
    }
    else if (clicked_id == "five") {
        if (i % 2 == 0) {
            array[1][1] = 1;
        }
        else {
            array[1][1] = 0;
        }
    }
    else if (clicked_id == "six") {
        if (i % 2 == 0) {
            array[1][2] = 1;
        }
        else {
            array[1][2] = 0;
        }
    }
    else if (clicked_id == "seven") {
        if (i % 2 == 0) {
            array[2][0] = 1;
        }
        else {
            array[2][0] = 0;
        }
    }
    else if (clicked_id == "eight") {
        if (i % 2 == 0) {
            array[2][1] = 1;
        }
        else {
            array[2][1] = 0;
        }
    }
    else if (clicked_id == "nine") {
        if (i % 2 == 0) {
            array[2][2] = 1;
        }
        else {
            array[2][2] = 0;
        }
    }
}

function condition_for_win_for_player1(){
    if (array[0][0] == 0)
        if (array[0][1] == 0)
            if (array[0][2] == 0)
                return 0;
    if (array[1][0] == 0)
        if (array[1][1] == 0)
            if (array[1][2] == 0)
                return 0;
    if (array[2][0] == 0)
        if (array[2][1] == 0)
            if (array[2][2] == 0)
                return 0;
    if (array[0][0] == 0)
        if (array[1][0] == 0)
            if (array[2][0] == 0)
                return 0;
    if (array[0][1] == 0)
        if (array[1][1] == 0)
            if (array[2][1] == 0)
                return 0;
    if (array[0][2] == 0)
        if (array[1][2] == 0)
            if (array[2][2] == 0)
                return 0;
    if (array[0][0] == 0)
        if (array[1][1] == 0)
            if (array[2][2] == 0)
                return 0;
    if (array[0][2] == 0)
        if (array[1][1] == 0)
            if (array[2][0] == 0)
                return 0;
}

function condition_for_win_for_player2(){
    if (array[0][0] == 1)
        if (array[0][1] == 1)
            if (array[0][2] == 1)
                return 1;
    if (array[1][0] == 1)
        if (array[1][1] == 1)
            if (array[1][2] == 1)
                return 1;
    if (array[2][0] == 1)
        if (array[2][1] == 1)
            if (array[2][2] == 1)
                return 1;
    if (array[0][0] == 1)
        if (array[1][0] == 1)
            if (array[2][0] == 1)
                return 1;
    if (array[0][1] == 1)
        if (array[1][1] == 1)
            if (array[2][1] == 1)
                return 1;
    if (array[0][2] == 1)
        if (array[1][2] == 1)
            if (array[2][2] == 1)
                return 1;
    if (array[0][0] == 1)
        if (array[1][1] == 1)
            if (array[2][2] == 1)
                return 1;
    if (array[0][2] == 1)
        if (array[1][1] == 1)
            if (array[2][0] == 1)
                return 1;
}

function convertNumber(clicked_id){
    var n;
    if (clicked_id == "one")
    {
        n = 1;
    }
    else if (clicked_id == "two")
    {
        n = 2;
    }
    else if (clicked_id == "three")
    {
        n = 3;
    }
    else if (clicked_id == "four")
    {
        n = 4;
    }
    else if (clicked_id == "five")
    {
        n = 5;
    }
    else if (clicked_id == "six")
    {
        n = 6;
    }
    else if (clicked_id == "seven")
    {
        n = 7;
    }
    else if (clicked_id == "eight")
    {
        n = 8;
    }
    else if (clicked_id == "nine")
    {
        n = 9;
    }
    return n;
}

function updateArray(clicked_id) {
    var number = convertNumber(clicked_id);
    if (array_check[number - 1] == 1)
    {
        alert("Already Occupied box");
    }
    else
    {
        updateI();
        array_check[number - 1] = 1;
        updateValue(clicked_id);
        // alert(clicked_id);
        // console.log(array);
        // console.log(i);
        if (i % 2 == 0) {
            // document.getElementById(clicked_id).innerHTML = "one";
            var img = document.createElement("img");
            img.src = "img/cross.png";
            img.style.width = 100 + "px";
            img.style.height = 100 + "px";
            var foo = document.getElementById(clicked_id);
            foo.appendChild(img);
        }
        else {
            // document.getElementById(clicked_id).innerHTML = "zero";
            var img = document.createElement("img");
            img.src = "img/circle.png";
            img.style.width = 100 + "px";
            img.style.height = 100 + "px";
            var foo = document.getElementById(clicked_id);
            foo.appendChild(img);
        }
        var a = condition_for_win_for_player1();
        var b = condition_for_win_for_player2();
        if (i == 9)
        {
            document.getElementById("header").innerHTML = "Match Draw - Reload the page to Play Again";
        }
        if (a == 0 && b != 1)
        {
            document.getElementById("header").innerHTML = "Player1 Won - Reload the page to Play Again";
            document.getElementById("gc").style.display = "none";
        }
        else if(b == 1 && a != 0)
        {
            document.getElementById("header").innerHTML = "Player2 Won - Reload the page to Play Again";
            document.getElementById("gc").style.display = "none";
        }
    }
}