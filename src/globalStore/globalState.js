import { hookstate } from "@hookstate/core"

export const PAGE_STATE = hookstate({
    pageVisiblity:false
})

export const MOBILE_DETECTOR = hookstate({
    mobileDetector:false
})