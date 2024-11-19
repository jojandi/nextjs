export default function List() {
    let 상품 = ['Tomatoes', 'Pasta','Coconut'];

    return (
      <div>
        <h4 className="title">상품 목록</h4>
        {
            상품.map((a, i)=>{
                return(
                    <div className="food" key={i}>
                        <img src={`/food${i}.png`} className="foodImg" />
                        <h4>{a}_$40</h4>
                    </div>
                )
            })
        }
      </div>
    );
  }
  