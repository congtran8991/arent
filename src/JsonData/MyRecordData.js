import { COLOR } from "../Constant";
import ImageMyRecommend1 from "../asset/images/MyRecommend-1.jpg";
import ImageMyRecommend2 from "../asset/images/MyRecommend-2.jpg";
import ImageMyRecommend3 from "../asset/images/MyRecommend-3.jpg";
export const listRecommend = [
  {
    image: ImageMyRecommend1,
    text1: "BODY RECORD",
    text2: "自分のカラダの記録",
  },
  {
    image: ImageMyRecommend2,
    text1: "MY EXERCISE",
    text2: "自分の運動の記録",
  },
  {
    image: ImageMyRecommend3,
    text1: "MY DIARY",
    text2: "自分の日記",
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

export const listBtnBottomChart = [
  {
    background: COLOR.light,
    color: COLOR.primary_300,
    text: "日",
  },
  {
    background: COLOR.light,
    color: COLOR.primary_300,
    text: "週",
  },
  {
    background: COLOR.light,
    color: COLOR.primary_300,
    text: "月",
  },
  {
    background: COLOR.primary_300,
    color: COLOR.light,
    text: "年",
  },
];

export const listExerciseItem = [
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
  {
    title: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10min",
  },
];

export const listDiaryItem = [
  {
    time: "2021.05.21   23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    time: "2021.05.21   23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    time: "2021.05.21   23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    time: "2021.05.21   23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    time: "2021.05.21   23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    time: "2021.05.21   23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    time: "2021.05.21   23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    time: "2021.05.21   23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
];
