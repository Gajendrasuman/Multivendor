import Slideshow from '@/components/hero/Slider'
import Link from 'next/link'
export default function rootLayout() {
  return (
    <>
      <Slideshow />
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link rel="stylesheet" href="/productPage" ><button className="btn btn-primary">Buy Now</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}