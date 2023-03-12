export default class Participant {
    set Name(Name){
        this._Name=Name;
    }
    set Title(Title){
        this._Title=Title;
    }
    set Salary(Salary){
        this._Salary=Salary;
    }
    get Name(){
        return this._Name;
    }
    get Title(){
        return this._Title;
    }
    get Salary(){
        return this._Salary;
    }
    constructor(){
    }
}

