const UserList = (() => {
    var userListData =  [];

    const populateTable = () => {
        let tableContent  = '';

        const data_path = '/users/userlist';

        try {
            var http_request = new XMLHttpRequest();
        } catch(e) {
            window.alert('Error... Check console !');
            console.log(e);
        }
        
        http_request.onreadystatechange = () => {
            if(http_request.readyState == 4) {            
                const jsonObj = JSON.parse(http_request.responseText);
                for(const obj in jsonObj) {
                    userListData = obj;
                    tableContent += '<tr>';
                    tableContent += '<td><a href="#" class="linkshowuser" rel="' + jsonObj[obj].username + '">' + jsonObj[obj].username + '</a></td>';
                    tableContent += '<td>' + jsonObj[obj].email + '</td>';
                    tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + jsonObj[obj]._id + '">delete</a></td>';
                    tableContent += '</tr>';
                }

                document.querySelector('#userList table tbody').innerHTML = tableContent;
            }
        }
        http_request.open("GET", data_path, true);
        http_request.send();
    }

    const showUserInfo = () => {
        console.log(this);
    }

    const registerEvents = () => {
        populateTable();
        console.log(document.querySelector('#userList a.linkshowuser'))
        // document.querySelector('#userList a.linkshowuser').addEventListener('click', showUserInfo);
    }

    return {
        registerEvents: registerEvents
    }
})();

window.addEventListener('load', function() {
    UserList.registerEvents();
});