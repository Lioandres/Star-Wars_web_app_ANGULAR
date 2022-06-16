import { FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"


export const validarQueSeanIguales: ValidatorFn = (
  control:FormGroup): ValidationErrors |null => {
  const mail = control.get("mail")
  const repeatMail = control.get("repeatMail")

  return mail === repeatMail
    ? null
    : { noSonIguales: true }
}