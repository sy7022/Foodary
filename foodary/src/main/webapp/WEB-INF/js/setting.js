function setting(idx, mode, title, name, content) {
	let frm = document.commentForm; 
	frm.idx.value = idx;
	frm.mode.value = mode;
	frm.commentBtn.value = title;
	frm.name.value = name;
	
	document.getElementById("commentBtnText").textContent = title;
	
	while (content.indexOf('<br/>') != -1) {
		content = content.replace('<br/>', '\r\n');
	}
	frm.content.value = content;
}

function deleteOK() {
    var confirmation = confirm("해당 글을 삭제하시겠습니까?\n(삭제 후에는 복구가 불가능 합니다.)");
    if (confirmation) {
    	location.href="deleteOK?idx=" + $('#idx').val() +
    				"&currentPage=" + $('#currentPage').val()
    }
}






















