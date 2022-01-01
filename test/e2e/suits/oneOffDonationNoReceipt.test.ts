import { Selector } from 'testcafe';
import { LoginTestCase } from "./../tests/login.test";
import { WalletTestCase } from "./../tests/wallet.test";

fixture `都度寄付の領収書なしのPJの金額指定ページ`
    .page('https://donation.yahoo.co.jp/detail/5102001/wallet/');

test('都度寄付の領収書なしのテストスイート', async t => {
  const loginTestCase = new LoginTestCase();
  const walletTestCase = new WalletTestCase();

  await loginTestCase.ログインしていない状態のときログイン画面が表示されログインすることができる();
  await walletTestCase.クレジットカードの金額指定ページに遷移できているかの確認();
});