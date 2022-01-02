import { Selector } from 'testcafe';
import { ログインしていない状態のときログイン画面が表示されログインすることができる } from "./../tests/login.test";
import { クレジットカードの金額指定ページに遷移できているかの確認 } from "./../tests/wallet.test";

fixture `都度寄付の領収書なしのPJの金額指定ページ`
    .page('https://donation.yahoo.co.jp/detail/5102001/wallet/');

test('都度寄付の領収書なしのテストスイート', async () => {
  await ログインしていない状態のときログイン画面が表示されログインすることができる();
  await クレジットカードの金額指定ページに遷移できているかの確認();
});