const jwt = require("jsonwebtoken")
const jwtpass = "Alpha221"
const zod = require("zod")
// jwt auth
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
function generateJwtToken(username, password){
    const emailResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!emailResponse.success || !passwordResponse.success){
        return null;
    }

    const token = jwt.sign({username}, jwtpass);
    return token;
}

function decode(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false;
    }
}

function verify(token){
    try{        
        jwt.verify(token, jwtpass);
        return true;
    }catch(e){

    }
    return false;
}

const result = generateJwtToken("deep@gmail.com", "1292723");
console.log(result);

const descryption = decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlZXBAZ21haWwuY29tIiwiaWF0IjoxNzM3NjIwMDE0fQ.udSjO82ghYOOo3GAHwVwq0cpayvWKeE1KE6Tjh-sQXI");
console.log(descryption);

const verification = verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlZXBaAZ21haWwuY29tIiwiaWF0IjoxNzM3NjIwMDE0fQ.udSjO82ghYOOo3GAHwVwq0cpayvWKeE1KE6Tjh-sQXI");
console.log(verification);
// done

