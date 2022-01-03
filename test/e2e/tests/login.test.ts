/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { t, Selector } from "testcafe";
import { Login } from "../elements/login";
import testId from "../user/testId";

export async function ログインしていない状態のときログイン画面が表示されログインすることができる() {

  const elementLogin = new Login();

  await t
    .typeText(elementLogin.YIDテキストボックス, testId.yid)
    .click(elementLogin.YID入力後の次へボタン)
    .typeText(elementLogin.パスワードテキストボックス, testId.password)
    .click(elementLogin.ログインボタン);
}
