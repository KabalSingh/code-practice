const User={
    _email: 'a@abc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email=value;
    },

    get password(){
        return this._password.toUpperCase();
    },

    set password(value){
        this._password=value;
    }
}


const chai=Object.create(User)
console.log(chai.email);