type User = { id: number; name: string; role: "user" | "super-admin" };

const users: User[] = [
  { id: 1, name: "hehe", role: "user" },
  { id: 2, name: "hee", role: "super-admin" },
  { id: 3, name: "hhe", role: "user" },
];

// fetching uing callbacks
// -> callback is function passed in another function
// callback(error,result)

function findUserByCallback(
  userId: number,
  callback: (error: Error | null, user?: User) => void,
): void {
  setTimeout(() => {
    const user = users.find((user) => user.id === userId);

    if (!user) {
      callback(new Error("user not find"));
      return;
    }

    callback(null, user);
  }, 500);
}

findUserByCallback(3, (error, user) => {
  if (error) {
    console.log(error.message);
  }
  console.log(user?.id, user?.name, user?.role);
});

// implementing using promise

function fetchUserWithPromise(userId: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);

      if (!user) {
        reject(new Error("user not found"));
        return;
      }
      resolve(user);
    }, 1000);
  });
}

fetchUserWithPromise(1)
  .then((user) => {
    console.log(user?.id, user?.name, user?.role);
  })
  .catch((error: Error) => {
    console.log(error.message);
  });

//   implementing using async await

async function finduserByAsyc(userId: number): Promise<void> {
  try {
    const user = await fetchUserWithPromise(userId);
    console.log(user.id, user.name, user.role);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unown error";
    console.log(message);
  }
}

finduserByAsyc(2);
