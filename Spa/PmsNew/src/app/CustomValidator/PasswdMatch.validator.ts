import { FormControl,ValidatorFn } from '@angular/forms';

export function MatchPasswd(newpassword: string): ValidatorFn {
    return (control: FormControl) => {
        if (!control || !control.parent) {
            return null;
        }
        return control.parent.get(newpassword).value === control.value ? null : { mismatch: true };
    };
}
