import { getNewRandomList, bubbleSort } from "./sort_algoritms.js";

const listField = document.querySelector("#generated-list");
const generateButton = document.querySelector("#generate-list");

const bubbleSortField = document.querySelector("#bs-list");
const bubbleSortButton = document.querySelector("#bs-bttn");

const selectionSortField = document.querySelector("#ss-list");
const selectionSortButton = document.querySelector("#ss-bttn");

const insertionSortField = document.querySelector("#is-list");
const insertionSortButton = document.querySelector("#is-bttn");



let currentList = [];

function generateList() {
    currentList = getNewRandomList(26, 0, 100);
    listField.textContent = currentList.join(", ");
}


generateButton.addEventListener("click", generateList);

bubbleSortButton.addEventListener("click", () => {
    bubbleSortField.textContent = bubbleSort(currentList).join(", ");}
)

selectionSortButton.addEventListener("click", () => {
    selectionSortField.textContent = selectionSort(currentList).join(", ");}
)

insertionSortButton.addEventListener("click", () => {
    insertionSortField.textContent = insertionSort(currentList).join(", ");}
)

generateList();


