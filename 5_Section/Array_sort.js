
// 배열 정렬 1
function solution(arr) {
    // 오름차순 정렬
    arr.sort((a, b) => a - b);

    // 내림차순 정렬
    //arr.sort((a, b) => b - a);
    return arr;
}

// 배열 정렬 2
// 버블 정렬을 활용한 방법
function bubbleSort(arr) {
    const n = arr.length;

    for(let i=0; i < n; i++) {
        for(let j=0; j < n - i - 1; j++) {
            if (arr[j+1] < arr[j]) {
                const tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}


// 배열 정렬 3 - 중복 값 제거
function solution(arr) {
    const uniqueArr = [...new Set(arr)]; // 중복 값 제거
    uniqueArr.sort((a, b) => b - a); // 내림차순 정렬

    return uniqueArr;
}


// 배열 정렬 4 - 배열 중 2개 뽑아서 더하기(중복 제거)
function solution(arr) {
    var sortArr = [];
    
    for (let i=0; i < arr.length; i++) {
        for (let j=0; j < i; j++) {
            sortArr.push(arr[i] + arr[j]);
        }
    }

    // 중복 제거, 오름차순 정렬
    const sortSetArr = [...new Set(sortArr)].sort((a, b) => a - b);

    return sortSetArr;
}



// 수포자들의 문제 찍을 때 순위 구하기
function solution(arr) {
    const patterns = [
        [1, 2, 3, 4, 5], // A학생 찍는 패턴
        [2, 1, 2, 3, 2, 4, 2, 5], // B학생 찍는 패턴
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // C학생 찍는 패턴
    ];

    // 점수를 저장할 배열
    score = [0, 0, 0];
    
    // 각 학생의 패턴의 점수 넣기
    for (const [i, answer] of arr.entries()) {
        for (const [j, pattern] of patterns.entries()) {
            if (answer === pattern[i % pattern.length]) {
                score[j]++;
            }
        }
    }
    
    // 가장 높은 점수 확인
    const maxScore = Math.max(...score);

    // 가장 높은 점수를 받은 학생의 이름을 배열에 담기
    const highestScores = [];
    for (let i=0; i < score.length; i++) {
        if (score[i] === maxScore) {
            highestScores.push(i + 1);
        }
    }

    return highestScores;
}