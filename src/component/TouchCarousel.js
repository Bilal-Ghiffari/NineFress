import React, {useState, useRef, useCallback, useLayoutEffect} from 'react';
import {addClass, removeClass} from 'Format/classNameModifier';

export default function TouchCarousel({children, refContainer}) {

    // variable Hooks
    const containerClientRect = refContainer.current.getBoundingClientRect();
    const refDragHandler = useRef(null);
    const [index, setIndex] = useState(0);
    const threshold = 100;
    const itemToShow = window.innerWidth < 767 ? 1 : 4;
    const DIRECTION_RIGHT = "DIRECTION_RIGHT";
    const DIRECTION_LEFT = "DIRECTION_LEFT";
    const positionInitial = useRef();
    const positionX1 = useRef();
    const positionX2 = useRef();
    const positionFinal = useRef();
    const isAllowShift = useRef(true);
    const cards = useRef();
    const cardCount = cards.current?.length || 0;
    const cardSize = cards.current?.[0]?.offsetWidth || 0;
    

    console.log(refDragHandler, "refdraghandler");
    console.log(positionInitial, "initila");
    console.log(positionX1, "X1")
    console.log(positionX2, "X2")
    console.log(cards, "cards")
    console.log(threshold, "thre")
    console.log(cardSize, "size")
    console.log(cardCount, "cardcout")
    console.log(isAllowShift, "isallowshit")

// mengatur position Index
const checkIndex = useCallback((e) => {
    if (e.propertyName === "left") {
        setTimeout(() => {
            removeClass(refDragHandler.current, "transition-all duration-200")
        }, 200)

        const isMobile = window.innerWidth < 767 ? 0 : 0;
        if (index <= 0) {
            refDragHandler.current.style.left = 0;
            setIndex(0)
        } else if (index >= cardCount - itemToShow){
            refDragHandler.current.style.left = `${-((cardCount - itemToShow + isMobile) * cardSize)}px`;
            setIndex(cardCount - itemToShow)
        } else if (index === cardCount || index === cardCount - 1){
            refDragHandler.current.style.left = `${(cardCount - 1) * cardSize}px`;
            setIndex(cardCount - 1);
        }

        isAllowShift.current = true;
    }
},
    [index, cardCount, cardSize, itemToShow]
)

// mengatur ketika bergeser setiap setiap item
const shiftItem = useCallback((direction) => {
    addClass(refDragHandler.current, "transition-all duration-200");

    if (isAllowShift.current) {
        if (direction === "DIRECTION_LEFT") {
            setIndex((prev) => prev + 1);
            refDragHandler.current.style.left = `${positionInitial.current - cardSize}px`;
        }else if (direction === "DIRECTION_RIGHT") {
            setIndex((prev) => prev - 1);
            refDragHandler.current.style.left = `${positionInitial.current + cardSize}px`;
        }
    }
    isAllowShift.current = false;
},
    [cardSize]
)

// ketika diusap / touch didesktop maupun mobile
const onDragMove = useCallback((e) => {
    e = e || window.event;
    e.preventDefault()

    if (e.type === "touchmove") {
        positionX2.current = positionX1.current - e.touches[0].clientX;
        positionX1.current = e.touches[0].clientX;
    } else {
        positionX2.current = positionX1.current - e.clientX;
        positionX1.current = e.clientX;
    }

    refDragHandler.current.style.left = `${refDragHandler.current.offsetLeft - positionX2.current}px`;
},
    [positionX1, positionX2],
)

// ketika diusap / ditouch mousenya dilepas
const onDragEnd = useCallback((e) => {
        e = e || window.event;
        e.preventDefault();

        positionFinal.current = refDragHandler.current.offsetLeft;

        if (positionFinal.current - positionInitial.current < -threshold) {
            shiftItem(DIRECTION_LEFT);
        } else if (positionFinal.current - positionInitial.current > threshold){
            shiftItem(DIRECTION_RIGHT);
        } else {
            refDragHandler.current.style.left = `${positionInitial.current}px`;
        }
        
        document.onmouseup = null;
        document.onmousemove = null;
},
    [shiftItem]
)

// ketika mulai di drag didesktop atau di touch mobile
const onDragStart = useCallback((e) => {
    e = e || window.event;
    e.preventDefault();

    positionInitial.current = refDragHandler.current.offsetLeft;
    if (e.type === "touchstart") {
        positionX1.current = e.touches[0].clientX;
    } else {
        positionX1.current = e.clientX;
        document.onmouseup = onDragEnd;
        document.onmousemove = onDragMove;
    }
},
    [onDragEnd, onDragMove]
)

// ketika move tidak bisa diClick atau diarahkan ke halaman lain
const onClick = useCallback((e) => {
    e = e || window.event;
    !isAllowShift.current && e.preventDefault();
},
    [],
)


// section Event
useLayoutEffect(() => {
    const refForwardDragHandler = refDragHandler.current;

    refForwardDragHandler.onmousedown = onDragStart;
    refForwardDragHandler.addEventListener("touchstart", onDragStart);
    refForwardDragHandler.addEventListener("touchend", onDragEnd);
    refForwardDragHandler.addEventListener("touchmove", onDragMove);
    refForwardDragHandler.addEventListener("click", onClick);
    refForwardDragHandler.addEventListener("transitionend", checkIndex);


    return () => {
        refForwardDragHandler.removeEventListener("touchstart", onDragStart);
        refForwardDragHandler.removeEventListener("touchend", onDragEnd);
        refForwardDragHandler.removeEventListener("touchmove", onDragMove);
        refForwardDragHandler.removeEventListener("click", onClick);
        refForwardDragHandler.removeEventListener("transitionend", checkIndex);
    }

}, [onDragStart, onDragEnd, onDragMove, onClick, checkIndex])


    useLayoutEffect(() => {
        if (refDragHandler.current) {
            cards.current = refDragHandler.current.getElementsByClassName("card")
        }
    },[])


    return (
        <div ref={refDragHandler} className="flex -mx-4 flex-row relative" style={{paddingLeft: containerClientRect.left - 16}}>
            {children}
        </div>
    )
}
