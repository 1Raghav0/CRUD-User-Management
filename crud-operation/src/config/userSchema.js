export const userSchema = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
  },
];


// Want DOB later? just add it 

// { name: "dob", label: "Date of Birth", type: "date" }
