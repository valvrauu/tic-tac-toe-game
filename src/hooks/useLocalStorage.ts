import { useState, useEffect } from "react";

function setItem(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

function getItem(key: string) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.log(error);
  }
}

function useLocalStorage<Type>(key: string, initialValue: Type) {
  const [value, setValue] = useState(() => {
    const item = getItem(key);
    return (item as Type) || initialValue;
  });

  useEffect(() => {
    setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}

export { useLocalStorage, setItem, getItem };
