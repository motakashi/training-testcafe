import { Selector } from "testcafe";
import xpathSelector from "../lib/xpath-selector";

export class Wallet {
  PJタイトル = Selector("#contents_header > h1").innerText;

  金額指定プルダウン初期値 = Selector("#decision-money > select").child("option").withAttribute("selected").value;

  金額指定プルダウン最小値 = Selector("#decision-money > select").child("option").nth(0).value;

  金額指定プルダウン最大値 = Selector("#decision-money > select").child("option").nth(44).value;
}
