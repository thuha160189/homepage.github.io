        function myarr(){
           return [1,1];
        }
        //2. find max
        function max(num1, num2){
            return num1 > num2 ? num1 : num2;
        }
        //3. find max of 3 input number

        function maxOfTree(num1, num2, num3){
            let num= num1 > num2 ? num1 : num2;
            return num>num3?num:num3;
        }
        //4. isVowel
        function isVowel(s){
            s = s.toUpperCase();
            return s=='A'||s=='E'||s=='I'||s=='O'||s=='U';
        }
        //5a. sum of array elements
        function sum(arr){
            let sum=0;
            for(let i=0; i<arr.length; i++){
                sum +=arr[i];
            }
            return sum;
        }
        //5b. multiplies elements in array
        function multiplies(arr){
            let result=1;
            for(i=0; i<arr.length; i++){
                result *=arr[i];
            }
            return result;
        }
        //6. reverse array
        function reverse(str){
            let s='';
            for(i=str.length-1; i>=0; i--){
                s +=str.charAt(i);
            }
            return s;
        }
        //7. find longest word in arr and return length of that word
        function findLongestWord(arr){
            let result=0;
            for(i=0; i<arr.length; i++){
                if(arr[i].length>result)
                result = arr[i].length;
            }
            return result;
        }
        //8. filter words have length greater than n
        function filterLongWord(arr, n){
            let arr1=[];
            for(i=0; i<arr.length; i++){
                if(arr[i].length>n)
                arr1.push(arr[i]);
            }
            return arr1;
        }

        //9.a multiplies with 10

        function multiplies10(arr){
            return arr.map(mul10);
        }
        function mul10(elem, i, arr){
            return elem *10;
        }
        //filter num=3
        function filter3(elem, i, arr){
            return elem ==3;
        }
        function arrWithNum3(arr){
            return arr.filter(filter3);
        }
        //9b. reduce product of a
        function reduceAll(accumulator, currentValue, currentIndex, arr){
            return accumulator*currentValue;
        }
        function productAll(arr){
            return arr.reduce(reduceAll);
        }
