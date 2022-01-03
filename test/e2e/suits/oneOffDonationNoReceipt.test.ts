import { Selector } from "testcafe";
import testData from "../data/testData";
import { ログインしていない状態のときログイン画面が表示されログインすることができる } from "./../tests/login.test";
import {
  クレジットカードの金額指定ページに遷移できているかの確認,
  クレジットカードの金額指定ページにPJ名が改行も含めて表示されている,
} from "./../tests/wallet.test";

fixture`都度寄付の領収書なしのPJの金額指定ページ`.page(
  "https://donation.yahoo.co.jp/detail/" + testData.projectId + "/wallet/"
);

test("都度寄付の領収書なしのテストスイート", async () => {
  await ログインしていない状態のときログイン画面が表示されログインすることができる();
  await クレジットカードの金額指定ページに遷移できているかの確認();
  await クレジットカードの金額指定ページにPJ名が改行も含めて表示されている();
});
