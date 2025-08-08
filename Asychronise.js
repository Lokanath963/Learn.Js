   //  02- 12 -2024   ---> Monday

// call back hell function OR pyramid Doom function is very tough   ****imp

setTimeout(function search() {
    console.log("Searching The Product");
    setTimeout(function select() {
        console.log("Selecting The Product");
        setTimeout(function add_to_cart() {
            console.log("Adding the cart");
            setTimeout(function pay() {
                console.log("Making the Payment");
                setTimeout(function take_order () {
                    console.log("Reciving the Order");
                    
                }
                ,2000)
            }
            ,2000)

        }
        ,2000)
    }
    ,2000)
}
,2000);

// normal call back hell set 2 sec after that all system statements is printing

setTimeout(function search() {
    console.log("Searching The Product");
}
,2000);

setTimeout(function select() {
    console.log("Selecting The Product");
}
,2000);

setTimeout(function add_to_cart() {
    console.log("Adding the cart");
}
,2000);

setTimeout(function pay() {
    console.log("Making the Payment");
}
,2000);

setTimeout(function take_order () {
    console.log("Reciving the Order");   
}
,2000)
