const AVATAR_BACKGROUNDS = ['00b8db', '53d05a', 'c2b62a', 'c352cd', 'ef2883'];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * AVATAR_BACKGROUNDS.length);
  return AVATAR_BACKGROUNDS[randomIndex];
};

export const generateAvatar = (name: string): string => {
  const correctName = name.split(' ').join('+');
  const avatarUrl = `https://ui-avatars.com/api/?name=${correctName}&background=${getRandomColor()}&length=1&size=256`;

  return avatarUrl;
};
