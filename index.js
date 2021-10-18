function someRandomOuterFunction(){
    let firstName = "Dipper";
    let lastName = "Pines";
    let age = 13;

    function fullName(){
        console.log("Hello my name is",firstName,lastName);
        function hisSibling(name){
            console.log("And here's my sister",name);
        }
        hisSibling("Mabel Pines")
    }
    function hisAge(){
        if(age >= 13){
            console.log("Dope you're teenager!!");
        } else{
            console.log("It's just a kid")
        }
    }
    fullName();
    hisAge();
}
someRandomOuterFunction();