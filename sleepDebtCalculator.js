const getSleepHours = day => {
    switch(day){
      case 'Monday': 
      return 8;
      break;
      case 'Tuesday':
      return 7.5;
      break;
      case 'Wednesday':
      return 6;
      break;
      case 'Thursday':
      return 7;
      case 'Friday':
      return 8;
      break;
      case 'Saturday':
      return 7;
      break;
      case 'Sunday':
      return 9;
      break;
      default:
      console.log('Error!');
    }
  };
  /*Testing the function
  console.log(getSleepHours('Sunday'));*/
  const getActualSleepHours = () => getSleepHours('Monday') +  getSleepHours('Tuesday') +  getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
    
  const getIdealSleepHours = () =>{
    const idealHours = 8;
    return idealHours * 7;
  };
  console.log(getSleepHours('Friday'));
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
      console.log('You had'+ (idealSleepHours - actualSleepHours) + ' hours hence,you got the perfect amount of sleep.');
    }else if(actualSleepHours > idealSleepHours){
      console.log('You had' +(idealSleepHours - actualSleepHours) + ' hours more sleep hence, you had more sleep than needed.');
    }else if(actualSleepHours < idealSleepHours){
      console.log('You had '+ (idealSleepHours - actualSleepHours)+ ' hours less sleep hence, you should get more rest.');
    }else{
      console.log('Input the right values!');
    }
  };
  calculateSleepDebt();