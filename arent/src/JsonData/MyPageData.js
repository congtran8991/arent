import { ReactComponent as IC_KNIFE } from "../asset/images/icon_knife.svg";
import { ReactComponent as IC_CUP } from "../asset/images/icon_cup.svg";
import ImageM01 from "../asset/images/m01.jpg";
import ImageL03 from "../asset/images/l03.jpg";
import ImageL01 from "../asset/images/l01.jpg";
import ImageL02 from "../asset/images/l02.jpg";
import ImageD02 from "../asset/images/d02.jpg";
import ImageS01 from "../asset/images/s01.jpg";

import { COLOR } from "../Constant";

export const listMeal = [
  {
    icon: <IC_KNIFE />,
    title: "Morning",
  },
  {
    icon: <IC_KNIFE />,
    title: "Lunch",
  },
  {
    icon: <IC_KNIFE />,
    title: "Dinner",
  },
  {
    icon: <IC_CUP />,
    title: "Snack",
  },
];

export const foodList = [
  {
    image: ImageM01,
    text: "05.21 Morning",
  },
  {
    image: ImageL03,
    text: "05.21 Lunch",
  },
  {
    image: ImageL01,
    text: "05.21 Dinner",
  },
  {
    image: ImageL01,
    text: "05.21 Snack",
  },
  {
    image: ImageM01,
    text: "05.20 Morning",
  },
  {
    image: ImageL02,
    text: "05.20 Lunch",
  },
  {
    image: ImageD02,
    text: "05.20 Dinner",
  },
  {
    image: ImageS01,
    text: "05.20 Snack",
  },
];

export const dataChart = {
  labels: [
    "6h",
    "7h",
    "8h",
    "9h",
    "10h",
    "11h",
    "12h",
    "1h",
    "2h",
    "3h",
    "4h",
    "5h",
  ],
  datasets: [
    {
      label: "Visit",
      fill: false,
      lineTension: 0,
      borderColor: COLOR.secondary_300,
      pointBorderColor: COLOR.secondary_300,
      pointBackgroundColor: COLOR.light,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: COLOR.secondary_300,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [100, 80, 130, 125, 150, 200, 190, 210, 170, 190, 220, 200],
    },
    {
      label: "Visit Trend (No Season)",
      fill: false,
      lineTension: 0,
      borderColor: COLOR.primary_300,
      pointBorderColor: COLOR.primary_300,
      pointBackgroundColor: COLOR.light,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: COLOR.primary_300,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
    },
  ],
};

export const optionsChart = {
  title: {
    display: true,
    fontSize: 20,
  },
  legend: {
    display: false,
    position: "bottom",
  },
  scales: {
    yAxes: [
      {
        display: false,
      },
    ],
    xAxes: [
      {
        gridLines: { color: COLOR.gray_400 },
        display: true,
      },
    ],
  },
};
