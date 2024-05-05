let gender = '';
let day = '';
let year = 1950;
const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алиса",
            "id_2": "Мария",
            "id_3": "Татьяна",
            "id_4": "Алина",
            "id_5": "Дарья",
            "id_6": "Надежда",
            "id_7": "Наталья",
            "id_8": "Галина",
            "id_9": "Анна",
            "id_10": "Анастасия"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    professionalMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Водитель",
            "id_2": "Шахтер",
            "id_3": "Строитель",
            "id_4": "Учитель",
            "id_5": "Лаборант",
            "id_6": "Актер",
            "id_7": "Солдат",
            "id_8": "Машинист",
            "id_9": "Инженер",
            "id_10": "Программист"
        }
    }`,
    professionalFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Маникюрщица",
            "id_2": "Продавец",
            "id_3": "Няня",
            "id_4": "Учитель",
            "id_5": "Лаборант",
            "id_6": "Актриса",
            "id_7": "Стюардесса",
            "id_8": "Сваха",
            "id_9": "Инженер",
            "id_10": "Дизайнер"
        }
    }`,
    BirthYear: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',




    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
        return obj.list[prop];
    },

    randomBirthYear: function () {
        const obj = JSON.parse(this.BirthYear);
        const numb = this.randomIntNumber(obj.count, 1) 
        const prop = `id_${numb}`;  
        if (numb == 1 || numb == 3 || numb == 5 || numb == 7 || numb == 8 || numb == 10 || numb == 12) {
        day = (this.randomIntNumber(31, 1)).toString();
        } else if (numb == 2) {
            day = (this.randomIntNumber(28, 1)).toString();
            } else {
            day = (this.randomIntNumber(30, 1)).toString();
        }
        const mount = obj.list[prop];
        year = this.randomIntNumber(65, 1);
       const randomBirthYearday = day + " " + mount + " " + (2005 - year).toString() + " года";
       return randomBirthYearday;
    },

    randomGender: function() {
        randomNumber = Math.round(Math.random());

    gender = (randomNumber == 0) ? JSON.parse(JSON.stringify(personGenerator)).GENDER_MALE
            : JSON.parse(JSON.stringify(personGenerator)).GENDER_FEMALE;
            return gender;
    

    },

    randomFirstName: function() {
         if (gender == 'Мужчина') {
   
               return this.randomValue(this.firstNameMaleJson);
            }
            else {
                return this.randomValue(this.firstNameFeMaleJson);  
            }
    },
    randomProfession: function() {
        if (gender == 'Мужчина') {
  
              return this.randomValue(this.professionalMaleJson);
           }
           else {
               return this.randomValue(this.professionalFeMaleJson);  
           }
   },

     randomSecondName: function() {
         let secondNameMale = this.randomValue(this.firstNameMaleJson);
        if (gender == 'Мужчина') {
 
          if (secondNameMale.substr(-1, 1) == 'а')  { 
            secondNameMale = secondNameMale.replace('а','ович');
            return secondNameMale;
         }
         else if (secondNameMale.substr(-1, 1) == 'й') {
            secondNameMale = secondNameMale.replace('й','евич');
            return secondNameMale;  
         }
         else if (secondNameMale.substr(-3, 3) == 'аил') {
            secondNameMale = secondNameMale.replace('ил','йлович');
            return secondNameMale;  
         }
         else {
            return secondNameMale + 'ович';   
         }
        }
         else {
            if (secondNameMale.substr(-1, 1) == 'а')  { 
                secondNameMale = secondNameMale.replace('а','овна');
                 return secondNameMale;
             }
             else if (secondNameMale.substr(-1, 1) == 'й') {
                secondNameMale = secondNameMale.replace('й','евна');
                    return secondNameMale;  
             }
             else if (secondNameMale.substr(-3, 3) == 'аил') {
                secondNameMale = secondNameMale.replace('ил','йловна');
                    return secondNameMale;  
             }
             else {
                secondNameFeMale = this.randomValue(this.firstNameMaleJson);
                return secondNameMale + 'овна';  
             }
         }
    },

    randomSurname: function() {
        if (gender == 'Мужчина') {
    
            return this.randomValue(this.surnameJson);
         }
         else {
        return this.randomValue(this.surnameJson)+'а';
         }
    },


    getPerson: function () {
        this.person = {};
        this.person.genderName = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.secondName = this.randomSecondName();
        this.person.professionOutput = this.randomProfession();
        this.person.birthYear = this.randomBirthYear();
       
        return this.person;
    },
}