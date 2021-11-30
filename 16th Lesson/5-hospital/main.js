/**
 Naudojant ES6 klases sukurkite objekto HospitalEmployee tėvinę klasę. Jos konstruktoriuje turi būti:​

- name;​

- remainingVacationDays, šios savybės vertė yra 20.​

​

Parašyti getter'ius name ir remainingVacationDays savybėms.​

​
Parašyti metodą takeVacationDays, kuris priims argumentą daysOff (skaičius). ​

Metodas turi apskaičiuoti remainingVacationDays.
 */

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

/**
2. Naudojant ES6 klases sukurkite objekto Nurse vaikinę klasę​

Properties: _name, _remainingVacationDays (set to 20 inside the constructor()), _certifications​

Methods: .takeVacationDays(), .addCertification()​

Call .takeVacationDays() with an input of 5 on your nurse instance.​

Under the method call, log the value saved to the remainingVacationDays property in nurseOlynyk.​

Under the Nurse constructor(), add a getter that returns the value saved to the Nurse instance’s _certifications.​

Add a method called addCertification under the certifications getter. ​

The method should accept one input (newCertification). Inside the method, use the push method to add the newCertification value to the nurse’s certifications array.​

At the bottom of main.js call the .addCertification() method on nurse with a parameter of 'Genetics'.​

 */

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);

/**
 ​

Doctor​

    Properties: _name, _remainingVacationDays (set to 20 inside the constructor()), _insurance​

    Methods: .takeVacationDays()
 */
