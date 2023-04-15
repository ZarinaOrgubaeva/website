import Car from "../../assets/img//car.svg";
import MoneyBox from "../../assets/img/money.svg";
import Benefist from "../../assets/img/benefist.svg";
export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headLine: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees ",
  buttonLabel: "Get started",
  imgStart: false,
  img: Car,
  alt: "Car",
  dark: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headLine: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees ",
  buttonLabel: "Learn More",
  imgStart: true,
  img: MoneyBox,
  alt: "resume",
  dark: false,
  darkText: true,
  primary: true,
};

export const homeObjThree = {
  id: "signUp",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headLine: "Creating an account is extremely easy",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees ",
  buttonLabel: "Start Now",
  imgStart: false,
  img: Benefist,
  alt: "benefist",
  dark: false,
  darkText: false,
  primary: true,
};
