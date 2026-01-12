const avatarBackgrounds = new Map([
  ['1', '00b8db'],
  ['2', '53d05a'],
  ['3', 'c2b62a'],
  ['4', 'c352cd'],
  ['5', 'ef2883'],
]);

const generateRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * avatarBackgrounds.size + 1);
  return avatarBackgrounds.get(String(randomIndex));
};

export const generateAvatar = (name: string): string => {
  const correctName = name.split(' ').join('+');
  const avatarUrl = `https://ui-avatars.com/api/?name=${correctName}&background=${generateRandomColor()}&length=1&size=256`;

  return avatarUrl;
};
