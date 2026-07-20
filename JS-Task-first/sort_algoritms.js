export function getNewRandomList(length = 26, min = 0, max = 100) {
    if (min > max) {
        throw new Error("max have to be bigger then min");
    }

    return Array.from(
        { length },
        () => Math.floor(Math.random() * (max - min + 1)) + min);

}

export function bubbleSort(list) {
    const result = [...list];
    const L = list.length;

    if (L <= 1) return list;
    
    for(let i = 0; i < L - 1; i++) {
        for(let j = 0; j < L - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                let buffer = result[j];
                result[j] = result[j + 1];
                result[j + 1] = buffer;
            }
        }
    }

    return result;
}

export function selectionSort(list) {
    const result = [...list];
    const L = list.length;

    if (L <= 1) return list;

    for (let i = 0; i < L - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < L; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            [result[i], result[minIndex]] = [result[minIndex], result[i]]; //short replace
        }
    }


    return result;
}

export function insertionSort(list) {
    const result = [...list];
    const L = result.length;

    if (L <= 1) return list;

    for (let i = 1; i < L; i++) {
        const current = result[i];
        let j = i - 1;

        while (j >= 0 && result[j] > current) {
            result[j + 1] = result[j];
            j--;
        }

        result[j + 1] = current;
    }

    return result;
}
