import Link from "next/link"

export default function Cart() {

    return (
      <div>
        <h4 className="title">장바구니</h4>
        <div className="cartItem">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <div className="cartItem">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
      </div>
    );
  }
  