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
