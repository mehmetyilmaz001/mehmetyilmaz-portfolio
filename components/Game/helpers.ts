import { getRandomNumberBetween } from "../../helpers/MathHelper";
import { boxes } from "./constants";

export const cretaeRandomBoxIndex = () => {
    const randomIndex = getRandomNumberBetween(10, boxes.length);
    return boxes[randomIndex];
}