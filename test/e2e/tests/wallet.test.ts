import { t, Selector } from 'testcafe';

export async function クレジットカードの金額指定ページに遷移できているかの確認(){

  await t
  .expect(t.eval(() => document.location.href))
  .eql('https://donation.yahoo.co.jp/detail/5102001/walle/', { timeout: 10000 })

}