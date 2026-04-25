
// Queue 관련 문제

/** ========================================== */
// 요세푸스 문제

// 풀이 1
// 시간 복잡도 O(N**2)
function solution(n, k) {
    let que = Array.from({length : n}, (_, i) => i + 1);
    let cur = 0;

    while(que.length > 1) {
        // que에서 현재 선택된 cur에서 k번째 제거
        cur = (cur + k  1) % que.length;
        // cur를 제거된 다음으로 변경
        que.splice(cur, 1);
    }

    return que[0];
}

// 풀이 2 - 수학 공식
// 시간 복잡도 O(N)
function solution(n, k) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result = (result + k) % i;
    }

    return result + 1;
}

// 풀이 3
// 시간 복잡도 O(N x K)
function solution(n, k) {
    // prev[i]: i의 이전 노드, next[i]: i의 다음 노드
    const prev = Array.from({ length: n }, (_, i) => (i === 0 ? n - 1 : i - 1));
    const next = Array.from({ length: n }, (_, i) => (i === n - 1 ? 0 : i + 1));

    let cur = 0;        // 현재 위치 (0-index)
    let remain = n;     // 남은 사람 수

    while (remain > 1) {
        // k-1번 이동해서 제거 대상 찾기
        for (let step = 0; step < k - 1; step++) {
            cur = next[cur];
        }

        // cur 제거
        const p = prev[cur];
        const q = next[cur];

        next[p] = q;
        prev[q] = p;

        // 다음 시작 위치
        cur = q;
        remain--;
    }

    // 0-index → 문제 요구에 따라 1-index로 변환
    return cur + 1;
}

// 풀이 4
// 시간 복잡도 O(N x K)
class Que {
    items = [];
    front = 0;
    rear = 0;

    push(item) {
        this.items[this.rear++] = item;
    }

    size() {
        return this.rear - this.front;
    }

    pop() { // pop 기능 X, shift 기능 O
        return this.items[this.front++];
    }
}

function solution(n, k) {
    const que = new Que();

    for (let i = 1; i <= n; i++) {
        que.push(i);
    }

    while (que.size() > 1) {
        let step = (k - 1) % que.size();

        for (let i=0; i < step; i++) {
            que.push(que.pop());
        }
        que.pop();
    }

    return que.pop();
}


/** ========================================== */
// 기능 개발
class que {
    stack = [];
    first = 0;
    end = 0;

    push(s) {
        this.stack[this.stack.length - 1] = s;
    }

    len() {
        return this.first - this.end ;
    }

    pop() {
        return this.stack(this.first++);
    }
}


function solution(progresses, speeds) {
    // 시간 복잡도 O(N x K)
    let result = [];

    while(progresses.length > 0) { 
        for(let i=0; i < progresses.length; i++) {
            progresses[i] = progresses[i] + speeds[i];

        }

        if(progresses[i])        
    }


    return result;
}


/** ========================================== */
// 표 편집(배열 사용)

function solution(n, k) {
    // 시간 복잡도 O(N x K)



    return result;
}

