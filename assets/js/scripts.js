var a = '';
        var b;
        var sign = '';

        function cl(x) {
            document.getElementById("display").value = x;
            a = '';
        }

        /*
        function add() {
            let a1 = document.getElementById("display").value;
            let x = Number(a1);
            let y = number(input(x));
            document.getElementById("display").value = x + x;
            
        }*/

        function input(x) {
            a += x; 
            document.getElementById("display").value = a;            
        }

        function add() {
            sign = '+';
            var yy = document.getElementById("display").value;
            b = Number(yy);
            cl('0');
        }

        function mine(){
            sign = '-';
            var yy = document.getElementById("display").value;
            b = Number(yy);
            cl('0');
        }

        function multiply() {
            sign = '*';
            var yy = document.getElementById("display").value;
            b = Number(yy);
            cl('0');
        }

        function divide() {
            sign = '/';
            var yy = document.getElementById("display").value;
            b = Number(yy);
            cl('0');
        }
        function pourcent() {
            sign = '%';
            var a12 = document.getElementById('display').value;
            var a13 = Number(a12);
            document.getElementById('display').value = a13 / 100;
        }

        function egal() {
            var xx = document.getElementById('display').value;
            a = '';
            var r = '+';
            var c = Number(xx);
            switch (sign) {
                case '+':
                        document.getElementById("display").value = b + c ;
                    break;
                case '-':
                        document.getElementById("display").value = b - c ;
                    break;
                case '*':
                        document.getElementById("display").value = b * c ;
                    break;
                case '/':
                        document.getElementById("display").value = b / c ;
                    break;
            }
        }
