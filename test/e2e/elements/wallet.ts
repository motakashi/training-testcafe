import { Selector } from "testcafe";
import xpathSelector from "../lib/xpath-selector";

export class Wallet {
  PJタイトル = Selector("#contents_header > h1").innerText;
}