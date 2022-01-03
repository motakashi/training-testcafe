import { Selector } from "testcafe";
import xpathSelector from "../lib/xpath-selector";

export class Wallet {
  PJタイトル = Selector("#article-header").innerText;
}
