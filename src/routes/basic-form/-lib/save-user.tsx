// lib/api.ts

export type UserData = {
  firstName: string;
  lastName: string;
};

export const saveUserData = async (data: UserData): Promise<{ id: number }> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to save user");
  }

  return response.json();
};
