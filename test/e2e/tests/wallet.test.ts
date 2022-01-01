import { t, Selector } from 'testcafe';

export class WalletTestCase{

	async クレジットカードの金額指定ページに遷移できているかの確認(){
    await t
    .expect(t.eval(() => document.location.href))
    .eql('https://donation.yahoo.co.jp/detail/5102001/wallet/', { timeout: 10000 })
  };

}