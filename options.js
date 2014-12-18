function save_options() {
	var token = document.getElementById('token');
		chrome.storage.sync.set({
			token: token
		}, function() {
			alert("saved the token");
		});
	}

document.getElementById('save').addEventListener('click', save_options);