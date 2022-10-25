const pwd = function (cmd) {
  process.stdin.on('data', data => {
    process.stdout.write('\nprompt > ');
  });
};

module.exports = pwd;
