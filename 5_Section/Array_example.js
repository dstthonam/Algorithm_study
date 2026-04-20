
/** ================================================== */

// 행렬의 곱셈
function solution(arr1, arr2) {
    // 행렬 arr1, arr2의 행과 열의 수
    const a1 = arr1.length;
    const b1 = arr1[0].length;
    
    const a2 = arr2.length;
    const b2 = arr2[0].length;
    
    // 2차원 배열 초기화
    var answer = [];
    for(let i=0; i < a1; i++) {
        answer.push(new Array(b2).fill(0));
    }

    // arr1의 각 행과 arr2의 각 열에 대해
    for(let i=0; i < a1; i++) {
        for(let j=0; j < a2; j++) {
            // 두 행렬의 데이터를 곱해 결과 배열에 더해줌
            for(let k=0; k < b1; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][i];
            }
        }
    }

    return answer;
}



/** ================================================== */

// 게임 스테이지 실패율 구하기
function solution(N, stages) {
    const answer = []; // 실패율이 높은 스테이지를 내림차순대로 넣는 배열
    let total = stages.length;

    let challengers = new Array(N+2).fill(0);

    // 시간 복잡도 O(M + N log N)
    // i 스테이지까지 진행한 사람
    for (const s of stages) {
        challengers[s]++;
    }

    for (let i=0; i <= N; i++) {
        let failRate = total === 0 ? 0 : challengers[i] / total;
        answer.push([i, failRate]);

        total -= challengers[i];
    }

    /** 
    // 시간 복잡도 O(N x M)
    for(let i=1; i <= N; i++) {
        // i 스테이지까지 진행한 사람
        let cnt = stages.filter(v => v === i).length;
        
        // 실패율 구하기
        let failRate = (cnt === 0) ? 0 : cnt / total;

        answer.push([i, failRate]);
        
        // i 스테이지까지 진행한 사람의 수
        total -= cnt;
    }
    */

    // 실패율 기준으로 내림차순, 실패율이 동일할 때 스테이지 번호로 오름차순
    answer.sort((a, b) =>  {
        if(b[1] === a[1]) return a[0] - b[0];
        return b[1] - a[1];
    });

    return answer.map(v => v[0]);
}


/** ================================================== */

// 캐릭터가 특정 필드 안에서 움직인 길이
/**
function solution(dirs) {
    // 시간 복잡도 : O(N)
    let answer = 0; // 이동 거리
    let loc = [5, 5]; // 캐릭터의 현재 위치

    let len = dirs.length; // 버튼을 누른 횟수

    // 유효성 체크
    function locValid(loc) {
        return loc[0] >= 0 && loc[0] <= 10 && loc[1] >= 0 && loc[1] <= 10;
    }

    for (let i=0; i < len; i++) {
        let str = dirs[i];

        // 캐릭터 이동
        if(str == 'U') {
            loc[1]++; // 이동
            !locValid(loc) ? loc[1]-- : answer++; // 유효성 체크
        } else if(str == 'D') {
            loc[1]--;
            !locValid(loc) ? loc[1]++ : answer++;
        } else if(str == 'R') {
            loc[0]++;
            !locValid(loc) ? loc[0]-- : answer++;
        } else if(str == 'L') {
            loc[0]--;
            !locValid(loc) ? loc[0]++ : answer++; 
        }
    }

    return answer;
}
*/

// 캐릭터가 특정 필드 안에서 처음 걸어본 길의 길이
function solution(dirs) {
    // 시간 복잡도 : O(N)
    let x = 5, y = 5;
    let visited = new Set();

    const move = {
        U : [0, 1],
        D : [0, -1],
        R : [1, 0],
        L : [-1, 0]
    };
    
    for (let dir of dirs) {
        let [dx, dy] = move[dir];

        let nx = x + dx;
        let ny = y + dy;

        // 유효성 체크
        if (nx < 0 || nx > 10 || ny < 0 || ny > 10) continue;

        // 경로 저장(양방향)
        let path1 = `${x},${y}-${nx},${ny}`;
        let path2 = `${nx},${ny}-${x},${y}`;

        visited.add(path1);
        visited.add(path2);

        // 이동 확정
        x = nx;
        y = ny;
    }

    return visited.size / 2;
} 