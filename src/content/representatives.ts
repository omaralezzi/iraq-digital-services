export type Representative = {
  id: string;
  name: string;
  governorate: string;
  cities: string[];
  phone: string;
  whatsapp: string;
  email: string;
  referralCode: string;
  active: boolean;
};

export const representatives: Representative[] = [];
