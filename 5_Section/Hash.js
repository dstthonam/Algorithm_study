
// Hash 관련 문제

/** ========================================== */
// 카드 뭉치

// 풀이 1
function countSort(arr, k) {
    const hashtable = new Array(k+1).fill(0);
    
    for (const num of arr) {
        // 현재 num의 값이 k 이하일 때만 처리
        if (num <= k) {
            // 현재 num의 값을 인덱스로 해당 인덱스의 해시 테이블 값을 1로 설정
            hashtable[num] = 1;
        }
    }
    return hashtable;
}

// 시간 복잡도 O(N + K)
function solution(arr, target) {
    const hashtable = countSort(arr, target);

    for (const num of arr) {
        const complement = target - num;
        //target에서 현재 num을 뺀 값이 해시 테이블에 있는지 확인
        if (complement !== num && complement >= 0
                && complement <= target && hashtable[complement] === 1) {

            return true;
        }
    }
    
    return false;
}

// 풀이 2
// 시간 복잡도 O(N)
function solution(arr, target) {
    const set = new Set();

    for (const num of arr) {
        if (set.has(target - num)) return true;
        set.add(num);
    }

    return false;
}







/** ========================================== */
// 문자열 해싱을 이용한 검색 함수 만들기

// polynomial hash를 구현한 부분
function polynomialHash(str) {
    const p = 31; // 소수
    const m = 1_000_000_007; // 버킷 크기
    let hashValue = 0;

    for (let i=0; i < str.length; i++) {
        hashValue = (hashValue * p + str.charCodeAt(i)) % m;
    }

    return hashValue;
}

// 풀이 1
// 시간 복잡도 O(N * M)
function solution(stringList, queryList) {
    // stringList 각 문자열에 대한 다항 해시값을 계산
    const hashList = stringList.map((str) => polynomialHash(str));

    // queryList 각 문자열이 stringList에 있는지 확인
    const result = [];

    for (const query of queryList) {
        const queryHash = polynomialHash(query);

        if (hashList.includes(queryHash)) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
}

// 풀이 2
// 시간 복잡도 O(N + M)
function solution(stringList, queryList) {
    const result = [];

    // Set에 해시값을 입력
    const hashSet = new Set(stringList.map((str) => polynomialHash(str)));

    // queryList 각 문자열이 stringList에 있는지 확인
    for (const query of queryList) {
        const queryHash = polynomialHash(query);
        result.push(hashSet.has(queryHash));
    }

    return result;
}

// 풀이 3
// 시간 복잡도 O(N + M)
function solution(stringList, queryList) {
    const map = new Map();

    // Hash 값으로 map에 담기
    for (const str of stringList) {
        const h = polynomialHash(str);
        if (!map.has(h)) map.set(h, []);
        // Hash 값이 중복이면 배열로 값을 넣기
        map.get(h).push(str);
    }

    const result = [];

    for (const query of queryList) {
        const h = polynomialHash(query);

        if (!map.has(h)) {
            result.push(false);
        } else {
            result.push(map.get(h).includes(query));
        }
    }

    return result;
}





/** ========================================== */
// 완주 하지 못한 선수 구하기

// 풀이 1
// 시간 복잡도 O(N)
function solution(participant, completion) {
    //해시 테이블 생성
    const obj = {};

    // 참가자들의 이름을 해시 테이블에 추가
    for (const s of participant) {
        if (obj[p]) {
            obj[p] += 1;
        } else {
            obj[p] = 1;
        }
    }

    // 완주한 선수들의 이름을 키로 하는 값을 1 감소
    for (const c of completion) {
        obj[c] -= 1;
    }

    // 해시 테이블에 남아 있는 선수가 완주하지 못한 선수
    for (const k of obj) {
        if(obj[k] > 0) return k;
    }
}





/** ========================================== */
// 할인 행사

// 풀이 1
// 시간 복잡도 O(N)
function solution(want, number, discount) {
    let result = 0;
    
    // 원하는 제품 Map
    const wantMap = new Map();
    
    for (let i=0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }
    
    // 10일씩 검사
    for (let i=0; i <= discount.length - 10; i++) {
        const temp = new Map(wantMap);

        for (let j=0; j < 10; j++) {
            const item = discount[i + j];

            if (!temp.has(item)) break;

            temp.set(item, temp.get(item) - 1);

            if (temp.get(item) < 0) break;
        }

        if([...temp.values()].every(v => v === 0)) {
            result++;
        }
    }

    return result;
}


// 풀이 2
// 시간 복잡도 O(N * W)
// 두 오브젝트가 동일한지 비교
function isShallowEqual(object1, object2) {
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);

    if (objKeys1.length !== objKeys2.length) return false;

    for (const key of objKeys1) {
        if (object1[key] !== object2[key]) return false;
    }

    return true;
}

function solution(want, number, discount) {
    const wantObj = {};

    for (let i=0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }
    
    // 총 일수 계산을 위한 변수 초기화
    let answer = 0;

    for (let i=0; i <= discount.length - 10; i++) {
        const discount10d = {};

        for (let j = i; j < i + 10; j++) {
            if (discount[j] in wantObj) {
            //if (wantObj.hasOwnProperty(discount[j]))
                discount10d[discount[j]] = (discount10d[discount[j]] || 0) + 1;
            }
        }

        if (isShallowEqual(discount10d, wantObj)) {
            answer++;
        }
    }

    return answer;
}





/** ========================================== */
// 오픈 채팅방

// 풀이 1
// 시간 복잡도 O(N)
function solution(record) {
    const result = [];
    const chkUser = []; // 최종 닉네임 확인용
    let cmd;
    
    for (s in record) {
        cmd = record[s].split(" ");
        if (cmd[0] != "Leave") {
            chkUser[cmd[1]] = cmd[2];
        }
    }
    
    for (s in record) {
        cmd = record[s].split(" ");

        if (cmd[0] == "Enter") {
            result.push(chkUser[cmd[1]] + "님이 들어왔습니다.");
        } else if (cmd[0] === "Leave") {
            result.push(chkUser[cmd[1]] + "님이 나갔습니다.");
        }
        
    }
    
    return result;
}

// 풀이 2
// 시간 복잡도 O(N)
function solution(record) {
    const result = [];
    const userMap = {};

    // 닉네임 최신 상태 저장
    for (const r of record) {
        const [action, uid, name] = r.split(" ");

        if (action !== "Leave") {
            userMap[uid] = name;
        }
    }

    // 결과 생성
    for (const r of record) {
        const [action, uid] = r.split(" ");

        if (action === "Enter") {
            result.push(`${userMap[uid]}님이 들어왔습니다.`);
        } else if (action === "Leave") {
            result.push(`${userMap[uid]}님이 나갔습니다.`);
        }
    }

    return result;
}






/** ========================================== */
// 베스트 앨범

// 풀이 1
// 시간 복잡도 O(N * log N)
function solution(record) {
    const result = [];
    const chkUser = []; // 최종 닉네임 확인용
    let cmd;
    
    for (s in record) {
        cmd = record[s].split(" ");
        if (cmd[0] != "Leave") {
            chkUser[cmd[1]] = cmd[2];
        }
    }
    
    for (s in record) {
        cmd = record[s].split(" ");

        if (cmd[0] == "Enter") {
            result.push(chkUser[cmd[1]] + "님이 들어왔습니다.");
        } else if (cmd[0] === "Leave") {
            result.push(chkUser[cmd[1]] + "님이 나갔습니다.");
        }
        
    }
    
    return result;
}

