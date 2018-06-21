import { Injectable } from '@angular/core';
import { BMI } from '../../models/bmi.model';

@Injectable()
export class BmiProvider {

  calculateBMI(height: number, weight: number){
    const BMI = weight/height/height;
    return <BMI>{
      BMI: BMI.toFixed(2),
      classification : this.classifyBMI(BMI),
    }
  }
  
  classifyBMI(BMI : number){
    if (BMI < 18.5){
      return 'underweight';
    }else if(BMI > 18.5 && BMI < 24.9){
      return 'normal weight';
    }else if(BMI > 25 && BMI < 29.9){
      return 'overweight';
    }else if(BMI > 25 && BMI < 29.9){
      return 'class 1 obesity';
    }else if(BMI > 35 && BMI < 39.9){
      return 'class 2 obesity';
    }else if(BMI > 40){
      return 'class 3 obesity';
    }
  }

}
