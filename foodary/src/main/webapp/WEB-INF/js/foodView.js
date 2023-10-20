function addData() {
	var selectedRadios = document.querySelectorAll('input[name="foodName"]:checked');
	var id = document.getElementsByName("id")[0].value;
  if (selectedRadios.length > 0) {
    var foodNames = [];
    var kcals = [];
    var carbss = [];
    var proteins = [];
    var fats = [];
    selectedRadios.forEach(function(selectedRadio) {
      var parentRow = selectedRadio.closest('tr');
      var foodName = parentRow.querySelector('td:nth-child(2)').innerHTML.trim();
      var kcal = parentRow.querySelector('td:nth-child(3)').innerHTML.trim();
      var carbs = parentRow.querySelector('td:nth-child(4)').innerHTML.trim();
      var protein = parentRow.querySelector('td:nth-child(5)').innerHTML.trim();
      var fat = parentRow.querySelector('td:nth-child(6)').innerHTML.trim();
      
      foodNames.push(foodName);
      kcals.push(kcal);
      carbss.push(carbs);
      proteins.push(protein);
      fats.push(fat);
    });
    
  for (var i = 0; i < foodNames.length; i++) {
	  var url = './userFoodInsert?' +
      'foodName=' + foodNames[i] +
      '&kcal=' + kcals[i] +
      '&carbs=' + carbss[i] +
      '&protein=' + proteins[i] +
      '&fat=' + fats[i] + 
      '&id=' + id;
    	window.location.href = url;
  }
    window.close(); // 팝업 창 닫기
    window.opener.refreshParent();
  }
}


function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}