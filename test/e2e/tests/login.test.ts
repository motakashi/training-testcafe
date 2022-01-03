/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { t, Selector } from "testcafe";
import { Login } from "../elements/login";
import testId from "../user/testId";

export async function ログインしていない状態のときログイン画面が表示されログインすることができる() {
  const elementLogin = new Login();

  await t
    // ログイン画面に遷移できているかURLで確認
    .expect(t.eval(() => document.location.href))
    .contains("https://login.yahoo.co.jp/", {
      timeout: 10000,
    })
    // ログイン処理の実施
    .typeText(elementLogin.YIDテキストボックス, testId.yid)
    .click(elementLogin.YID入力後の次へボタン)
    .typeText(elementLogin.パスワードテキストボックス, testId.password)
    .click(elementLogin.ログインボタン);
}
