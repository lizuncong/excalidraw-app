export const mutateElement = (element, updates, informMutation = true) => {
  for (const key in updates) {
    const value = updates[key];
    if (typeof value !== "undefined") {
      element[key] = value;
    }
  }

  return element;
};
