export const OPEN_HAMBURGER = "OPEN_HAMBURGER";
export const CLOSE_HAMBURGER = "CLOSE_HAMBURGER";

export const openHamburger = () => {
    return {
        type: OPEN_HAMBURGER
    }
}

export const closeHamburger = () => {
    return {
        type: CLOSE_HAMBURGER
    }
}