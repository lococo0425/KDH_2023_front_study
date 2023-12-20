const categoryArray = [
    {cnum : 1, cname: "신제품(NEW)"},
    {cnum : 2, cname: "프리미엄"},
    {cnum : 3, cname: "와퍼&주니어"},
    {cnum : 4, cname: "치킨&슈림프버거"},
    {cnum : 5, cname: "올데이킹&킹모닝"}
];
const productArray =[
    {pnum : 1, pname : "버거1", pprice : 3000 , pimg : "버거1.png", cnum :1},
    {pnum : 2, pname : "버거2", pprice : 3000 , pimg : '버거2.png', cnum :2},
    {pnum : 3, pname : "버거3", pprice : 3000 , pimg : '버거3.png', cnum :3}
];
categoryprint();
function categoryprint(selectcnum){
    console.log("ASDf")
    //1.어디에
    const categoryprint = document.querySelector("#header>ul")
    //2.무엇을
    html="";
    for(let i=0; i<categoryArray.length;i++){
        html += `<li onclick="categoryprint(${categoryArray[i].cnum})"
        class ="${categoryArray[i].cnum==selectcnum ? 'selectMenu' : ''}">
        ${categoryArray[i].cname}</li>`
    }
    //3.출력
    categoryprint.innerHTML =html;

}