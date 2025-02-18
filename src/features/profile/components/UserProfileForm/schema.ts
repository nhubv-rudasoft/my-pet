import * as yup from "yup";

export const userProfileSchema = yup.object({
  id: yup.number().required("Id is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  avatar: yup.string().required("Avatar is required"),
  updatedAt: yup.string().required("Updated at is required"),
});