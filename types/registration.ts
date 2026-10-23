export interface MemberRegistration {
  nama: string;
  email: string;
  tanggalLahir: string;
  role: "member" | "admin";
}

export function validateRequired<T extends Record<string, any>>(data: T): (keyof T)[] {
  const missingKeys: (keyof T)[] = [];

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      if (
        value === undefined ||
        value === null ||
        (typeof value === "string" && value.trim() === "")
      ) {
        missingKeys.push(key as keyof T);
      }
    }
  }

  return missingKeys;
}