const phoneRegex = /^\([1-9]{2}\) [8-9]{1}[0-9]{4}\-[0-9]{4}$/g;
const nameRegex = /^[A-zÀ-ÿ]+ [A-zÀ-ÿ]/g;
const fantasyNameRegex = /^[A-zÀ-ÿ]+ [A-zÀ-ÿ]/g;
const birthdayRegex =/(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}/g;
const cpfRegex = /([0-9]{3}.){3}[0-9]{2}/g;
const cnpjRegex= /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/g
const emailRegex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const cepRegex = /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}[\d]{3}-[\d]{3}/;
const CommercialphoneRegex = /^\(?(?:\d{2})\)?[-.\s]?(?:\d{4,5})[-.\s]?(?:\d{4})$/;



export function isNameValid(name: string |undefined): string {
  if (name === "" || name === undefined) {
    return "É necessário informar o nome";
  } else if (!name.match(nameRegex)) {
    return "É necessário inserir o nome completo";
  } 
  return "valid";
}

export function isMandatoryPhoneValid(phone: string |undefined): string {

  if(phone ==="" || phone === undefined){
    return "É necessário inserir um telefone"
  }else if (!phone.match(phoneRegex)) {
    return "Número inválido";
  }else{
  return "valid";
  }
}

export function isPhoneValid(phone: string |undefined ): string {
  if(phone === undefined){
    return "Número inválido";
  }else if (!phone.match(phoneRegex) && phone.length >0 ) {
    return "Número inválido";
  }else{
  return "valid";
  }
}

export function isPhoneCommercialValid(phone: string | undefined): string {
  if (phone === "" || phone === undefined) {
    return "É necessário inserir um telefone comercial";
  } else if (!phone.match(CommercialphoneRegex)) {
    return "Número de telefone comercial inválido";
  } else {
    return "valid";
  }
}

export function isBirthdayValid(birthday: string | undefined): string {
  if (birthday === "" || birthday === undefined) {
    return "É necessário informar a data de nascimento";
  } else if (!birthday.replace(/-/g, "/").match(birthdayRegex)) {
    return "Data de nascimento inválida";
  }
  return "valid";
}

export function isCpfValid(cpf: string | undefined): string {
  if (cpf === "" || cpf === undefined) {
    return "É necessário informar o cpf";
  } else if (!cpf.match(cpfRegex)) {
    return "CPF inválido";
  }
  return "valid";
}
export function isCnpjValid(cnpj:string | undefined):string{
  if (cnpj === "" || cnpj === undefined) {
    return "É necessário informar o CNPJ";
  } else if (!cnpj.match(cnpjRegex)) {
    return "CNPJ inválido";
  }
  return "valid";
}

export function isCepValid(cep:string | undefined):string{
  if (cep === "" || cep === undefined) {
    return "É necessário informar o CEP";
  } else if (!cep.match(cepRegex)) {
    return "CEP inválido";
  }
  return "valid";
}


export function isEmailValid(email: string | undefined): string {
  if (email === "" || email === undefined) {
    return "É necessário inserir um e-mail";
  } else if (!email.match(emailRegex)) {
    return "E-mail inválido";
  }
  return "valid";
}

export function isPasswordValid(password: string | undefined): string {
  if (password === "" || password === undefined) {
    return "É necessário criar uma senha";
  }
  return "valid";
}

export function isPasswordsEqualsValid(password: string | undefined,passwordConfirmation: string | undefined
): string {
  if (password !== passwordConfirmation) {
    return "As senhas devem ser iguais";
  }
  return "valid";
}

export function isInputNotEmpty(input: string | undefined): string {
  if (input === "" || input === undefined) {
    return "É necessário inserir uma descrição";
  }
  return "valid";
}

export function isAdressNotEmpty(input: string | undefined): string {
  if (input === "" || input === undefined) {
    return "É necessário preencher esse campo";
  }
  return "valid";
}

export function isFantasyNameValid(fantasyName: string | undefined): string {
  if (fantasyName === "" || fantasyName === undefined) {
    return "É necessário informar o nome fantasia";
  } 
  return "valid";
}

export function isCheckedValid(isChecked: boolean): string {
  if (!isChecked) {
    return "É necessário aceitar os termos de uso";
  } 
  return "valid";
}
