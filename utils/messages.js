const moment = require('moment');

const USER_MSG = 'USER_MSG';
const BOT_MSG = 'BOT_MSG';

function formatMessage(username, text, type) {
  return {
    username,
    text,
    time: moment().format('h:mm a'),
    type
  };
}

module.exports = { formatMessage, USER_MSG, BOT_MSG };
