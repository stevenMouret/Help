/**
 * Add class/classes to element.
 * @example
 * addClass(elem, 'your-class')
 * addClass(elem, ['your-class1', 'your-class2', 'your-class3'])
 *
 * @param {Node} el DOM Node
 * @param {String||Array} className class or list of classes to add
 */
export const addClass = (el, className) => {
    if (!el || !(el instanceof Element)) {
        throw new Error('addClass. Parameter `el` should be a DOM Object');
    }

    const classNames = flatten([className]);
    for (let i = 0; i < classNames.length; i++) {
        if (el.classList) {
            el.classList.add(classNames[i]); // IE 10+
        } else {
            el.className += ` ${classNames[i]}`; // IE 8+
        }
    }
};

/**
 * Remove element class/classes.
 *
 * @example
 * removeClass(elem, 'your-class')
 * removeClass(elem, ['your-class1', 'your-class2', 'your-class3'])
 *
 * @param {Node} el DOM Node
 * @param {String||Array} className class or list of classes to remove
 */

export const removeClass = (el, className) => {
    if (!el || !(el instanceof Element)) {
        throw new Error('removeClass. Parameter `el` should be a DOM Object');
    }

    const classNames = flatten([className]);
    for (let i = 0; i < classNames.length; i++) {
        if (el.classList) {
            el.classList.remove(classNames[i]); // IE 10+
        } else {
            el.className = el.className.replace(new RegExp(`(^|\\b)${classNames[i].split(' ')
                .join('|')}(\\b|$)`, 'gi'), ' '); // IE 8+
        }
    }
};

/**
 * Checks if element has className.
 *
 * @example
 * hasClass(elem, 'your-class')
 *
 * @param {Node} el DOM Node
 * @param {String} className class to check
 * @returns {bool} `true` or `false`
 */
export const hasClass = (el, className) => {
    if (el.classList) {
        return el.classList.contains(className); // IE 10+
    }
    return new RegExp(`(^| )${className}( |$)`, 'gi').test(el.className); // IE 8+ ?
};

/**
 * Add attributes list.
 *
 * @example
 * setAttributes(elem, {
 *   'role': 'button',
 *   'checked': 'true'
 * })
 *
 * @param {Node} node DOM Node
 * @param {Object} attrs attributes example `{'role':'button', 'aria-hidden': true}`
 */
export const setAttributes = (node, attrs) => {
    Object
        .keys(attrs)
        .forEach((attribute) => {
        node.setAttribute(attribute, attrs[attribute]);
});
};

/**
 * Remove attributes list from node.
 *
 * @example
 * removeAttributes(elem, ['role', 'aria-hidden', 'aria-controls'])
 *
 * @param {Node} node DOM Node
 * @param {Array} attrsArray attributes array `['role', 'aria-hidden']`
 */
export const removeAttributes = (node, attrsArray) => {
    attrsArray.forEach((attribute) => {
        node.removeAttribute(attribute);
});
};

/**
 * Return height contains elem + padding + margin + border.
 *
 * @example
 * outerHeight(elem)
 *
 * @param {node} el DOM node
 * @returns {Number} height element outer height
 */
export const outerHeight = (el) => {
    if (el === null) {
        return;
    }

    let height = el.offsetHeight;
    const style = getComputedStyle(el);

    height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
    return height;
};

/**
 * Return width contains elem + padding + margin + border.
 *
 * @example
 * outerWidth(elem)
 *
 * @param {node} el DOM node
 * @returns {Number} width element outer width
 */
export const outerWidth = (el) => {
    if (el === null) {
        return;
    }

    let width = el.offsetWidth;
    const style = getComputedStyle(el);

    width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
    return width;
};

/**
 * Get the next, previous or all siblings of an element
 * or retrieve siblings that match a given selector.
 * https://plainjs.com/javascript/traversing/get-siblings-of-an-element-40/
 *
 * @param  {Node} el DOM Node
 * @param {Function} filter
 * @returns {Array} siblings array
 */
export const getSiblings = (el, filter) => {
    const siblings = [];
    let elem = el.parentElement.firstElementChild;
    do {
        if (!filter || filter(elem)) {
            siblings.push(elem);
        }
    } while ((elem = elem.nextElementSibling) !== null);
    return siblings;
};

/**
 * Find ancestor by className, works like parents() method in jQuery.
 * http://jsfiddle.net/8RfbT/69/
 *
 * @param {Node} el DOM node
 * @param {String} cls parent class
 * @returns {Node} parent node
 */
export const findAncestor = (el, cls) => {
    let elem = el;
    while (!hasClass(elem, cls) && (elem = elem.parentNode)) ;
    return elem;
};

/**
 * Find ancestor by tagName
 *
 * @param {Node} el DOM node
 * @param {String} tagName
 * @returns {Node} parent node
 */
export const findAncestorByTag = (el, tagName) => {
    let elem = el;
    while (elem.tagName.toUpperCase() !== tagName.toUpperCase() && (elem = elem.parentNode)) ;
    return elem;
};

/**
 * Generate unique ID.
 *
 * @example
 * getUniqId()
 *
 * @returns {Number} unique number
 */
export const getUniqId = () => Math.random()
    .toString(36)
    .substr(2, 16);

/**
 * Set tabindex to all focusable elements.
 *
 * @example
 * setTabindex(elem, 1)
 * setTabindex(elem, 0)
 *
 * @param {Node} element DOM Node
 * @param {Number} index tabindex number
 */
export const setTabindex = (element, index) => {
    let elem;
    if (typeof element === 'string') {
        elem = document.querySelector(element);
    } else {
        elem = element;
    }
    const elemItems = elem.querySelectorAll('a, input, select, button');
    for (let i = 0; i < elemItems.length; i++) {
        elemItems[i].setAttribute('tabindex', parseInt(index, 10));
    }
};

/**
 * Inserting Node element after given element.
 *
 * @param {Node} newNode, new Node element to be inserted after refNode.
 * @param {Node} refNode, reference Node element for inserting.
 */
export const insertAfter = (newNode, refNode) => {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
};
