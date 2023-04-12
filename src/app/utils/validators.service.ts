export const controlErrorMessage = {
  username: {
    required: "Ingrese el usuario",
    pattern: "El usuario solo debe contener letras"
  },
  password: {
    required: "Ingrese la contraseña",
    pattern: "La contraseña debe tener mínimo 8 catacteres, letras, y números. "

  }
}

export const patternValidators = {
  onlyLetters: "[a-zA-Z]+$",
  passwordSecure: "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$"
}



