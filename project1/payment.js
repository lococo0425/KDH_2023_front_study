let pay = [];
let cart = [{name : 'product1', pay : 1000}, {name : 'produce2' ,pay : 2000}, {name : 'product3' , pay:3000},{name : 'product4' , pay:4000}] ;
console.log(cart);

//주문취소 함수
function cancel(){
    //1.어디에
    const cancel = document.querySelector("#print")
    //2.무엇을 // cart에 담겨진 모든 값을 삭제한다.
    
    if(confirm("장바구니를 비우겠습니까?")){
        cart.length =0;
        cancel.innerHTML = `장바구니가 비었습니다.`;
    }else{alert("취소합니다.")}
    
    //3.출력
    totalPrice();
    console.log(cart)
}


// 결제 함수 
/* 결제 버튼을 누르면 pay라는 배열에 cart에 있는 배열을 추가한다. */
function payment(){
    //1.어디에
    const payMent = document.querySelector("#print")
    //2.무엇을 //cart배열에 있는 배열값을 pay 배열로 이동 

    for(let i = 0; i<cart.length; i++){
    pay = pay.concat(cart[i].name,cart[i].pay);
   }

    //3.출력
    const html =`Pay: [${pay.join(', ')}]`
    payMent.innerHTML = html;
    console.log(cart)
    //cart.length =0;    // 장바구니 초기화.
    totalPrice()
}
//질문 추가된 배열 합계가 안뜸....
function totalPrice(){
    //1.어디에
    const totalP = document.querySelector("#totalPrice > span");
    //2.무엇을
    let totalprice = 0;
    for(let i=0; i<cart.length; i++){
        
        totalprice += cart[i].pay
        console.log(totalprice)
    }
    //3.출력
    totalP.innerHTML=totalprice;
    console.log(totalprice);

}


function successPayment(){
    const successPay = document.querySelector("#successPay")

    let enterpay = prompt("결제 금액을 입력하세요");
    enterpay = Number(enterpay);

    let totalpay = totalPrice()
    if(!isNaN(enterpay)&&enterpay === totalpay){
        alert("결제가 완료되었습니다.")
    }else{"결제 실패"}
}