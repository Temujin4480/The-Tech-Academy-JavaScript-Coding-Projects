$('.Eguard').click(function () {
    $(this).next().next().prop('disabled', !this.checked)
    $('.Eguard').not(':checked').prop('disabled', $('.Eguard:checked').length == 2);
});

$('.Eforward').click(function () {
    $(this).next().next().prop('disabled', !this.checked)
    $('.Eforward').not(':checked').prop('disabled', $('.Eforward:checked').length == 3);
});

$('.Wguard').click(function () {
    $(this).next().next().prop('disabled', !this.checked)
    $('.Wguard').not(':checked').prop('disabled', $('.Wguard:checked').length == 2);
});

$('.Wforward').click(function () {
    $(this).next().next().prop('disabled', !this.checked)
    $('.Wforward').not(':checked').prop('disabled', $('.Wforward:checked').length == 3);
});

function submitPicks() {
	text1 = ""
	text2 = ""
	var selectedEguard = [];
	var eguardArray = document.getElementsByClassName("Eguard");
	for (var i = 0; i < eguardArray.length; i++) {
		if (eguardArray[i].checked) {
			selectedEguard.push(eguardArray[i].value);
		}
	}
	
	getEforward(text1,text2);
};

function getEforward() {
};
	
	
function clearAll() {
		document.getElementById("frmMenu").reset();
		document.getElementById("cart").style.opacity=0;
	};