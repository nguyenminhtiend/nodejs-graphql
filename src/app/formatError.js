module.exports = (err) => {
  console.log(err);
  console.log(typeof err);
  if (err.message.startsWith('Database Error: ')) {
    return new Error(err.message);
  }
  return err;
};
