import { t } from "testcafe";
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

export async function クレジットカードの金額指定ページの継続寄付ができないPJでは寄付回数の選択モジュールが非表示である() {
  const wallet = new Wallet();
  await t.expect(wallet.寄付の回数タイトル.exists).notOk();
  await t.expect(wallet.都度寄付ラジオボタン.exists).notOk();
  await t.expect(wallet.継続寄付ラジオボタン.exists).notOk();
}

export async function クレジットカードの金額指定ページの領収書発行ができないPJでは領収書モジュールが非表示である() {
  const wallet = new Wallet();
  await t.expect(wallet.領収書の発行をおこなっておりませんメッセージ.innerText).eql("※このプロジェクトでは領収書の発行をおこなっておりません。");
  await t.expect(wallet.領収書は3000円以上から発行可能ですメッセージ.exists).notOk();
}