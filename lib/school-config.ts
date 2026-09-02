import { assetPath } from "./asset-path";

export interface SchoolConfig {
  name: string;
  iemisCode: string;
  tagline: string;
  motto: string;
  logo: string;
  coverImage: string;
  location: string;
  phone: string;
  email: string;
  enrollmentFormUrl: string;
  establishedYear: number;
  affiliation: string;
  officeHours: string;
  social: {
    facebook: string;
    youtube: string;
    whatsapp: string;
  };
}

export const schoolConfig: SchoolConfig = {
  name: "Shree Rastriya Basic School",
  iemisCode: "IEMIS CODE: 030340003",
  tagline: "Learn • Lead • Succeed",
  motto: "Quality Education • Character Development • Community Service",
  logo: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=256&auto=format&fit=crop&q=80",
  coverImage: assetPath("/photos/hero/cover.png"),
  location: "Suryodaya Municipality-9, Ramfok, Ilam, Koshi Province, Nepal",
  phone: "+977-61-532104",
  email: "info@shreerastriyabasicschool.edu.np",
  enrollmentFormUrl: "https://forms.gle/shreerastriyabasicschool-admissions-2026",
  establishedYear: 2025,
  affiliation: "Ministry of Education, Nepal",
  officeHours: "Monday – Friday: 9:00 AM – 4:30 PM",
  social: {
    facebook: "https://facebook.com/mounteverestmodelacademy",
    youtube: "https://youtube.com/@mounteverestacademy",
    whatsapp: "https://wa.me/9779856012345",
  },
};
