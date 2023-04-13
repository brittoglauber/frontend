import passwordValidator from "password-validator"

export function validatePassword(password: string): boolean {
    // Crie um validador de senha
    const schema = new passwordValidator();
  
    // Adicione as regras de validação de senha
    schema
      .is().min(4)             // Deve ter no mínimo 4 caracteres
      .is().max(100)           // Não pode ter mais de 100 caracteres
      // .has().uppercase()       // Deve ter pelo menos uma letra maiúscula
      // .has().lowercase()       // Deve ter pelo menos uma letra minúscula
      .has().digits(1)         // Deve ter pelo menos um dígito
      .has().not().spaces()    // Não pode ter espaços
  
    // Verifique se a senha atende aos requisitos
    const isValid = schema.validate(password);

    if (typeof isValid === 'boolean') {
      return isValid;
    } else {
      return false;
    }
}

export function senhasCompativeis(password: string, confirmPassword: string):boolean {
    if(password === confirmPassword) {
        return true
    } else {
        return false
    }
}