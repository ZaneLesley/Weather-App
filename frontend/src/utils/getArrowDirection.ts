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
    // This makes it so it seems like the arrow is following the wind path, and not just the direction that the wind
    // Is currently blowing from.
    const flippedDirection = (direction + 180) % 360;
    if (flippedDirection < 0 || flippedDirection >= 360) {
        throw new Error('Direction must be between 0 and 360.');
    }

    if (flippedDirection >= 337.5 || flippedDirection < 22.5) {
        return mdiArrowUpThin
    }
    if (flippedDirection >= 22.5 && flippedDirection < 67.5) {
        return mdiArrowTopRightThin;
    }
    if (flippedDirection >= 67.5 && flippedDirection < 112.5) {
        return mdiArrowRightThin;
    }
    if (flippedDirection >= 112.5 && flippedDirection < 157.5) {
        return mdiArrowBottomRightThin;
    }
    if (flippedDirection >= 157.5 && flippedDirection < 202.5) {
        return mdiArrowDownThin;
    }
    if (flippedDirection >= 202.5 && flippedDirection < 247.5) {
        return mdiArrowBottomLeftThin;
    }
    if (flippedDirection >= 247.5 && flippedDirection < 292.5) {
        return mdiArrowLeftThin;
    }
    if (flippedDirection >= 292.5 && flippedDirection < 337.5) {
        return mdiArrowTopLeftThin;
    }

    return ''
}
