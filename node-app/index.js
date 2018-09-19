const cors = require("micro-cors")();
module.exports = cors(() => ({
  date: Math.round(Date.now() * Math.random())
}));
