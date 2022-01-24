import { Selector } from "testcafe";
import xpathSelector from "../lib/xpath-selector";

export class Wallet {
  // PJタイトル
  PJタイトル = Selector("#contents_header > h1").innerText;

  // 金額指定プルダウン
  金額指定プルダウン初期値 = Selector("#decision-money > select").child("option").withAttribute("selected").value;

  金額指定プルダウン最小値 = Selector("#decision-money > select").child("option").nth(0).value;

  金額指定プルダウン最大値 = Selector("#decision-money > select").child("option").nth(44).value;

  // 寄付回数の選択モジュール
  寄付の回数タイトル = Selector("#tabbox > section > form > div.monthlydonate > h3");

  都度寄付ラジオボタン = Selector("#radio01 > label > span");

  継続寄付ラジオボタン = Selector("#radio02 > label > span");

  // 領収書モジュール
  領収書の発行をおこなっておりませんメッセージ = Selector("#tabbox > section > form > p")
  領収書は3000円以上から発行可能ですメッセージ = Selector("#tabbox > section > form > div.receipt > ul > p")
}