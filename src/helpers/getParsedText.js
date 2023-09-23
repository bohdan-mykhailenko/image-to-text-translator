export const getParsedText = (data) => {
  if (!data) {
    return "Upload your first image!";
  }

  if (data.length === 0) {
    return "Can't detect any text. Try upload another image!";
  }

  const parsedText = data.map((textFragment) => textFragment.text).join(" ");

  return parsedText;
};
