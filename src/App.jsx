import Card from "./components/Card";
import React from "react";

function App() {
  // 요구사항에 맞는 상품 정보 변수 설정
  const product = {
    name: "무선 키보드",
    price: 39000,
    brand: "EZTECH",
  };

  return (
    <div>
      <Card name={product.name} price={product.price} brand={product.brand} />
    </div>
  );
}

export default App;
