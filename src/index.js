module.exports = function toReadable (number) {
    let result = "";
    const numberStr = number.toString();
    const num = {
      num0 : ['zero', '0'],
      num1 : ['one', '1'],
      num2 : ['two', '2'],
      num3 : ['three', '3'],
      num4 : ['four', '4'],
      num5 : ['five', '5'],
      num6 : ['six', '6'],
      num7 : ['seven', '7'],
      num8 : ['eight', '8'],
      num9 : ['nine', '9'],
      num10 : ['ten', '10'],
      num11 : ['eleven', '11'],
      num12 : ['twelve', '12'],
      num13 : ['thirteen', '13'],
      num14 : ['fourteen', '14'],
      num15 : ['fifteen', '15'],
      num16 : ['sixteen', '16'],
      num17 : ['seventeen', '17'],
      num18 : ['eighteen', '18'],
      num19 : ['nineteen', '19']
    };
    const teven = {
        num20 : ['twenty', '20'],
        num30 : ['thirty', '30'],
        num40 : ['fourty', '40'],
        num50 : ['fifty', '50'],
        num60 : ['sixty', '60'],
        num70 : ['seventy', '70'],
        num80 : ['eighty', '80'],
        num90 : ['ninety', '90']
    }
    
    const values = Object.values(num);
    const values2 = Object.values(teven);



    if(numberStr.length === 1){
        values.forEach((item) => {
            if(numberStr === item[1]){
                result = item[0];
            }
        })
    }
    if (numberStr.length === 2 && number < 20){
        values.forEach(item => {
            if(numberStr === item[1]){
                result = item[0];
            }
        });
    };
    if (number >= 20 && numberStr.length === 2){
        values2.forEach(item => {
            if(numberStr === item[1]){
                result = item[0];
            } else {
                if(numberStr[0] === item[1][0]){
                    result = item[0];
                    values.forEach(el =>{
                        if(numberStr[1] === el[1]){
                            result = result + " " + el[0];
                        };
                    });
                };
            };
        });
    };
    if (number >= 100 && numberStr.length === 3 && numberStr[1] === '0'){
        values.forEach((item) => {
            if(numberStr[0] === item[1]){
                result = item[0] + " " + "hundred";
            };
        });
        values.forEach(item => {
            if(numberStr[2] === item[1]){
                result = result + " " + item[0];
            };
        });	
    } else
    if (number >= 100 && numberStr.length === 3 && numberStr[1] === '1'){
        values.forEach((item) => {
            if(numberStr[0] === item[1]){
                result = item[0] + " " + "hundred";
            };
        });
        values.forEach(item => {
            if((numberStr[1] + numberStr[2]) === item[1]){
                result = result + " " + item[0];
            }
        });	
    } else {
        values.forEach((item) => {
            if(numberStr[0] === item[1]){
                result = item[0] + " " + "hundred";
            };
        });
    
        values2.forEach(item => {
            if(numberStr[1] === item[1][0]){
                result = result + " " + item[0];
            }
        });
        values.forEach(item => {
            if(numberStr[2] === item[1] && numberStr[2] != '0'){
                result = result + " " + item[0];
            };
        });
    };
    return result;
}
