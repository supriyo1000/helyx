import { createContext } from "react";

const ContactContext = createContext<{
  openContact: boolean;
  setOpenContact: React.Dispatch<React.SetStateAction<boolean>>;
  toggleContact: () => void
} | undefined>(undefined)

export default ContactContext