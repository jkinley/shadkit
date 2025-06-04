export const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Wait at least 500ms before resolving
  await new Promise((resolve) => setTimeout(resolve, 500));

  return response.json();
};
