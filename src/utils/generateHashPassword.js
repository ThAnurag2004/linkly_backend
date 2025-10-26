import bcrypt from 'bcrypt';

export const hash = async (password) => {
  const saltRounds = 7;
  return await bcrypt.hash(password, saltRounds);
};
