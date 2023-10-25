
export const validationMessages = {
    minLength: (field: string, length: number) =>
      `${field} doit avoir au moins ${length} caractères.`,
    maxLength: (field: string, length: number) =>
      `${field} ne doit pas dépasser ${length} caractères.`,
    required: (field: string) => `${field} est obligatoire.`,
    IS_STRING: (field:string) => `${field} must be a string.`,
    IS_EMAIL: () => ` must be a valid email address.`,
   
  };
  