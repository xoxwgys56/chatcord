// index.html

const room = document.getElementById('room');

const roomList = ['Javascript', 'Python', 'PHP', 'C#', 'Ruby', 'Java', 'Other'];

room.innerHTML = `${roomList.map(
  room => `<option value="${room}">${room}</option>`
)}`;
// focus on input
document.getElementById('username').focus();
