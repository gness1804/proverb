export function proverb(...args: string[]): string {
  return args.reduce((acc: string, curr: string, index: number) => {
    if (index === args.length - 1) {
      acc += `And all for the want of a ${args[0]}.`;
    } else {
      acc += `For want of a ${args[index]} the ${args[index + 1]} was lost.\n`
    }
    return acc;
  }, '');
}
