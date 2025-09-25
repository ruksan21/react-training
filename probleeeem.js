const newuser ={
    name: "" , email: "" , password: "" , userImage: "" , address: "" , phoneNumber: ""

}
const signup =(name,email,password,userImage,address,phoneNumber)=>{
    if (name.length < 8){
        console.log("name should be at least 8 characters");
    }
    else if (password.length < 6){
        console.log("password should be at least 6 characters");
    }
    else if (!email.includes("@")){
        console.log("email should contain @");
    }
    else if (phoneNumber.length != 10){
        console.log("phone number should be 10 digits");
    }
    else if (!userImage.startsWith("https://")){
        console.log("user image should start with https://");
    }
        else if (!address.includes("street")){
            
    newuser.name = name;
    newuser.email = email;
    newuser.password = password;
    newuser.userImage = userImage;
    newuser.address = address;
    newuser.phoneNumber = phoneNumber;  
    console.log("Signup successful",newuser);


        }
}
det = signup("rukshan","rukshan@example.com","password123","https://example.com/image.jpg","123 street","1234567890",date);
console.log("Signup successful",newuser); 

