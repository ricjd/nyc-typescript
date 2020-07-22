export function foo() {
  if (true) {
    return true;
  } else {
    return false;
  }
}

export async function fooAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  });
}