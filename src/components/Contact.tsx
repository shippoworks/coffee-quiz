interface Props {
  onBack: () => void
}

export default function Contact({ onBack }: Props) {
  return (
    <div className="static-page">
      <button className="footer-button" onClick={onBack}>← 戻る</button>
      <h2>お問い合わせ</h2>
      <p>連絡先: coffeeknowledge01@gmail.com</p>
    </div>
  )
}
