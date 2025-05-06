const users = {
    "tyPassword": "kittercat1",
    "christopherPassword": "341479Christopher", 
    "stupudPassword": "IamStupid"
};

function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === users.tyPassword || password === users.christopherPassword) {
        document.getElementById('statusOptions').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

function showStatus(user) {
    let statusMessage = '';
    if (user === 'ty') {
        statusMessage = "Ill, very mentally ill.";
    } else if (user === 'christopher') {
        statusMessage = "I need sleep. Kill myself.";
    } else if (user === 'stupid') {
        statusMessage = "Very Extremely stupuid.";
    }
    document.getElementById('statusDisplay').innerHTML = statusMessage;
    document.getElementById('statusDisplay').style.display = 'block';
}
