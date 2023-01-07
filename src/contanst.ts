import dayjs from "dayjs";
import { NavPath } from "./Pages/MyRecord/MyRecord";
import { ROUTES } from "./routes";

export const MENU_LIST = [
  {
    label: "自分の記録",
    iconSrc: "/Imagine/memo-icon.png",
    path: ROUTES.MYRECORD,
  },
  { label: "チャレンジ", iconSrc: "/Imagine/challenge-icon.png" },
  { label: "お知らせ", iconSrc: "/Imagine/info-icon.png", hasBadge: true },
];
export const MenuItemList = [
  { label: "自分の記録", path: ROUTES.MYRECORD },
  { label: "体重グラフ" },
  { label: "目標" },
  { label: "選択中のコース" },
  { label: "コラム一覧", path: ROUTES.COLUMN },
  { label: "設定" },
];
export const recommendItems = [
  { header: "RECOMMENDED COLUMN", text: "オススメ" },
  { header: "RECOMMENDED DIET", text: "オススメ" },
  { header: "RECOMMENDED BEAUTY", text: "オススメ" },
  { header: "RECOMMENDED HEALTH", text: "オススメ" },
];
export const MealList = [
  { src: "Imagine/m01.jpg", text: "05.21.Morning" },
  { src: "Imagine/l03.jpg", text: "05.21.Lunch" },
  { src: "Imagine/d01.jpg", text: "05.21.Dinner" },
  { src: "Imagine/l01.jpg", text: "05.21.Snack" },
  { src: "Imagine/m01.jpg", text: "05.20.Morning" },
  { src: "Imagine/l02.jpg", text: "05.20.Lunch" },
  { src: "Imagine/d02.jpg", text: "05.20.Dinner" },
  { src: "Imagine/s01.jpg", text: "05.20.Snack" },
];
export const navList = [
  {
    bgImg: "/Imagine/MyRecommend-1.jpg",
    headerText: "Body Record",
    btnText: "自分のカラダの記録",
    path: "body" as NavPath,
  },
  {
    bgImg: "/Imagine/MyRecommend-2.jpg",
    headerText: "My exercise",
    btnText: "自分の運動の記録",
    path: "exercise" as NavPath,
  },
  {
    bgImg: "/Imagine/MyRecommend-3.jpg",
    headerText: "my diary",
    btnText: "自分の日記",
    path: "diary" as NavPath,
  },
];

export const TODAY = dayjs().format("YYYY.MM.DD");
