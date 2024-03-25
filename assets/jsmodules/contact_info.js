import phoneImg from 'assets/phone_icon.svg'
import emailImg from 'assets/email_icon.svg'
import locationImg from 'assets/location_icon.svg'

const contact_info = [
  {
    url: "tel:+79009009090",
    label: "+7 (900) 900-90-90",
    src: phoneImg,
    alt: "call picture"
  },
  {
    url: "mailto:info@gmail.com",
    label: "info@gmail.com",
    src: emailImg,
    alt: "mail picture"
  },
  {
    url: "#",
    label: "г. Владивосток \n ул. Выселковая 49, стр. 3",
    src: locationImg,
    alt: "location picture"
  },
];


export function give_contact_info() {
  return contact_info;
}