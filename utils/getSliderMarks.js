import { carDataMapping } from "./carDataMapping";

export function getSliderMarks(value, range) {
    let i = 0, marks = [];

    while(i !== value + range) {
        marks.push(i.toString());
        i += range;
    }

    return carDataMapping(marks);
}