import { t, Selector } from "testcafe";
import { Wallet } from "./../elements/wallet";
import testData from "../data/testData";

export async function クレジットカードの金額指定ページに遷移できているかの確認() {
  await t
    .expect(t.eval(() => document.location.href))
    .eql(
      "https://donation.yahoo.co.jp/detail/" + testData.projectId + "/wallet/",
      {
        timeout: 10000,
      }
    );
}

export async function クレジットカードの金額指定ページにPJ名が改行も含めて表示されている() {
  const wallet = new Wallet();
  await t.expect(wallet.PJタイトル).eql(testData.projectName);
}

export async function クレジットカードの金額指定ページの初期金額が500円になっている() {
  const wallet = new Wallet();
  await t.expect(wallet.金額指定プルダウン初期値).eql("500");
}

export async function クレジットカードの金額指定ページのプルダウンメニューが最小値100円と最大値900万円になっている() {
  const wallet = new Wallet();
  await t.expect(wallet.金額指定プルダウン最小値).eql("100");
  await t.expect(wallet.金額指定プルダウン最大値).eql("9000000");
}