
function squareBox() {
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("square-box1");
	b2 = document.getElementById("square-box2");
	b3 = document.getElementById("square-box3");
	b4 = document.getElementById("square-box4");
	b5 = document.getElementById("square-box5");
	b6 = document.getElementById("square-box6");
	b7 = document.getElementById("square-box7");
	b8 = document.getElementById("square-box8");
	b9 = document.getElementById("square-box9");

	if ((b1.value == 'x' || b1.value == 'X') && (b2.value == 'x' ||
		b2.value == 'X') && (b3.value == 'x' || b3.value == 'X')) {
		document.getElementById('print-response').innerHTML = "Player X won";
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	}
	else if ((b1.value == 'x' || b1.value == 'X') && (b4.value == 'x' ||
		b4.value == 'X') && (b7.value == 'x' || b7.value == 'X')) {
		document.getElementById('print-response').innerHTML = "Player X won";
		b2.disabled = true;
		b3.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;

	}
	else if ((b7.value == 'x' || b7.value == 'X') && (b8.value == 'x' ||
		b8.value == 'X') && (b9.value == 'x' || b9.value == 'X')) {
		document.getElementById('print-response').innerHTML = "Player X won";
		b1.disabled = true;
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
	}
	else if ((b3.value == 'x' || b3.value == 'X') && (b6.value == 'x' ||
		b6.value == 'X') && (b9.value == 'x' || b9.value == 'X')) {
		document.getElementById('print-response').innerHTML = "Player X won";
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
	}
	else if ((b1.value == 'x' || b1.value == 'X') && (b5.value == 'x' ||
		b5.value == 'X') && (b9.value == 'x' || b9.value == 'X')) {
		document.getElementById('print-response').innerHTML = "Player X won";
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
	}
	else if ((b3.value == 'x' || b3.value == 'X') && (b5.value == 'x' ||
		b5.value == 'X') && (b7.value == 'x' || b7.value == 'X')) {
		document.getElementById('print-response').innerHTML = "Player X won";
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	}
	else if ((b2.value == 'x' || b2.value == 'X') && (b5.value == 'x' ||
		b5.value == 'X') && (b8.value == 'x' || b8.value == 'X')) {
		document.getElementById('print-response').innerHTML = "Player X won";
		b1.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b9.disabled = true;
	}
	else if ((b4.value == 'x' || b4.value == 'X') && (b5.value == 'x' ||
		b5 == 'X') && (b6.value == 'x' || b6.value == 'X')) {
		document.getElementById('print-response').innerHTML = "Player X won";
		b1.disabled = true;
		b2.disabled = true;
		b3.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	}

	else if ((b1.value == '0' || b1.value == '0') && (b2.value == '0' ||
		b2.value == '0') && (b3.value == '0' || b3.value == '0')) {
		document.getElementById('print-response').innerHTML = "Player 0 won";
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	}
	else if ((b1.value == '0' || b1.value == '0') && (b4.value == '0' ||
		b4.value == '0') && (b7.value == '0' || b7.value == '0')) {
		document.getElementById('print-response').innerHTML = "Player 0 won";
		b2.disabled = true;
		b3.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	}
	else if ((b7.value == '0' || b7.value == '0') && (b8.value == '0' ||
		b8.value == '0') && (b9.value == '0' || b9.value == '0')) {
		document.getElementById('print-response').innerHTML = "Player 0 won";
		b1.disabled = true;
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
	}
	else if ((b3.value == '0' || b3.value == '0') && (b6.value == '0' ||
		b6.value == '0') && (b9.value == '0' || b9.value == '0')) {
		document.getElementById('print-response').innerHTML = "Player 0 won";
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
	}
	else if ((b1.value == '0' || b1.value == '0') && (b5.value == '0' ||
		b5.value == '0') && (b9.value == '0' || b9.value == '0')) {
		document.getElementById('print-response').innerHTML = "Player 0 won";
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
	}
	else if ((b3.value == '0' || b3.value == '0') && (b5.value == '0' ||
		b5.value == '0') && (b7.value == '0' || b7.value == '0')) {
		document.getElementById('print-response').innerHTML = "Player 0 won";
		b1.disabled = true;
		b2.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	}
	else if ((b2.value == '0' || b2.value == '0') && (b5.value == '0' ||
		b5.value == '0') && (b8.value == '0' || b8.value == '0')) {
		document.getElementById('print-response').innerHTML = "Player 0 won";
		b1.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b9.disabled = true;
	}
	else if ((b4.value == '0' || b4.value == '0') && (b5.value == '0' ||
		b5.value == '0') && (b6.value == '0' || b6.value == '0')) {
		document.getElementById('print-response').innerHTML = "Player 0 won";
		b1.disabled = true;
		b2.disabled = true;
		b3.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
		b9.disabled = true;
	}
	else if ((b1.value == 'X' || b1.value == '0') && (b2.value == 'X'
		|| b2.value == '0') && (b3.value == 'X' || b3.value == '0') &&
		(b4.value == 'X' || b4.value == '0') && (b5.value == 'X' ||
		b5.value == '0') && (b6.value == 'X' || b6.value == '0') &&
		(b7.value == 'X' || b7.value == '0') && (b8.value == 'X' ||
		b8.value == '0') && (b9.value == 'X' || b9.value == '0')) {
			document.getElementById('print-response').innerHTML = "Match Tie";
	}
	else {

		if (flag == 1) {
			document.getElementById('print-response').innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print-response').innerHTML = "Player 0 Turn";
		}
	}
}

function resetGame() {

	location.reload();
	document.getElementById("square-box1").value = '';
	document.getElementById("square-box2").value = '';
	document.getElementById("square-box3").value = '';
	document.getElementById("square-box4").value = '';
	document.getElementById("square-box5").value = '';
	document.getElementById("square-box6").value = '';
	document.getElementById("square-box7").value = '';
	document.getElementById("square-box8").value = '';
	document.getElementById("square-box9").value = '';

}

flag = 1;
function squareBox_3() {
	if (flag == 1) {
		document.getElementById("square-box1").value = "X";
		document.getElementById("square-box1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("square-box1").value = "0";
		document.getElementById("square-box1").disabled = true;
		flag = 1;
	}
}

function squareBox_4() {
	if (flag == 1) {
		document.getElementById("square-box2").value = "X";
		document.getElementById("square-box2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("square-box2").value = "0";
		document.getElementById("square-box2").disabled = true;
		flag = 1;
	}
}

function squareBox_5() {
	if (flag == 1) {
		document.getElementById("square-box3").value = "X";
		document.getElementById("square-box3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("square-box3").value = "0";
		document.getElementById("square-box3").disabled = true;
		flag = 1;
	}
}

function squareBox_6() {
	if (flag == 1) {
		document.getElementById("square-box4").value = "X";
		document.getElementById("square-box4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("square-box4").value = "0";
		document.getElementById("square-box4").disabled = true;
		flag = 1;
	}
}

function squareBox_7() {
	if (flag == 1) {
		document.getElementById("square-box5").value = "X";
		document.getElementById("square-box5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("square-box5").value = "0";
		document.getElementById("square-box5").disabled = true;
		flag = 1;
	}
}

function squareBox_8() {
	if (flag == 1) {
		document.getElementById("square-box6").value = "X";
		document.getElementById("square-box6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("square-box6").value = "0";
		document.getElementById("square-box6").disabled = true;
		flag = 1;
	}
}

function squareBox_9() {
	if (flag == 1) {
		document.getElementById("square-box7").value = "X";
		document.getElementById("square-box7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("square-box7").value = "0";
		document.getElementById("square-box7").disabled = true;
		flag = 1;
	}
}

function squareBox_10() {
	if (flag == 1) {
		document.getElementById("square-box8").value = "X";
		document.getElementById("square-box8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("square-box8").value = "0";
		document.getElementById("square-box8").disabled = true;
		flag = 1;
	}
}

function squareBox_11() {
	if (flag == 1) {
		document.getElementById("square-box9").value = "X";
		document.getElementById("square-box9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("square-box9").value = "0";
		document.getElementById("square-box9").disabled = true;
		flag = 1;
	}
}