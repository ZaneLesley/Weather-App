import {
    mdiArrowBottomLeftThin,
    mdiArrowBottomRightThin,
    mdiArrowDownThin,
    mdiArrowLeftThin,
    mdiArrowRightThin,
    mdiArrowTopLeftThin,
    mdiArrowTopRightThin,
    mdiArrowUpThin
} from "@mdi/js";


export default function getArrowDirection(direction: number): string {
    if (direction < 0 || direction >= 360) {
        throw new Error('Direction must be between 0 and 360.');
    }

    if (direction >= 337.5 || direction < 22.5) {
        return mdiArrowUpThin
    }
    if (direction >= 22.5 && direction < 67.5) {
        return mdiArrowTopRightThin;
    }
    if (direction >= 67.5 && direction < 112.5) {
        return mdiArrowRightThin;
    }
    if (direction >= 112.5 && direction < 157.5) {
        return mdiArrowBottomRightThin;
    }
    if (direction >= 157.5 && direction < 202.5) {
        return mdiArrowDownThin;
    }
    if (direction >= 202.5 && direction < 247.5) {
        return mdiArrowBottomLeftThin;
    }
    if (direction >= 247.5 && direction < 292.5) {
        return mdiArrowLeftThin;
    }
    if (direction >= 292.5 && direction < 337.5) {
        return mdiArrowTopLeftThin;
    }

    return ''
}
