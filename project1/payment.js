let pay = [];
let cart = [{pay : 1000}, {pay2 : 2000}, {pay3:3000},{pay4:4000}] ;
console.log(cart);

//주문취소 함수
function cancel(){
    //1.어디에
    const cancel = document.querySelector("#print")
    //2.무엇을 // cart에 담겨진 모든 값을 삭제한다.
    
    cart.splice(0);

    //3.출력

}




// 결제 함수 
/* 결제 버튼을 누르면 pay라는 배열에 cart에 있는 배열을 추가한다. */
function payment(){
    //1.어디에
    const payMent = document.querySelector("#print")
    //2.무엇을 //cart배열에 있는 배열값을 pay 배열로 이동 
   for(let i = 0; i<cart.length; i++){
    pay=pay.concat(Object.values(cart[i]));
   }
    //3.출력
    const html =`Pay: [${pay.join(', ')}]`
    payMent.innerHTML = html;
}
