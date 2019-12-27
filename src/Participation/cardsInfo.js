import kovtky from "./imgs/3kovtky.png";
import litachok from "./imgs/litachok.png";
import maletilo from "./imgs/maletilo.png";
import mega from "./imgs/mega.png";
import tilo from "./imgs/tilo.png";

let registrationLink = "https://forms.gle/TBfYPvjDfvb1cb59A";
let info = [
  {
    imgLink: kovtky,
    imgAlt: "мега-папiрец",
    title: "3 ковтки соми",
    description: `Тестовий супер-папірець, для тих, хто у нас вперше.
    Три будь-які різні заняття, окрім виняткових, позначених в календарі зірочкою\u00A0(*)`,
    validPeriod: "діє – місяць",
    price: "150 грн",
    registrationLink: registrationLink
  },

  {
    imgLink: mega,
    imgAlt: "пташка",
    title: "мега-папірець",
    description: `Всі події та класи, окрім виняткових, використання простору в час "вільної майстерні”, чайок`,
    validPeriod: "діє – місяць",
    price: "1000/1200 грн",
    registrationLink: registrationLink
  },

  {
    imgLink: tilo,
    imgAlt: "contemporary dance",
    title: "тіло",
    description: `8 будь-яких занять, окрім виняткових подій, позначених в календарі зірочкою\u00A0(*)`,
    validPeriod: "діє – місяць",
    price: "650/750 грн",
    registrationLink: registrationLink
  },

  {
    imgLink: maletilo,
    imgAlt: "мале тіло",
    title: "мале тіло",
    description: `4 будь-які заняття, окрім виняткових подій, позначених в календарі зірочкою\u00A0(*)`,
    validPeriod: "діє – місяць",
    price: "350/450 грн",
    registrationLink: registrationLink
  },

  {
    imgLink: litachok,
    imgAlt: "папiрець літачок",
    title: "літачок",
    description: `Папірець для студентів та пенсіонерів, 6 будь-яких занять,
    окрім вийняткових подій, позначених в календарі зірочкою\u00A0(*)`,
    validPeriod: "діє – місяць",
    price: "150 грн",
    registrationLink: registrationLink
  }
];

export default info;
