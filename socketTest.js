const io = require('socket.io-client');

const socket = io('http://localhost:5000'); // Replace with your backend URL

socket.on('connect', () => {
    console.log('Connected to server');

    // Emit a test event
    // socket.emit('testEvent', { message: 'Hello, server!' });

    // Listen for task events
    socket.on('taskAdded', (task) => {
        console.log('Task added:', task);
    });

    socket.on('taskUpdated', (task) => {
        console.log('Task updated:', task);
    });

    socket.on('taskDeleted', (task) => {
        console.log('Task deleted:', task);
    });

    // Disconnect after a short delay
    setTimeout(() => {
        socket.disconnect();
    }, 5000);
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});