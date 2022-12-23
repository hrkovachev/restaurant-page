require("./css/styles.css");
require("./mystyles.scss");
import { renderPage, initTabs, renderMenu } from "./page-load";

renderPage();

initTabs();

const menu = {
  pizza: {
    "The Big Italian": 10,
    "The House": 10,
    Pesto: 9,
    "The Big Hawaii": 12,
    "Plant Lover": 11,
    Margherita: 11,
    "Epic Veggie": 12,
  },
  pasta: {
    "The Classic": 9,
    "Chicken Alfredo": 6,
    "Italian Sausage Marinara": 6,
    "Chicken Carbonara": 8,
    "Pasta Primavera": 7,
    "Tuscani Chicken": 11,
    Primavera: 12,
    "Pomidoro Fresco": 10,
    Salerno: 8,
    Sorrento: 10,
    Roma: 9,
    "Diana's Special": 15,
  },
  salads: {
    "Classic Garden Salad": 6,
    "Chicken Apple Pecan Salad": 7,
    "Chicken BLT": 8,
    "Chicken Caesar": 10,
    "Chef Salad": 11,
    Antipasto: 12,
    "Garden Grilled Chicken": 7,
    Caprese: 12,
  },
};

renderMenu(menu);
