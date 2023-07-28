import bcrypt from "bcryptjs";

export const hashPw = async (pw) => {
  const salt = await bcrypt.genSalt(10);
  const pwHash = await bcrypt.hash(pw, salt);

  return pwHash;
};

export const comparePw = async (pw, raw) => {
  const checked = await bcrypt.compare(pw, raw);

  return checked;
};

// module.exports = { hashPw, comparePw };
