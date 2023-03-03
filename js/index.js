class Home{

    constructor(){
        $("#btnSubmit").on('click',()=>{this.sendData();});
        this.mathMedia();
    }

    validationUser(){

        // for name validation.
        let name=$("#txtName").val();
        let namePatten=/^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/ig;
        let isName=false;
        if(name=="" || name==undefined ||name=="undefined" || name=="null"|| name==null){
            isName=false;
            Swal.fire({title:"Oops!",html:"<strong> Name is Required.</strong>",icon:"error"});
            $("#txtName").focus();
            return false;
        }else if(!namePatten.test(name)){
            isName=false;
            Swal.fire({title:"Oops!",html:"<strong>Name is Only Contain Alphabates.</strong> ",icon:"error"});
            $("#txtName").focus();
            return false;
        }else{
            isName=true;
        }

        // for number validation.
        let number=$("#txtNumber").val();
        let isNumber=false;
        if(number=="" || number==undefined ||number=="undefined" || number=="null"|| number==null){
            Swal.fire({title:"Oops!",html:`<strong>Number is Required.</strong>`,icon:"error"});
            $("#txtNumber").focus();
            isNumber=false;
            return false;
        }else if(number.length != 10){
            Swal.fire({title:"Oops!",html:"<strong>Number must be 10 digits.</strong>",icon:"error"});
            $("#txtNumber").focus();
            isNumber=false;
            return false;
        }else{
            isNumber=true;
        }

        // for address validation.
        let address=$("#txtAddress").val();
        let isAddress=false;
        if(address=="" || address==undefined ||address=="undefined" || address=="null"|| address==null){
            isAddress=false;
            Swal.fire({title:"Oops!",html:"<strong>Address is Required.</strong>",icon:"error"});
            $("#txtAddress").focus();
            return false;
        }else{
            isAddress=true;
        }

        // again check all the fields validation.
        if(isName==true && isNumber==true && isAddress==true){
            return true;
        }else{
            return false;
        }

    }

    sendData(){
        if(this.validationUser()){
            let name=$("#txtName").val();
            let number=$("#txtNumber").val();
            let address=$("#txtAddress").val();

            // Email.send({
            //     Host: "smtp.gmail.com",
            //     Username: "mojidrayagnik@gmail.com",
            //     Password: "ldbmzvxgykhlfysb",
            //     From: "mojidrayagnik@gmail.com",
            //     To: "mojidrayagnik@gmail.com",
            //     Subject: "Paver Related Contact ",
            //     Body: `Name is: ${name},\nAddress is: ${address},\nNumber is :${number}`,
            //   }).then((value)=>{
            //     Swal.fire("Sucess");
            //   })
        }
    }

    mathMedia(){
        $("#navbarToggle").hide();
        let query=window.matchMedia("(max-width: 768px)");
        if(query.matches){
            $("#navbarToggle").show();
            $("#navbar-menu a").hide();
            $("#navbarToggle").on("click",()=>{
                    $("#navbar-menu a").slideToggle();
            });
        }
    }
    
}

// main program starts here
const HOME=new Home();
