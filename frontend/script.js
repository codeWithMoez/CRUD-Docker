document.getElementById('createUserForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;

    fetch('http://localhost:8081/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(response => response.json())
    .then(data => alert('User Created: ' + data.name))
    .catch(error => console.error('Error:', error));
});

document.getElementById('createOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const orderDescription = document.getElementById('orderDescription').value;
    const orderAmount = document.getElementById('orderAmount').value;

    fetch('http://localhost:8082/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            description: orderDescription,
            amount: orderAmount
        })
    })
    .then(response => response.json())
    .then(data => alert('Order Created: ' + data.description))
    .catch(error => console.error('Error:', error));
});

