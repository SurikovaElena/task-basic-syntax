export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let length = str.length, symbolI = 1, symbolV = 5, symbolX = 10, symbolL = 50, symbolC = 100, symbolD = 500, symbolM = 1000;
    for (let i = 0; i < length; i++)
    {
        switch(str[i]){
            case 'M':
                result += symbolM;
                break;
            case 'D':
                switch (str[i+1]){
                    case 'M':
                        result += (symbolM - symbolD);
                        i++;
                        break;
                    default:
                        result += symbolD;
                        break;
                }
                break;
            case 'C':
                switch (str[i+1]){
                    case 'M':
                        result += (symbolM - symbolC);
                        i++;
                        break;
                    case 'D':
                        result += (symbolD - symbolC);
                        i++;
                        break;
                    default:
                        result += symbolC;
                        break;
                }
                break;
                        case 'C':
                switch (str[i+1]){
                    case 'M':
                        result += (symbolM - symbolC);
                        i++;
                        break;
                    case 'D':
                        result += (symbolD - symbolC);
                        i++;
                        break;
                    default:
                        result += symbolC;
                        break;
                }
                break;
            case 'L':
                switch (str[i+1]){
                    case 'M':
                        result += (symbolM - symbolL);
                        i++;
                        break;
                    case 'D':
                        result += (symbolD - symbolL);
                        i++;
                        break;
                    case 'C':
                        result += (symbolC - symbolL);
                        i++;
                        break;
                    default:
                        result += symbolL;
                        break;
                }
                break;
            case 'X':
                switch (str[i+1]){
                    case 'M':
                        result += (symbolM - symbolX);
                        i++;
                        break;
                    case 'D':
                        result += (symbolD - symbolX);
                        i++;
                        break;
                    case 'C':
                        result += (symbolC - symbolX);
                        i++;
                        break;
                    case 'L':
                        result += (symbolL - symbolX);
                        i++;
                        break;
                    default:
                        result += symbolX;
                        break;
                }
                break;
            case 'V':
                switch (str[i+1]){
                    case 'M':
                        result += (symbolM - symbolV);
                        i++;
                        break;
                    case 'D':
                        result += (symbolD - symbolV);
                        i++;
                        break;
                    case 'C':
                        result += (symbolC - symbolV);
                        i++;
                        break;
                    case 'L':
                        result += (symbolL - symbolV);
                        i++;
                        break;
                    case 'X':
                        result += (symbolX - symbolV);
                        i++;
                        break;
                    default:
                        result += symbolV;
                        break;
                }
                break;
            case 'I':
                switch (str[i+1]){
                    case 'M':
                        result += (symbolM - symbolI);
                        i++;
                        break;
                    case 'D':
                        result += (symbolD - symbolI);
                        i++;
                        break;
                    case 'C':
                        result += (symbolC - symbolI);
                        i++;
                        break;
                    case 'L':
                        result += (symbolL - symbolI);
                        i++;
                        break;
                    case 'X':
                        result += (symbolX - symbolI);
                        i++;
                        break;
                    case 'V':
                        result += (symbolV - symbolI);
                        i++;
                        break;
                    default:
                        result += symbolI;
                        break;
                }
                break;

        } 
    }
    return result;
}

