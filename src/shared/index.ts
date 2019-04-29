export const getGameWidth = (scene: Phaser.Scene) => {
  return scene.game.scale.width;
};

export const getGameHeight = (scene: Phaser.Scene) => {
  return scene.game.scale.height;
};

export const formatNumberForDisplay = (n: number | string): string => {
  const num = parseFloat(`${n}`);
  if (isNaN(num)) {
    return '';
  }
  return num.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2}).substring(1);
};

// export const formatNumberForDisplay = (n: number | string) => {
//   return parseFloat(`${n}`).toFixed(2);
// };
