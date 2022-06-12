export const classNames = (...list: (false | null | undefined | string)[]): string => {
  return list.filter(Boolean).join(' ')
}

export const updateObject = (oldObject:any, updatedProperties:any) => {
  return {
      ...oldObject,
      ...updatedProperties
  };
};