
// 스택 관련 문제2

/** ========================================== */
// 크레인 인형 뽑기 게임

// 풀이 1
// 시간 복잡도 : O(N * M)
function solution(board, moves) {    
    let answer = 0;
    const stack = [];

    for(const n of moves) {
        for(let i=0; i < board.length; i++) {
            // 뽑을 열에서 첫번째 숫자를 찾아서 pop()처럼 값을 빼서 stack에 넣기
            if(board[i][n-1] > 0) {
                stack.push(board[i][n-1]);
                board[i][n-1] = 0;

                if(stack.length > 1 
                    && stack[stack.length - 1] === stack[stack.length - 2]) {
                    stack.pop();
                    stack.pop();
                    answer += 2;
                }

                break;
            }
        }
    }

    return answer;
}

// 풀이 2
// 시간 복잡도 : O(N**2 + M)
function solution(board, moves) {
    let answer = 0;
    const stack = [];

    // 열별 스택 생성
    const cols = Array.from({ length: board.length }, () => []);

    for (let j = 0; j < board.length; j++) {
        for (let i = board.length - 1; i >= 0; i--) {
            if (board[i][j] !== 0) {
                cols[j].push(board[i][j]);
            }
        }
    }

    // moves 처리 (O(M))
    for (let move of moves) {
        const col = cols[move - 1];

        if (col.length === 0) continue;

        const doll = col.pop();

        if (stack.length > 0 && stack[stack.length - 1] === doll) {
            stack.pop();
            answer += 2;
        } else {
            stack.push(doll);
        }
    }

    return answer;
}

//const lanes = [...Array(board[0].length)].map(() => []);
//const cols = Array.from({ length: board.length }, () => []);




/** ========================================== */
// 표 편집(배열 사용)

function solution(n, k, cmd) {
    // 시간 복잡도 O(N x M)
    let result = '';
    let stack = [];
    let del_stack = [];

    // 테스트를 위한 임시 표 만들기
    for(let i=0; i < n; i++) {
        stack[i] = i + 1;
    }

    for(let j=0; j < cmd.length; j++) {
        if (cmd[j][0] === 'D') {
            k += Number(cmd[j].split(' ')[1]);

        } else if (cmd[j][0] === 'U') {
            k -= Number(cmd[j].split(' ')[1]);

        } else if (cmd[j].substr(0) === 'C') {
            // 삭제한 행 del_stack에 넣기
            del_stack.push(stack[k-1]);
            stack.splice(k - 1, 1);

            // 선택 행 변경
            if (k === stack.length) k--;
            //else k++;

        } else if (cmd[j].substr(0) === 'Z') {
            let idx = del_stack.pop();

            stack.splice(idx - 1, 1, idx); // 되돌리기
        }
    }

    for(i=0; i < stack.length; i++) {
        if (stack[i] == i + 1) {
            result += 'O';
        } else {
            result += 'X';
        }
    }

    return result;
}

// 표 편집(배열 미사용)

function solution(n, k, cmd) {
    // 시간 복잡도 O(N x M)
    let prev = Array(n).fill(0).map((_, i) => i - 1);
    let next = Array(n).fill(0).map((_, i) => i + 1);
    next[n - 1] = -1;

    let removed = [];
    let cur = k;

    for (let c of cmd) {
        let [op, x] = c.split(' ');

        if (op === 'U') {
            for (let i = 0; i < x; i++) cur = prev[cur];
        } else if (op === 'D') {
            for (let i = 0; i < x; i++) cur = next[cur];
        } else if (op === 'C') {
            removed.push(cur);

            if (prev[cur] !== -1) next[prev[cur]] = next[cur];
            if (next[cur] !== -1) prev[next[cur]] = prev[cur];

            cur = next[cur] !== -1 ? next[cur] : prev[cur];
        } else if (op === 'Z') {
            let r = removed.pop();

            if (prev[r] !== -1) next[prev[r]] = r;
            if (next[r] !== -1) prev[next[r]] = r;
        }
    }

    let result = Array(n).fill('O');
    for (let r of removed) result[r] = 'X';

    return result.join('');
}



/** ========================================== */




