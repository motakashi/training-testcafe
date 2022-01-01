import { t, Selector } from 'testcafe';
import {Login} from "../elements/login";

export class LoginTestCase{

	testId:any = require('./../user/testId.json');

	elementLogin = new Login();

	async ログインしていない状態のときログイン画面が表示されログインすることができる(){
    await t
      .typeText(this.elementLogin.YIDテキストボックス , this.testId.yid)
      .click(this.elementLogin.YID入力後の次へボタン)
      .typeText(this.elementLogin.パスワードテキストボックス, this.testId.password)
      .click(this.elementLogin.ログインボタン)
  };
}