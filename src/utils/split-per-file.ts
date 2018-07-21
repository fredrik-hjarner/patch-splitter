export const splitPerFile = (text: string): string[] => {
  const files = text.split('diff --git');
  return files.map((file, i) => i === 0 ? file : `diff --git${file}`);
};
