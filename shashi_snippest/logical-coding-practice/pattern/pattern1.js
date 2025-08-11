    //         1
    //     1   2   3
    // 1   2   3   4   5



    function printPattern(num) {
        let c = 10;
        for (let i = 1; i <= num; i++) {
            for ( j = 1; j < c / 2 - i; j++) {
                console.log(" ");
            }
            
            for( let k = 1; k <= 2 * i - 1; k++) {
                console.log(k)
            }
        }
    }

    printPattern(3)     // not working properly