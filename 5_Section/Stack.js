
// 스택 관련 문제

/** ========================================== */
// 열린 괄호 판단하기

function solution(s) {
    let stack = [];
    let len = s.length;

    for(let i=0; i < len; i++) {
        if (s[i] == '(') {
            stack.push('(');
        }
        else {
            if(stack.length === 0) return false;
            else stack.pop();
        }
    }

    return stack.length === 0;

    // 스택 없이 열린 괄호 판단
    /** 
    let cnt = 0;

    for (let char of s) {
        if (char === '(') count++;
        else count--;

        if (count < 0) return false;
    }

    return count === 0 ;
    */
}

/** ========================================== */
// 10진수를 2진수로 변환하기
function solution(N) {
    let Decimal = '';

    (N % 2)


    return Decimal;
}


/** ========================================== */
