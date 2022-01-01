import { Selector } from 'testcafe';
import {Login} from "./../elements/login";

const testId = require('./../user/testId.json');

const ElementLogin = new Login();

fixture("ログインページ")
    .page("https://donation.yahoo.co.jp/detail/5102001/wallet/");

test('非ログイン時にログイン画面が表示され、ログインすることができる', async t => {
    await t
        .typeText(Login.YIDテキストボックス , testId.yid)
        .click(Login.YID入力後の次へボタン)
        .typeText(Login.パスワードテキストボックス, testId.password)
        .click(Login.ログインボタン)
});