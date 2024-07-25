export const ValidEmail = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');

export const ValidPassword = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$');

export const ValidName = new RegExp(`^[a-zA-Z]{5,30}$`);
