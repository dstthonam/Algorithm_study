
/** ========================================== */
// 트리 순회 구현

// 풀이 1
// 전위 순회
function preorder(nodes, idx) {
    // idx가 노드의 배열 길이보다 작을 때
    if (idx < nodes.length) {
        // 루트 노드를 출력하고 왼쪽, 오른쪽 순서로 서브트리를 재귀 호출하여 출력 순서대로 이음
        let ret = `${nodes[idx]} `;
        ret += preorder(nodes, idx * 2 + 1);
        ret += preorder(nodes, idx * 2 + 2);

        return ret;
    }

    // idx >= nodes.length일 때 빈 문자열 반환
    return "";
}

// 중위 순회
function inorder(nodes, idx) {
    // idx가 노드 배열의 길이보다 작을 때
    if (idx < nodes.length) {
        // 왼쪽 서브 트리를 먼저 재귀 호출하고 출력 순서대로 이음
        let ret = inorder(nodes, idx * 2 + 1);
        // 루트 노드를 출력한 다음, 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이음
        ret += `${nodes[idx]} `;
        ret += inorder(nodes, idx * 2 + 2);

        return ret;
    }

    // idx >= nodes.length일 때 빈 문자열 반환
    return "";
}

// 후위 순위
function postorder(nodes, idx) {
    // idx가 노드 배열의 길이보다 작을 때
    if (idx < nodes.length) {
        // 왼쪽 서브 트리를 먼저 재귀 호출하고 출력 순서대로 이음
        let ret = postorder(nodes, idx * 2 + 1);
        ret += postorder(nodes, idx * 2 + 2);
        // 루트 노드를 출력
        ret += `${nodes[idx]} `;

        return ret;
    }

    // idx >= nodes.length일 때 빈 문자열 반환
    return "";
}

// 시간 복잡도 O(N)
function solution(nodes) {
    return [
        // 마지막 공백 제거
        preorder(nodes, 0).slice(0, -1),
        inorder(nodes, 0).slice(0, -1),
        postorder(nodes, 0).slice(0, -1)
    ];
}



// 풀이 2(배열로 트리 구하기)
// 전위 순회
function preorder(nodes, idx, result) {
    if (idx < nodes.length) {
        result.push(nodes[idx]);
        preorder(nodes, idx * 2 + 1, result);
        preorder(nodes, idx * 2 + 2, result);
    }
}

// 중위 순회
function inorder(nodes, idx, result) {
    if (idx < nodes.length) {
        inorder(nodes, idx * 2 + 1, result);
        result.push(nodes[idx]);
        inorder(nodes, idx * 2 + 2, result);
    }
}

// 후위 순회
function postorder(nodes, idx, result) {
    if (idx < nodes.length) {
        postorder(nodes, idx * 2 + 1, result);
        postorder(nodes, idx * 2 + 2, result);
        result.push(nodes[idx]);
    }
}

function solution(nodes) {
    const pre = [];
    const ino = [];
    const post = [];

    preorder(nodes, 0, pre);
    inorder(nodes, 0, ino);
    postorder(nodes, 0, post);

    return [
        pre.join(''),
        ino.join(''),
        post.join('')
    ];
}





/** ========================================== */
// 이진 탐색 트리 구현

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(key) {
        if (!this.root) {
            this.root = new Node(key);
            return;
        }

        let curr = this.root;

        while (true) {
            if (key < curr.key) {
                if (curr.left) {
                    curr = curr.left;
                } else {
                    curr.left = new Node(key);
                    break;
                }
            } else {
                if (curr.right) {
                    curr = curr.right;
                } else {
                    curr.right = new Node(key);
                    break;
                }
            }
        }
    }

    search(key) {
        let curr = this.root;

        while (curr) {
            if (curr.key === key) return true;

            if (key < curr.key) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }

        return false;
    }
}


// 풀이 1
// 시간 복잡도 (평균 : O(N log N + M log N) // 최악 : O(N^2))
function solution(list, searchList) {
    const bst = new BST();

    for (const key of list) {
        bst.insert(key);
    }

    let answer = [];

    for(const s of searchList) {
        answer.push(bst.search(s));
    }

    return answer;
}





/** ========================================== */
// 

// 풀이 1
// 시간 복잡도 O(N)
function solution(id_list, report, k) {
    
    return ;
}






/** ========================================== */
// 

// 풀이 1
// 시간 복잡도 O(N)
function solution(id_list, report, k) {
    
    return ;
}





/** ========================================== */
// 

// 풀이 1
// 시간 복잡도 O(N)
function solution(id_list, report, k) {
    
    return ;
}

