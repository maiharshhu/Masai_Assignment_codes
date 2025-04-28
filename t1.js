let Names=["john smith","jane doe","john simpson","john davis"];
let emails=[]
let existing_mails=["johns@company.com","janed1@company.com"]

for(let i=0;i<Names.length;i++){
    let fn =Names[i].split(" ")
    let fn1=fn[0]
    let ln1=fn[1];
    let lns1=ln1.split("")
    let lsfn=lns1[0]
    let email=fn1+lsfn+"@company.com";
  for(let i=0;i<existing_mails.length;i++){
      if(existing_mails[i]==email){
          let final=fn1+lsfn+(i+1)+"@company.com"
          emails.push(final);
      }else{
          emails.push(email)
      }
  };
}
let newemails=emails;
let seen = {};
    let result = [];
    for (var i = 0; i < emails.length; i++) {
        var item = emails[i];
        if (!seen[emails[i]]) {
            seen[emails[i]] = true;
            result.push(item);
        }
    }
    console.log(result)