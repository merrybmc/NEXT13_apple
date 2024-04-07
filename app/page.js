import Link from 'next/link';

export default function Home() {
  let name = 'min';
  let link = 'http://google.com';
  return (
    <div>
      <h4 className='title'>애플 후레시</h4>
      <p className='title-sub'>by dev {name}</p>
      <a href={link}>링크</a>
    </div>
  );
}
