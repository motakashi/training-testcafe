import { t, Selector } from 'testcafe';
import {Login} from "../elements/login";

export async function ログインしていない状態のときログイン画面が表示されログインすることができる() {

  const testId:any = require('./../user/testId.json');

  const elementLogin = new Login();

  await t
    .typeText(elementLogin.YIDテキストボックス, testId.yid)
    .click(elementLogin.YID入力後の次へボタン)
    .typeText(elementLogin.パスワードテキストボックス, testId.password)
    .click(elementLogin.ログインボタン)
}