
// 스택 관련 문제

/** ========================================== */
// 열린 괄호 판단하기

function solution(s) {
    // 시간 복잡도 O(log N)
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
    // 시간 복잡도 O(log N)
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
// 시간 복잡도 O(log N)
function solution(decimal) {
    let stack = [];

    while(decimal > 0) {
        stack.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }

    let binary = "";
    
    while(stack.length > 0) {
        binary += stack.pop();
    }

    return binary;
}


/** ========================================== */
// 괄호 회전하기
// 시간 복잡도 : O(N**2)
function solution(s) {
    let result = 0;
    let len = s.length;

    for(let i=0; i <= s.length; i++) {
        let stack = [];
        let isCorrect = true;

        for(let j=0; j < len; j++) {
            // 좌측으로 이동한다고 가정했을 때 인덱스로 위치 재정렬
            const c = s[(i+j) % len];

            if(c == '(' || c == '{' || str == '[') {
                stack.push(c);
            } else {
                if(stack.length === 0) {
                    isCorrect = false;
                    break;
                }

                // 스택 안에서 제일 마지막 문자
                const top = stack[stack.length - 1];

                // 괄호 짝 맞추기
                if(c == ']' && top == '[') {
                    stack.pop();
                } else if (c == ')' && top == '(') {
                    stack.pop();
                } else if (c == '}' && top == '{') {
                    stack.pop();
                } else {
                    // 짝이 맞지 않을 때 다음 스탭으로 진행
                    isCorrect = false;
                    break;
                }
            }
        }
        
        if(isCorrect && stack.length === 0) {
            result++;
        }
    }

    return result;
}


/** ========================================== */
// 짝지어 제거하기
// 시간 복잡도 : O(N)

function solution(s) {
    let stack = [];
    let len = s.length;

    for(const str of s) {
        // 문자열이 없는지 확인
        if(len === 0) {
            result = 1; 
            break;
        }

        if(stack.length > 0 && stack[stack.length - 1] === str) {
            // 현재 문자와 이전 문자가 동일할 때 스택에서 문자 제거
            stack.pop();
        }
        else {
            stack.push(str);
        }
    }

    return stack.length === 0 ? 1 : 0;
}




/** ========================================== */
// 주식 가격
// 시간 복잡도 : O(N)

function solution(prices) {
    const len = prices.length;
    let answer = new Array(len).fill(0); // 가격이 떨어지지 않은 기간을 저장할 배열
    
    // 스택을 사용해 이전 가격과 현재 가격 비교
    const stack = [0]; // 스택 초기화
    for(let i=1; i < len; i++) {
        while(stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            // 가격이 떨어졌으니 이전 가격의 기간을 계산
            const j = stack.pop();
            answer[j] = i - j;
        }

        stack.push(i);
    }

    // 스택에 남아 있는 가격들은 가격이 떨어지지 않은 경우
    while(stack.length > 0) {
        const j = stack.pop();
        answer[j] = len - 1 - j;
    }

    return answer;
}
